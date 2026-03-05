"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "About Us", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const { theme, toggleTheme, isDark } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setDrawerOpen(false), [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? isDark
            ? "bg-[#151D3B]/80 backdrop-blur-[24px] saturate-[1.4] border-b border-white/[0.06]"
            : "bg-[#F3F5F7]/80 backdrop-blur-[24px] saturate-[1.4] border-b border-black/[0.06]"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            {/* ── Logo ── */}
            <Link href="/" className="flex items-center" aria-label="Veratori Home">
              <Image
                src="/images/Logos/Brand Identity/Logos/Logo_name_dark_nobg.png"
                alt="Veratori Logo"
                width={160}
                height={40}
                className={`h-8 sm:h-10 w-auto object-contain transition-all duration-300 ${isDark ? "brightness-0 invert" : ""}`}
                priority
              />
            </Link>

            {/* ── Desktop Navigation (center) ── */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-[clamp(12px,0.9vw,14px)] font-medium tracking-wide uppercase transition-colors duration-200 ${active
                      ? "text-electric"
                      : isDark ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black"
                      }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-electric rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── Actions ── */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${isDark ? "text-white/70 hover:text-white hover:bg-white/5" : "text-black/70 hover:text-black hover:bg-black/5"}`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setDrawerOpen(true)}
                className={`md:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${isDark ? "text-white/70 hover:text-white hover:bg-white/5" : "text-black/70 hover:text-black hover:bg-black/5"}`}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Right-Slide Drawer ── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className={`fixed top-0 right-0 bottom-0 z-[70] w-[320px] max-w-[85vw] flex flex-col backdrop-blur-[24px] saturate-[1.4] border-l ${isDark ? "bg-[#151D3B]/80 border-white/[0.06]" : "bg-[#F3F5F7]/80 border-black/[0.06]"}`}
              role="dialog"
              aria-label="Settings drawer"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-[clamp(16px,2vw,24px)] h-16 sm:h-[72px] shrink-0">
                <span className={`text-[clamp(12px,0.9vw,14px)] font-semibold uppercase tracking-widest ${isDark ? "text-white/40" : "text-black/40"}`}>
                  Menu
                </span>
                <div className="flex items-center gap-2">
                  {/* Close button */}
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${isDark ? "text-white/60 hover:text-white hover:bg-white/5" : "text-black/60 hover:text-black hover:bg-black/5"}`}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" strokeWidth={1.8} />
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="mx-[clamp(16px,2vw,24px)] h-px bg-white/[0.06]" />

              {/* Navigation links - visible on all screens */}
              <div className="px-[clamp(12px,1.5vw,16px)] pt-[clamp(16px,2vw,24px)] pb-[clamp(12px,1.5vw,16px)] space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className={`block px-[clamp(16px,2vw,24px)] py-[clamp(12px,1.5vw,16px)] rounded-xl text-[clamp(14px,1vw,16px)] font-medium transition-colors ${pathname === link.href
                        ? "text-electric bg-electric/[0.08]"
                        : isDark ? "text-white/70 hover:text-white hover:bg-white/5" : "text-black/70 hover:text-black hover:bg-black/5"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Footer */}
              <div className="px-[clamp(24px,3vw,32px)] pb-[clamp(24px,3vw,32px)]">
                <p className={`text-[clamp(10px,0.85vw,12px)] ${isDark ? "text-white/30" : "text-black/30"}`}>
                  &copy; {new Date().getFullYear()} Veratori
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
