ALTER TABLE "todos" ADD COLUMN "createdAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "todos" DROP COLUMN IF EXISTS "created_at";