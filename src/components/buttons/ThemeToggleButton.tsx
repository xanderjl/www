import { useStore } from "@nanostores/solid";
import type { Component, ComponentProps } from "solid-js";
import { Match, Switch } from "solid-js";

import { theme, toggle } from "@/stores/styles";
import { css } from "@/styled-system/css";

import { Moon, Sun } from "../icons";

export const ThemeToggleButton: Component<ComponentProps<"button">> = (
  props,
) => {
  const $isDark = useStore(theme);

  return (
    <button onClick={toggle} {...props}>
      <Switch>
        <Match when={$isDark() === "light"}>
          <Sun class={css({ h: "inherit", w: "inherit" })} />
        </Match>
        <Match when={$isDark() === "dark"}>
          <Moon class={css({ h: "inherit", w: "inherit" })} />
        </Match>
      </Switch>
    </button>
  );
};
