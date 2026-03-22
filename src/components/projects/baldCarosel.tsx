import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

const BaldBibleCarosel = () => {
  return (
    <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-xl">
      <span className="my-1 text-4xl font-bold text-fedblue">Bald Bible</span>{" "}
      <span className="text-lg text-honblue">
        <span className="my-1 font-semibold"> Tech Stack - </span> JavaScript,
        Node.js, React, MongoDB, Express, VanillaCSS
        <br />
        <span className="my-1 font-semibold"> Testing - </span>
        Cypress, Jest <br />
        <span className="my-1 font-semibold">Image Handling - </span>
        Cloudinary
      </span>
      <span className="my-1 text-fedblue">
        {" "}
        A pintrest style Image sharing app, designed to be a postive place on
        the internet for those suffering with hairloss{" "}
      </span>
      <div className="flex min-h-0 flex-1 w-full items-center justify-center">
        <Image
          src="/BaldBibleHome.jpg"
          alt="Screenshot of Bald Bible Home Page"
          width={700}
          height={700}
          className="max-h-[45vh] w-auto rounded-lg object-contain"
        />
      </div>
      <div className="mt-3 flex items-center justify-center space-x-4">
        <a
          href="https://github.com/Mike-W00d/Bald-Bible"
          className="text-blue-500"
        >
          <Image
            src="/github.png"
            height={50}
            width={40}
            className="hover:scale-110 hover:cursor-pointer"
            alt="GitHub logo and link to Bald Bible GitHub repository"
          />
        </a>
        <a href="/projects/bald-bible">
          <Button className="bg-fedblue hover:bg-honblue">
            Learn more about this project
          </Button>
        </a>
      </div>
    </div>
  );
};

export default BaldBibleCarosel;
