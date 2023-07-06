import { headerCase } from 'change-case';
import Fuse from 'fuse.js';
import { For, type Component, createSignal, Show } from 'solid-js';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

interface SearchProps {
  list: string[];
  path: string;
}

type Result = Fuse.FuseResult<string>;

export const Search: Component<SearchProps> = ({ list, path }) => {
  const fuse = new Fuse(list);
  const [searchArray, setSearchArray] = createSignal<Result[]>([]);

  return (
    <div
      class={flex({
        direction: 'column',
        gap: 2,
      })}
    >
      <input
        type='text'
        placeholder='Search'
        class={css({
          borderColor: 'gray.400',
          borderWidth: 1,
          borderRadius: 4,
          p: 1,
          _placeholder: {
            color: 'gray.400',
          },
        })}
        onInput={e => {
          const arr = fuse.search(e.target.value);
          setSearchArray(arr);
        }}
      />
      <ul
        class={css({
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          m: 0,
          listStyleType: 'none',
          listStylePosition: 'outside',
        })}
      >
        <Show
          when={searchArray() && searchArray().length > 0}
          fallback={
            <For each={list}>
              {entry => (
                <li>
                  <a href={`${path}/${entry}`}>
                    {headerCase(entry).replaceAll('-', ' ')}
                  </a>
                </li>
              )}
            </For>
          }
        >
          <For each={searchArray()}>
            {entry => (
              <li>
                <a href={`${path}/${entry.item}`}>
                  {headerCase(entry.item).replaceAll('-', ' ')}
                </a>
              </li>
            )}
          </For>
        </Show>
      </ul>
    </div>
  );
};
