import { initialStories, StateStories } from "reducers/state/naut";
import { initialNotifications, StateNotifications } from "reducers/state/notifications";

export interface State {
  version: string;
  stories: StateStories;
  notifications: StateNotifications;
  orientation: "portrait" | "landscape";
  scrollbar: number;
}

export const initialState: State = {
  version: "1.0.0",
  stories: {...initialStories},
  notifications: {...initialNotifications},
  orientation: "portrait",
  scrollbar: 12,
};
