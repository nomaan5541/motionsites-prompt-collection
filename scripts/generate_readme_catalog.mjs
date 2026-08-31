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

<img src="assets/images/social-banner.jpg" alt="813+ AI Web Design Prompts Collection Banner" width="100%" />

# ⚡ MotionSites Prompts Collection

### The definitive open-source library of production-ready AI web design prompts
### 💎 **${items.length} Curated Prompts (Continuous Global Index #1 to #${items.length} — Zero Duplicates)**

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/nomaan5541/motionsites-prompt-collection?style=social)](https://github.com/nomaan5541/motionsites-prompt-collection/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/nomaan5541/motionsites-prompt-collection?style=social)](https://github.com/nomaan5541/motionsites-prompt-collection/network/members)
[![Total Prompts](https://img.shields.io/badge/Prompts-${items.length}%20Verified-blueviolet.svg)](#quick-navigation-index-jump-to-category)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**${items.length} free, hyper-fidelity prompts** that generate modern landing pages, interactive 3D WebGL canvases, bento grids, and high-conversion UI components. Copy a prompt → Paste into your AI coding tool (Claude Code, Cursor, Bolt.new, Lovable, v0) → Ship pixel-perfect websites.

<br />

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnomaan5541%2Fmotionsites-prompt-collection)
&nbsp;&nbsp;
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=nomaan5541%2Fmotionsites-prompt-collection)
&nbsp;&nbsp;
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/nomaan5541/motionsites-prompt-collection)

<br />

[🌐 **Browse Web App on Localhost**](http://localhost:5173/) · [⭐ **Star this repo**](#-star-history) · [🤝 **Contribute**](CONTRIBUTING.md) · [📄 **License**](LICENSE)

</div>

---

## 📑 <a id="quick-navigation-index-jump-to-category"></a>Quick Navigation Index (Jump to Category)

Click any category below to jump directly to its section in the continuous **#1 to #${items.length}** catalog:

| Category | Continuous Range | Total Count | Quick Jump Link |
| :--- | :---: | :---: | :--- |
${catMeta.map(c => `| ${c.icon} **${c.name}** | \`#${c.start}\` – \`#${c.end}\` | **${c.count}** prompts | [Jump to ${c.name}](#${c.tag}) |`).join('\n')}
| 🏆 **Total Master Catalog** | **\`#1\` – \`#${items.length}\`** | **${items.length} Prompts** | [View Full Continuous Catalog](#master-catalog) |

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

## 📂 <a id="repository-structure"></a>Comprehensive Repository Architecture & Directory Hierarchy

The repository is organized into clean, modular layers separating prompt storage, static media assets, automated build pipelines, and the React/Vite web application:

\`\`\`text
motionsites-prompt-collection/
│
├── 📂 motionsites-prompts/       # Canonical master prompt folders (813 unique prompt directories)
│   ├── 📂 001-3d-boxes/          # Individual prompt bundle
│   │   ├── 📄 metadata.json      # Structured record (ID, title, tags, color palette, preview URLs)
│   │   ├── 📄 prompt.md          # Primary prompt text for AI coding tools (Claude Code, Cursor, v0)
│   │   └── 📄 working-prompt.md  # Raw working prompt and component instructions
│   ├── 📂 sup-aura-audio-.../    # SuperDesign Canvas curated prompts with WebGL & 3D shaders
│   ├── 📂 hx-ai-assistant-.../   # HorizonX Library WebGL & Three.js vibecoding prompts
│   └── 📂 dev21-bento-grid-.../  # 21st.dev Registry modern React/Tailwind components
│
├── 📂 prompts/                   # Single-file Markdown distribution mirrors
│   ├── 📄 001-3d-boxes.md        # Standalone prompt file for direct curl / API access
│   └── 📄 superdesign-*.md       # SuperDesign single-file prompts
│
├── 📂 public/                    # Static web assets served directly by Vite dev server
│   └── 📂 assets/                # Web-accessible media assets
│       ├── 📂 previews/          # High-resolution WebP previews and MP4 video loops (500+ items)
│       ├── 📂 superdesign/       # High-fidelity UI screenshots and component textures (144 items)
│       └── 📂 community/         # Open-source community component previews
│
├── 📂 assets/                    # Project source media mirrors
│   ├── 📂 images/                # Raw image sources
│   ├── 📂 previews/              # Local preview assets
│   └── 📂 videos/                # WebM / MP4 video loops
│
├── 📂 scripts/                   # Automated build, ETL, and deduplication engines
│   ├── 📄 build-catalog.mjs      # Compiles motionsites-prompts/ into TypeScript modules
│   ├── 📄 deduplicate_catalog.mjs# Zero-duplicate audit engine (SHA-256 hash & title verification)
│   ├── 📄 generate_readme_catalog.mjs # Auto-generates indexed continuous #1-#813 README.md
│   └── 📄 sync_external_sources.mjs  # Synchronizes external scratch repositories and assets
│
├── 📂 src/                       # React 19 + TypeScript + Vite Web Application
│   ├── 📂 components/            # Reusable UI component modules
│   │   ├── 📄 HomePage.tsx       # Discovery grid, search bar, and hero showcase
│   │   ├── 📄 SearchPage.tsx     # Filterable fuzzy search engine across all 813 prompts
│   │   ├── 📄 MediaFrame.tsx     # Adaptive media player (MP4 autoplay, WebP fallbacks)
│   │   ├── 📄 PromptGrid.tsx     # Responsive grid layout for prompt cards
│   │   └── 📄 PromptModal.tsx    # One-click prompt copier and full-screen inspector
│   ├── 📂 data/                  # Auto-generated catalog data structures
│   │   ├── 📄 prompts.generated.ts # 813 strongly-typed catalog items exported for React
│   │   └── 📄 catalog-summary.json # Summary statistics by category, type, and media format
│   ├── 📄 App.tsx                # Client-side router and theme provider
│   ├── 📄 main.tsx               # Application entry point and DOM bootstrap
│   └── 📄 index.css              # Global design system tokens and Tailwind CSS utilities
│
├── 📄 motionsites_all_prompts.json # Master JSON dataset (813 structured records for external tools)
├── 📄 preview_mapping.json       # Index-to-media resolution mapping table
├── 📄 missing_prompts.json       # Integrity tracker (0 missing prompts, fully resolved)
├── 📄 package.json               # Project manifest, dependencies, and NPM build scripts
├── 📄 vite.config.ts             # Vite bundler configuration with Rolldown optimization
└── 📄 README.md                  # Master documentation and continuous #1-#813 prompt catalog
\`\`\`

---

## 📈 <a id="star-history"></a>Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nomaan5541/motionsites-prompt-collection&type=Date)](https://star-history.com/#nomaan5541/motionsites-prompt-collection&Date)

---

## 💬 A Note from the Creator

> **[SYSTEM NOTE]**:  
> I spent over a month of late nights engineering and curating this entire 813-prompt collection from scratch.  
>  
> Please do not waste weeks of your own precious time trying to extract, scrape, or rebuild a project like this yourself. If you have any new prompts or repositories, just reach out and message me—I will gladly integrate them for the entire community.  
>  
> I appreciate your ambition, but save your time and build something great.

---

## 📄 License

This repository is distributed under the **MIT License**. See [\`LICENSE\`](LICENSE) for details.
`;

  fs.writeFileSync(outFile, md, 'utf8');
  console.log(`Successfully generated updated README.md with 1-click cloud sandbox buttons and Star History!`);
});
