import { Action } from "actions";
import types from "actions/types";
import { ModelApprisal } from "models/apprisal";
import { initialState, State } from "reducers/state";
import { Stories } from "reducers/state/stories";

export default function(
  state: State = {...initialState},
  action: Action,
): State {
  switch (action.type) {
    /* §0 MISC */

    case types.SET_ORIENTATION: return {
      ...state,
      orientation: action.value as "landscape" | "portrait",
    };

    case types.SET_SCROLLBAR: return {
      ...state,
      scrollbar: (action.value as number) >= 0 ? (action.value as number) : 12,
    };

    case types.LNG_CHANGE: {
      // Should be totally controled by sagas, which always have
      // payload === "fromSaga"
      if (action.payload === undefined) {
        return state;
      }

      return {
        ...state,
        language: action.value as State["language"],
      };
    }

    /* §0 STRY Stories */

    case types.STRY_TOGGLE_SIDEBAR: { // §1
      const { sidebar } = state.stories;
      const wantsVisible = sidebar === "hidden" || sidebar === "closing";

      if (sidebar === "hidden" && wantsVisible) {
        return {
          ...state,
          stories: {
            ...state.stories,
            sidebar: "visible",
          },
        };
      }

      if (wantsVisible === false) {
        return {
          ...state,
          stories: {
            ...state.stories,
            sidebar: action.value === "hidden" ? "hidden" : "closing",
          },
        };
      }

      return state;
    }

    // §1
    case types.STRY_REPLACE: {
      const { current, nextStory } = state.stories;

      // Without a payload, this action is surely triggered by an user
      // and as such it is indicating the beginning of a route/tab change,
      // to ensure a transition happens we're going only to change the
      // nextRoute here.
      if (current !== "/") {
        if (current !== nextStory) {
          if (action.payload === undefined) {
            return state;
          }
        } else if (action.payload === undefined) {
          return {
            ...state,
            stories: {
              ...state.stories,
              nextStory: action.value as Stories,
            },
          };
        }
      }

      return {
        ...state,
        stories: {
          ...state.stories,
          current: action.value as Stories,
          nextStory: action.value as Stories,
        },
      };
    }

    /* §0 NOTF Notifications */

    // §1
    case types.NOTF_NEW: {
      const newApprisals = state.notifications.apprisals;
      newApprisals[action.object.id] = action.object as ModelApprisal;
      return {
        ...state,
        notifications: {
          ...state.notifications,
          apprisals: newApprisals,
        },
      };
    }

    // §1
    case types.NOTF_DISMISS: {
      const newApprisals = state.notifications.apprisals;
      const ids = (action.object as string[]) ?? [];

      for (const id of ids) {
        if (newApprisals[id] !== undefined) {
          newApprisals[id].state = "dismiss";
        }
      }

      return {
        ...state,
        notifications: {
          ...state.notifications,
          apprisals: newApprisals,
        }
      };
    }

    // §1
    case types.NOTF_DELETE: {
      const newApprisals = state.notifications.apprisals;

      if (newApprisals[action.value]?.state === "dismiss") {
        delete newApprisals[action.value];
      }

      return {
        ...state,
        notifications: {
          ...state.notifications,
          apprisals: newApprisals,
        }
      };
    }

    // §0 Default
    default:
      return state;
  }
}
