import { sqliteTable, int, text } from "drizzle-orm/sqlite-core";

export const postsTable = sqliteTable("posts", {
    slug: text("slug").notNull().primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    content: text("content").notNull(),
    createdAt: int("created_at").notNull(),
    updatedAt: int("updated_at").notNull(),
});
export type Post = typeof postsTable.$inferSelect;
export type NewPost = typeof postsTable.$inferInsert;