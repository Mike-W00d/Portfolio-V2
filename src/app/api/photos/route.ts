import connectToDB from "@/lib/dbConnect";
import Photo from "@/lib/models/photoSchema";
import { NextResponse } from "next/server";

export async function GET () {
  await connectToDB();

  try {
    const photos = await Photo.find({});

    return NextResponse.json(photos);

  } catch (error:any) {
    return NextResponse.json({ error: error.message });
  }
}