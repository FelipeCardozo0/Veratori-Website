"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ui/ThemeProvider";

const LAST_UPDATED = "March 25, 2026";
const EFFECTIVE_DATE = "March 25, 2026";
const COMPANY = "Veratori Inc.";
const EMAIL = "veratori@veratori.com";
const ADDRESS = "Austin, TX";

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    content: `These Legal Terms ("Terms") govern your access to and use of the website located at veratori.com (the "Site") and any services, software, hardware, or related products provided by ${COMPANY} ("Veratori," "we," "us," or "our"). By accessing or using the Site or our services, you agree to be bound by these Terms. If you do not agree, please do not use our Site or services.

These Terms are effective as of ${EFFECTIVE_DATE} and supersede any prior agreements between you and Veratori regarding the subject matter herein.`,
  },
  {
    id: "company",
    title: "2. Company Information",
    content: `${COMPANY} is a technology company incorporated under the laws of the State of Texas, United States of America. Our principal place of business is located in ${ADDRESS}.

For any legal inquiries, please contact us at: ${EMAIL}`,
  },
  {
    id: "ip",
    title: "3. Intellectual Property Rights",
    content: `All content on the Site — including but not limited to text, graphics, logos, photographs, software, hardware designs, machine learning models, computer vision algorithms, and any other materials (collectively, "Content") — is the exclusive property of ${COMPANY} or its licensors and is protected under applicable United States and international intellectual property laws, including copyright, trademark, patent, and trade secret law.

You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Site and its Content solely for your personal, non-commercial informational purposes. This license does not include the right to:

• Reproduce, distribute, publicly display, or create derivative works of any Content;
• Reverse engineer, decompile, or disassemble any software or algorithms used in our products;
• Remove or alter any proprietary notices, labels, or marks on any Content;
• Use the Content for any commercial purpose without our prior written consent.

The Veratori name, logo, and all related product names, designs, and slogans are trademarks of ${COMPANY}. Nothing in these Terms grants you any right to use these trademarks without our express written permission.`,
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable Use Policy",
    content: `You agree to use the Site and our services only for lawful purposes and in accordance with these Terms. You agree not to:

• Use the Site in any way that violates applicable federal, state, local, or international laws or regulations;
• Transmit or procure the sending of any unsolicited or unauthorized advertising or promotional material;
• Attempt to gain unauthorized access to any portion or feature of the Site or any other systems or networks connected to the Site;
• Use any robot, spider, crawler, scraper, or other automated means to access the Site for any purpose without our express written permission;
• Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful;
• Interfere with the proper functioning of the Site or any other user's enjoyment of the Site;
• Impersonate or attempt to impersonate ${COMPANY}, a Veratori employee, another user, or any other person or entity.

We reserve the right to terminate your access to the Site immediately, without notice, for any breach of this Acceptable Use Policy.`,
  },
  {
    id: "privacy",
    title: "5. Privacy & Data Collection",
    content: `Your privacy is important to us. Our use of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.

By using the Site, you consent to the collection, use, and sharing of your information as described in our Privacy Policy. In summary:

• We collect information you voluntarily provide (e.g., contact forms, order inquiries) and information automatically collected through your use of the Site (e.g., IP address, browser type, usage data).
• We use this information to operate and improve our services, communicate with you, and comply with our legal obligations.
• We do not sell your personal information to third parties.
• We implement commercially reasonable technical and organizational measures to protect your information.

If you are located in the European Economic Area (EEA) or the United Kingdom, you may have additional rights under applicable data protection law, including the General Data Protection Regulation (GDPR). Please contact us at ${EMAIL} to exercise any such rights.`,
  },
  {
    id: "hardware",
    title: "6. Hardware & Subscription Services",
    content: `Veratori offers hardware sensor units and associated software services on a subscription basis ("Services"). By placing an order or entering into a service agreement with us, you agree to the following:

Pricing & Billing: All pricing is subject to the terms set forth in your service agreement or order confirmation. Veratori reserves the right to adjust pricing with reasonable advance notice.

Hardware: Title to any hardware units does not transfer to you unless explicitly stated in your service agreement. Hardware remains the property of ${COMPANY} unless sold outright. You are responsible for the care and proper use of any hardware installed at your premises.

Service Availability: We will use commercially reasonable efforts to ensure the availability of our software services, but we do not guarantee uninterrupted or error-free service. Planned maintenance will be communicated in advance where practicable.

Termination: Either party may terminate the service agreement in accordance with the terms set forth therein. Upon termination, you agree to return any Veratori-owned hardware in good working condition.`,
  },
  {
    id: "disclaimer",
    title: "7. Disclaimer of Warranties",
    content: `THE SITE AND ALL CONTENT, PRODUCTS, AND SERVICES PROVIDED BY ${COMPANY.toUpperCase()} ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ${COMPANY.toUpperCase()} EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE DO NOT WARRANT THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY CONTENT ON THE SITE.

Any reliance you place on Content provided on the Site is strictly at your own risk.`,
  },
  {
    id: "liability",
    title: "8. Limitation of Liability",
    content: `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ${COMPANY.toUpperCase()}, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, OR SERVICE PROVIDERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST REVENUE, LOSS OF DATA, LOSS OF GOODWILL, OR BUSINESS INTERRUPTION, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF, OR INABILITY TO USE, THE SITE OR OUR SERVICES — EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SITE EXCEED THE GREATER OF (A) THE TOTAL AMOUNT PAID BY YOU TO VERATORI IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM OR (B) ONE HUNDRED DOLLARS ($100).

SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.`,
  },
  {
    id: "indemnification",
    title: "9. Indemnification",
    content: `You agree to indemnify, defend, and hold harmless ${COMPANY}, its affiliates, licensors, officers, directors, employees, contractors, agents, and successors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:

• Your violation of these Terms;
• Your use of the Site or our services;
• Your violation of any third-party rights, including without limitation any intellectual property or privacy rights;
• Any content or data you submit, post, or transmit through the Site.`,
  },
  {
    id: "third-party",
    title: "10. Third-Party Links & Services",
    content: `The Site may contain links to third-party websites, services, or resources ("Third-Party Content") that are not owned or controlled by ${COMPANY}. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any Third-Party Content.

We encourage you to review the terms and privacy policies of any third-party websites you visit. The inclusion of any link does not imply our endorsement, affiliation, or recommendation of the linked site or its operator.`,
  },
  {
    id: "governing-law",
    title: "11. Governing Law & Dispute Resolution",
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States of America, without regard to its conflict of law provisions.

Any dispute, claim, or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation, or validity thereof shall first be submitted to good-faith negotiation between the parties. If the dispute is not resolved through negotiation within thirty (30) days, it shall be resolved by binding arbitration administered in accordance with the American Arbitration Association (AAA) Commercial Arbitration Rules, with the arbitration seated in Austin, Texas.

Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to protect its intellectual property rights.

BY AGREEING TO THESE TERMS, YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.`,
  },
  {
    id: "changes",
    title: "12. Changes to These Terms",
    content: `We reserve the right to modify these Terms at any time. When we make material changes, we will update the "Last Updated" date at the top of this page and, where appropriate, notify you by email or through a notice on the Site.

Your continued use of the Site following the posting of revised Terms constitutes your acceptance of such changes. We encourage you to review these Terms periodically.`,
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: `If you have any questions, concerns, or requests regarding these Terms or your legal rights, please contact us:

${COMPANY}
${ADDRESS}
Email: ${EMAIL}

We will respond to all inquiries within a commercially reasonable time.`,
  },
];

export default function LegalPage() {
  const { isDark } = useTheme();

  return (
    <main className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-midnight text-white" : "bg-white text-black"}`}>

      {/* Hero */}
      <section className={`pt-28 pb-14 border-b ${isDark ? "border-white/5" : "border-black/5"}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-sage font-semibold tracking-widest uppercase text-sm mb-4 block">Legal</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-6">
              Legal Rights &<br />Terms of Use
            </h1>
            <p className={`text-lg leading-relaxed max-w-2xl ${isDark ? "text-white/60" : "text-black/60"}`}>
              Please read these terms carefully before using our website or services. They govern your relationship with Veratori Inc.
            </p>
            <p className={`mt-6 text-sm ${isDark ? "text-white/40" : "text-black/40"}`}>
              Last Updated: {LAST_UPDATED} &nbsp;·&nbsp; Effective: {EFFECTIVE_DATE}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className={`py-12 border-b ${isDark ? "border-white/5 bg-[#0A1220]" : "border-black/5 bg-mist"}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <h2 className={`text-sm font-semibold uppercase tracking-widest mb-6 ${isDark ? "text-white/40" : "text-black/40"}`}>Contents</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`text-sm py-1.5 transition-colors ${isDark ? "text-white/50 hover:text-sage" : "text-black/50 hover:text-sage"}`}
                >
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {sections.map((s, i) => (
            <motion.div
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.05 * (i % 4), ease: "easeOut" }}
            >
              <h2 className={`text-2xl font-bold tracking-tight mb-4 ${isDark ? "text-white" : "text-black"}`}>{s.title}</h2>
              <div className={`text-base leading-relaxed whitespace-pre-line ${isDark ? "text-white/65" : "text-black/65"}`}>
                {s.content}
              </div>
              {i < sections.length - 1 && (
                <div className={`mt-16 border-b ${isDark ? "border-white/5" : "border-black/5"}`} />
              )}
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
