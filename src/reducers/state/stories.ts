export type Stories =
  "/" | // Not really a story, more of a splash route
  "/home" | "/project_e" | "/marborges" |"/bgado"
;

export interface StateStories {
  current: Stories;
  nextStory: Stories;
  sidebar: "visible" | "hidden" | "closing";
}

export const initialStories: StateStories = {
  current: "/",
  nextStory: "/",
  sidebar: "hidden",
};
