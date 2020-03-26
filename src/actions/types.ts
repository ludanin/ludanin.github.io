export interface Action {
  type: actionType;
  value: string | number;
  payload: string;
  bool: boolean;
  object: any;
}

export type actionType =
  // §2 Miscelaneous
  "SET_ORIENTATION" | "SET_SCROLLBAR" | "LNG_CHANGE" |
  // §2 Stories
  "STORIES_REPLACE" | "STORIES_TOGGLE_SIDEBAR" |
  // §2 Notifications
  "NOTF_NEW" | "NOTF_DELETE" | "NOTF_DISMISS"
;

export default {
  get SET_ORIENTATION(): "SET_ORIENTATION" { return "SET_ORIENTATION"; },
  get SET_SCROLLBAR(): "SET_SCROLLBAR" { return "SET_SCROLLBAR"; },
  get LNG_CHANGE(): "LNG_CHANGE" { return "LNG_CHANGE"; },

  get STRY_REPLACE(): "STORIES_REPLACE" { return "STORIES_REPLACE"; },
  get STRY_TOGGLE_SIDEBAR(): "STORIES_TOGGLE_SIDEBAR" { return "STORIES_TOGGLE_SIDEBAR"; },

  get NOTF_NEW(): "NOTF_NEW" { return "NOTF_NEW"; },
  get NOTF_DELETE(): "NOTF_DELETE" { return "NOTF_DELETE"; },
  get NOTF_DISMISS(): "NOTF_DISMISS" { return "NOTF_DISMISS"; },
};
