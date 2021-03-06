import { ModelApprisal } from "models/apprisal";
import { Stories } from "reducers/state/stories";
import types, { actionType } from "./types";

export * from "./types";

interface ActionArg {
  type: actionType;
  value?: string | number;
  payload?: string;
  bool?: boolean;
  object?: any;
}

/* §0 Actions */
export interface Actions {
  /**
   * Changes current orientation.
   *
   * This function sets `Redux.orientation` to the given `orientation`
   */
  SET_ORIENTATION: (orientation: "portrait" | "landscape") => ActionArg;

  /**
   * Rewrites the value assigned to the css variable `--scrollbar`, useful
   * because browsers might have different scrollbar's width.
   */
  SET_SCROLLBAR: (scrollbarWidth: number) => ActionArg;

  /**
   * Changes the language of the website
   */
  LNG_CHANGE: () => ActionArg;

  /**
   * Toggles the sidebar's visibility
   */
  SDB_TOGGLE: () => ActionArg;

  // §1 STRY stories

  /**
   * Turns the page in the current story
   *
   * @param forward If `true` then the page is turned forward, backward
   * if otherwise
   */
  STRY_PAGE_TURN: (forward?: boolean) => ActionArg;

  /**
   * Replaces the current route on top of our stack iwth the given `route`
   */
  STRY_REPLACE: (route: Stories) => ActionArg;

  /**
   * Sets the maximum amount of pages the current story can have.
   */
  STRY_SET_PAGES: (maxPages: number) => ActionArg;

  // §1 NOTF

  /**
   * Allows to send a new apprisal to be shown in the notifications area
   */
  NOTF_NEW: (apprisal: Partial<ModelApprisal>, visible?: boolean) => ActionArg;

  /**
   * Marks an apprisal ready for deletion, triggering its animation.
   */
  NOTF_DISMISS: (...apprisalIDs: string[]) => ActionArg;

  /**
   * Removes the selected apprisal from the stack
   */
  NOTF_DELETE: (apprisalID: string) => ActionArg;

}

/* §0 Constants */

/* §1 MISC */

export const SET_ORIENTATION: Actions["SET_ORIENTATION"] = (orientation) => ({
  type: types.SET_ORIENTATION, value: orientation,
});
export const SET_SCROLLBAR: Actions["SET_SCROLLBAR"] = (scrollbarWidth) => ({
  type: types.SET_SCROLLBAR, value: scrollbarWidth,
});
export const LNG_CHANGE: Actions["LNG_CHANGE"] = () => ({
  type: types.LNG_CHANGE,
});
export const SDB_TOGGLE: Actions["SDB_TOGGLE"] = () => ({
  type: types.SDB_TOGGLE,
});

/* §1 Stories (STRY) */

export const STRY_REPLACE: Actions["STRY_REPLACE"] = (route) => ({
  type: types.STRY_REPLACE, value: route,
});
export const STRY_PAGE_TURN: Actions["STRY_PAGE_TURN"] = (forward) => ({
  type: types.STRY_PAGE_TURN, bool: forward ?? false,
});
export const STRY_SET_PAGES: Actions["STRY_SET_PAGES"] = (maxPages) => ({
  type: types.STRY_SET_PAGES, value: maxPages,
});

/* §1 Notifications (NOTF) */

export const NOTF_NEW: Actions["NOTF_NEW"] = (apprisal, visible = true) => ({
  type: types.NOTF_NEW,
  boolean: visible,
  object: {
    id: apprisal?.id ?? "",
    message: apprisal?.message ?? "",
    title: apprisal?.title ?? "",
    mood: apprisal?.mood ?? "neutral",
    state: visible ? "visible" : "hidden",
  },
});
export const NOTF_DELETE: Actions["NOTF_DELETE"] = (apprisalID) => ({
  type: types.NOTF_DELETE, value: apprisalID,
});
export const NOTF_DISMISS: Actions["NOTF_DISMISS"] = (...apprisalIDs) => ({
  type: types.NOTF_DISMISS, object: apprisalIDs ?? [],
});
