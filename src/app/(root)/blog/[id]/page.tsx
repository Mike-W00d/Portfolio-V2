import Image from "next/image";

import { Preview } from "@/components/editor/Preview";
import Avatar from "@/components/blog-components/avatar";
import Link from "next/link";

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

  const data = await fetchPost(id);

  const { title, content, coverImage, date } = data.data;

  const formattedDate = new Date(date).toLocaleDateString();

  console.log("content", content);

  return (
    <main>
      <div className="flex flex-col items-center px-10">
        <div className="w-full h-1/2 relative flex justify-center">
          <Image
            src={coverImage}
            alt={title}
            width={600}
            height={600}
            objectFit="contain"
            className="mt-4"
          />
        </div>
        <div className="w-full flex items-center mt-4 justify-between">
          <h1 className="text-xl text-honblue hover:underline cursor-pointer">
            <Link href="/blog">Back To All Posts</Link>
          </h1>
          <h1 className="text-4xl text-fedblue font-bold"> {title} </h1>
          <div>
            <Avatar name="Michael Wood" picture="/HERO2.png" />
            <p className="flex justify-end text-honblue text-lg">
              {" "}
              {formattedDate}{" "}
            </p>
          </div>
        </div>
        <Preview content={content} />
      </div>
    </main>
  );
}
