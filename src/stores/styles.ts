import { persistentAtom } from "@nanostores/persistent";
import { action } from "nanostores";

export const isDark = persistentAtom<"light" | "dark">("theme", "light");

export const toggle = action(isDark, "toggle", (isDark) => {
  return isDark.set(isDark.get() === "light" ? "dark" : "light");
});
