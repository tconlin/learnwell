import { useRouter } from "next/router";
import { Video } from "@/types";
import { useState, useEffect } from "react";
import { getVideoById } from "@/lib/api/video";
import { CircularProgress } from "@/components/utils/circularProgress";
import { VideoPlayer } from "@/components/player";

export default function VideoDetail() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [video, setVideo] = useState<Video | null>(null);

  async function getVideo() {
    try {
      setIsLoading(true);
      const videoId = router.query.id as string;
      if (!videoId) throw new Error("videoId is undefined");
      const video: Video = await getVideoById({ videoId });
      setVideo(video);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getVideo();
  }, []);

  if (isLoading || !video) {
    return (
      <div className="w-full justify-center flex items-center mx-auto mt-28">
        <CircularProgress color="dark" size="large" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <VideoPlayer url={video.video_url} />
    </div>
  );
}

// necessary empty function to handle page refresh with router.query
export async function getServerSideProps() {
  return {
    props: {},
  };
}
