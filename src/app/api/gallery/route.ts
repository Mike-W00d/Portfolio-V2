import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { z, ZodError } from "zod";

import connectToDB from "@/lib/dbConnect";
import Photo from "@/lib/models/photoSchema";

const PhotoPayloadSchema = z.object({
  src: z.string().url(),
  description: z.string().min(1, "Description is required"),
  height: z.number().positive(),
  width: z.number().positive(),
});

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const validatedData = PhotoPayloadSchema.parse(body);

    await connectToDB();

    const newPhoto = await Photo.create(validatedData);

    revalidatePath("/gallery");

    return NextResponse.json(
      { success: true, data: newPhoto },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating photo:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.errors },
        { status: 400 },
      );
    }

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
