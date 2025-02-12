import React from "react";

import { BlogForm } from "@/components/blogForm";

const writePost = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-6 mt-4 flex text-3xl font-bold text-fedblue">
        Write a Post
      </h1>
      <BlogForm />
    </div>
  );
};

export default writePost;
