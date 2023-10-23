import type { AuthConfig } from "@auth/core";
import GitHub from "@auth/core/providers/github";

const config: AuthConfig = {
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    }),
  ],
};
export default config;
