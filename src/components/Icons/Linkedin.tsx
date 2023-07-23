import type { Component, ComponentProps } from 'solid-js'

export const Linkedin: Component<ComponentProps<'svg'>> = props => {
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
        d='M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></path>
      <path
        d='M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></path>
    </svg>
  )
}
