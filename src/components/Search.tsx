import { trainCase } from "change-case";
import type { FuseResult } from "fuse.js";
import Fuse from "fuse.js";
import { animate, spring, stagger } from "motion";
import type { Component, ComponentProps } from "solid-js";
import { createEffect, createSignal, For, Show } from "solid-js";

import { css, cx } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";

interface SearchProps extends ComponentProps<"div"> {
  list: string[];
  path: string;
}

type Result = FuseResult<string>;

const liStyles = cx(
  css({
    "&:not(:last-of-type)": {
      _dark: {
        borderColor: "gray.800",
      },
      _light: {
        borderColor: "gray.400",
      },
      borderBottomWidth: 1,
      pb: 2,
    },
  }),
  "li",
);

export const Search: Component<SearchProps> = ({
  list,
  path,
  class: c,
  ...rest
}) => {
  const fuse = new Fuse(list);
  const [searchArray, setSearchArray] = createSignal<Result[]>([]);

  createEffect(() => {
    animate(
      ".input",
      {
        opacity: [0, 1],
        x: [-100, 0],
      },
      {
        duration: 0.3,
        easing: spring(),
      },
    );

    animate(
      ".li",
      {
        opacity: [0, 1],
        x: [-100, 0],
      },
      {
        delay: stagger(0.05, { from: -0.2, start: 0 }),
        duration: 0.2,
        easing: spring(),
      },
    );
  });

  return (
    <div
      class={cx(
        flex({
          direction: "column",
          gap: 2,
        }),
        c,
      )}
      {...rest}
    >
      <input
        type="text"
        placeholder="Search"
        class={cx(
          css({
            _dark: {
              _placeholder: {
                color: "gray.50",
              },
              backgroundColor: "gray.800",
            },
            _light: {
              _placeholder: {
                color: "gray.400",
              },
            },
            borderColor: "gray.400",
            borderRadius: 4,
            borderWidth: 1,
            p: 1,
          }),
          "input",
        )}
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
                  <a href={`${path}/${entry}`} data-astro-reload>
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
                <a href={`${path}/${entry.item}`} data-astro-reload>
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
