# VERATORI WEBSITE — COMPLETE SITE INVENTORY
*Last Updated: March 2026 | Compiled for redesign planning*

---

## TABLE OF CONTENTS
1. [Current Pages](#1-current-pages)
2. [Component-by-Component Breakdown](#2-component-by-component-breakdown)
3. [Navigation Structure](#3-navigation-structure)
4. [Assets & Media Inventory](#4-assets--media-inventory)
5. [Colors & Design System](#5-colors--design-system)
6. [Interactive Features & Animations](#6-interactive-features--animations)
7. [Forms & Integrations](#7-forms--integrations)
8. [Missing Content — What We Don't Have Yet](#8-missing-content--what-we-dont-have-yet)
9. [Known Bugs & Incomplete Items](#9-known-bugs--incomplete-items)
10. [Third-Party Dependencies](#10-third-party-dependencies)

---

## 1. CURRENT PAGES

| Route | Page Name | Status |
|-------|-----------|--------|
| `/` | Home | Live |
| `/product` | Product | Live |
| `/about` | About | Live |
| `/mission` | Impact / Mission | Live |
| `/pricing` | Pricing | Live |
| `/contact` | Contact | Live |
| `/legal` | Legal / Terms | Live |

**Total: 7 pages**

---

## 2. COMPONENT-BY-COMPONENT BREAKDOWN

### LAYOUT COMPONENTS

#### `Header.tsx`
- Fixed top navbar, z-index above all content
- Veratori logo on the left (links to `/`)
- Nav items: Home, Product, About, Impact, Pricing, Contact
- Dark/Light mode toggle button (Sun icon / Moon icon)
- Scroll-activated backdrop blur (triggers after 10px scroll)
- Active link has green underline animation
- Mobile: hamburger icon → right-side slide-in drawer
- Mobile drawer: full-screen, semi-transparent overlay, links list, close X button
- **MISSING**: Dropdown mega-menus on hover for any nav item
- **MISSING**: Sub-page links within nav hovers
- **MISSING**: Any secondary nav items or quick-access links

#### `Footer.tsx`
- Dark background (`bg-midnight`)
- Left: Veratori logo + email (contact@veratori.com)
- Social icons: LinkedIn, Instagram, X/Twitter (animated hover)
- Location badges: NYC · Atlanta · Austin (HQ)
- 5 link columns:
  - **Product**: Overview, How It Works, Key Capabilities, Pricing
  - **About**: Our Story, The Team, Scale & Expansion
  - **Impact**: Our Mission, Operating Principles, Research
  - **Pricing**: Plans, Order Beta Access
  - **Company**: Contact, Legal Rights
- Copyright line at bottom
- **MISSING**: FAQ link in Pricing column (currently exists in pricing page but not linked)
- **MISSING**: Newsletter signup
- **MISSING**: "Built with ❤️ in Atlanta/Austin" type branding line

#### `PageTransition.tsx`
- Wraps every page in fade-slide animation
- Opacity 0→1, Y+24→0 on page enter
- 0.35 second duration
- Works correctly across all routes

---

### HOME PAGE (`/`)

#### `Hero.tsx`
- Full-width hero section
- Main headline: "Your inventory, counted. Every shift, automatically"
- Sub-headline: descriptive tagline
- CTA button: "See How It Works" → links to /product
- 4 floating stat pills (right side, desktop only):
  - Items tracked today: 2,847 units (Live)
  - Food waste prevented (30 days): $4,320 saved (−38% vs prior)
  - Last inventory count: 4 seconds ago (Automatic)
  - Manual hours eliminated: 14 hrs (Avg. per location)
- **MISSING**: Background image or visual behind hero text
- **MISSING**: Hero carousel / rotating messages
- **MISSING**: Any actual product photography or mockup
- **MISSING**: Video embed or animation showing the product in action
- **MISSING**: Secondary CTA ("Request Demo" or "Watch Demo")

#### `PartnerLogos.tsx`
- Infinite horizontal marquee
- 9 logos: Crack Rice, Sakura Japan, Black Burger, Los Tacos Hermanos, Poke Bowl, Hatchery, Goizueta Business School, Tacos Barios, ATV
- Hover: scale up, brightness + de-grayscale
- Pause on hover
- **MISSING**: Section heading ("Trusted by" or "Our Partners")
- **MISSING**: More partner logos as Veratori grows

#### `BeforeAfter.tsx`
- Two-column comparison grid
- Left column (Manual/red): 90 min/shift, high error rate, 5-min accuracy, no intra-day data
- Right column (Veratori/green): 0 min, 99.2% accuracy, live dashboard, instant alerts, 12 hrs/wk saved
- **MISSING**: Real photos showing before/after (messy manual vs. clean digital)
- **MISSING**: Customer quote or testimonial tied to this section

#### `KeyCapabilities.tsx`
- 3 cards with icons:
  1. Automatic Stock Tracking (Eye icon)
  2. Manager Digest (AlarmClock icon)
  3. Anomaly Alerts (BellRing icon)
- Scroll-triggered fade-in
- **MISSING**: Visual media per capability
- **MISSING**: "Learn More" links per capability

---

### PRODUCT PAGE (`/product`)

- Hardware specs section
- 3-step setup timeline
- Capabilities list
- `HardwareIntegrationViz.tsx` — SVG architecture diagram
- `RLTrainer.tsx` — Interactive RL training game
- `YOLODemo.tsx` — Live webcam YOLO detection

#### `HardwareIntegrationViz.tsx`
- SVG diagram showing hardware modules
- Components: RGB cameras (2x), PIR sensor, Jetson edge, power supply, WiFi 6E/LTE, local storage
- Animated pulsing dots on each module
- Label: "ADAPTIVE VISION ARCHITECTURE"
- **MISSING**: Real product photography
- **MISSING**: Physical dimensions / weight specs
- **MISSING**: Installation photos

#### `RLTrainer.tsx`
- Interactive reinforcement learning simulator
- 10 pokebowl training images
- User labels each image (correct/incorrect detection)
- Phases: intro → training → feedback → results
- YOLO overlay with animated detection boxes
- Score: Accuracy %, Total Reward, Final Loss, MSE
- Letter grade (A–S) on completion
- **STATUS**: Functional, TypeScript fixed

#### `YOLODemo.tsx`
- Accesses user webcam
- TensorFlow COCO-SSD model
- Draws bounding boxes with confidence scores
- Detection info cards
- **MISSING**: Fallback video if camera denied
- **MISSING**: Pre-recorded demo video for users without webcam

---

### ABOUT PAGE (`/about`)

- Company story / origin narrative
- Team grid: 6 members with photos
  - Felipe Cardozo (CEO)
  - Eduardo Lapa
  - Leonardo Affonso
  - Daniel Gambacorta
  - Justin Meneses
  - Milad Khezrefaridi
- Roadmap: 6 milestone timeline
- US Map visualization (Austin, Atlanta, NYC hubs)
- Hiring CTA section
- **MISSING**: Company founding story told with media (photos of early days)
- **MISSING**: Advisor or board member section
- **MISSING**: Press mentions or media coverage section
- **MISSING**: Company values section with icons
- **MISSING**: Expanded team bios (click to expand or dedicated modal)

---

### MISSION/IMPACT PAGE (`/mission`)

Contains multiple major components:

#### `DataFlowSection.tsx`
- 4 KPI stat cards at top
- Interactive pipeline diagram (camera → edge → cloud → dashboard)
- Terminal-style dataset preview table
- Alert examples (restock + morning digest)
- 6 value proposition cards
- ATV partnership badge (recently added)
- Bottom CTA bar
- **MISSING**: Real screenshots of the dashboard
- **MISSING**: Customer story / case study tied to the data

#### `ROICalculator.tsx`
- 6 sliders: Revenue, Food Cost %, Waste %, Locations, Labor Hours, Labor Rate
- 4 live KPI boxes
- 3 chart types (Area, Bar, Line)
- 12-month net savings summary bar
- **STATUS**: Complete and functional

- Research section: paper card for "Volumetric Inventory Analysis via LiDAR Depth Sensing"
  - 3D tilt hover (recently fixed/restored)
  - Green line animation toward FileText icon
  - Glow and shine effects
  - Links to PDF download
- **MISSING**: More research papers as they get published
- **MISSING**: Environmental impact section (carbon/food waste global stats)
- **MISSING**: Case study section with real client results

---

### PRICING PAGE (`/pricing`)

- Hero area with "Beta Access" framing
- $359/month per unit pricing card
- Feature list per tier
- `OrderForm.tsx` component
- FAQ accordion (4 questions)
- **MISSING**: Comparison table (Free / Starter / Enterprise)
- **MISSING**: Annual vs. Monthly toggle
- **MISSING**: FAQ "link" in footer (removed per user request)

#### `OrderForm.tsx`
- Unit counter (+/−)
- Monthly total display
- 3 payment buttons: Stripe, PayPal, Phantom Wallet
- Brand logos on each button (recently fixed)
- Hover shimmer + arrow animation (recently added)
- Login modal (Google + Email/Password tabs)
- SSL/SOC2 security badges
- **BUG**: Stripe button missing "Credit Card (Stripe)" text label (known)
- **MISSING**: Actual Stripe checkout integration
- **MISSING**: Real Google OAuth (currently UI-only)
- **MISSING**: Order confirmation state / success screen

---

### CONTACT PAGE (`/contact`)

- Contact form (Web3Forms integrated)
- Fields: Name, Email, Message
- Contact info: Austin HQ address
- "What to expect" section
- Response time expectations
- **MISSING**: Office photos
- **MISSING**: Calendar embed for scheduling a demo
- **MISSING**: Map embed
- **MISSING**: Support email separate from sales email

---

### LEGAL PAGE (`/legal`)

- 13 sections of terms
- Table of contents with anchor links
- Company info: Veratori Inc., Austin TX
- **STATUS**: Content complete, no known issues

---

## 3. NAVIGATION STRUCTURE

### Current Header Nav (6 items — flat, no dropdowns)
```
Home | Product | About | Impact | Pricing | Contact
```

### Current Footer Nav (5 columns)
```
Product         About           Impact          Pricing         Company
─────────       ─────────       ─────────       ─────────       ─────────
Overview        Our Story       Our Mission     Plans           Contact
How It Works    The Team        Op. Principles  Order Beta      Legal Rights
Key Capab.      Scale & Exp.    Research
Pricing
```

### What's Missing in Nav
- No mega-menu dropdowns with rich hover content
- No "Resources" section (blog, whitepapers, docs)
- No "Press / Media" quick link
- No investor-facing link
- No language/region selector (future need)
- No search functionality
- No "Get a Demo" CTA button in the navbar itself

---

## 4. ASSETS & MEDIA INVENTORY

### Brand Logos
| File | Use Case | Status |
|------|----------|--------|
| Logo_dark.png | Dark backgrounds | Available |
| Logo_dark_nobg.png | Dark, transparent | Available |
| Logo_name_dark-nobg.png | With wordmark, dark | Available |
| Logo_name_dark.png | With wordmark | Available |
| Logo_name_light_nobg.png | With wordmark, light | Available |
| Logo_name_white.png | White version | Available |
| Logo_white.png | White icon | Available |
| Logo_white_nobg.png | White, transparent | Available |

### Hero Images (Page Banners)
| File | Page | Status |
|------|------|--------|
| about-hero.png | About | Available |
| mission-hero.png | Mission | Available |
| pricing-hero.png | Pricing | Available |
| product-hero.png | Product | Available |
| **home-hero.png** | **Home** | **MISSING** |
| **contact-hero.png** | **Contact** | **MISSING** |

### Client Logos
| Client | File | Quality |
|--------|------|---------|
| Crack Rice | crack-rice-nobg.png | Available |
| Sakura Japan | sakura-japan-nobg.png | Available |
| Black Burger | black-burger-nobg.png | Available |
| Los Tacos Hermanos | los-tacos-hermanos-nobg.png | Available |
| Poke Bowl | poke-bowl-nobg.png | Available |
| Hatchery | Hatchery no BG.png | Available |
| Goizueta Business School | Goizueta no BG.png | Available |
| Tacos Barios | Tacos Barios-nobg.png | Available |
| Atlanta Tech Village | ATV-nobg.png | Available |

### Team Photos
| Team Member | File | Status |
|-------------|------|--------|
| Felipe Cardozo | Felipe-Cardozo.jpeg | Available |
| Eduardo Lapa | Eduardo_Lapa.png | Available |
| Leonardo Affonso | LeonardoAffonso.png | Available |
| Daniel Gambacorta | daniel-gambacorta.png | Available |
| Justin Meneses | justin-meneses.jpeg | Available |
| Milad Khezrefaridi | milad-khezrefaridi.png | Available |

### Product Media
| Asset | Status | Notes |
|-------|--------|-------|
| RL Training Images (10x) | Available | Pokebowl cooler images |
| Hardware Product Photo | **MISSING** | No photo of actual hardware unit |
| Dashboard Screenshot | **MISSING** | Need UI screenshot |
| Installation Photo | **MISSING** | Real-world install |
| Comparison before.png | Available | Manual method visual |
| Comparison after.png | Available | Veratori digital visual |
| LiDAR whitepaper PDF | Available | public/documents/lidar-paper.pdf |

### CRITICAL MISSING MEDIA
- Product hero image for home page
- Real hardware photography (the physical unit)
- Dashboard/app UI screenshots
- Any video content (demo, explainer, testimonial)
- Office or team in action photos
- Charts/graphs showing waste reduction results
- Any press/media coverage screenshots

---

## 5. COLORS & DESIGN SYSTEM

### Brand Colors
| Variable | Hex | Use |
|----------|-----|-----|
| `--color-midnight` | `#0B1526` | Primary dark background |
| `--color-sage` | `#5B974F` | Primary brand green |
| `--color-sage-light` | `#6eaf61` | Lighter green (hover states) |
| `--color-sage-dark` | `#487a3d` | Darker green (active) |
| `--color-electric` | `#2640CE` | Secondary blue / accents |
| `--color-sky` | `#ABCBE1` | Light blue tones |
| `--color-mist` | `#F2F6F9` | Light mode background |

### Typography
- Font: System default (no custom font declared in globals.css)
- **MISSING**: Custom font pair (e.g., Inter + Space Grotesk)
- Heading sizes: Tailwind defaults (text-4xl, text-5xl, etc.)
- Responsive scaling uses `clamp()` in some components

### Component Patterns
- Cards: rounded-2xl, border, backdrop-blur, bg with opacity
- Buttons: rounded-full or rounded-xl, hover:scale, active:scale-down
- Sections: max-w-7xl mx-auto, px-6, py-20 standard padding
- Dividers: subtle border-b or gradient lines

---

## 6. INTERACTIVE FEATURES & ANIMATIONS

### Framer Motion Features Active
- Page transitions on every route change
- Scroll-triggered reveals (`whileInView` with `once: true`)
- Hover scale/lift effects on cards
- Stagger children animations
- Spring physics (stiffness: 200–300, damping: 20–30)
- 3D tilt on paper card (`rotateX`, `rotateY`)
- SVG path drawing animations
- Pulsing live indicators
- Marquee infinite scroll (CSS `@keyframes marquee`)
- Shimmer sweep on payment buttons

### Interactive UI Elements
| Element | Component | Status |
|---------|-----------|--------|
| Dark/Light toggle | Header | Working |
| Mobile hamburger menu | Header | Working |
| ROI Calculator sliders | ROICalculator | Working |
| Chart tab switching | ROICalculator | Working |
| RL Training game | RLTrainer | Working |
| Live webcam YOLO | YOLODemo | Working |
| Pipeline diagram accordion | DataFlowSection | Working |
| Research paper modal | mission/page.tsx | Working |
| FAQ accordion | pricing/page.tsx | Working |
| Order unit counter | OrderForm | Working |
| Login modal | OrderForm | Working (UI only) |
| Payment buttons | OrderForm | Working (UI only) |

---

## 7. FORMS & INTEGRATIONS

### Contact Form
- Provider: Web3Forms
- Fields: Name, Email, Message
- API key: configured in contact/page.tsx
- Status: Functional

### Order / Payment Form
| Integration | Status | Notes |
|-------------|--------|-------|
| Stripe | UI Only | No real checkout flow |
| PayPal | UI Only | No real SDK integration |
| Phantom Wallet | UI Only | No real wallet connect |
| Google OAuth | UI Only | No NextAuth or Firebase |
| Email Login | UI Only | No backend auth |

---

## 8. MISSING CONTENT — WHAT WE DON'T HAVE YET

### High Priority Missing Items
1. **Home page hero background image** — The most seen image on the site
2. **Product photography** — Physical hardware unit photo
3. **Dashboard screenshots** — What the manager interface looks like
4. **Hero carousel** — Rotating featured stories on home page
5. **Video demo or explainer** — Even a 30-second clip
6. **Case study with real numbers** — "Client X saved $Y in Z weeks"
7. **Mega-menu navigation** — TSMC-style hover dropdowns
8. **Blog / News section** — Company updates, research updates
9. **Press / Media page** — Any coverage, awards, mentions
10. **Demo scheduling** — Calendly embed or similar

### Medium Priority Missing Items
11. **Custom font** — Inter or Space Grotesk pairing
12. **Environmental impact stats** — Global food waste context
13. **Testimonial carousel** — Rotating client quotes
14. **Annual report / investor page** — For credibility
15. **Open positions page** — Currently just a CTA, no actual jobs listed
16. **Resources / Documentation page** — API docs, setup guide
17. **System status page** — uptime.veratori.com style
18. **Cookie consent banner** — Required for EU compliance
19. **404 page** — Custom, branded error page
20. **Search functionality** — Site-wide search bar

### Minor Missing Items
21. Contact page map embed
22. Team LinkedIn links on team cards
23. Patent / IP mentions on research page
24. Social meta tags (OG image, Twitter card)
25. Sitemap.xml
26. robots.txt
27. Favicon in multiple sizes (Apple touch icon, etc.)
28. PWA manifest

---

## 9. KNOWN BUGS & INCOMPLETE ITEMS

| Issue | File | Priority |
|-------|------|----------|
| Stripe button missing "Credit Card (Stripe)" text | OrderForm.tsx | HIGH |
| Green line on paper card doesn't travel to FileText icon | mission/page.tsx | HIGH |
| 3D tilt (rotateX/Y) not rendering — perspective on wrong element | mission/page.tsx | HIGH |
| FAQ removed from footer but link may still exist in code | Footer.tsx | MEDIUM |
| No Stripe real checkout flow | OrderForm.tsx | HIGH |
| No Google OAuth — login is UI placeholder | OrderForm.tsx | HIGH |
| YOLODemo has no fallback for camera-denied users | YOLODemo.tsx | MEDIUM |
| No custom 404 page | Missing file | LOW |
| No OG / social meta tags | layout.tsx | MEDIUM |

---

## 10. THIRD-PARTY DEPENDENCIES

### Frontend Framework
| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 16.1.6 | React framework |
| React | 19.2.4 | UI library |
| TypeScript | Latest | Type safety |
| Tailwind CSS | 4.1.18 | Styling utility classes |

### Animation & UI
| Package | Version | Purpose |
|---------|---------|---------|
| Framer Motion | 12.34.0 | All animations |
| Lucide React | 0.563.0 | Icon library |
| Recharts | 3.8.1 | Charts in ROI calculator |
| react-is | Latest | Required by Recharts |

### Machine Learning
| Package | Version | Purpose |
|---------|---------|---------|
| TensorFlow.js | 4.22.0 | ML model runtime |
| COCO-SSD | 2.2.3 | Object detection model |

### 3D & Visualization
| Package | Version | Purpose |
|---------|---------|---------|
| Three.js | 0.182.0 | 3D graphics (future use) |

### Theme
| Package | Version | Purpose |
|---------|---------|---------|
| Next Themes | 0.4.6 | Dark/light mode management |

---

*Document End — Veratori Site Inventory v1.0*
