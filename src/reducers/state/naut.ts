export type NautRoute =
  "/" |
  "/home" | "/project_e" | "/marborges" |"/bgado"
;

export interface StateNaut {
  current: NautRoute;
  nextRoute: NautRoute;
  sidebar: "visible" | "hidden" | "closing";
  props?: object;
}

export const initialNaut: StateNaut = {
  current: "/",
  nextRoute: "/",
  sidebar: "hidden",
  props: undefined,
};
