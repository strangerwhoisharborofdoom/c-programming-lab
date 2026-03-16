import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VoiceAssistant from "@/components/voice/VoiceAssistant";

export const metadata: Metadata = {
  title: {
    default: "RoboTech AI | Robotics, AI & Automation Solutions",
    template: "%s | RoboTech AI",
  },
  description:
    "Leading robotics, artificial intelligence, and automation solutions company. We build cutting-edge robots, AI systems, and automated workflows for businesses.",
  keywords: [
    "robotics",
    "artificial intelligence",
    "automation",
    "AI solutions",
    "industrial robots",
  ],
  authors: [{ name: "RoboTech AI" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://robotechai.com",
    siteName: "RoboTech AI",
    title: "RoboTech AI | Robotics, AI & Automation Solutions",
    description:
      "Leading robotics, artificial intelligence, and automation solutions company.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoboTech AI | Robotics, AI & Automation Solutions",
    description:
      "Leading robotics, artificial intelligence, and automation solutions company.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="antialiased bg-[#020817] text-slate-200"
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <VoiceAssistant />
      </body>
    </html>
  );
}
