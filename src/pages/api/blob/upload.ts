import { put } from "@vercel/blob";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  if (filename) {
    const blob = await put(filename, request.body as ReadableStream, {
      access: "public",
      token: import.meta.env.BLOB_READ_WRITE_TOKEN,
    });

    return new Response(JSON.stringify(blob), {
      status: 200,
      statusText: "OK",
    });
  }

  return new Response(null, {
    status: 500,
    statusText: "Missing File",
  });
};
