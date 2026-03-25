"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, X, Eye, EyeOff, ArrowRight, Lock } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";

/* ─── Brand SVG logos (official paths from Simple Icons / brand assets) ─── */
function StripeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-auto" aria-label="Stripe" fill="white">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
    </svg>
  );
}

function PayPalLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-label="PayPal">
      <path d="M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z" />
    </svg>
  );
}

function PhantomLogo() {
  return (
    <svg viewBox="0 0 512 512" className="w-5 h-5" aria-label="Phantom" fill="white">
      <path d="M9 402.313C9 458.146 37.7123 471 67.5731 471C130.74 471 178.211 413.56 206.541 368.171C203.095 378.212 201.181 388.254 201.181 397.895C201.181 424.405 215.729 443.284 244.441 443.284C283.872 443.284 325.984 407.133 347.805 368.171C346.274 373.794 345.508 379.016 345.508 383.836C345.508 402.313 355.462 413.962 375.752 413.962C439.684 413.962 504 295.467 504 191.834C504 111.097 464.951 40 366.947 40C194.673 40 9 260.119 9 402.313ZM307.608 182.997C307.608 162.913 318.327 148.855 334.023 148.855C349.336 148.855 360.056 162.913 360.056 182.997C360.056 203.081 349.336 217.541 334.023 217.541C318.327 217.541 307.608 203.081 307.608 182.997ZM389.534 182.997C389.534 162.913 400.253 148.855 415.949 148.855C431.262 148.855 441.981 162.913 441.981 182.997C441.981 203.081 431.262 217.541 415.949 217.541C400.253 217.541 389.534 203.081 389.534 182.997Z" />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

/* ─── Login Modal ─── */
function LoginModal({ provider, onClose, onSuccess }: { provider: string; onClose: () => void; onSuccess: () => void }) {
  const { isDark } = useTheme();
  const [tab, setTab] = useState<"google" | "email">("google");
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  const providerLabel: Record<string, string> = {
    stripe: "Stripe",
    paypal: "PayPal",
    phantom: "Phantom Wallet",
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1200);
  };

  const handleGoogle = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1400);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className={`relative w-full max-w-md rounded-2xl border shadow-2xl overflow-hidden ${
          isDark ? "bg-[#0B1526] border-white/10" : "bg-white border-black/8"
        }`}
      >
        {/* Header */}
        <div className={`px-6 pt-6 pb-5 border-b ${isDark ? "border-white/8" : "border-black/6"}`}>
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${isDark ? "hover:bg-white/10" : "hover:bg-black/5"}`}
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-4 h-4 text-sage" />
            <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? "text-white/40" : "text-black/40"}`}>
              Secure Checkout
            </span>
          </div>
          <h2 className="text-xl font-bold">Sign in to continue</h2>
          <p className={`text-sm mt-1 ${isDark ? "text-white/45" : "text-black/45"}`}>
            Create or sign in to your account to proceed with{" "}
            <span className="font-semibold">{providerLabel[provider]}</span>.
          </p>
        </div>

        {/* Tab switcher */}
        <div className={`flex gap-1 p-3 border-b ${isDark ? "border-white/8 bg-white/[0.02]" : "border-black/6 bg-black/[0.02]"}`}>
          {(["google", "email"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                tab === t
                  ? "bg-sage text-black shadow-sm"
                  : isDark ? "text-white/40 hover:text-white/70" : "text-black/40 hover:text-black/70"
              }`}
            >
              {t === "google" ? "Google" : "Email & Password"}
            </button>
          ))}
        </div>

        <div className="p-6">
          {tab === "google" ? (
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGoogle}
                disabled={loading}
                className={`w-full flex items-center justify-center gap-3 py-3.5 rounded-xl border font-semibold text-sm transition-all cursor-pointer ${
                  isDark
                    ? "border-white/15 bg-white/5 hover:bg-white/10 text-white"
                    : "border-black/10 bg-white hover:bg-black/[0.02] text-black shadow-sm"
                } disabled:opacity-60`}
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 rounded-full border-2 border-sage border-t-transparent"
                  />
                ) : (
                  <>
                    <GoogleLogo />
                    Continue with Google
                  </>
                )}
              </motion.button>
              <p className={`text-center text-xs ${isDark ? "text-white/30" : "text-black/30"}`}>
                We'll create your Veratori account automatically
              </p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              {/* Sign in / Sign up toggle */}
              <div className={`flex gap-1 p-1 rounded-lg ${isDark ? "bg-white/5" : "bg-black/5"}`}>
                {(["signin", "signup"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      mode === m
                        ? isDark ? "bg-white/15 text-white" : "bg-white text-black shadow-sm"
                        : isDark ? "text-white/40" : "text-black/40"
                    }`}
                  >
                    {m === "signin" ? "Sign In" : "Create Account"}
                  </button>
                ))}
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? "text-white/60" : "text-black/60"}`}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@restaurant.com"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                    isDark
                      ? "bg-white/5 border-white/10 text-white placeholder-white/25 focus:border-sage/60"
                      : "bg-white border-black/10 text-black placeholder-black/30 focus:border-sage/60"
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? "text-white/60" : "text-black/60"}`}>
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className={`w-full px-4 py-2.5 pr-10 rounded-xl border text-sm outline-none transition-all ${
                      isDark
                        ? "bg-white/5 border-white/10 text-white placeholder-white/25 focus:border-sage/60"
                        : "bg-white border-black/10 text-black placeholder-black/30 focus:border-sage/60"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer ${isDark ? "text-white/30 hover:text-white/60" : "text-black/30 hover:text-black/60"}`}
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-sage text-black font-bold text-sm transition-all cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 rounded-full border-2 border-black/40 border-t-transparent"
                  />
                ) : (
                  <>{mode === "signin" ? "Sign In" : "Create Account"} <ArrowRight className="w-4 h-4" /></>
                )}
              </motion.button>
            </form>
          )}

          <p className={`mt-5 text-center text-[10px] leading-relaxed ${isDark ? "text-white/20" : "text-black/20"}`}>
            By continuing, you agree to Veratori's Terms of Service and Privacy Policy.
            <br />
            <span className="text-sage">SSL encrypted · SOC 2 compliant</span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Payment button ─── */
