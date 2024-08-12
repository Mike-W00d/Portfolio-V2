import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const NikeCarosel = () => {
  return (
    <div>
    <div className="flex bg-white w-full rounded-lg shadow-xl flex-col p-6">
      <span className="text-fedblue text-4xl font-bold">Nike Clone</span>{" "}
      {/* Increased text size */}
      <span className="text-honblue text-2xl font-bold">
        Primary Language - JavaScript
      </span>{" "}
      {/* Adjusted text size */}
      <span className="text-honblue text-lg">
        <span className="font-semibold"> Tech Stack - </span> Next.js, React,
        TailwindCSS, JavaScript
      </span>
      <span className="text-fedblue"> A responsive UI built with mocking data to act as if it was streamed from a backend</span>
      <div className="flex w-full justify-center">
        <Image
          src="/nikeHome.png"
          alt="Screenshot of Nike Clone Home Page"
          width={700}
          height={700}
          className="rounded-lg"
        />
      </div>
      <div className="flex justify-center align-middle space-x-4 items-center m-5">
        <a
          href="https://github.com/Mike-W00d/Nike-Clone"
          className="text-blue-500"
        >
          <Image
            src="/github.png"
            height={50}
            width={40}
            className="hover:cursor-pointer hover:scale-110"
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
  )
}

export default NikeCarosel;
