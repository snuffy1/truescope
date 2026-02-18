import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import PricingPlan from "@/models/PricingPlan";
import { authenticate } from "@/lib/auth";

// Bulk create or update pricing plans
export async function POST(request: NextRequest) {
  try {
    // Authenticate the request
    const authResult = await authenticate(request);

    if (authResult.error) {
      return authResult.error;
    }

    const currentAdmin = authResult.admin;

    // Only superadmin can bulk update
    if (currentAdmin.role !== "superadmin") {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized. Only superadmin can bulk import plans",
        },
        { status: 403 },
      );
    }

    await connectDB();

    const body = await request.json();
    const { plans, clearExisting } = body;

    if (!plans || !Array.isArray(plans)) {
      return NextResponse.json(
        { success: false, message: "Plans array is required" },
        { status: 400 },
      );
    }

    // Clear existing plans if requested
    if (clearExisting) {
      await PricingPlan.deleteMany({});
    }

    const results = {
      created: 0,
      updated: 0,
      errors: [] as { planId: string; error: string }[],
    };

    // Get the current max planId for auto-increment
    let currentMaxPlanId = 0;
    const lastPlan = await PricingPlan.findOne()
      .sort({ planId: -1 })
      .select("planId")
      .lean();

    if (lastPlan && lastPlan.planId) {
      const parsed = parseInt(lastPlan.planId);
      if (!isNaN(parsed)) {
        currentMaxPlanId = parsed;
      }
    }

    for (const planData of plans) {
      try {
        // Check if plan exists by slug
        const existing = await PricingPlan.findOne({ slug: planData.slug });

        if (existing) {
          // Update existing plan (preserve its planId)
          const { updateData } = planData;
          await PricingPlan.findByIdAndUpdate(existing._id, updateData, {
            runValidators: true,
          });
          results.updated++;
        } else {
          // Create new plan with auto-generated planId
          currentMaxPlanId++;
          const newPlanData = {
            ...planData,
            planId: String(currentMaxPlanId),
          };
          await PricingPlan.create(newPlanData);
          results.created++;
        }
      } catch (error) {
        results.errors.push({
          planId: planData.planId || planData.slug || "unknown",
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Bulk operation completed",
        data: results,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Bulk create pricing plans error:", error);
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
