import { google } from "googleapis";

interface OrderPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  timestamp: string;
}

export async function appendSheet(row: OrderPayload): Promise<void> {
  if (!process.env.GS_SERVICE_EMAIL || !process.env.GS_PRIVATE_KEY || !process.env.GS_SHEET_ID) {
    console.warn("Google Sheets not configured – skipping sheet append");
    return;
  }

  const auth = new google.auth.JWT(
    process.env.GS_SERVICE_EMAIL,
    undefined,
    (process.env.GS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  const sheets = google.sheets({ version: "v4", auth });

  const values = [[
    row.timestamp,
    row.name,
    row.email,
    row.phone,
    row.service,
    row.date,
    row.message,
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GS_SHEET_ID,
    range: "Orders!A:G",
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}
