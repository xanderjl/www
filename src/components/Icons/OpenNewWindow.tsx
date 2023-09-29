import type { Component, ComponentProps } from "solid-js";

export const OpenNewWindow: Component<ComponentProps<"svg">> = (props) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      {...props}
    >
      <path
        d="M21 3h-6m6 0l-9 9m9-9v6"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>
    </svg>
  );
};
