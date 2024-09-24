import { migrate } from "drizzle-orm/postgres-js/migrator";

import config from "~/../drizzle.config";
import { env } from "~/lib/env/server";

import db, { client } from "./index";

if (!env.DB_MIGRATING) {
  throw new Error("DB_MIGRATING must be set to true to run migrations");
}

await migrate(db, { migrationsFolder: config.out! });

await client.end();
