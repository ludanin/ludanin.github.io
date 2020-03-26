import { initialNotifications, StateNotifications } from "reducers/state/notifications";
import { initialStories, StateStories } from "reducers/state/stories";

export interface State {
  version: string;
  stories: StateStories;
  language: "pt" | "en" | "pt>en" | "en>pt";
  notifications: StateNotifications;
  orientation: "portrait" | "landscape";
  scrollbar: number;
}

export const initialState: State = {
  version: "1.0.0",
  stories: {...initialStories},
  language: "en",
  notifications: {...initialNotifications},
  orientation: "portrait",
  scrollbar: 12,
};
