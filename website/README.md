# RoboCore AI — Robotics, AI & Automation Company Website

A world-class, futuristic robotics and AI company website built with **Next.js 14, React, TypeScript, TailwindCSS, Framer Motion, GSAP, Three.js/React Three Fiber**.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Full-stack React framework |
| TypeScript | Type safety |
| TailwindCSS | Utility-first styling |
| Framer Motion | Animations & page transitions |
| GSAP + ScrollTrigger | Scroll-driven animations |
| Three.js / React Three Fiber | 3D AI core hero animation |
| Nodemailer | Email notifications |
| Google Sheets API | Live order/inquiry logging |
| ElevenLabs Conversational AI | Floating voice assistant |
| Zod + React Hook Form | Form validation |

---

## 📁 Folder Structure

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout, metadata, fonts
│   │   ├── page.tsx             # Landing page (3D hero, services, CTA)
│   │   ├── globals.css          # Global styles & CSS variables
│   │   ├── services/page.tsx    # Services page
│   │   ├── projects/page.tsx    # Projects/Portfolio page
│   │   ├── industries/page.tsx  # Industries Served page
│   │   ├── blog/page.tsx        # Blog page
│   │   ├── contact/page.tsx     # Contact/Order form page
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts     # API: email + Google Sheets
│   └── components/
│       ├── Navbar.tsx           # Fixed navigation bar
│       ├── Footer.tsx           # Site footer
│       ├── AICore3D.tsx         # Three.js rotating AI core
│       ├── CircuitBackground.tsx# Canvas particle circuit bg
│       ├── VoiceAssistant.tsx   # ElevenLabs floating widget
│       └── PageTransition.tsx   # Framer Motion page wrapper
├── public/                      # Static assets
├── .env.local.example           # Environment variable template
├── next-sitemap.config.js       # Sitemap configuration
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # TailwindCSS theme
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Prerequisites

- Node.js 18+
- npm or yarn

### 2. Install Dependencies

```bash
cd website
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your credentials (see sections below).

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Build for Production

```bash
npm run build
npm start
```

---

## 📧 Email Notifications (SMTP)

The contact form sends an email notification to `p0073100@gmail.com` on every submission.

### Gmail SMTP Setup

1. Enable 2-Factor Authentication on your Gmail account.
2. Go to **Google Account → Security → App Passwords**.
3. Create an App Password for "Mail".
4. Add to `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-char-app-password
```

> **Tip:** For production, consider [SendGrid](https://sendgrid.com) (free tier: 100 emails/day):
> Set `SMTP_HOST=smtp.sendgrid.net`, `SMTP_PORT=587`, `SMTP_USER=apikey`, `SMTP_PASS=<sendgrid-api-key>`

---

## 📊 Google Sheets Integration

Every form submission is automatically appended as a new row in a Google Sheet with:
`Timestamp | Name | Email | Phone | Company | Service | Date | Message`

### Setup Steps

1. **Create a Google Sheet** — note the spreadsheet ID from the URL:
   `https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/edit`

2. **Create a Service Account** in [Google Cloud Console](https://console.cloud.google.com/):
   - Create a new project (or use existing)
   - Enable **Google Sheets API**
   - Go to **IAM & Admin → Service Accounts → Create Service Account**
   - Download the JSON key file

3. **Share the Google Sheet** with the service account email (give **Editor** access).

4. **Add to `.env.local`**:

```env
GOOGLE_SHEETS_ID=your-spreadsheet-id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-sa@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvA...\n-----END PRIVATE KEY-----\n"
```

> The `GOOGLE_PRIVATE_KEY` value comes from the `"private_key"` field in the downloaded JSON file. Keep the `\n` escape sequences.

The sheet updates **live** for every new form submission.

---

## 🎙️ ElevenLabs Voice Agent

A floating microphone button in the bottom-right corner opens an AI voice assistant that explains robotics/AI/automation services and guides users to book consultations.

### Setup Steps

1. Sign up at [ElevenLabs](https://elevenlabs.io).
2. Go to **Conversational AI → Agents → Create Agent**.
3. Configure the agent with this system prompt:

   > *You are an expert robotics and automation consultant at RoboCore AI. Help businesses understand how robotics, AI, and automation can improve their operations and efficiency. Explain our services: Industrial Robotics, AI/ML Solutions, Computer Vision, IoT Manufacturing, RPA, and Custom AI Development. Guide interested users to schedule a free consultation at robocoreai.com/contact.*

4. Copy the **Agent ID** from the agent settings.
5. Add to `.env.local`:

```env
NEXT_PUBLIC_ELEVENLABS_AGENT_ID=your-elevenlabs-agent-id
```

---

## 🔒 Spam Protection

The contact form uses a **honeypot field** — a hidden input that real users never fill in, but bots do. Any submission with the honeypot field populated is silently rejected with a `400` response.

The API route in `src/app/api/contact/route.ts` handles this check server-side.

---

## 🌐 SEO

- Structured metadata (title, description, keywords, Open Graph, Twitter Card) in `src/app/layout.tsx`
- Sitemap generated via `next-sitemap` — run `npm run postbuild` or add to build script
- Lazy loading for the 3D component via `next/dynamic` with `ssr: false`

---

## 🚢 Deployment on Vercel

### One-click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Steps

1. Push code to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repository.
3. Set **Root Directory** to `website`.
4. Add all environment variables from `.env.local` in **Project Settings → Environment Variables**.
5. Click **Deploy**.

Vercel auto-detects Next.js and handles builds, serverless API routes, and CDN distribution.

### Environment Variables on Vercel

Add these in Vercel dashboard under **Settings → Environment Variables**:

| Variable | Description |
|---|---|
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_PORT` | SMTP port (587 for TLS) |
| `SMTP_USER` | SMTP username/email |
| `SMTP_PASS` | SMTP password/app password |
| `GOOGLE_SHEETS_ID` | Google Spreadsheet ID |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email |
| `GOOGLE_PRIVATE_KEY` | Service account private key |
| `NEXT_PUBLIC_ELEVENLABS_AGENT_ID` | ElevenLabs Agent ID |

---

## 📞 Contact

- **Phone:** +91 9008826340
- **Email:** p0073100@gmail.com

---

## 📄 License

MIT
