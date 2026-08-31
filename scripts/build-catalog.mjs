import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const archiveDir = path.join(root, "motionsites-prompts");
const outFile = path.join(root, "src", "data", "prompts.generated.ts");
const summaryFile = path.join(root, "src", "data", "catalog-summary.json");

const publicPreviewOverrides = {
  "0": ["https://motionsites.ai/assets/hero-wealth-poster-D9mwBQ1R.png", "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif"],
  "1": ["https://motionsites.ai/assets/hero-new-era-poster-BIdtLrty.png", "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif"],
  "2": ["https://motionsites.ai/assets/hero-taskora-poster-Cgi3qyR1.png", "https://motionsites.ai/assets/hero-taskora-preview-BlRBv8IU.gif"],
  "3": ["https://motionsites.ai/assets/hero-clearinvoice-poster-D9rl57xj.png", "https://motionsites.ai/assets/hero-clearinvoice-preview-l3q8sam6.gif"],
  "4": ["https://motionsites.ai/assets/hero-datacore-preview-DWeq7Ls3.gif", "https://motionsites.ai/assets/hero-datacore-preview-DWeq7Ls3.gif"],
  "5": ["https://motionsites.ai/assets/hero-glassmorphism-agency-poster-BEMcgqRb.png", "https://motionsites.ai/assets/hero-glassmorphism-agency-preview-CGqeRoqP.gif"],
  "6": ["https://motionsites.ai/assets/hero-portfolio-bold-poster-Dhes_J9u.png", "https://motionsites.ai/assets/hero-portfolio-bold-preview-9Yfbi-Wg.gif"],
  "7": ["https://motionsites.ai/assets/hero-synapse-poster-BWu_t7F6.png", "https://motionsites.ai/assets/hero-synapse-preview-CP83ds5W.gif"],
  "8": ["https://motionsites.ai/assets/hero-new-era-auto-poster-CSiQtduG.png", "https://motionsites.ai/assets/hero-new-era-auto-preview-W56vp0xD.gif"],
  "9": ["https://motionsites.ai/assets/hero-web3-eos-poster-DF0_WdVS.png", null],
  "10": ["https://motionsites.ai/assets/hero-synapse-ai-poster-LxdBC470.png", "https://motionsites.ai/assets/hero-synapse-ai-preview-BjBuH68i.gif"],
  "11": ["https://motionsites.ai/assets/hero-weblex-poster-EhV1BiMD.png", "https://motionsites.ai/assets/hero-weblex-preview-BoIbrUHI.gif"],
  "12": ["https://motionsites.ai/assets/hero-targo-poster-B9vpoEb_.png", "https://motionsites.ai/assets/hero-targo-preview-BF9qQyMr.gif"],
  "13": ["https://motionsites.ai/assets/hero-framelix-poster-Da8_fUvr.png", "https://motionsites.ai/assets/hero-framelix-preview-DsyIImVY.gif"],
  "15": ["https://motionsites.ai/assets/hero-portfolio-dark-poster-CDlMFIzp.png", "https://motionsites.ai/assets/hero-portfolio-dark-preview-RZYzJHIL.gif"],
  "16": ["https://motionsites.ai/assets/hero-hr-saas-poster-Bj2hU3_c.png", "https://motionsites.ai/assets/hero-hr-saas-preview-Cf365Y1O.gif"],
  "18": ["https://motionsites.ai/assets/hero-loader-animation-preview-C3_SX_Io.gif", "https://motionsites.ai/assets/hero-loader-animation-preview-C3_SX_Io.gif"],
  "19": ["https://motionsites.ai/assets/hero-viktor-portfolio-poster-S-47espj.png", "https://motionsites.ai/assets/hero-viktor-portfolio-preview-Bd2-Dg_u.gif"],
  "20": ["https://motionsites.ai/assets/hero-space-voyage-poster-Dti9x8oS.png", "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif"],
  "21": ["https://motionsites.ai/assets/hero-buzzentic-poster-7nm68cTe.png", "https://motionsites.ai/assets/hero-buzzentic-preview-CbopM29R.gif"],
};

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function readPrompt(folderPath) {
  const workingFile = path.join(folderPath, "working-prompt.md");
  const promptFile = path.join(folderPath, "prompt.md");
  const file = fs.existsSync(workingFile) ? workingFile : promptFile;
  const prompt = fs.readFileSync(file, "utf8").trim();
  if (!prompt) {
    throw new Error(`Empty prompt: ${file}`);
  }
  return prompt;
}

function normalizeCategory(category, title, pageType) {
  const source = `${category || ""} ${title || ""}`.toLowerCase();
  if (source.includes("horizonx")) return "HorizonX Library";
  if (source.includes("21st.dev") || source.includes("21st")) return "21st.dev Registry";
  if (source.includes("superdesign")) return "Superdesign Canvas";
  if (source.includes("pricing")) return "Pricing";
  if (source.includes("footer")) return "Footers";
  if (source.includes("feature") || source.includes("benefit")) return "Features";
  if (source.includes("cta") || source.includes("contact") || source.includes("request")) return "CTA";
  if (source.includes("agency") || source.includes("studio")) return "Agency";
  if (source.includes("saas") || source.includes("software") || source.includes("dashboard")) return "SaaS";
  if (source.includes("testimonial") || source.includes("social proof")) return "Social Proof";
  if (pageType === "landing" || source.includes("landing")) return "Landing Pages";
  if (source.includes("hero")) return "Hero Sections";
  return category || "Prompt";
}

