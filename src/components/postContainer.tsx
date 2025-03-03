"use client";

import moment from "moment";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import React from "react";

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
  function formatDateString(dateString: string) {
    return moment(dateString).format("MMMM Do YYYY");
  }
  const formattedDate = formatDateString(date);
  return (
    <div className="mx-4 my-8 flex flex-col items-center justify-center rounded-md bg-white shadow-xl">
      <Link href={`/blog/post/${id}`}>
        <div className="relative flex max-h-[400px] min-h-[200px]  w-full justify-center px-4">
          <CldImage
            src={coverImage}
            alt={title}
            height={600}
            width={800}
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold text-fedblue"> {title} </h1>
          <p className="text-lg text-honblue"> {excerpt} </p>
          <p className="text-lg text-honblue">{formattedDate}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostContainer;
