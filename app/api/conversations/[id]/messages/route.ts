import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../config/db";
import { messages } from "../../../../../config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const conversationId = Number(id);
  const { role, content, audioUrl } = await req.json();

  const [created] = await db
    .insert(messages)
    .values({
      conversationId,
      role,
      content,
      audioUrl,
      createdAt: new Date(),
    })
    .returning();

  return NextResponse.json(created);
}

// Optionally, add GET to fetch all messages for a conversation
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await currentUser();
  if (!user) return NextResponse.json([], { status: 401 });

  const { id } = await params;
  const conversationId = Number(id);
  const result = await db
    .select()
    .from(messages)
    .where(eq(messages.conversationId, conversationId))
    .orderBy(messages.createdAt);

  return NextResponse.json(result);
}
