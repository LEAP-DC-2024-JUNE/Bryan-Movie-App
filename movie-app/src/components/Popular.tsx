import { RightArrow } from "./Icons";
import MovieCard from "./MovieCard";

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-5">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-2xl font-semibold">Upcoming</h3>
        <div className="flex items-center gap-2">
          See more <RightArrow />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Popular;
