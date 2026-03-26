# VERATORI WEBSITE — REDESIGN EXPECTATIONS & VISION DOCUMENT
*Last Updated: March 2026 | Reference: TSMC.com design language + Veratori brand*

---

## TABLE OF CONTENTS
1. [Design Philosophy & Inspiration](#1-design-philosophy--inspiration)
2. [Global Changes — Apply to Every Page](#2-global-changes--apply-to-every-page)
3. [Navigation — Full Mega-Menu Redesign](#3-navigation--full-mega-menu-redesign)
4. [Footer — Expanded Architecture](#4-footer--expanded-architecture)
5. [Existing Pages — What Changes on Each](#5-existing-pages--what-changes-on-each)
6. [New Pages to Build](#6-new-pages-to-build)
7. [New Components to Build](#7-new-components-to-build)
8. [Media & Content Requirements](#8-media--content-requirements)
9. [Animations & Interaction Upgrades](#9-animations--interaction-upgrades)
10. [SEO, Performance & Technical Requirements](#10-seo-performance--technical-requirements)
11. [Priority Order for Implementation](#11-priority-order-for-implementation)

---

## 1. DESIGN PHILOSOPHY & INSPIRATION

### What TSMC Does Right (Our Reference)
Looking at TSMC.com, the key design patterns that make enterprise tech websites feel authoritative and professional are:

1. **Mega-Menu Navigation** — Hovering any nav item reveals a full dropdown panel with categorized sub-links, images, and quick-access sections. Users can immediately navigate to any depth of the site from the nav bar without clicking multiple levels.

2. **Hero Image Carousels** — The homepage and many interior pages use a full-width sliding carousel with high-quality imagery or 3D renders. Each slide has a bold headline, subtitle, and CTA. Dot/arrow controls allow manual browsing.

3. **Section Separator Images** — Full-width panoramic images between content sections (like the aerial highway/factory shot on TSMC's Press Center) break up text and add visual depth without being distracting.

4. **Photo Grid / Gallery Sections** — Multiple image cards arranged in a 3-column grid show events, facilities, executives, and product visuals. These make the site feel active and alive.

5. **News + Events + Blog Side-by-Side** — A consistent pattern of "Latest News" + "Recent Events" in a 2-column layout using date-tagged links (not cards) feels clean and scannable.

6. **Organized Investors Section** — Dedicated investor resources with financial reports, shareholder info, quarterly results — accessed from a sidebar or dedicated page section.

7. **Icon + Label Feature Grids** — Bottom of many pages: 3–4 icon cards ("TSMC Online", "Supply Online 360", "Document Center") with short descriptions — quick portals to utility sections.

8. **Multi-Column Footer with Organized Hierarchy** — 7+ columns, grouped logically, every sub-page linked. No section is hidden or inaccessible.

9. **Consistent Section Heading Style** — Every section has a small uppercase label + large bold heading + optional subtitle. Very consistent typographic rhythm.

10. **Professional Color Discipline** — Primarily white/off-white backgrounds, one strong accent color (TSMC red), dark footers, minimal gradients — lets content breathe.

### How This Applies to Veratori
Veratori is a food-tech B2B SaaS startup. We are NOT TSMC, but we can borrow the structural confidence. Our identity is:
- **Dark-first** (midnight / sage green brand)
- **Technically credible** (LiDAR, YOLO, edge computing)
- **Human-centric** (restaurant operators, not engineers, are our buyers)
- **Early-stage but serious** (backed by ATV, active R&D, real pilots)

The redesign should feel like: **"A startup that's ready to scale"** — not corporate, not scrappy. Premium, focused, data-confident.

---

## 2. GLOBAL CHANGES — APPLY TO EVERY PAGE

These changes must be consistent across all pages:

### 2.1 Typography Upgrade
- **CURRENT**: Default system fonts, no declared font pair
- **NEW**: Import two Google Fonts:
  - **Headings**: `Space Grotesk` (geometric, tech-forward)
  - **Body**: `Inter` (clean, readable, industry standard)
- Apply via `next/font/google` in `layout.tsx`
- Heading scale: `text-5xl` to `text-7xl` for hero sections, `text-3xl`–`text-4xl` for section headings
- Body text minimum: `text-base` (16px), never smaller than `text-sm` for running copy

### 2.2 Section Rhythm
- **CURRENT**: Inconsistent padding, some sections feel cramped
- **NEW**: Standardize all section vertical padding to `py-24` (desktop) / `py-16` (mobile)
- Every content section gets a max-width container: `max-w-7xl mx-auto px-6`
- Sections alternate between dark/light backgrounds for visual separation:
  - Dark: `bg-midnight` or `bg-[#0F1A2E]`
  - Medium: `bg-[#0d1520]`
  - Light accents: `bg-white/5` cards on dark backgrounds
  - Light mode: `bg-mist` vs `bg-white`

### 2.3 Section Heading Component Update
Every major section heading must follow this exact structure:
```
[small uppercase tag in sage green] ← e.g., "HOW IT WORKS"
[large bold heading]                ← e.g., "From Cooler to Cloud"
[one highlighted word in sage]      ← e.g., "Automatically"
[optional subtitle in muted text]   ← supporting sentence
```
This is already partially implemented in `SectionHeading.tsx` — extend it to be used consistently everywhere.

### 2.4 Full-Width Separator Images
- Between major page sections, add full-width image strips (height: 200–300px, `object-cover`)
- Images should be relevant: cooler photos, restaurant kitchen overhead, ingredient close-ups
- Add a dark overlay (40–60% opacity) so text or stats can be overlaid on them
- These break up long-scroll pages and add visual interest without distracting

### 2.5 Dark Mode Improvements
- **CURRENT**: Some components have light-mode edge cases that look broken
- **NEW**: Full audit of all components in both modes
- All text must pass WCAG AA contrast ratio in both modes
- Cards should use `backdrop-blur` + semi-transparent backgrounds, not solid opaque colors

### 2.6 Cookie Consent Banner
- Add a fixed bottom-bar cookie consent banner (small, not intrusive)
- Buttons: "Accept All" and "Only Necessary"
- Appears on first visit, stores choice in localStorage
- Required for GDPR/CCPA compliance as traffic grows

### 2.7 "Get a Demo" Sticky CTA
- On all pages except Pricing and Contact, add a floating sticky button in the bottom-right corner
- Text: "Book a Demo"
- Links to `/contact` with `?source=demo` query param
- Small, rounded, sage green, subtle shadow
- Hides when user is within 200px of footer

### 2.8 Social Meta Tags (OG / Twitter Cards)
- Add to `layout.tsx` metadata:
  - `og:title`, `og:description`, `og:image`, `og:url`
  - `twitter:card`, `twitter:image`, `twitter:title`
- OG image: a custom 1200×630px branded image (to be created)
- Each page should override the default OG data with page-specific title/description

### 2.9 Page Loading States
- Add a top progress bar (like NProgress or a custom Framer Motion bar) that appears during route transitions
- Currently transitions are just fades — the progress bar adds perceived performance

### 2.10 Consistent CTA Button Styles
Define and enforce these button variants globally:
| Variant | Style | Use Case |
|---------|-------|----------|
| Primary | Sage green fill, white text, rounded-full | Main CTAs |
| Secondary | Transparent, sage border, sage text | Secondary actions |
| Ghost | No border, muted text, hover underline | Navigation links |
| Danger | Red fill | Destructive actions |
| Dark | Midnight fill, light text | On light backgrounds |

---

## 3. NAVIGATION — FULL MEGA-MENU REDESIGN

### 3.1 Current State Problem
- 6 flat nav links with no sub-navigation
- Users cannot discover sub-pages or page sections without clicking through
- No quick access to specific sections (e.g., jumping directly to Research)
- No "Get a Demo" CTA in navbar

### 3.2 New Navbar Architecture

#### Desktop: Mega-Menu Dropdowns
Each nav item (except Home) opens a mega-menu panel on hover with:
- A left column showing the page name + description
- 2–3 sub-section columns with anchor links
- Optional: a right column with a featured image or highlighted stat

**Product Mega-Menu** (hover "Product"):
```
┌─────────────────────────────────────────────────────────┐
│  Product Overview          How It Works    Hardware      │
│  See the full Veratori     Setup in 3      V1 Sensor     │
│  system                    steps           Edge Compute  │
│                            YOLO Detection  Integration   │
│                            RL Training     Spec Sheet ↗  │
│                                                          │
│  [Product image or hardware render]                      │
└─────────────────────────────────────────────────────────┘
```

**About Mega-Menu** (hover "About"):
```
┌─────────────────────────────────────────────────────────┐
│  Our Story              The Team        Expansion        │
│  Founded 2023 in        Meet the        NYC · ATL · AUS  │
│  Atlanta, GA            founders        Expansion Map    │
│                         & engineers                      │
│  [Team photo or office]              Careers →           │
└─────────────────────────────────────────────────────────┘
```

**Impact Mega-Menu** (hover "Impact"):
```
┌─────────────────────────────────────────────────────────┐
│  Our Mission            Research         ROI Calculator  │
│  Reducing food waste    LiDAR Paper      See your savings│
│  at scale               Whitepaper ↗     in 30 seconds   │
│                                                          │
│  Data Pipeline          Sustainability                   │
│  How data flows         Environmental Impact             │
└─────────────────────────────────────────────────────────┘
```

**Pricing Mega-Menu** (hover "Pricing"):
```
┌─────────────────────────────────────────────────────────┐
│  Pricing Plans          Order            FAQ             │
│  Beta pricing           Order Beta       Common          │
│  $359/unit/mo           Access Now       Questions       │
│                                                          │
│  💬 "Saves us 12 hours a week" — Poke Bowl Restaurant    │
└─────────────────────────────────────────────────────────┘
```

**Contact Mega-Menu** (hover "Contact"):
```
┌─────────────────────────────────────────────────────────┐
│  Get In Touch           Book a Demo      Support         │
│  Send us a message      Schedule a live  existing@...    │
│  contact@veratori.com   walkthrough                      │
│                                                          │
│  📍 Austin HQ  📍 Atlanta  📍 New York                   │
└─────────────────────────────────────────────────────────┘
```

### 3.3 Right Side of Navbar (New Items)
- Keep: Dark/light mode toggle
- **ADD**: "Get a Demo" button — sage green, rounded-full, small, right of nav links
- **ADD** (future): Search icon that expands to a search bar

### 3.4 Mobile Navigation Upgrade
- **CURRENT**: Flat links in a slide-in drawer
- **NEW**: Accordion-style mobile menu
  - Each section has an expand/collapse arrow
  - Sub-links appear below when expanded
  - "Get a Demo" as a full-width sage button at the bottom
  - Logo at top of drawer
  - Social icons at the bottom of drawer

### 3.5 Scroll Behavior
- Navbar starts transparent on hero sections, transitions to blurred dark on scroll (currently works but can be refined)
- Add subtle bottom border that appears on scroll
- Active page should be highlighted more clearly (currently just an underline)

---

## 4. FOOTER — EXPANDED ARCHITECTURE

### 4.1 Current Footer Gaps
- Missing: Newsletter signup
- Missing: Resources links (blog, docs, whitepaper)
- Missing: Press / Media link
- Missing: Status page link
- Missing: Privacy Policy link separately from Legal
- FAQ removed from Pricing column (correct per user request)

### 4.2 New Footer Structure

**Row 1: Brand + Newsletter**
```
[Veratori Logo]                    Subscribe to our newsletter
contact@veratori.com               [Email input] [Subscribe →]
[LinkedIn] [Instagram] [X]         Monthly updates on food-tech innovation
```

**Row 2: Link Columns (7 columns)**
```
Product         Impact          About           Resources       Company
──────          ──────          ──────          ──────          ──────
Overview        Our Mission     Our Story       Blog            Contact
How It Works    Data Pipeline   The Team        Whitepaper      Careers
YOLO Detection  ROI Calculator  Roadmap         LiDAR Research  Press / Media
Hardware Specs  Research        Scale & Reach   Documentation   Legal
Pricing         Sustainability  Careers         System Status   Privacy Policy

Pricing         Partners
──────          ──────
Beta Access     Atlanta Tech Village
Order Now       Goizueta Business School
FAQ             Become a Partner →
```

**Row 3: Locations**
```
📍 Austin, TX (HQ)    📍 Atlanta, GA    📍 New York, NY
```

**Row 4: Bottom Bar**
```
© 2026 Veratori Inc. All rights reserved.    |    Legal    |    Privacy    |    Cookie Settings
Built with precision in Austin, TX 🌿
```

---

## 5. EXISTING PAGES — WHAT CHANGES ON EACH

---

### 5.1 HOME PAGE (`/`)

#### Hero Section — Major Upgrade
**CURRENT**: Text + floating stat pills on a plain background
**NEW**:
- Full-width hero with background: a dark, professional photo of a restaurant kitchen or a LiDAR scan overlay on a cooler — with 60% dark gradient overlay
- Headline stays: "Your inventory, counted. Every shift, automatically"
- Add secondary line: "Powered by LiDAR depth sensing and edge AI"
- Two CTA buttons side by side:
  - Primary: "Request Beta Access" → /pricing
  - Secondary (outlined): "See How It Works" → /product
- Stat pills stay but animate in with stagger delay
- Add a subtle animated particle or grid pattern behind the text (tech aesthetic)
- Add a small "Backed by Atlanta Tech Village" badge below CTAs (small, credibility signal)
- **OPTIONAL**: Hero carousel — 3 slides rotating every 5 seconds:
  - Slide 1: "Zero inventory errors" — LiDAR scan visual
  - Slide 2: "38% less food waste" — before/after stat
  - Slide 3: "4 seconds to count everything" — speed visual

#### Partner Logos Section
**CURRENT**: Marquee with no heading
**NEW**:
- Add heading above: "Trusted by restaurants across the US" (small, muted)
- Keep marquee but slightly increase logo size
- Add subtle top/bottom fade masks on the marquee container

#### Before / After Section
**CURRENT**: Text comparison grid only
**NEW**:
- Add real photos: left side = a person counting with a clipboard, right side = a clean digital dashboard
- Add a testimonial quote below: `"We used to spend 90 minutes a shift counting. Veratori did it in 4 seconds."` — attributed to a pilot partner
- Add a "See Case Study →" link below the testimonial

#### Key Capabilities Section
**CURRENT**: 3 text cards with icons
**NEW**:
- Expand to 6 capabilities (add: Waste Prediction, Supplier Intelligence, Multi-Location Dashboard)
- Each card: icon + title + 1-sentence description + small "Learn more →" link
- Optional: alternate cards with a short animated GIF or image showing the feature

#### NEW: Stats Band Section
Insert a full-width dark stats band between sections:
```
[ 38% ]          [ 52 hrs ]        [ 99.2% ]         [ <4 sec ]
Avg waste        Saved per         LiDAR scan         Full inventory
reduction        month             accuracy           count time
```
Numbers should counter-animate (count up) when scrolled into view.

#### NEW: How It Works Teaser
A 3-step visual summary linking to /product:
1. "Install the V1 Sensor in minutes"
2. "Edge AI counts and identifies inventory automatically"
3. "Receive insights and alerts on your phone"
Each step has a number, icon, and 1 sentence. Ends with "See Full Product Details →"

#### NEW: Testimonials / Social Proof
Add a testimonial carousel (3–5 rotating quotes):
- Restaurateur quote + name + restaurant name + photo (if available)
- Auto-rotates every 4 seconds
- Arrow navigation

#### NEW: Latest News / Updates
A small 2-column section at the bottom of home:
- **Updates**: 2–3 most recent blog/news posts (title + date + read more)
- **Recent Events**: 1–2 upcoming or past events (ATV Demo Day, trade shows, etc.)
This mirrors the TSMC "Latest News + Recent Events" pattern and makes the site feel active.

---

### 5.2 PRODUCT PAGE (`/product`)

#### Hero Section Upgrade
**CURRENT**: Basic heading + hero image
**NEW**:
- Dark hero with product render or hardware photo overlaid
- Headline: "The V1 Sensor. Built for Commercial Kitchens."
- Sub: "LiDAR depth sensing + YOLO + edge compute in one device"
- 2 CTAs: "See Specs" (scroll anchor) + "Order Beta Access" → /pricing

#### Hardware Specs — Add Visual Table
**CURRENT**: Likely just text or a basic list
**NEW**:
- A proper spec comparison table (like an Apple spec sheet):
  | Feature | V1 Sensor |
  | Resolution | 4K RGB + ToF LiDAR |
  | Inference | NVIDIA Jetson Orin |
  | Connectivity | WiFi 6E / LTE |
  | Accuracy | 99.2% |
  | Count Speed | < 4 seconds |
  | Power | 12W typical |
  | Operating Temp | 0°C – 40°C |
- Add a rendering or line-drawing diagram of the hardware unit with callout labels

#### NEW: Full-Width Product Image Strip
- After the specs table, a full-width photo of the hardware mounted inside a real cooler
- Overlay text: "Designed for real kitchens. Not lab conditions."

#### Setup Timeline — Visual Upgrade
**CURRENT**: Basic 3-step list
**NEW**:
- Horizontal step timeline with connecting line
- Each step has: icon, title, description, estimated time
- Step 1: Mount (20 min) → Step 2: Connect (5 min) → Step 3: Train (automatic, 24 hrs)
- Animate the connector line drawing left-to-right on scroll

#### YOLO Demo — Framing Upgrade
**CURRENT**: Just the component, minimal context
**NEW**:
- Wrap in a section with heading: "See It In Action — Live Detection Demo"
- Add explanatory text: "Allow camera access to see what Veratori sees in real time"
- Fallback: if no camera, show a pre-recorded GIF of the demo
- After demo, CTA: "This runs on-device, in your cooler, 24/7 →"

---

### 5.3 ABOUT PAGE (`/about`)

#### Hero Section Upgrade
**CURRENT**: Hero image + basic heading
**NEW**:
- Large team or office photo as background
- Overlay: "Built by engineers obsessed with eliminating food waste"
- Sub: "We started in Atlanta. We're expanding everywhere food is served."

#### Company Story — Add Timeline Visual
**CURRENT**: Paragraph text
**NEW**:
- Illustrated timeline with actual milestones:
  - 2023: Founded in Atlanta, GA
  - 2023: First pilot at Poke Bowl restaurant
  - 2024: Joined Atlanta Tech Village accelerator
  - 2024: LiDAR research paper published
  - 2025: Beta program launched
  - 2026: Expanding to NYC & Austin

#### Team Cards — Upgrade
**CURRENT**: Photo + name + role (basic)
**NEW**:
- Photo + name + role + 1-line bio
- LinkedIn icon link (hover reveals)
- On click/hover: card flips or expands to show a short bio paragraph
- Add a "We're Hiring" card at the end of the team grid

#### NEW: Company Values Section
4–6 value cards with icon + title + 2-sentence description:
- "Accuracy Over Assumptions" — We build with real data, not guesses
- "Operators First" — Every feature is designed for the kitchen floor
- "Radical Transparency" — Our clients see everything we see
- "Zero Waste, Literally" — Our mission is our product
- "Research-Driven" — Published science backs every claim
- "Build to Last" — Not a trend. A better food system.

#### US Map — Upgrade Context
**CURRENT**: Just a map with 3 dots
**NEW**:
- Add a heading: "Growing Across America"
- Add description below each city dot (click to reveal):
  - Austin: R&D HQ, engineering team
  - Atlanta: Founding city, ATV-backed, first pilots
  - New York: Deployment & growth market
- Add: "Next cities coming soon: Miami, Chicago, LA"

#### Advisors Section (New)
If advisors exist, add them:
- Same card format as team
- Section labeled "Advisors & Partners"

---

### 5.4 MISSION / IMPACT PAGE (`/mission`)

#### Hero Upgrade
**CURRENT**: Basic hero image + heading
**NEW**:
- Full-width image: aerial view of a restaurant kitchen or food inventory
- Bold stat overlay: "Over 1.3 billion tons of food is wasted globally every year."
- Sub: "Veratori is building the infrastructure to stop it."

#### NEW: Environmental Impact Context Section
Add a section BEFORE the ROI calculator:
- 3 global food waste stats with large numbers and icons:
  - "30% of all food produced is wasted annually"
  - "$1 trillion lost to food waste per year globally"
  - "8% of global greenhouse gas emissions from food waste"
- Source citations (small, below each stat)
- Transition: "At the restaurant level, this adds up fast. Here's what it costs YOU:"
- Flow naturally into the ROI Calculator below

#### ROI Calculator — Visual Polish
**CURRENT**: Functional but visually basic
**NEW**:
- Add a section heading: "Calculate Your Savings" with subtitle
- Add a testimonial snippet above: "Our pilot locations averaged $2,400/month in recovered revenue"
- After the calculator, add: "Ready to see these numbers for real? → Request a Demo"

#### DataFlowSection — Visual Upgrade
**CURRENT**: Good content, but could use media
**NEW**:
- Add a real dashboard screenshot as a framed preview image in this section
- The pipeline diagram nodes should have micro-illustrations or icons that feel more premium
- Add an animated counter for the KPI stats (count up on scroll into view)

#### Research Section — Expand
**CURRENT**: Single paper card with hover effect
**NEW**:
- Section heading: "Research & Development"
- Keep existing paper card with all its 3D hover effects (already built)
- Add a "More coming soon" placeholder card (grayed out, says "In Review — Q3 2026")
- Add a short paragraph about R&D investment and publishing commitment

---

### 5.5 PRICING PAGE (`/pricing`)

#### Hero Upgrade
**CURRENT**: Basic pricing hero
**NEW**:
- Add a confidence statement: "Simple pricing. No contracts. Cancel anytime."
- Add "Beta Access" badge: orange/amber pill saying "Limited Beta Spots"
- Show a small trust row: Stripe Verified · SOC2 Compliant · SSL Encrypted

#### Pricing Cards — Add Tiers (Optional but Recommended)
**CURRENT**: Single $359/month price
**NEW**: Show 3 tiers even if only Beta is active:
```
┌──────────────┬──────────────┬──────────────┐
│   Starter    │    Growth    │  Enterprise  │
│  1–3 units   │  4–10 units  │  11+ units   │
│  $359/unit   │  $299/unit   │  Custom      │
│  /month      │  /month      │  Quote       │
│              │              │              │
│  [Order Now] │  [Order Now] │ [Contact Us] │
└──────────────┴──────────────┴──────────────┘
```
- "Most Popular" badge on Growth tier
- Feature checklist per tier

#### FAQ Section — Upgrade
**CURRENT**: 4 accordion questions
**NEW**:
- Expand to 8–10 questions covering:
  - "What happens after I order?"
  - "How long does installation take?"
  - "Is there a contract?"
  - "What if my internet goes down?"
  - "Does it work with all cooler types?"
  - "Can I use multiple units across locations?"
  - "What data do you store?"
  - "How is my payment secured?"
- Group FAQ into categories: Pricing / Installation / Privacy / Support

#### OrderForm — Fix & Upgrade
- Fix Stripe button missing "Credit Card (Stripe)" text label **(known bug)**
- Add order confirmation state (after payment, show "Order Received!" screen)
- Add "Need help choosing? Contact us →" below the form
- Ensure all 3 payment logos are visible and consistent

---

### 5.6 CONTACT PAGE (`/contact`)

#### Upgrade to 3-Column Layout
**CURRENT**: Form + basic contact info
**NEW 3-column layout**:
```
[Contact Form]    [Direct Contacts]    [Book a Demo]
Name              Sales:               Calendly embed
Email             contact@veratori.com or a schedule button
Message           Support:             "Schedule a 20-min
                  support@veratori.com  walkthrough with
Submit            Press:               our team"
                  press@veratori.com
```

#### Add Office Info Cards
3 office location cards:
- Austin, TX (HQ) — address, map link
- Atlanta, GA — address, map link
- New York, NY — address, map link

#### Response Time Indicator
Keep the "what to expect" section but make it visual:
- Icon + "Typically respond within 24 hours"
- Icon + "Sales inquiries same business day"
- Icon + "Live demo slots available this week"

---

### 5.7 LEGAL PAGE (`/legal`)

- **CURRENT**: Content complete, no design upgrades needed urgently
- **ADD**: Update "Last Updated" date (currently may be stale)
- **ADD**: Separate Privacy Policy page at `/privacy` (currently lumped into legal)
- **ADD**: Cookie Policy section
- **ADD**: GDPR / Data Rights section (right to deletion, export, etc.)

---

## 6. NEW PAGES TO BUILD

---

### 6.1 `/blog` — Company Blog / News
**Purpose**: Show Veratori is active, publishing, and worth following. Improves SEO dramatically.

**Structure**:
- Hero: "Insights from the Veratori team"
- Featured post (large card, top of page)
- Post grid (3 columns): post image + title + date + category tag + excerpt + "Read More →"
- Categories: Product Updates, Research, Food Industry, Company News
- Newsletter signup at bottom

**Initial Post Ideas**:
- "Why We Chose LiDAR for Inventory" (technical)
- "The $8,000 We Helped [Restaurant] Save in 90 Days" (case study)
- "ATV Demo Day Recap" (company update)
- "How YOLO Works in a Commercial Cooler" (educational)

**Implementation**: Static MDX files per post, no CMS needed initially. Each post is a `.mdx` file in `/content/blog/`.

---

### 6.2 `/blog/[slug]` — Individual Blog Post
**Structure**:
- Full-width hero image (per post)
- Post metadata: author, date, reading time, category
- Article body (MDX rendered with styled typography)
- Author bio card at bottom
- Related posts grid (3 cards)
- "Back to Blog" link

---

### 6.3 `/case-studies` — Client Results
**Purpose**: The single most persuasive page for B2B sales. Real numbers from real restaurants.

**Structure**:
- Hero: "Real results from real restaurants"
- Case study cards grid:
  - Client logo
  - Challenge / Solution / Results format
  - Key metric (e.g., "Reduced waste by 41% in 60 days")
  - "Read Full Case Study →"
- CTA at bottom: "Want results like these? Request Beta Access →"

**Each Case Study Detail Page** (`/case-studies/[slug]`):
- Full story: the problem, Veratori's solution, the results
- Quotes from the operator
- Before/after data tables
- Photos of the installation (if available)

---

### 6.4 `/press` — Press & Media Center
**Purpose**: Provide journalists and investors with official assets. Shows credibility.

**Structure**:
- Press Releases section (list by date)
- Media Coverage (logos of outlets that have covered Veratori, linked)
- Press Kit download (brand assets, logo pack, one-pager)
- Media Contact: press@veratori.com
- Company Fact Sheet (founding date, location, team size, funding)
- Official headshots of founders (downloadable)
- High-res product images (downloadable)

---

### 6.5 `/resources` — Resources Hub
**Purpose**: SEO content and lead generation. Users search for food waste solutions and find Veratori.

**Structure**:
- Whitepapers (LiDAR paper, ROI guide)
- Videos (demo video, explainer)
- Documentation (setup guide, API overview)
- Tools (ROI calculator embedded here too)
- FAQ expanded (site-wide FAQ)

---

### 6.6 `/careers` — Open Positions
**Purpose**: Recruiting. Currently a CTA on /about but no dedicated page.

**Structure**:
- Hero: "Build the future of food operations"
- Culture section: photos, values, team quotes
- Benefits: what Veratori offers (equity, remote-friendly, mission-driven, etc.)
- Open roles: list with role title, team, location (remote/Austin/ATL), link to apply
- "Don't see your role? Send us your resume →" fallback

**Even with 0 open roles today**, having this page ready signals maturity.

---

### 6.7 `/partners` — Partner Program
**Purpose**: Formal partner section. Currently the ATV relationship is buried in the pipeline diagram.

**Structure**:
- Hero: "Partner with Veratori"
- Current partners grid: ATV, Goizueta, pilot restaurants
- Types of partnerships: Technology, Distribution, Academic, Restaurant Group
- Partner benefits per type
- "Become a Partner" inquiry form

---

### 6.8 `/privacy` — Privacy Policy (Separate from Legal)
**Purpose**: GDPR/CCPA compliance + trust signal. Separate from Terms of Service.

**Structure**:
- Standard privacy policy content
- Table of contents with anchors
- Last updated date
- Data request form link

---

### 6.9 `/404` — Custom Not Found Page
**Purpose**: Branded error page instead of default Next.js 404.

**Structure**:
- Large "404" in sage green
- Headline: "Page not found"
- Suggested links: Home, Product, Contact
- Optional: a small animation (floating LiDAR scan particles or something playful)

---

### 6.10 `/demo` — Demo Request Landing Page
**Purpose**: Dedicated page for conversion. Link all "Book a Demo" CTAs here.

**Structure**:
- Short value pitch (3 bullet points max)
- Embedded Calendly or form: Name, Email, Restaurant Name, Number of Locations, Message
- Trust signals: ATV logo, security badges, "No sales pressure"
- Confirmation state: "We'll reach out within 1 business day"

---

## 7. NEW COMPONENTS TO BUILD

### 7.1 `HeroCarousel.tsx`
- Full-width sliding hero with 3 slides
- Auto-advance every 5 seconds
- Dot indicators + prev/next arrows
- Each slide: background image + headline + subtitle + CTA button
- Pause on hover
- Smooth crossfade transition

### 7.2 `MegaMenu.tsx`
- Triggers on nav item hover (desktop)
- Animated dropdown panel (framer-motion scale + opacity)
- 2–4 column grid inside
- Closes on mouse leave with small delay (200ms)
- Keyboard accessible (tab/arrow/escape)
- Mobile: becomes accordion instead

### 7.3 `TestimonialCarousel.tsx`
- 3–5 rotating client quotes
- Large quotation mark visual
- Client name + restaurant + optional photo
- Auto-rotate every 4 seconds
- Dot indicators + arrow controls

### 7.4 `StatsBand.tsx`
- Full-width dark band with 4 large stats
- Each stat: big number + label
- Numbers animate (count up) when scrolled into view
- Use `useInView` + `useMotionValue` from framer-motion

### 7.5 `NewsCard.tsx`
- Blog/news preview card
- Image (cover) + category tag + title + date + excerpt + "Read More →"
- Hover: image scale, lift shadow

### 7.6 `CaseStudyCard.tsx`
- Client logo + headline metric + challenge/result summary
- Branded accent color matching client
- Hover: expand or reveal more info

### 7.7 `CookieBanner.tsx`
- Fixed bottom bar
- "Accept All" + "Only Necessary" buttons
- Stores choice in localStorage
- Fades in after 1 second on first visit
- Hides once choice is made

### 7.8 `StickyDemoCTA.tsx`
- Fixed bottom-right floating button
- "Book a Demo" text
- Sage green background
- Hides when near footer
- Small spring bounce animation on mount

### 7.9 `BlogPost.tsx` Layout
- MDX content renderer
- Styled typography (headings, blockquotes, code blocks, links)
- Reading progress bar at top of page
- Table of contents sidebar (desktop)

### 7.10 `FullWidthImageBand.tsx`
- Reusable full-width image strip component
- Props: image src, overlay opacity, optional text, optional stat
- Used between sections as visual separators

---

## 8. MEDIA & CONTENT REQUIREMENTS

### Photography Needed (Real photos of Veratori)
| Asset | Priority | Notes |
|-------|----------|-------|
| Physical V1 Sensor hardware unit | CRITICAL | Multiple angles, clean background |
| Sensor installed inside a cooler | CRITICAL | Real-world environment |
| Restaurant kitchen overhead shot | HIGH | Hero background for home |
| Dashboard / app UI screenshots | HIGH | Manager interface mockup or real |
| Team at work / office/lab photos | HIGH | For About page culture section |
| Before: person counting with clipboard | MEDIUM | For Before/After section |
| Close-up of LiDAR scan overlay | MEDIUM | For Mission/Product pages |
| Ingredient/food photos (high quality) | LOW | For blog posts, decorative |

### Video Content Needed
| Asset | Priority | Notes |
|-------|----------|-------|
| 30-second product demo video | CRITICAL | Show install → scan → dashboard |
| Testimonial video (1 restaurant operator) | HIGH | Even 60 seconds on iPhone |
| Explainer animation (how LiDAR works) | MEDIUM | Could be simple motion graphics |

### Written Content Needed
| Asset | Priority | Notes |
|-------|----------|-------|
| 2–3 case studies with real data | CRITICAL | Negotiate with pilot partners |
| 3–5 blog posts | HIGH | See post ideas above |
| Team bios (2–3 sentences each) | HIGH | Currently missing from cards |
| Company values copy | MEDIUM | Short, punchy value statements |
| Press kit one-pager | MEDIUM | PDF for media inquiries |
| Job descriptions | LOW | Even 1–2 roles |

---

## 9. ANIMATIONS & INTERACTION UPGRADES

### Upgrade Priority List

| Animation | Component | Current | Upgrade |
|-----------|-----------|---------|---------|
| Stats count-up | StatsBand (new) | None | useMotionValue counter |
| Hero carousel slide | HeroCarousel (new) | None | Framer AnimatePresence |
| Mega-menu reveal | MegaMenu (new) | None | scale + opacity spring |
| Testimonial fade | TestimonialCarousel (new) | None | crossfade + slide |
| Timeline draw | About roadmap | Basic | SVG path drawing on scroll |
| Paper card 3D tilt | mission/page.tsx | Partially broken | Fix perspective on parent |
| Green line travel | mission/page.tsx | Short travel | Full-width travel to icon |
| Stripe button text | OrderForm.tsx | Missing | Add "Credit Card (Stripe)" |
| Progress bar | Layout | None | Route change progress bar |
| Cookie banner | CookieBanner (new) | None | slide-up on mount |
| Sticky CTA | StickyDemoCTA (new) | None | bounce-in, scroll-hide |
| Image hover zoom | All image cards | Inconsistent | Standardize scale(1.05) |
| Section entry | All sections | Some | Audit all, make consistent |

---

## 10. SEO, PERFORMANCE & TECHNICAL REQUIREMENTS

### SEO Essentials
- [ ] Custom page `<title>` and `<meta description>` for every page
- [ ] OG image (1200×630px) for social sharing
- [ ] Twitter card meta tags
- [ ] Structured data (JSON-LD) for organization schema
- [ ] `sitemap.xml` at `/sitemap.xml` (Next.js can auto-generate)
- [ ] `robots.txt` at `/robots.txt`
- [ ] Canonical URL tags
- [ ] Alt text on ALL images (currently some are missing)
- [ ] Semantic HTML (h1/h2/h3 hierarchy, proper article/section/main tags)

### Performance
- [ ] All images use `next/image` with proper `width`/`height` (currently some use `fill`)
- [ ] Images are WebP format (convert PNGs)
- [ ] Lazy load all below-fold images
- [ ] Video uses lazy load / poster frame
- [ ] No unused third-party scripts at load time
- [ ] Bundle analysis: remove any unused Three.js code (currently imported but not used)
- [ ] Font preload directives in `<head>`
- [ ] Lighthouse score target: 90+ on all four metrics

### Accessibility (a11y)
- [ ] All interactive elements keyboard-navigable
- [ ] ARIA labels on icon-only buttons
- [ ] Focus rings visible on all focusable elements
- [ ] Color contrast WCAG AA minimum on all text
- [ ] Mega-menu keyboard accessible (Tab + Arrow + Escape)
- [ ] Screen reader labels on all logos and decorative images
- [ ] Skip to main content link at top of page

### Technical Debt
- [ ] Fix `perspective` on paper card parent (3D tilt bug)
- [ ] Fix Stripe button missing text label
- [ ] Fix green line animation width (travel to icon)
- [ ] Remove unused Three.js import if not needed
- [ ] Add `favicon.ico` in multiple sizes (16, 32, 180px Apple touch)
- [ ] Add custom `not-found.tsx` (404 page)
- [ ] Add `error.tsx` (500 error page)
- [ ] Add `loading.tsx` per route for streaming suspense

---

## 11. PRIORITY ORDER FOR IMPLEMENTATION

### Phase 1 — Critical Fixes (This Week)
1. Fix 3 known bugs: Stripe text, green line animation, 3D tilt
2. Remove FAQ from footer pricing column (done per user request)
3. Add custom 404 page
4. Add social meta tags (OG/Twitter)
5. Add favicon in all sizes

### Phase 2 — Navigation & Footer (Next)
6. Build `MegaMenu.tsx` component
7. Update `Header.tsx` to use mega-menus
8. Rebuild `Footer.tsx` with full expanded architecture
9. Add "Get a Demo" button to navbar
10. Add `CookieBanner.tsx`

### Phase 3 — Home Page Upgrade
11. Add hero background image
12. Build `HeroCarousel.tsx` (optional) or upgrade static hero
13. Build `StatsBand.tsx` with count-up animation
14. Build `TestimonialCarousel.tsx`
15. Add "How It Works" teaser section
16. Add "Latest Updates" mini-blog section

### Phase 4 — New Pages
17. `/blog` + `/blog/[slug]`
18. `/case-studies` + `/case-studies/[slug]`
19. `/demo` landing page
20. `/careers`

### Phase 5 — Content & Media
21. Professional product photography
22. Dashboard screenshots or mockups
23. First 3 blog posts published
24. First 2 case studies published

### Phase 6 — Remaining New Pages
25. `/press`
26. `/resources`
27. `/partners`
28. `/privacy` (separate from legal)

### Phase 7 — Polish & Performance
29. Font upgrade (Space Grotesk + Inter)
30. Global section padding audit
31. Full dark/light mode audit
32. Lighthouse optimization pass
33. Accessibility audit

---

*Document End — Veratori Site Redesign Expectations v1.0*
*This document should be reviewed and updated quarterly as the site evolves.*
