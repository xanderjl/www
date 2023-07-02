import { generateOgImage } from '@/utils/generateOgImage';
import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ params, request }) => {
  const searchParams = new URL(request.url).searchParams;
  console.log({ params, searchParams });
  const title = searchParams.get('title') ?? '';
  const alt = searchParams.get('alt') ?? '';
  const description = searchParams.get('description') ?? '';

  return {
    status: 200,
    headers: {
      'Content-Type': 'image/svg',
    },
    body: await generateOgImage({
      title,
      alt,
      description,
    }),
  };
};
