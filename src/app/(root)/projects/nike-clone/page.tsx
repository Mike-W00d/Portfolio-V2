import { Metadata } from "next";
import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Nike Clone Projects Page",
};

const Page = () => {
  return (
    <section className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-4xl flex-col rounded-lg bg-white p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Title and Tech Stack */}
          <h1 className="mt-3 text-3xl font-bold text-fedblue">Nike Clone</h1>
          <span className="text-xl font-bold text-honblue">Tech Stack</span>
          <span className="text-center text-lg text-honblue">
            Next.js, React, TailwindCSS, JavaScript
          </span>

          {/* Overview */}
          <h2 className="text-center text-2xl font-bold text-fedblue">
            Overview
          </h2>
          <p className="text-fedblue">
            This projects was made while I was initally learning Next.js and
            TailwindCSS. It was made following a tutorial by JavaScript Mastery
            on YouTube. Although this means I did not come up with the idea
            myself, I did learn a lot from making it. I always find it easier to
            learn through doing and this project was no exception. I am showing
            it off here as it is a good example of my ability to follow
            tutorials and learn from them and I also delpoyed my own version of
            the project to Netlify. It really helps when your learning a new
            framework or library to be able to see what high quality code looks
            like and how it is structured.
          </p>
          {/* Links */}
          <div className="flex items-center space-x-4 pt-3">
            <a href="/projects">
              <Button className="bg-fedblue hover:bg-honblue">
                See More Projects
              </Button>
            </a>
            <a href="https://nike-clone-mw.netlify.app/">
              <Button className="bg-fedblue hover:bg-honblue">
                View Live Site
              </Button>
            </a>
            <a href="https://github.com/Mike-W00d/Nike-Clone">
              <Image
                src="/github.png"
                height={50}
                width={40}
                className="hover:scale-110 hover:cursor-pointer"
                alt="GitHub logo and link to Nike Clone GitHub repository"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
