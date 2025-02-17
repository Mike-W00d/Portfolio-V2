import { NextResponse } from "next/server";

import connectToDB from "@/lib/dbConnect";
import Post from "@/lib/models/posts";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!id) {
    throw new Error("No ID provided");
  }

  try {
    await connectToDB();

    const post = await Post.findById(id);

    if (!post) {
      return new NextResponse("Post Not Found", { status: 404 });
    }

    return NextResponse.json({ success: true, data: post }, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
