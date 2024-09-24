import { createCookie } from "@remix-run/node";

import { env } from "../env/server";
import createDrizzleSessionStorage from "./drizzle-session-storage.server";

export const sessionStorage = createDrizzleSessionStorage(
  createCookie("__session", {
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [env.SESSION_SECRET],
    secure: env.NODE_ENV === "production",
  })
);
