import { ImageResponse } from 'next/server'

export const alt = 'Xander Low'
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/png'

const OpenGraphImage = () => {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
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
    size
  )
}

export default OpenGraphImage
