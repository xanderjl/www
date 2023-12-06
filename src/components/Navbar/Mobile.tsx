import { useStore } from "@nanostores/solid";
import { animate } from "motion";
import type { Component } from "solid-js";
import { Show } from "solid-js";

import { Cancel, Menu } from "@/components/icons";
import { isNavOpen } from "@/stores/navbar";
import { css, cx } from "@/styled-system/css";

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
      class={cx(
        css({
          display: { base: "flex", md: "none" },
          flexDir: "column",
        }),
        "mobile_nav",
      )}
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
          onClick={() => {
            animate(
              ".mobile-nav",
              { maxHeight: ["358px", "40px"] },
              { duration: 0.2, easing: "ease-in-out" },
            ).finished.then(() => isNavOpen.set(!$isNavOpen()));
          }}
        />
      </Show>
    </div>
  );
};
