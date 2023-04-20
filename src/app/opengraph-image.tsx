import { ImageResponse } from 'next/server'

import {
  description as ogDescription,
  title as ogTitle
} from '@/sharedMetadata'
import baseUrl from '@/utils/baseUrl'

export const title = ogTitle
export const alt = ogTitle
export const description = ogDescription
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/png'

const OpenGraphImage = async () => {
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
          width={288}
          height={288}
          tw='absolute top-10 right-10'
        />
        <div tw='flex flex-col justify-end items-start'>
          <h1 tw='text-9xl' style={{ fontFamily: 'Inter' }}>
            {ogTitle}
          </h1>
          <span tw='text-6xl' style={{ fontFamily: 'DM Mono' }}>
            {ogDescription}
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

export default OpenGraphImage
