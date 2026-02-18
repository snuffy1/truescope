import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import PricingPlan from "@/models/PricingPlan";

// Get all active pricing plans (public route)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const isMonthly = searchParams.get("isMonthly");
    const category = searchParams.get("category");
    const includeInactive = searchParams.get("includeInactive") === "true";

    // Build query
    const query: {
      isActive?: boolean;
      isMonthly?: boolean;
      category?: { $regex: string; $options: string };
    } = {};

    if (!includeInactive) {
      query.isActive = true;
    }

    if (isMonthly !== null) {
      query.isMonthly = isMonthly === "true";
    }

    if (category) {
      query.category = { $regex: category, $options: "i" };
    }

    const plans = await PricingPlan.find(query).sort({
      sortOrder: 1,
      price: 1,
    });

    return NextResponse.json(
      {
        success: true,
        data: { plans },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Get pricing plans error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
