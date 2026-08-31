import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const rootDir = process.cwd();
const archiveDir = path.join(rootDir, 'motionsites-prompts');
const promptsDir = path.join(rootDir, 'prompts');

function hashText(text) {
  return crypto.createHash('sha256').update(String(text || '').trim().toLowerCase().replace(/\s+/g, ' ')).digest('hex');
}

function normalizeTitle(t) {
  return String(t || '')
    .toLowerCase()
    .trim()
    .replace(/^\[.*?\]\s*/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ');
}

function normalizeSlug(s) {
  return String(s || '')
    .toLowerCase()
    .trim()
    .replace(/^sup-|^hx-|^dev21-|^ms-/, '')
    .replace(/^\d+-/, '')
    .replace(/[-_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

console.log('=== Step 1: Scanning all motionsites-prompts folders ===');
const folders = fs.readdirSync(archiveDir).filter(f => fs.statSync(path.join(archiveDir, f)).isDirectory());
console.log(`Found ${folders.length} total folders.`);

const records = [];

for (const folder of folders) {
  const folderPath = path.join(archiveDir, folder);
  const metaPath = path.join(folderPath, 'metadata.json');
  const workingPromptPath = path.join(folderPath, 'working-prompt.md');
  const promptPath = path.join(folderPath, 'prompt.md');

  if (!fs.existsSync(metaPath)) continue;

  let metadata = {};
  try {
    metadata = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  } catch (e) {
    continue;
  }

  let promptContent = '';
  if (fs.existsSync(workingPromptPath)) {
    promptContent = fs.readFileSync(workingPromptPath, 'utf8').trim();
  } else if (fs.existsSync(promptPath)) {
    promptContent = fs.readFileSync(promptPath, 'utf8').trim();
  }

  if (!promptContent) continue;

  const rec = metadata.record || {};
  const id = String(rec.id || folder).trim();
  const title = String(rec.title || id).trim();
  const cHash = hashText(promptContent);
  const normTitle = normalizeTitle(title);
  const normSlug = normalizeSlug(id);

  records.push({
    folder,
    folderPath,
    id,
    title,
    normTitle,
    normSlug,
    cHash,
    metadata,
    promptContent,
    hasImage: Boolean(rec.image_preview_url || metadata.image_url),
    hasVideo: Boolean(rec.video_preview_url || metadata.video_url),
    sortOrder: Number(rec.sort_order || 9999)
  });
}

console.log(`Loaded ${records.length} valid prompt records.`);

// Deduplication Strategy:
// Group by content hash, normalized slug, and normalized title
const seenHashes = new Map();
const seenNormTitles = new Map();
const seenNormSlugs = new Map();

const toKeep = [];
const toRemove = [];

// Helper to choose better record between two duplicates
function chooseBest(recA, recB) {
  // Prefer the one with media preview
  const aScore = (recA.hasImage ? 2 : 0) + (recA.hasVideo ? 2 : 0) + (recA.folder.startsWith('0') || recA.folder.startsWith('sup-') || recA.folder.startsWith('hx-') || recA.folder.startsWith('dev21-') ? 1 : 0);
  const bScore = (recB.hasImage ? 2 : 0) + (recB.hasVideo ? 2 : 0) + (recB.folder.startsWith('0') || recB.folder.startsWith('sup-') || recB.folder.startsWith('hx-') || recB.folder.startsWith('dev21-') ? 1 : 0);

  if (aScore >= bScore) return [recA, recB];
  return [recB, recA];
}

for (const rec of records) {
  // 1. Content Hash Duplicate Check
  if (seenHashes.has(rec.cHash)) {
    const existing = seenHashes.get(rec.cHash);
    const [best, redundant] = chooseBest(existing, rec);
    seenHashes.set(rec.cHash, best);
    toRemove.push({ record: redundant, reason: `Exact content duplicate of ${best.folder}` });
    continue;
  }

  // 2. Normalized Title Duplicate Check (only if same category or highly similar)
  if (seenNormTitles.has(rec.normTitle)) {
    const existing = seenNormTitles.get(rec.normTitle);
    // If prompt content is very short or identical or folders are ms- vs 001-
    if (rec.normSlug === existing.normSlug || rec.folder.startsWith('ms-') || existing.folder.startsWith('ms-')) {
      const [best, redundant] = chooseBest(existing, rec);
      seenNormTitles.set(rec.normTitle, best);
      toRemove.push({ record: redundant, reason: `Title duplicate of ${best.folder}` });
      continue;
    }
  }

  // 3. Normalized Slug Check
  if (seenNormSlugs.has(rec.normSlug)) {
    const existing = seenNormSlugs.get(rec.normSlug);
    if (rec.folder.startsWith('ms-') || existing.folder.startsWith('ms-') || rec.normTitle === existing.normTitle) {
      const [best, redundant] = chooseBest(existing, rec);
      seenNormSlugs.set(rec.normSlug, best);
      toRemove.push({ record: redundant, reason: `Slug duplicate of ${best.folder}` });
      continue;
    }
  }

  seenHashes.set(rec.cHash, rec);
  seenNormTitles.set(rec.normTitle, rec);
  seenNormSlugs.set(rec.normSlug, rec);
  toKeep.push(rec);
}

console.log(`=== Deduplication Plan ===`);
console.log(`Unique items to retain: ${toKeep.length}`);
console.log(`Redundant items to remove: ${toRemove.length}`);

// Remove redundant folders
for (const item of toRemove) {
  const fPath = item.record.folderPath;
  if (fs.existsSync(fPath)) {
    fs.rmSync(fPath, { recursive: true, force: true });
  }
}
console.log(`Removed ${toRemove.length} duplicate folders from motionsites-prompts/.`);

// Rebuild motionsites_all_prompts.json
const uniqueAllPrompts = toKeep.map(k => {
  const rec = k.metadata.record || {};
  return {
    id: k.id,
    title: k.title,
    category: rec.category || 'Landing Pages',
    type: rec.page_type || 'landing',
    is_free: rec.is_free ?? true,
    page_type: rec.page_type || 'landing',
    prompt_text: k.promptContent,
    description: rec.description || k.title,
    platform: k.id.startsWith('sup-') ? 'superdesign' : (k.id.startsWith('hx-') ? 'horizonx' : (k.id.startsWith('dev21-') ? '21st_dev' : 'motionsites')),
    image_preview_url: rec.image_preview_url || null,
    video_preview_url: rec.video_preview_url || null
  };
});

fs.writeFileSync(path.join(rootDir, 'motionsites_all_prompts.json'), JSON.stringify(uniqueAllPrompts, null, 2), 'utf8');
console.log(`Wrote ${uniqueAllPrompts.length} unique prompts to motionsites_all_prompts.json.`);
