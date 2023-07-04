import { FC, useState } from 'react';
import { css } from 'styled-system/css';
import { Cancel, Menu } from 'iconoir-react';

export const Mobile: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const Icon = isOpen ? Cancel : Menu;

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
      className={css({
        display: { base: 'flex', md: 'none' },
        flexDir: 'column',
      })}
    >
      <Icon className={iconStyles} onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
};
