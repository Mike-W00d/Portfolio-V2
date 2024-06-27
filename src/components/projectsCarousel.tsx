import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import BaldBibleCarosel from "@/app/(Pages)/projects/bald-bible/carosel";
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
          <BaldBibleCarosel />
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-r-full shadow-lg" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-l-full shadow-lg" />
    </Carousel>
  );
}
