import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import Admin, { IAdmin } from "@/models/Admin";
import connectDB from "@/lib/mongodb";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-this";

export interface AuthenticatedRequest extends NextRequest {
  admin?: {
    id: string;
    email: string;
    role: string;
  };
}

interface JWTPayload {
  id: string;
  email: string;
  role: string;
}

export async function authenticate(
  request: NextRequest,
): Promise<
  { admin: IAdmin; error?: never } | { admin?: never; error: NextResponse }
> {
  try {
    // Get token from Authorization header
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return {
        error: NextResponse.json(
          { success: false, message: "No token provided" },
          { status: 401 },
        ),
      };
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    let decoded: JWTPayload;
    try {
      decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    } catch {
      return {
        error: NextResponse.json(
          { success: false, message: "Invalid or expired token" },
          { status: 401 },
        ),
      };
    }

    // Connect to database and get admin
    await connectDB();
    const admin = await Admin.findById(decoded.id).select("-password");

    if (!admin) {
      return {
        error: NextResponse.json(
          { success: false, message: "Admin not found" },
          { status: 404 },
        ),
      };
    }

    if (!admin.isActive) {
      return {
        error: NextResponse.json(
          { success: false, message: "Account is deactivated" },
          { status: 403 },
        ),
      };
    }

    return { admin };
  } catch (error) {
    console.error("Authentication error:", error);
    return {
      error: NextResponse.json(
        { success: false, message: "Authentication failed" },
        { status: 500 },
      ),
    };
  }
}

export function generateToken(
  adminId: string,
  email: string,
  role: string,
): string {
  return jwt.sign({ id: adminId, email, role }, JWT_SECRET, {
    expiresIn: "7d",
  });
}
