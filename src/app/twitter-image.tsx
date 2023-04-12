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
      <div
        style={{
          fontFamily: 'Inter',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h1
          style={{
            fontSize: 128,
            fontFamily: 'Inter'
          }}
        >
          {twTitle}
        </h1>
        <span
          style={{
            fontSize: 64,
            fontFamily: 'DM Mono'
          }}
        >
          {twDescription}
        </span>
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
