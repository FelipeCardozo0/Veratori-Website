"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/components/ui/ThemeProvider";
import OrderForm from "@/components/pricing/OrderForm";

const faqs = [
  {
    q: "How does performance-based pricing work?",
    a: "We calculate the measurable value Veratori creates for your business each month — waste reduction, inventory accuracy gains, and labor hours saved. You pay 20–40% of that number. If we don't deliver value, you don't pay.",
  },
  {
    q: "What does the average location pay per month?",
    a: "Most locations see an average cost of approximately $1,500 per month, depending on the scale of operations and measured savings. We establish a transparent baseline before billing begins.",
  },
  {
    q: "Is there an upfront cost?",
    a: "Yes — a one-time hardware and installation fee covers the sensor units, ceiling mount, and system integration. Your first 30 days of service are free so you can verify the value before your first billing cycle.",
  },
  {
    q: "How do you calculate measurable savings?",
    a: "We use a transparent methodology that compares a pre-installation baseline with Veratori-optimized metrics: cost of food waste prevented, labor hours recovered from manual counting, and reduced carrying costs.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. There are no long-term contracts. If Veratori isn't delivering measurable value, you can cancel your engagement at the end of any billing period.",
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className={`rounded-xl border transition-all duration-200 ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/5 shadow-sm"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-7 py-5 text-left cursor-pointer"
      >
        <span className="text-base font-bold pr-4">{faq.q}</span>
        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className={`px-7 pb-5 text-base leading-relaxed ${isDark ? "text-white/50" : "text-black/50"}`}>
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  const { isDark } = useTheme();

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
            <span className="text-sage font-semibold tracking-widest uppercase text-xs mb-4 block">Pricing</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
              You pay for what<br />
              <span className="text-sage">we actually save you</span>
            </h1>
            <p className={`text-lg max-w-2xl leading-relaxed ${isDark ? "text-white/55" : "text-black/55"}`}>
              No flat subscription. No per-seat fees. We calculate the value Veratori creates for your business each month, and charge a percentage of that number.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing & FAQ ── */}
      <section className={`py-28`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            
            {/* Left: Order Form */}
            <div className="w-full h-full">
              <OrderForm />
            </div>

            {/* Right: FAQ */}
            <div className="w-full">
              <div className="mb-10 text-left">
                <span className="text-sage font-semibold tracking-widest uppercase text-sm mb-4 block">FAQ</span>
                <h2 className="text-4xl font-bold tracking-tight">Common Questions</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} faq={faq} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
