import { NextResponse } from "next/server";
import { ZodError } from "zod";

import connectToDB from "@/lib/dbConnect";
import { PostSchema } from "@/lib/models/blogPostSchema";
import Post from "@/lib/models/posts";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = PostSchema.parse(body);

    await connectToDB();

    const newPost = await Post.create(validatedData);

    return NextResponse.json({ success: true, data: newPost }, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.errors },
        { status: 400 },
      );
    }

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDB();
    const posts = await Post.find();

    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    console.error("Error getting posts:", error);

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
