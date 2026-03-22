"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  speed?: number;          // seconds for one full loop
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
  /** Tailwind gap between items (e.g. gap-8 md:gap-14) */
  gapClassName?: string;
}

export default function InfiniteMarquee({
  children,
  speed = 30,
  direction = "left",
  className = "",
  pauseOnHover = true,
  gapClassName = "gap-8 md:gap-12",
}: Props) {
  const style = {
    "--duration": `${speed}s`,
    animationDirection: direction === "right" ? "reverse" : "normal",
  } as React.CSSProperties;

  const row = `flex shrink-0 items-center ${gapClassName}`;

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max animate-marquee ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={style}
      >
        <div className={row}>{children}</div>
        <div className={row}>{children}</div>
      </div>
    </div>
  );
}
