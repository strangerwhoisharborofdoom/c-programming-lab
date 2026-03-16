import SectionShell from "@/components/SectionShell";
import OrderForm from "@/components/OrderForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Order",
  description: "Book a consultation or place an order for robotics, AI, and automation services.",
};

export default function ContactPage() {
  return (
    <SectionShell id="contact" title="Contact & Order" subtitle="Let's build something intelligent together">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Get in touch</h3>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <span className="text-cyan-400">📞</span>
              <a href="tel:+919008826340" className="hover:text-cyan-400 transition-colors">+91 9008826340</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-cyan-400">✉️</span>
              <a href="mailto:p0073100@gmail.com" className="hover:text-cyan-400 transition-colors">p0073100@gmail.com</a>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-white mb-3">What to expect</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {["Response within 24 hours", "Free initial consultation", "Detailed project proposal", "Transparent pricing"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Book a consultation</h3>
          <OrderForm />
        </div>
      </div>
    </SectionShell>
  );
}
