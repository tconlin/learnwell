import { atom } from "jotai";
import { GameScreens, Country } from "@/types";

export const screenAtom = atom<GameScreens>(GameScreens.START);
export const scoreAtom = atom<number>(0);
export const scoreIdAtom = atom<string | null>(null);
export const endTimeAtom = atom<number>(0);
export const countriesAtom = atom<Country[]>([]);
