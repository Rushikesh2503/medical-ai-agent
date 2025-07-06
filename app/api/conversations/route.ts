import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../config/db";
import { conversations } from "../../../config/schema";
import { eq, desc } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";

// GET: List all conversations for the current user
export async function GET(req: NextRequest) {
    console.log("API /api/conversations GET request received");
  try {
    const user = await currentUser();
    if (!user) return NextResponse.json([], { status: 401 });

    const result = await db
      .select()
      .from(conversations)
      .where(eq(conversations.userId, user.id))
      .orderBy(desc(conversations.startedAt));

    return NextResponse.json(result);
  } catch (error) {
    console.error("API /api/conversations error:", error);
    return NextResponse.json({ error: error?.toString() || "Unknown error" }, { status: 500 });
  }
}

// POST: Create a new conversation
export async function POST(req: NextRequest) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title } = await req.json();
  const [created] = await db
    .insert(conversations)
    .values({ userId: user.id, startedAt: new Date(), ...(title && { title }) })
    .returning();

  return NextResponse.json(created);
} 