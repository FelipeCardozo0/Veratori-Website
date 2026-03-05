"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, BrainCircuit, ShieldAlert, ScanLine, Zap, Camera, Cpu, Database, AlertCircle, Monitor, Building2, Clock, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";

const ObjectDetection = dynamic(() => import("@/components/features/ObjectDetection"), { ssr: false });

/* ═══════════════════════════════════════════════════════
   PRODUCT HERO — Professional, wide breathing room
   ═══════════════════════════════════════════════════════ */
const screenshots = [
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", alt: "Analytics dashboard" },
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", alt: "Inventory overview" },
  { src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", alt: "Real-time monitoring" },
  { src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80", alt: "Warehouse view" },
  { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", alt: "Logistics tracking" },
  { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", alt: "Security panel" },
];

function ProductHero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* ── Background Engine ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg, scale, opacity }}>
        <Image
          src="/images/assets/product-hero.png"
          alt="Abstract computer vision visualization"
          fill
          className="object-cover opacity-40 contrast-[1.1] saturate-[1.3]"
          priority
          sizes="100vw"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
      </motion.div>

      {/* ── Floating Glows ── */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-electric/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -30, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sage/10 blur-[150px] rounded-full"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-[5.2%] pt-[10%]">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Tagline Pill */}
            <div className="relative inline-block mb-[clamp(24px,3vw,32px)]">
              <span className="text-[clamp(10px,0.8vw,14px)] font-bold text-electric uppercase tracking-[0.4em] bg-white/5 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10 shadow-2xl">
                Computer Vision V2.0
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[clamp(44px,7vw,110px)] font-bold tracking-tighter leading-[0.9] text-white">
              The Platform That <br />
              <span className="bg-gradient-to-r from-electric via-sage to-white bg-clip-text text-transparent">
                Sees Everything.
              </span>
            </h1>

            {/* Subtext glass card */}
            <div className="mt-[clamp(40px,5vw,60px)] inline-block p-1 rounded-[34px] bg-gradient-to-b from-white/10 to-transparent">
              <div className="px-[clamp(32px,4vw,56px)] py-[clamp(24px,3vw,40px)] rounded-[32px] bg-black/40 backdrop-blur-[60px] border border-white/5 max-w-3xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <p className="text-[clamp(16px,1.4vw,22px)] leading-relaxed text-white/60 text-balance font-medium mb-[clamp(32px,4vw,48px)]">
                  Real-time inventory intelligence that prevents waste and maximizes
                  efficiency — built for operations teams who demand precision.
                </p>

                {/* CTAs inside the glass card for a modern 'portal' look */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <motion.span
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-electric text-white font-bold rounded-2xl shadow-[0_0_30px_rgba(38,64,206,0.4)] flex items-center justify-center gap-3 transition-all cursor-pointer"
                    >
                      Request a Demo <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </Link>
                  <Link href="/mission">
                    <motion.span
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
                    >
                      Our Mission
                    </motion.span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Infinite screenshot carousel - Refined styling */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="mt-[clamp(80px,10vw,140px)] pb-[60px]"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

            <InfiniteMarquee speed={25}>
              {screenshots.map((s, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[clamp(300px,28vw,450px)] h-[clamp(200px,18vw,300px)] mx-4 rounded-3xl overflow-hidden border border-white/[0.1] bg-white/[0.03] group relative"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className="object-cover transition-all duration-700"
                    sizes="450px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-lg font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {s.alt}
                    </span>
                  </div>
                </div>
              ))}
            </InfiniteMarquee>
          </div>
        </motion.div>
      </div>

      {/* Continuity Gradient at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}




function CountUpNum({ target, inView, suffix = "%" }: { target: number; inView: boolean; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1800;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span>{val}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════
   ADVANCED INTELLIGENCE — Predictive, Security, LiDAR
   ═══════════════════════════════════════════════════════ */
const intelligenceCards = [
  {
    title: "AI Predictive Analytics",
    desc: "Leverage automated sales detection and historical trends to forecast demand with precision. AI-driven insights reduce overstock, minimize waste, and optimize ordering based on validated sales patterns and seasonality.",
    Icon: BrainCircuit,
    accent: "sage" as const,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
  },
  {
    title: "24/7 AI-Powered Security",
    desc: "Continuous monitoring with anomaly detection for operational security. Real-time alerts notify you of unusual patterns, ensuring warehouse integrity and preventing losses through automated surveillance.",
    Icon: ShieldAlert,
    accent: "electric" as const,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&q=80",
  },
  {
    title: "LiDAR Integration",
    desc: "Optional 3D spatial mapping for enhanced volume measurement and space optimization. Advanced scanning capabilities provide additional precision for complex warehouse layouts.",
    Icon: ScanLine,
    accent: "sky" as const,
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
  },
];

const intelligenceStats = [
  { value: 40, suffix: "%", label: "Waste Reduction" },
  { value: 95, suffix: "%+", label: "Forecast Accuracy" },
  { value: 3, suffix: "x", label: "Faster Scanning" },
  { value: 24, suffix: "/7", label: "Security Coverage" },
];

function AdvancedIntelligence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <section className="relative py-[10%] overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-electric/[0.03] blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-[5.2%]">
        <SectionHeading
          tag="Advanced Intelligence"
          title="Predictive Insights &"
          highlight="Spatial Precision"
          subtitle="AI forecasting, real-time security monitoring, and LiDAR-powered 3D mapping — integrated into one platform."
        />

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(24px,3vw,40px)] mt-[clamp(24px,3vw,40px)]">
          {intelligenceCards.map((c, i) => {
            const accentMap = {
              sage: { bg: "bg-sage/10", text: "text-sage", bar: "bg-sage" },
              electric: { bg: "bg-electric/10", text: "text-electric", bar: "bg-electric" },
              sky: { bg: "bg-sky/10", text: "text-sky", bar: "bg-sky" },
            };
            const a = accentMap[c.accent];
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.12] bg-white/5 backdrop-blur-[24px] saturate-[1.4] transition-all duration-300 hover:bg-white/10 card-tilt"
              >
                {/* Specular highlight */}
                <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-white/5 blur-[20px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />

                <div className="relative h-48 overflow-hidden z-10">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width:1024px)100vw,33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>
                <div className="p-[clamp(16px,2vw,32px)] relative z-10">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-[clamp(12px,1.5vw,20px)] ${a.bg} ${a.text}`}>
                    <c.Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[clamp(16px,1.5vw,22px)] font-bold mb-[clamp(8px,1vw,12px)] text-white">
                    {c.title}
                  </h3>
                  <p className="text-[clamp(12px,1.1vw,16px)] leading-relaxed text-white/50">
                    {c.desc}
                  </p>
                </div>
                <div className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ${a.bar} z-20`} />
              </motion.article>
            );
          })}
        </div>

        {/* Combined benefits stats bar */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 24 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-[clamp(32px,4vw,60px)] grid grid-cols-2 md:grid-cols-4 gap-[clamp(16px,2vw,32px)] p-[clamp(24px,3vw,40px)] rounded-2xl border border-white/[0.12] bg-white/5 backdrop-blur-[24px] saturate-[1.4]"
        >
          {intelligenceStats.map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="flex items-center justify-center gap-[clamp(4px,0.5vw,8px)] mb-1">
                <Zap
                  className={`w-[clamp(12px,1vw,16px)] h-[clamp(12px,1vw,16px)] ${i % 2 === 0 ? "text-sage" : "text-electric"}`}
                  strokeWidth={2}
                />
                <span className={`text-[clamp(20px,2.5vw,36px)] font-bold ${i % 2 === 0 ? "text-sage" : "text-electric"}`}>
                  <CountUpNum target={s.value} inView={statsInView} suffix={s.suffix} />
                </span>
              </div>
              <p className="text-[clamp(10px,0.8vw,14px)] font-medium text-white/40">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   HOW IT WORKS — Animated flowchart
   ═══════════════════════════════════════════════════════ */
const workflowSteps = [
  {
    title: "Camera Capture",
    desc: "Real-time video feed from edge cameras captures inventory continuously.",
    Icon: Camera,
    color: "electric",
  },
  {
    title: "Real-Time YOLO Detection",
    desc: "NVIDIA Jetson edge devices run YOLO inference at 15-30 FPS, detecting 40+ product classes with GPU-accelerated precision.",
    Icon: Cpu,
    color: "sage",
  },
  {
    title: "Inventory Tracking & Smoothing",
    desc: "Temporal smoothing algorithms ensure accurate counts by filtering detection noise and tracking product movements across snapshots.",
    Icon: TrendingUp,
    color: "electric",
  },
  {
    title: "Persistent Insights & Alerts",
    desc: "SQLite storage with 30-day retention tracks freshness timestamps, expiration monitoring, and automated sales attribution. Low stock and expiration warnings trigger email notifications.",
    Icon: AlertCircle,
    color: "sage",
  },
  {
    title: "Secure Web Dashboard",
    desc: "Centralized dashboard aggregates data across locations, delivering daily manager summaries and actionable insights before full franchise data arrives.",
    Icon: Monitor,
    color: "electric",
  },
];

function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-[10%] overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sage/[0.03] blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-[5.2%]">
        <SectionHeading
          tag="How It Works"
          title="How"
          highlight="Veratori Works"
          subtitle="Edge-based computer vision meets intelligent tracking for real-time inventory accuracy."
        />

        {/* Flowchart cards */}
        <div ref={ref} className="mt-[clamp(40px,5vw,64px)] space-y-[clamp(24px,3vw,32px)]">
          {workflowSteps.map((step, i) => {
            const accentMap = {
              sage: { bg: "bg-sage/10", text: "text-sage", border: "border-sage/20" },
              electric: { bg: "bg-electric/10", text: "text-electric", border: "border-electric/20" },
            };
            const accent = accentMap[step.color as keyof typeof accentMap];

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative rounded-2xl border border-white/[0.12] bg-white/5 backdrop-blur-[24px] saturate-[1.4] p-[clamp(24px,3vw,32px)] transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[clamp(16px,2vw,24px)]">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-[clamp(48px,5vw,64px)] h-[clamp(48px,5vw,64px)] rounded-xl flex items-center justify-center ${accent.bg} ${accent.text} group-hover:scale-110 transition-transform duration-300`}>
                    <step.Icon className="w-[1.25em] h-[1.25em]" strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[clamp(18px,2vw,24px)] font-bold mb-[clamp(8px,1vw,12px)] text-white">
                      {step.title}
                    </h3>
                    <p className="text-[clamp(12px,1.1vw,16px)] leading-relaxed text-white/50">
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow connector (hidden on last) */}
                  {i < workflowSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.15 + 0.3 }}
                      className="hidden sm:flex flex-shrink-0 items-center justify-center w-[clamp(36px,4vw,48px)] h-[clamp(36px,4vw,48px)] rounded-full bg-electric/10"
                    >
                      <ArrowRight className={`w-[1.2em] h-[1.2em] ${accent.text}`} />
                    </motion.div>
                  )}
                </div>
                <div className={`absolute inset-0 rounded-2xl ${accent.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} style={{ boxShadow: `0 0 24px ${step.color === "sage" ? "rgba(95,151,79,0.15)" : "rgba(38,64,206,0.15)"}` }} />
              </motion.div>
            );
          })}
        </div>

        {/* Detailed descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-[clamp(40px,5vw,64px)] grid grid-cols-1 md:grid-cols-2 gap-[clamp(16px,2vw,24px)]"
        >
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-[clamp(20px,2.5vw,24px)]">
            <div className="flex items-center gap-[clamp(8px,1vw,12px)] mb-[clamp(12px,1.5vw,16px)]">
              <div className="w-[clamp(32px,3vw,40px)] h-[clamp(32px,3vw,40px)] rounded-lg bg-electric/10 text-electric flex items-center justify-center">
                <Cpu className="w-[1.2em] h-[1.2em]" />
              </div>
              <h4 className="text-[clamp(16px,1.5vw,18px)] font-bold text-white">
                Edge AI Processing
              </h4>
            </div>
            <p className="text-[clamp(12px,1vw,14px)] leading-relaxed text-white/50">
              Real-time computer vision runs on NVIDIA Jetson edge devices, delivering efficient GPU inference at 15-30 FPS. YOLO detection identifies 40+ product classes with temporal smoothing for accurate counts, eliminating the need for cloud processing delays.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-[clamp(20px,2.5vw,24px)]">
            <div className="flex items-center gap-[clamp(8px,1vw,12px)] mb-[clamp(12px,1.5vw,16px)]">
              <div className="w-[clamp(32px,3vw,40px)] h-[clamp(32px,3vw,40px)] rounded-lg bg-sage/10 text-sage flex items-center justify-center">
                <Clock className="w-[1.2em] h-[1.2em]" />
              </div>
              <h4 className="text-[clamp(16px,1.5vw,18px)] font-bold text-white">
                Freshness & Sales Tracking
              </h4>
            </div>
            <p className="text-[clamp(12px,1vw,14px)] leading-relaxed text-white/50">
              Product freshness tracking uses first-seen timestamps with configurable expiration monitoring. Automatic sales attribution validates decreases across snapshots, while the alert system triggers low stock warnings and expiration notifications via email.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-[clamp(20px,2.5vw,24px)]">
            <div className="flex items-center gap-[clamp(8px,1vw,12px)] mb-[clamp(12px,1.5vw,16px)]">
              <div className="w-[clamp(32px,3vw,40px)] h-[clamp(32px,3vw,40px)] rounded-lg bg-electric/10 text-electric flex items-center justify-center">
                <Database className="w-[1.2em] h-[1.2em]" />
              </div>
              <h4 className="text-[clamp(16px,1.5vw,18px)] font-bold text-white">
                Persistent Storage
              </h4>
            </div>
            <p className="text-[clamp(12px,1vw,14px)] leading-relaxed text-white/50">
              SQLite storage maintains 30-day retention with graceful restart recovery. All inventory data persists locally on edge devices, ensuring continuity even during network interruptions.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-[clamp(20px,2.5vw,24px)]">
            <div className="flex items-center gap-[clamp(8px,1vw,12px)] mb-[clamp(12px,1.5vw,16px)]">
              <div className="w-[clamp(32px,3vw,40px)] h-[clamp(32px,3vw,40px)] rounded-lg bg-sage/10 text-sage flex items-center justify-center">
                <ShieldAlert className="w-[1.2em] h-[1.2em]" />
              </div>
              <h4 className="text-[clamp(16px,1.5vw,18px)] font-bold text-white">
                24/7 Monitoring
              </h4>
            </div>
            <p className="text-[clamp(12px,1vw,14px)] leading-relaxed text-white/50">
              Continuous anomaly detection monitors operational security, alerting teams to unusual patterns or system issues. Automated surveillance ensures warehouse integrity around the clock.
            </p>
          </div>
        </motion.div>

        {/* Multi-Location Intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-[clamp(32px,4vw,48px)] rounded-2xl border bg-gradient-to-br from-electric/[0.08] to-sage/[0.08] border-white/[0.06] p-[clamp(24px,3vw,32px)]"
        >
          <div className="flex flex-col sm:flex-row items-start gap-[clamp(16px,2vw,24px)]">
            <div className="flex-shrink-0 w-[clamp(40px,4vw,48px)] h-[clamp(40px,4vw,48px)] rounded-xl bg-sage/15 text-sage flex items-center justify-center">
              <Building2 className="w-[1.2em] h-[1.2em]" />
            </div>
            <div>
              <h4 className="text-[clamp(18px,2vw,20px)] font-bold mb-[clamp(8px,1vw,12px)] text-white">
                Multi-Location Intelligence
              </h4>
              <p className="text-[clamp(14px,1.2vw,16px)] leading-relaxed text-white/60">
                Daily manager summaries deliver actionable insights before full franchise data arrives. Aggregate inventory, sales trends, and alerts across all locations for centralized oversight. Multi-location aggregation enables franchise-wide visibility with real-time updates from each edge device.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TF.js DETECTION DEMO
   ═══════════════════════════════════════════════════════ */
function DetectionSection() {
  return (
    <section className="relative py-[8%] overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="relative z-10 max-w-5xl mx-auto px-[5.2%]">
        <SectionHeading
          tag="Live Demo"
          title="AI-Powered"
          highlight="Object Detection"
          subtitle="Experience real-time inventory recognition using TensorFlow.js — runs entirely in your browser."
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[clamp(10px,0.8vw,14px)] text-center mb-[clamp(16px,2vw,24px)] text-white/40"
        >
          Live demo simulates our production YOLO system running on edge hardware.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-white/[0.06] bg-white/5 backdrop-blur-[24px] saturate-[1.4]"
        >
          <Suspense
            fallback={
              <div className="h-[450px] flex items-center justify-center">
                <span className="text-white/30">Loading AI model…</span>
              </div>
            }
          >
            <ObjectDetection />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   BEFORE / AFTER SLIDER — Retained, professional
   ═══════════════════════════════════════════════════════ */
function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <section className="relative py-[8%] overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="relative z-10 max-w-5xl mx-auto px-[5.2%]">
        <SectionHeading
          tag="Visual Impact"
          title="Before & After"
          highlight="Veratori"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-video bg-white/5 w-full before-after-slider ring-1 ring-white/10 shadow-2xl flex items-center justify-center"
        >
          <Image
            src="/images/comparisons/cokes_after.png"
            alt="Cokes before YOLO detection"
            fill
            className="object-contain"
            sizes="100vw"
            loading="lazy"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              src="/images/comparisons/cokes_before.jpeg"
              alt="Cokes after YOLO Veratori detection"
              fill
              className="object-contain"
              sizes="100vw"
              loading="lazy"
            />
          </div>
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-electric z-20 shadow-[0_0_12px_rgba(38,64,206,0.5)]"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[clamp(24px,3vw,36px)] h-[clamp(24px,3vw,36px)] rounded-full bg-electric flex items-center justify-center shadow-lg">
              <svg
                className="w-[1.2em] h-[1.2em] text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>
          <span className="absolute top-[clamp(12px,1.5vw,16px)] left-[clamp(12px,1.5vw,16px)] px-[clamp(8px,1vw,12px)] py-1 rounded-full text-[clamp(10px,0.8vw,12px)] font-semibold bg-red-500/80 text-white z-20 backdrop-blur-md">
            Before
          </span>
          <span className="absolute top-[clamp(12px,1.5vw,16px)] right-[clamp(12px,1.5vw,16px)] px-[clamp(8px,1vw,12px)] py-1 rounded-full text-[clamp(10px,0.8vw,12px)] font-semibold bg-sage/80 text-white z-20 backdrop-blur-md">
            After
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-30"
            aria-label="Before and after comparison slider"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE ASSEMBLY
   ═══════════════════════════════════════════════════════ */
export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <AdvancedIntelligence />
      <HowItWorks />
      <DetectionSection />
      <BeforeAfterSlider />
    </>
  );
}
