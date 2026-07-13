<div align="center">

# ⚡ MotionSites.ai — AI Prompt Library

### The largest open-source collection of production-ready AI web design prompts

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/nomaan5541/motionsites-prompt-collection?style=social)](https://github.com/nomaan5541/motionsites-prompt-collection/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/nomaan5541/motionsites-prompt-collection?style=social)](https://github.com/nomaan5541/motionsites-prompt-collection/network/members)
[![Open Issues](https://img.shields.io/github/issues/nomaan5541/motionsites-prompt-collection)](https://github.com/nomaan5541/motionsites-prompt-collection/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**166+ free, production-ready AI prompts** that generate stunning landing pages, hero sections, and web components. Copy a prompt → Paste into your AI tool → Get a pixel-perfect design in seconds.

[🌐 **Browse the Live Library**](https://motionsitesai-main.vercel.app/) · [⭐ **Star this repo**](#-support-this-project) · [🤝 **Contribute**](CONTRIBUTING.md) · [📄 **License**](LICENSE)

</div>

---

## 🚀 Overview

**MotionSites.ai** is a curated prompt collection designed for modern AI developer platforms (such as **Bolt.new**, **v0.dev**, **GPT-Engineer**, and **Lovable.dev**). Standard AI models often struggle to generate premium web interfaces with advanced motion design. This library solves this problem by providing highly detailed, pre-engineered layout and animation blueprints.

Each prompt in this library acts as an elite frontend specification, guiding AI generators to build stunning web interfaces utilizing modern typography, HSL tailored colors, responsive structures, and advanced motion libraries (Framer Motion and GSAP).

---

## ✨ Key Features

- 🎨 **166+ Unique Designs**: Browse through a curated catalog of landing pages, hero sections, custom cards, SaaS dashboards, portfolios, and more.
- 🖼️ **Vibrant Visual Previews**: The web gallery uses actual `.webp` screenshots fetched dynamically from DigitalOcean Spaces CDN to show you the expected design output.
- 📋 **One-Click Instant Copy**: Click **"📋 Copy Prompt"** on the website to immediately copy the entire system prompt code.
- 🎥 **Hover Video Autoplay**: Hovering over card visuals plays preview video loops instantly. Mouseleave events immediately pause playback to optimize CPU usage.
- 🤖 **AI-Ready Layouts**: Prompts are optimized to work out-of-the-box with **v0**, **Bolt.new**, **Claude 3.5 Sonnet**, and **Lovable**.
- 🆓 **100% Free & Open Source**: Released under the MIT license, available for commercial and personal usage.

---

## 📂 Detailed Categories Directory

The library covers a wide range of categories, from full page templates to specific high-fidelity UI sections:

### Full Templates
- 💼 **SaaS** (25+ items): Modern software-as-a-service layouts, dashboard designs, and feature matrices.
- 🏢 **Agency** (10+ items): Creative agency pages, studio portfolios, and interactive showrooms.
- 🖼️ **Portfolio** (6+ items): Elegant, minimalist personal sites for designers, developers, and writers.
- 💰 **Fintech** (5+ items): High-contrast finance platforms, currency dashboards, and transaction grids.
- 🌐 **Web3** (3+ items): Immersive DeFi interfaces, NFT galleries, and blockchain dashboards.
- 🛒 **E-commerce** (2+ items): Modern digital storefronts, clean product showcase pages, and grids.

### UI Sections & Components
- ⚡ **Hero Sections**: Stunning landing folds featuring cinematic backgrounds, animated badges, and glowing typography.
- 🏷️ **Pricing Tables**: Brutalist, glassmorphism, and neon pricing cards with monthly/yearly toggles.
- ⚙️ **Features Sections**: Grid layouts, horizontal scroll timelines, dynamic sliders, and hover-triggered details.
- 🗣️ **Testimonials**: Dual marquee carousels, swing layouts, and star-rating grids.
- 📑 **Footers**: Creative parallax footers, orbit menus, and glassmorphic quick-link maps.
- ❓ **FAQ Accordions**: Clean dark-mode accordions with smooth spring transitions.

---

## 🛠️ The Tech Stack Generated

Each prompt is engineered to enforce code generation on a high-fidelity stack:

1. **React.js**: Directs the AI to build reusable component structures, responsive state hooks, and optimized layout loops.
2. **Tailwind CSS**: Commands precise utility classes, CSS grid structures, flex layouts, border overlays, glassmorphic filters, and tailored HSL color tokens.
3. **Framer Motion**: Enforces physics-based spring animations, layout transitions, exit animations, click gestures, drag items, and scroll-linked fade-in triggers.
4. **GSAP & ScrollTrigger**: Guides complex timeline orchestration, text split effects, and horizontal scroll layouts.
5. **Lucide React**: Integrates clean, modern iconography automatically.

---

## 🎯 How to Use

### Option 1: Live Interactive Library (Recommended)
1. Navigate to **[motionsitesai-main.vercel.app](https://motionsitesai-main.vercel.app/)**.
2. Filter by category (e.g., *SaaS, Portfolio, Fintech*) or search for designs.
3. Click the **"Code"** button to view the prompt description.
4. Click **"📋 Copy Prompt"** to copy the full specification.
5. Paste it directly into your AI generator (e.g., Bolt.new or v0.dev) and run the generation.

### Option 2: Local CLI Tool
To browse and retrieve prompt names directly from your local terminal workspace:

```bash
# List all Pro and Free prompts available in the project
npx templateprompts list

# Display helper information
npx templateprompts help
```

---

## 🧑‍💻 How the Prompts Are Engineered

Every `.md` file inside the [prompts/](file:///f:/motionsites.ai-main/prompts/) directory is structured with YAML frontmatter metadata at the top:

```markdown
---
title: "Luxury Real Estate"
category: Templates
subCategory: Real-estate
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1780826949672-Luxonn.webp
---

# Luxury Real Estate
```

The system prompt follows a strict schema to prevent AI models from generating basic, unstyled pages:
- **Role Definition**: e.g., *"Act as an award-winning Creative Director and Elite Frontend Architect..."*
- **Visual Design Rules**: Specifying a dark-mode background (`bg-[#030305]`), specific HSL typography contrast values, neon highlights, and absolute border variables.
- **Interactions & Motion**: Demanding exact Framer Motion animation properties (e.g., `transition: { type: "spring", stiffness: 100, damping: 20 }`).
- **Dummy Data & Copywriting**: Enforcing premium, realistic mock copywriting instead of lazy `Lorem Ipsum` placeholders.

---

## 🤝 Contributing

We love contributions! If you have a beautiful design prompt or want to submit an improvement:

1. **Fork** the repository.
2. Create a new design prompt file under `/prompts/` (or `/Pro prompts/`) with the appropriate metadata.
3. Register your new card in the `demos` list array inside `index.html`.
4. Create a stub folder under `/demos/<Your_Design_Name>/index.html` referencing your prompt.
5. Open a **Pull Request** explaining your prompt design style.

Please review our [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details.

---

## ⚖️ Legal Disclaimer

- **Trademark & Brands**: All company names, logos, brand specifications, and UI layouts featured in these prompts are entirely fictional. Any resemblance to real brands is coincidental.
- **Licensing**: All code and prompts are distributed under the [MIT License](LICENSE). You are free to modify, integrate, sell, or distribute the generated designs for personal or commercial projects.

---

## 🔗 Connect

- **Live Website**: [motionsitesai-main.vercel.app](https://motionsitesai-main.vercel.app/)
- **GitHub profile**: [@nomaan5541](https://github.com/nomaan5541)
- **Instagram Direct**: [@Virus_boss](https://instagram.com/Virus_boss)

---

<div align="center">

### Designed and Built by [Nomaan Khan](https://github.com/nomaan5541)

If you find this project useful, please consider giving it a ⭐ star!

</div>
