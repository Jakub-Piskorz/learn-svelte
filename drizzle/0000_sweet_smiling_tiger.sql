-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "game" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"genre_id" text,
	"description" text,
	"pegi" text
);
--> statement-breakpoint
CREATE TABLE "platform" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE "user_type" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" text,
	CONSTRAINT "user_type_type_unique" UNIQUE("type")
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"age" integer,
	"username" text NOT NULL,
	"password_hash" text NOT NULL,
	"user_type" integer NOT NULL,
	CONSTRAINT "user_username_unique" UNIQUE("username")
);
--> statement-breakpoint
CREATE TABLE "event" (
	"id" text PRIMARY KEY NOT NULL,
	"organizerId" text,
	"description" text,
	"locationId" text,
	"plannedDuration" text
);
--> statement-breakpoint
CREATE TABLE "organizer" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE "location" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
*/