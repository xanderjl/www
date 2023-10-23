import { head } from "@vercel/blob";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import fetch from "fetch-base64";

export const fetchBlobBase64 = async (url: string): Promise<string> => {
  const { url: headURL } = await head(url, {
    token: import.meta.env.BLOB_READ_WRITE_TOKEN,
  });

  const base64String = await fetch
    .remote(headURL)
    .then(
      (data: { data: string[] }) => data[0 as unknown as keyof typeof data],
    );

  return base64String;
};
