'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NewTabLink from "@/components/newTabLink";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 px-4 lg:px-0">
      {/* Left Section: Text box, GitHub, and Button */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
        {/* Text box */}
        <div className="text-center lg:text-left bg-white shadow-xl rounded-lg p-6 w-full lg:w-auto">
          <span className="font-bold">
            <h1 className="text-xl text-honblue px-3"> Hello, I'm</h1>
            <h2 className="text-4xl font-extrabold text-fedblue px-3">
              Michael Wood
            </h2>
            <h3 className="text-xl text-honblue px-3">
              I am a Full Stack Developer specializing in Node, Tailwind CSS,
              TypeScript, Next.js and MongoDB.
            </h3>
          </span>
        </div>

        {/* Button and GitHub image */}
        <div className="flex flex-row items-center justify-center gap-4 mt-4">
          <Button
            className="bg-fedblue hover:bg-honblue shadow-md"
            onClick={() =>
              window.open("/CV.pdf", "_blank", "noopener noreferrer")
            }
          >
            Download CV
          </Button>
          <a href="https://github.com/Mike-W00d">
            <Image
              src="/github.png"
              alt="Github logo"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>

      {/* Right Section: Hero Image */}
      <div className="lg:w-1/2 w-full text-center relative flex justify-center items-center">
        <Image
          src="/hero.png"
          alt="Hero"
          width={450}
          height={650}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
