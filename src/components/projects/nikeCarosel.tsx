import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

const NikeCarosel = () => {
  return (
    <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-xl">
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
      <div className="flex min-h-0 flex-1 w-full items-center justify-center">
        <Image
          src="/nikeHome.png"
          alt="Screenshot of Nike Clone Home Page"
          width={700}
          height={700}
          className="max-h-[45vh] w-auto rounded-lg object-contain"
        />
      </div>
      <div className="mt-3 flex items-center justify-center space-x-4">
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
  );
};

export default NikeCarosel;
