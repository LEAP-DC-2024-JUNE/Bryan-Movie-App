"use client";

import { useTheme } from "next-themes";
import { MovieIcon } from "./Icons";
import Mode from "./Mode";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
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
          <button className="" onClick={toggleTheme}>
            <Mode type="theme" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
