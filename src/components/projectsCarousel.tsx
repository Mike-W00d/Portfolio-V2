import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import BaldBibleCarosel from "@/app/(Pages)/projects/bald-bible/carosel";
import AcebookCarosel from "@/app/(Pages)/projects/acebook/carosel";
import Image from "next/image";
import { Button } from "./ui/button";
import PortfolioCarosel from "@/app/(Pages)/projects/portfolio/carosel";
import NikeCarosel from "@/app/(Pages)/projects/nike-clone/carosel";

export function ProjectsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl h-max"
    >
      <CarouselContent>
        <CarouselItem className="h-[80vh] w-[80vh]">
          <BaldBibleCarosel />
        </CarouselItem>
        <CarouselItem>
          <PortfolioCarosel />
        </CarouselItem>
        <CarouselItem>
          <NikeCarosel />
        </CarouselItem>
        <CarouselItem>
          <AcebookCarosel />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-fedblue text-white rounded-r-full shadow-lg" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-fedblue text-white rounded-l-full shadow-lg" />
    </Carousel>
  );
}
