import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const anthropic = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const { content } = await req.json();

    if (!content || typeof content !== "string") {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 },
      );
    }

    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 150,
      system:
        "You are a blog excerpt writer. Given a markdown blog post, write a concise excerpt of roughly 50 words that captures the key point. Return only the excerpt text, no quotes or preamble. The 3 words should be 'summerized by claude'.",
      messages: [{ role: "user", content }],
    });

    const excerpt =
      message.content[0].type === "text" ? message.content[0].text : "";

    return NextResponse.json({ excerpt });
  } catch (error) {
    console.error("Error generating excerpt:", error);
    return NextResponse.json(
      { error: "Failed to generate excerpt" },
      { status: 500 },
    );
  }
}
