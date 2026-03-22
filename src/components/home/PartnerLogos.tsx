"use client";

import Image from "next/image";
import { useTheme } from "@/components/ui/ThemeProvider";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";

/** Paths match files in `public/images/clients` (spaces URL-encoded for reliable loading). */
const clients = [
  { name: "Crack Rice", logo: "/images/clients/crack-rice-nobg.png" },
  { name: "Sakura of Japan", logo: "/images/clients/sakura-japan-nobg.png" },
  { name: "Black Burger", logo: "/images/clients/black-burger-nobg.png" },
  { name: "Los Tacos Hermanos", logo: "/images/clients/los-tacos-hermanos-nobg.png" },
  { name: "Poke Bowl", logo: "/images/clients/poke-bowl-nobg.png" },
  { name: "Hatchery", logo: "/images/clients/Hatchery%20no%20BG.png" },
  { name: "Goizueta Business School", logo: "/images/clients/Goizueta%20no%20BG.png" },
  { name: "Tacos Barios", logo: "/images/clients/Tacos%20Barios-nobg.png" },
] as const;

function LogoSlide({
  name,
  logo,
  isDark,
}: {
  name: string;
  logo: string;
  isDark: boolean;
}) {
  return (
    <div
      className={[
        "group relative flex h-[72px] w-[200px] shrink-0 items-center justify-center md:h-[96px] md:w-[260px]",
        "transition-[filter,opacity,transform] duration-300 ease-out",
        "hover:scale-[1.03]",
        /* Idle: muted; hover: full color — same idea in light & dark (no invert: it hides many PNGs in dark mode). */
        isDark
          ? "opacity-[0.55] grayscale-[0.35] hover:opacity-100 hover:grayscale-0 hover:brightness-110"
          : "opacity-[0.5] grayscale hover:opacity-100 hover:grayscale-0",
      ].join(" ")}
    >
      <Image
        src={logo}
        alt=""
        fill
        sizes="(max-width: 768px) 200px, 260px"
        className="object-contain object-center"
      />
      <span className="sr-only">{name}</span>
    </div>
  );
}

export default function PartnerLogos() {
  const { isDark } = useTheme();

  return (
    <div
      className="w-full min-w-0"
      role="region"
      aria-label="Partner logos"
    >
      <InfiniteMarquee speed={42} pauseOnHover gapClassName="gap-10 md:gap-16" className="py-2">
        {clients.map((client) => (
          <LogoSlide
            key={client.name}
            name={client.name}
            logo={client.logo}
            isDark={isDark}
          />
        ))}
      </InfiniteMarquee>
    </div>
  );
}
