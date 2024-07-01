'use client';

import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { Button } from '@/components/ui/button';


const About = () => {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
      <CldVideoPlayer
        width="1080"
        height="1080"
        src="https://res.cloudinary.com/dpfptjeqd/video/upload/v1729520633/About_Video_wescry.mov"
      />
      <p className="mt-4 text-fedblue text-center">Any further questions please contact me</p>
      <a href="/">
        <Button className="bg-fedblue hover:bg-honblue mt-4">
          Return to Home
        </Button>
      </a>
    </div>
  );
}

export default About;
