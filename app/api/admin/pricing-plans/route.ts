import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import PricingPlan from "@/models/PricingPlan";
import { authenticate } from "@/lib/auth";

// Get all pricing plans (admin only)
export async function GET(request: NextRequest) {
  try {
    // Authenticate the request
    const authResult = await authenticate(request);

    if (authResult.error) {
      return authResult.error;
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const isMonthly = searchParams.get("isMonthly");
    const category = searchParams.get("category");
    const isActive = searchParams.get("isActive");

    const skip = (page - 1) * limit;

    // Build query
    const query: {
      isMonthly?: boolean;
      category?: { $regex: string; $options: string };
      isActive?: boolean;
    } = {};

    if (isMonthly !== null) {
      query.isMonthly = isMonthly === "true";
    }

    if (category) {
      query.category = { $regex: category, $options: "i" };
    }

    if (isActive !== null) {
      query.isActive = isActive === "true";
    }

    // Get pricing plans
    const [plans, total] = await Promise.all([
      PricingPlan.find(query)
        .sort({ sortOrder: 1, createdAt: -1 })
        .skip(skip)
        .limit(limit),
      PricingPlan.countDocuments(query),
    ]);

    return NextResponse.json(
      {
        success: true,
        data: {
          plans,
          pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
          },
        },
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

// Create new pricing plan (admin only)
export async function POST(request: NextRequest) {
  try {
    // Authenticate the request
    const authResult = await authenticate(request);

    if (authResult.error) {
      return authResult.error;
    }

    await connectDB();

    const body = await request.json();

    const plan = await PricingPlan.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Pricing plan created successfully",
        data: { plan },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Create pricing plan error:", error);
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
