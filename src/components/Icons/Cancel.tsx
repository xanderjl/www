import type { Component, ComponentProps } from "solid-js";

export const Cancel: Component<ComponentProps<"svg">> = props => {
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
        d='M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></path>
    </svg>
  );
};
