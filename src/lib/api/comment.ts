import { Comment } from "@/lib/db/schema";
import { CommentToCreateSchema } from "@/lib/db/schema.zod";

export const createComment = async ({
  videoId,
  content,
  userId,
}: {
  videoId: string;
  content: string;
  userId: string;
}): Promise<void> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL not defined");

  const commentToCreate = {
    user_id: userId,
    content,
    video_id: videoId,
  };

  const validatedCommentToCreate = CommentToCreateSchema.parse(commentToCreate);

  const response = await fetch(`${apiUrl}/api/videos/comments`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validatedCommentToCreate),
  });

  if (!response.ok) throw new Error("Failed to post data");

  return;
};

export const getCommentsByVideoId = async ({
  videoId,
}: {
  videoId: string;
}): Promise<Comment[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL not defined");
  const response = await fetch(
    `${apiUrl}/api/videos/comments?video_id=${videoId}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();
  return data.comments as Comment[];
};
