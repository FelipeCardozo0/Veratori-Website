"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";

interface StatPillProps {
  label: string;
  value: string;
  delta: string;
  isDark: boolean;
}

function StatPill({ label, value, delta, isDark }: StatPillProps) {
  return (
    <div className={`flex items-center justify-between px-5 py-4 rounded-xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/5 shadow-sm"}`}>
      <div>
        <p className={`text-xs font-medium mb-1 ${isDark ? "text-white/40" : "text-black/40"}`}>{label}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>
      <span className="text-xs font-semibold text-sage bg-sage/10 px-2 py-1 rounded-md">{delta}</span>
    </div>
  );
}

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section className="relative pt-44 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-sage font-semibold tracking-widest uppercase text-xs mb-6 block">For Food Service Operators</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-balance mb-8">
              Your inventory, counted.{" "}
              <span className="text-sage">Every shift, automatically</span>
            </h1>
            <p className={`text-xl md:text-2xl max-w-2xl leading-relaxed mb-12 ${isDark ? "text-white/55" : "text-black/55"}`}>
              Veratori installs computer vision hardware in your walk-in coolers and storage rooms. From that point on, stock levels are tracked in real time — no manual counts, no clipboards, no guesswork.
            </p>
          </motion.div>

          {/* Right: live stat pills */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="hidden lg:flex flex-col gap-4"
          >
            <StatPill
              label="Items tracked today"
              value="2,847 units"
              delta="Live"
              isDark={isDark}
            />
            <StatPill
              label="Food waste prevented (last 30 days)"
              value="$4,320 saved"
              delta="−38% vs prior"
              isDark={isDark}
            />
            <StatPill
              label="Last inventory count completed"
              value="4 seconds ago"
              delta="Automatic"
              isDark={isDark}
            />
            <StatPill
              label="Manual hours eliminated this week"
              value="14 hrs"
              delta="Avg. per location"
              isDark={isDark}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
