import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ToastButton from "@/components/toastButton";

const PortfolioCarosel = () => {
  return (
    <div>
      <div className="flex bg-white w-full rounded-lg shadow-xl flex-col p-6">
        <span className="text-fedblue text-4xl font-bold my-1">Next Portfolio</span>{" "}
        <span className="text-honblue text-lg my-1">
          <span className="font-semibold my-1"> Tech Stack - </span> TypeScript, Next.js, React, MongoDB, Resend,
          TailwindCSS, GoogleRecaptcha
          <br />
          <span className="font-semibold my-1">Image Handling - </span>Cloudinary, React photo album, Not another react Lightbox
        </span>
        <span className="text-fedblue my-1">
          {" "} 
          My own developer Portfolio built in Next.js to show off my projects, photos and give people an easy way to get in touch with me{" "}
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
        <div className="flex justify-center align-middle space-x-4 items-center m-5">
          <a
            href="https://github.com/Mike-W00d/Porfolio-V2"
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
          <a href="/projects/Portfolio">
            <Button className="bg-fedblue hover:bg-honblue">
              Learn more about this project
            </Button>
          </a>
          <ToastButton message="You're already on it :)" buttonName="View Live Site" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarosel;
