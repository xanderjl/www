import { trainCase } from "change-case";
import type { FuseResult } from "fuse.js";
import Fuse from "fuse.js";
import { animate, spring, stagger } from "motion";
import type { Component, ComponentProps } from "solid-js";
import { createEffect, createSignal, For, Show } from "solid-js";

interface SearchProps extends ComponentProps<"div"> {
  list: string[];
  path: string;
}

type Result = FuseResult<string>;

const liStyles =
  "li [&:not(:last-of-type)]:border-b [&:not(:last-of-type)]:pb-2 [&:not(:last-of-type)]:dark:border-gray-800 [&:not(:last-of-type)]:light:border-gray-400";

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
    <div class={`flex flex-col gap-2${c ? ` ${c}` : ""}`} {...rest}>
      <input
        type="text"
        placeholder="Search"
        class="input rounded border border-gray-800 p-1 placeholder:text-gray-800 dark:border-gray-400 dark:placeholder:text-gray-400"
        onInput={(e) => {
          const arr = fuse.search(e.target.value);
          setSearchArray(arr);
        }}
      />
      <ul class="m-0 flex list-outside list-none flex-col gap-1">
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
