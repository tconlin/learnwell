"use client";

import { Feed } from "@/components/feed";
import { useEffect, useState } from "react";
import { getFeedContent } from "@/lib/api/video";
import { Video } from "@/types";
import { CircularProgress } from "@/components/utils/circularProgress";

function Home() {
  const [videoFeed, setVideoFeed] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  return <Feed videoFeed={videoFeed} />;
}

export default Home;
