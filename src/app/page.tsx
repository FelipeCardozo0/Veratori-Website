"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BrainCircuit, ShieldAlert, ScanLine, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import Hero from "@/components/layout/Hero";

/* ═══════════════════ KEY CAPABILITIES ═══════════════════ */
const capabilities = [
  {
    title: "Real-Time Edge AI",
    desc: "Instant inventory accuracy with NVIDIA Jetson-powered YOLO detection running at 15-30 FPS. Edge processing eliminates cloud delays for immediate insights.",
    Icon: BrainCircuit,
    accent: "sage",
    href: "/product",
  },
  {
    title: "Daily Manager Insights",
    desc: "Actionable summaries deliver franchise-wide intelligence before full data arrives. Aggregate inventory, sales trends, and alerts across all locations.",
    Icon: ScanLine,
    accent: "electric",
    href: "/product",
  },
  {
    title: "24/7 Monitoring & Alerts",
    desc: "Continuous anomaly detection with automated alerts for low stock, expiration warnings, and operational security. Email notifications keep teams informed.",
    Icon: ShieldAlert,
    accent: "sky",
    href: "/product",
  },
];

function KeyCapabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const accentMap: Record<string, { text: string; bar: string }> = {
    sage: { text: "text-sage", bar: "bg-sage" },
    electric: { text: "text-electric", bar: "bg-electric" },
    sky: { text: "text-sky", bar: "bg-sky" },
  };

  return (
    <section className="relative py-[8%] overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080b13] to-black z-0 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Capabilities"
          title="Intelligent Tools for"
          highlight="Modern Operations"
          subtitle="Three pillars of technology that set Veratori apart."
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((c, i) => {
            const a = accentMap[c.accent];
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Link href={c.href} className="block group">
                  <div className="relative overflow-hidden rounded-[24px] bg-white/5 backdrop-blur-[24px] saturate-[1.4] border border-white/[0.12] p-[clamp(24px,2.5vw,40px)] transition-all duration-300 card-tilt group-hover:bg-white-[0.08]">
                    {/* Internal Specular Highlight */}
                    <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-white/5 blur-[30px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

                    <div className={`inline-flex flex-col mb-[clamp(16px,2vw,32px)]`}>
                      <c.Icon className={`w-[clamp(28px,2.5vw,40px)] h-[clamp(28px,2.5vw,40px)] mb-4 ${a.text}`} strokeWidth={1.8} />
                      <h3 className="text-[clamp(18px,2vw,28px)] font-bold">{c.title}</h3>
                    </div>

                    <p className="text-[clamp(14px,1vw,18px)] leading-relaxed mb-[clamp(24px,2.5vw,40px)] text-white/60">
                      {c.desc}
                    </p>

                    <span className={`inline-flex items-center gap-[0.5em] text-[clamp(13px,1vw,16px)] font-medium ${a.text} group-hover:gap-[0.8em] transition-all`}>
                      Learn more <ArrowRight className="w-[1.2em] h-[1.2em]" />
                    </span>
                    <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out ${a.bar}`} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ FEATURE TEASER ═══════════════════ */
const teaserFeatures = [
  { title: "Ethical Core", desc: "Sustainability-first practices reducing food waste across every link.", accent: "sage", icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80" },
  { title: "Smart Alerts", desc: "High-contrast real-time notifications for expirations and thresholds.", accent: "electric", icon: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
  { title: "Space Optimization", desc: "AI algorithms maximize storage efficiency and declutter operations.", accent: "sky", icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { title: "Secure & Reliable", desc: "Enterprise-grade encryption and 99.9 % uptime for total peace of mind.", accent: "electric", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" },
];

function FeatureTeaser() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const accentColor: Record<string, string> = { sage: "bg-sage/10 text-sage border-sage/20", electric: "bg-electric/10 text-electric border-electric/20", sky: "bg-sky/10 text-sky border-sky/20" };
  const accentBar: Record<string, string> = { sage: "bg-sage", electric: "bg-electric", sky: "bg-sky" };

  return (
    <section className="relative py-[8%] overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080b13] to-black z-0 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading tag="Features" title="Built for Precision." highlight="Designed for Impact." subtitle="Every feature engineered to reduce waste, optimize operations, and uphold ethical standards." />
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teaserFeatures.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-[24px] overflow-hidden bg-white/5 backdrop-blur-[24px] saturate-[1.4] border border-white/[0.12] transition-all duration-300 card-tilt hover:bg-white/[0.08]"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image src={f.img} alt={f.title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width:640px) 100vw, 25vw" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              <div className="p-[clamp(20px,2vw,32px)]">
                <div className={`inline-flex items-center justify-center w-[clamp(40px,3vw,56px)] h-[clamp(40px,3vw,56px)] rounded-xl mb-[clamp(12px,1.5vw,24px)] ${accentColor[f.accent]}`}>
                  <svg className="w-[1.5em] h-[1.5em] text-[clamp(20px,2vw,28px)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={f.icon} /></svg>
                </div>
                <h3 className="text-[clamp(18px,2vw,24px)] font-bold mb-[clamp(8px,1vw,16px)] text-white">{f.title}</h3>
                <p className="text-[clamp(14px,1vw,16px)] leading-relaxed text-white/50">{f.desc}</p>
              </div>
              <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out ${accentBar[f.accent]}`} />
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-[4%]">
          <Link href="/product">
            <motion.span whileHover={{ scale: 1.05 }} className="inline-block px-[clamp(24px,2.5vw,32px)] py-[clamp(12px,1.2vw,16px)] border border-electric/30 text-electric rounded-xl text-[clamp(14px,1vw,16px)] font-medium hover:bg-electric/10 transition-colors cursor-pointer">
              See All Features →
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ IMPACT STATS ═══════════════════ */
const stats = [
  { value: 40, suffix: "%", label: "Avg Waste Reduction" },
  { value: 3.2, suffix: "M", label: "Pounds of Food Saved" },
  { value: 99.9, suffix: "%", label: "Platform Uptime" },
  { value: 500, suffix: "+", label: "Enterprise Clients" },
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
      setVal(Number((p * target).toFixed(target % 1 === 0 ? 0 : 1)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span className="bg-gradient-to-r from-electric to-sage bg-clip-text text-transparent text-4xl sm:text-5xl font-bold">{val}{suffix}</span>;
}

function ImpactStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section className="relative py-[8%] overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[#080b13] z-0 pointer-events-none" />
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[4%] p-[clamp(24px,3vw,48px)] rounded-[24px] bg-white/5 backdrop-blur-[24px] saturate-[1.4] border border-white/[0.12] transition-all duration-300">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }} className="text-center">
              <CountUp target={s.value} suffix={s.suffix} inView={inView} />
              <p className="mt-[4%] text-[clamp(14px,1vw,16px)] font-medium text-white/40">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════ SCROLLYTELLING ═══════════════════ */
function Scrollytelling() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imgY2 = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section ref={ref} className="relative py-[10%] overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#080b13] z-0 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-[8%] items-center">
        {/* Images */}
        <div className="relative h-[clamp(400px,40vw,600px)]">
          <motion.div style={{ y: imgY1 }} className="absolute top-0 left-0 w-[70%] h-[60%] rounded-[24px] overflow-hidden border border-white/10">
            <Image src="/images/comparisons/before.png" alt="Cluttered warehouse before Veratori" fill className="object-cover" sizes="40vw" loading="lazy" />
            <span className="absolute top-[4%] left-[4%] px-[1.2rem] py-[0.4rem] rounded-full text-[clamp(10px,0.8vw,12px)] font-semibold bg-red-500/90 text-white backdrop-blur-md">Before</span>
          </motion.div>
          <motion.div style={{ y: imgY2 }} className="absolute bottom-0 right-0 w-[70%] h-[60%] rounded-[24px] overflow-hidden border border-white/10">
            <Image src="/images/comparisons/after.png" alt="Organized warehouse after Veratori" fill className="object-cover" sizes="40vw" loading="lazy" />
            <span className="absolute top-[4%] left-[4%] px-[1.2rem] py-[0.4rem] rounded-full text-[clamp(10px,0.8vw,12px)] font-semibold bg-sage/90 text-white backdrop-blur-md">After</span>
          </motion.div>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-[20%] rounded-full bg-electric/20 blur-[40px]" />
        </div>

        {/* Text */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="text-[clamp(12px,1vw,14px)] font-semibold text-sage uppercase tracking-widest">Transformation</span>
          <h2 className="mt-[2%] text-[clamp(32px,3vw,48px)] font-bold tracking-tight text-white leading-tight">
            From Clutter to <span className="bg-gradient-to-r from-electric to-sage bg-clip-text text-transparent">Clarity</span>
          </h2>
          <div className="mt-[6%] space-y-[4%] text-[clamp(16px,1.2vw,20px)] leading-relaxed text-white/60">
            <p>Every year, <span className="text-sage font-semibold">1.3 billion tons of food</span> are wasted globally. Veratori turns disorganized shelves and blind spots into data-driven, optimized operations.</p>
            <p>Our platform provides <span className="text-electric font-semibold">real-time visibility</span> across your entire supply chain, reducing spoilage and maximizing every square foot of storage.</p>
          </div>
          <Link href="/mission" className="inline-block mt-[8%]">
            <motion.span whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-[0.5em] px-[clamp(24px,2.5vw,32px)] py-[clamp(12px,1.2vw,16px)] bg-white/5 backdrop-blur-lg saturate-[1.4] border border-white/20 hover:bg-white/10 text-white rounded-[16px] font-medium transition-all duration-300 cursor-pointer">
              Learn About Our Mission
              <svg className="w-[1.2em] h-[1.2em]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════ MISSION BLURB ═══════════════════ */
function MissionBlurb() {
  return (
    <section className="relative py-[10%] overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-transparent z-0 pointer-events-none border-y border-white/[0.05]" />
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-[clamp(32px,3vw,48px)] font-bold mb-[4%] text-white leading-tight text-balance">
          Our Purpose Goes <span className="bg-gradient-to-r from-electric to-sage bg-clip-text text-transparent">Beyond Profit</span>
        </h2>
        <p className="text-[clamp(16px,1.2vw,20px)] leading-relaxed mb-[8%] text-white/50 text-balance">
          Veratori exists to prove that cutting-edge technology and ethical responsibility can coexist. Every algorithm we build, every alert we send, serves one goal: a world with zero food waste.
        </p>
        <Link href="/mission">
          <motion.span whileHover={{ scale: 1.05 }} className="inline-block px-[clamp(32px,3vw,40px)] py-[clamp(16px,1.5vw,20px)] bg-white/5 backdrop-blur-lg saturate-[1.4] border border-white/20 hover:bg-white/10 text-white font-semibold rounded-[16px] transition-all duration-300 cursor-pointer">
            Discover Our Mission →
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}

/* ═══════════════════ PARTNER LOGOS MARQUEE ═══════════════════ */
const clients = [
  {
    name: "Crack Rice",
    logo: "/images/clients/crack-rice-nobg.png",
    alt: "Crack Rice logo"
  },
  {
    name: "Sakura of Japan",
    logo: "/images/clients/sakura-japan-nobg.png",
    alt: "Sakura of Japan logo"
  },
  {
    name: "Black Burger",
    logo: "/images/clients/black-burger-nobg.png",
    alt: "Black Burger logo"
  },
  {
    name: "Los Tacos Hermanos",
    logo: "/images/clients/los-tacos-hermanos-nobg.png",
    alt: "Los Tacos Hermanos logo"
  },
  {
    name: "Poke Bowl",
    logo: "/images/clients/poke-bowl-nobg.png",
    alt: "Poke Bowl logo"
  },
];

function PartnerLogos() {
  return (
    <section className="relative py-[5%] overflow-hidden bg-[#F3F5F7]">
      <div className="absolute inset-0 bg-white/20 border-y border-black/[0.03]" />
      <div className="relative z-10">
        <p className="text-center text-[clamp(10px,0.8vw,12px)] font-bold uppercase tracking-[0.3em] mb-[clamp(24px,3vw,40px)] px-4 text-black/30">
          Trusted by industry leaders
        </p>
        <div className="overflow-hidden">
          <InfiniteMarquee speed={35} direction="left" pauseOnHover={true}>
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center mx-[clamp(32px,4vw,64px)] h-[clamp(50px,4.5vw,80px)]"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="relative h-full w-auto opacity-40 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={220}
                    height={80}
                    className="object-contain h-full w-auto"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            ))}
          </InfiniteMarquee>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ HOME PAGE ═══════════════════ */
export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <KeyCapabilities />
      <FeatureTeaser />
      <ImpactStats />
      <Scrollytelling />
      <MissionBlurb />
    </>
  );
}
