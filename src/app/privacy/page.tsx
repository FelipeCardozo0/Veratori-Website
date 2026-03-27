"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Mail, Shield } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `Veratori Inc. ("Veratori," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website at veratori.com, use our hardware products (the "V1 Sensor"), or interact with our services.

Please read this policy carefully. If you disagree with its terms, please discontinue use of our site and services. We reserve the right to make changes to this policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date. Your continued use of the site after any changes constitutes acceptance of this updated policy.`,
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: `We collect information in the following ways:

**Information You Provide Directly**
- Contact form submissions (name, email, message)
- Order and beta access forms (name, email, business name, location count)
- Newsletter subscriptions (email address)
- Partner inquiry forms (name, email, company, partnership type)

**Information Collected Automatically**
- Site usage analytics (page views, session duration, referral source) — collected via anonymized cookies
- IP address and approximate geographic region
- Browser type and device information

**What We Do NOT Collect from Hardware**
The V1 Sensor processes all video and depth data on-device. No raw footage is transmitted to Veratori servers. Sensor data transmitted to our cloud consists solely of structured inventory records, anomaly flags, and timestamped stock level summaries — never raw video, images, or personally identifiable visual data.`,
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: `We use collected information for the following purposes:

- **Service delivery**: To fulfill orders, provision hardware, and provide customer support
- **Communications**: To respond to inquiries, send order confirmations, and deliver requested updates
- **Product improvement**: To understand how our website and services are used, and to improve them
- **Marketing** (with consent): To send newsletters or product updates — you may unsubscribe at any time
- **Legal compliance**: To comply with applicable laws, regulations, and legal processes
- **Fraud prevention**: To detect, prevent, and address technical issues or misuse

We do not sell, trade, or rent your personal information to third parties. We do not use personal information for automated decision-making or profiling.`,
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    content: `We use cookies and similar tracking technologies to improve your experience on our site.

**Types of cookies we use:**
- **Strictly necessary**: Required for the site to function (session management, security)
- **Analytics**: Anonymized usage data to understand site traffic and improve content
- **Preferences**: Remembering your settings (e.g., dark/light mode, cookie consent choice)

We do not use advertising or cross-site tracking cookies.

**Your choices**: You can control cookies through your browser settings or via the Cookie Settings option in our footer. Blocking strictly necessary cookies may affect site functionality. You can withdraw consent at any time.

We use localStorage (not cookies) to store your cookie consent preference and UI settings like theme. This data never leaves your device.`,
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Third Parties",
    content: `We share your information only in the following limited circumstances:

**Service Providers**: We work with third-party vendors who assist in operating our website and services (e.g., hosting providers, payment processors, email platforms). These providers are contractually bound to use your data only for the purpose of providing services to us.

**Payment Processing**: All payment transactions are processed by Stripe, PayPal, or Phantom Wallet. Veratori does not store payment card information. These providers have their own privacy policies governing their use of your financial information.

**Legal Requirements**: We may disclose your information if required by law, court order, or government authority, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.

**Business Transfers**: In the event of a merger, acquisition, or sale of assets, your information may be transferred. We will provide notice before your information is transferred.

We do not share data with advertisers or data brokers.`,
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: `We retain personal information only as long as necessary for the purposes described in this policy:

- **Contact form submissions**: 2 years
- **Customer order records**: 7 years (legal/tax requirements)
- **Newsletter subscriptions**: Until you unsubscribe
- **Analytics data**: Rolling 13 months (anonymized)
- **Cookie consent**: Stored in your browser's localStorage until cleared

