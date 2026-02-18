import mongoose, { Schema, Document, Model } from "mongoose";

export interface IOrderItem {
  pricingPlanId: mongoose.Types.ObjectId; // Reference to PricingPlan
  planId: string; // planId from PricingPlan (e.g., "micro", "starter")
  name: string;
  slug: string;
  quantity: number;
  price: number;
  isMonthly: boolean;
  timeframe: string;
}

export interface IOrder extends Document {
  orderNumber: string;
  customerEmail: string;
  customerName: string;
  customerPhone?: string;
  items: IOrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: "pending" | "processing" | "completed" | "failed" | "cancelled";
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
  paymentMethod: "stripe" | "other";
  stripePaymentIntentId?: string;
  stripeSessionId?: string;
  billingAddress?: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  notes?: string;
  metadata?: Record<string, any>; // For storing subscription IDs and other data
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema = new Schema<IOrderItem>({
  pricingPlanId: {
    type: Schema.Types.ObjectId,
    ref: "PricingPlan",
    required: true,
    index: true,
  },
  planId: { type: String, required: true },
  name: { type: String, required: true },
  slug: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1, default: 1 },
  price: { type: Number, required: true, min: 0 },
  isMonthly: { type: Boolean, required: true },
  timeframe: { type: String, required: true },
});

const AddressSchema = new Schema({
  line1: { type: String, required: true },
  line2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
});

const OrderSchema = new Schema<IOrder>(
  {
    orderNumber: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    customerEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    customerName: { type: String, required: true },
    customerPhone: { type: String },
    items: [OrderItemSchema],
    subtotal: { type: Number, required: true, min: 0 },
    tax: { type: Number, required: true, min: 0 },
    total: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["pending", "processing", "completed", "failed", "cancelled"],
      default: "pending",
      index: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
      index: true,
    },
    paymentMethod: {
      type: String,
      enum: ["stripe", "other"],
      default: "stripe",
    },
    stripePaymentIntentId: { type: String, index: true },
    stripeSessionId: { type: String, index: true },
    billingAddress: AddressSchema,
    notes: { type: String },
    metadata: { type: Schema.Types.Mixed },
  },
  {
    timestamps: true,
  },
);

// Index for better query performance
OrderSchema.index({ createdAt: -1 });
OrderSchema.index({ customerEmail: 1, createdAt: -1 });

const Order: Model<IOrder> =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
