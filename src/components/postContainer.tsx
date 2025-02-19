import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PostContainerProps {
  key?: string;
  id: string;
  title: string;
  coverImage: string;
  excerpt: string;
  date: string;
}

const PostContainer = ({
  id,
  title,
  coverImage,
  excerpt,
  date,
}: PostContainerProps) => {
  return (
    <div className="w-9/10 bg-white shadow-xl rounded-md flex flex-col items-center justify-center mx-4 my-8">
      <Link href={`/blog/${id}`}>
        <div className="w-full max-h-[400px] relative flex justify-center">
          <Image
            src={coverImage}
            alt={title}
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>
        <div className="p-4 flex flex-col items-center text-center">
          <h1 className="text-fedblue text-3xl font-bold"> {title} </h1>
          <p className="text-lg text-honblue"> {excerpt} </p>
        </div>
      </Link>
    </div>
  );
};

export default PostContainer;
