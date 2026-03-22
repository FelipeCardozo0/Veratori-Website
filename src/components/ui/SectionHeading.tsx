"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ui/ThemeProvider";

interface Props {
  tag: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  tagColor?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  tagColor = "text-sage",
  align = "center",
}: Props) {
  const { isDark } = useTheme();

  const alignClass = align === "left" ? "text-left" : "text-center";
  const subtitleAlign = align === "left" ? "" : "mx-auto";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-14 sm:mb-16 ${alignClass}`}
    >
      <span
        className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] ${tagColor}`}
      >
        {tag}
      </span>
      <h2
        className={`mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${isDark ? "text-white" : "text-black"}`}
      >
        {title}{" "}
        {highlight && (
          <span className="text-sage">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg max-w-2xl leading-relaxed ${subtitleAlign} ${isDark ? "text-white/50" : "text-black/50"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
