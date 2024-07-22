import { Score, User } from "@/lib/db/schema";
import ScoreDB from "@/lib/db/scores";
import { scoreSchema } from "@/lib/db/schema.zod";
import { nanoid } from "nanoid/non-secure";
import { TopScore } from "@/types";
import UserDB from "@/lib/db/users";

export const addScore = async ({
  userId,
  timeInSeconds,
  score,
}: {
  userId: string;
  timeInSeconds: number;
  score: number;
}): Promise<Score> => {
  const uid = nanoid();
  const newScore: Score = {
    id: uid,
    userId,
    timeInSeconds,
    score,
  };
  return await new ScoreDB().create<Score>({
    data: newScore,
    schema: scoreSchema,
  });
};

export const getBestScoreForUser = async ({
  userId,
}: {
  userId: string;
}): Promise<Score | null> => {
  return await new ScoreDB().getBestScoreForUser({ userId });
};

export const getTopScores = async ({
  amountToReturn,
}: {
  amountToReturn: number;
}): Promise<TopScore[]> => {
  const scores = await new ScoreDB().getTopScores({ amountToReturn });
  const userDb = new UserDB();
  const topScores: TopScore[] = await Promise.all(
    scores.map(async (score) => {
      const user: User | null = await userDb.read({ id: score.userId });
      if (!user) {
        throw new Error(`User with id ${score.userId} not found`);
      }
      return {
        score,
        user: user,
      };
    })
  );
  return topScores;
};
