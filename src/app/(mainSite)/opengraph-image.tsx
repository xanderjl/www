import { ImageResponse } from 'next/server'

import baseUrl from '@/utils/baseUrl'

export const alt = 'Xander Low'
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/png'

const OpenGraphImage = async () => {
  const interData = await fetch(
    `${baseUrl}/assets/fonts/Inter/Inter-Bold.ttf`
  ).then(res => res.arrayBuffer())
  const dmMonoData = await fetch(
    `${baseUrl}/assets/fonts/DM_Mono/DMMono-Regular.ttf`
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
          Xander Low
        </h1>
        <span
          style={{
            fontSize: 64,
            fontFamily: 'DM Mono'
          }}
        >
          Developing on the web
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

export default OpenGraphImage
