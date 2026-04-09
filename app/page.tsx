import Hero3D from "@/components/Hero3D";
import ServiceCards from "@/components/ServiceCards";
import SectionShell from "@/components/SectionShell";
import AIGrid from "@/components/AIGrid";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Axiom Robotics | AI & Automation",
  description: "Build autonomous robots that think with AI. We design intelligent robotics platforms.",
};

export default function Home() {
  return (
    <>
      <Hero3D />
      <SectionShell id="services" title="What we build" subtitle="Autonomous systems, AI copilots, smart factories">
        <ServiceCards />
      </SectionShell>
      <SectionShell id="industries" title="Industries" subtitle="Manufacturing · Logistics · Healthcare · Energy">
        <AIGrid />
      </SectionShell>
      <SectionShell id="cta" title="Ready to automate?" subtitle="Book a consultation in under 60 seconds">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">Book consultation</Link>
          <Link href="/projects" className="btn-ghost">View projects</Link>
        </div>
      </SectionShell>
    </>
  );
}
