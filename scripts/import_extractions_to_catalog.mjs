import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const archiveDir = path.join(rootDir, 'motionsites-prompts');

await fs.mkdir(archiveDir, { recursive: true });

console.log('Assigning new dedicated sections (HorizonX Library, 21st.dev Registry, Superdesign Canvas)...');

let importedCount = 0;

// 1. HorizonX Items
const hxPath = path.join(rootDir, 'extractions', 'horizonx', 'data', 'horizonx_prompts.json');
if (await fs.stat(hxPath).catch(() => null)) {
  const hxPrompts = JSON.parse(await fs.readFile(hxPath, 'utf-8'));
  for (let i = 0; i < hxPrompts.length; i++) {
    const item = hxPrompts[i];
    const folderName = `hx-${item.id.replace(/^hx-/, '')}`;
    const folderPath = path.join(archiveDir, folderName);
    await fs.mkdir(folderPath, { recursive: true });

    const metadata = {
      record: {
        id: item.id,
        title: `[HorizonX] ${item.title}`,
        category: "HorizonX Library",
        page_type: "horizonx",
        sort_order: 1000 + i,
        image_preview_url: item.previewImage || null,
        video_preview_url: item.previewVideo || null,
        is_free: true,
        types: ["HorizonX", "Vibecoding", "React", "Tailwind"]
      },
      workingPrompt: {
        mode: "original"
      }
    };

    await fs.writeFile(path.join(folderPath, 'metadata.json'), JSON.stringify(metadata, null, 2));
    await fs.writeFile(path.join(folderPath, 'prompt.md'), item.promptText);
    importedCount++;
  }
  console.log(`Assigned ${hxPrompts.length} HorizonX Library items.`);
}

// 2. 21st.dev Items
const devPath = path.join(rootDir, 'extractions', '21st_dev', 'data', '21st_dev_prompts.json');
if (await fs.stat(devPath).catch(() => null)) {
  const devPrompts = JSON.parse(await fs.readFile(devPath, 'utf-8'));
  for (let i = 0; i < devPrompts.length; i++) {
    const item = devPrompts[i];
    const folderName = `dev21-${item.author}-${item.componentName}`.slice(0, 80);
    const folderPath = path.join(archiveDir, folderName);
    await fs.mkdir(folderPath, { recursive: true });

    const previewImg = item.previewImages && item.previewImages.length > 0 ? item.previewImages[0] : null;
    const previewVid = item.previewVideos && item.previewVideos.length > 0 ? item.previewVideos[0] : null;

    const metadata = {
      record: {
        id: item.id,
        title: `[21st.dev] ${item.title} (by ${item.author})`,
        category: "21st.dev Registry",
        page_type: "21st_dev",
        sort_order: 2000 + i,
        image_preview_url: previewImg,
        video_preview_url: previewVid,
        is_free: true,
        types: ["21st.dev", item.author, "shadcn"]
      },
      workingPrompt: {
        mode: "original"
      }
    };

    await fs.writeFile(path.join(folderPath, 'metadata.json'), JSON.stringify(metadata, null, 2));
    await fs.writeFile(path.join(folderPath, 'prompt.md'), item.promptText);
    importedCount++;
  }
  console.log(`Assigned ${devPrompts.length} 21st.dev Registry items.`);
}

// 3. Superdesign Items
const superPath = path.join(rootDir, 'extractions', 'superdesign', 'data', 'superdesign_prompts.json');
if (await fs.stat(superPath).catch(() => null)) {
  const superPrompts = JSON.parse(await fs.readFile(superPath, 'utf-8'));
  for (let i = 0; i < superPrompts.length; i++) {
    const item = superPrompts[i];
    const folderName = `sup-${item.id.replace(/^sup-/, '')}`;
    const folderPath = path.join(archiveDir, folderName);
    await fs.mkdir(folderPath, { recursive: true });

    const metadata = {
      record: {
        id: item.id,
        title: `[Superdesign] ${item.title}`,
        category: "Superdesign Canvas",
        page_type: "superdesign",
        sort_order: 3000 + i,
        image_preview_url: item.previewUrl || null,
        video_preview_url: null,
        is_free: true,
        types: ["Superdesign", "AI", "Canvas"]
      },
      workingPrompt: {
        mode: "original"
      }
    };

    await fs.writeFile(path.join(folderPath, 'metadata.json'), JSON.stringify(metadata, null, 2));
    await fs.writeFile(path.join(folderPath, 'prompt.md'), item.promptText);
    importedCount++;
  }
  console.log(`Assigned ${superPrompts.length} Superdesign Canvas items.`);
}

console.log(`\n🎉 New section assignments complete for ${importedCount} items!`);
