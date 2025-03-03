"use client";

import { CldUploadButton } from "next-cloudinary";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-fedblue">
          {" "}
          Upload Cover Image for blog here
        </h1>
        <CldUploadButton uploadPreset="Blog-Upload" />
      </div>
    </div>
  );
};

export default page;
