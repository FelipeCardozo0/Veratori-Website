"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

interface FormData { name: string; email: string; company: string; message: string }
interface FormErrors { name?: string; email?: string; message?: string }

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const ic = (field: keyof FormErrors) =>
    `w-full px-[clamp(16px,2vw,24px)] py-[clamp(12px,1.5vw,16px)] rounded-xl border outline-none transition-all duration-200 text-[clamp(14px,1vw,16px)] bg-white/[0.03] text-white placeholder-white/30 ${errors[field]
      ? "border-red-500/50"
      : focused === field
        ? "border-electric/50 ring-1 ring-electric/20"
        : "border-white/10 hover:border-white/20"
    }`;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[12%] pb-[4%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f12] to-black" />
        <div className="absolute top-[8%] right-0 w-[clamp(200px,25vw,320px)] h-[clamp(200px,25vw,320px)] rounded-full bg-electric/5 blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-[5.2%] text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[clamp(10px,0.85vw,14px)] font-semibold text-electric uppercase tracking-widest">Contact</span>
            <h1 className="mt-[clamp(16px,2vw,24px)] text-[clamp(36px,5vw,68px)] font-bold tracking-tight text-white leading-[1.08]">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="mt-[clamp(16px,2vw,24px)] text-[clamp(16px,1.4vw,20px)] max-w-2xl mx-auto text-white/50 leading-relaxed">
              Ready to transform your inventory management? Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-[6%] overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-[5.2%] grid grid-cols-1 lg:grid-cols-2 gap-[clamp(32px,4vw,48px)] items-start">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form key="form" exit={{ opacity: 0, y: -20 }} onSubmit={handleSubmit} className="p-[clamp(24px,3vw,32px)] rounded-2xl border space-y-[clamp(16px,2vw,24px)] bg-white/[0.02] border-white/[0.06] backdrop-blur-[24px] saturate-[1.4]" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-[clamp(12px,0.9vw,14px)] font-medium mb-[clamp(6px,0.8vw,8px)] text-white/70">Full Name *</label>
                    <input id="name" type="text" value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: undefined }); }} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} className={ic("name")} placeholder="Jane Doe" />
                    <AnimatePresence>{errors.name && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-400 text-[clamp(10px,0.85vw,12px)] mt-1">{errors.name}</motion.p>}</AnimatePresence>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[clamp(12px,0.9vw,14px)] font-medium mb-[clamp(6px,0.8vw,8px)] text-white/70">Email *</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: undefined }); }} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} className={ic("email")} placeholder="jane@company.com" />
                    <AnimatePresence>{errors.email && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-400 text-[clamp(10px,0.85vw,12px)] mt-1">{errors.email}</motion.p>}</AnimatePresence>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[clamp(12px,0.9vw,14px)] font-medium mb-[clamp(6px,0.8vw,8px)] text-white/70">Company</label>
                    <input id="company" type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} className={ic("message")} placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[clamp(12px,0.9vw,14px)] font-medium mb-[clamp(6px,0.8vw,8px)] text-white/70">Message *</label>
                    <textarea id="message" rows={5} value={form.message} onChange={(e) => { setForm({ ...form, message: e.target.value }); if (errors.message) setErrors({ ...errors, message: undefined }); }} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} className={`${ic("message")} resize-none`} placeholder="Tell us about your inventory challenges..." />
                    <AnimatePresence>{errors.message && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-400 text-[clamp(10px,0.85vw,12px)] mt-1">{errors.message}</motion.p>}</AnimatePresence>
                  </div>
                  <motion.button whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-[clamp(12px,1.5vw,16px)] bg-electric text-white font-semibold rounded-xl text-[clamp(14px,1vw,16px)] glow-electric glow-electric-hover transition-all duration-300 cursor-pointer">
                    Send Message
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-[clamp(32px,4vw,48px)] rounded-2xl border text-center bg-white/[0.02] border-white/[0.06] backdrop-blur-[24px] saturate-[1.4]">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }} className="w-[clamp(64px,5vw,80px)] h-[clamp(64px,5vw,80px)] rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-[clamp(16px,2vw,24px)]">
                    <svg className="w-[50%] h-[50%] text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </motion.div>
                  <h3 className="text-[clamp(24px,2vw,32px)] font-bold mb-[clamp(8px,1vw,12px)] text-white">Message Sent!</h3>
                  <p className="text-[clamp(14px,1vw,16px)] text-white/50">Thank you, {form.name}. We&apos;ll be in touch within 24 hours.</p>
                  <motion.button whileHover={{ scale: 1.05 }} onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", message: "" }); }} className="mt-[clamp(16px,2vw,24px)] px-[clamp(24px,3vw,32px)] py-[clamp(8px,1vw,12px)] text-[clamp(12px,0.9vw,14px)] text-electric border border-electric/30 rounded-lg hover:bg-electric/10 transition-colors cursor-pointer">
                    Send another
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info side */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-[clamp(16px,2vw,24px)]">


            {[
              { icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75", label: "Email", value: "hello@veratori.com", color: "text-electric" },
              { icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z", label: "Headquarters", value: "Austin, Texas", color: "text-sage" },
              { icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z", label: "Response Time", value: "Within 24 hours", color: "text-sky" },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-[clamp(12px,1.5vw,16px)] p-[clamp(12px,1.5vw,16px)] rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-[24px] saturate-[1.4]">
                <svg className={`w-[clamp(20px,1.5vw,24px)] h-[clamp(20px,1.5vw,24px)] flex-shrink-0 ${item.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                <div>
                  <p className="text-[clamp(10px,0.85vw,12px)] text-white/40">{item.label}</p>
                  <p className="font-medium text-[clamp(14px,1vw,16px)] text-white">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <div className="relative h-[clamp(150px,15vw,192px)] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=800&q=80" alt="Austin skyline" fill className="object-cover" sizes="50vw" loading="lazy" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-[clamp(12px,1.5vw,16px)] py-[clamp(8px,1vw,12px)] rounded-xl backdrop-blur-md bg-black/80 text-white border border-white/[0.06]">
                  <p className="text-[clamp(12px,0.9vw,14px)] font-medium flex items-center gap-[clamp(4px,0.5vw,6px)]"><MapPin className="w-4 h-4 text-electric" strokeWidth={1.8} /> Austin, Texas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
