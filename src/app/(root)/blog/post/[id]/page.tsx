import { currentUser } from "@clerk/nextjs/server";
import { ArrowLeft } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

import Avatar from "@/components/blog-components/avatar";
import { PostActions } from "@/components/blog-components/postActions";
import { PostContent, PostHero } from "@/components/blog-components/postDetail";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;

  const post = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts/${id}`,
  ).then((res) => res.json());

  const previousImages = (await parent).openGraph?.images || [];

  const { title, excerpt, coverImage } = post.data;

  return {
    title: `${title} | Blog`,
    description: `${excerpt}`,
    openGraph: {
      images: [`${coverImage}`, ...previousImages],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await currentUser();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts/${id}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  const data = await response.json();

  const { title, content, coverImage, date } = data.data;

  return (
    <main className="px-4 py-8 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-honblue transition-colors hover:text-pacific"
        >
          <ArrowLeft className="size-4" />
          Back to Blog
        </Link>

        <PostHero coverImage={coverImage} title={title} date={date} />

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar name="Michael Wood" picture="/HERO2.png" />
            <span className="text-sm text-honblue/70">·</span>
            <time className="text-sm text-honblue/70">{new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
          </div>
          {user && <PostActions postId={id} />}
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-honblue/40 to-transparent" />

        <PostContent content={content} />
      </div>
    </main>
  );
}
