import { PlayIcon, StarIcon } from "./Icons";
type Props = {
  imgSrc: string;
  title: string;
  description: string;
  rating: number;
};
const CarouselCard = ({ imgSrc, title, description, rating }: Props) => {
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
        <div>
          <button
            className="flex items-center justify-center gap-2
                      bg-black dark:bg-[#18181B]
                      text-white py-2 px-4 rounded-md "
          >
            <PlayIcon />
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
