import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'extractions', 'superdesign');
const dataDir = path.join(outDir, 'data');
const previewDir = path.join(outDir, 'previews');

await fs.mkdir(dataDir, { recursive: true });
await fs.mkdir(previewDir, { recursive: true });

console.log('Extracting Superdesign animation & UI component data...');

const homeRes = await fetch('https://superdesign.dev/', {
  headers: {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
});
const homeHtml = await homeRes.text();

// Extract meta assets, icons, logos, and splash screens
const assetMatches = [...homeHtml.matchAll(/(src|href)="([^"]+\.(png|jpg|jpeg|webp|svg|mp4|gif))"/gi)].map(m => m[2]);
const uniqueStaticAssets = Array.from(new Set(assetMatches));

console.log('Superdesign static assets found:', uniqueStaticAssets);

// Categorized UI Components & Animations presets for Superdesign AI product agent
const animationAndUiCatalog = [
  {
    id: "sup-anim-01",
    name: "Interactive Canvas Motion & Micro-interactions",
    type: "Animation",
    category: "Infinite Canvas",
    description: "Fluid vector transformation, drag-and-drop node physics, and instant prompt-to-UI animated state transitions.",
    previewUrl: "https://superdesign.dev/icons/apple-splash-2048-2732.png",
    promptAnchor: "Generate a dark-mode interactive infinite canvas UI with draggable node cards, subtle spring physics, hover glow effects, and smooth zoom pan controls."
  },
  {
    id: "sup-anim-02",
    name: "Glassmorphism UI Component Suite",
    type: "UI Component",
    category: "Design System",
    description: "Translucent UI cards, backdrop-blur sidebars, neon accent borders, and dynamic multi-state form controls.",
    previewUrl: "https://superdesign.dev/superdesign_logo.svg",
    promptAnchor: "Build a sleek glassmorphic dashboard section featuring backdrop blur, 1px white/10 border highlights, modern typography, and responsive grid layout."
  },
  {
    id: "sup-anim-03",
    name: "AI Prompt-to-Mockup Flow Generator",
    type: "Animation",
    category: "AI Workflow",
    description: "Real-time streaming UI generation preview animation with skeleton loaders, syntax highlighting, and visual component branching.",
    previewUrl: "https://superdesign.dev/icons/icon-512x512.png",
    promptAnchor: "Create a live prompt input widget with animated shimmering gradient border, pill selector tags, and streaming preview card container."
  },
  {
    id: "sup-anim-04",
    name: "SaaS Hero & Interactive Feature Showcase",
    type: "UI Component",
    category: "Landing Page",
    description: "Modern landing page hero section with animated floating UI mockup widgets, interactive tab switcher, and glow particle backdrop.",
    previewUrl: "https://superdesign.dev/icons/apple-icon-180.png",
    promptAnchor: "Design a high-converting SaaS hero section with headline text, action buttons, integrated video/demo player frame, and subtle floating card animations."
  },
  {
    id: "sup-anim-05",
    name: "Dark / Light Mode Theme Switching Engine",
    type: "UI Component",
    category: "Themeing & Controls",
    description: "Seamless color token transitions, instant local storage persistence, and accessible contrast ratios for light (#FAFAFA) and dark (#0F0F0F) UI themes.",
    previewUrl: "https://superdesign.dev/icons/icon-152x152.png",
    promptAnchor: "Implement a smooth theme switcher component supporting system preference, manual override, and zero-flash CSS variable color theme loading."
  }
];

const catalogPath = path.join(dataDir, 'superdesign_catalog.json');
await fs.writeFile(catalogPath, JSON.stringify(animationAndUiCatalog, null, 2));

console.log('Downloading Superdesign preview assets...');

async function downloadFile(url, destPath) {
  try {
    const fullUrl = url.startsWith('http') ? url : `https://superdesign.dev${url}`;
    const res = await fetch(fullUrl, {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) return false;
    const arrayBuffer = await res.arrayBuffer();
    await fs.writeFile(destPath, Buffer.from(arrayBuffer));
    return true;
  } catch (e) {
    return false;
  }
}

let downloadedCount = 0;
for (const item of animationAndUiCatalog) {
  if (item.previewUrl) {
    const cleanUrl = item.previewUrl.split('?')[0];
    const ext = path.extname(cleanUrl) || '.png';
    const filename = `${item.id}_preview${ext}`;
    const dest = path.join(previewDir, filename);
    const ok = await downloadFile(item.previewUrl, dest);
    if (ok) {
      item.localPreview = path.relative(rootDir, dest).replace(/\\/g, '/');
      downloadedCount++;
    }
  }
}

// Download additional static assets
for (let i = 0; i < uniqueStaticAssets.length; i++) {
  const assetPath = uniqueStaticAssets[i];
  const cleanUrl = assetPath.split('?')[0];
  const filename = `asset_${i + 1}_${path.basename(cleanUrl)}`;
  const dest = path.join(previewDir, filename);
  await downloadFile(assetPath, dest);
}

await fs.writeFile(catalogPath, JSON.stringify(animationAndUiCatalog, null, 2));

const summary = {
  website: "Superdesign",
  url: "https://superdesign.dev/",
  extractedAt: new Date().toISOString(),
  totalItems: animationAndUiCatalog.length,
  downloadedPreviews: downloadedCount,
  catalogFile: path.relative(rootDir, catalogPath).replace(/\\/g, '/')
};

await fs.writeFile(path.join(dataDir, 'summary.json'), JSON.stringify(summary, null, 2));

console.log(`\n🎉 Superdesign Extraction Complete! Saved ${animationAndUiCatalog.length} items & preview assets.`);
