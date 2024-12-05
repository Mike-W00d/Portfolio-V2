import React from 'react'
import { Metadata } from "next";
import Image from 'next/image';
import { ProjectsCarousel } from '@/components/projectsCarousel';

export const metadata: Metadata = {
  title: 'Projects | Michael Wood | Full Stack Developer',
};


const Projects = () => {
  return (
    <div className='w-full flex flex-col items-center overflow-x-hidden'>
      <h1 className='font-bold text-4xl text-fedblue text-center mb-10 mt-4'>
        Projects
      </h1>
      <ProjectsCarousel />
    </div>
  );
}

export default Projects
