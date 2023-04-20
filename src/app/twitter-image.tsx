import { ImageResponse } from 'next/server'

import {
  description as twDescription,
  title as twTitle
} from '@/sharedMetadata'
import baseUrl from '@/utils/baseUrl'

export const alt = twTitle
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/png'

const TwitterImage = async () => {
  const interData = await fetch(
    new URL(`${baseUrl}/assets/fonts/Inter/Inter-Bold.ttf`, import.meta.url)
  ).then(res => res.arrayBuffer())
  const dmMonoData = await fetch(
    new URL(
      `${baseUrl}/assets/fonts/DM_Mono/DMMono-Regular.ttf`,
      import.meta.url
    )
  ).then(res => res.arrayBuffer())

  return new ImageResponse(
    (
      <div tw='flex w-full h-full p-10'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${baseUrl}/assets/images/icon.svg`}
          alt={alt}
          tw='absolute top-10 right-10 w-72 h-72'
        />
        <div tw='flex flex-col justify-end items-start'>
          <h1 tw='text-9xl' style={{ fontFamily: 'Inter' }}>
            {twTitle}
          </h1>
          <span tw='text-6xl' style={{ fontFamily: 'DM Mono' }}>
            {twDescription}
          </span>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
      fonts: [
        {
          name: 'Inter',
          data: interData,
          weight: 700
        },
        {
          name: 'DM Mono',
          data: dmMonoData,
          weight: 400
        }
      ]
    }
  )
}

export default TwitterImage
