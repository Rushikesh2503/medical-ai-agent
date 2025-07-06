import { currentUser, EmailAddress } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { usersTable } from "../../../config/schema";
import { db } from "../../../config/db";
import { eq } from "drizzle-orm";

export async function POST(re: NextRequest) {
  const user = await currentUser();

  try {
    // Check if User Already Exist
    const users = await db
      .select()
      .from(usersTable)
      .where(
        eq(usersTable.email, user?.primaryEmailAddress?.emailAddress || "")
      );
    if (users?.length === 0) {
      const result = await db.insert(usersTable).values({
        name: user?.firstName + " " + user?.lastName || "",
        email: user?.primaryEmailAddress?.emailAddress || "",
        credits: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }).returning({ 
        id: usersTable.id, 
        name: usersTable.name, 
        email: usersTable.email, 
        credits: usersTable.credits, 
        createdAt: usersTable.createdAt, 
        updatedAt: usersTable.updatedAt 
      });
      return NextResponse.json(result[0]);
    }
    //else return the user

    return NextResponse.json(users[0]);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
