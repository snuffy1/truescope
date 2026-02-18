import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const authResult = await authenticate(request);

    if (authResult.error) {
      return authResult.error;
    }

    const admin = authResult.admin;

    return NextResponse.json(
      {
        success: true,
        data: {
          admin: {
            id: admin._id,
            email: admin.email,
            name: admin.name,
            role: admin.role,
            isActive: admin.isActive,
            lastLogin: admin.lastLogin,
            createdAt: admin.createdAt,
          },
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Get admin profile error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
