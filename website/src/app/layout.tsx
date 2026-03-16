import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VoiceAssistant from "@/components/VoiceAssistant";

export const metadata: Metadata = {
  title: "RoboCore AI - Advanced Robotics & AI Automation",
  description: "RoboCore AI delivers cutting-edge industrial robotics, AI machine learning solutions, computer vision systems, and intelligent automation for the industries of tomorrow.",
  keywords: "robotics, AI, automation, machine learning, computer vision, IoT, manufacturing, RPA",
  authors: [{ name: "RoboCore AI" }],
  openGraph: {
    title: "RoboCore AI - Advanced Robotics & AI Automation",
    description: "Transforming industries with intelligent robotics and AI automation solutions.",
    type: "website",
    url: "https://robocoreai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoboCore AI",
    description: "Advanced Robotics & AI Automation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0f] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <VoiceAssistant />
      </body>
    </html>
  );
}
