import { useStore } from "@nanostores/solid";
import type { Component, ComponentProps } from "solid-js";
import { For, Show } from "solid-js";

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

  return (
    <Show when={$isNavOpen()}>
      <ul class={cx(css({ pt: 2 }), c)} {...rest}>
        <For each={routes}>
          {(route) => (
            <li>
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
