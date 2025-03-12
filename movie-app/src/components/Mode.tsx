import { MoonIcon, SearchIcon } from "./Icons";

type Props = { type: string };
const Mode = ({ type }: Props) => {
  return (
    <div
      className="border-gray-200 border-2 w-9 h-9 rounded-md
                    flex items-center justify-center"
    >
      <ModeIcon type={type} />
    </div>
  );
};

const ModeIcon = ({ type }: Props) => {
  switch (type) {
    case "search":
      return <SearchIcon />;
    case "moon":
      return <MoonIcon />;
    default:
      return null;
  }
};

export default Mode;
