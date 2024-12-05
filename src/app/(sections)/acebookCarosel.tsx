import React from "react";

import ToastButton from "@/components/toastButton";
import { Button } from "@/components/ui/button";

const SpareCarousel = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-lg space-y-6 rounded-lg bg-white p-8 shadow-2xl transition duration-300 hover:scale-105">
        <h1 className="text-center text-3xl font-bold tracking-tight text-honblue">
          More to Come Soon
        </h1>
        <div className="flex justify-center">
          <ToastButton
            message="Thank you for checking out my projects"
            buttonName="Click Me"
          />
        </div>
        <p className="mt-4 text-center text-lg text-fedblue">
          Want to work with me on a project? Please get in touch.
        </p>
        <div className="flex justify-center">
          <a href="/contact">
            <Button className="mt-4 rounded-md bg-fedblue  px-6 py-2 text-white duration-200 hover:bg-honblue">
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpareCarousel;
