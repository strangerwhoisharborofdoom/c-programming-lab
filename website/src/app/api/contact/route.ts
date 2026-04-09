import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for") ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);
  if (!record || record.resetTime < now) {
    rateLimitMap.set(key, { count: 1, resetTime: now + 60000 });
    return false;
  }
  if (record.count >= 5) return true;
  record.count++;
  return false;
}

async function appendToGoogleSheets(data: Record<string, string>) {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    console.warn("Google Sheets credentials not configured — skipping.");
    return;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:I",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          data.name,
          data.email,
          data.phone,
          data.company,
          data.service,
          data.message,
          data.date,
          "New Lead",
        ],
      ],
    },
  });
}

async function sendEmail(data: Record<string, string>) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.warn("Gmail credentials not configured — skipping email.");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: user,
    to: "p0073100@gmail.com",
    replyTo: data.email,
    subject: `New Consultation Request: ${data.service} — ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #020817; color: #e2e8f0; padding: 24px; border-radius: 8px;">
        <h2 style="color: #00d4ff; margin-bottom: 16px;">New Order / Consultation Request</h2>
        <hr style="border-color: #00d4ff; opacity: 0.3; margin-bottom: 16px;" />
        <table style="width:100%; border-collapse:collapse;">
          <tr><td style="padding:8px 12px; font-weight:bold; color:#94a3b8;">Name</td><td style="padding:8px 12px;">${data.name}</td></tr>
          <tr style="background:#0a1628;"><td style="padding:8px 12px; font-weight:bold; color:#94a3b8;">Email</td><td style="padding:8px 12px;">${data.email}</td></tr>
          <tr><td style="padding:8px 12px; font-weight:bold; color:#94a3b8;">Phone</td><td style="padding:8px 12px;">${data.phone}</td></tr>
          <tr style="background:#0a1628;"><td style="padding:8px 12px; font-weight:bold; color:#94a3b8;">Company</td><td style="padding:8px 12px;">${data.company}</td></tr>
          <tr><td style="padding:8px 12px; font-weight:bold; color:#94a3b8;">Service</td><td style="padding:8px 12px;">${data.service}</td></tr>
          <tr style="background:#0a1628;"><td style="padding:8px 12px; font-weight:bold; color:#94a3b8;">Preferred Date</td><td style="padding:8px 12px;">${data.date}</td></tr>
          <tr><td style="padding:8px 12px; font-weight:bold; color:#94a3b8; vertical-align:top;">Message</td><td style="padding:8px 12px;">${data.message}</td></tr>
          <tr style="background:#0a1628;"><td style="padding:8px 12px; font-weight:bold; color:#94a3b8;">Submitted At</td><td style="padding:8px 12px;">${new Date().toLocaleString()}</td></tr>
        </table>
        <p style="margin-top:16px; color:#64748b; font-size:12px;">This email was sent from RoboTech AI contact form.</p>
      </div>
    `,
  });
}

export async function POST(req: NextRequest) {
  const ipKey = getRateLimitKey(req);
  if (isRateLimited(ipKey)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, company, service, message, date, website } = body;

  // Honeypot check
  if (website) {
    return NextResponse.json({ success: true });
  }

  // Validate required fields
  if (!name || !email || !phone || !company || !service || !message || !date) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    await Promise.allSettled([
      sendEmail({ name, email, phone, company, service, message, date }),
      appendToGoogleSheets({ name, email, phone, company, service, message, date }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
