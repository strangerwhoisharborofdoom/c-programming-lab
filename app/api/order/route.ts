import { NextResponse } from "next/server";
import { sendMail } from "@/lib/email";
import { appendSheet } from "@/lib/sheets";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot spam check
    if (body.botField) {
      return NextResponse.json({ ok: true });
    }

    const payload = {
      name: String(body.name ?? "").slice(0, 200),
      email: String(body.email ?? "").slice(0, 200),
      phone: String(body.phone ?? "").slice(0, 50),
      service: String(body.service ?? "").slice(0, 200),
      message: String(body.message ?? "").slice(0, 2000),
      date: String(body.date ?? "").slice(0, 20),
      timestamp: new Date().toISOString(),
    };

    // Basic validation
    if (!payload.name || !payload.email || !payload.service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const results = await Promise.allSettled([sendMail(payload), appendSheet(payload)]);
    const errors = results.filter((r) => r.status === "rejected");
    if (errors.length === results.length) {
      console.error("All integrations failed:", errors);
      return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Order API error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
