import { NextResponse } from "next/server";

import connectToDB from "@/lib/dbConnect";
import Photo from "@/lib/models/photoSchema";

// Cache the response for 1 hour (3600 seconds)
export const revalidate = 3600;

export async function GET() {
  await connectToDB();

  try {
    // Use lean() for faster queries (returns plain objects instead of Mongoose documents)
    // Select only the fields you need
    const photos = await Photo.find({})
      .select("src description height width")
      .lean()
      .exec();

    // Set cache headers
    return NextResponse.json(photos, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error: any) {
    console.error("Error fetching photos:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
