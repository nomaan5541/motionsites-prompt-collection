import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const outFile = path.join(rootDir, 'README.md');

import('../src/data/prompts.generated.ts').then(mod => {
  const items = mod.catalogItems;
  const summary = mod.catalogSummary;

  // Group by collection / category
  const superdesign = items.filter(i => i.category === 'Superdesign Canvas');
  const horizonx = items.filter(i => i.category === 'HorizonX Library');
  const dev21 = items.filter(i => i.category === '21st.dev Registry');
  const landingPages = items.filter(i => i.category === 'Landing Pages');
  const saas = items.filter(i => i.category === 'SaaS');
  const agency = items.filter(i => i.category === 'Agency');
  const hero = items.filter(i => i.category === 'Hero Sections');
  const others = items.filter(i => !['Superdesign Canvas', 'HorizonX Library', '21st.dev Registry', 'Landing Pages', 'SaaS', 'Agency', 'Hero Sections'].includes(i.category));

  let md = `<div align="center">

# ⚡ MotionSites Prompts Collection

### The absolute largest open-source collection of production-ready, hyper-fidelity AI web design prompts — **${items.length} prompts and growing.**

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/nomaan5541/motionsites-prompt-collection?style=social)](https://github.com/nomaan5541/motionsites-prompt-collection/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/nomaan5541/motionsites-prompt-collection?style=social)](https://github.com/nomaan5541/motionsites-prompt-collection/network/members)
[![Open Issues](https://img.shields.io/github/issues/nomaan5541/motionsites-prompt-collection)](https://github.com/nomaan5541/motionsites-prompt-collection/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**${items.length} free, production-ready AI prompts** that generate stunning landing pages, hero sections, interactive 3D canvases, and modern web components. Copy a prompt → Paste into your AI tool (Claude Code, Cursor, Bolt.new, Lovable, v0) → Get a pixel-perfect design in seconds.

[🌐 **Browse the Live Library**](https://motionsitesai-main.vercel.app/) · [⭐ **Star this repo**](#-support-this-project) · [🤝 **Contribute**](CONTRIBUTING.md) · [📄 **License**](LICENSE)

</div>

---

## 💥 Recent Major Updates & Multi-Repository Synchronization

> **Latest Release Summary**: Massive multi-source repository sync (**${items.length} Total Prompts**), 100% missing prompt text recovery, integration of 140 vision-curated SuperDesign prompt specs with local preview textures, and offline-first media rendering.

### 🌟 1. Full Multi-Source Synchronization (${items.length} Prompts)
* 🟢 **Superdesign Canvas (${superdesign.length} Prompts)**: Integrated the complete 140 vision-curated design prompts from [\`superdesigndev/superdesign-prompts\`](https://github.com/superdesigndev/superdesign-prompts) featuring interactive 3D tubes background shaders, neon glow cursors, editorial waitlists, bento grids, skeuomorphic audio players, and SaaS calculators with local high-res \`.png\` and \`.mp4\` preview textures.
* 🟢 **100% Missing Prompts Recovered**: Restored complete, un-truncated original prompt texts for all 113 previously missing/partial prompts from \`zhaosenlin12-creator/MotionSites\` (\`retro-futurist\`, \`layered-depth\`, \`ember-dsgn-hero\`, \`faq-cta\`, \`guardnet-landing\`, \`f1-racing-hub\`, \`ai-workflow-agents\`, \`neo-vision\`, \`sky-elite-private-jets\`, etc.).
* 🟢 **HorizonX Library (${horizonx.length} Prompts)**: Senior-grade React, WebGL particle, & liquid hero prompts (*Morpho 3D Particle Butterfly*, *Aurel Liquid Hero*, *Hand Prosthesis Simulator*, *Digital Wave Field Hero*, etc.).
* 🟢 **21st.dev Registry (${dev21.length} Prompts)**: Component & template prompts across 75 categories with CLI installation anchors.
* 🟢 **MotionSites Core & Extended (${landingPages.length + saas.length + agency.length + hero.length + others.length} Prompts)**: Complete landing pages, pricing tables, hero sections, footers, CTAs, and SaaS dashboards.

### 💻 2. Local Preview Textures & Offline-First Media
* Over **660+ local media preview files** added to \`public/assets/previews/\`, \`public/assets/superdesign/\`, and \`public/assets/community/\`.
* High-performance instant rendering with animated video and image preview cards.
* Zero-duplication validation: each prompt has unique identification, normalized slug paths, and structured JSON metadata.

---

## 📊 Complete Prompt Catalog Breakdown (${items.length} Prompts)

| Collection / Category | Count | Primary Frameworks / Stack | Local Preview Assets |
| :--- | :--- | :--- | :--- |
| 🎨 **Superdesign Canvas** | **${superdesign.length}** | React, Three.js, Lucide, Tailwind, Framer Motion | \`public/assets/superdesign/*.png\` |
| 🌌 **HorizonX Library** | **${horizonx.length}** | WebGL, Three.js, Canvas 2D, Framer Motion | Mux Video & WebP Posters |
| 🧩 **21st.dev Registry** | **${dev21.length}** | React, Tailwind, shadcn/ui CLI | WebP & PNG Component Previews |
| 🚀 **Landing Pages** | **${landingPages.length}** | React, Next.js, Tailwind CSS, Framer Motion | High-Res WebP Previews & MP4 Loops |
| 💻 **SaaS Dashboards & Heroes** | **${saas.length}** | React, Tailwind CSS, Tremor, Lucide | High-Res WebP Previews & MP4 Loops |
| 🏢 **Agency Showcases** | **${agency.length}** | React, GSAP ScrollTrigger, Framer Motion | High-Res WebP Previews & MP4 Loops |
| 🎯 **Hero Sections** | **${hero.length}** | React, Tailwind CSS, Framer Motion | High-Res WebP Previews & MP4 Loops |
| ⚙️ **Specialized & Components (Pricing, Footers, CTA, etc.)** | **${others.length}** | React, Tailwind CSS, Lucide | WebP Previews & Gradients |

---

## 🎨 Superdesign Canvas Prompts (${superdesign.length} Prompts)

| # | Prompt Title | Category | ID / Folder |
|---|---|---|---|
${superdesign.map((item, idx) => `| ${idx + 1} | **${item.title.replace(/^\[Superdesign\]\s*/, '')}** | ${item.originalCategory || 'Superdesign Canvas'} | [\`${item.folder}\`](${item.folder}) |`).join('\n')}

---

## 🌌 HorizonX 3D & Vibecoding Prompts (${horizonx.length} Prompts)

| # | Prompt Title | Category | ID / Folder |
|---|---|---|---|
${horizonx.map((item, idx) => `| ${idx + 1} | **${item.title.replace(/^\[HorizonX\]\s*/, '')}** | HorizonX Library | [\`${item.folder}\`](${item.folder}) |`).join('\n')}

---

## 🧩 21st.dev Registry Component Prompts (${dev21.length} Prompts)

| # | Prompt Title | Category | ID / Folder |
|---|---|---|---|
${dev21.map((item, idx) => `| ${idx + 1} | **${item.title.replace(/^\[21st\.dev\]\s*/, '')}** | 21st.dev Registry | [\`${item.folder}\`](${item.folder}) |`).join('\n')}

---

## 🚀 MotionSites Core & Extended Landing Pages (${landingPages.length} Prompts)

| # | Prompt Title | Category | ID / Folder |
|---|---|---|---|
${landingPages.map((item, idx) => `| ${idx + 1} | **${item.title}** | Landing Pages | [\`${item.folder}\`](${item.folder}) |`).join('\n')}

---

## 💻 SaaS, Agency & Special Component Prompts (${saas.length + agency.length + hero.length + others.length} Prompts)

| # | Prompt Title | Category | ID / Folder |
|---|---|---|---|
${[...saas, ...agency, ...hero, ...others].map((item, idx) => `| ${idx + 1} | **${item.title}** | ${item.category} | [\`${item.folder}\`](${item.folder}) |`).join('\n')}

---

## 🚀 Running the Web Application Locally

The project includes an interactive React + Vite web application with instant search, category filters, and live previews:

\`\`\`bash
# 1. Install dependencies
npm install

# 2. Build the prompt catalog and verify types
npm run generate:catalog

# 3. Start local development server
npm run dev
\`\`\`

The web application will be live at:
👉 **\`http://localhost:5173/\`**

---

## 📂 Repository File Structure

\`\`\`text
motionsites-prompt-collection/
├── assets/                    # Media preview assets (images and videos)
│   ├── community/             # Community UI textures
│   ├── images/                # High-resolution image assets
│   ├── previews/              # WebP / MP4 preview loops
│   └── videos/                # Video clips
├── motionsites-prompts/       # 895 Master prompt folders (metadata.json + prompt.md)
├── prompts/                   # Individual prompt markdown files
├── public/                    # Static assets served by Vite
│   └── assets/                # Web-accessible previews and textures
├── scripts/                   # Catalog generation & synchronization utilities
│   ├── build-catalog.mjs      # Compiles catalog data into TypeScript modules
│   └── sync_external_sources.mjs # Synchronizes upstream prompt datasets
├── src/                       # React / Vite web application source code
│   ├── components/            # UI components (HomePage, SearchPage, MediaFrame, PromptModal)
│   └── data/                  # Generated catalog TypeScript data (895 items)
├── motionsites_all_prompts.json # Master structured JSON prompt dataset (512+ records)
├── preview_mapping.json       # Mapped preview references for all 895 prompts
├── package.json               # Project scripts and dependencies
└── README.md                  # Complete documentation and prompt catalog
\`\`\`

---

## 📄 License & Fair Use Notice

This repository is distributed under the **MIT License**. All prompt texts are original community resources or open-source reconstructed design prompts for AI coding agents.
`;

  fs.writeFileSync(outFile, md, 'utf8');
  console.log('Successfully generated full README.md with all', items.length, 'prompts!');
});
