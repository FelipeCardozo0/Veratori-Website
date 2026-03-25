"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ui/ThemeProvider";
import { MapPin } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Overview", href: "/product" },
    { label: "How It Works", href: "/product#how-it-works" },
    { label: "Key Capabilities", href: "/product#capabilities" },
    { label: "Pricing", href: "/pricing" },
  ],
  About: [
    { label: "Our Story", href: "/about" },
    { label: "The Team", href: "/about#team" },
    { label: "Scale & Expansion", href: "/about#scale" },
  ],
  Impact: [
    { label: "Our Mission", href: "/mission" },
    { label: "Operating Principles", href: "/mission#principles" },
    { label: "Research", href: "/mission#research" },
  ],
  Pricing: [
    { label: "Plans", href: "/pricing" },
    { label: "Order Beta Access", href: "/pricing#order" },
    { label: "FAQ", href: "/pricing#faq" },
  ],
  Company: [
    { label: "Contact", href: "/contact" },
    { label: "Legal Rights", href: "/legal" },
  ],
};

const socialIcons = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/veratori/",
    path: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/veratori_inc/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/veratori",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

const locations = [
  { city: "New York City", state: "NY", hq: false },
  { city: "Atlanta", state: "GA", hq: false },
  { city: "Austin", state: "TX", hq: true },
];

export default function Footer() {
  const { isDark } = useTheme();
  return (
    <footer className="relative border-t bg-midnight border-white/6 text-white">
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-12 pt-16 pb-12">

        <div className="flex flex-col md:flex-row justify-between gap-12 mb-[clamp(48px,5vw,64px)]">
          {/* Brand */}
          <motion.div
            className="max-w-xs"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center mb-8">
              <Image
                src="/images/Logos/Brand Identity/Logos/Logo_name_white_nobg.png"
                alt="Veratori Logo"
                width={200}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-[clamp(14px,1vw,16px)] leading-relaxed text-white/60 mb-6">
              Veratori automates inventory management for food service operators using on-device computer vision.
            </p>
            <p className="text-base font-medium text-white/50">
              <a href="mailto:veratori@veratori.com" className="hover:text-white transition-colors">veratori@veratori.com</a>
            </p>
            <div className="flex gap-4 mt-6 mb-6">
              {socialIcons.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-white/5 hover:bg-white/10 text-white/50 hover:text-white"
                  aria-label={s.label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
                </motion.a>
              ))}
            </div>
            {/* Locations below social icons */}
            <div className="flex flex-col gap-2">
              {locations.map((loc) => (
                <div key={loc.city} className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sage shrink-0" />
                  <span className="text-sm text-white/50">
                    {loc.city}, {loc.state}
                    {loc.hq && <span className="ml-1.5 text-xs font-semibold text-sage bg-sage/10 px-1.5 py-0.5 rounded">HQ</span>}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-10 md:mr-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="font-bold text-[clamp(14px,1vw,16px)] mb-6 text-white">{heading}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[clamp(13px,0.9vw,15px)] font-medium transition-colors text-white/50 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="border-t pt-8 border-white/[0.06]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <div className="flex justify-center sm:justify-start items-center">
            <p className="text-[clamp(12px,0.9vw,14px)] text-white/40">&copy; {new Date().getFullYear()} Veratori Inc. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
