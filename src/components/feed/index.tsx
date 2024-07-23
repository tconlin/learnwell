import { VideoFeedAtom } from "@/store/feed";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getFeedContent } from "@/lib/api/video";
import { Video } from "@/types";
import { CircularProgress } from "@/components/utils/circularProgress";
import { P } from "@/design/typography";
import { VideoThumbnail } from "@/components/player/thumbnail";

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
      <div className="w-full justify-center flex items-center mx-auto mt-28">
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
          <div className="group aspect-h-7 aspect-w-10 block w-full h-full overflow-hidden rounded-lg bg-black focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <VideoThumbnail url={video.video_url} videoId={video.id} />
          </div>
          <P>{video.title}</P>
        </li>
      ))}
    </ul>
  );
};
