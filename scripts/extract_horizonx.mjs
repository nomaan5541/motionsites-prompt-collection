import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'extractions', 'horizonx');
const dataDir = path.join(outDir, 'data');
const previewDir = path.join(outDir, 'previews');

await fs.mkdir(dataDir, { recursive: true });
await fs.mkdir(previewDir, { recursive: true });

console.log('Fetching HorizonX catalog...');

const exploreRes = await fetch('https://horizonx.so/explore', {
  headers: {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
});
const exploreHtml = await exploreRes.text();

const jsonLdMatches = exploreHtml.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs);
let items = [];

for (const match of jsonLdMatches) {
  try {
    const jsonLd = JSON.parse(match[1]);
    if (jsonLd['@type'] === 'ItemList' && Array.isArray(jsonLd.itemListElement)) {
      items = jsonLd.itemListElement.map(el => ({
        position: el.position,
        name: el.name,
        url: el.url,
        image: el.image,
        slug: (el.url || '').split('/explore/')[1] || ''
      }));
    }
  } catch (err) {
    // continue
  }
}

console.log(`Found ${items.length} items from HorizonX ItemList schema.`);

console.log('Enriching items with detailed page metadata & video links...');

const enrichedItems = [];

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  console.log(`[${i + 1}/${items.length}] Processing: ${item.name} (${item.slug})`);
  
  let itemData = {
    ...item,
    description: '',
    video: '',
    category: '',
    extraImages: []
  };

  try {
    const itemRes = await fetch(item.url, {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (itemRes.ok) {
      const itemHtml = await itemRes.text();

      // Extract description
      const descMatch = itemHtml.match(/<meta name="description" content="(.*?)"/i) || itemHtml.match(/<meta property="og:description" content="(.*?)"/i);
      if (descMatch) itemData.description = descMatch[1];

      // Extract video CDN link if available
      const videoMatch = itemHtml.match(/(https:\/\/cdn\.horizonx\.so\/[^"'\s]+\.mp4)/i);
      if (videoMatch) itemData.video = videoMatch[1];

      // Extract extra images
      const imgMatches = [...itemHtml.matchAll(/(https:\/\/cdn\.horizonx\.so\/[^"'\s]+\.(webp|png|jpg|gif))/gi)].map(m => m[1]);
      itemData.extraImages = Array.from(new Set(imgMatches));
    }
  } catch (err) {
    console.error(`Error fetching detail for ${item.slug}:`, err.message);
  }

  enrichedItems.push(itemData);
}

const catalogPath = path.join(dataDir, 'horizonx_catalog.json');
await fs.writeFile(catalogPath, JSON.stringify(enrichedItems, null, 2));
console.log(`Saved HorizonX catalog to ${catalogPath}`);

console.log('Downloading preview images & videos for HorizonX...');

async function downloadFile(url, destPath) {
  try {
    const res = await fetch(url, {
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
for (const item of enrichedItems) {
  if (item.image) {
    const cleanUrl = item.image.split('?')[0];
    const ext = path.extname(cleanUrl) || '.webp';
    const filename = `${String(item.position).padStart(2, '0')}_${item.slug}${ext}`;
    const dest = path.join(previewDir, filename);
    const success = await downloadFile(item.image, dest);
    if (success) {
      item.localImage = path.relative(rootDir, dest).replace(/\\/g, '/');
      downloadedCount++;
    }
  }

  if (item.video) {
    const cleanUrl = item.video.split('?')[0];
    const ext = path.extname(cleanUrl) || '.mp4';
    const filename = `${String(item.position).padStart(2, '0')}_${item.slug}_preview${ext}`;
    const dest = path.join(previewDir, filename);
    const success = await downloadFile(item.video, dest);
    if (success) {
      item.localVideo = path.relative(rootDir, dest).replace(/\\/g, '/');
      downloadedCount++;
    }
  }
}

// Re-save enriched catalog with local preview paths
await fs.writeFile(catalogPath, JSON.stringify(enrichedItems, null, 2));

const summary = {
  website: "HorizonX",
  url: "https://horizonx.so/",
  extractedAt: new Date().toISOString(),
  totalItems: enrichedItems.length,
  downloadedPreviews: downloadedCount,
  catalogFile: path.relative(rootDir, catalogPath).replace(/\\/g, '/')
};

await fs.writeFile(path.join(dataDir, 'summary.json'), JSON.stringify(summary, null, 2));

console.log(`\n🎉 HorizonX Extraction Complete! Saved ${enrichedItems.length} items & ${downloadedCount} preview files.`);
