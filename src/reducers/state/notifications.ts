import { ModelApprisal } from "models/apprisal";

export interface StateNotifications {
  visible: boolean;
  /**
   * Allows us to determine if the component responsible for showing notifications
   * should be animating its entrance/exit
   */
  transition: boolean;
  apprisals: { [apprisalID: string]: ModelApprisal; };
}

export const initialNotifications: StateNotifications = {
  visible: false,
  transition: false,
  apprisals: {},
};
