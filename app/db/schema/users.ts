import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

const users = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 320 }).notNull().unique(),
  emailVerified: timestamp("email_verified", { mode: "date" }),
  image: varchar("image", { length: 2048 }),
});

export const InsertUserSchema = createInsertSchema(users, {
  email: (schema) => schema.email.email(),
  image: (schema) => schema.image.url(),
}).omit({ id: true });

export const SelectUserSchema = createSelectSchema(users);

export type User = z.infer<typeof SelectUserSchema>;

export default users;
