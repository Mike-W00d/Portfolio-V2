import { Metadata } from "next";
import React from "react";

import { ProjectsCarousel } from "@/components/projectsCarousel";

export const metadata: Metadata = {
  title: "Projects | Michael Wood | Full Stack Developer",
};

const Projects = () => {
  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden">
      <h1 className="mb-10 mt-4 text-center text-4xl font-bold text-fedblue">
        Projects
      </h1>
      <ProjectsCarousel />
    </div>
  );
};

export default Projects;
