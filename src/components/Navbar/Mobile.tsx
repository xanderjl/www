import { css } from 'styled-system/css';
import { Cancel, Menu } from '@/components/Icons';
import { createSignal, type Component } from 'solid-js';

export const Mobile: Component = () => {
  const [isOpen, setIsOpen] = createSignal<boolean>(false);
  const Icon = isOpen() ? Cancel : Menu;

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
      <Icon class={iconStyles} onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
};
