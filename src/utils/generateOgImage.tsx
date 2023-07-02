import satori from 'satori';
import baseUrl from '@/utils/baseUrl';

type GenerateOgImage = ({
  alt,
  description,
  title,
}: {
  alt?: string;
  description?: string;
  title?: string;
}) => Promise<string>;

export const generateOgImage: GenerateOgImage = async ({
  alt,
  description,
  title,
}) => {
  const interArrayBuffer = await fetch(
    new URL(`${baseUrl}/fonts/Inter/Inter-Bold.ttf`, import.meta.url)
  ).then(res => res.arrayBuffer());
  const dmMonoArrayBuffer = await fetch(
    new URL(`${baseUrl}/fonts/DM_Mono/DMMono-Regular.ttf`, import.meta.url)
  ).then(res => res.arrayBuffer());

  const svg = await satori(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: 'white',
      }}
    >
      <img
        src={`${baseUrl}/favicon.svg`}
        alt={alt}
        width={288}
        height={288}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
        }}
      >
        <h1 style={{ fontFamily: 'Inter', fontSize: '8rem' }}>{title}</h1>
        <span style={{ fontFamily: 'DM Mono', fontSize: '3.75rem' }}>
          {description}
        </span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interArrayBuffer,
          weight: 700,
        },
        {
          name: 'DM Mono',
          data: dmMonoArrayBuffer,
          weight: 400,
        },
      ],
    }
  );

  return svg;
};
