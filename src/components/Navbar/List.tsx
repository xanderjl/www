import { useStore } from "@nanostores/solid";
import type { Component, ComponentProps } from "solid-js";
import { For } from "solid-js";

import { routes } from "@/routes";
import { isNavOpen } from "@/stores/navbar";

interface ListProps extends ComponentProps<"ul"> {
  pathname: string;
}

export const List: Component<ListProps> = ({ class: c, pathname, ...rest }) => {
  const $isNavOpen = useStore(isNavOpen);

  return (
    <ul class={`relative pt-2 ul${c ? ` ${c}` : ""}`} {...rest}>
      <For each={routes}>
        {(route) => (
          <li class="li">
            <a
              aria-current={pathname === route.path ? "page" : "false"}
              href={route.path}
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