function PayButton({
  onClick,
  bg,
  hoverBg,
  children,
}: {
  onClick: () => void;
  bg: string;
  hoverBg: string;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial="idle"
      whileHover="hovered"
      whileTap={{ scale: 0.98 }}
      variants={{ idle: {}, hovered: {} }}
      className="w-full flex items-center justify-between px-6 py-4 rounded-xl font-semibold text-white shadow-sm cursor-pointer overflow-hidden relative"
      style={{ backgroundColor: bg }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = hoverBg; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = bg; }}
    >
      <span className="flex items-center gap-3 relative z-10">{children}</span>
      <motion.span
        variants={{
          idle: { x: 0, opacity: 0.5 },
          hovered: { x: 4, opacity: 1 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="relative z-10"
      >
        <ArrowRight className="w-4 h-4" />
      </motion.span>
      {/* Hover shimmer */}
      <motion.div
        variants={{
          idle: { opacity: 0, x: "-100%" },
          hovered: { opacity: 1, x: "110%" },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
      />
    </motion.button>
  );
}

/* ─── Main component ─── */
export default function OrderForm() {
  const { isDark } = useTheme();
  const [hardwareCount, setHardwareCount] = useState(1);
  const [loginFor, setLoginFor] = useState<string | null>(null);
  const pricePerUnit = 359;
  const total = hardwareCount * pricePerUnit;

  const handleCheckout = (provider: string) => {
    setLoginFor(provider);
  };

  const handleLoginSuccess = () => {
    const provider = loginFor;
    setLoginFor(null);
    if (provider === "phantom") {
      if (typeof window !== "undefined" && (window as any).solana?.isPhantom) {
        alert("Phantom Wallet detected. Requesting connection... (Integration pending)");
      } else {
        alert("Phantom Wallet not found. Please install the extension.");
      }
    } else if (provider === "stripe") {
      alert("Redirecting to Stripe Checkout... (Integration pending)");
    } else if (provider === "paypal") {
      alert("Redirecting to PayPal... (Integration pending)");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`p-8 md:p-10 rounded-2xl border text-left flex flex-col h-full ${isDark ? "bg-[#0B1526]/50 border-white/10 shadow-lg shadow-white/5" : "bg-mist/50 border-black/5 shadow-2xl shadow-black/5"}`}
      >
        <h3 className="text-3xl font-bold mb-2">Order Beta Access</h3>
        <p className={`text-sm mb-8 ${isDark ? "text-white/50" : "text-black/50"}`}>
          Secure your deployment. Enter the number of hardware units required for your coolers.
        </p>

        {/* Configuration */}
        <div className="mb-8 space-y-6">
          <div className={`p-5 rounded-xl border flex items-center justify-between ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/5"}`}>
            <div>
              <p className="font-bold text-lg">Sensor Units</p>
              <p className={`text-sm ${isDark ? "text-white/40" : "text-black/40"}`}>$359 / mo per hardware</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setHardwareCount(Math.max(1, hardwareCount - 1))}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors cursor-pointer ${isDark ? "border-white/10 hover:bg-white/10" : "border-black/10 hover:bg-black/5"}`}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-bold text-xl">{hardwareCount}</span>
              <button
                onClick={() => setHardwareCount(hardwareCount + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors cursor-pointer ${isDark ? "border-white/10 hover:bg-white/10" : "border-black/10 hover:bg-black/5"}`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-end justify-between px-2">
            <span className={`text-base font-medium ${isDark ? "text-white/60" : "text-black/60"}`}>Monthly Total</span>
            <span className="text-4xl font-black tracking-tight">${total}</span>
          </div>
          <div className={`flex items-center justify-between px-2 pt-1 ${isDark ? "text-white/35" : "text-black/35"}`}>
            <span className="text-sm">+ One-time installation fee</span>
            <span className="text-sm font-semibold">Contact us</span>
          </div>
          <div className={`h-px w-full ${isDark ? "bg-white/10" : "bg-black/10"}`} />
        </div>

        <div className="flex-1" />

        {/* Payment Options */}
        <div className="space-y-3">
          <p className={`text-xs font-bold uppercase tracking-widest text-center mb-4 ${isDark ? "text-white/30" : "text-black/30"}`}>
            Select Payment Method
          </p>

          <PayButton onClick={() => handleCheckout("stripe")} bg="#635BFF" hoverBg="#5247E8">
            <StripeLogo />
            <span>Credit Card (Stripe)</span>
          </PayButton>

          <PayButton onClick={() => handleCheckout("paypal")} bg="#0070BA" hoverBg="#005EA6">
            <PayPalLogo />
            <span>PayPal</span>
          </PayButton>

          <PayButton onClick={() => handleCheckout("phantom")} bg="#AB9FF2" hoverBg="#9B8EE8">
            <PhantomLogo />
            <span>Phantom Wallet (Bitcoin)</span>
          </PayButton>
        </div>

        <p className={`mt-6 text-center text-[10px] uppercase font-bold tracking-widest ${isDark ? "text-white/20" : "text-black/20"}`}>
          SSL Encrypted Secure Checkout
        </p>
      </motion.div>

      {/* Login Modal */}
      <AnimatePresence>
        {loginFor && (
          <LoginModal
            provider={loginFor}
            onClose={() => setLoginFor(null)}
            onSuccess={handleLoginSuccess}
          />
        )}
      </AnimatePresence>
    </>
  );
}
