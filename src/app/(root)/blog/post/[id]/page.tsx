import moment from "moment";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Avatar from "@/components/blog-components/avatar";
import { Preview } from "@/components/editor/Preview";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { id } = await params;

  // fetch data
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts/${id}`,
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
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
  const fetchPost = async (id: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts/${id}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }
    return response.json();
  };

  function formatDateString(dateString: string) {
    return moment(dateString).format("MMMM Do YYYY");
  }
  const data = await fetchPost(id);

  const { title, content, coverImage, date } = data.data;

  const formattedDate = formatDateString(date);

  return (
    <main>
      <div className="flex flex-col items-center px-10">
        <div className="relative flex h-1/2 w-full justify-center">
          <Image
            src={coverImage}
            alt={title}
            width={600}
            height={600}
            objectFit="contain"
            className="mt-4"
          />
        </div>
        <div className="mt-4 flex w-full items-center justify-between">
          <h1 className="cursor-pointer text-xl text-honblue hover:underline">
            <Link href="/blog">Back To All Posts</Link>
          </h1>
          <h1 className="text-4xl font-bold text-fedblue"> {title} </h1>
          <div>
            <Avatar name="Michael Wood" picture="/HERO2.png" />
            <p className="flex justify-end text-lg text-honblue">
              {formattedDate}
            </p>
          </div>
        </div>
        <Preview content={content} />
      </div>
    </main>
  );
}
