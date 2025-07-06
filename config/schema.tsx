import { integer, pgTable, timestamp, varchar, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer().notNull().default(0),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});

// Add these:
export const conversations = pgTable("conversations", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar({ length: 255 }).notNull(),
  startedAt: timestamp().notNull().defaultNow(),
  // Optionally: title: varchar({ length: 255 })
});

export const messages = pgTable("messages", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  conversationId: integer().notNull(),
  role: varchar({ length: 32 }).notNull(), // "user" or "assistant"
  content: text().notNull(),
  audioUrl: text(), // Optional
  createdAt: timestamp().notNull().defaultNow(),
});