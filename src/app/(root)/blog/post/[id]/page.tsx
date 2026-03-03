import { currentUser } from "@clerk/nextjs/server";
import { ArrowLeft } from "lucide-react";
import { Types } from "mongoose";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Avatar from "@/components/blog-components/avatar";
import { PostActions } from "@/components/blog-components/postActions";
import { PostContent, PostHero } from "@/components/blog-components/postDetail";
import PostShare from "@/components/blog-components/postShare";
import TrackView from "@/components/blog-components/viewCounter";
import connectToDB from "@/lib/dbConnect";
import Post from "@/lib/models/posts";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

interface PostDocument {
  _id: Types.ObjectId;
  title: string;
  coverImage: string;
  excerpt: string;
  date: string;
  content: string;
  readTime: number;
  status: number;
}

async function getPost(id: string) {
  await connectToDB();
  const post = (await Post.findById(id)
    .lean()
    .exec()) as unknown as PostDocument | null;
  if (!post) throw new Error("Post not found");
  return {
    _id: post._id.toString(),
    title: post.title,
    coverImage: post.coverImage,
    excerpt: post.excerpt,
    date: post.date,
    content: post.content,
    readTime: post.readTime,
    status: post.status ?? 1,
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;

  const post = await getPost(id);

  const previousImages = (await parent).openGraph?.images || [];

  const { title, excerpt, coverImage } = post;

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

  const post = await getPost(id);

  if (post.status === 0) notFound();
  if (post.status === 2 && !user) notFound();

  const { title, content, coverImage, date, readTime } = post;

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
            <time className="text-sm font-bold text-fedblue">
              {new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="text-sm text-honblue">{readTime} minute read</span>
            <TrackView postId={id} isLoggedIn={!!user} />
          </div>
          <div className="flex items-center gap-3">
            <PostShare postId={id} title={title} />
            {user && <PostActions postId={id} />}
          </div>
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-honblue/40 to-transparent" />

        <PostContent content={content} />
      </div>
    </main>
  );
}
