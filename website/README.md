# RoboTech AI — Website

A futuristic robotics and AI company website built with Next.js 16, React 19, TailwindCSS v4, Framer Motion v12, GSAP 3, Three.js, and React Three Fiber 9.

## Tech Stack

| Library | Version | Purpose |
|---------|---------|---------|
| Next.js | 16 | App framework (App Router) |
| React | 19 | UI library |
| TailwindCSS | v4 | Styling (CSS-based config) |
| Framer Motion | v12 | Animations |
| GSAP | 3 | Advanced animations |
| Three.js | latest | 3D graphics |
| React Three Fiber | 9 | React renderer for Three.js |
| @react-three/drei | latest | R3F helpers |
| nodemailer | 7 | Email sending |
| googleapis | latest | Google Sheets integration |
| react-hook-form | latest | Form management |
| zod | latest | Schema validation |

## Getting Started

### 1. Clone and install dependencies

```bash
cd website
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in the required values in `.env.local`:

- **GMAIL_USER** + **GMAIL_APP_PASSWORD** — for contact form emails
- **GOOGLE_SERVICE_ACCOUNT_EMAIL** + **GOOGLE_PRIVATE_KEY** + **GOOGLE_SHEET_ID** — for Google Sheets lead capture
- **NEXT_PUBLIC_ELEVENLABS_AGENT_ID** — for voice assistant (optional)

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

## Setting up Gmail SMTP

1. Enable 2-factor authentication on your Google account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Create a new app password for "Mail"
4. Use that 16-character password as `GMAIL_APP_PASSWORD`

## Setting up Google Sheets Integration

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or use existing)
3. Enable the **Google Sheets API**
4. Create a **Service Account** and download the JSON key
5. Share your Google Sheet with the service account email (Editor access)
6. Copy the `client_email` and `private_key` from the JSON into `.env.local`

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── blog/page.tsx           # Blog listing page
│   ├── contact/page.tsx        # Contact/order page
│   ├── industries/page.tsx     # Industries page
│   ├── projects/page.tsx       # Projects portfolio
│   ├── services/page.tsx       # Services page
│   ├── globals.css             # Global styles + TailwindCSS v4 theme
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── robots.ts               # robots.txt
│   └── sitemap.ts              # XML sitemap
├── components/
│   ├── 3d/
│   │   ├── AICore.tsx          # AI core 3D sphere
│   │   └── RobotScene.tsx      # Robot arm 3D scene
│   ├── forms/
│   │   └── ContactForm.tsx     # Contact/order form
│   ├── layout/
│   │   ├── Footer.tsx          # Site footer
│   │   └── Navbar.tsx          # Sticky navigation
│   ├── sections/
│   │   ├── CTABanner.tsx       # Call-to-action banner
│   │   ├── FeaturedProjects.tsx # Project case studies
│   │   ├── Hero.tsx            # Hero section with 3D
│   │   ├── Industries.tsx      # Industries grid
│   │   ├── Services.tsx        # Services grid
│   │   └── Stats.tsx           # Animated counters
│   └── voice/
│       └── VoiceAssistant.tsx  # ElevenLabs voice UI
└── lib/
    └── utils.ts                # cn() utility
```

## Contact Details

- **Phone:** 9008826340
- **Email:** p0073100@gmail.com
- **Location:** Innovation Hub, Tech Park, Bengaluru, Karnataka 560001

## Deployment

Deploy to [Vercel](https://vercel.com) for optimal Next.js performance:

```bash
npx vercel --prod
```

Add all environment variables in the Vercel dashboard under Project Settings → Environment Variables.
