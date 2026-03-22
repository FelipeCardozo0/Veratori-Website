"use client";

import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import PartnerLogos from "@/components/home/PartnerLogos";
import BeforeAfter from "@/components/home/BeforeAfter";
import KeyCapabilities from "@/components/home/KeyCapabilities";
import { useTheme } from "@/components/ui/ThemeProvider";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const { isDark } = useTheme();

  return (
    <main className={`overflow-x-hidden transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* ── Hero Section ── */}
      <Hero />

      {/* ── Partner Logos ── */}
      <div className={`py-16 border-y ${isDark ? "bg-neutral-800 border-white/10" : "bg-gray-100 border-black/5"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <p className={`text-center text-sm md:text-base font-bold tracking-widest uppercase mb-12 ${isDark ? "text-white/50" : "text-black/50"}`}>
            Trusted by operators across the US
          </p>
          <PartnerLogos />
        </div>
      </div>

      {/* ── Before & After Comparison ── */}
      <BeforeAfter />

      {/* ── Key Capabilities ── */}
      <section className="py-20">
        <KeyCapabilities />
      </section>

      {/* ── Final CTA ── */}
      <section className={`py-28 border-t ${isDark ? "bg-[#162722] border-white/5" : "bg-[#EBF1ED] border-black/5"}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Stop counting inventory by hand.
            </h2>
            <p className={`text-lg max-w-2xl mx-auto leading-relaxed mb-10 ${isDark ? "text-white/50" : "text-black/50"}`}>
              Veratori customers recover an average of 12 staff hours per week and reduce food waste by 40%. Schedule a 30-minute walkthrough to see how it works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2.5 px-8 py-4 bg-sage text-white font-semibold rounded-md hover:bg-sage-dark transition-colors duration-200 shadow-sm">
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/product" className={`inline-flex items-center gap-2.5 px-8 py-4 border font-semibold rounded-md transition-colors duration-200 ${isDark ? "border-white/20 text-white/80 hover:border-white/40 hover:text-white" : "border-black/15 text-black/70 hover:border-black/30 hover:text-black"}`}>
                Explore Product
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
