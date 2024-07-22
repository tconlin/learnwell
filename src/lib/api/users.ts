import UserDB from "@/lib/db/users";
import { User } from "@/lib/db/schema";
import { userSchema } from "@/lib/db/schema.zod";
import { nanoid } from "nanoid/non-secure";
import axios from "axios";

export const checkIfUserExists = async ({
  username,
}: {
  username: string;
}): Promise<User> => {
  return await new UserDB().checkForUsername({ username });
};

export const getIpAdress = async () => {
  const response = await axios.get("https://api.ipify.org?format=json");
  return response.data.ip;
};

export const addUser = async ({
  username,
  ipAddress,
}: {
  username: string;
  ipAddress: string;
}): Promise<User> => {
  const id = nanoid();
  return await new UserDB().create<User>({
    data: { id, username, ipAddress },
    schema: userSchema,
  });
};
