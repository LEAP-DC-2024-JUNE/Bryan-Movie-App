import { getDataFromTMBD } from "@/utils/service";
import CarouselSlide from "./CarouselSlide";
import { PlayIcon, StarIcon } from "./Icons";

const NowPlaying = async () => {
  const movies = await getDataFromTMBD("/movie/now_playing");
  return <CarouselSlide movies={movies} />;
};

export default NowPlaying;
