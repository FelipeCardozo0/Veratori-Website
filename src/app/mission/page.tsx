"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  BarChart3,
  ShieldCheck,
  Bell,
  LayoutDashboard,
  Globe,
  ArrowRight,
  Target,
  Recycle,
  FileBarChart,
  Handshake,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";

/* ═══════════════════════════════════════════════════════
   HERO — Clean immersive video, professional text
   ═══════════════════════════════════════════════════════ */
function MissionHero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 180]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.05]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* ── Background Engine ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg, scale, opacity }}>
        <Image
          src="/images/assets/mission-hero.png"
          alt="Abstract mission visualization"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-70" />

        {/* Animated Digital Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
        />
      </motion.div>

      {/* ── Floating Decorative Elements ── */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-electric/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sage/10 blur-[140px] rounded-full"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-[5.2%] text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Tagline */}
          <div className="relative inline-block mb-[clamp(24px,3vw,32px)]">
            <span className="text-[clamp(10px,0.8vw,14px)] font-bold text-sage uppercase tracking-[0.4em] bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
              Operational Ethics
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-[clamp(40px,6vw,96px)] font-bold tracking-tighter leading-[0.95] text-white">
            Beyond Efficiency. <br />
            <span className="bg-gradient-to-r from-electric via-sage to-sky bg-clip-text text-transparent">
              Towards Impact.
            </span>
          </h1>

          {/* Subtext with Glass Backdrop */}
          <div className="mt-[clamp(32px,4vw,48px)] p-[clamp(24px,3vw,40px)] rounded-[32px] bg-white/[0.03] backdrop-blur-[40px] border border-white/[0.08] max-w-3xl mx-auto relative group overflow-hidden">
            {/* Subtle light sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <p className="text-[clamp(16px,1.4vw,22px)] leading-relaxed text-white/50 text-balance">
              We engineer technology that proves <span className="text-white font-medium">precision</span> and <span className="text-sage font-medium">responsibility</span> are not opposing forces — they are the foundation of the modern enterprise.
            </p>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-[-20vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">Scroll to Explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 1 — Core Mission Statement
   ═══════════════════════════════════════════════════════ */
function MissionStatement() {
  return (
    <section className="relative py-[8%] overflow-hidden">
      <div className="absolute inset-0 bg-[#080b13]" />
      <div className="relative z-10 max-w-3xl mx-auto px-[5.2%]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[clamp(10px,0.8vw,14px)] font-semibold text-electric uppercase tracking-[0.2em] mb-[clamp(16px,2vw,20px)]">
            Why We Exist
          </p>
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-bold tracking-tight mb-[clamp(24px,3vw,32px)] text-white">
            A Conviction, Not a Feature
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[clamp(14px,1.2vw,18px)] leading-[1.85] space-y-[clamp(20px,2vw,24px)] text-white/55"
        >
          <p>
            Every year, roughly{" "}
            <span className="text-sage font-semibold">
              1.3 billion tons of food
            </span>{" "}
            are lost or wasted globally — one-third of everything produced for
            human consumption. This waste is not only an economic failure; it is
            an ethical one.
          </p>
          <p>
            Veratori was founded on the belief that inventory management
            technology should be a force for good. Our platform combines{" "}
            <span className="font-semibold text-white/80">
              precision, security, and sustainability
            </span>{" "}
            to give food retail and logistics teams the visibility they need to
            make waste unacceptable — and preventable.
          </p>
          <p>
            We measure success not only in efficiency gains but in the
            measurable reduction of spoilage, the extension of product
            lifecycles, and the communities we help feed instead of landfills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 2 — Impact Stats Grid
   ═══════════════════════════════════════════════════════ */
const impactStats = [
  { value: 40, suffix: "%", label: "Average Waste Reduction" },
  { value: 3.2, suffix: "M", label: "Pounds of Food Saved" },
  { value: 94, suffix: "%", label: "Optimized Space Utilization" },
  { value: 680, suffix: "K", label: "Tons of CO\u2082 Prevented" },
  { value: 500, suffix: "+", label: "Enterprise Clients Worldwide" },
  { value: 99.9, suffix: "%", label: "Platform Uptime SLA" },
];

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 2000;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Number((eased * target).toFixed(target % 1 === 0 ? 0 : 1)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

function ImpactStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-[8%] overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="relative z-10 max-w-6xl mx-auto px-[5.2%]">
        <SectionHeading
          tag="Impact"
          title="Numbers That"
          highlight="Matter"
          tagColor="text-sage"
          subtitle="Real data from real operations — the measurable difference Veratori delivers."
        />
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-[clamp(16px,2vw,24px)] mt-[clamp(32px,4vw,48px)]">
          {impactStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-[clamp(16px,2vw,24px)] rounded-2xl text-center border bg-white/[0.02] border-white/[0.06] backdrop-blur-[24px] saturate-[1.4]"
            >
              <p className="text-sage text-[clamp(28px,3vw,36px)] font-bold">
                <CountUp target={s.value} suffix={s.suffix} inView={inView} />
              </p>
              <p className="mt-2 text-[clamp(12px,1vw,14px)] leading-snug text-white/40">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 3 — How We Achieve It (Staggered Cards)
   ═══════════════════════════════════════════════════════ */
const pillars = [
  {
    title: "Ethical Core",
    desc: "Every algorithm and feature is designed with sustainability as the primary constraint, not an afterthought.",
    Icon: Leaf,
    color: "text-sage",
    bg: "bg-sage/10",
  },
  {
    title: "Real-Time Alerts",
    desc: "High-contrast, visually distinct notifications ensure no expiration date or threshold is ever missed.",
    Icon: Bell,
    color: "text-electric",
    bg: "bg-electric/10",
  },
  {
    title: "Decluttered Interfaces",
    desc: "Clean workflows eliminate noise and cognitive load, letting teams focus entirely on precision operations.",
    Icon: LayoutDashboard,
    color: "text-sky",
    bg: "bg-sky/10",
  },
  {
    title: "Predictive Analytics",
    desc: "Machine learning models forecast demand, spoilage risk, and optimal reorder points before problems arise.",
    Icon: BarChart3,
    color: "text-sage",
    bg: "bg-sage/10",
  },
  {
    title: "Enterprise Security",
    desc: "End-to-end encryption, role-based access, and full GDPR compliance protect your data at every layer.",
    Icon: ShieldCheck,
    color: "text-electric",
    bg: "bg-electric/10",
  },
  {
    title: "Global Scale",
    desc: "Multi-region infrastructure and localized workflows serve 500+ enterprises across 30 countries seamlessly.",
    Icon: Globe,
    color: "text-sky",
    bg: "bg-sky/10",
  },
];

function HowWeAchieveIt() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-[8%] overflow-hidden">
      <div className="absolute inset-0 bg-[#080b13]" />
      <div className="relative z-10 max-w-6xl mx-auto px-[5.2%]">
        <SectionHeading
          tag="Approach"
          title="How We"
          highlight="Achieve It"
          subtitle="Six pillars that define how Veratori turns ethical ambition into operational reality."
        />
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2vw,24px)] mt-[clamp(32px,4vw,48px)]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-[clamp(20px,2vw,24px)] rounded-2xl border transition-all duration-300 hover:translate-y-[-4px] bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:shadow-lg backdrop-blur-[24px] saturate-[1.4]"
            >
              <div className={`w-[clamp(40px,4vw,48px)] h-[clamp(40px,4vw,48px)] rounded-xl flex items-center justify-center mb-[clamp(12px,1.5vw,16px)] ${p.bg} ${p.color}`}>
                <p.Icon className="w-[1.25em] h-[1.25em]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[clamp(16px,1.5vw,18px)] font-bold mb-2 text-white">
                {p.title}
              </h3>
              <p className="text-[clamp(12px,1.1vw,14px)] leading-relaxed text-white/45">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 4 — Sustainability Commitment
   ═══════════════════════════════════════════════════════ */
const commitments = [
  { Icon: Target, label: "Carbon Neutral Operations" },
  { Icon: Recycle, label: "Zero-Waste Supply Chain Goal" },
  { Icon: FileBarChart, label: "Transparent Impact Reporting" },
  { Icon: Handshake, label: "Community Food Bank Partnerships" },
];

function SustainabilityCommitment() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative py-[8%] overflow-hidden">
      <div className="absolute inset-0 bg-[#080b13]" />
      <div className="relative z-10 max-w-7xl mx-auto px-[5.2%] grid grid-cols-1 lg:grid-cols-2 gap-[clamp(32px,4vw,64px)] items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[clamp(10px,0.8vw,14px)] font-semibold text-sage uppercase tracking-[0.2em] mb-[clamp(12px,1.5vw,16px)]">
            Sustainability
          </p>
          <h2 className="text-[clamp(28px,3vw,48px)] font-bold tracking-tight mb-[clamp(16px,2vw,24px)] text-white">
            Responsibility Is{" "}
            <span className="text-sage">Non-Negotiable</span>
          </h2>
          <div className="space-y-[clamp(16px,2vw,24px)] text-[clamp(14px,1.2vw,18px)] leading-[1.85] text-white/55">
            <p>
              Food waste generates{" "}
              <span className="text-electric font-semibold">
                8% of global greenhouse gas emissions
              </span>
              . If it were a country, it would be the third-largest emitter on
              Earth.
            </p>
            <p>
              At Veratori, every line of code is written with one question:{" "}
              <em className="font-medium text-white/75">
                does this help reduce waste?
              </em>{" "}
              Our commitment to sustainability is embedded in our architecture,
              our algorithms, and our culture.
            </p>
          </div>

          <div className="mt-[clamp(24px,3vw,32px)] grid grid-cols-2 gap-[clamp(8px,1vw,12px)]">
            {commitments.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-[clamp(8px,1vw,12px)] p-[clamp(12px,1.5vw,16px)] rounded-xl bg-white/[0.04] backdrop-blur-sm"
              >
                <c.Icon className="w-[1.2em] h-[1.2em] flex-shrink-0 text-sage" strokeWidth={1.8} />
                <span className="text-[clamp(10px,0.85vw,14px)] font-medium text-white/65">
                  {c.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Shocking Impact Metric Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <div className="relative p-[clamp(24px,4vw,48px)] rounded-[32px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-[40px] shadow-2xl overflow-hidden">
            {/* Spectral Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-electric/20 blur-[100px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sage/10 blur-[100px] rounded-full" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-10">
                <span className="text-[clamp(10px,0.8vw,12px)] font-bold text-white/40 uppercase tracking-[0.3em]">
                  Global Carbon Ranking
                </span>
                <span className="flex items-center gap-2 text-[clamp(10px,0.8vw,12px)] font-bold text-sage/80 uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sage"></span>
                  </span>
                  Critical Scale
                </span>
              </div>

              {/* Data Rows */}
              <div className="space-y-8">
                {/* China */}
                <div className="space-y-3">
                  <div className="flex justify-between text-[13px] font-medium">
                    <span className="text-white/60">1. China</span>
                    <span className="text-white/30">10.7B Tons</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      className="h-full bg-white/10"
                    />
                  </div>
                </div>

                {/* USA */}
                <div className="space-y-3">
                  <div className="flex justify-between text-[13px] font-medium">
                    <span className="text-white/60">2. United States</span>
                    <span className="text-white/30">5.1B Tons</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "55%" }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                      className="h-full bg-white/10"
                    />
                  </div>
                </div>

                {/* THE SHOCKER: FOOD WASTE */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-electric/20 to-sage/10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-1 ring-white/10"
                >
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-electric text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">
                        The Invisible Crisis
                      </span>
                      <h3 className="text-white text-[clamp(24px,2.5vw,32px)] font-bold tracking-tighter">
                        3. Food Waste
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-sage text-[clamp(32px,3.5vw,48px)] font-bold leading-none block">
                        3.3B
                      </span>
                      <span className="text-white/40 text-[clamp(10px,0.8vw,12px)] font-bold uppercase tracking-widest mt-1 block">
                        Annual Tons CO₂e
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <p className="mt-8 text-[clamp(11px,1vw,13px)] text-white/30 leading-relaxed italic text-center">
                *If Food Waste were a nation, it would be the third largest greenhouse gas emitter on Earth, driving 8% of anthropogenic warming.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 3.5 — Investment Request
   ═══════════════════════════════════════════════════════ */
const investmentData = [
  { label: "Hardware", percentage: 49 },
  { label: "Business Setup", percentage: 38 },
  { label: "Software Support", percentage: 13 },
];

function InvestmentSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-[8%] overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      {/* Subtle grid pattern background to match the image */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-[5.2%]">
        <SectionHeading
          tag="Expansion"
          title="Fueling Our"
          highlight="Next Phase"
          tagColor="text-electric"
          subtitle="We are currently seeking $16,000 to accelerate our infrastructure and establish local operations."
        />

        <div className="mt-[clamp(40px,5vw,60px)] flex flex-col lg:flex-row items-center justify-between gap-[clamp(40px,6vw,80px)]">
          {/* Left Side: The "Frame" with the amount */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative p-[clamp(40px,5vw,60px)] border-2 border-white/10 rounded-3xl group overflow-hidden"
          >
            {/* Corner Decorative Elements */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-electric rounded-tl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-electric rounded-br-lg" />

            <div className="text-center relative z-10">
              <span className="text-white/40 text-[clamp(14px,1vw,18px)] font-medium mb-4 block uppercase tracking-widest">
                Investment Target
              </span>
              <h3 className="text-[clamp(48px,6vw,88px)] font-bold text-white tracking-tighter flex items-center justify-center">
                <span className="text-electric">≈</span>$16,000
              </h3>
            </div>

            {/* Background blur/gradient */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-electric/10 blur-[60px] rounded-full group-hover:bg-electric/20 transition-colors duration-700" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-sage/10 blur-[60px] rounded-full group-hover:bg-sage/20 transition-colors duration-700" />
          </motion.div>

          {/* Right Side: Breakdown List */}
          <div className="flex-1 w-full max-w-md">
            <h4 className="text-white/60 text-[clamp(14px,1vw,18px)] font-semibold uppercase tracking-widest mb-8 text-center lg:text-left">
              Allocation Breakdown
            </h4>
            <div className="space-y-8">
              {investmentData.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-white text-[clamp(18px,1.5vw,22px)] font-medium">
                      {item.label}
                    </span>
                    <span className="text-electric font-bold text-[clamp(18px,1.5vw,22px)]">
                      ≈{item.percentage}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.percentage}%` } : {}}
                      transition={{ delay: 0.4 + idx * 0.15, duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-electric to-sage"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 text-white/40 text-sm leading-relaxed text-center lg:text-left italic"
            >
              * Estimated allocation based on current market rates and strategic operational requirements for Q3 2026.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   QUOTE CAROUSEL — Minimal, tasteful
   ═══════════════════════════════════════════════════════ */
const quotes = [
  { text: "The greatest threat to our planet is the belief that someone else will save it.", author: "Robert Swan" },
  { text: "Waste is a design flaw.", author: "Kate Krebs" },
  { text: "Sustainability is no longer about doing less harm. It\u2019s about doing more good.", author: "Jochen Zeitz" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
];

function QuoteCarousel() {
  return (
    <section className="relative py-[5%] overflow-hidden">
      <div className="absolute inset-0 bg-[#080b13]" />
      <div className="relative z-10">
        <InfiniteMarquee speed={50}>
          {quotes.map((q, i) => (
            <div key={i} className="flex-shrink-0 mx-[clamp(24px,3vw,40px)] max-w-sm">
              <blockquote className="text-[clamp(16px,1.4vw,18px)] italic leading-relaxed text-white/40">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <p className="text-[clamp(12px,1vw,14px)] font-medium mt-[clamp(8px,1vw,12px)] text-white/30">
                — {q.author}
              </p>
            </div>
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="relative py-[8%] overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(300px,40vw,500px)] h-[clamp(300px,40vw,500px)] rounded-full bg-sage/[0.06] blur-[120px]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto px-[5.2%] text-center"
      >
        <h2 className="text-[clamp(28px,3.5vw,48px)] font-bold tracking-tight mb-[clamp(16px,2vw,24px)] text-white">
          Join the Movement for{" "}
          <span className="bg-gradient-to-r from-electric to-sage bg-clip-text text-transparent">
            Zero Waste
          </span>
        </h2>
        <p className="text-[clamp(14px,1.2vw,18px)] mb-[clamp(32px,4vw,40px)] leading-relaxed text-white/50">
          Every business that joins Veratori makes the global food system more
          efficient and more ethical.
        </p>
        <div className="flex flex-col sm:flex-row gap-[clamp(12px,1.5vw,16px)] justify-center">
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-[clamp(6px,0.8vw,8px)] px-[clamp(24px,3vw,32px)] py-[clamp(12px,1.5vw,16px)] bg-electric text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_24px_rgba(38,64,206,0.2)] hover:shadow-[0_0_32px_rgba(38,64,206,0.4)] cursor-pointer text-[clamp(14px,1vw,16px)]"
            >
              Get Started
              <ArrowRight className="w-[1em] h-[1em]" />
            </motion.span>
          </Link>
          <Link href="/product">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-[clamp(24px,3vw,32px)] py-[clamp(12px,1.5vw,16px)] border border-white/10 bg-white/5 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer backdrop-blur-[24px] saturate-[1.4] text-[clamp(14px,1vw,16px)]"
            >
              Explore the Platform
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE ASSEMBLY
   ═══════════════════════════════════════════════════════ */
export default function MissionPage() {
  return (
    <div className="relative bg-black text-white min-h-screen">
      <MissionHero />
      <MissionStatement />
      <ImpactStats />
      <HowWeAchieveIt />
      <SustainabilityCommitment />
      <InvestmentSection />
      <QuoteCarousel />
      <FinalCTA />
    </div>
  );
}
