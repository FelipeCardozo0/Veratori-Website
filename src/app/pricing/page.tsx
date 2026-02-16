"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
import { useTheme } from "@/components/ThemeProvider";
import SectionHeading from "@/components/SectionHeading";


/* ═══════════════════════════════════════════════════════════
   PRICING DATA
   ═══════════════════════════════════════════════════════════ */
const tiers = [
  {
    name: "Starter",
    yearly: 470,
    description:
      "Perfect for small businesses starting their inventory optimization journey.",
    features: [
      { text: "Basic inventory tracking", Icon: Package },
      { text: "Waste alerts & notifications", Icon: Bell },
      { text: "Up to 2 locations", Icon: Gauge },
      { text: "Standard reporting dashboard", Icon: BarChart3 },
      { text: "Email support", Icon: Headphones },
    ],
    accent: "electric",
    popular: false,
  },
  {
    name: "Professional",
    yearly: 950,
    description:
      "For growing teams that need edge AI detection, multi-location oversight, and deeper integrations.",
    features: [
      { text: "AI demand forecasting", Icon: BrainCircuit },
      { text: "Multi-location aggregation", Icon: Building2 },
      { text: "Freshness & expiration tracking", Icon: Clock },
      { text: "Automated sales detection", Icon: TrendingUp },
      { text: "Up to 10 locations", Icon: Gauge },
      { text: "Advanced analytics & insights", Icon: BarChart3 },
      { text: "Multi-user collaboration", Icon: Users },
      { text: "Priority support", Icon: Headphones },
    ],
    accent: "sage",
    popular: true,
  },
  {
    name: "Enterprise",
    yearly: 2870,
    description:
      "Full-scale edge deployment with dedicated support, 24/7 monitoring, and custom API access.",
    features: [
      { text: "24/7 security monitoring", Icon: Shield },
      { text: "Multi-location aggregation", Icon: Building2 },
      { text: "Freshness & expiration tracking", Icon: Clock },
      { text: "Automated sales detection", Icon: TrendingUp },
      { text: "Custom alerts & email notifications", Icon: Mail },
      { text: "Custom API access", Icon: Code2 },
      { text: "Unlimited locations", Icon: Gauge },
      { text: "Dedicated account manager", Icon: Headphones },
      { text: "SSO & role-based access", Icon: Lock },
      { text: "Custom integrations", Icon: Database },
      { text: "Real-time 3D warehouse mapping", Icon: Zap },
    ],
    accent: "electric",
    popular: false,
  },
];

/* ═══════════════════════════════════════════════════════════
   PRICING HERO
   ═══════════════════════════════════════════════════════════ */
function PricingHero() {
  const { isDark } = useTheme();

  return (
    <section className="relative pt-36 sm:pt-44 pb-8 overflow-hidden">
      {/* Ambient blurs */}
      <div className="absolute top-16 right-[-6rem] w-[420px] h-[420px] rounded-full bg-electric/[0.04] blur-[120px]" />
      <div className="absolute bottom-0 left-[-4rem] w-[350px] h-[350px] rounded-full bg-sage/[0.04] blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-semibold text-sage uppercase tracking-[0.2em] mb-5"
        >
          Pricing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.08] ${
            isDark ? "text-white" : "text-midnight"
          }`}
        >
          Choose Your{" "}
          <span className="bg-gradient-to-r from-electric to-sage bg-clip-text text-transparent">
            Veratori Plan
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
            isDark ? "text-white/55" : "text-midnight/55"
          }`}
        >
          Yearly billing for ethical inventory management
          tailored to your business size.
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PRICING CARDS
   ═══════════════════════════════════════════════════════════ */
