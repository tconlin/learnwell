import { useRouter } from "next/router";
import { Video } from "@/types";
import { useState, useEffect } from "react";
import { CircularProgress } from "@/components/utils/circularProgress";
import { VideoPlayer } from "@/components/video/player";
import { Feed } from "@/components/video/feed";
import { getFeedContent } from "@/lib/api/video";
import { getCommentsByVideoId, createComment } from "@/lib/api/comment";
import Input from "@/components/elements/input/simple";
import { H1 } from "@/design/typography";
import { Button } from "@/components/elements/buttons/action";
import { ButtonTypes, Comment } from "@/types";
import { CommentFeed } from "@/components/video/comments";
import { USER_ID } from "@/utils/globals";
export default function VideoDetail() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [video, setVideo] = useState<Video | null>(null);
  const [videoFeed, setVideoFeed] = useState<Video[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isAddCommentLoading, setAddCommentLoading] = useState<boolean>(false);
  const [isCommentFeedLoading, setCommentFeedLoading] =
    useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>("");
  const { id } = router.query;

  async function getVideo() {
    try {
      setIsLoading(true);
      const videoId = id as string;
      if (videoId) {
        const content: Video[] = await getFeedContent({ userId: USER_ID });
        const filteredContent = content.filter((v) => v.id !== videoId);
        const mainVideoIndex = content.findIndex((v) => v.id === videoId);
        if (mainVideoIndex === -1)
          throw new Error("main video not found in feed");

        const mainVideo = content[mainVideoIndex];
        setVideoFeed(filteredContent);
        setVideo(mainVideo);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  async function getCommentFeed() {
    try {
      setCommentFeedLoading(true);
      const videoId = id as string;
      if (videoId) {
        const commentFeed: Comment[] = await getCommentsByVideoId({ videoId });
        setComments(commentFeed);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setCommentFeedLoading(false);
    }
  }

  async function addComment() {
    try {
      setAddCommentLoading(true);
      const videoId = id as string;
      if (videoId && newComment !== "") {
        await createComment({
          userId: "tconlin777",
          videoId,
          content: newComment,
        });
        await getCommentFeed();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setAddCommentLoading(false);
    }
  }

  useEffect(() => {
    getVideo();
  }, [id]);

  useEffect(() => {
    getCommentFeed();
  }, [video]);

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
        <div className="border-t border-gray-200 ">
          <div className="flex justify-start items-center my-4">
            <H1>Comments</H1>
            <span className="px-2">&#x2022;</span>
            <H1>{video.num_comments}</H1>
          </div>
          <div className="flex justify-start items-center my-4 w-full">
            <div className="w-3/4">
              <Input
                placeholder="Add your comment..."
                value={newComment}
                onChange={setNewComment}
              />
            </div>
            <div className="w-1/4 pl-4">
              <Button
                text="Comment"
                buttonType={ButtonTypes.PRIMARY}
                isLoading={isAddCommentLoading}
                disabled={isAddCommentLoading}
                onClick={addComment}
              />
            </div>
          </div>
          <div className="w-full flex justify-start">
            {isCommentFeedLoading ? (
              <div className="flex justify-center w-full">
                <CircularProgress color="dark" size="small" />
              </div>
            ) : (
              <CommentFeed commentFeed={comments} />
            )}
          </div>
        </div>
      </div>
      <div className="md:col-span-2 m-2 mt-12 md:mt-0">
        <div className="h-screen overflow-y-scroll">
          <Feed videoFeed={videoFeed} verticalFeed={true} />
        </div>
      </div>
    </div>
  );
}
