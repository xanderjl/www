export interface Route {
  name: string;
  path: string;
}

export const routes: Route[] = [
  {
    name: "OSS",
    path: "/open-source",
  },
  {
    name: "Sketches",
    path: "/sketches",
  },
  {
    name: "Coffee Calendar",
    path: "/coffee-calendar",
  },
  {
    name: "Genuary",
    path: "/genuary",
  }
];
