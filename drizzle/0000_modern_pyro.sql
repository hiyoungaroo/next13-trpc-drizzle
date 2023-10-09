CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text,
	"done" boolean,
	"created_at" timestamp DEFAULT now() NOT NULL
);
