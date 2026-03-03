"use client";

import moment from "moment";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import React from "react";

interface PostContainerProps {
  _id: string;
  title: string;
  coverImage: string;
  excerpt: string;
  date: string;
}

const PostContainer = ({
  _id,
  title,
  coverImage,
  excerpt,
  date,
}: PostContainerProps) => {
  const formattedDate = moment(date).format("MMMM Do YYYY");

  return (
    <Link
      href={`/blog/post/${_id}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <CldImage
          src={coverImage}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-pacific">
          {formattedDate}
        </p>
        <h3 className="mb-2 text-xl font-bold text-fedblue transition-colors duration-300 group-hover:text-honblue">
          {title}
        </h3>
        <p className="mb-4 flex-1 line-clamp-3 text-sm text-gray-600">
          {excerpt}
        </p>
        <span className="flex items-center gap-1 text-sm font-medium text-pacific transition-colors group-hover:text-honblue">
          Read more
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
};

export default PostContainer;
