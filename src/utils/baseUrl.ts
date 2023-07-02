const { MODE, VERCEL_URL } = import.meta.env;

const baseUrl =
  MODE === 'development' ? 'http://localhost:3000' : `https://${VERCEL_URL}`;

export default baseUrl;
