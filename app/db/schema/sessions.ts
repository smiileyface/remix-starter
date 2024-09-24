import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

const sessions = pgTable("session", {
  id: uuid("id").primaryKey(),
  data: text("data").notNull(),
  expires: timestamp("expires", { mode: "date" }),
});

export const InsertSessionSchema = createInsertSchema(sessions);

export const SelectSessionSchema = createSelectSchema(sessions);

export type Session = z.infer<typeof SelectSessionSchema>;

export default sessions;
