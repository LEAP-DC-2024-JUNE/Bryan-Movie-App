import { getTrailerLink } from "@/utils/service";
import { PlayIcon, StarIcon } from "./Icons";
import YouTubeModal from "./TestModal";
import { useEffect, useState } from "react";
type Props = {
  imgSrc: string;
  title: string;
  description: string;
  rating: number;
  id: number;
};
const CarouselCard = ({ imgSrc, title, description, rating, id }: Props) => {
  const [key, setKey] = useState("");

  useEffect(() => {
    const get = async () => {
      setKey(await getTrailerLink(id));
    };

    get();
  }, []);
  return (
    <div>
      <img
        src={"https://image.tmdb.org/t/p/original" + imgSrc}
        alt=""
        height={246}
      />
      <div className="h-full flex flex-col gap-4 p-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-sm">Now Playing:</p>
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          <div className="flex items-center gap-1">
            <div
              className="fill-[#FDE047] stroke-[#FDE047]
                            dark:fill-white dark:stroke-white"
            >
              <StarIcon />
            </div>
            <div>
              <p className="text-lg font-semibold">
                {Math.round(rating * 10) / 10}
                <span className="text-base text-gray-500 font-medium">/10</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>{description}</p>
        </div>
        {key != "" && <YouTubeModal id={key} />}
      </div>
    </div>
  );
};

export default CarouselCard;
