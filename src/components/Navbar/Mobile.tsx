import { useStore } from "@nanostores/solid";
import type { Component } from "solid-js";
import { Show } from "solid-js";

import { Cancel, Menu } from "@/components/icons";
import { isNavOpen } from "@/stores/navbar";
import { css } from "@/styled-system/css";

export const Mobile: Component = () => {
  const $isNavOpen = useStore(isNavOpen);

  const iconStyles = css({
    _before: {
      fontSize: "1.25rem",
    },
    _hover: {
      color: "red.500",
    },
    h: 6,
    w: 6,
  });

  return (
    <div
      class={css({
        display: { base: "flex", md: "none" },
        flexDir: "column",
      })}
    >
      <Show
        when={$isNavOpen()}
        fallback={
          <Menu
            class={iconStyles}
            onClick={() => isNavOpen.set(!$isNavOpen())}
          />
        }
      >
        <Cancel
          class={iconStyles}
          onClick={() => isNavOpen.set(!$isNavOpen())}
        />
      </Show>
    </div>
  );
};
