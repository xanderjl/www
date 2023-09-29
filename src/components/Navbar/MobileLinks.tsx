import { useStore } from "@nanostores/solid"
import type { Component } from "solid-js"
import { For, Show } from "solid-js"

import { routes } from "@/routes"
import { isNavOpen } from "@/stores/navbar"
import { css } from "@/styled-system/css"

export const MobileLinks: Component = () => {
  const $isNavOpen = useStore(isNavOpen)

  return (
    <Show when={$isNavOpen()}>
      <ul class={css({ pt: 2 })}>
        <For each={routes}>
          {route => (
            <li>
              <a href={route.path} onClick={() => isNavOpen.set(!$isNavOpen())}>
                {route.name}
              </a>
            </li>
          )}
        </For>
      </ul>
    </Show>
  )
}
