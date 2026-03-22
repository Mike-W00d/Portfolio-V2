import { Metadata } from "next";
import React from "react";

import { ProjectsCarousel } from "@/components/projects/projectsCarousel";

export const metadata: Metadata = {
  title: "Projects | Michael Wood | Full Stack Developer",
};

const Projects = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full flex-col items-center overflow-hidden">
      <h1 className="mb-4 mt-4 text-center text-4xl font-bold text-fedblue">
        Projects
      </h1>
      <div className="flex min-h-0 w-full flex-1 items-center justify-center">
        <ProjectsCarousel />
      </div>
    </div>
  );
};

export default Projects;
