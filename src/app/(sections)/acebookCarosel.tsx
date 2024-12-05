import React from 'react';
import { Button } from '@/components/ui/button';
import ToastButton from '@/components/toastButton';

const SpareCarousel = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-2xl p-8 space-y-6 transform transition duration-300 hover:scale-105">
        <h1 className="text-honblue text-3xl font-bold text-center tracking-tight">
          More to Come Soon
        </h1>
        <div className="flex justify-center">
          <ToastButton 
            message="Thank you for checking out my projects" 
            buttonName="Click Me"
          />
        </div>
        <p className="text-center text-fedblue text-lg mt-4">
          Want to work with me on a project? Please get in touch.
        </p>
        <div className="flex justify-center">
          <a href="/contact">
          <Button className="mt-4 bg-fedblue text-white  hover:bg-honblue duration-200 px-6 py-2 rounded-md">
            Get in Touch
          </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpareCarousel;