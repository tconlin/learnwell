import type { Video, Comment } from "@/lib/db/schema";

export enum ButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum FormTypes {
  ADD_VIDEO = "addVideo",
}

export { Video, Comment };
