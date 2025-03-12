import { PlayIcon, StarIcon } from "./Icons";

const NowPlaying = () => {
  return (
    <div>
      <img src="wicked.jpg" alt="" />
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-sm">Now Playing:</p>
            <h3 className="text-2xl font-semibold">Wicked</h3>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon />
            <div>
              <p className="text-lg font-semibold">
                6.9
                <span className="text-base text-gray-500 font-medium">/10</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>
        </div>
        <div>
          <button
            className="flex items-center justify-center gap-2 bg-black text-white
                            py-2 px-4 rounded-md "
          >
            <PlayIcon />
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
