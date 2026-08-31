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

  // Category navigation list with continuous start/end numbering
  let currentNum = 1;

  const categories = [
    { name: 'Superdesign Canvas (Curated UI & Shaders)', tag: 'superdesign-canvas', items: superdesign, icon: '🎨' },
    { name: 'HorizonX 3D & Vibecoding Library', tag: 'horizonx-library', items: horizonx, icon: '🌌' },
    { name: '21st.dev Component Registry', tag: '21stdev-registry', items: dev21, icon: '🧩' },
    { name: 'Full Landing Pages & Experiences', tag: 'landing-pages', items: landingPages, icon: '🚀' },
    { name: 'SaaS Platforms & Dashboards', tag: 'saas-dashboards', items: saas, icon: '💻' },
    { name: 'Agency & Studio Showcases', tag: 'agency-showcases', items: agency, icon: '🏢' },
    { name: 'High-Impact Hero Sections', tag: 'hero-sections', items: hero, icon: '🎯' },
    { name: 'Specialized UI, Pricing, Footers & CTAs', tag: 'specialized-components', items: others, icon: '⚙️' },
  ];

  const catMeta = categories.map(cat => {
    const start = currentNum;
    const end = currentNum + cat.items.length - 1;
    currentNum = end + 1;
    return { ...cat, start, end, count: cat.items.length };
  });

  let globalIndex = 1;

  let md = `<div align="center">

# ⚡ MotionSites Prompts Collection

### The definitive open-source library of production-ready AI web design prompts
### 💎 **${items.length} Curated Prompts (Continuous Global Index #1 to #${items.length} — Zero Duplicates)**

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/nomaan5541/motionsites-prompt-collection?style=social)](https://github.com/nomaan5541/motionsites-prompt-collection/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/nomaan5541/motionsites-prompt-collection?style=social)](https://github.com/nomaan5541/motionsites-prompt-collection/network/members)
[![Total Prompts](https://img.shields.io/badge/Prompts-${items.length}%20Verified-blueviolet.svg)](#quick-navigation-index-jump-to-category)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**${items.length} free, hyper-fidelity prompts** that generate modern landing pages, interactive 3D WebGL canvases, bento grids, and high-conversion UI components. Copy a prompt → Paste into your AI coding tool (Claude Code, Cursor, Bolt.new, Lovable, v0) → Ship pixel-perfect websites.

[🌐 **Browse Web App on Localhost**](http://localhost:5173/) · [⭐ **Star this repo**](#-support-this-project) · [🤝 **Contribute**](CONTRIBUTING.md) · [📄 **License**](LICENSE)

</div>

---

## 📑 <a id="quick-navigation-index-jump-to-category"></a>Quick Navigation Index (Jump to Category)

Click any category below to jump directly to its section in the continuous **#1 to #${items.length}** catalog:

| Category | Continuous Range | Total Count | Quick Jump Link |
| :--- | :---: | :---: | :--- |
${catMeta.map(c => `| ${c.icon} **${c.name}** | \`#${c.start}\` – \`#${c.end}\` | **${c.count}** prompts | [Jump to ${c.name}](#${c.tag}) |`).join('\n')}
| 🏆 **Total Library** | **\`#1\` – \`#${items.length}\`** | **${items.length} Prompts** | [View Full Master Catalog](#master-catalog) |

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

# 📚 <a id="master-catalog"></a>#1 to #${items.length} Complete Continuous Prompt Catalog

`;

  // Render each category with continuous numbering
  catMeta.forEach(cat => {
    md += `---

## <a id="${cat.tag}"></a>${cat.icon} ${cat.name} (\`#${cat.start}\` – \`#${cat.end}\`)

> **${cat.count} Prompts in this section** · [⬆️ Back to Category Index](#quick-navigation-index-jump-to-category)

| Global # | Prompt Title | Category / Stack | Folder Path |
| :---: | :--- | :--- | :--- |
`;

    cat.items.forEach(item => {
      const cleanTitle = item.title.replace(/^\[(Superdesign|HorizonX|21st\.dev)\]\s*/, '');
      const folderLink = `[\`${item.folder}\`](${item.folder})`;
      md += `| **#${globalIndex}** | **${cleanTitle}** | ${item.category} | ${folderLink} |\n`;
      globalIndex++;
    });

    md += '\n';
  });

  md += `---

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
│   └── generate_readme_catalog.mjs # Continuous 1-813 README generator
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
  console.log(`Successfully generated continuous #1 to #${items.length} README.md with fast category index navigation!`);
});
