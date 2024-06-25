import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { Button } from "./ui/button";

export function ProjectsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl h-max"
    >
      <CarouselContent>
        <CarouselItem className="h-[75vh] w-[75vh]">
          <div className="flex bg-white w-full rounded-lg shadow-xl flex-col p-6">
            <span className="text-fedblue text-4xl font-bold">Bald Bible</span>{" "}
            {/* Increased text size */}
            <span className="text-honblue text-2xl font-bold">
              Primary Language - Javascript
            </span>{" "}
            {/* Adjusted text size */}
            <span className="text-honblue text-lg">
              <span className="font-semibold"> Tech Stack - </span> Node, React,
              MongoDB, Express, VanillaCSS<br />
              <span className="font-semibold"> Testing - </span>
              Cypress, Jest <br />
              <span className="font-semibold">Image Handling - </span>Cloudinary
            </span>
            <div className="flex w-full justify-center">
            <Image
              src="/BaldBibleHome.jpg"
              alt="Screenshot of Bald Bible Home Page"
              width={700}
              height={700}
              className="rounded-lg"
            />
            </div>
            <div className="flex justify-center align-bottom space-x-4 items-center m-5">
              <a
                href="https://github.com/Mike-W00d/Bald-Bible"
                className="text-blue-500 mt-4"
              >
                <Image
                  src="/github.png"
                  height={30}
                  width={40}
                  className="hover:cursor-pointer hover:scale-110"
                  alt="GitHub logo and link to Bald Bible GitHub repository"
                />
              </a>
              <a href="/projects/bald-bible">
                <Button className="bg-fedblue hover:bg-honblue">
                  Learn more about this project
                </Button>
              </a>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-r-full shadow-lg" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-l-full shadow-lg" />
    </Carousel>
  );
}
