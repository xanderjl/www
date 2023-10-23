import { head } from "@vercel/blob";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (url) {
    const details = await head(url);

    return new Response(JSON.stringify(details), {
      status: 200,
      statusText: "OK",
    });
  }

  return new Response(null, {
    status: 500,
    statusText: "Missing URL",
  });
};
