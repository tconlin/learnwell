import { VideoFeedAtom } from "@/store/feed";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getFeedContent } from "@/lib/api/feed";
import { Video } from "@/types";
import { CircularProgress } from "../utils/circularProgress";
import { P } from "@/design/typography";

export const Feed = () => {
  const [videoFeed, setVideoFeed] = useAtom(VideoFeedAtom);
  const [isLoading, setIsLoading] = useState(false);

  async function loadFeed() {
    try {
      setIsLoading(true);
      const user_id = "tconlin";
      const content: Video[] = await getFeedContent({ userId: user_id });
      setVideoFeed(content);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadFeed();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full justify-center flex items-center mx-auto mt-18">
        <CircularProgress color="dark" size="large" />
      </div>
    );
  }
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6"
    >
      {videoFeed.map((video: Video) => (
        <li key={video.id} className="relative">
          <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
          </div>
          <P>{video.title}</P>
        </li>
      ))}
    </ul>
  );
};
