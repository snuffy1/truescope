import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { authenticate } from "@/lib/auth";

// Register a new admin (protected route - only superadmin can create new admins)
export async function POST(request: NextRequest) {
  try {
    // Authenticate the request
    const authResult = await authenticate(request);

    if (authResult.error) {
      return authResult.error;
    }

    const currentAdmin = authResult.admin;

    // Only superadmin can create new admins
    if (currentAdmin.role !== "superadmin") {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized. Only superadmin can create new admins",
        },
        { status: 403 },
      );
    }

    await connectDB();

    const body = await request.json();
    const { email, password, name, role } = body;

    // Validation
    if (!email || !password || !name) {
      return NextResponse.json(
        { success: false, message: "Email, password, and name are required" },
        { status: 400 },
      );
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return NextResponse.json(
        { success: false, message: "Admin with this email already exists" },
        { status: 409 },
      );
    }

    // Create new admin
    const newAdmin = await Admin.create({
      email,
      password,
      name,
      role: role || "admin",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Admin created successfully",
        data: {
          admin: {
            id: newAdmin._id,
            email: newAdmin.email,
            name: newAdmin.name,
            role: newAdmin.role,
          },
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Register admin error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}

// Get all admins (protected route)
export async function GET(request: NextRequest) {
  try {
    // Authenticate the request
    const authResult = await authenticate(request);

    if (authResult.error) {
      return authResult.error;
    }

    await connectDB();

    const admins = await Admin.find()
      .select("-password")
      .sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        data: { admins },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Get admins error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
