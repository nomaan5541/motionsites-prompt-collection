import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'extractions', '21st_dev');
const dataDir = path.join(outDir, 'data');
const previewDir = path.join(outDir, 'previews');

await fs.mkdir(dataDir, { recursive: true });
await fs.mkdir(previewDir, { recursive: true });

console.log('Extracting 21st.dev components, templates & preview assets...');

const pagesToFetch = [
  'https://21st.dev/community/components',
  'https://21st.dev/community/templates',
  'https://21st.dev/community/components/featured'
];

const foundAssetsMap = new Map(); // assetUrl -> itemObj

for (const pageUrl of pagesToFetch) {
  console.log(`Fetching ${pageUrl}...`);
  try {
    const res = await fetch(pageUrl, {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const html = await res.text();

    // Match CDN preview and video URLs
    const assetRegex = /https:\/\/cdn\.21st\.dev\/([^\/]+)\/([^\/]+)\/([^\/]+)\/(preview|video|thumbnail|cover|image)[^\s"'\\>]+/gi;
    const matches = [...html.matchAll(assetRegex)];

    for (const match of matches) {
      const fullUrl = match[0].replace(/\\/g, '');
      const author = match[1];
      const componentName = match[2];
      const variant = match[3];
      const type = match[4].toLowerCase();

      const key = `${author}/${componentName}`;
      if (!foundAssetsMap.has(key)) {
        foundAssetsMap.set(key, {
          author,
          componentName,
          title: componentName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          url: `https://21st.dev/${author}/${componentName}`,
          variant,
          images: [],
          videos: []
        });
      }

      const item = foundAssetsMap.get(key);
      if (type.includes('mp4') || fullUrl.endsWith('.mp4')) {
        if (!item.videos.includes(fullUrl)) item.videos.push(fullUrl);
      } else {
        if (!item.images.includes(fullUrl)) item.images.push(fullUrl);
      }
    }
  } catch (e) {
    console.error(`Failed to fetch ${pageUrl}:`, e.message);
  }
}

const itemsList = Array.from(foundAssetsMap.values());
console.log(`Discovered ${itemsList.length} component/template packages on 21st.dev.`);

// Save catalog JSON
const catalogPath = path.join(dataDir, '21st_dev_catalog.json');
await fs.writeFile(catalogPath, JSON.stringify(itemsList, null, 2));

console.log('Downloading 21st.dev preview images and videos...');

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

let downloadedFilesCount = 0;
const limit = Math.min(itemsList.length, 120); // Process top items

for (let i = 0; i < limit; i++) {
  const item = itemsList[i];
  item.localImages = [];
  item.localVideos = [];

  for (let imgIdx = 0; imgIdx < item.images.length; imgIdx++) {
    const imgUrl = item.images[imgIdx];
    const cleanUrl = imgUrl.split('?')[0];
    const ext = path.extname(cleanUrl) || '.webp';
    const filename = `${String(i + 1).padStart(3, '0')}_${item.author}_${item.componentName}_img${imgIdx + 1}${ext}`;
    const dest = path.join(previewDir, filename);

    const ok = await downloadFile(imgUrl, dest);
    if (ok) {
      item.localImages.push(path.relative(rootDir, dest).replace(/\\/g, '/'));
      downloadedFilesCount++;
    }
  }

  for (let vidIdx = 0; vidIdx < item.videos.length; vidIdx++) {
    const vidUrl = item.videos[vidIdx];
    const cleanUrl = vidUrl.split('?')[0];
    const ext = path.extname(cleanUrl) || '.mp4';
    const filename = `${String(i + 1).padStart(3, '0')}_${item.author}_${item.componentName}_vid${vidIdx + 1}${ext}`;
    const dest = path.join(previewDir, filename);

    const ok = await downloadFile(vidUrl, dest);
    if (ok) {
      item.localVideos.push(path.relative(rootDir, dest).replace(/\\/g, '/'));
      downloadedFilesCount++;
    }
  }
}

await fs.writeFile(catalogPath, JSON.stringify(itemsList, null, 2));

const summary = {
  website: "21st.dev",
  url: "https://21st.dev/",
  extractedAt: new Date().toISOString(),
  totalItems: itemsList.length,
  downloadedPreviews: downloadedFilesCount,
  catalogFile: path.relative(rootDir, catalogPath).replace(/\\/g, '/')
};

await fs.writeFile(path.join(dataDir, 'summary.json'), JSON.stringify(summary, null, 2));

console.log(`\n🎉 21st.dev Extraction Complete! Processed ${itemsList.length} entries & saved ${downloadedFilesCount} preview assets.`);
