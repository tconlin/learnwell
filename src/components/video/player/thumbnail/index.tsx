import ReactPlayer from "react-player";
import { PlayIcon } from "@heroicons/react/20/solid";
import { Video } from "@/types";
import { H1, P } from "@/design/typography";
import { timeAgo } from "@/utils/helpers";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export const VideoThumbnail = ({ video }: { video: Video }) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col mb-8 relative cursor-pointer"
      onClick={() => router.push(`/video/${video.id}`)}
    >
      <div className="group  aspect-h-7 aspect-w-10 block w-full h-full overflow-hidden bg-black rounded-lg focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <div className="h-96 w-96">
          <ReactPlayer
            url={video.video_url}
            light={true}
            playIcon={<PlayIcon color="#fff" width={72} height={72} />}
            width="100%"
            height="100%"
            style={{ backgroundColor: "#00000" }}
          />
        </div>
      </div>
      <div className="flex mt-3">
        <div className="flex items-start">
          <div className="flex flex-col ml-3 overflow-hidden">
            <H1>{video.title}</H1>
            <div className="flex items-center justify-start pt-2">
              <P>{video.user_id}</P>
              <span className="px-2">&#x2022;</span>
              <P>{timeAgo(video.created_at)}</P>
            </div>
            <div className="flex items-center justify-start pt-2">
              <ChatBubbleLeftIcon className="h-6 w-6 text-gray-700 pr-2" />
              <P>{`${video.num_comments} comments`}</P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
