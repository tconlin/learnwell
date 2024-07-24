import { Video } from "@/lib/db/schema";
import { VideoToCreateSchema } from "@/lib/db/schema.zod";

export const createVideo = async ({
  userId,
  url,
  description,
  title,
}: {
  userId: string;
  url: string;
  description: string;
  title: string;
}): Promise<void> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL not defined");

  const videoToCreate = {
    user_id: userId,
    video_url: url,
    description,
    title,
  };

  const validatedVideoToCreate = VideoToCreateSchema.parse(videoToCreate);

  const response = await fetch(`${apiUrl}/api/videos`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validatedVideoToCreate),
  });

  if (!response.ok) throw new Error("Failed to post data");

  return;
};

export const getVideoById = async ({
  videoId,
}: {
  videoId: string;
}): Promise<Video> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL not defined");
  const response = await fetch(
    `${apiUrl}/api/videos/single?video_id=${videoId}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();
  return data.video as Video;
};

export const getFeedContent = async ({
  userId,
}: {
  userId: string;
}): Promise<Video[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL not defined");
  const response = await fetch(`${apiUrl}/api/videos?user_id=${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();
  return data.videos as Video[];
};
