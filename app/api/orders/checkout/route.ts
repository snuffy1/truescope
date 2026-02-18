import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";
import PricingPlan from "@/models/PricingPlan";
import stripe from "@/lib/stripe";
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      planIds,
      customerEmail,
      customerName,
      customerPhone,
      billingAddress,
    } = body;

    // Validation
    if (!planIds || !Array.isArray(planIds) || planIds.length === 0) {
      return NextResponse.json(
        { success: false, message: "At least one pricing plan ID is required" },
        { status: 400 },
      );
    }

    if (!customerEmail || !customerName) {
      return NextResponse.json(
        { success: false, message: "Customer email and name are required" },
        { status: 400 },
      );
    }

    // Validate and convert plan IDs to ObjectIds
    const validObjectIds = planIds.filter((id) =>
      mongoose.Types.ObjectId.isValid(id),
    );

    if (validObjectIds.length === 0) {
      return NextResponse.json(
        { success: false, message: "Invalid plan ID format" },
        { status: 400 },
      );
    }

    // Fetch pricing plans from database
    const pricingPlans = await PricingPlan.find({
      _id: { $in: validObjectIds },
      isActive: true,
    });

    if (pricingPlans.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message:
            "No valid pricing plans found. Please make sure the plans exist in the database.",
        },
        { status: 404 },
      );
    }

    if (pricingPlans.length !== planIds.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Some pricing plans are invalid or inactive",
        },
        { status: 400 },
      );
    }

    // Build order items from pricing plans
    const items = pricingPlans.map((plan) => ({
      pricingPlanId: plan._id,
      planId: plan.planId,
      name: plan.name,
      slug: plan.slug,
      quantity: 1,
      price: plan.price,
      isMonthly: plan.isMonthly,
      timeframe: plan.timeframe,
    }));

    // Calculate totals
    const subtotal = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    const tax = subtotal * 0.1; // 10% tax - adjust as needed
    const total = subtotal + tax;

    // Generate order number
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Create order in database
    const order = await Order.create({
      orderNumber,
      customerEmail,
      customerName,
      customerPhone,
      items,
      subtotal,
      tax,
      total,
      status: "pending",
      paymentStatus: "pending",
      paymentMethod: "stripe",
      billingAddress,
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: pricingPlans.map((plan) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: plan.name,
            description: plan.description,
            metadata: {
              planId: plan.planId,
              category: plan.category,
            },
          },
          unit_amount: Math.round(plan.price * 100), // Convert to cents
          ...(plan.isMonthly && {
            recurring: {
              interval: "month",
              interval_count: 1,
            },
          }),
        },
        quantity: 1,
      })),
      mode: pricingPlans.some((p) => p.isMonthly) ? "subscription" : "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/payment/success?session_id={CHECKOUT_SESSION_ID}&order_id=${order._id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/payment/failed?session_id={CHECKOUT_SESSION_ID}&order_id=${order._id}`,
      customer_email: customerEmail,
      metadata: {
        orderId: order._id.toString(),
        orderNumber,
        customerName,
      },
      // Enable automatic email receipts from Stripe
      payment_intent_data: pricingPlans.some((p) => !p.isMonthly)
        ? {
            receipt_email: customerEmail,
            description: `Order ${orderNumber} - ${customerName}`,
            metadata: {
              orderId: order._id.toString(),
              orderNumber,
              customerName,
            },
          }
        : undefined,
      // For subscriptions, enable email notifications
      subscription_data: pricingPlans.some((p) => p.isMonthly)
        ? {
            description: `Subscription - Order ${orderNumber}`,
            metadata: {
              orderId: order._id.toString(),
              orderNumber,
              customerName,
            },
          }
        : undefined,
      // Enable Stripe's customer email notifications
      customer_creation: "always", // Create a Stripe customer for email receipts
      // Enable automatic tax calculation (optional)
      // automatic_tax: { enabled: true },
    });

    // Update order with Stripe session ID
    order.stripeSessionId = session.id;
    await order.save();

    return NextResponse.json(
      {
        success: true,
        message: "Checkout session created",
        data: {
          sessionId: session.id,
          sessionUrl: session.url,
          orderId: order._id,
          orderNumber: order.orderNumber,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Create checkout session error:", error);

    // More detailed error message
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
        error:
          process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 },
    );
  }
}
