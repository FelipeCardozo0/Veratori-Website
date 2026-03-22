"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/ui/ThemeProvider";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export default function ContactPage() {
  const { isDark } = useTheme();
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey?.trim()) {
      setFormError(
        "Form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your environment (see .env.example)."
      );
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = (formData.get("firstName") as string)?.trim() ?? "";
    const lastName = (formData.get("lastName") as string)?.trim() ?? "";
    const inquiryType = (formData.get("inquiryType") as string)?.trim() ?? "General";

    formData.append("access_key", accessKey);
    formData.append("name", [firstName, lastName].filter(Boolean).join(" ") || "Website visitor");
    formData.append("subject", `Veratori contact — ${inquiryType}`);

    setFormState("submitting");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
      const data = (await res.json()) as { success?: boolean; message?: string };

      if (res.ok && data.success) {
        setFormState("success");
        form.reset();
      } else {
        setFormError(data.message ?? "Something went wrong. Please try again or email veratori@veratori.com.");
        setFormState("idle");
      }
    } catch {
      setFormError("Network error. Please try again or email veratori@veratori.com.");
      setFormState("idle");
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-sage transition-colors ${isDark ? "bg-white/5 border-white/10 text-white placeholder-white/20" : "bg-mist border-black/8 text-black"}`;
  const labelClass = `text-xs font-semibold tracking-widest uppercase ${isDark ? "text-white/40" : "text-black/40"}`;

  return (
    <main className={`transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>

      {/* ── Page Header ── */}
      <section className={`pt-28 pb-14 border-b ${isDark ? "border-white/5" : "border-black/5"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sage font-semibold tracking-widest uppercase text-xs mb-4 block">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
              Book a walkthrough.
            </h1>
            <p className={`text-lg max-w-2xl leading-relaxed ${isDark ? "text-white/55" : "text-black/55"}`}>
              Whether you're a food &amp; beverage operator looking to optimize your business, or an investor interested in what we're building — we want to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`py-20 ${isDark ? "bg-midnight" : "bg-mist"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* ── Contact Info ── */}
            <div className="flex flex-col justify-between">
              <div className="space-y-10">
                <div className="flex gap-5 items-start">
                  <div className={`p-3 rounded-lg ${isDark ? "bg-white/5" : "bg-white shadow-sm"}`}>
                    <MapPin className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Headquarters</h3>
                    <p className={`text-base leading-relaxed ${isDark ? "text-white/50" : "text-black/50"}`}>
                      Austin, Texas<br />United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className={`p-3 rounded-lg ${isDark ? "bg-white/5" : "bg-white shadow-sm"}`}>
                    <Mail className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className={`text-base leading-relaxed ${isDark ? "text-white/50" : "text-black/50"}`}>
                      <a href="mailto:veratori@veratori.com" className="hover:text-sage transition-colors">veratori@veratori.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className={`p-3 rounded-lg ${isDark ? "bg-white/5" : "bg-white shadow-sm"}`}>
                    <Clock className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Response time</h3>
                    <p className={`text-base leading-relaxed ${isDark ? "text-white/50" : "text-black/50"}`}>
                      We respond to all inquiries within one business day. Demo slots are available Monday–Friday, 9 AM–5 PM CT.
                    </p>
                  </div>
                </div>
              </div>

              {/* What to expect block */}
              <div className={`mt-12 p-6 rounded-xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/5 shadow-sm"}`}>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-sage">What to expect</h4>
                <ul className="space-y-3">
                  {[
                    "A 30-minute video call with a member of our team",
                    "A live demo of the Veratori dashboard",
                    "A transparent estimate of potential savings for your locations",
                    "No sales pressure — just an honest conversation about fit",
                  ].map((item, i) => (
                    <li key={i} className={`flex items-start gap-3 text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                      <span className="text-sage font-bold mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Contact Form ── */}
            <div className={`p-10 md:p-12 rounded-xl border ${isDark ? "bg-black border-white/10" : "bg-white border-black/5 shadow-xl"}`}>
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 bg-sage/15 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Message received</h3>
                  <p className={`text-base ${isDark ? "text-white/50" : "text-black/50"}`}>
                    We'll be in touch within one business day to schedule your walkthrough.
                  </p>
                  <p className={`mt-3 text-sm ${isDark ? "text-white/35" : "text-black/35"}`}>
                    You can also reach us directly at{" "}
                    <a href="mailto:veratori@veratori.com" className="text-sage hover:underline">veratori@veratori.com</a>
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-8 font-semibold text-sage flex items-center gap-2 mx-auto hover:opacity-80 transition-opacity"
                  >
                    Send another message <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className={labelClass}>First Name</label>
                      <input name="firstName" required type="text" className={inputClass} />
                    </div>
                    <div className="space-y-1.5">
                      <label className={labelClass}>Last Name</label>
                      <input name="lastName" required type="text" className={inputClass} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className={labelClass}>Work Email</label>
                    <input name="email" required type="email" className={inputClass} />
                  </div>
                  <div className="space-y-1.5">
                    <label className={labelClass}>Company</label>
                    <input name="company" required type="text" className={inputClass} />
                  </div>
                  <div className="space-y-1.5">
                    <label className={labelClass}>Inquiry Type</label>
                    <select
                      name="inquiryType"
                      required
                      className={inputClass}
                    >
                      <option value="">Select one...</option>
                      <option value="Operator">Operator — I run a food service business</option>
                      <option value="Investor">Investor — I'm interested in Veratori</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className={labelClass}>Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Number of locations, current inventory method, main pain points..."
                    />
                  </div>
                  {formError && (
                    <p
                      className={`text-sm rounded-lg border px-4 py-3 ${isDark ? "border-red-500/30 bg-red-500/10 text-red-200" : "border-red-200 bg-red-50 text-red-800"}`}
                      role="alert"
                    >
                      {formError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className={`w-full py-4 bg-sage text-white font-semibold rounded-md hover:bg-sage-dark transition-colors duration-200 flex items-center justify-center gap-2.5 ${formState === "submitting" ? "opacity-60 cursor-not-allowed" : ""}`}
                  >
                    {formState === "submitting" ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </button>
                  <p className={`text-xs text-center ${isDark ? "text-white/25" : "text-black/25"}`}>
                    Or email us directly at{" "}
                    <a href="mailto:veratori@veratori.com" className="text-sage hover:underline">veratori@veratori.com</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
