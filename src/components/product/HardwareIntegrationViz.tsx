"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ui/ThemeProvider";

export default function HardwareIntegrationViz() {
  const { isDark } = useTheme();
  const strokeActive = isDark ? "#7dd87a" : "var(--color-sage, #5B974F)";
  const strokeMuted = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)";

  return (
    <div className="relative h-full min-h-[420px] w-full p-4 md:p-6">
      <svg
        viewBox="0 0 480 520"
        className="h-full w-full max-h-[min(100%,520px)] mx-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={strokeActive} stopOpacity="0.3" />
            <stop offset="50%" stopColor={strokeActive} stopOpacity="0.9" />
            <stop offset="100%" stopColor={strokeActive} stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Fridge outline */}
        <rect x="80" y="20" width="320" height="240" rx="8" fill="none" stroke={strokeMuted} strokeWidth="2" strokeDasharray="4,4" opacity="0.4" />
        <text x="90" y="40" fill={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"} style={{ fontSize: 10, fontWeight: "bold" }}>REFRIGERATED CABINET</text>

        {/* Top-rear cameras */}
        <g>
          <circle cx="160" cy="50" r="6" fill={strokeActive} opacity="0.6" />
          <circle cx="320" cy="50" r="6" fill={strokeActive} opacity="0.6" />
          <line x1="160" y1="58" x2="160" y2="75" stroke={strokeMuted} strokeWidth="1" opacity="0.5" />
          <line x1="320" y1="58" x2="320" y2="75" stroke={strokeMuted} strokeWidth="1" opacity="0.5" />
          <text x="155" y="88" fill={isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)"} style={{ fontSize: 9 }}>RGB Camera</text>
          <text x="310" y="88" fill={isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)"} style={{ fontSize: 9 }}>RGB Camera</text>
          <text x="160" y="105" fill={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"} style={{ fontSize: 8, textAnchor: "middle" }}>Heated lens</text>
          <text x="320" y="105" fill={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"} style={{ fontSize: 8, textAnchor: "middle" }}>Heated lens</text>
        </g>

        {/* PIR Motion sensor */}
        <g>
          <line x1="100" y1="250" x2="380" y2="250" stroke={strokeActive} strokeWidth="3" opacity="0.7" />
          <text x="240" y="270" fill={isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)"} style={{ fontSize: 9, textAnchor: "middle" }}>PIR Motion Sensor (120 FOV)</text>
          <text x="240" y="282" fill={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"} style={{ fontSize: 8, textAnchor: "middle" }}>Crowd detection • Auto-resume trigger</text>
        </g>

        {/* Jetson Edge */}
        <g>
          <rect x="170" y="130" width="140" height="80" rx="6" fill={isDark ? "rgba(91,151,79,0.1)" : "rgba(91,151,79,0.08)"} stroke={strokeActive} strokeWidth="1.5" opacity="0.8" />
          <text x="240" y="155" fill="#7dd87a" style={{ fontSize: 12, textAnchor: "middle", letterSpacing: "0.1em", fontWeight: "bold", fontFamily: "monospace" }}>JETSON EDGE</text>
          <text x="240" y="172" fill={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"} style={{ fontSize: 9, textAnchor: "middle" }}>Inference Engine</text>
          <text x="240" y="185" fill={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"} style={{ fontSize: 8, textAnchor: "middle" }}>Adaptive Mode: Baseline</text>
          <text x="240" y="196" fill={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"} style={{ fontSize: 8, textAnchor: "middle" }}>Event-Triggered • Crowd-Batch</text>
        </g>

        {/* Connections */}
        <path d="M 160 60 L 160 100 L 200 130" stroke={strokeMuted} strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M 320 60 L 320 100 L 280 130" stroke={strokeMuted} strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M 240 250 L 240 210" stroke={strokeMuted} strokeWidth="1.5" fill="none" opacity="0.6" />

        {/* Bottom modules */}
        <g>
          <circle cx="120" cy="360" r="24" fill={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)"} stroke={strokeMuted} strokeWidth="1.5" />
          <motion.circle cx="120" cy="360" r="6" fill={strokeActive} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
          <text x="120" y="415" fill={isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)"} style={{ fontSize: 10, textAnchor: "middle", fontWeight: "bold" }}>Power Supply</text>
          <text x="120" y="428" fill={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"} style={{ fontSize: 8, textAnchor: "middle" }}>24V DC</text>
        </g>

        <g>
          <circle cx="240" cy="360" r="24" fill={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)"} stroke={strokeMuted} strokeWidth="1.5" />
          <motion.circle cx="240" cy="360" r="6" fill={strokeActive} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: 0.4, repeat: Infinity }} />
          <text x="240" y="415" fill={isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)"} style={{ fontSize: 10, textAnchor: "middle", fontWeight: "bold" }}>Connectivity</text>
          <text x="240" y="428" fill={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"} style={{ fontSize: 8, textAnchor: "middle" }}>WiFi 6E / LTE</text>
        </g>

        <g>
          <circle cx="360" cy="360" r="24" fill={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)"} stroke={strokeMuted} strokeWidth="1.5" />
          <motion.circle cx="360" cy="360" r="6" fill={strokeActive} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: 0.8, repeat: Infinity }} />
          <text x="360" y="415" fill={isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)"} style={{ fontSize: 10, textAnchor: "middle", fontWeight: "bold" }}>Local Storage</text>
          <text x="360" y="428" fill={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"} style={{ fontSize: 8, textAnchor: "middle" }}>Calibration Data</text>
        </g>

        {/* Module connections */}
        <line x1="240" y1="210" x2="120" y2="336" stroke={strokeMuted} strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
        <line x1="240" y1="210" x2="240" y2="336" stroke={strokeMuted} strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
        <line x1="240" y1="210" x2="360" y2="336" stroke={strokeMuted} strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />

        {/* Key specs */}
        <g>
          <rect x="60" y="465" width="360" height="45" rx="4" fill={isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)"} stroke={strokeMuted} strokeWidth="1" opacity="0.5" />
          <text x="240" y="482" fill="#7dd87a" style={{ fontSize: 9, textAnchor: "middle", fontWeight: "bold", letterSpacing: "0.05em", fontFamily: "monospace" }}>ADAPTIVE VISION ARCHITECTURE</text>
          <text x="240" y="500" fill={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"} style={{ fontSize: 8, textAnchor: "middle" }}>Location-calibrated thresholds • 15-min auto-resume • Real-time crowd detection</text>
        </g>
      </svg>

      <p className={`mt-3 text-center text-[10px] font-mono uppercase tracking-[0.2em] ${isDark ? "text-white/40" : "text-black/40"}`}>
        Thermal-resilient • Adaptive inference • Multi-sensor fusion
      </p>
    </div>
  );
}
