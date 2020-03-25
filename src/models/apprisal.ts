import { Mood } from "models/mood";

export interface ModelApprisal {
  id: string;
  title: string;
  message: string;
  mood: Mood;
  state: "visible" | "hidden" | "dismiss";
}
