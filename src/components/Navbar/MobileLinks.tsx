import { useStore } from "@nanostores/solid";
import type { Component, ComponentProps } from "solid-js";
import { Show } from "solid-js";

import { isNavOpen } from "@/stores/navbar";

import { List } from "./List";

interface MobileLinksProps extends ComponentProps<"ul"> {
  pathname: string;
}

export const MobileLinks: Component<MobileLinksProps> = ({
  pathname,
  ...rest
}) => {
  const $isNavOpen = useStore(isNavOpen);

  return (
    <Show when={$isNavOpen()}>
      <List pathname={pathname} {...rest} />
    </Show>
  );
};
