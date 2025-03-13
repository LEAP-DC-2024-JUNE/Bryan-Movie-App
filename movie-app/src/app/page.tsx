import MovieList from "@/components/MovieList";
import NowPlaying from "@/components/NowPlaying";
import YouTubeModal from "@/components/TestModal";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* <YouTubeModal id={"VKoSRlNAtYI"} /> */}
      <NowPlaying />
      <MovieList type="upcoming" />
      <MovieList type="top_rated" />
      <MovieList type="popular" />
    </div>
  );
};

export default HomePage;
