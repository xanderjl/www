const { MODE, VERCEL_URL, BASE_URL } = import.meta.env;

const baseUrl =
  MODE === "production" && VERCEL_URL
    ? `https://${VERCEL_URL}`
    : MODE === "production"
    ? BASE_URL
    : "http://localhost:3000";

export default baseUrl;
