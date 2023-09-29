export interface Route {
  path: string;
  name: string;
}

export const routes: Route[] = [
  {
    path: "/open-source",
    name: "OSS",
  },
  {
    path: "/writing",
    name: "Writing",
  },
  {
    path: "/sketches",
    name: "Sketches",
  },
];
