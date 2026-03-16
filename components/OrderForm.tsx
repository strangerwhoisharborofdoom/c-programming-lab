"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Robotic Cells",
  "AI Control Systems",
  "Predictive Operations",
  "Voice Interfaces",
  "Digital Twin",
  "Custom Integration",
  "Other",
];

export default function OrderForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-green-500/30 bg-green-500/5 p-6 text-center"
      >
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-lg font-semibold text-white">Request received!</h3>
        <p className="text-sm text-slate-300 mt-2">We&apos;ll get back to you within 24 hours at the email you provided.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="relative space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-400 mb-1" htmlFor="name">Name *</label>
          <input id="name" name="name" required placeholder="John Smith" className="input" />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1" htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required placeholder="john@company.com" className="input" />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="+91 9008826340" className="input" />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1" htmlFor="date">Preferred Date</label>
          <input id="date" name="date" type="date" className="input" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs text-slate-400 mb-1" htmlFor="service">Service Required *</label>
          <select id="service" name="service" required className="input select-none"
            style={{ colorScheme: "dark" }}>
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs text-slate-400 mb-1" htmlFor="message">Project Details *</label>
        <textarea id="message" name="message" required placeholder="Describe your project, goals, and timeline..." className="input h-32 resize-none" />
      </div>

      {/* Honeypot - hidden from real users */}
      <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
        <input name="botField" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="text-sm text-rose-400 bg-rose-500/10 rounded-lg px-3 py-2">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:p0073100@gmail.com" className="underline hover:text-rose-300">p0073100@gmail.com</a>
        </p>
      )}

      <motion.button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
        whileTap={{ scale: 0.98 }}
      >
        {status === "sending" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Submit Request"
        )}
      </motion.button>
    </form>
  );
}
