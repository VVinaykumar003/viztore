# Viztore — Landing Page

A premium SaaS landing page for **Viztore**, built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, DaisyUI, Framer Motion and Lucide React.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Build for production

```bash
npm run build
npm start
```

> Note: `npm run build` requires internet access on first build so Next.js
> can fetch the Poppins font from Google Fonts (via `next/font/google`). This
> is normal and only needs to happen once per machine/CI cache.

## Pages

The site is now a multi-page Next.js App Router site. The navbar and footer
link to dedicated routes instead of same-page anchors:

```
/               — Home
/for-retailers  — For Retailers
/for-customers  — For Customers
/platform       — Platform
/about-us       — About Us
```

Each route follows a `page.tsx` (Server Component, holds SEO `metadata`) +
`PageContent.tsx` (Client Component, holds the actual sections/animations)
pattern, so icon components can be used freely without server/client
prop-serialization issues.

## Project Structure

```
app/
  layout.tsx           — root layout, Poppins font, SEO metadata
  page.tsx             — assembles all homepage sections
  globals.css          — Tailwind base + design-system utility classes
  for-retailers/
    page.tsx           — metadata + renders PageContent
    PageContent.tsx    — hero, benefits, how-it-works, features, supplier
                          network, retail types, why-retailers-choose-us
  for-customers/
    page.tsx / PageContent.tsx — hero, why-shop, categories, how-it-works,
                          local+global search, download-app CTA
  platform/
    page.tsx / PageContent.tsx — hero, ecosystem, 4 pillars, highlights,
                          search flow, business types, integrations, CTA
  about-us/
    page.tsx / PageContent.tsx — hero, story, belief, values, why-we-started,
                          what-we're-building, roadmap, why-it-matters, CTA

components/
  layout/
    Navbar.tsx        — sticky navbar; swaps lightLogo.png / darkLogo.png on
                         scroll; links point to dedicated pages
    Footer.tsx         — dark navy footer; links point to dedicated pages

  ui/
    Button.tsx          — primary / secondary / secondary-dark button
    SectionHeading.tsx  — eyebrow + heading + description
    FeatureCard.tsx      — icon + title + description card with hover glow
    TimelineCard.tsx     — numbered step card for How It Works
    CategoryCard.tsx     — retail category card with hover lift
    GlassCard.tsx        — floating glassmorphism card (used in hero mockups)

  home/
    Hero.tsx              — two-column hero; bannerImage.png (desktop) /
                             mobileImage.png (mobile) from public/images
    TrustedBrands.tsx     — infinite scrolling logo/brand marquee
    ProblemSection.tsx    — 3-column problem / insight / pain-points layout
    HowItWorks.tsx         — 5-step animated timeline
    Features.tsx            — feature list + dashboard mockup + supplier cards
    RetailCategories.tsx    — responsive category grid (10 categories)
    CustomerSection.tsx     — dark customer-app section with store badges
    WhyChooseUs.tsx          — 6 feature cards
    CTASection.tsx            — final gradient call-to-action

public/
  images/
    lightLogo.png     — light/white-styled logo, shown on transparent navbar
    darkLogo.png       — dark navy logo, shown once navbar is scrolled
    bannerImage.png     — desktop hero illustration (Home hero, lg+ screens)
    mobileImage.png      — mobile hero illustration (Home hero, small screens)
  icons/    — add custom SVG icons here
```

> The logo and hero images shipped in `public/images` are placeholders —
> swap in your real brand assets using the same filenames and the app will
> pick them up automatically.

## Design System

Colors, typography and the `viztore` DaisyUI theme are defined in
`tailwind.config.ts` and `app/globals.css`, matching the Viztore brand spec
(Primary Blue `#2563EB`, Dark Navy `#0B1F4D`, Accent Yellow `#FBBF24`, Poppins
typeface).

## Notes

- All sections are built as independent, reusable components — swap content,
  copy or imagery without touching layout logic.
- Motion is powered by Framer Motion with scroll-triggered reveals, hover
  lifts, glow effects and floating animations, kept subtle per the brief.
- Fully responsive from 320px up to large desktop/2K screens.
- Replace the placeholder gradient blocks (hero phone screen, dashboard
  mockup, category icons) with real product screenshots in `public/images`
  when available.
