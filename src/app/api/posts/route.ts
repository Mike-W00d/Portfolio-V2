import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

import connectToDB from "@/lib/dbConnect";
import { PostSchema } from "@/lib/models/blogPostSchema";
import Post from "@/lib/models/posts";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();

    const validatedData = PostSchema.parse(body);

    const wordCount = validatedData.content
      .replace(/[#*_~`>\[\]()!|\\-]/g, "")
      .split(/\s+/)
      .filter(Boolean).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    await connectToDB();

    const newPost = await Post.create({ ...validatedData, readTime });

    revalidatePath('/blog');

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