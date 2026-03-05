"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  ChevronDown,
  BarChart3,
  Bell,
  BrainCircuit,
  ScanLine,
  Shield,
  Code2,
  Headphones,
  Package,
  Gauge,
  Users,
  Zap,
  Database,
  Lock,
  Building2,
  Clock,
  Mail,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";


/* ═══════════════════════════════════════════════════════════
   PRICING DATA
   ═══════════════════════════════════════════════════════════ */
const pricingInfo = {
  title: "Value-Based Pricing",
  subtitle: "Simple, transparent, and performance-based. Pay for the measurable value we create for your operations.",
  details: [
    { label: "One-time installation fee", highlight: true },
    { label: "First month free", highlight: false },
    { label: "Pricing: 20%–40% of Value Created", highlight: true },
    { label: "~$1,500 per month per location", highlight: false },
  ],
};



/* ═══════════════════════════════════════════════════════════
   PRICING CARDS
   ═══════════════════════════════════════════════════════════ */
function PricingCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="plans" className="relative py-[6%] overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto px-[5.2%]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="pricing-card-glow relative rounded-3xl border border-sage/30 bg-white/[0.04] p-[clamp(32px,4vw,64px)] overflow-hidden backdrop-blur-[24px] saturate-[1.4] text-center"
        >
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-sage/15 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-electric/15 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/[0.01] pointer-events-none noise-overlay opacity-30" />

          <h3 className="text-[clamp(24px,2.5vw,32px)] font-bold mb-[clamp(24px,3vw,40px)] text-white">
            Value-Based Partnership
          </h3>

          <div className="space-y-[clamp(32px,4vw,48px)] mb-[clamp(40px,5vw,56px)]">
            {/* Implementation Fee & Free Month Group */}
            <div className="space-y-[clamp(8px,1vw,12px)]">
              {pricingInfo.details.slice(0, 2).map((detail, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-300 ${detail.highlight
                    ? "text-[clamp(20px,2vw,28px)] font-bold text-white leading-tight"
                    : "text-[clamp(16px,1.4vw,20px)] text-white/60 font-medium"
                    }`}
                >
                  {detail.label}
                </div>
              ))}
            </div>

            {/* Value-Based Pricing Group */}
            <div className="space-y-[clamp(8px,1vw,12px)]">
              {pricingInfo.details.slice(2, 4).map((detail, idx) => (
                <div
                  key={idx + 2}
                  className={`transition-all duration-300 ${detail.highlight
                    ? "text-[clamp(20px,2vw,28px)] font-bold text-white leading-tight"
                    : "text-[clamp(16px,1.4vw,20px)] text-white/60 font-medium"
                    }`}
                >
                  {detail.label}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link href="/contact" className="inline-block relative z-10">
            <motion.span
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-[0.5em] px-[clamp(32px,3vw,48px)] py-[clamp(16px,2vw,20px)] bg-sage text-white font-bold rounded-2xl glow-sage glow-sage-hover transition-all duration-300 cursor-pointer text-[clamp(16px,1.2vw,20px)] shadow-2xl"
            >
              Start Optimizing
              <ArrowRight className="w-[1.2em] h-[1.2em]" />
            </motion.span>
          </Link>

          <p className="mt-[clamp(24px,2vw,32px)] text-[clamp(12px,1vw,14px)] text-white/30 italic">
            *Value created is calculated based on waste reduction, labor savings, and inventory accuracy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPARISON TABLE
   ═══════════════════════════════════════════════════════════ */
const comparisonFeatures = [
  {
    category: "Core Features",
    features: [
      { name: "Inventory tracking", starter: true, pro: true, enterprise: true },
      { name: "Waste alerts", starter: true, pro: true, enterprise: true },
      { name: "Reporting dashboard", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
      { name: "Locations", starter: "Up to 2", pro: "Up to 10", enterprise: "Unlimited" },
    ],
  },
  {
    category: "AI & Intelligence",
    features: [
      { name: "AI demand forecasting", starter: false, pro: true, enterprise: true },
      { name: "Multi-location aggregation", starter: false, pro: true, enterprise: true },
      { name: "Freshness & expiration tracking", starter: false, pro: true, enterprise: true },
      { name: "Automated sales detection", starter: false, pro: true, enterprise: true },
      { name: "LiDAR integration", starter: false, pro: false, enterprise: true },
      { name: "3D warehouse mapping", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Security & Alerts",
    features: [
      { name: "SSL encryption", starter: true, pro: true, enterprise: true },
      { name: "Custom alerts & email notifications", starter: false, pro: true, enterprise: true },
      { name: "SSO & RBAC", starter: false, pro: false, enterprise: true },
      { name: "24/7 monitoring", starter: false, pro: false, enterprise: true },
      { name: "Custom API access", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Email support", starter: true, pro: true, enterprise: true },
      { name: "Priority support", starter: false, pro: true, enterprise: true },
      { name: "Dedicated account manager", starter: false, pro: false, enterprise: true },
      { name: "Custom integrations", starter: false, pro: false, enterprise: true },
    ],
  },
];

function ComparisonTable() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const renderCell = (value: boolean | string) => {
    if (typeof value === "string") {
      return (
        <span className="text-[clamp(12px,1vw,14px)] font-medium text-white/70">
          {value}
        </span>
      );
    }
    return value ? (
      <div className="w-[clamp(16px,1.5vw,20px)] h-[clamp(16px,1.5vw,20px)] rounded-full bg-sage/15 flex items-center justify-center mx-auto">
        <Check className="w-[10px] h-[10px] text-sage" strokeWidth={2.5} />
      </div>
    ) : (
      <span className="text-[clamp(12px,1vw,14px)] text-white/15">
        —
      </span>
    );
  };

  return (
    <section className="relative py-[8%] overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-[5.2%]">
        <SectionHeading
          tag="Compare Plans"
          title="Feature"
          highlight="Comparison"
          subtitle="See exactly what's included in each plan."
        />

        {/* Desktop table */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="hidden md:block"
        >
          <div className="rounded-2xl border overflow-hidden border-white/[0.06] bg-white/[0.02] backdrop-blur-[24px] saturate-[1.4]">
            {/* Header */}
            <div className="grid grid-cols-4 bg-white/[0.03]">
              <div className="p-[clamp(12px,1.5vw,20px)]">
                <span className="text-[clamp(12px,1vw,14px)] font-semibold text-white/50">
                  Features
                </span>
              </div>
              {["Starter", "Professional", "Enterprise"].map((t) => (
                <div key={t} className="p-[clamp(12px,1.5vw,20px)] text-center">
                  <span className="text-[clamp(12px,1.1vw,14px)] font-bold text-white">
                    {t}
                  </span>
                </div>
              ))}
            </div>

            {/* Rows */}
            {comparisonFeatures.map((cat) => (
              <div key={cat.category}>
                <div className="px-[clamp(16px,2vw,20px)] py-[clamp(8px,1vw,12px)] bg-electric/[0.04]">
                  <span className="text-[clamp(10px,0.85vw,12px)] font-bold uppercase tracking-widest text-electric">
                    {cat.category}
                  </span>
                </div>
                {cat.features.map((f, idx) => (
                  <div
                    key={f.name}
                    className={`grid grid-cols-4 ${idx < cat.features.length - 1
                      ? "border-b border-white/[0.04]"
                      : ""
                      }`}
                  >
                    <div className="p-[clamp(12px,1.5vw,16px)] pl-[clamp(16px,2vw,20px)] flex items-center">
                      <span className="text-[clamp(12px,1vw,14px)] text-white/60">
                        {f.name}
                      </span>
                    </div>
                    <div className="p-[clamp(12px,1.5vw,16px)] text-center flex items-center justify-center">
                      {renderCell(f.starter)}
                    </div>
                    <div className="p-[clamp(12px,1.5vw,16px)] text-center flex items-center justify-center">
                      {renderCell(f.pro)}
                    </div>
                    <div className="p-[clamp(12px,1.5vw,16px)] text-center flex items-center justify-center">
                      {renderCell(f.enterprise)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile accordions */}
        <div className="md:hidden space-y-[clamp(12px,1.5vw,16px)] mt-[clamp(24px,3vw,32px)]">
          {comparisonFeatures.map((cat) => (
            <MobileComparisonAccordion key={cat.category} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileComparisonAccordion({
  category,
}: {
  category: (typeof comparisonFeatures)[number];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border overflow-hidden border-white/[0.06] bg-white/[0.02] backdrop-blur-[24px] saturate-[1.4]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-[clamp(16px,2vw,20px)] py-[clamp(12px,1.5vw,16px)] text-left cursor-pointer hover:bg-white/[0.03]"
      >
        <span className="text-[clamp(14px,1.2vw,16px)] font-bold text-white">
          {category.category}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-[clamp(16px,2vw,20px)] pb-[clamp(12px,1.5vw,16px)] space-y-[clamp(8px,1vw,12px)]">
              {category.features.map((f) => (
                <div
                  key={f.name}
                  className="text-[clamp(12px,1vw,14px)] text-white/55"
                >
                  <p className="font-medium mb-1">{f.name}</p>
                  <div className="flex flex-wrap gap-[clamp(8px,1vw,16px)] text-[clamp(10px,0.8vw,12px)]">
                    <span>
                      Starter:{" "}
                      {typeof f.starter === "string"
                        ? f.starter
                        : f.starter
                          ? "✓"
                          : "—"}
                    </span>
                    <span>
                      Pro:{" "}
                      {typeof f.pro === "string"
                        ? f.pro
                        : f.pro
                          ? "✓"
                          : "—"}
                    </span>
                    <span>
                      Enterprise:{" "}
                      {typeof f.enterprise === "string"
                        ? f.enterprise
                        : f.enterprise
                          ? "✓"
                          : "—"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FAQ SECTION
   ═══════════════════════════════════════════════════════════ */
const faqs = [
  {
    q: "How does value-based pricing work?",
    a: "Our model is designed for a true partnership. We calculate the measurable value created through waste reduction, increased inventory accuracy, and labor optimization. You pay a percentage (typically 20%–40%) of that created value.",
  },
  {
    q: "What is the typical monthly cost?",
    a: "While it depends on the scale of operations and value generated, our partners typically see an average cost of approximately $1,500 per month per location.",
  },
  {
    q: "Is there an upfront cost?",
    a: "Yes, there is a one-time installation fee to cover edge hardware setup and system integration. However, your first month of service is completely free to ensure you're seeing value from day one.",
  },
  {
    q: "How do you calculate 'Value Created'?",
    a: "We use a transparent methodology that compares baseline performance with Veratori-optimized metrics. This includes the direct cost of food waste prevented, reduced labor hours in inventory counting, and decreased carrying costs.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. Our partnership is built on delivering continuous value. If you're not satisfied, you can cancel your engagement. We aim to prove our worth every single month.",
  },
];

function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-[8%] overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-[5.2%]">
        <SectionHeading
          tag="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          tagColor="text-sage"
        />
        <div ref={ref} className="space-y-[clamp(12px,1.5vw,16px)]">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <FAQItem faq={faq} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border overflow-hidden transition-colors duration-300 border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-[24px] saturate-[1.4]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-[clamp(16px,2vw,24px)] py-[clamp(16px,2vw,20px)] text-left cursor-pointer"
      >
        <span className="text-[clamp(14px,1.2vw,16px)] font-semibold pr-4 text-white">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-[1.2em] h-[1.2em] text-white/30" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-[clamp(16px,2vw,24px)] pb-[clamp(16px,2vw,20px)] text-[clamp(12px,1vw,14px)] leading-relaxed text-white/50">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="relative py-[8%] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(400px,50vw,600px)] h-[clamp(200px,25vw,300px)] rounded-full bg-electric/[0.06] blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-[5.2%]"
      >
        <div className="rounded-3xl border p-[clamp(24px,4vw,64px)] text-center border-white/[0.06] bg-white/[0.02] backdrop-blur-[24px] saturate-[1.4] shadow-2xl">
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-bold tracking-tight mb-[clamp(16px,2vw,20px)] text-white">
            Ready to optimize your{" "}
            <span className="bg-gradient-to-r from-electric to-sage bg-clip-text text-transparent">
              inventory?
            </span>
          </h2>
          <p className="text-[clamp(14px,1.2vw,18px)] mb-[clamp(32px,4vw,40px)] leading-relaxed max-w-xl mx-auto text-white/50">
            Join hundreds of businesses using Veratori to reduce waste, cut
            costs, and run smarter operations. Select the perfect plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-[clamp(12px,1.5vw,16px)] justify-center">
            <Link href="#plans">
              <motion.span
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-[clamp(6px,0.8vw,8px)] px-[clamp(24px,3vw,40px)] py-[clamp(12px,1.5vw,16px)] bg-electric text-white font-semibold rounded-xl glow-electric glow-electric-hover transition-all duration-300 cursor-pointer text-[clamp(14px,1vw,16px)]"
              >
                Choose a Plan
                <ArrowRight className="w-[1em] h-[1em]" />
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-[clamp(24px,3vw,40px)] py-[clamp(12px,1.5vw,16px)] border border-sage/30 text-sage rounded-xl font-semibold hover:bg-sage/[0.08] transition-all duration-300 cursor-pointer text-[clamp(14px,1vw,16px)]"
              >
                Get Started
              </motion.span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE ASSEMBLY
   ═══════════════════════════════════════════════════════════ */
export default function PricingPage() {
  return (
    <div className="relative bg-black text-white min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <PricingCards />
      <ComparisonTable />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
