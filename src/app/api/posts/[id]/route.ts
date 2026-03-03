import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

import connectToDB from "@/lib/dbConnect";
import { PostSchema } from "@/lib/models/blogPostSchema";
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

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const validatedData = PostSchema.partial().parse(body);

    const updateData: Record<string, unknown> = { ...validatedData };
    if (validatedData.content) {
      const wordCount = validatedData.content
        .replace(/[#*_~`>\[\]()!|\\-]/g, "")
        .split(/\s+/)
        .filter(Boolean).length;
      updateData.readTime = Math.max(1, Math.ceil(wordCount / 200));
    }

    await connectToDB();

    const post = await Post.findByIdAndUpdate(id, updateData, { new: true });

    if (!post) {
      return new NextResponse("Post Not Found", { status: 404 });
    }

    return NextResponse.json({ success: true, data: post }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.errors },
        { status: 400 },
      );
    }

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectToDB();

    const post = await Post.findByIdAndUpdate(id, { status: 0 }, { new: true });

    if (!post) {
      return new NextResponse("Post Not Found", { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
