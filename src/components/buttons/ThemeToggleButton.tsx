import { useStore } from "@nanostores/solid";
import type { Component, ComponentProps } from "solid-js";
import { Match, Switch } from "solid-js";

import { theme, toggle } from "@/stores/styles";

import { Moon, Sun } from "../icons";

export const ThemeToggleButton: Component<ComponentProps<"button">> = (
  props,
) => {
  const $theme = useStore(theme);

  return (
    <button onClick={() => toggle()} {...props}>
      <Switch>
        <Match when={$theme() === "light"}>
          <Sun class="h-[inherit] w-[inherit]" />
        </Match>
        <Match when={$theme() === "dark"}>
          <Moon class="h-[inherit] w-[inherit]" />
        </Match>
      </Switch>
    </button>
  );
};
