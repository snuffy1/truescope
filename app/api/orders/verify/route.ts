import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";
import stripe from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { sessionId } = body;

    if (!sessionId) {
      return NextResponse.json(
        { success: false, message: "Session ID is required" },
        { status: 400 },
      );
    }

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Session not found" },
        { status: 404 },
      );
    }

    // Get the order from metadata
    const orderId = session.metadata?.orderId;

    if (!orderId) {
      return NextResponse.json(
        { success: false, message: "Order ID not found in session" },
        { status: 404 },
      );
    }

    // Update order based on payment status
    const order = await Order.findById(orderId);

    if (!order) {
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 },
      );
    }

    if (session.payment_status === "paid") {
      order.paymentStatus = "paid";
      order.status = "completed";
      order.stripePaymentIntentId = session.payment_intent as string;
    } else {
      order.paymentStatus = "failed";
      order.status = "failed";
    }

    await order.save();

    return NextResponse.json(
      {
        success: true,
        data: {
          order: {
            id: order._id,
            orderNumber: order.orderNumber,
            status: order.status,
            paymentStatus: order.paymentStatus,
            total: order.total,
          },
          session: {
            id: session.id,
            paymentStatus: session.payment_status,
            customerEmail: session.customer_email,
          },
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Verify payment error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
