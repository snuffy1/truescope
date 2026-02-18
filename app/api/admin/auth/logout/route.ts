import { NextResponse } from "next/server";

export async function POST() {
  try {
    // In a production app, you might want to:
    // 1. Blacklist the token
    // 2. Clear any session data
    // 3. Log the logout event

    return NextResponse.json(
      {
        success: true,
        message: "Logout successful",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
