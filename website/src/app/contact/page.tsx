import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with RoboTech AI for robotics, AI, and automation consultation. Call 9008826340 or email p0073100@gmail.com.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "9008826340",
    href: "tel:9008826340",
    color: "cyan",
  },
  {
    icon: Mail,
    label: "Email",
    value: "p0073100@gmail.com",
    href: "mailto:p0073100@gmail.com",
    color: "purple",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Innovation Hub, Tech Park\nBengaluru, Karnataka 560001",
    href: null,
    color: "cyan",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Sat: 9:00 AM – 7:00 PM IST",
    href: null,
    color: "purple",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative circuit-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-transparent to-[#020817]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Start Your <span className="gradient-text">Automation Journey</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Fill out the form below and our team of robotics engineers will reach out
            within 24 hours to discuss your project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Let&apos;s Talk</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Whether you need a single robot integrated or a full factory automation
                  strategy, we&apos;re here to help. Reach out via any of the channels below
                  or use the form.
                </p>
              </div>

              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div
                    className={`flex items-start gap-4 p-4 bg-slate-900/60 border ${
                      info.color === "cyan"
                        ? "border-cyan-500/20 hover:border-cyan-500/40"
                        : "border-purple-500/20 hover:border-purple-500/40"
                    } rounded-xl transition-all group`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        info.color === "cyan" ? "bg-cyan-500/10" : "bg-purple-500/10"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          info.color === "cyan" ? "text-cyan-400" : "text-purple-400"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">{info.label}</p>
                      <p className="text-white text-sm font-medium whitespace-pre-line">{info.value}</p>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a key={info.label} href={info.href}>
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}

              {/* What to expect */}
              <div className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                <h3 className="text-white font-semibold text-sm mb-3">What happens next?</h3>
                <ol className="space-y-2">
                  {[
                    "We review your submission within 24 hours",
                    "A solutions engineer schedules a discovery call",
                    "We prepare a custom automation roadmap",
                    "Proposal delivered within 5 business days",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-5 h-5 bg-cyan-500/20 border border-cyan-500/40 rounded text-cyan-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 p-6 sm:p-8 bg-slate-900/60 border border-slate-800 rounded-xl">
              <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
