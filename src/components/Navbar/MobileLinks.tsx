import { useStore } from "@nanostores/solid";
import { animate, stagger } from "motion";
import type { Component, ComponentProps } from "solid-js";
import { createEffect, For, Show } from "solid-js";

import { routes } from "@/routes";
import { isNavOpen } from "@/stores/navbar";
import { css, cx } from "@/styled-system/css";

interface MobileLinksProps extends ComponentProps<"ul"> {
  pathname: string;
}

export const MobileLinks: Component<MobileLinksProps> = ({
  pathname,
  class: c,
  ...rest
}) => {
  const $isNavOpen = useStore(isNavOpen);

  createEffect(() => {
    if (!$isNavOpen()) return;
    animate(".li", { x: [-100, 0] }, { delay: stagger(0.1) });
  });

  return (
    <Show when={$isNavOpen()}>
      <ul
        class={cx(
          css({
            position: "relative",
            pt: 2,
          }),
          c,
        )}
        {...rest}
      >
        <For each={routes}>
          {(route) => (
            <li class="li">
              <a
                aria-current={pathname === route.path ? "page" : "false"}
                href={route.path}
                class={css({
                  _currentPage: {
                    _dark: {
                      bg: "linear-gradient(to top, var(--colors-red-600) 0% 50%, transparent 50% 100%)",
                    },
                    _light: {
                      bg: "linear-gradient(to top, var(--colors-red-400) 0% 50%, transparent 50% 100%)",
                    },
                  },
                })}
                onClick={() => isNavOpen.set(!$isNavOpen())}
              >
                {route.name}
              </a>
            </li>
          )}
        </For>
      </ul>
    </Show>
  );
};
