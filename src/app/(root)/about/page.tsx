'use client';

import React from 'react'
import 'next-cloudinary/dist/cld-video-player.css';
import { Button } from '@/components/ui/button';


const About = () => {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
      <iframe
  width="316"
  height="562"
  src="https://www.youtube.com/embed/vcbH8Nv_9ew"
  title="About Me"
  style={{ border: 'none' }}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
      <p className="mt-4 text-fedblue text-center">Any further questions please contact me</p>
      <a href="/#about">
        <Button className="bg-fedblue hover:bg-honblue mt-4">
          Return to Home
        </Button>
      </a>
    </div>
  );
}

export default About;
