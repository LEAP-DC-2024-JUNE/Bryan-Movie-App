"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SearchIcon, SunIcon } from "./Icons";

type Props = { type: string };
const Mode = ({ type }: Props) => {
  return (
    <div
      className="border-gray-200 dark:border-gray-700
                    stroke-[#18181B] dark:stroke-white
                    border-2 w-9 h-9 rounded-md
                    flex items-center justify-center"
    >
      <ModeIcon type={type} />
    </div>
  );
};

const ModeIcon = ({ type }: Props) => {
  const { theme } = useTheme();
  switch (type) {
    case "search":
      return <SearchIcon />;
    case "theme":
      return theme === "light" ? <MoonIcon /> : <SunIcon />;
    default:
      return null;
  }
};

export default Mode;