function extractMuxPlaybackId(url) {
  const match = String(url || "").match(/stream\.mux\.com\/([^/?#]+)\.m3u8/);
  return match?.[1] || null;
}

function muxImageUrls(url) {
  const muxId = extractMuxPlaybackId(url);
  return {
    posterUrl: muxId ? `https://image.mux.com/${muxId}/thumbnail.webp?width=1200&time=2` : null,
    animatedUrl: muxId ? `https://image.mux.com/${muxId}/animated.webp?width=640&fps=15` : null,
  };
}

function extractPromptPreviewUrl(prompt) {
  const urls = (String(prompt).match(/https?:\/\/[^\s)`"'<>]+/g) || []).map((url) =>
    url.replace(/[.,;:]+$/g, ""),
  );
  const image = urls.find((url) => /\.(png|jpe?g|webp|gif|avif)(\?|#|$)/i.test(url) || /images\.higgs\.ai/i.test(url));
  if (image) return { mediaType: "image", mediaUrl: image, posterUrl: image, animatedUrl: null };

  const mp4 = urls.find((url) => /\.mp4(\?|#|$)/i.test(url));
  if (mp4) return { mediaType: "video", mediaUrl: mp4, posterUrl: null, animatedUrl: null };

  const mux = urls.find((url) => /stream\.mux\.com\/[^/?#]+\.m3u8/i.test(url));
  if (mux) {
    return {
      mediaType: "video",
      mediaUrl: mux,
      ...muxImageUrls(mux),
    };
  }

  return null;
}

function findLocalMedia(record, folderName) {
  const id = String(record.id || folderName).toLowerCase();
  const candidates = [
    id,
    folderName,
    folderName.replace(/^\d+-/, ""),
    id.replace(/^sup-/, ""),
    id.replace(/^hx-/, ""),
    id.replace(/^dev21-/, ""),
    id.replace(/^ms-/, ""),
  ].filter(Boolean);

  for (const name of candidates) {
    // 1. Superdesign assets
    const supPng = path.join(root, "public", "assets", "superdesign", `${name}.png`);
    const supMp4 = path.join(root, "public", "assets", "superdesign", `${name}.mp4`);
    if (fs.existsSync(supPng)) {
      return {
        mediaType: "image",
        mediaUrl: `/assets/superdesign/${name}.png`,
        posterUrl: `/assets/superdesign/${name}.png`,
        animatedUrl: null,
      };
    }
    if (fs.existsSync(supMp4)) {
      return {
        mediaType: "video",
        mediaUrl: `/assets/superdesign/${name}.mp4`,
        posterUrl: fs.existsSync(supPng) ? `/assets/superdesign/${name}.png` : null,
        animatedUrl: null,
      };
    }

    // 2. Previews (webp, mp4, png)
    const prevWebp = path.join(root, "public", "assets", "previews", `${name}.webp`);
    const prevMp4 = path.join(root, "public", "assets", "previews", `${name}.mp4`);
    const prevPng = path.join(root, "public", "assets", "previews", `${name}.png`);

    if (fs.existsSync(prevWebp)) {
      return {
        mediaType: fs.existsSync(prevMp4) ? "video" : "image",
        mediaUrl: fs.existsSync(prevMp4) ? `/assets/previews/${name}.mp4` : `/assets/previews/${name}.webp`,
        posterUrl: `/assets/previews/${name}.webp`,
        animatedUrl: null,
      };
    }
    if (fs.existsSync(prevPng)) {
      return {
        mediaType: "image",
        mediaUrl: `/assets/previews/${name}.png`,
        posterUrl: `/assets/previews/${name}.png`,
        animatedUrl: null,
      };
    }
    if (fs.existsSync(prevMp4)) {
      return {
        mediaType: "video",
        mediaUrl: `/assets/previews/${name}.mp4`,
        posterUrl: null,
        animatedUrl: null,
      };
    }

    // 3. Community previews
    const commWebp = path.join(root, "public", "assets", "community", "superdesign", `${name}.webp`);
    if (fs.existsSync(commWebp)) {
      return {
        mediaType: "image",
        mediaUrl: `/assets/community/superdesign/${name}.webp`,
        posterUrl: `/assets/community/superdesign/${name}.webp`,
        animatedUrl: null,
      };
    }
  }

  return null;
}

function mediaFromRecord(record, prompt, folderName) {
  // Check local assets first
  const local = findLocalMedia(record, folderName);
  if (local) return local;

  if (record.video_preview_url) {
    return {
      mediaType: "video",
      mediaUrl: record.video_preview_url,
      ...muxImageUrls(record.video_preview_url),
    };
  }

  if (record.image_preview_url) {
    return {
      mediaType: "image",
      mediaUrl: record.image_preview_url,
      posterUrl: record.image_preview_url,
      animatedUrl: null,
    };
  }

  const promptPreview = extractPromptPreviewUrl(prompt);
  if (promptPreview) return promptPreview;

  return {
    mediaType: "none",
    mediaUrl: null,
    posterUrl: null,
    animatedUrl: null,
  };
}

function applyPublicPreviewOverride(record, media) {
  const preview = publicPreviewOverrides[record.id];
  const hasVisibleMedia = media.posterUrl || media.animatedUrl || (media.mediaType === "video" && media.mediaUrl?.endsWith(".mp4"));

  if (!preview || hasVisibleMedia) return media;

  const [posterUrl, animatedUrl] = preview;
  return {
    mediaType: animatedUrl ? "video" : "image",
    mediaUrl: animatedUrl || posterUrl,
    posterUrl,
    animatedUrl,
  };
}

function sourceMode(metadata) {
  if (metadata.workingPrompt?.mode === "original") return "original";
  if (metadata.workingPrompt?.mode === "reconstructed") return "reconstructed";
  return metadata.result?.code === "paid_only" ? "reconstructed" : "original";
}

function buildItem(folderName) {
  const folderPath = path.join(archiveDir, folderName);
  const metadata = readJson(path.join(folderPath, "metadata.json"));
  const record = metadata.record || {};
  const title = record.title || record.id || folderName;
  const pageType = record.page_type || record.type || "prompt";
  const prompt = readPrompt(folderPath);
  const media = applyPublicPreviewOverride(record, mediaFromRecord(record, prompt, folderName));

  return {
    id: record.id || folderName,
    slug: slugify(`${record.sort_order || ""}-${record.id || title || folderName}`) || slugify(folderName),
    title,
    category: normalizeCategory(record.category, title, pageType),
    originalCategory: record.category || "Uncategorized",
    pageType,
    prompt,
    folder: `motionsites-prompts/${folderName}`,
    mediaType: media.mediaType,
    mediaUrl: media.mediaUrl,
    posterUrl: media.posterUrl,
    animatedUrl: media.animatedUrl,
    sourceMode: sourceMode(metadata),
    access: "free",
    sortOrder: Number(record.sort_order || 9999),
    rowSpan: Number(record.row_span || 1),
    createdAt: record.created_at || null,
    tags: Array.isArray(record.types || record.tags) ? (record.types || record.tags) : [],
  };
}

if (!fs.existsSync(archiveDir)) {
  throw new Error(`Missing archive directory: ${archiveDir}`);
}

const folders = fs
  .readdirSync(archiveDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const items = folders.map(buildItem).sort((a, b) => a.sortOrder - b.sortOrder || a.title.localeCompare(b.title));

const emptyPrompt = items.find((item) => !item.prompt.trim());
if (emptyPrompt) {
  throw new Error(`Generated item has empty prompt: ${emptyPrompt.folder}`);
}

const gated = items.find((item) => item.access !== "free");
if (gated) {
  throw new Error(`Generated item is not free: ${gated.folder}`);
}

const summary = {
  total: items.length,
  access: {
    free: items.length,
  },
  sourceModes: items.reduce((acc, item) => {
    acc[item.sourceMode] = (acc[item.sourceMode] || 0) + 1;
    return acc;
  }, {}),
  media: items.reduce((acc, item) => {
    acc[item.mediaType] = (acc[item.mediaType] || 0) + 1;
    return acc;
  }, {}),
  categories: items.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {}),
  generatedAt: new Date().toISOString(),
};

const moduleText = `/* eslint-disable */
// Generated by scripts/build-catalog.mjs. Do not edit manually.

export type CatalogItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  originalCategory: string;
  pageType: string;
  prompt: string;
  folder: string;
  mediaType: "video" | "image" | "none";
  mediaUrl: string | null;
  posterUrl: string | null;
  animatedUrl: string | null;
  sourceMode: "original" | "reconstructed";
  access: "free";
  sortOrder: number;
  rowSpan: number;
  createdAt: string | null;
  tags: string[];
};

export type CatalogSummary = {
  total: number;
  access: Record<string, number>;
  sourceModes: Record<string, number>;
  media: Record<string, number>;
  categories: Record<string, number>;
  generatedAt: string;
};

export const catalogItems: CatalogItem[] = ${JSON.stringify(items, null, 2)};

export const catalogSummary: CatalogSummary = ${JSON.stringify(summary, null, 2)};
`;

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, moduleText);
fs.writeFileSync(summaryFile, `${JSON.stringify(summary, null, 2)}\n`);

console.log(`Generated ${items.length} free catalog items -> ${path.relative(root, outFile)}`);
console.log(`Media breakdown:`, summary.media);
console.log(`Category breakdown:`, summary.categories);
