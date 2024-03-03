import { persistentAtom } from "@nanostores/persistent";

type Theme = "light" | "dark";

export const theme = persistentAtom<Theme>("theme", "light");

export const toggle = () => theme.set(theme.get() === "light" ? "dark" : "light");
