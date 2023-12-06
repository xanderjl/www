import { useStore } from "@nanostores/solid";
import type { Component, ComponentProps } from "solid-js";
import { For } from "solid-js";

import { routes } from "@/routes";
import { isNavOpen } from "@/stores/navbar";
import { css, cx } from "@/styled-system/css";

interface ListProps extends ComponentProps<"ul"> {
  pathname: string;
}

export const List: Component<ListProps> = ({ class: c, pathname, ...rest }) => {
  const $isNavOpen = useStore(isNavOpen);

  return (
    <ul
      class={cx(
        css({
          position: "relative",
          pt: 2,
        }),
        "ul",
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
  );
};
