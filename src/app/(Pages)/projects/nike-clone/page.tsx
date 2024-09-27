import React from 'react'
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Nike Clone Projects Page',
};

const Page = () => {
  return (
    <section className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex rounded-lg bg-white flex-col w-full max-w-4xl p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Title and Tech Stack */}
          <h1 className="text-fedblue text-3xl font-bold mt-3">
            Nike Clone
          </h1>
          <span className="text-honblue text-xl font-bold">Tech Stack</span>
          <span className="text-honblue text-lg text-center">
          Next.js, React, TailwindCSS, JavaScript
          </span>

          {/* Overview */}
          <h2 className="text-fedblue text-2xl font-bold text-center">
            Overview
          </h2>
          <p className="text-fedblue">
            This projects was made while I was initally learning Next.js and TailwindCSS. 
            It was made following a tutorial by JavaScript Mastery on YouTube. Although this means I did not come up with the idea myself, 
            I did learn a lot from making it. I always find it easier to learn through doing and this project was no exception. 
            I am showing it off here as it is a good example of my ability to follow tutorials and learn from them and I also delpoyed my own 
            version of the project to Netlify. It really helps when your learning a new framework or library to be able to see what high quality 
            code looks like and how it is structured.
          </p>
          {/* Links */}
          <div className="flex space-x-4 items-center pt-3">
            <a href="/projects">
              <Button className="bg-fedblue hover:bg-honblue">
                See More Projects
              </Button>
            </a>
            <a href="https://nike-clone-mw.netlify.app/">
              <Button className="bg-fedblue hover:bg-honblue">
                View Live Site
              </Button>
            </a>
            <a href="https://github.com/Mike-W00d/Nike-Clone">
              <Image
                src="/github.png"
                height={50}
                width={40}
                className="hover:cursor-pointer hover:scale-110"
                alt="GitHub logo and link to Nike Clone GitHub repository"
              />
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
