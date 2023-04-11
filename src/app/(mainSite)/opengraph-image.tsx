import { ImageResponse } from 'next/server'

import baseUrl from '@/utils/baseUrl'

export const alt = 'Xander Low'
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/png'

const OpenGraphImage = async () => {
  const fontData = await fetch(
    `${baseUrl}/assets/fonts/Inter/Inter-Bold.ttf`
  ).then(res => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          fontFamily: 'Inter',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Xander Low
      </div>
    ),
    {
      width: size.width,
      height: size.height,
      fonts: [{ data: fontData, name: 'Inter', weight: 700 }]
    }
  )
}

export default OpenGraphImage
