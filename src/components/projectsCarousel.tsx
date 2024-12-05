import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import BaldBibleCarosel from "@/app/(sections)/baldCarosel";
import AcebookCarosel from "@/app/(sections)/acebookCarosel";
import PortfolioCarosel from "@/app/(sections)/portfolioCarosel";
import NikeCarosel from "@/app/(sections)/nikeCarosel";

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
