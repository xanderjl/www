import { headerCase } from 'change-case';
import Fuse from 'fuse.js';
import type { FC } from 'react';
import { useState } from 'react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

interface SearchProps {
  list: string[];
  path: string;
}

export const Search: FC<SearchProps> = ({ list, path }) => {
  const fuse = new Fuse(list);
  const [searchArray, setSearchArray] = useState<
    Fuse.FuseResult<string>[] | undefined
  >(undefined);

  return (
    <div
      className={flex({
        direction: 'column',
        gap: 2,
      })}
    >
      <input
        type='text'
        placeholder='Search'
        className={css({
          borderColor: 'gray.400',
          borderWidth: 1,
          borderRadius: 4,
          p: 1,
          _placeholder: {
            color: 'gray.400',
          },
        })}
        onChange={e => {
          const arr = fuse.search(e.currentTarget.value);
          setSearchArray(arr);
        }}
      />
      <ul
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          m: 0,
          listStyleType: 'none',
          listStylePosition: 'outside',
        })}
      >
        {searchArray && searchArray.length > 0
          ? searchArray?.map(({ item }) => (
              <li key={item}>
                <a href={`${path}/${item}`}>
                  {headerCase(item).replaceAll('-', ' ')}
                </a>
              </li>
            ))
          : list.map(item => (
              <li key={item}>
                <a href={`${path}/${item}`}>
                  {headerCase(item).replaceAll('-', ' ')}
                </a>
              </li>
            ))}
      </ul>
    </div>
  );
};
