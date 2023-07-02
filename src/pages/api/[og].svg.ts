import { generateOgImage } from '@/utils/generateOgImage';
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

export const get: APIRoute = async ({ params }) => {
  const { title } = params;

  return {
    body: await generateOgImage({ title, alt: title, description: title }),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const writing = await getCollection('writing', ({ data }) => !data.draft);

  return writing
    .filter(({ data }) => !data.title)
    .map(({ data: { title } }) => ({
      params: { title },
    }));
};
