import React from "react";
import Image from "next/image";
import { Preview } from "./editor/Preview";
import Link from "next/link";
import Avatar from "./blog-components/avatar";

interface PostContainerProps {
  id: string;
  title: string;
  coverImage: string;
  excerpt: string;
  date: string;
  content: string;
}

const HeroPost = ({ id, title, coverImage, content }: PostContainerProps) => {
  return (
    <div className="flex flex-col w-full max-h-[386px]">
      <div className="flex space-x-2 justify-between">
        <div className="w-1/2">
          <Link className="w-full cursor-pointer" href={`/blog/${id}`}>
            <Image src={coverImage} alt={title} width={600} height={900} />
          </Link>
        </div>
        <div className="text-right w-1/2 max-h-[386px]">
          <h1 className="text-3xl text-fedblue font-bold hover:underline cursor-pointer mb-3">
            {title}
          </h1>
          <h2 className="text-honblue font-bold"> </h2>
          <div className="h-[250px] overflow-hidden">
            <Preview content={content} />
          </div>
          <div className="flex justify-between">
            <Avatar name="John Doe" picture="/HERO2.png" />
            <Link href={`/blog/${id}`}>
              <h1 className="text-2xl text-fedblue cursor-pointer hover:underline">
                {" "}
                Read the full story{" "}
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPost;
