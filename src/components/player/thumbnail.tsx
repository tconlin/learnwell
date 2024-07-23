import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import { PlayIcon } from "@heroicons/react/20/solid";

export const VideoThumbnail = ({
  url,
  videoId,
}: {
  url: string;
  videoId: string;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/video/${videoId}`);
  };

  return (
    <div className="w-96 h-96">
      <ReactPlayer
        url={url}
        onClick={handleClick}
        light={true}
        playIcon={<PlayIcon color="#fff" width={72} height={72} />}
        width="100%"
        height="100%"
      />
    </div>
  );
};
