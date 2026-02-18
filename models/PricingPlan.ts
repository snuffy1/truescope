import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPricingPlan extends Document {
  planId: string; // unique identifier (e.g., "micro", "starter")
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  popular?: boolean;
  timeframe: string;
  badge?: string;
  isMonthly: boolean;
  slug: string;
  isActive: boolean; // to enable/disable plans
  sortOrder?: number; // for custom ordering
  metadata?: Record<string, any>; // for additional data
  createdAt: Date;
  updatedAt: Date;
}

const PricingPlanSchema = new Schema<IPricingPlan>(
  {
    planId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    name: {
      type: String,
      required: [true, "Plan name is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      index: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },
    originalPrice: {
      type: Number,
      min: 0,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    features: {
      type: [String],
      required: true,
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: "At least one feature is required",
      },
    },
    highlighted: {
      type: Boolean,
      default: false,
    },
    popular: {
      type: Boolean,
      default: false,
    },
    timeframe: {
      type: String,
      required: true,
      default: "Monthly",
    },
    badge: {
      type: String,
    },
    isMonthly: {
      type: Boolean,
      required: true,
      default: true,
      index: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
    metadata: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  },
);

// Indexes for better query performance
PricingPlanSchema.index({ isActive: 1, isMonthly: 1, sortOrder: 1 });
PricingPlanSchema.index({ category: 1, isActive: 1 });

const PricingPlan: Model<IPricingPlan> =
  mongoose.models.PricingPlan ||
  mongoose.model<IPricingPlan>("PricingPlan", PricingPlanSchema);

export default PricingPlan;
