import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

const sessions = pgTable("session", {
  id: uuid("id").primaryKey(),
  data: text("data").notNull(),
  expires: timestamp("expires", { mode: "date" }),
});

export default sessions;
