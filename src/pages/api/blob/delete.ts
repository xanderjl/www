import { del } from "@vercel/blob";
import type { APIRoute } from "astro";

export const DELETE: APIRoute = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (url) {
    const details = await del(url, {
      token: import.meta.env.BLOB_READ_WRITE_TOKEN,
    });
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
