import type { Component } from 'solid-js';
import {  createSignal, Show } from 'solid-js';
import { css } from 'styled-system/css';

import { Cancel, Menu } from '@/components/Icons';

export const Mobile: Component = () => {
  const [isOpen, setIsOpen] = createSignal<boolean>(false);

  const iconStyles = css({
    w: 6,
    h: 6,
    _hover: {
      color: 'red.500',
    },
    _before: {
      fontSize: '1.25rem',
    },
  });

  return (
    <div
      class={css({
        display: { base: 'flex', md: 'none' },
        flexDir: 'column',
      })}
    >
      <Show
        when={isOpen()}
        fallback={
          <Menu class={iconStyles} onClick={() => setIsOpen(v => !v)} />
        }
      >
        <Cancel class={iconStyles} onClick={() => setIsOpen(v => !v)} />
      </Show>
    </div>
  );
};
