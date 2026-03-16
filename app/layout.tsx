import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VoiceAssistant from "@/components/VoiceAssistant";

export const metadata: Metadata = {
  title: {
    default: "Axiom Robotics | AI & Automation",
    template: "%s | Axiom Robotics",
  },
  description:
    "Futuristic robotics, AI, and automation solutions. We design intelligent robotics platforms with real-time perception, predictive maintenance, and adaptive control.",
  metadataBase: new URL("https://axiomrobotics.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Axiom Robotics",
    title: "Axiom Robotics | AI & Automation",
    description: "Futuristic robotics, AI, and automation solutions.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05060a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-[#05060a] text-slate-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <VoiceAssistant />
      </body>
    </html>
  );
}
