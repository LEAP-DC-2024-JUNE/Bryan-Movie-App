import MovieList from "@/components/MovieList";
import NowPlaying from "@/components/NowPlaying";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-8">
      <NowPlaying />
      <MovieList type="upcoming" />
      <MovieList type="top_rated" />
      <MovieList type="popular" />
    </div>
  );
};

export default HomePage;
