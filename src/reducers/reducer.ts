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

    case types.SET_ORIENTATION: return { // §1
      ...state,
      orientation: action.value as "landscape" | "portrait",
    };

    case types.SET_SCROLLBAR: { // §1
      const scrollbarWidth = action.value as number;

      document.documentElement.style.setProperty(
        "--scrollbar", `${scrollbarWidth ?? 12}px`
      );
      return {
        ...state,
        scrollbar: (action.value as number) ?? 12,
      };
    }

    case types.LNG_CHANGE: { // §1
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

    case types.SDB_TOGGLE: { // §1
      const { sidebar } = state;
      const wantsVisible = sidebar === "hidden";

      if (wantsVisible) {
        if (window.matchMedia("(min-width: 621px)").matches) {
          document.documentElement.style.setProperty(
            "--NAVIGATORwidth",
            "calc(100vw - var(--NAVBARwidth) - var(--SIDEBARwidth))",
          );
          document.documentElement.style.setProperty(
            "--CONTENThorizontalPadding",
            "7.5vw",
          );
        }
        return {
          ...state,
          sidebar: "visible",
        };
      }

      if (wantsVisible === false) {
        if (sidebar === "visible") {
          if (state.orientation === "landscape") {
            document.documentElement.style.setProperty(
              "--NAVIGATORwidth",
              "calc(100vw - var(--NAVBARwidth))",
            );
            document.documentElement.style.setProperty(
              "--CONTENThorizontalPadding",
              "17.5vw",
            );
          }
        }
        return {
          ...state,
          sidebar: action.value === "hidden" ? "hidden" : "hiding",
        };
      }

      return state;
    }

    /* §0 STRY Stories */

    // §1
    case types.STRY_REPLACE: {
      const { current, nextStory } = state.stories;

      // We don't want any long transition to occur at the splash route
      // ("/")
      if (current !== "/") {
        if (current !== nextStory) {
          if (action.payload === undefined) {
            // We should do nothing here, as the user is trying to change
            // a story while a transition is in process
            return state;
          } else {
            // Proceed to the final return found in this switch-case
          }
        } else if (action.payload === undefined) {
          // Without a payload, this action is surely triggered by an user (
          // since the action dispatched by STRY_REPLACE does not takes any
          // payload when fired by human interaction, unlike what happens
          // through our sagas).
          //
          // Due to this we'll ensure that a transition happens by changing only
          // the nextStory
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

    case types.STRY_PAGE_TURN: { // §1
      const { stories } = state;

      // §2 Prevent changing in transitions && impossible page turns

      if (stories.changingPages && action.payload === undefined) {
        return state;
      }
      // When action.bool the page is turning forward
      if (action.bool) {
        if (stories.page === stories.maxPage) {
          return state;
        }
      } else {
        if (stories.page === 1) {
          return state;
        }
      }

      // §2 If not from a saga, turn the transition animation
      if (action.payload === undefined) {
        return {
          ...state,
          stories: {
            ...stories,
            changingPages: action.bool ? "forward" : "backward",
          },
        };
      }

      // §2 If from a saga turn the page
      return {
        ...state,
        stories: {
          ...stories,
          changingPages: "",
          page: action.bool ? stories.page + 1 : stories.page - 1,
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
