export interface Action {
  type: actionType;
  value: string | number;
  payload: string;
  bool: boolean;
  object: any;
}

export type actionType =
  // §2 Miscelaneous
  "SET_ORIENTATION" | "SET_SCROLLBAR" | "LNG_CHANGE" | "SDB_TOGGLE" |
  // §2 Stories
  "STRY_REPLACE" | "STRY_PAGE_TURN" |
  // §2 Notifications
  "NOTF_NEW" | "NOTF_DELETE" | "NOTF_DISMISS"
;

export default {
  get SET_ORIENTATION(): "SET_ORIENTATION" { return "SET_ORIENTATION"; },
  get SET_SCROLLBAR(): "SET_SCROLLBAR" { return "SET_SCROLLBAR"; },
  get SDB_TOGGLE(): "SDB_TOGGLE" { return "SDB_TOGGLE"; },
  get LNG_CHANGE(): "LNG_CHANGE" { return "LNG_CHANGE"; },

  get STRY_REPLACE(): "STRY_REPLACE" { return "STRY_REPLACE"; },
  get STRY_PAGE_TURN(): "STRY_PAGE_TURN" { return "STRY_PAGE_TURN"; },

  get NOTF_NEW(): "NOTF_NEW" { return "NOTF_NEW"; },
  get NOTF_DELETE(): "NOTF_DELETE" { return "NOTF_DELETE"; },
  get NOTF_DISMISS(): "NOTF_DISMISS" { return "NOTF_DISMISS"; },
};
