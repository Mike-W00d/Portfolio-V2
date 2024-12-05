import AcebookCarosel from "@/app/(sections)/acebookCarosel";
import BaldBibleCarosel from "@/app/(sections)/baldCarosel";
import NikeCarosel from "@/app/(sections)/nikeCarosel";
import PortfolioCarosel from "@/app/(sections)/portfolioCarosel";
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
      className="h-max w-full max-w-4xl"
    >
      <CarouselContent>
        <CarouselItem className="size-[80vh]">
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
      <CarouselPrevious className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-r-full bg-fedblue p-2 text-white shadow-lg" />
      <CarouselNext className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-l-full bg-fedblue p-2 text-white shadow-lg" />
    </Carousel>
  );
}
