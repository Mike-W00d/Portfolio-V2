import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from 'next/image';

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
            <span className="text-fedblue text-4xl font-bold">Bald Bible</span> {/* Increased text size */}
            <span className="text-honblue text-2xl">Primary Language - Javascript</span> {/* Adjusted text size */}
            <span>
              Tech Stack - Node, React, MongoDB, Express. Testing - Cypress, Jest
            </span>
            <Image
              src="/BaldBibleHome.jpg"
              alt="Screenshot of Bald Bible Home Page"
              width={800}  // Increased image size
              height={900} // Adjusted height accordingly
            />
            <a
              href="https://github.com/Mike-W00d/Bald-Bible"
              className="text-blue-500 mt-4"
            >
              Link to the Github Repo
            </a>
          </div>
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-r-full shadow-lg"/>
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-l-full shadow-lg"/>
    </Carousel>
  );
}
