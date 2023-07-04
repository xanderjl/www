import { generateOgImage } from '@/utils/generateOgImage';
import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const title = searchParams.get('title') ?? undefined;
  const alt = searchParams.get('alt') ?? undefined;
  const description = searchParams.get('description') ?? undefined;

  return {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
    },
    body: await generateOgImage({
      title,
      alt,
      description,
    }),
  };
};
