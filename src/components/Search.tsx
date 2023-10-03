import { trainCase } from "change-case";
import Fuse from "fuse.js";
import type { Component } from "solid-js";
import { createSignal, For, Show } from "solid-js";

import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";

interface SearchProps {
  list: string[];
  path: string;
}

type Result = Fuse.FuseResult<string>;

const liStyles = css({
  "&:not(:last-of-type)": {
    borderBottomWidth: 1,
    borderColor: "gray.400",
    pb: 2,
  },
});

export const Search: Component<SearchProps> = ({ list, path }) => {
  const fuse = new Fuse(list);
  const [searchArray, setSearchArray] = createSignal<Result[]>([]);

  return (
    <div
      class={flex({
        direction: "column",
        gap: 2,
      })}
    >
      <input
        type="text"
        placeholder="Search"
        class={css({
          _placeholder: {
            color: "gray.400",
          },
          borderColor: "gray.400",
          borderRadius: 4,
          borderWidth: 1,
          p: 1,
        })}
        onInput={(e) => {
          const arr = fuse.search(e.target.value);
          setSearchArray(arr);
        }}
      />
      <ul
        class={css({
          display: "flex",
          flexDirection: "column",
          gap: 1,
          listStylePosition: "outside",
          listStyleType: "none",
          m: 0,
        })}
      >
        <Show
          when={searchArray() && searchArray().length > 0}
          fallback={
            <For each={list}>
              {(entry) => (
                <li
                  class={liStyles}
                  style={`view-transition-name: hero-${entry}`}
                >
                  <a href={`${path}/${entry}`}>
                    {trainCase(entry).replaceAll("-", " ")}
                  </a>
                </li>
              )}
            </For>
          }
        >
          <For each={searchArray()}>
            {(entry) => (
              <li
                class={liStyles}
                style={`view-transition-name: hero-${entry.item}`}
              >
                <a href={`${path}/${entry.item}`}>
                  {trainCase(entry.item).replaceAll("-", " ")}
                </a>
              </li>
            )}
          </For>
        </Show>
      </ul>
    </div>
  );
};
