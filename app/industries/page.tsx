import SectionShell from "@/components/SectionShell";
import AIGrid from "@/components/AIGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industries we serve: Manufacturing, Logistics, Healthcare, Energy and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <SectionShell id="industries-hero" title="Industries We Serve" subtitle="Automation solutions tailored to your sector">
        <AIGrid />
      </SectionShell>
    </>
  );
}
