"use client";

import moment from "moment";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import React from "react";

interface HeroPostProps {
  _id: string;
  title: string;
  coverImage: string;
  excerpt: string;
  date: string;
}

const HeroPost = ({ _id, title, coverImage, excerpt, date }: HeroPostProps) => {
  const formattedDate = moment(date).format("MMMM Do YYYY");

  return (
    <Link
      href={`/blog/post/${_id}`}
      className="group relative block overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
    >
      <div className="relative aspect-[2/1] w-full md:aspect-[21/9]">
        <CldImage
          src={coverImage}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fedblue/80 via-fedblue/30 to-transparent" />
      </div>

      <div className="absolute left-4 top-4">
        <span className="rounded-full bg-pacific px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          Latest
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <h2 className="mb-2 text-2xl font-bold text-white md:text-4xl" style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.45)" }}>
          {title}
        </h2>
        <p className="mb-3 line-clamp-2 max-w-2xl text-sm text-cyan/90 md:line-clamp-none md:text-base" style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.35)" }}>
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-lb">{formattedDate}</p>
          <span className="flex items-center gap-1 text-sm font-medium text-pacific transition-colors group-hover:text-cyan">
            Read more
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default HeroPost;
