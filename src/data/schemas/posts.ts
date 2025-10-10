import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { relations, sql } from 'drizzle-orm';
import { randomUUID } from 'node:crypto';

export const users = sqliteTable("users", {
    id: integer('id').notNull().primaryKey({autoIncrement: true}),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    created_at: text('created_at').notNull().default(sql`(current_timestamp)`),
});

export const logins = sqliteTable("login_info", {
    id: integer('id').notNull().primaryKey({autoIncrement: true}),
    user_id: integer('user_id').notNull().references(()=> users.id),
    token: text('token').notNull().unique(),
    loggedIn_at: text('logged_at').notNull().default(sql`current_timestamp`),
})

export const posts = sqliteTable("posts", {
    id: integer('id').notNull().primaryKey({autoIncrement: true}),
    content: text("content").notNull(),
    author_id: integer('author_id').notNull().references(()=> users.id),
    created_at: text('created_at').notNull().default(sql`(current_timestamp)`),
    updated_at: text('updated_at').notNull().default(sql`(current_timestamp)`),
});

export const comments = sqliteTable("comments", {
    id: integer('id').notNull().primaryKey({autoIncrement: true}),
    content: text('content').notNull(),
    postId: integer('post_id').notNull().references( ()=> posts.id),
    authorId: integer('author_id').notNull().references(()=> users.id),
    parentId: integer('parent_id').notNull().references((): any => comments.id)
})



export const usersRelations = relations(users, ({many})=> ({
    posts: many(posts) 
}));
export const postsRelations = relations(posts, ({one,many})=> ({
    author: one(users, {
        fields: [posts.author_id],
        references: [users.id]
    }),
    comments: many(comments),
    logins: many(logins)
}));



export const commentsRelations = relations(comments, ({one,many}) => ({
    post: one(posts, {
        fields: [comments.postId],
        references: [posts.id]
    }),
    author: one(users, {
        fields: [comments.authorId],
        references: [users.id]
    }),
    parentComment: one(comments, {
        fields: [comments.parentId],
        references: [comments.id],
        relationName: 'replies',
    }),
    replies: many(comments, {
        relationName: 'replies',
    }),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type Login = typeof logins.$inferSelect;
export type NewLogin = typeof logins.$inferInsert;

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;

export type Comment = typeof comments.$inferInsert;
export type NewComment = typeof comments.$inferInsert; 