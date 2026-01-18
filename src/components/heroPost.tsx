import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Avatar from "./blog-components/avatar";
import { Preview } from "./editor/Preview";

interface PostContainerProps {
  id: string;
  title: string;
  coverImage: string;
  excerpt: string;
  date: string;
  content: string;
}

const HeroPost = ({
  id,
  title,
  coverImage,
  content,
  date,
}: PostContainerProps) => {
  function formatDateString(dateString: string) {
    return moment(dateString).format("MMMM Do YYYY");
  }
  const formattedDate = formatDateString(date);
  return (
    <div className="flex max-h-[386px] w-full flex-col">
      <div className="flex justify-between space-x-2">
        <div className="relative flex w-1/2 items-center justify-center">
          <Link className="w-full cursor-pointer" href={`/blog/post/${id}`}>
            <Image src={coverImage} alt={title} width={640} height={360} />
          </Link>
        </div>
        <div className="max-h-[386px] w-1/2 text-right">
          <h1 className="mb-3 cursor-pointer text-3xl font-bold text-fedblue hover:underline">
            {title}
          </h1>
          <h2 className="font-bold text-honblue"> </h2>
          <div className="h-[250px] overflow-hidden">
            <Preview content={content} />
          </div>
          <div className="flex items-center justify-between object-bottom">
            <Avatar name="Michael Wood" picture="/HERO2.png" />
            <div className="flex flex-col items-end">
              <Link href={`/blog/${id}`}>
                <h1 className="cursor-pointer text-2xl text-fedblue hover:underline">
                  {" "}
                  Read the full story{" "}
                </h1>
              </Link>
              <p className="text-sm text-honblue"> {formattedDate} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPost;
