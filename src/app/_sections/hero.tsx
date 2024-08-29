"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NewTabLink from "@/components/newTabLink";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 px-4 lg:px-0">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start pt-4 lg:pt-10">
        {/* Text box */}
        <div className="text-center lg:text-left bg-white shadow-xl rounded-lg p-6 w-full lg:w-auto">
          <span className="font-bold">
            {/* <h1 className="text-xl text-honblue px-3"> Hello, I'm</h1> */}
            {/* <h2 className="text-4xl font-extrabold text-fedblue px-3">
              Michael Wood</h2> */}
            <ReactTyped
              className="text-xl text-honblue px-3"
              strings={["Hello, I'm"]}
              typeSpeed={90}
              showCursor={false}
            />
            <br />
            <ReactTyped
              className="text-4xl font-extrabold text-fedblue px-3"
              strings={["Michael Wood"]}
              typeSpeed={90}
              showCursor={false}
              smartBackspace={true}
              startDelay={1500}
            />

            <h3 className="text-xl text-honblue px-3">
              I am a Full Stack Developer specializing in Node.js, Tailwind CSS,
              TypeScript, Next.js and MongoDB.
            </h3>
          </span>
        </div>

        {/* CV, GitHub and Linkedin  */}
        <div className="flex flex-row items-center justify-center gap-4 mt-4 px-2">
          <Button
            className="bg-fedblue hover:bg-honblue hover:scale-105"
            onClick={() =>
              window.open("/CV.pdf", "_blank", "noopener noreferrer")
            }
          >
            Download CV
          </Button>
          <a href="https://github.com/Mike-W00d">
            <Image
              src="/github.png"
              alt="Github logo and Link to my GitHub"
              width={40}
              height={40}
              className="hover:cursor-pointer hover:scale-110"
            />
          </a>
          <a href="https://www.linkedin.com/in/mike-wood22/">
            <Image
              src="/linkedin.png"
              alt="LinkedIn logo and Link to my LinkedIn"
              width={40}
              height={40}
              className="hover:cursor-pointer hover:scale-110"
            />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full text-center relative flex justify-center items-center">
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
