import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const AcebookCarosel = () => {
  return (
    <div>
    <div className="flex bg-white w-full rounded-lg shadow-xl flex-col p-6">
      <span className="text-fedblue text-4xl font-bold">Acebook</span>{" "}
      {/* Increased text size */}
      <span className="text-honblue text-2xl font-bold">
        Primary Language - JavaScript
      </span>{" "}
      {/* Adjusted text size */}
      <span className="text-honblue text-lg">
        <span className="font-semibold"> Tech Stack - </span> MongoDB, Express, React,  Node.js,
        VanillaCSS,
      </span>
      <span className="text-fedblue"> A clone of Facebook made using the MERN stack </span>
      <div className="flex w-full justify-center">
        <Image
          src="/Acebook-user-view.png"
          alt="Screenshot of a logged in Users profile Page"
          width={700}
          height={700}
          className="rounded-lg"
        />
      </div>
      <div className="flex justify-center align-middle space-x-4 items-center m-5">
        <a
          href="https://github.com/Mike-W00d/Acebook"
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
        <a href="/projects/acebook">
          <Button className="bg-fedblue hover:bg-honblue">
            Learn more about this project
          </Button>
        </a>
      </div>
    </div>
  </div>
  )
}

export default AcebookCarosel;
