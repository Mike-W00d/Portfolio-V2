import Image from "next/image";
import React from "react";

const Baldbible = () => {
  return (
    <div className="flex rounded-lg bg-white flex-col">
      <h1 className="text-fedblue text-3xl font-bold"> Bald Bible </h1>
      <span className="text-honblue text-xl"> Tech Stack </span>
      <span className="text-honblue text-lg">
        {" "}
        Node.js, React, MongoDB, Express, VanillaCSS, Jest, Cypress, Cloudinary{" "}
      </span>
      <span className="text-fedblue">
        {" "}
        Our final group project while at Makers. Our team consisted of 4
        software developers and 2 quality engineers, and we were given 8 days to
        reach MVP building anything we liked which we would then present to a
        live audience at the end of our course. We decided on to build Bald
        Bible to try and create a positive place on the internet for those
        suffering with hair loss. One of our team pitched the idea drawing from
        his own experience of losing his hair where all you see online when you
        google hair loss are websites selling you products to try preventing
        hair loss rather than encouraging you to embrace it. 8 days to MVP Main
        Language: Javascript - React frontend & Node.js Backend Database:
        MongoDB Testing: Backend: Jest , Frontend: Cypress Other Tech: Express,
        Cloudinary - for image storing, Bycrypt, CSS, Vite{" "}
      </span>
      <Image
        src="/BB-Presentation.jpeg"
        alt="My team and I presenting Bald Bible"
        width={700}
        height={700}
        />
      <Image
        src='/BB-Wireframes.png'
        alt='Wireframe pages of Bald Bible made while planning'
        width={700}
        height={700}
      />
      <Image
        src='/BaldBibleHome.jpg'
        alt='Home page of Bald Bible'
        width={700}
        height={700}
        />
        <Image 
          src="/BB-Trello.png"
          alt="Our Trello board for Bald Bible"
          width={700}
          height={700}
          />
    </div>
  );
};

export default Baldbible;
