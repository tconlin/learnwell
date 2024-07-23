import ReactPlayer from "react-player";

export const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <ReactPlayer
      url={url}
      className=""
      playing
      controls
      width="100%"
      height="100%"
    />
  );
};
