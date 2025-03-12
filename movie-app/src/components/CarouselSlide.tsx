"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { StarIcon } from "lucide-react";
import { PlayIcon } from "./Icons";
import CarouselCard from "./CarouselCard";

const CarouselSlide = ({ movies }: { movies: MovieType[] }) => {
  return (
    <Carousel opts={{ loop: true }} className="w-full" plugins={[Autoplay()]}>
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItem key={index}>
            <CarouselCard
              imgSrc={movie.backdrop_path}
              title={movie.original_title}
              description={movie.overview}
              rating={movie.vote_average}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselSlide;
