/** @jsxImportSource react **/
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

  const padding = 16;

  const svg = await satori(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: padding,
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
          top: padding,
          right: padding,
        }}
      />
      <h1
        style={{
          position: 'absolute',
          top: padding,
          left: padding,
          fontFamily: 'Inter',
          fontSize: '2.75rem',
        }}
      >
        Xander Low | Developing for the web
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
        }}
      >
        <h2 style={{ fontFamily: 'Inter', fontSize: '6rem' }}>{title}</h2>
        {description && (
          <span style={{ fontFamily: 'DM Mono', fontSize: '2rem' }}>
            {description}
          </span>
        )}
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
