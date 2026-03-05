# Veratori Website

A modern, production-ready marketing website for Veratori, built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, and Three.js.

## Tech Stack

- **Next.js 16** (App Router, Turbopack) - React framework with file-based routing
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling with `@theme` tokens
- **Framer Motion** - Scroll-triggered animations, page transitions, micro-interactions
- **Three.js / React Three Fiber** - Interactive 3D warehouse visualization
- **TensorFlow.js + COCO-SSD** - Real-time browser-based object detection demo

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/        # About Us page
│   │   ├── contact/      # Contact page
│   │   ├── mission/      # Mission page
│   │   ├── pricing/      # Pricing page
│   │   ├── product/      # Product page
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   └── components/
│       ├── layout/       # Layout components (Header, Footer, PageTransition)
│       ├── ui/           # Reusable UI components (ThemeProvider, SectionHeading, InfiniteMarquee)
│       └── features/     # Feature-specific components (ObjectDetection, Warehouse3D)
├── public/
│   └── images/           # Static assets
│       ├── clients/      # Client logos
│       ├── logo/         # Veratori logo
│       └── team/         # Team member photos
├── package.json          # Dependencies and scripts
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── postcss.config.mjs    # PostCSS configuration
```

## Brand Palette

- **Deep Midnight** `#0E1526` — primary dark base
- **Sage Operation** `#5F974F` — ethical green
- **Electric Blue** `#2640CE` — action/alerts
- **Sky Tint** `#ABCEE1` — light accents
- **Mist** `#F2F6F9` — cool white background

## Pages

| Route      | Description                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| `/`        | Home — Hero with video, feature teasers, stats, scrollytelling, testimonial marquee                      |
| `/product` | Product — Screenshot carousel, detailed features, 3D warehouse, AI object detection demo, dashboard mock |
| `/about`   | About Us — Company story, timeline, values cards, team grid                                              |
| `/mission` | Mission — Company mission, values, impact stories                                                         |
| `/pricing` | Pricing — Pricing tiers and plans                                                                        |
| `/contact` | Contact — Contact form and information                                                                   |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will run on `http://localhost:3002` (configured in package.json).

## Development

### Component Organization

- **Layout Components** (`src/components/layout/`) - Components that define page structure (Header, Footer, PageTransition)
- **UI Components** (`src/components/ui/`) - Reusable UI elements (ThemeProvider, SectionHeading, InfiniteMarquee)
- **Feature Components** (`src/components/features/`) - Feature-specific components (ObjectDetection, Warehouse3D)

### Styling

The project uses Tailwind CSS v4 with custom theme tokens defined in `src/app/globals.css`. The brand palette is available as CSS variables and Tailwind utilities.

### Animations

Framer Motion is used throughout for scroll-triggered animations, page transitions, and micro-interactions. Components use `useScroll`, `useTransform`, and `useInView` hooks for performance-optimized animations.

## License

MIT
