import { useStore } from '@nanostores/solid'
import type { Component } from 'solid-js'
import { Show } from 'solid-js'
import { css } from 'styled-system/css'

import { Cancel, Menu } from '@/components/Icons'
import { isNavOpen } from '@/stores/navbar'

export const Mobile: Component = () => {
  const $isNavOpen = useStore(isNavOpen)

  const iconStyles = css({
    w: 6,
    h: 6,
    _hover: {
      color: 'red.500'
    },
    _before: {
      fontSize: '1.25rem'
    }
  })

  return (
    <div
      class={css({
        display: { base: 'flex', md: 'none' },
        flexDir: 'column'
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
  )
}
