import { NextResponse } from "next/server";

import connectToDB from "@/lib/dbConnect";
import Post from "@/lib/models/posts";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    await connectToDB();

    const post = await Post.findById(id).select("viewCount");

    if (!post) {
      return new NextResponse("Post Not Found", { status: 404 });
    }

    return NextResponse.json(
      { success: true, viewCount: post.viewCount },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    await connectToDB();

    const post = await Post.findByIdAndUpdate(
      id,
      { $inc: { viewCount: 1 } },
      { new: true },
    );

    if (!post) {
      return new NextResponse("Post Not Found", { status: 404 });
    }

    return NextResponse.json(
      { success: true, viewCount: post.viewCount },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
