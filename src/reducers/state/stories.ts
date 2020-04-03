export type Stories =
  "/" | // Not really a story, more of a splash route
  "/home" | "/resume" | "/project_e" | "/marborges" | "/bgado"
;

export interface StateStories {
  current: Stories;
  nextStory: Stories;
  changingPages: boolean;
  page: number;
  maxPage: number;
}

export const initialStories: StateStories = {
  current: "/",
  nextStory: "/",
  changingPages: false,
  page: 1,
  maxPage: 1,
};
