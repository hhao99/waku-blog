import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { relations, sql } from 'drizzle-orm';
import { randomUUID } from 'node:crypto';

export const posts = sqliteTable("posts", {
    id: integer('id').notNull().primaryKey({autoIncrement: true}),
    content: text("content").notNull(),
    author_id: integer('author_id').notNull().references(()=> users.id),
    created_at: text('created_at').notNull().default(sql`(current_timestamp)`),
    updated_at: text('updated_at').notNull().default(sql`(current_timestamp)`),
});

export const users = sqliteTable("users", {
    id: integer('id').notNull().primaryKey({autoIncrement: true}),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    created_at: text('created_at').notNull().default(sql`(current_timestamp)`),
});

export const usersRelations = relations(users, ({many})=> ({
    posts: many(posts) 
}));
export const postsRelations = relations(posts, ({one})=> ({
    author: one(users, {
        fields: [posts.author_id],
        references: [users.id]
    })
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;