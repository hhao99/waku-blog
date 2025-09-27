CREATE TABLE `posts` (
	`slug` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`content` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
