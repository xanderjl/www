import baseUrl from './baseUrl';

type GenerateOgUrl = ({
  title,
  alt,
  description,
}: {
  title?: string;
  alt?: string;
  description?: string;
}) => string;

export const generateOgUrl: GenerateOgUrl = ({ alt, description, title }) => {
  `${baseUrl}/api/og-image.svg?title=${title}&description=${
    description ?? title
  }&alt=${title}`;
  const url = new URL(`${baseUrl}/api/og-image.svg`);

  title && url.searchParams.append('title', title);
  description && url.searchParams.append('description', description);
  title && url.searchParams.append('alt', alt ?? title);

  return url.toString();
};
