import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const scratchDir = 'C:\\Users\\VIRUS\\.gemini\\antigravity-ide\\brain\\46b36f48-5847-4b25-b267-b2e4a850a141\\scratch';
const zhaoPath = path.join(scratchDir, 'zhaosenlin-motionsites');
const superPath = path.join(scratchDir, 'superdesign-prompts');

// 1. Ensure target directories
const publicDir = path.join(rootDir, 'public');
const publicPreviews = path.join(publicDir, 'assets', 'previews');
const publicCommunity = path.join(publicDir, 'assets', 'community');
const publicSuperdesign = path.join(publicDir, 'assets', 'superdesign');

const assetsPreviews = path.join(rootDir, 'assets', 'previews');
const assetsCommunity = path.join(rootDir, 'assets', 'community');
const assetsSuperdesign = path.join(rootDir, 'assets', 'images', 'superdesign');

const promptsDir = path.join(rootDir, 'prompts');
const motionsitesPromptsDir = path.join(rootDir, 'motionsites-prompts');

[
  publicPreviews, publicCommunity, publicSuperdesign,
  assetsPreviews, assetsCommunity, assetsSuperdesign,
  promptsDir, motionsitesPromptsDir
].forEach(dir => fs.mkdirSync(dir, { recursive: true }));

console.log('--- Step 1: Copying Media & Textures ---');

// Copy previews from zhaosenlin
const zhaoPreviewsDir = path.join(zhaoPath, 'assets', 'previews');
if (fs.existsSync(zhaoPreviewsDir)) {
  const files = fs.readdirSync(zhaoPreviewsDir);
  let count = 0;
  for (const file of files) {
    const src = path.join(zhaoPreviewsDir, file);
    fs.copyFileSync(src, path.join(publicPreviews, file));
    fs.copyFileSync(src, path.join(assetsPreviews, file));
    count++;
  }
  console.log(`Copied ${count} preview files from zhaosenlin to public and assets.`);
}

// Copy community previews from zhaosenlin
const zhaoCommunityDir = path.join(zhaoPath, 'assets', 'community');
if (fs.existsSync(zhaoCommunityDir)) {
  fs.cpSync(zhaoCommunityDir, publicCommunity, { recursive: true });
  fs.cpSync(zhaoCommunityDir, assetsCommunity, { recursive: true });
  console.log(`Copied community preview directory from zhaosenlin.`);
}

// Copy superdesign previews
const superPromptsDir = path.join(superPath, 'prompts');
if (fs.existsSync(superPromptsDir)) {
  const slugFolders = fs.readdirSync(superPromptsDir);
  let count = 0;
  for (const slug of slugFolders) {
    const promptFolder = path.join(superPromptsDir, slug);
    if (fs.statSync(promptFolder).isDirectory()) {
      const previewPng = path.join(promptFolder, 'preview.png');
      const previewMp4 = path.join(promptFolder, 'preview.mp4');
      if (fs.existsSync(previewPng)) {
        fs.copyFileSync(previewPng, path.join(publicSuperdesign, `${slug}.png`));
        fs.copyFileSync(previewPng, path.join(assetsSuperdesign, `${slug}.png`));
        count++;
      }
      if (fs.existsSync(previewMp4)) {
        fs.copyFileSync(previewMp4, path.join(publicSuperdesign, `${slug}.mp4`));
        fs.copyFileSync(previewMp4, path.join(assetsSuperdesign, `${slug}.mp4`));
      }
    }
  }
  console.log(`Copied ${count} superdesign previews.`);
}

console.log('--- Step 2: Recovering and Merging Missing Prompts ---');

// Load zhaosenlin data
const zhaoTextDir = path.join(zhaoPath, 'data', 'catalog-text');
const zhaoDetails = fs.existsSync(path.join(zhaoPath, 'data', 'catalog-details.json'))
  ? JSON.parse(fs.readFileSync(path.join(zhaoPath, 'data', 'catalog-details.json'), 'utf8')) : {};
const zhaoMeta = fs.existsSync(path.join(zhaoPath, 'data', 'catalog-meta.json'))
  ? JSON.parse(fs.readFileSync(path.join(zhaoPath, 'data', 'catalog-meta.json'), 'utf8')) : { cards: [] };

const zhaoCardMap = new Map();
(zhaoMeta.cards || []).forEach(c => {
  if (c.id) zhaoCardMap.set(String(c.id).toLowerCase(), c);
});

