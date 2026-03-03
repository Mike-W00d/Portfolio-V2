import Image from "next/image";
import React from "react";

import ToastButton from "@/components/toastButton";
import { Button } from "@/components/ui/button";

const PortfolioCarosel = () => {
  return (
    <div>
      <div className="flex w-full flex-col rounded-lg bg-white p-6 shadow-xl">
        <span className="py-1 text-4xl font-bold text-fedblue">
          Next Portfolio
        </span>{" "}
        <span className="py-1 text-lg text-honblue">
          <span className="my-1 font-semibold"> Tech Stack - </span> TypeScript,
          Next.js, React, MongoDB, Resend, TailwindCSS, GoogleRecaptcha
          <br />
          <span className="py-1 font-semibold">Image Handling - </span>
          Cloudinary, React photo album, Not another react Lightbox
        </span>
        <span className="py-1 text-fedblue">
          {" "}
          My own developer Portfolio built in Next.js to show off my projects,
          photos and give people an easy way to get in touch with me{" "}
        </span>
        <div className="flex w-full justify-center">
          <Image
            src="/nextHome.png"
            alt="Screenshot of Portfolio Home Page"
            width={700}
            height={700}
            className="rounded-lg"
          />
        </div>
        <div className="m-5 flex items-center justify-center space-x-4 align-middle">
          <a
            href="https://github.com/Mike-W00d/Porfolio-V2"
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
          <a href="/projects/next-port">
            <Button className="bg-fedblue hover:bg-honblue">
              Learn more about this project
            </Button>
          </a>
          <ToastButton
            message="You're already on it :)"
            buttonName="View Live Site"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarosel;
