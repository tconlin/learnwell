import { useRouter } from "next/router";
import { Video } from "@/types";
import { useState, useEffect } from "react";
import { CircularProgress } from "@/components/utils/circularProgress";
import { VideoPlayer } from "@/components/player";
import { Feed } from "@/components/feed";
import { getFeedContent } from "@/lib/api/video";

export default function VideoDetail() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [video, setVideo] = useState<Video | null>(null);
  const [videoFeed, setVideoFeed] = useState<Video[]>([]);
  const { id } = router.query;

  async function getVideo() {
    try {
      setIsLoading(true);
      const videoId = id as string;
      if (videoId) {
        const user_id = "tconlin";
        const content: Video[] = await getFeedContent({ userId: user_id });
        const filteredContent = content.filter((v) => v.id !== videoId);
        const mainVideoIndex = content.findIndex((v) => v.id === videoId);
        if (mainVideoIndex === -1)
          throw new Error("main video not found in feed");
        setVideoFeed(filteredContent);
        setVideo(content[mainVideoIndex]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getVideo();
  }, [id]);

  if (isLoading || !video) {
    return (
      <div className="w-full justify-center flex items-center mx-auto mt-28">
        <CircularProgress color="dark" size="large" />
      </div>
    );
  }

  return (
    <div className="flex-col md:grid md:grid-cols-6">
      <div className="md:col-span-4 m-2">
        <VideoPlayer video={video} />
      </div>
      <div className="md:col-span-2 m-2">
        <Feed videoFeed={videoFeed} verticalFeed={true} />
      </div>
    </div>
  );
}