Hardware sensor data (inventory records, alerts) is retained for the duration of your service subscription plus 90 days. You may request deletion of your data at any time.`,
  },
  {
    id: "security",
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information:

- All data transmitted between your browser and our servers is encrypted via TLS/SSL
- Sensitive fields (passwords, API keys) are hashed or encrypted at rest
- Payment data is tokenized — we never store raw card numbers
- The V1 Sensor processes all video on-device; no footage is transmitted
- Access to personal data is restricted to authorized Veratori personnel on a need-to-know basis
- We undergo regular security reviews and aim to achieve SOC 2 Type II certification

No method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`,
  },
  {
    id: "your-rights",
    title: "Your Rights (GDPR & CCPA)",
    content: `Depending on your location, you may have the following rights regarding your personal data:

**For EU/EEA residents (GDPR):**
- Right to access: Request a copy of your personal data
- Right to rectification: Correct inaccurate data
- Right to erasure: Request deletion of your data ("right to be forgotten")
- Right to restrict processing: Limit how we use your data
- Right to data portability: Receive your data in a machine-readable format
- Right to object: Object to processing based on legitimate interests

**For California residents (CCPA):**
- Right to know what personal information is collected and how it's used
- Right to delete personal information
- Right to opt-out of sale (note: we do not sell personal information)
- Right to non-discrimination for exercising your rights

**To exercise any of these rights**, contact us at privacy@veratori.com. We will respond within 30 days (GDPR) or 45 days (CCPA). We may require verification of your identity before processing requests.`,
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us personal information, we will take steps to delete such information promptly. If you believe a child has submitted information to us, please contact us at privacy@veratori.com.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by updating the "Last Updated" date at the top of this page. For significant changes, we may also provide a more prominent notice (such as an email notification if you are a registered user).

Your continued use of Veratori's website or services after any changes to this policy constitutes your acceptance of the revised policy. We encourage you to review this policy periodically.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

**Veratori Inc.**
Privacy Team
privacy@veratori.com

Austin, TX (Headquarters)

We aim to respond to all privacy-related inquiries within 5 business days.`,
  },
];

function PolicySection({
  section,
  index,
}: {
  section: (typeof sections)[0];
  index: number;
}) {
  const { isDark } = useTheme();
  const [open, setOpen] = useState(true);

  const formattedContent = section.content.split("\n\n").map((para, i) => {
    if (para.startsWith("**") && para.includes("**:")) {
      const parts = para.split("\n").map((line, j) => {
        if (line.startsWith("**") && line.includes("**")) {
          const match = line.match(/\*\*(.+?)\*\*(.*)/)!;
          return (
            <p key={j} className="mb-1">
              <strong>{match[1]}</strong>{match[2]}
            </p>
          );
        }
        if (line.startsWith("- ")) {
          return (
            <p key={j} className="ml-4 mb-0.5 flex gap-2">
              <span className="text-sage mt-1">•</span> {line.slice(2)}
            </p>
          );
        }
        return line ? <p key={j} className="mb-1">{line}</p> : null;
      });
      return <div key={i} className="mb-3">{parts}</div>;
    }
    if (para.startsWith("- ")) {
      return (
        <div key={i} className="mb-3 space-y-1">
          {para.split("\n").map((line, j) =>
            line.startsWith("- ") ? (
              <p key={j} className="flex gap-2 ml-1">
                <span className="text-sage mt-1 shrink-0">•</span> {line.slice(2)}
              </p>
            ) : null
          )}
        </div>
      );
    }
    return (
      <p key={i} className="mb-3 leading-relaxed">
        {para.replace(/\*\*(.+?)\*\*/g, "").trim() !== para ? (
          <span dangerouslySetInnerHTML={{
            __html: para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
          }} />
        ) : para}
      </p>
    );
  });

  return (
    <motion.div
      id={section.id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`rounded-2xl border overflow-hidden ${
        isDark ? "border-white/[0.08]" : "border-black/[0.08]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer transition-colors ${
          isDark ? "bg-white/[0.03] hover:bg-white/[0.05]" : "bg-white hover:bg-black/[0.02]"
        }`}
      >
        <h2 className="text-base font-bold">{index + 1}. {section.title}</h2>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 opacity-40" />
        </motion.span>
      </button>
      {open && (
        <div className={`px-6 pb-6 pt-1 text-sm ${isDark ? "text-white/55 bg-white/[0.02]" : "text-black/60 bg-black/[0.01]"}`}>
          {formattedContent}
        </div>
      )}
    </motion.div>
  );
}

export default function PrivacyPage() {
  const { isDark } = useTheme();

  return (
    <main className={isDark ? "bg-black text-white" : "bg-white text-black"}>

      {/* ── Hero ── */}
      <section className={`pt-32 pb-12 border-b ${isDark ? "border-white/[0.06]" : "border-black/[0.06]"}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-sage" />
              </div>
              <span className="text-sage font-semibold tracking-widest uppercase text-xs">Privacy Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
              Your privacy matters to us
            </h1>
            <p className={`text-base leading-relaxed mb-4 max-w-2xl ${isDark ? "text-white/55" : "text-black/55"}`}>
              This policy explains exactly what data Veratori collects, how we use it, and your rights as a user or customer. We believe in radical transparency — no hidden practices, no selling your data.
            </p>
            <div className={`flex flex-wrap gap-4 text-xs ${isDark ? "text-white/35" : "text-black/35"}`}>
              <span>Last Updated: March 26, 2026</span>
              <span>·</span>
              <span>Effective: March 26, 2026</span>
              <span>·</span>
              <a href="mailto:privacy@veratori.com" className="text-sage hover:underline flex items-center gap-1">
                <Mail className="w-3 h-3" /> privacy@veratori.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Quick nav ── */}
      <section className={`py-8 border-b ${isDark ? "border-white/[0.06] bg-midnight" : "border-black/[0.06] bg-mist"}`}>
        <div className="max-w-4xl mx-auto px-6">
          <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? "text-white/30" : "text-black/30"}`}>
            Jump to Section
          </p>
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isDark
                    ? "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                    : "bg-black/5 text-black/50 hover:bg-black/10 hover:text-black"
                }`}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Policy sections ── */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          {sections.map((section, i) => (
            <PolicySection key={section.id} section={section} index={i} />
          ))}
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className={`py-16 border-t ${isDark ? "border-white/[0.06] bg-midnight" : "border-black/[0.06] bg-mist"}`}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold mb-3">Questions about your privacy?</h2>
          <p className={`text-sm mb-6 ${isDark ? "text-white/50" : "text-black/50"}`}>
            We&apos;re happy to answer any questions about how we handle your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:privacy@veratori.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sage text-white font-bold text-sm hover:bg-sage-light transition-colors"
            >
              <Mail className="w-4 h-4" /> Email Privacy Team
            </a>
            <Link
              href="/legal"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm border transition-colors ${
                isDark
                  ? "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                  : "border-black/15 text-black/70 hover:border-black/40 hover:text-black"
              }`}
            >
              View Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
