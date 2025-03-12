import { MovieIcon } from "./Icons";
import Mode from "./Mode";

const Header = () => {
  return (
    <div className="w-full px-5">
      <div className="flex items-center justify-between h-[59px]">
        <div className="flex items-center gap-2">
          <span className="stroke-[#4338CA]">
            <MovieIcon />
          </span>
          <h1 className="text-indigo-700 italic font-bold">Movie Z</h1>
        </div>
        <div className="flex items-center gap-3">
          <Mode type="search" />
          <Mode type="moon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
