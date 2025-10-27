import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://prod2.readychatai.com/business/mock-messages");
    if (!response.ok) throw new Error("Failed to fetch messages");

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
