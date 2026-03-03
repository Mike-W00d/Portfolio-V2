import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

const NikeCarosel = () => {
  return (
    <div>
      <div className="flex w-full flex-col rounded-lg bg-white p-6 shadow-xl">
        <span className="py-1 text-4xl font-bold text-fedblue">Nike Clone</span>{" "}
        <span className="text-lg text-honblue">
          <span className="py-1 font-semibold"> Tech Stack -</span> Next.js,
          React, TailwindCSS, JavaScript
        </span>
        <span className="py-1 text-fedblue">
          {" "}
          A responsive UI built with mocking data to act as if it was streamed
          from a backend
        </span>
        <div className="flex w-full justify-center">
          <Image
            src="/nikeHome.png"
            alt="Screenshot of Nike Clone Home Page"
            width={700}
            height={700}
            className="rounded-lg"
          />
        </div>
        <div className="m-5 flex items-center justify-center space-x-4 align-middle">
          <a
            href="https://github.com/Mike-W00d/Nike-Clone"
            className="text-blue-500"
          >
            <Image
              src="/github.png"
              height={50}
              width={40}
              className="hover:scale-110 hover:cursor-pointer"
              alt="GitHub logo and link to my Next-Portfolio GitHub repository"
            />
          </a>
          <a href="/projects/nike-clone">
            <Button className="bg-fedblue hover:bg-honblue">
              Learn more about this project
            </Button>
          </a>
          <a href="https://nike-clone-mw.netlify.app/">
            <Button className="bg-fedblue hover:bg-honblue">
              View Live Site
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NikeCarosel;
