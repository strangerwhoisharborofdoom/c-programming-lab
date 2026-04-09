"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const services = [
  "Industrial Robotics",
  "AI & Machine Learning",
  "Process Automation",
  "Computer Vision",
  "IoT Solutions",
  "Data Analytics",
  "Robotic Process Automation (RPA)",
  "Consultation",
  "Other",
];

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  company: z.string().min(1, "Company name is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  date: z.string().min(1, "Please select a preferred date"),
  website: z.string().max(0, "Bot detected"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { website: "" },
  });

  const onSubmit = async (data: FormData) => {
    if (data.website) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Submission failed");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const inputClass =
    "w-full bg-[#0a1628] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors";
  const labelClass = "block text-sm font-medium text-slate-300 mb-1";
  const errorClass = "text-xs text-red-400 mt-1";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400 mb-6">Thank you! We&apos;ll get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-all"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Honeypot - hidden from real users */}
      <div style={{ display: "none" }} aria-hidden="true">
        <input type="text" {...register("website")} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input {...register("name")} className={inputClass} placeholder="John Doe" />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input type="email" {...register("email")} className={inputClass} placeholder="john@company.com" />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input type="tel" {...register("phone")} className={inputClass} placeholder="+91 9008826340" />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Company Name *</label>
          <input {...register("company")} className={inputClass} placeholder="Your Company Ltd." />
          {errors.company && <p className={errorClass}>{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Service Required *</label>
          <select {...register("service")} className={inputClass}>
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && <p className={errorClass}>{errors.service.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Preferred Date *</label>
          <input type="date" {...register("date")} className={inputClass} />
          {errors.date && <p className={errorClass}>{errors.date.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          {...register("message")}
          rows={5}
          className={inputClass}
          placeholder="Tell us about your project requirements..."
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
          <p className="text-sm text-red-400">{errorMessage}</p>
        </div>
      )}

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}
