import ReactPlayer from "react-player";
import { Video } from "@/types";
import { H1, P } from "@/design/typography";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { UTCtoDate } from "@/utils/helpers";

export const VideoPlayer = ({ video }: { video: Video }) => {
  return (
    <div className="flex flex-col mb-8 relative cursor-pointer">
      <ReactPlayer
        url={video.video_url}
        playing
        controls
        width="100%"
        height="100%"
        style={{ backgroundColor: "#00000" }}
      />
      <div className="flex mt-3">
        <div className="flex items-start">
          <div className="flex flex-col ml-3 overflow-hidden">
            <H1>{video.title}</H1>
            <div className="flex items-center justify-start pt-2">
              <P>{video.user_id}</P>
              <span className="px-2">&#x2022;</span>
              <P>Uploaded {UTCtoDate(video.created_at)}</P>
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
