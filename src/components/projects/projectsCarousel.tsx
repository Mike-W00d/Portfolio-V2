import AcebookCarosel from "@/components/projects/acebookCarosel";
import BaldBibleCarosel from "@/components/projects/baldCarosel";
import FplCarosel from "@/components/projects/fplCarosel";
import NikeCarosel from "@/components/projects/nikeCarosel";
import PortfolioCarosel from "@/components/projects/portfolioCarosel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProjectsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="h-full w-full max-w-4xl"
    >
      <CarouselContent className="h-full">
        <CarouselItem className="h-full">
          <FplCarosel />
        </CarouselItem>
        <CarouselItem className="h-full">
          <BaldBibleCarosel />
        </CarouselItem>
        <CarouselItem className="h-full">
          <PortfolioCarosel />
        </CarouselItem>
        <CarouselItem className="h-full">
          <NikeCarosel />
        </CarouselItem>
        <CarouselItem className="h-full">
          <AcebookCarosel />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-r-full bg-fedblue p-2 text-white shadow-lg" />
      <CarouselNext className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-l-full bg-fedblue p-2 text-white shadow-lg" />
    </Carousel>
  );
}
