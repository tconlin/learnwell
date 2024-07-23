import { Video } from "@/types";
import { VideoThumbnail } from "@/components/player/thumbnail";

export const Feed = ({
  videoFeed,
  verticalFeed = false,
}: {
  videoFeed: Video[];
  verticalFeed?: boolean;
}) => {
  return (
    <ul
      role="list"
      className={`grid grid-cols-1 ${
        !verticalFeed && " sm:grid-cols-2 lg:grid-cols-3 "
      } sm:gap-x-6 gap-x-4 gap-y-8`}
    >
      {videoFeed.map((video: Video) => (
        <li key={video.id} className="relative">
          <VideoThumbnail video={video} />
        </li>
      ))}
    </ul>
  );
};
