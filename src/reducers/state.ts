import { initialNaut, StateNaut } from "reducers/state/naut";
import { initialNotifications, StateNotifications } from "reducers/state/notifications";

export interface State {
  version: string;
  naut: StateNaut;
  notifications: StateNotifications;
  orientation: "portrait" | "landscape";
  scrollbar: number;
}

export const initialState: State = {
  version: "1.0.0",
  naut: {...initialNaut},
  notifications: {...initialNotifications},
  orientation: "portrait",
  scrollbar: 12,
};
