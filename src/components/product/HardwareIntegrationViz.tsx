"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ui/ThemeProvider";

/** SVG coordinates (viewBox 0 0 400 400) — chassis + four modules + connection paths */
const VB = 400;
const CX = 200;
const CY = 200;
const CH = 72; // half chassis size (center ±)
const chassis = { x: CX - CH, y: CY - CH, w: CH * 2, h: CH * 2, r: 14 };

const modules = [
  { id: "lidar", label: "ToF LiDAR", x: CX, y: 52, edge: { x: CX, y: CY - CH } as const },
  { id: "rgb", label: "4K RGB", x: 348, y: CY, edge: { x: CX + CH, y: CY } as const },
  { id: "uplink", label: "WiFi / LTE", x: CX, y: 348, edge: { x: CX, y: CY + CH } as const },
  { id: "power", label: "Power", x: 52, y: CY, edge: { x: CX - CH, y: CY } as const },
] as const;

/** Straight bus line from module to chassis edge (schematic). */
function pathLine(ax: number, ay: number, bx: number, by: number) {
  return `M ${ax} ${ay} L ${bx} ${by}`;
}

export default function HardwareIntegrationViz() {
  const { isDark } = useTheme();
  const strokeMuted = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const strokeActive = isDark ? "#7dd87a" : "var(--color-sage, #5B974F)";
  const fillMod = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)";
  const fillModRing = isDark ? "rgba(91,151,79,0.25)" : "rgba(91,151,79,0.15)";

  return (
    <div className="relative h-full min-h-[280px] w-full p-4 md:p-6">
      <svg
        viewBox={`0 0 ${VB} ${VB}`}
        className="h-full w-full max-h-[min(100%,420px)] mx-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <filter id="hw-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="hw-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={strokeActive} stopOpacity="0.35" />
            <stop offset="50%" stopColor={strokeActive} stopOpacity="1" />
            <stop offset="100%" stopColor={strokeActive} stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Connection paths: faint track + traveling pulse */}
        {modules.map((m, i) => {
          const d = pathLine(m.x, m.y, m.edge.x, m.edge.y);
          const delay = i * 1.1;
          return (
            <g key={m.id}>
              <path
                d={d}
                stroke={strokeMuted}
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d={d}
                stroke="url(#hw-line)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                pathLength={1}
                strokeDasharray="0.12 0.88"
                filter="url(#hw-glow)"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="1"
                  dur="5s"
                  repeatCount="indefinite"
                  begin={`${delay}s`}
                />
              </path>
            </g>
          );
        })}

        {/* Outer chassis */}
        <motion.rect
          x={chassis.x}
          y={chassis.y}
          width={chassis.w}
          height={chassis.h}
          rx={chassis.r}
          fill={isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.85)"}
          stroke={isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.08)"}
          strokeWidth="2"
          initial={{ opacity: 0.85 }}
          animate={{ opacity: [0.88, 1, 0.88] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Inner “compute” block */}
        <rect
          x={CX - 44}
          y={CY - 28}
          width={88}
          height={56}
          rx={8}
          fill={isDark ? "rgba(91,151,79,0.12)" : "rgba(91,151,79,0.1)"}
          stroke={isDark ? "rgba(91,151,79,0.35)" : "rgba(91,151,79,0.3)"}
          strokeWidth="1"
        />
        <text
          x={CX}
          y={CY - 2}
          textAnchor="middle"
          fill="currentColor"
          className="text-sage font-mono font-bold"
          style={{ fontSize: 11, letterSpacing: "0.18em" }}
        >
          JETSON
        </text>
        <text
          x={CX}
          y={CY + 14}
          textAnchor="middle"
          fill="currentColor"
          className={isDark ? "text-white/45" : "text-black/45"}
          style={{ fontSize: 9 }}
        >
          EDGE
        </text>

        {/* Module nodes */}
        {modules.map((m, i) => (
          <g key={m.id}>
            <circle
              cx={m.x}
              cy={m.y}
              r="26"
              fill={fillMod}
              stroke={fillModRing}
              strokeWidth="1.5"
            />
            <motion.circle
              cx={m.x}
              cy={m.y}
              r="8"
              fill={strokeActive}
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: i * 0.45,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}

        {/* Labels */}
        {modules.map((m) => (
          <text
            key={`${m.id}-label`}
            x={m.x}
            y={m.y + 42}
            textAnchor="middle"
            fill="currentColor"
            className={isDark ? "text-white/55" : "text-black/55"}
            style={{ fontSize: 9 }}
          >
            {m.label}
          </text>
        ))}
      </svg>

      <p
        className={`mt-2 text-center text-[10px] font-mono uppercase tracking-[0.25em] md:text-xs ${
          isDark ? "text-white/35" : "text-black/40"
        }`}
      >
        Modular integration · live signal paths
      </p>
    </div>
  );
}
