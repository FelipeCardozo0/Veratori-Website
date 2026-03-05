"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

/* ═══════════════════════════════════════════════════════════
   HERO PARTICLES — Lightweight Framer Motion floating dots
   Only rendered inside the hero section for performance
   ═══════════════════════════════════════════════════════════ */
function AboutHero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.05]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* ── Background Engine ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg, scale, opacity }}>
        <Image
          src="/images/assets/about-hero.png"
          alt="Abstract global impact visualization"
          fill
          className="object-cover opacity-50 contrast-[1.1] saturate-[1.1]"
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
          animate={{ x: [0, 40, 0], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-electric/20 blur-[130px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -40, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-sage/10 blur-[150px] rounded-full"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-[5.2%] text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Tagline Pill */}
          <div className="relative inline-block mb-[clamp(24px,3vw,32px)]">
            <span className="text-[clamp(10px,0.8vw,14px)] font-bold text-sage uppercase tracking-[0.4em] bg-white/5 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10 shadow-2xl">
              Our Visionary Impact
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(44px,7vw,110px)] font-bold tracking-tighter leading-[0.9] text-white">
            Pioneering the{" "}
            <span className="bg-gradient-to-r from-electric via-sage to-white bg-clip-text text-transparent">
              Zero-Waste Era.
            </span>
          </h1>

          {/* Glass Card for Subtext + Stats */}
          <div className="mt-[clamp(40px,5vw,60px)] inline-block p-1 rounded-[34px] bg-gradient-to-b from-white/10 to-transparent">
            <div className="px-[clamp(32px,4vw,56px)] py-[clamp(24px,3vw,40px)] rounded-[32px] bg-black/40 backdrop-blur-[60px] border border-white/5 max-w-3xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <p className="text-[clamp(16px,1.4vw,22px)] leading-relaxed text-white/60 text-balance font-medium mb-[clamp(40px,5vw,56px)]">
                We're on a mission to eliminate food waste through cutting-edge technology,
                ethical practices, and precision-driven operations that empower businesses worldwide.
              </p>

              {/* Stats Preview Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8 mt-4">
                {[
                  { value: "500+", label: "Enterprise Clients" },
                  { value: "30+", label: "Countries" },
                  { value: "3.2M", label: "Pounds Saved" },
                ].map((stat, i) => (
                  <div key={i} className="text-center group/stat">
                    <div className="text-[clamp(24px,2.5vw,32px)] font-bold mb-1 text-white group-hover/stat:text-sage transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-[clamp(10px,0.8vw,12px)] font-bold uppercase tracking-widest text-white/30 group-hover/stat:text-white/50 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Continuity Gradient at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════
   TIMELINE — Electric Blue dot accent markers, polished
   ═══════════════════════════════════════════════════════════ */
const timeline = [
  {
    year: "Early 2025",
    title: "Neural Initialization",
    desc: "YOLO & Precision Labels: Establishing the product foundation with high-fidelity training data and custom YOLO architectures for near-perfect object recognition.",
    color: "bg-sage",
  },
  {
    year: "Late 2025",
    title: "The Edge Frontier",
    desc: "NVIDIA Jetson Orin & Embedded AI: Moving the training process to the edge, enabling our hardware to process millisecond-latency AI decisions without external reliance.",
    color: "bg-electric",
  },
  {
    year: "Early 2026",
    title: "Self-Verifying Scale",
    desc: "LiDAR & Model Auto-Supervision: Integrating 3D spatial mapping into the product while deploying self-correcting AI loops that automate the training of new vision models.",
    color: "bg-sky",
  },
  {
    year: "2026+",
    title: "The Technological Zenith",
    desc: "NVIDIA AGX Thor & Supersonic Weight Cells: Scaling the product to autonomous-grade compute and high-frequency mass sensors for the most demanding global logistics.",
    color: "bg-sage",
  },
];

function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-[8%] overflow-hidden">
      <div className="absolute inset-0 bg-[#080b13]" />
      <div className="relative z-10 max-w-5xl mx-auto px-[5.2%]">
        <SectionHeading
          tag="Our Journey"
          title="From Idea to"
          highlight="Global Impact"
          tagColor="text-sage"
        />
        <div ref={ref} className="relative mt-[clamp(24px,3vw,32px)]">
          {/* Vertical spine */}
          <div className="absolute left-[22px] sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10" />

          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start gap-[clamp(16px,2vw,24px)] mb-[clamp(40px,5vw,56px)] ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} flex-row`}
            >
              {/* Dot with pulse ring */}
              <div className="absolute left-[18px] sm:left-1/2 sm:-translate-x-1/2 top-1 z-10">
                <div className={`w-3.5 h-3.5 rounded-full ${t.color} ring-[5px] ring-[#080b13]`} />
                {/* Subtle outer glow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: [0, 0.4, 0], scale: [0.5, 1.8, 2] } : {}}
                  transition={{ delay: i * 0.15 + 0.5, duration: 1.2, ease: "easeOut" }}
                  className={`absolute inset-0 rounded-full ${t.color} blur-sm`}
                />
              </div>

              {/* Content */}
              <div className={`ml-[clamp(40px,5vw,48px)] sm:ml-0 ${i % 2 === 0 ? "sm:w-1/2 sm:pr-[clamp(32px,4vw,48px)] sm:text-right" : "sm:w-1/2 sm:pl-[clamp(32px,4vw,48px)]"}`}>
                <span className={`text-[clamp(12px,1vw,14px)] font-bold ${t.color.replace("bg-", "text-")}`}>
                  {t.year}
                </span>
                <h3 className="text-[clamp(18px,2vw,24px)] font-bold mt-1 mb-[clamp(8px,1vw,12px)] text-white">
                  {t.title}
                </h3>
                <p className="text-[clamp(14px,1.2vw,16px)] leading-relaxed text-white/50">
                  {t.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   VALUES CARDS — Palette-colored with refined hover reveals
   ═══════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════
   TEAM GRID — Professional team showcase with modern design
   ═══════════════════════════════════════════════════════════ */
const team = [
  {
    name: "Justin Chavez-Meneses",
    role: "CEO | BBA Finance & Accounting",
    university: "Emory University",
    img: "/images/team/justin-meneses.jpeg",
    accent: "electric",
  },
  {
    name: "Felipe Cardozo",
    role: "CTO | BS CS, Mathematics, & Finance",
    university: "Emory University",
    img: "/images/team/Felipe-Cardozo.jpeg",
    accent: "sage",
  },
  {
    name: "Eduardo Lapa",
    role: "Software Developer | BS Economics",
    university: "Fundação Getulio Vargas",
    img: "/images/team/Eduardo_Lapa.png",
    accent: "sky",
  },
  {
    name: "Leonardo Affonso",
    role: "Sr. Hardware Developer | BEng Electrical Engineering",
    university: "Federal University of Rio de Janeiro",
    img: "/images/team/LeonardoAffonso.png",
    accent: "electric",
  },
  {
    name: "Daniel Gambacorta",
    role: "Software Developer | BEng Mechanical Engineering",
    university: "Texas A&M",
    img: "/images/team/daniel-gambacorta.png",
    accent: "sage",
  },
  {
    name: "Milad Khezrefaridi",
    role: "Hardware Developer | BEng Mechanical Engineering",
    university: "UT Austin",
    img: "/images/team/milad-khezrefaridi.png",
    accent: "sky",
  },
];

function TeamGrid() {
  const accentMap: Record<string, { bg: string; text: string; border: string; hoverBorder: string; dot: string }> = {
    electric: { bg: "bg-electric/10", text: "text-electric", border: "border-electric/30", hoverBorder: "hover:border-electric/50", dot: "bg-electric" },
    sage: { bg: "bg-sage/10", text: "text-sage", border: "border-sage/30", hoverBorder: "hover:border-sage/50", dot: "bg-sage" },
    sky: { bg: "bg-sky/10", text: "text-sky", border: "border-sky/30", hoverBorder: "hover:border-sky/50", dot: "bg-sky" },
  };

  return (
    <section className="relative py-[10%] overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="relative z-10 max-w-7xl mx-auto px-[5.2%]">
        <SectionHeading
          tag="Leadership"
          title="Meet the Team"
          highlight="Building Veratori"
          subtitle="A diverse team of innovators dedicated to eliminating food waste through technology."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(24px,3vw,32px)] mt-[clamp(32px,4vw,48px)]">
          {team.map((m, i) => {
            const accent = accentMap[m.accent];
            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden border-2 transition-all duration-500 bg-white/[0.03] hover:bg-white/[0.05] ${accent.border} ${accent.hoverBorder} backdrop-blur-[24px] saturate-[1.4]`}
              >
                <div className="relative h-[clamp(300px,35vw,360px)] overflow-hidden">
                  {m.img ? (
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width:640px)100vw,25vw"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`w-full h-full ${accent.bg} flex items-center justify-center`}>
                      <div className="text-center">
                        <div className={`w-[clamp(80px,8vw,96px)] h-[clamp(80px,8vw,96px)] rounded-full ${accent.bg} ${accent.border} border-2 flex items-center justify-center mx-auto mb-4`}>
                          <span className={`text-[clamp(32px,3vw,36px)] font-bold ${accent.text}`}>
                            {m.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <p className="text-[clamp(12px,1vw,14px)] font-medium text-white/40">
                          Photo coming soon
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  {/* Accent indicator */}
                  <div className={`absolute top-[clamp(12px,1.5vw,16px)] right-[clamp(12px,1.5vw,16px)] w-3 h-3 rounded-full ${accent.dot} opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_12px_rgba(255,255,255,0.2)]`} />
                </div>
                <div className="p-[clamp(20px,2vw,24px)] bg-gradient-to-b from-transparent to-current/5 relative z-10">
                  <h3 className="text-[clamp(18px,1.8vw,20px)] font-bold mb-2 text-white">
                    {m.name}
                  </h3>
                  <p className={`text-[clamp(12px,1vw,14px)] font-semibold ${accent.text}`}>
                    {m.role}
                  </p>
                  <p className="text-[clamp(11px,0.9vw,13px)] text-white/50 mt-1 leading-tight">
                    {m.university}
                  </p>
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
   PAGE ASSEMBLY — Full-page diagonal gradient + grain
   ═══════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <div className="relative bg-black text-white">
      <AboutHero />
      <Timeline />
      <TeamGrid />
    </div>
  );
}
