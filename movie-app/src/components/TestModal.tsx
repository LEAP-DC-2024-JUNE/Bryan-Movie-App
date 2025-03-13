"use client";
import { PlayIcon } from "./Icons";
import YouTube from "react-youtube";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const YouTubeModal = ({ id }: { id: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="flex items-center justify-center gap-2
                            bg-black dark:bg-[#18181B]
                             text-white py-2 px-4 rounded-md "
        >
          <PlayIcon />
          Watch Trailer
        </button>
      </DialogTrigger>
      <DialogContent className="w-full h-full p-0">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="w-full">
          {id && (
            <YouTube
              videoId={id}
              opts={{
                width: "100%",
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                  rel: 0,
                },
                host: "https://www.youtube.com",
              }}
              onError={() => alert("Failed to load the video.")}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default YouTubeModal;
