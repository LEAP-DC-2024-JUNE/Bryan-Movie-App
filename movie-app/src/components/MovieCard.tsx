import { StarIcon } from "./Icons";

const MovieCard = ({
  title,
  rating,
  imgSrc,
}: {
  title: string;
  rating: number;
  imgSrc: string;
}) => {
  return (
    <div className="max-w-[155px]  rounded-lg overflow-hidden bg-gray-200  dark:bg-[#27272A]">
      <div className="">
        <img src={"https://image.tmdb.org/t/p/original" + imgSrc} alt="" />
      </div>
      <div className="flex flex-col gap-1 p-2">
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
        <p>{title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
