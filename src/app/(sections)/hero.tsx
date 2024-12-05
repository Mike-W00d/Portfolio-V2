"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactTyped } from "react-typed";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 px-4 lg:flex-row lg:px-0">
      {/* Left Section */}
      <div className="flex w-full flex-col items-center pt-4 lg:w-1/2 lg:items-start lg:pt-10">
        {/* Text box */}
        <div className="w-full rounded-lg bg-white p-6 text-center shadow-xl lg:w-auto lg:text-left">
          <span className="font-bold">
            {/* <h1 className="text-xl text-honblue px-3"> Hello, I'm</h1> */}
            {/* <h2 className="text-4xl font-extrabold text-fedblue px-3">
              Michael Wood</h2> */}
            <ReactTyped
              className="px-3 text-xl text-honblue"
              strings={["Hello, I'm"]}
              typeSpeed={90}
              showCursor={false}
            />
            <br />
            <ReactTyped
              className="px-3 text-4xl font-extrabold text-fedblue"
              strings={["Michael Wood"]}
              typeSpeed={90}
              showCursor={false}
              smartBackspace={true}
              startDelay={1500}
            />

            <h3 className="px-3 text-xl text-honblue">
              I am a Full Stack Developer specializing in Node.js, Tailwind CSS,
              TypeScript, Next.js and MongoDB.
            </h3>
          </span>
        </div>

        {/* CV, GitHub and Linkedin  */}
        <div className="mt-4 flex flex-row items-center justify-center gap-4 px-2">
          <Button
            className="bg-fedblue hover:scale-105 hover:bg-honblue"
            onClick={() =>
              window.open("/CV.pdf", "_blank", "noopener noreferrer")
            }
          >
            Download CV
          </Button>
          <Link href="https://github.com/Mike-W00d">
            <Image
              src="/github.png"
              alt="Github logo and Link to my GitHub"
              width={40}
              height={40}
              className="hover:scale-110 hover:cursor-pointer"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/mike-wood22/">
            <Image
              src="/linkedin.png"
              alt="LinkedIn logo and Link to my LinkedIn"
              width={40}
              height={40}
              className="hover:scale-110 hover:cursor-pointer"
            />
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex w-full items-center justify-center text-center lg:w-1/2">
        <Image
          src="/HERO2.png"
          alt="Hero"
          width={550}
          height={550}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
