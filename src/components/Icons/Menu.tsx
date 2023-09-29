import type { Component, ComponentProps } from "solid-js";

export const Menu: Component<ComponentProps<"svg">> = props => {
  return (
    <svg
      width='24px'
      height='24px'
      stroke-width='1.5'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color='currentColor'
      {...props}
    >
      <path
        d='M3 5h18M3 12h18M3 19h18'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></path>
    </svg>
  );
};
