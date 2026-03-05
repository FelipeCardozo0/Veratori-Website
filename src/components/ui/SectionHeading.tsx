"use client";

import { motion } from "framer-motion";

interface Props {
  tag: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  tagColor?: string;
}

export default function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  tagColor = "text-electric",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14 sm:mb-18"
    >
      <span
        className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] ${tagColor}`}
      >
        {tag}
      </span>
      <h2
        className={`mt-[2%] text-[clamp(28px,4vw,60px)] font-bold tracking-tight leading-tight text-white`}
      >
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-electric to-sage bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-[2.5%] text-[clamp(14px,1.2vw,20px)] max-w-[60%] mx-auto leading-relaxed text-white/50`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
