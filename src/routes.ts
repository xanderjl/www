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
    name: "Writing",
    path: "/writing",
  },
  {
    name: "Sketches",
    path: "/sketches",
  },
];
