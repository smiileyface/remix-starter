import { Cookie, createSessionStorage } from "@remix-run/node";

import { eq } from "drizzle-orm";

import db from "~/db";
import { sessions } from "~/db/schema";

export default function createDrizzleSessionStorage(cookie: Cookie) {
  return createSessionStorage({
    cookie,
    async createData(data, expires) {
      const id = crypto.randomUUID();
      await db.insert(sessions).values({
        id,
        data: JSON.stringify(data),
        expires: expires ? new Date(expires) : null,
      });
      return id;
    },
    async readData(id) {
      const session = await db
        .select()
        .from(sessions)
        .where(eq(sessions.id, id))
        .limit(1);
      if (session.length === 0) return null;
      return JSON.parse(session[0].data);
    },
    async updateData(id, data, expires) {
      await db
        .update(sessions)
        .set({
          data: JSON.stringify(data),
          expires: expires ? new Date(expires) : null,
        })
        .where(eq(sessions.id, id));
    },
    async deleteData(id) {
      await db.delete(sessions).where(eq(sessions.id, id));
    },
  });
}
