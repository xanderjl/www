import { useStore } from '@nanostores/solid'
import type { Component } from 'solid-js'
import { For, Show } from 'solid-js'
import { css } from 'styled-system/css'

import { routes } from '@/routes'
import { isNavOpen } from '@/stores/navbar'

export const MobileLinks: Component = () => {
  const $isNavOpen = useStore(isNavOpen)

  return (
    <Show when={$isNavOpen()}>
      <ul class={css({ pt: 2 })}>
        <For each={routes}>
          {route => (
            <li>
              <a href={route.path}>{route.name}</a>
            </li>
          )}
        </For>
      </ul>
    </Show>
  )
}
