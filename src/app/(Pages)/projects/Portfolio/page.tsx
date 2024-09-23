import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ToastButton from "@/components/toastButton";  
import { toast } from "sonner";

export const metadata: Metadata = {
  title: "Portfolio Projects Page",
};

const PorfolioPage = () => {
  return (
    <section className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex rounded-lg bg-white flex-col w-full max-w-4xl p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Title and Tech Stack */}
          <h1 className="text-fedblue text-3xl font-bold mt-3">
            Next Portfolio
          </h1>
          <span className="text-honblue text-xl font-bold">Tech Stack</span>
          <span className="text-honblue text-lg text-center">
            TypeScript, Next.js, React, MongoDB, TailwindCSS, Cloudinary,
            Resend, GoogleRecaptcha, React photo album, Not another react
            Lightbox
          </span>

          {/* Overview */}
          <h2 className="text-fedblue text-2xl font-bold text-center">
            Overview
          </h2>
          <p className="text-fedblue">
            I wanted to make a new Portfolio site to show off my projects and to
            work on my skills working with Next.js and TailwindCSS. I did not
            just want the site to be a static page with links to my projects, I
            wanted to have some full stack functionality involved also. There
            are plenty of template or tutorial-designed portfolios out there but
            I wanted my website to be mine and to be able to make all the
            design decisions myself. To make it full-stack I have added an image
            gallery and a contact form which uses server components and API
            routes to function. I also intend on making a blog which is
            something all developers seem to have but as I write this I have not
            got around to it yet.

          </p>
          {/* Tech Functionality */}
          <h3 className="text-2xl text-fedblue font-bold">Functionality</h3>
          <ul className="text-fedblue list-disc list-inside space-y-1">
            <li>
              Dynamic page elements: sliding side Nav which collapses into a
              Hamburger menu on smaller devices
            </li>
            <li>
              Gallery Page: Images fetched from a MongoDB database, Images have
              a lightbox with captions
            </li>
            <li>
              Contact Form Security: Score-based GoogleRecpatcha to stop Bots
              from spamming
            </li>
            <li>Responsive: Full responsiveness across screen sizes</li>
            <li>SEO: Metadata tags and Alt tags for good SEO</li>
            <li>
              Resend: Contact form emails me and the sender email to confirm
              message being sent
            </li>
            <li>
              Projects Carousel shows off multiple projects in a clean and easy
              to Navigate way
            </li>
          </ul>

          {/* The Journey */}
          <h2 className="text-fedblue text-2xl font-bold text-center">
            The Journey
          </h2>
          <h3 className="text-honblue font-bold"> Design </h3>
          <p className="text-fedblue">
            I used coolors.co to help me choose my websites colour scheme. I
            went with blue, grey and white as I think it has a clean
            professional look and added my two custom text colours into my
            TailwindConfig. They are{" "}
            <span className="text-fedblue font-bold"> honblue </span>the darker
            blue and <span className="text-honblue font-bold"> fedblue </span>{" "}
            the lighter blue. The sliding SideNav was a feature I wanted to add
            to the site as I think it looks good and is easy to navigate.
          </p>
          <h3 className="text-honblue font-bold"> Gallery </h3>
          <p className="text-fedblue">
            I first made the Gallery page using cloudinary to store the images online and then used the CldImage component 
            to display them on the page and made my own masonry grid to display them in a clean and responsive way. 
            However, this approach had a few issues when trying to implement a lightbox, so I decided to store the URLs from 
            the cloudinary store along with a caption in a MongoDB database and fetch them from there. This worked well as it allowed 
            me to use a react photo Album package and lightbox which work together to display the images in a similar pattern but this time with a lightbox.
            This approach is slightly slower for loading speed however I think the lightbox is a good feature to have and worth the trade-off.

          </p>
          <h3 className="text-honblue font-bold"> Contact Form </h3>
          <p className="text-fedblue">
            After some research online I decided to use Resend to send emails from the contact form as it was recommended for developers and had good documentation.
            I created a form using the react-hook-form package and Zod for type validation. Resend uses a server component to send the data rather than a standard Api route like googleRecaptha and my database fetch.
            To stop the form from being spammed by bots I added in score-based GoogleRecaptcha which only allows the form to be submitted if the user has a high enough score which is gathered by how you navigate the website.
            When filled correctly passing the validation the form then sends an email to myself and the sender.
          </p>
          <h3 className="text-honblue font-bold"> Projects Carosel </h3>
          <p className="text-fedblue">
            The projects carousel is made using Shadcn which makes the process a lot simpler than making one from scratch. I added an individual page for each project which is linked to from the carousel.
            and allows me to talk about how each project was made in detail. 
          </p>
          {/* Reflection */}
          <h2 className="text-fedblue text-2xl font-bold text-center">
            Reflection
          </h2>
          <h3 className="text-honblue font-bold"> Gallery </h3>
          <span className="text-fedblue">
            I wish I had used the MongoDB database from the start as it would have saved me time in the long run.
            I also input the data to the database manually which was time-consuming and I could have made an upload page to do this for me. But I already created one of these for BaldBible and when I uploaded the Images, I intended on just using cloudinary alongside the NextJs CLDImage component. 
            I am glad I used cloudinary as it also allowed me to upload my About Video very easily using the CLDVideo component. 
          </span>
          <h3 className="text-honblue font-bold"> Blog</h3>
          <span className="text-fedblue">
            I left the blog page available and empty to show that you do not always get everything done in one go. I intend on making a blog page in the future, but I have signed 
            up to the JavaScript Mastery Next.js 15 course which I want to complete first to advance my skills further and maybe give me a new idea of how I am going to make the blog.
          </span>
          <h3 className="text-honblue font-bold">Bugs</h3>
          <span className="text-fedblue">
            I used overflow-y-auto creates to make the content scroll over the background however on mobile devices this can create two scroll bars which allows you to scroll the Header off the screen. 
            I am sure this is an easy fix and to do with the fact that the Header is a different size on mobile devices, and I have hardcoded 68px to the height of the scrollable area. 
            I will fix this in the future currently it is only a very slight optimisation and probably something only I will notice. If you find any more, please contact me, the form works.
          </span>
          {/* Links */}
          <div className="flex space-x-4 items-center pt-3">
            <a href="/projects">
              <Button className="bg-fedblue hover:bg-honblue">
                See More Projects
              </Button>
            </a>
            <ToastButton message="You're already on it :)" buttonName="View Live Site" />
            <a href="https://github.com/Mike-W00d/Porfolio-V2">
              <Image
                src="/github.png"
                height={50}
                width={40}
                className="hover:cursor-pointer hover:scale-110"
                alt="GitHub logo and link to my Portfolio GitHub repository"
              />
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorfolioPage;