// Load local prompt databases
let allPrompts = fs.existsSync(path.join(rootDir, 'motionsites_all_prompts.json'))
  ? JSON.parse(fs.readFileSync(path.join(rootDir, 'motionsites_all_prompts.json'), 'utf8')) : [];

let previewMapping = fs.existsSync(path.join(rootDir, 'preview_mapping.json'))
  ? JSON.parse(fs.readFileSync(path.join(rootDir, 'preview_mapping.json'), 'utf8')) : {};

const allPromptsMap = new Map();
allPrompts.forEach((p, idx) => {
  const key = String(p.id || p.slug || '').toLowerCase();
  allPromptsMap.set(key, idx);
});

// Recover texts for existing motionsites-prompts folders
const existingFolders = fs.readdirSync(motionsitesPromptsDir);
let recoveredFolderCount = 0;

for (const folder of existingFolders) {
  const folderPath = path.join(motionsitesPromptsDir, folder);
  if (!fs.statSync(folderPath).isDirectory()) continue;

  const metaPath = path.join(folderPath, 'metadata.json');
  if (!fs.existsSync(metaPath)) continue;

  let metadata = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  const rec = metadata.record || {};
  const id = String(rec.id || folder.replace(/^\d+-/, '')).toLowerCase();

  const zhaoTxtFile = path.join(zhaoTextDir, `${id}.txt`);
  if (fs.existsSync(zhaoTxtFile)) {
    const recoveredText = fs.readFileSync(zhaoTxtFile, 'utf8').trim();
    if (recoveredText && recoveredText.length > 50) {
      // Update prompt.md and working-prompt.md
      fs.writeFileSync(path.join(folderPath, 'prompt.md'), recoveredText, 'utf8');
      fs.writeFileSync(path.join(folderPath, 'working-prompt.md'), recoveredText, 'utf8');

      // Update metadata
      metadata.workingPrompt = { mode: 'original', recovered: true };
      if (!metadata.record.image_preview_url && fs.existsSync(path.join(publicPreviews, `${id}.webp`))) {
        metadata.record.image_preview_url = `/assets/previews/${id}.webp`;
      }
      fs.writeFileSync(metaPath, JSON.stringify(metadata, null, 2), 'utf8');

      // Update prompts/<id>.md
      fs.writeFileSync(path.join(promptsDir, `${id}.md`), recoveredText, 'utf8');

      // Update allPrompts array if present
      if (allPromptsMap.has(id)) {
        const idx = allPromptsMap.get(id);
        allPrompts[idx].prompt_text = recoveredText;
      }
      recoveredFolderCount++;
    }
  }
}
console.log(`Updated ${recoveredFolderCount} existing folders with recovered prompt text.`);

// 3. Add brand new MotionSites prompts from zhaosenlin (items not in motionsites-prompts)
let nextSortOrder = 800;
let newZhaoPromptsCount = 0;

const zhaoTextFiles = fs.existsSync(zhaoTextDir) ? fs.readdirSync(zhaoTextDir) : [];
for (const file of zhaoTextFiles) {
  const id = file.replace(/\.txt$/, '').toLowerCase();
  if (id.startsWith('community-superdesign-')) continue; // Handled separately in SuperDesign import

  // Check if already in folders
  const exists = existingFolders.some(f => f.toLowerCase().endsWith(`-${id}`) || f.toLowerCase() === id);
  if (!exists) {
    const promptText = fs.readFileSync(path.join(zhaoTextDir, file), 'utf8').trim();
    if (!promptText) continue;

    const card = zhaoCardMap.get(id) || {};
    const detail = zhaoDetails[id] || {};
    const title = card.title || id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const category = card.category || 'Landing Page';
    const folderName = `ms-${id}`;
    const folderPath = path.join(motionsitesPromptsDir, folderName);
    fs.mkdirSync(folderPath, { recursive: true });

    let previewImg = null;
    if (fs.existsSync(path.join(publicPreviews, `${id}.webp`))) {
      previewImg = `/assets/previews/${id}.webp`;
    } else if (fs.existsSync(path.join(publicPreviews, `${id}.png`))) {
      previewImg = `/assets/previews/${id}.png`;
    }

    const metadata = {
      record: {
        id,
        title,
        category,
        page_type: card.type || 'landing',
        sort_order: nextSortOrder++,
        image_preview_url: previewImg,
        video_preview_url: fs.existsSync(path.join(publicPreviews, `${id}.mp4`)) ? `/assets/previews/${id}.mp4` : null,
        is_free: card.is_free ?? true,
        types: ['MotionSites', 'React', 'Tailwind', 'Framer Motion']
      },
      workingPrompt: {
        mode: 'original'
      }
    };

    fs.writeFileSync(path.join(folderPath, 'metadata.json'), JSON.stringify(metadata, null, 2), 'utf8');
    fs.writeFileSync(path.join(folderPath, 'prompt.md'), promptText, 'utf8');
    fs.writeFileSync(path.join(folderPath, 'working-prompt.md'), promptText, 'utf8');
    fs.writeFileSync(path.join(promptsDir, `${id}.md`), promptText, 'utf8');

    if (!allPromptsMap.has(id)) {
      allPrompts.push({
        id,
        title,
        category,
        type: card.type || 'landing',
        is_free: card.is_free ?? true,
        page_type: card.type || 'landing',
        prompt_text: promptText,
        description: card.description || title,
        platform: 'motionsites'
      });
      allPromptsMap.set(id, allPrompts.length - 1);
    }
    newZhaoPromptsCount++;
  }
}
console.log(`Added ${newZhaoPromptsCount} new MotionSites prompts from zhaosenlin catalog.`);

