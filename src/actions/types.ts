export interface Action {
  type: actionType;
  value: string | number;
  payload: string;
  bool: boolean;
  object: any;
}

export type actionType =
  // §2 Miscelaneous
  "SET_ORIENTATION" | "SET_SCROLLBAR" |
  // §2 Nautilus
  "NAUT_REPLACE" | "NAUT_TOGGLE_SIDEBAR" |
  // §2 Notifications
  "NOTF_NEW" | "NOTF_DELETE" | "NOTF_DISMISS"
;

export default {
  get SET_ORIENTATION(): "SET_ORIENTATION" { return "SET_ORIENTATION"; },
  get SET_SCROLLBAR(): "SET_SCROLLBAR" { return "SET_SCROLLBAR"; },

  get NAUT_REPLACE(): "NAUT_REPLACE" { return "NAUT_REPLACE"; },
  get NAUT_TOGGLE_SIDEBAR(): "NAUT_TOGGLE_SIDEBAR" { return "NAUT_TOGGLE_SIDEBAR"; },

  get NOTF_NEW(): "NOTF_NEW" { return "NOTF_NEW"; },
  get NOTF_DELETE(): "NOTF_DELETE" { return "NOTF_DELETE"; },
  get NOTF_DISMISS(): "NOTF_DISMISS" { return "NOTF_DISMISS"; },
};
