import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// 1. HorizonX Prompts Generation
const hxCatalogPath = path.join(rootDir, 'extractions', 'horizonx', 'data', 'horizonx_catalog.json');
if (await fs.stat(hxCatalogPath).catch(() => null)) {
  const hxItems = JSON.parse(await fs.readFile(hxCatalogPath, 'utf-8'));
  const hxPrompts = hxItems.map(item => {
    return {
      id: `hx-${item.slug}`,
      title: item.name,
      website: "HorizonX",
      url: item.url,
      previewImage: item.image,
      previewVideo: item.video || null,
      localImage: item.localImage || null,
      localVideo: item.localVideo || null,
      promptText: `Create a senior-grade, production-ready React and Tailwind CSS UI component for "${item.name}".

### Design & Aesthetic Guidelines:
- Title: ${item.name}
- Concept: ${item.description || 'Premium modern web interface with dynamic motion and interactive UI hierarchy.'}
- Styling: Modern Tailwind CSS with smooth gradients, glassmorphism card elements, dark/light contrast balancing, and high-end typography.
- Motion & Animation: Smooth Framer Motion or GSAP scroll and hover transitions, micro-interactions, responsive touch support, and subtle entrance animations.
- Code Requirements:
  1. Clean, modular TypeScript React component.
  2. Integrated interactive controls (buttons, tabs, state hooks).
  3. Responsive across mobile (375px), tablet (768px), and desktop (1440px).
  4. Production-ready structure compatible with Cursor, Lovable, Bolt.new, and v0.`
    };
  });

  const hxPromptPath = path.join(rootDir, 'extractions', 'horizonx', 'data', 'horizonx_prompts.json');
  await fs.writeFile(hxPromptPath, JSON.stringify(hxPrompts, null, 2));
  console.log(`Generated ${hxPrompts.length} prompts for HorizonX.`);
}

// 2. 21st.dev Prompts Generation
const devCatalogPath = path.join(rootDir, 'extractions', '21st_dev', 'data', '21st_dev_catalog.json');
if (await fs.stat(devCatalogPath).catch(() => null)) {
  const devItems = JSON.parse(await fs.readFile(devCatalogPath, 'utf-8'));
  const devPrompts = devItems.map(item => {
    return {
      id: `21st-${item.author}-${item.componentName}`,
      title: item.title,
      author: item.author,
      componentName: item.componentName,
      website: "21st.dev",
      url: item.url,
      installCommand: `npx shadcn@latest add https://21st.dev/r/${item.author}/${item.componentName}`,
      previewImages: item.images || [],
      previewVideos: item.videos || [],
      localImages: item.localImages || [],
      localVideos: item.localVideos || [],
      promptText: `Build and wire the "${item.title}" React component authored by ${item.author} for a modern web application.

### Specifications:
- Component: ${item.title} (${item.componentName})
- Author / Style Reference: ${item.author}
- Installation / CLI Anchor: npx shadcn@latest add https://21st.dev/r/${item.author}/${item.componentName}
- Requirements:
  1. Use Tailwind CSS and Lucide React icons.
  2. Implement responsive container layout with customizable props.
  3. Follow shadcn/ui design tokens and theme variables.
  4. Clean TSX code ready for v0, Lovable, Bolt, and Cursor.`
    };
  });

  const devPromptPath = path.join(rootDir, 'extractions', '21st_dev', 'data', '21st_dev_prompts.json');
  await fs.writeFile(devPromptPath, JSON.stringify(devPrompts, null, 2));
  console.log(`Generated ${devPrompts.length} prompts for 21st.dev.`);
}

// 3. Superdesign Prompts Generation
const superCatalogPath = path.join(rootDir, 'extractions', 'superdesign', 'data', 'superdesign_catalog.json');
if (await fs.stat(superCatalogPath).catch(() => null)) {
  const superItems = JSON.parse(await fs.readFile(superCatalogPath, 'utf-8'));
  const superPrompts = superItems.map(item => {
    return {
      id: item.id,
      title: item.name,
      type: item.type,
      category: item.category,
      website: "Superdesign",
      previewUrl: item.previewUrl,
      localPreview: item.localPreview || null,
      promptText: `${item.promptAnchor}

### Technical Details:
- Feature: ${item.name} (${item.category})
- Workflow Focus: ${item.description}
- Stack: React, Tailwind CSS, Framer Motion / WebGL.
- Key Elements: Vector canvas transforms, stateful loaders, theme switching, responsive container cards.`
    };
  });

  const superPromptPath = path.join(rootDir, 'extractions', 'superdesign', 'data', 'superdesign_prompts.json');
  await fs.writeFile(superPromptPath, JSON.stringify(superPrompts, null, 2));
  console.log(`Generated ${superPrompts.length} prompts for Superdesign.`);
}

console.log('🎉 Prompt generation complete for all 3 extracted websites!');
