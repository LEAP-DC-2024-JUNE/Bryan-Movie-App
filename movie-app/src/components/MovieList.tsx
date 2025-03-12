import { RightArrow } from "./Icons";
import MovieCard from "./MovieCard";
import { getDataFromTMBD } from "@/utils/service";

const MovieList = async ({ type }: { type: string }) => {
  const movies = await getDataFromTMBD("/movie/" + type);
  let title;
  switch (type) {
    case "upcoming":
      title = "Upcoming";
      break;
    case "top_rated":
      title = "Top Rated";
      break;
    case "popular":
      title = "Popular";
      break;
  }
  return (
    <div className="flex flex-col items-center gap-8 px-5">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          See more{" "}
          <span className="stroke-[#18181B] dark:stroke-white">
            <RightArrow />
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-stretch justify-around gap-5">
        {movies.map((movie: MovieType, i: number) => {
          return (
            <MovieCard
              key={"" + i}
              title={movie.original_title}
              rating={movie.vote_average}
              imgSrc={movie.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