function PricingCards() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-12 sm:py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {tiers.map((tier, i) => {
            const accentColor =
              tier.accent === "sage" ? "sage" : "electric";

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`pricing-card-glow relative rounded-2xl border overflow-hidden ${
                  tier.popular
                    ? isDark
                      ? "border-sage/30 bg-white/[0.04]"
                      : "border-sage/30 bg-white shadow-xl"
                    : isDark
                    ? "border-white/[0.06] bg-white/[0.02]"
                    : "border-midnight/[0.06] bg-white shadow-md"
                } transition-all duration-300`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-sage to-sage-light text-white text-center text-xs font-bold uppercase tracking-widest py-2">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${tier.popular ? "pt-12" : ""}`}>
                  {/* Title */}
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      isDark ? "text-white" : "text-midnight"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 leading-relaxed ${
                      isDark ? "text-white/45" : "text-midnight/45"
                    }`}
                  >
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-5xl font-bold tracking-tight ${
                          isDark ? "text-white" : "text-midnight"
                        }`}
                      >
                        ${tier.yearly}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          isDark ? "text-white/40" : "text-midnight/40"
                        }`}
                      >
                        /yr
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            accentColor === "sage"
                              ? "bg-sage/15 text-sage"
                              : "bg-electric/15 text-electric"
                          }`}
                        >
                          <Check className="w-3 h-3" strokeWidth={2.5} />
                        </div>
                        <span
                          className={`text-sm leading-snug ${
                            isDark ? "text-white/65" : "text-midnight/65"
                          }`}
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/contact">
                    <motion.span
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                        tier.popular
                          ? "bg-sage text-white glow-sage glow-sage-hover"
                          : "bg-electric text-white glow-electric glow-electric-hover"
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
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
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const renderCell = (value: boolean | string) => {
    if (typeof value === "string") {
      return (
        <span
          className={`text-sm font-medium ${
            isDark ? "text-white/70" : "text-midnight/70"
          }`}
        >
          {value}
        </span>
      );
    }
    return value ? (
      <div className="w-5 h-5 rounded-full bg-sage/15 flex items-center justify-center mx-auto">
        <Check className="w-3 h-3 text-sage" strokeWidth={2.5} />
      </div>
    ) : (
      <span
        className={`text-sm ${isDark ? "text-white/15" : "text-midnight/15"}`}
      >
        —
      </span>
    );
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div
            className={`rounded-2xl border overflow-hidden ${
              isDark
                ? "border-white/[0.06] bg-white/[0.02]"
                : "border-midnight/[0.06] bg-white shadow-lg"
            }`}
          >
            {/* Header */}
            <div
              className={`grid grid-cols-4 ${
                isDark ? "bg-white/[0.03]" : "bg-mist"
              }`}
            >
              <div className="p-5">
                <span
                  className={`text-sm font-semibold ${
                    isDark ? "text-white/50" : "text-midnight/50"
                  }`}
                >
                  Features
                </span>
              </div>
              {["Starter", "Professional", "Enterprise"].map((t) => (
                <div key={t} className="p-5 text-center">
                  <span
                    className={`text-sm font-bold ${
                      isDark ? "text-white" : "text-midnight"
                    }`}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>

            {/* Rows */}
            {comparisonFeatures.map((cat) => (
              <div key={cat.category}>
                <div
                  className={`px-5 py-3 ${
                    isDark ? "bg-electric/[0.04]" : "bg-electric/[0.03]"
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-electric">
                    {cat.category}
                  </span>
                </div>
                {cat.features.map((f, idx) => (
                  <div
                    key={f.name}
                    className={`grid grid-cols-4 ${
                      idx < cat.features.length - 1
                        ? isDark
                          ? "border-b border-white/[0.04]"
                          : "border-b border-midnight/[0.04]"
                        : ""
                    }`}
                  >
                    <div className="p-4 pl-5">
                      <span
                        className={`text-sm ${
                          isDark ? "text-white/60" : "text-midnight/60"
                        }`}
                      >
                        {f.name}
                      </span>
                    </div>
                    <div className="p-4 text-center">
                      {renderCell(f.starter)}
                    </div>
                    <div className="p-4 text-center">
                      {renderCell(f.pro)}
                    </div>
                    <div className="p-4 text-center">
                      {renderCell(f.enterprise)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile accordions */}
        <div className="md:hidden space-y-4">
          {comparisonFeatures.map((cat) => (
            <MobileComparisonAccordion key={cat.category} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Mobile comparison accordion item ─── */
function MobileComparisonAccordion({
  category,
}: {
  category: (typeof comparisonFeatures)[number];
}) {
  const { isDark } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-xl border overflow-hidden ${
        isDark
          ? "border-white/[0.06] bg-white/[0.02]"
          : "border-midnight/[0.06] bg-white"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer ${
          isDark ? "hover:bg-white/[0.03]" : "hover:bg-mist/50"
        }`}
      >
        <span
          className={`text-sm font-bold ${
            isDark ? "text-white" : "text-midnight"
          }`}
        >
          {category.category}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown
            className={`w-4 h-4 ${
              isDark ? "text-white/40" : "text-midnight/40"
            }`}
          />
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
            <div className="px-5 pb-4 space-y-3">
              {category.features.map((f) => (
                <div
                  key={f.name}
                  className={`text-sm ${
                    isDark ? "text-white/55" : "text-midnight/55"
                  }`}
                >
                  <p className="font-medium mb-1">{f.name}</p>
                  <div className="flex gap-4 text-xs">
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
    q: "How does yearly billing work?",
    a: "Yearly billing is billed as a single annual payment. All plans are available on a yearly basis, giving you the best value for your inventory management needs.",
  },
  {
    q: "Can I switch plans at any time?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. Downgrades take effect at the start of the next cycle.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes! Every plan comes with a 14-day free trial so you can explore all features risk-free. No credit card required to get started.",
  },
  {
    q: "What happens if I exceed my location limit?",
    a: "You'll receive a notification suggesting an upgrade. We won't interrupt your service — we'll work with you to find the right plan as your business grows.",
  },
  {
    q: "Do you offer custom enterprise pricing?",
    a: "Yes. For businesses with unique requirements, our Enterprise plan is fully customizable. Contact our sales team to discuss tailored pricing, dedicated infrastructure, and custom integrations.",
  },
];

function FAQSection() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          tagColor="text-sage"
        />
        <div ref={ref} className="space-y-3">
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
  const { isDark } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-xl border overflow-hidden transition-colors duration-300 ${
        isDark
          ? "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
          : "border-midnight/[0.06] bg-white hover:bg-mist/30"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
      >
        <span
          className={`text-sm sm:text-base font-semibold pr-4 ${
            isDark ? "text-white" : "text-midnight"
          }`}
        >
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown
            className={`w-5 h-5 ${
              isDark ? "text-white/30" : "text-midnight/30"
            }`}
          />
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
            <div
              className={`px-6 pb-5 text-sm leading-relaxed ${
                isDark ? "text-white/50" : "text-midnight/50"
              }`}
            >
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
  const { isDark } = useTheme();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-electric/[0.06] blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6"
      >
        <div
          className={`rounded-3xl border p-10 sm:p-16 text-center ${
            isDark
              ? "border-white/[0.06] bg-white/[0.02]"
              : "border-midnight/[0.06] bg-white shadow-xl"
          }`}
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 ${
              isDark ? "text-white" : "text-midnight"
            }`}
          >
            Ready to optimize your{" "}
            <span className="bg-gradient-to-r from-electric to-sage bg-clip-text text-transparent">
              inventory?
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg mb-10 leading-relaxed max-w-xl mx-auto ${
              isDark ? "text-white/50" : "text-midnight/50"
            }`}
          >
            Join hundreds of businesses using Veratori to reduce waste, cut
            costs, and run smarter operations. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-10 py-4 bg-electric text-white font-semibold rounded-xl glow-electric glow-electric-hover transition-all duration-300 cursor-pointer text-base"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-10 py-4 border border-sage/30 text-sage rounded-xl font-semibold hover:bg-sage/[0.08] transition-all duration-300 cursor-pointer text-base"
              >
                Talk to Sales
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
  const { isDark } = useTheme();

  return (
    <div
      className={`relative ${
        isDark ? "pricing-bg-dark" : "pricing-bg-light"
      } pricing-grid-pattern`}
    >
      <PricingHero />
      <PricingCards />
      <ComparisonTable />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