console.log('--- Step 3: Integrating 140 SuperDesign Prompts ---');

// Load SuperDesign prompts
const superPrompts = fs.existsSync(path.join(superPath, 'prompts.json'))
  ? JSON.parse(fs.readFileSync(path.join(superPath, 'prompts.json'), 'utf8')) : [];

let superImportCount = 0;
let supSortOrder = 3000;

for (const item of superPrompts) {
  const slug = item.slug;
  const folderName = `sup-${slug}`;
  const folderPath = path.join(motionsitesPromptsDir, folderName);
  fs.mkdirSync(folderPath, { recursive: true });

  const previewImg = fs.existsSync(path.join(publicSuperdesign, `${slug}.png`))
    ? `/assets/superdesign/${slug}.png` : null;
  const previewVid = fs.existsSync(path.join(publicSuperdesign, `${slug}.mp4`))
    ? `/assets/superdesign/${slug}.mp4` : null;

  const metadata = {
    record: {
      id: `sup-${slug}`,
      title: `[Superdesign] ${item.title}`,
      category: `Superdesign Canvas`,
      originalCategory: item.category || 'Superdesign',
      page_type: 'superdesign',
      sort_order: supSortOrder++,
      image_preview_url: previewImg,
      video_preview_url: previewVid,
      is_free: true,
      deslop_score: item.deslop_score || null,
      visual_score: item.visual_score || null,
      tags: Array.isArray(item.tags) ? ['Superdesign', ...item.tags] : ['Superdesign', 'Modern UI']
    },
    workingPrompt: {
      mode: 'original'
    }
  };

  const promptContent = item.prompt || '';
  fs.writeFileSync(path.join(folderPath, 'metadata.json'), JSON.stringify(metadata, null, 2), 'utf8');
  fs.writeFileSync(path.join(folderPath, 'prompt.md'), promptContent, 'utf8');
  fs.writeFileSync(path.join(folderPath, 'working-prompt.md'), promptContent, 'utf8');

  // Also write to prompts/ directory
  fs.writeFileSync(path.join(promptsDir, `superdesign-${slug}.md`), promptContent, 'utf8');

  // Add to allPrompts if not present
  const allId = `sup-${slug}`;
  if (!allPromptsMap.has(allId)) {
    allPrompts.push({
      id: allId,
      title: `[Superdesign] ${item.title}`,
      category: item.category || 'Superdesign Canvas',
      type: 'superdesign',
      is_free: true,
      page_type: 'superdesign',
      prompt_text: promptContent,
      description: item.description || item.title,
      platform: 'superdesign',
      deslop_score: item.deslop_score,
      visual_score: item.visual_score
    });
    allPromptsMap.set(allId, allPrompts.length - 1);
  }
  superImportCount++;
}
console.log(`Imported ${superImportCount} complete SuperDesign prompts.`);

// 4. Update databases
fs.writeFileSync(path.join(rootDir, 'motionsites_all_prompts.json'), JSON.stringify(allPrompts, null, 2), 'utf8');
fs.writeFileSync(path.join(rootDir, 'missing_prompts.json'), JSON.stringify([], null, 2), 'utf8');

console.log('Updated motionsites_all_prompts.json (Total:', allPrompts.length, ') and cleared missing_prompts.json.');
