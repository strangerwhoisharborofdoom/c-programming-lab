import nodemailer from "nodemailer";

interface OrderPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  timestamp: string;
}

export async function sendMail(data: OrderPayload): Promise<void> {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("SMTP not configured – skipping email");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#22d3ee">New Order – Axiom Robotics</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px;font-weight:bold;color:#666">Name</td><td style="padding:8px">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#666">Email</td><td style="padding:8px">${escapeHtml(data.email)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#666">Phone</td><td style="padding:8px">${escapeHtml(data.phone)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#666">Service</td><td style="padding:8px">${escapeHtml(data.service)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#666">Preferred Date</td><td style="padding:8px">${escapeHtml(data.date)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#666">Message</td><td style="padding:8px">${escapeHtml(data.message)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#666">Submitted</td><td style="padding:8px">${data.timestamp}</td></tr>
      </table>
    </div>
  `;

  await transporter.sendMail({
    from: `"Axiom Robotics" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO ?? "p0073100@gmail.com",
    subject: `New order: ${data.service}`,
    html,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
