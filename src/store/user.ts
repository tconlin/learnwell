import { atom } from "jotai";
import { User, Score } from "@/types";

export const userAtom = atom<User | null>(null);
export const bestScoreAtom = atom<Score | null>(null);
