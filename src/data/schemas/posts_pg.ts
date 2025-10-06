import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
export const postsTable = pgTable("posts", {
    id: serial('id').primaryKey(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
});
export type Post = typeof postsTable.$inferSelect;
export type NewPost = typeof postsTable.$inferInsert;