import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const BaldBibleCarosel = () => {
  return (
    <div>
      <div className="flex bg-white w-full rounded-lg shadow-xl flex-col p-6">
        <span className="text-fedblue text-4xl font-bold my-1">Bald Bible</span>{" "}
        <span className="text-honblue text-lg">
          <span className="font-semibold my-1"> Tech Stack - </span> JavaScript, Node.js, React,
          MongoDB, Express, VanillaCSS
          <br />
          <span className="font-semibold my-1"> Testing - </span>
          Cypress, Jest <br />
          <span className="font-semibold my-1">Image Handling - </span>Cloudinary
        </span>
        <span className="text-fedblue my-1"> A pintrest style Image sharing app, designed to be a postive place on the internet for those suffering with hairloss </span>
        <div className="flex w-full justify-center">
          <Image
            src="/BaldBibleHome.jpg"
            alt="Screenshot of Bald Bible Home Page"
            width={700}
            height={700}
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-center align-middle space-x-4 items-center m-5">
          <a
            href="https://github.com/Mike-W00d/Bald-Bible"
            className="text-blue-500"
          >
            <Image
              src="/github.png"
              height={50}
              width={40}
              className="hover:cursor-pointer hover:scale-110"
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
