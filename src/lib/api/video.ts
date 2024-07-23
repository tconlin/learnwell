import { Video } from "@/lib/db/schema";

// export const createVideo = async ({
//   userId,
// }: {
//   userId: string;
// }): Promise<Video[]> => {
//   const uid = nanoid();
//   const newScore: Score = {
//     id: uid,
//     userId,
//     timeInSeconds,
//     score,
//   };
//   return await new ScoreDB().create<Score>({
//     data: newScore,
//     schema: scoreSchema,
//   });
// };

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
