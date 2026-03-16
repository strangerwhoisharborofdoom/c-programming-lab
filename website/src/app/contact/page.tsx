'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { motion } from 'framer-motion';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number').optional().or(z.literal('')),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().optional(),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  honeypot: z.string().max(0, 'Bot detected'),
});

type FormData = z.infer<typeof schema>;

const services = [
  'Industrial Robotics Automation',
  'AI & Machine Learning Solutions',
  'Computer Vision Systems',
  'IoT & Smart Manufacturing',
  'Robotic Process Automation (RPA)',
  'Custom AI Development',
  'General Consultation',
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Failed to send');
      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2fff]">
              Get In Touch
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Ready to automate? Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[#0f0f1a] border border-[#00d4ff11] rounded-2xl p-6">
              <h2 className="text-white font-bold text-lg mb-4">Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00d4ff11] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Phone</p>
                    <a href="tel:9008826340" className="text-white text-sm hover:text-[#00d4ff] transition-colors">
                      +91 9008826340
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00d4ff11] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Email</p>
                    <a href="mailto:p0073100@gmail.com" className="text-white text-sm hover:text-[#00d4ff] transition-colors">
                      p0073100@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00d4ff11] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Response Time</p>
                    <p className="text-white text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00d4ff11] to-[#7b2fff11] border border-[#00d4ff22] rounded-2xl p-6">
              <h3 className="text-white font-bold mb-2">Free Consultation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Book a 30-minute call with our automation experts to discuss your requirements — no commitment required.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#0f0f1a] border border-[#00d4ff22] rounded-2xl p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#00d4ff22] flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 bg-[#00d4ff] text-black font-bold rounded-xl hover:bg-[#00d4ff]/80 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot */}
                  <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Name *</label>
                      <input
                        {...register('name')}
                        className="w-full bg-[#0a0a0f] border border-[#00d4ff22] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
                        placeholder="John Smith"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email *</label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full bg-[#0a0a0f] border border-[#00d4ff22] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Phone</label>
                      <input
                        {...register('phone')}
                        type="tel"
                        className="w-full bg-[#0a0a0f] border border-[#00d4ff22] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Company</label>
                      <input
                        {...register('company')}
                        className="w-full bg-[#0a0a0f] border border-[#00d4ff22] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Service Required *</label>
                      <select
                        {...register('service')}
                        className="w-full bg-[#0a0a0f] border border-[#00d4ff22] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Preferred Start Date</label>
                      <input
                        {...register('date')}
                        type="date"
                        className="w-full bg-[#0a0a0f] border border-[#00d4ff22] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Message *</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className="w-full bg-[#0a0a0f] border border-[#00d4ff22] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d4ff] transition-colors resize-none"
                      placeholder="Tell us about your automation requirements..."
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] text-white font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_#00d4ff44]"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
