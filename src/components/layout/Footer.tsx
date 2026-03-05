"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ui/ThemeProvider";

const footerLinks = {
  Product: [
    { label: "Features", href: "/product" },
    { label: "Live Demo", href: "/product#demo" },
    { label: "3D Warehouse", href: "/product#3d" },
    { label: "Dashboard", href: "/product" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/mission" },
    { label: "Pricing", href: "/pricing" },
    { label: "Team", href: "/about" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Support", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

const socialIcons = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/veratori/",
    path: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
  },
];

export default function Footer() {
  const { isDark } = useTheme();
  return (
    <footer className={`relative border-t transition-colors duration-500 ${isDark ? "bg-[#151D3B] border-white/[0.06]" : "bg-[#F3F5F7] border-black/[0.06]"}`}>
      <div className="max-w-7xl mx-auto px-[5.2%] py-[6%]">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-[clamp(32px,4vw,48px)] mb-[clamp(48px,5vw,64px)]">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/Logos/Brand Identity/Logos/Logo_name_dark_nobg.png"
                alt="Veratori Logo"
                width={160}
                height={40}
                className={`h-8 sm:h-10 w-auto object-contain transition-all duration-300 ${isDark ? "brightness-0 invert" : ""}`}
              />
            </Link>
            <p className={`text-[clamp(14px,1vw,16px)] leading-relaxed max-w-xs ${isDark ? "text-white/50" : "text-black/50"}`}>
              Ethical inventory management software reducing food waste and optimizing operations for a sustainable future.
            </p>
            <div className="flex gap-[clamp(12px,1.5vw,16px)] mt-[clamp(24px,3vw,32px)]">
              {socialIcons.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-[clamp(36px,2.5vw,44px)] h-[clamp(36px,2.5vw,44px)] rounded-lg flex items-center justify-center transition-colors ${isDark ? "bg-white/5 hover:bg-white/10 text-white/50 hover:text-white" : "bg-black/5 hover:bg-black/10 text-black/50 hover:text-black"}`}
                  aria-label={s.label}
                >
                  <svg className="w-[clamp(16px,1.2vw,20px)] h-[clamp(16px,1.2vw,20px)]" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className={`font-semibold text-[clamp(14px,1vw,16px)] mb-[clamp(16px,2vw,24px)] ${isDark ? "text-white" : "text-black"}`}>{heading}</h4>
              <ul className="space-y-[clamp(10px,1vw,14px)]">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={`text-[clamp(14px,1vw,16px)] transition-colors ${isDark ? "text-white/50 hover:text-white" : "text-black/50 hover:text-black"}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`border-t pt-[clamp(32px,3vw,40px)] ${isDark ? "border-white/[0.06]" : "border-black/[0.06]"}`}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-[clamp(16px,2vw,24px)]">
            <p className={`text-[clamp(12px,0.9vw,14px)] ${isDark ? "text-white/40" : "text-black/40"}`}>&copy; {new Date().getFullYear()} Veratori. All rights reserved.</p>
            <p className={`text-[clamp(12px,0.9vw,14px)] ${isDark ? "text-white/40" : "text-black/40"}`}>Built with purpose. Designed for impact.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
