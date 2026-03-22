import Image from "next/image";

import { Button } from "@/components/ui/button";

const FplCarosel = () => {
  return (
    <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-xl">
      <span className="my-1 text-4xl font-bold text-fedblue">
        FPL Table Pro
      </span>{" "}
      <span className="text-lg text-honblue">
        <span className="my-1 font-semibold"> Tech Stack - </span> TypeScript,
        Next.js, React, PostgresSQL - Supabase, TailwindCSS, shadcn/ui
        <br />
        <span className="my-1 font-semibold"> Data Validation - </span>
        Zod
      </span>
      <span className="my-1 text-fedblue">
        {" "}
        A Fantasy Premier League management app that lets users track and
        manage their FPL teams with a modern web interface, powered by
        Supabase auth and the official FPL API{" "}
      </span>
      <div className="flex min-h-0 flex-1 w-full items-center justify-center">
        <Image
          src="/Fpltableprohero.png"
          alt="Screenshot of FPL Table Pro"
          width={700}
          height={400}
          className="max-h-[45vh] w-auto rounded-lg object-contain"
        />
      </div>
      <div className="mt-3 flex items-center justify-center space-x-4">
        <a href="https://github.com/Mike-W00d/fpl" className="text-blue-500">
          <Image
            src="/github.png"
            height={50}
            width={40}
            className="hover:scale-110 hover:cursor-pointer"
            alt="GitHub logo and link to FPL Table Pro GitHub repository"
          />
        </a>
        <a href="https://www.fpltablepro.com" target="_blank" rel="noopener noreferrer">
          <Button className="bg-fedblue hover:bg-honblue">
            View Live Site
          </Button>
        </a>
      </div>
    </div>
  );
};

export default FplCarosel;
