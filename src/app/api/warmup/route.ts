import { NextResponse } from "next/server";

import connectToDB from "@/lib/dbConnect";

export async function GET() {
  try {
    await connectToDB();
    return NextResponse.json({ status: "Database connection warmed up" });
  } catch (error) {
    console.error("Warmup failed:", error);
    return NextResponse.json({ error: "Warmup failed" }, { status: 500 });
  }
}
