import { generateOgImage } from '@/utils/generateOgImage';
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

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

// export const getStaticPaths: GetStaticPaths = async () => {
//   const writing = await getCollection('writing', ({ data }) => !data.draft);

//   const paths = writing.map(
//     ({ data: { title, description }, slug: s, collection }) => {
//       const slug = `${collection}/${s}`;

//       return {
//         params: { slug, title, description },
//       };
//     }
//   );

//   return paths;
// };
