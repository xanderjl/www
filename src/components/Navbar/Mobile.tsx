import { FC, useState } from 'react';
import { css } from 'styled-system/css';

export const Mobile: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const iconStyles = css({
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
      <i
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'iconoir-cancel' : 'iconoir-menu'
        } ${iconStyles} `}
      />
    </div>
  );
};
