import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import PricingPlan from "@/models/PricingPlan";

// Get single pricing plan by slug (public route)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    await connectDB();

    const { slug } = await params;
    const plan = await PricingPlan.findOne({ slug, isActive: true });

    if (!plan) {
      return NextResponse.json(
        { success: false, message: "Pricing plan not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: { plan },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Get pricing plan error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
