import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

const BaldBibleCarosel = () => {
  return (
    <div>
      <div className="flex w-full flex-col rounded-lg bg-white p-6 shadow-xl">
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
        <div className="flex w-full justify-center">
          <Image
            src="/BaldBibleHome.jpg"
            alt="Screenshot of Bald Bible Home Page"
            width={700}
            height={700}
            className="rounded-lg"
          />
        </div>
        <div className="m-5 flex items-center justify-center space-x-4 align-middle">
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
    </div>
  );
};

export default BaldBibleCarosel;
