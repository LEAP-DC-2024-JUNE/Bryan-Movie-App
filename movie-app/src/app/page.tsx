import NowPlaying from "@/components/NowPlaying";
import Popular from "@/components/Popular";
import TopRated from "@/components/TopRated";
import Upcoming from "@/components/Upcoming";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-8">
      <NowPlaying />
      <Upcoming />
      <TopRated />
      <Popular />
    </div>
  );
};

export default HomePage;
