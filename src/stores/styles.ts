import { persistentAtom } from "@nanostores/persistent";

type Theme = "light" | "dark";

export const theme = persistentAtom<Theme>("theme", "light");

export const toggle = (t: typeof theme) => t.set(t.get() === "light" ? "dark" : "light")

