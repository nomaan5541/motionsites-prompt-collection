import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const outFile = path.join(rootDir, 'README.md');

import('../src/data/prompts.generated.ts').then(mod => {
  const items = mod.catalogItems;

  const superdesign = items.filter(i => i.category === 'Superdesign Canvas');
  const horizonx = items.filter(i => i.category === 'HorizonX Library');
  const dev21 = items.filter(i => i.category === '21st.dev Registry');
  const landingPages = items.filter(i => i.category === 'Landing Pages');
  const saas = items.filter(i => i.category === 'SaaS');
  const agency = items.filter(i => i.category === 'Agency');
  const hero = items.filter(i => i.category === 'Hero Sections');
  const others = items.filter(i => !['Superdesign Canvas', 'HorizonX Library', '21st.dev Registry', 'Landing Pages', 'SaaS', 'Agency', 'Hero Sections'].includes(i.category));

  // Recovered / New MotionSites specific prompts list
  const recoveredList = [
    { title: 'Retro Futurist', id: 'retro-futurist', cat: 'Landing Pages', folder: 'motionsites-prompts/360-retro-futurist' },
    { title: 'Layered Depth', id: 'layered-depth', cat: 'Landing Pages', folder: 'motionsites-prompts/233-layered-depth' },
    { title: 'Ember Dsgn Hero', id: 'ember-dsgn-hero', cat: 'Landing Pages', folder: 'motionsites-prompts/147-ember-dsgn-hero' },
    { title: 'FAQ CTA', id: 'faq-cta', cat: 'CTA', folder: 'motionsites-prompts/158-faq-cta' },
    { title: 'Guardnet Landing', id: 'guardnet-landing', cat: 'Landing Pages', folder: 'motionsites-prompts/200-guardnet-landing' },
    { title: 'F1 Racing Hub', id: 'f1-racing-hub', cat: 'Mobile App', folder: 'motionsites-prompts/ms-f1-racing-hub' },
    { title: 'AI Workflow Agents', id: 'ai-workflow-agents', cat: 'AI', folder: 'motionsites-prompts/ms-ai-workflow-agents' },
    { title: 'NeoVision', id: 'neo-vision', cat: 'Landing Pages', folder: 'motionsites-prompts/ms-neo-vision' },
    { title: 'Sky Elite Private Jets', id: 'sky-elite-private-jets', cat: 'Travel', folder: 'motionsites-prompts/ms-sky-elite-private-jets' },
    { title: 'Church Community', id: 'church-community', cat: 'Community', folder: 'motionsites-prompts/ms-church-community' },
    { title: 'Innovation Lab', id: 'innovation-lab', cat: 'Technology', folder: 'motionsites-prompts/ms-innovation-lab' },
    { title: 'Mind Body Healing', id: 'mind-body-healing', cat: 'Healthcare', folder: 'motionsites-prompts/ms-mind-body-healing' },
    { title: 'Wellness Device', id: 'wellness-device', cat: 'Healthcare', folder: 'motionsites-prompts/ms-wellness-device' },
    { title: 'Club X Investors', id: 'club-x-investors', cat: 'Fintech', folder: 'motionsites-prompts/ms-club-x-investors' },
    { title: 'Design Pro Academy', id: 'design-pro-academy', cat: 'Education', folder: 'motionsites-prompts/ms-design-pro-academy' },
    { title: 'Fun 404 Page', id: 'fun-404-page', cat: '404', folder: 'motionsites-prompts/ms-fun-404-page' }
  ];

  let md = `<div align="center">

# ⚡ MotionSites Prompts Collection

### The absolute largest open-source collection of production-ready, hyper-fidelity AI web design prompts — **${items.length} prompts (Zero Duplicates).**

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/nomaan5541/motionsites-prompt-collection?style=social)](https://github.com/nomaan5541/motionsites-prompt-collection/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/nomaan5541/motionsites-prompt-collection?style=social)](https://github.com/nomaan5541/motionsites-prompt-collection/network/members)
[![Open Issues](https://img.shields.io/github/issues/nomaan5541/motionsites-prompt-collection)](https://github.com/nomaan5541/motionsites-prompt-collection/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**${items.length} free, production-ready AI prompts** that generate stunning landing pages, hero sections, interactive 3D canvases, and modern web components. Copy a prompt → Paste into your AI tool (Claude Code, Cursor, Bolt.new, Lovable, v0) → Get a pixel-perfect design in seconds.

[🌐 **Browse the Live Library**](https://motionsitesai-main.vercel.app/) · [⭐ **Star this repo**](#-support-this-project) · [🤝 **Contribute**](CONTRIBUTING.md) · [📄 **License**](LICENSE)

</div>

---

## 💥 Newly Added Prompts & Latest Multi-Source Synchronization

> **Latest Sync Summary**: Added **144 SuperDesign vision-curated prompts**, recovered **100% of previously missing MotionSites prompts with full un-truncated texts**, added **660+ local high-resolution preview textures & videos**, and completed a full **zero-duplicate audit (813 verified unique prompts)**.

---

### 🌟 1. Recovered & New MotionSites Prompts (Full Original Text Restored)

| # | Prompt Title | Category | Folder Path |
|---|---|---|---|
${recoveredList.map((item, idx) => `| ${idx + 1} | **${item.title}** | ${item.cat} | [\`${item.folder}\`](${item.folder}) |`).join('\n')}

---

### 🎨 2. Newly Integrated SuperDesign Canvas Prompts (${superdesign.length} Prompts)

Curated React / Tailwind / Framer Motion prompt codes imported from [\`superdesigndev/superdesign-prompts\`](https://github.com/superdesigndev/superdesign-prompts) with local preview textures:

| # | Prompt Title | Category | Folder / Source |
|---|---|---|---|
${superdesign.map((item, idx) => `| ${idx + 1} | **${item.title.replace(/^\[Superdesign\]\s*/, '')}** | ${item.originalCategory || 'Superdesign Canvas'} | [\`${item.folder}\`](${item.folder}) |`).join('\n')}

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

## 🌌 HorizonX 3D & Vibecoding Prompts (${horizonx.length} Prompts)

| # | Prompt Title | Category | Folder / Source |
|---|---|---|---|
${horizonx.map((item, idx) => `| ${idx + 1} | **${item.title.replace(/^\[HorizonX\]\s*/, '')}** | HorizonX Library | [\`${item.folder}\`](${item.folder}) |`).join('\n')}

---

## 🧩 21st.dev Registry Component Prompts (${dev21.length} Prompts)

| # | Prompt Title | Category | Folder / Source |
|---|---|---|---|
${dev21.map((item, idx) => `| ${idx + 1} | **${item.title.replace(/^\[21st\.dev\]\s*/, '')}** | 21st.dev Registry | [\`${item.folder}\`](${item.folder}) |`).join('\n')}

---

## 🚀 MotionSites Core & Extended Landing Pages (${landingPages.length} Prompts)

| # | Prompt Title | Category | Folder / Source |
|---|---|---|---|
${landingPages.map((item, idx) => `| ${idx + 1} | **${item.title}** | Landing Pages | [\`${item.folder}\`](${item.folder}) |`).join('\n')}

---

## 💻 SaaS, Agency & Special Component Prompts (${saas.length + agency.length + hero.length + others.length} Prompts)

| # | Prompt Title | Category | Folder / Source |
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
├── motionsites-prompts/       # 813 Master prompt folders (metadata.json + prompt.md)
├── prompts/                   # Individual prompt markdown files
├── public/                    # Static assets served by Vite
│   └── assets/                # Web-accessible previews and textures
├── scripts/                   # Catalog generation & synchronization utilities
│   ├── build-catalog.mjs      # Compiles catalog data into TypeScript modules
│   ├── deduplicate_catalog.mjs# Zero-duplicate audit & validation engine
│   └── sync_external_sources.mjs # Synchronizes upstream prompt datasets
├── src/                       # React / Vite web application source code
│   ├── components/            # UI components (HomePage, SearchPage, MediaFrame, PromptModal)
│   └── data/                  # Generated catalog TypeScript data (813 items)
├── motionsites_all_prompts.json # Master structured JSON prompt dataset (813 unique records)
├── preview_mapping.json       # Mapped preview references for all 813 prompts
├── package.json               # Project scripts and dependencies
└── README.md                  # Complete documentation and prompt catalog
\`\`\`

---

## 📄 License & Fair Use Notice

This repository is distributed under the **MIT License**. All prompt texts are original community resources or open-source reconstructed design prompts for AI coding agents.
`;

  fs.writeFileSync(outFile, md, 'utf8');
  console.log('Successfully generated full README.md with all new prompts and categories!');
});
