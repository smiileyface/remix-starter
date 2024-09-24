import { defineConfig } from "drizzle-kit";

import { env } from "~/lib/env/server";

export default defineConfig({
  schema: "./app/db/schema/index.ts",
  dialect: "postgresql",
  out: "./app/db/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
