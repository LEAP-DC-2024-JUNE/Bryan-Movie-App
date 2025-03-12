import { StarIcon } from "./Icons";

const MovieCard = () => {
  return (
    <div className="w-32 rounded-lg overflow-hidden">
      <div className="">
        <img src="santa.jpg" alt="" />
      </div>
      <div className="flex flex-col gap-1 p-2 bg-gray-200">
        <div className="flex items-center gap-1">
          <StarIcon />
          <div>
            <p className="text-lg font-semibold">
              6.9
              <span className="text-base text-gray-500 font-medium">/10</span>
            </p>
          </div>
        </div>
        <p>Dear Santa</p>
      </div>
    </div>
  );
};

export default MovieCard;
