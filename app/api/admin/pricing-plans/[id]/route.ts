import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import PricingPlan from "@/models/PricingPlan";
import { authenticate } from "@/lib/auth";

// Get single pricing plan by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // Authenticate the request
    const authResult = await authenticate(request);

    if (authResult.error) {
      return authResult.error;
    }

    await connectDB();

    const { id } = await params;
    const plan = await PricingPlan.findById(id);

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

// Update pricing plan
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // Authenticate the request
    const authResult = await authenticate(request);

    if (authResult.error) {
      return authResult.error;
    }

    await connectDB();

    const { id } = await params;
    const body = await request.json();
    const updateData = body;

    const plan = await PricingPlan.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!plan) {
      return NextResponse.json(
        { success: false, message: "Pricing plan not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Pricing plan updated successfully",
        data: { plan },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Update pricing plan error:", error);
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

// Delete pricing plan
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // Authenticate the request
    const authResult = await authenticate(request);

    if (authResult.error) {
      return authResult.error;
    }

    await connectDB();

    const { id } = await params;
    const plan = await PricingPlan.findByIdAndDelete(id);

    if (!plan) {
      return NextResponse.json(
        { success: false, message: "Pricing plan not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Pricing plan deleted successfully",
        data: { plan },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Delete pricing plan error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
