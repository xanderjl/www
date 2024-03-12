import { useStore } from "@nanostores/solid";
import { animate } from "motion";
import type { Component } from "solid-js";
import { Show } from "solid-js";

import { Cancel, Menu } from "@/components/icons";
import { isNavOpen } from "@/stores/navbar";

export const Mobile: Component = () => {
  const $isNavOpen = useStore(isNavOpen);

  const iconStyles = "before:text-xl hover:text-red-500 h-6 w-6";

  return (
    <div class="mobile_nav flex flex-col md:hidden">
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
