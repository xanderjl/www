import { useStore } from "@nanostores/solid";
import type { Component, ComponentProps } from "solid-js";
import { Show } from "solid-js";

import { isDark, toggle } from "@/stores/styles";
import { css } from "@/styled-system/css";

import { Moon, Sun } from "../icons";

export const ThemeToggleButton: Component<ComponentProps<"button">> = (
  props,
) => {
  const $isDark = useStore(isDark);

  return (
    <button onClick={toggle} {...props}>
      <Show
        when={$isDark() == "light"}
        fallback={<Moon class={css({ h: "inherit", w: "inherit" })} />}
      >
        <Sun class={css({ h: "inherit", w: "inherit" })} />
      </Show>
    </button>
  );
};
