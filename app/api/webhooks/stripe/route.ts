import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import stripe from "@/lib/stripe";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

/**
 * Stripe Webhook Handler
 *
 * Handles various Stripe events including:
 * - checkout.session.completed
 * - payment_intent.succeeded
 * - payment_intent.payment_failed
 * - invoice.paid (for subscriptions)
 * - invoice.payment_failed
 * - customer.subscription.created
 * - customer.subscription.updated
 * - customer.subscription.deleted
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "No signature provided" },
        { status: 400 },
      );
    }

    let event: Stripe.Event;

    try {
      // Verify webhook signature
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error("Webhook signature verification failed:", message);
      return NextResponse.json(
        { error: `Webhook Error: ${message}` },
        { status: 400 },
      );
    }

    await connectDB();

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutSessionCompleted(session);
        break;
      }

      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await handlePaymentIntentSucceeded(paymentIntent);
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await handlePaymentIntentFailed(paymentIntent);
        break;
      }

      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaid(invoice);
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaymentFailed(invoice);
        break;
      }

      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionUpdate(subscription);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(subscription);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Webhook handler error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 },
    );
  }
}

// Event Handlers

async function handleCheckoutSessionCompleted(
  session: Stripe.Checkout.Session,
) {
  try {
    const orderId = session.metadata?.orderId;

    if (!orderId) {
      console.log("No orderId found in session metadata");
      return;
    }

    const order = await Order.findById(orderId);

    if (!order) {
      console.log(`Order not found: ${orderId}`);
      return;
    }

    // Update order status based on payment mode
    if (session.mode === "payment" && session.payment_status === "paid") {
      order.paymentStatus = "paid";
      order.status = "processing";
      order.stripePaymentIntentId = session.payment_intent as string;
    } else if (session.mode === "subscription") {
      order.paymentStatus = "paid";
      order.status = "processing";
      // Store subscription ID for future reference
      order.metadata = {
        ...order.metadata,
        stripeSubscriptionId: session.subscription as string,
      };
    }

    await order.save();

    console.log(`Order ${order.orderNumber} updated after checkout completion`);

    // Stripe will automatically send receipt emails to the customer
    // No need to manually send emails
  } catch (error) {
    console.error("Error handling checkout.session.completed:", error);
  }
}

async function handlePaymentIntentSucceeded(
  paymentIntent: Stripe.PaymentIntent,
) {
  try {
    const orderId = paymentIntent.metadata?.orderId;

    if (!orderId) {
      return;
    }

    const order = await Order.findById(orderId);

    if (!order) {
      return;
    }

    order.paymentStatus = "paid";
    order.status = "processing";
    order.stripePaymentIntentId = paymentIntent.id;

    await order.save();

    console.log(`Order ${order.orderNumber} payment succeeded`);
  } catch (error) {
    console.error("Error handling payment_intent.succeeded:", error);
  }
}

async function handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
  try {
    const orderId = paymentIntent.metadata?.orderId;

    if (!orderId) {
      return;
    }

    const order = await Order.findById(orderId);

    if (!order) {
      return;
    }

    order.paymentStatus = "failed";
    order.status = "failed";
    order.notes = `Payment failed: ${paymentIntent.last_payment_error?.message || "Unknown error"}`;

    await order.save();

    console.log(`Order ${order.orderNumber} payment failed`);
  } catch (error) {
    console.error("Error handling payment_intent.payment_failed:", error);
  }
}

async function handleInvoicePaid(invoice: Stripe.Invoice) {
  try {
    // Handle subscription invoice payment
    const subscriptionId = invoice.id as string;

    if (!subscriptionId) {
      return;
    }

    // Find orders with this subscription ID
    const orders = await Order.find({
      "metadata.stripeSubscriptionId": subscriptionId,
    });

    for (const order of orders) {
      if (order.paymentStatus !== "paid") {
        order.paymentStatus = "paid";
        order.status = "processing";
        await order.save();
      }
    }

    console.log(
      `Invoice ${invoice.id} paid for subscription ${subscriptionId}`,
    );
  } catch (error) {
    console.error("Error handling invoice.paid:", error);
  }
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  try {
    const subscriptionId = invoice.id as string;

    if (!subscriptionId) {
      return;
    }

    console.log(
      `Invoice ${invoice.id} payment failed for subscription ${subscriptionId}`,
    );

    // Stripe will automatically send payment failed emails
    // You could add additional logic here if needed
  } catch (error) {
    console.error("Error handling invoice.payment_failed:", error);
  }
}

async function handleSubscriptionUpdate(subscription: Stripe.Subscription) {
  try {
    // Update order records with subscription status
    const orders = await Order.find({
      "metadata.stripeSubscriptionId": subscription.id,
    });

    for (const order of orders) {
      order.metadata = {
        ...order.metadata,
        subscriptionStatus: subscription.status,
      };
      await order.save();
    }

    console.log(
      `Subscription ${subscription.id} updated: ${subscription.status}`,
    );
  } catch (error) {
    console.error("Error handling subscription update:", error);
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  try {
    // Handle subscription cancellation
    const orders = await Order.find({
      "metadata.stripeSubscriptionId": subscription.id,
    });

    for (const order of orders) {
      order.status = "cancelled";
      order.metadata = {
        ...order.metadata,
        subscriptionStatus: "cancelled",
        cancelledAt: new Date().toISOString(),
      };
      await order.save();
    }

    console.log(`Subscription ${subscription.id} cancelled`);
  } catch (error) {
    console.error("Error handling subscription deletion:", error);
  }
}
