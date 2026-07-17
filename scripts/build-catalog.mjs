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
  "codercrest-hero": ["https://motionsites.ai/assets/codercrest-hero-B-d2p-pC.png", "https://motionsites.ai/assets/codercrest-hero-CoycO52t.gif"],
  "urban-jungle-hero": ["https://motionsites.ai/assets/hero-urban-jungle-poster-DNnMHsAj.png", "https://motionsites.ai/assets/hero-urban-jungle-preview-DUD-6bVK.gif"],
  "liquid-glass-agency": ["https://motionsites.ai/assets/hero-liquid-glass-agency-poster-BvnVaqJh.png", "https://motionsites.ai/assets/hero-liquid-glass-agency-preview-Cr5Q9-lc.gif"],
  "grow-ai-hero": ["https://motionsites.ai/assets/hero-grow-ai-poster-B-kSCKSN.png", "https://motionsites.ai/assets/hero-grow-ai-preview-BlQ8tAQ-.gif"],
  "ember-dsgn-hero": ["https://image.mux.com/iK2ACd5wEwi7ORN8i16kl59Cck01IREnB3hX6EnnqiUk/thumbnail.webp?width=1200&time=2", "https://image.mux.com/iK2ACd5wEwi7ORN8i16kl59Cck01IREnB3hX6EnnqiUk/animated.webp?width=640&fps=15"],
  "wisa-space-hero": ["https://motionsites.ai/assets/hero-wisa-space-poster-CWyENdkI.png", "https://motionsites.ai/assets/hero-wisa-space-preview-CAIFtU8c.gif"],
  "acreage-farming-hero": ["https://motionsites.ai/assets/hero-acreage-farming-poster-DA8kFOg1.png", "https://motionsites.ai/assets/hero-acreage-farming-preview-DY4bc7ni.gif"],
  "impressive-hero": ["https://motionsites.ai/assets/hero-impressive-poster-BPadbNDX.png", "https://motionsites.ai/assets/hero-impressive-preview-BCJtlSs2.gif"],
  "flowmate-landing": ["https://motionsites.ai/assets/hero-flowmate-poster-DDfS_CZz.png", "https://motionsites.ai/assets/hero-flowmate-preview-BmYI3ZvH.gif"],
  "luminex-hero": ["https://motionsites.ai/assets/hero-luminex-poster-9lhDX6Fl.png", "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif"],
  "nike-premium-landing": ["https://motionsites.ai/assets/hero-nike-premium-landing-poster-Bcg5HGjQ.png", "https://motionsites.ai/assets/hero-nike-premium-landing-preview-_VyIBlIe.gif"],
  "sentinel-ai-hero": ["https://motionsites.ai/assets/hero-sentinel-ai-poster-B7n15kua.png", "https://motionsites.ai/assets/hero-sentinel-ai-preview-BXas7Q1_.gif"],
  "slam-dunk-hero": ["https://motionsites.ai/assets/hero-slam-dunk-poster-Cd-dE4fD.png", "https://motionsites.ai/assets/hero-slam-dunk-preview-Cmg3K_S4.gif"],
  "crypto-wealth-hero": ["https://motionsites.ai/assets/hero-crypto-wealth-poster-DzHusafH.png", "https://motionsites.ai/assets/hero-crypto-wealth-preview-Cv79y7eb.gif"],
  "shamoni-hero": ["https://motionsites.ai/assets/hero-shamoni-poster-CgFgfjoV.png", "https://motionsites.ai/assets/hero-shamoni-preview-DfbPWZl9.gif"],
  "nexacore-hero": ["https://motionsites.ai/assets/hero-nexacore-poster-D8kt5SRH.png", "https://motionsites.ai/assets/hero-nexacore-preview-DtWEu8_f.gif"],
  "stellar-ai-v2-hero": ["https://motionsites.ai/assets/hero-stellar-ai-v2-poster-D2407pz-.png", "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif"],
  "taskly-hero": ["https://motionsites.ai/assets/hero-taskly-poster-B5eMEGQS.png", "https://motionsites.ai/assets/hero-taskly-preview-Dq2MKaI0.gif"],
  "xportfolio-hero": ["https://motionsites.ai/assets/hero-xportfolio-poster-B6q-pIN8.png", "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif"],
  "ai-designer-agency": ["https://motionsites.ai/assets/hero-ai-designer-agency-poster-CQqRSMUo.png", "https://motionsites.ai/assets/hero-ai-designer-agency-preview-vrAje6Od.gif"],
  "neovision-landing": ["https://motionsites.ai/assets/hero-neovision-poster-CIjls94N.png", "https://motionsites.ai/assets/hero-neovision-preview-qwRNOas1.gif"],
  "guardnet-landing": ["https://motionsites.ai/assets/hero-guardnet-poster-BgcbWciF.png", "https://motionsites.ai/assets/hero-guardnet-preview-DAQqiNXC.gif"],
  "automation-machines-hero": ["https://motionsites.ai/assets/hero-automation-machines-poster-CRJvUPpQ.png", "https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif"],
  "focus-ai-landing": ["https://motionsites.ai/assets/hero-focus-ai-poster-KA-Ezq1n.png", "https://motionsites.ai/assets/hero-focus-ai-preview-Bnad3D1L.gif"],
  "rivr-defi-landing": ["https://motionsites.ai/assets/landing-rivr-defi-poster-DCTiByUf.png", "https://motionsites.ai/assets/landing-rivr-defi-preview-BPVSgEtB.gif"],
  "yacht-club-hero": ["https://motionsites.ai/assets/hero-yacht-club-poster-_Oi_fq0F.png", "https://motionsites.ai/assets/hero-yacht-club-preview-BXyoIjIf.gif"],
  "ecommerce-website-landing": ["https://motionsites.ai/assets/hero-ecommerce-website-poster-DUcLYbYg.png", "https://motionsites.ai/assets/hero-ecommerce-website-preview-D7j_TrNR.gif"],
  "ecovolta-hero": ["https://motionsites.ai/assets/hero-ecovolta-poster-C62kq2ZR.png", "https://motionsites.ai/assets/hero-ecovolta-preview-BXrSPAWj.gif"],
  "orbit-engineers": ["https://motionsites.ai/assets/hero-orbit-engineers-poster-BT1ffUzn.png", null],
  "pro-ai-deck": ["https://motionsites.ai/assets/hero-pro-ai-deck-poster-CF077Cec.png", "https://motionsites.ai/assets/hero-pro-ai-deck-preview-BBbLJNeM.gif"],
  "terra-hero": ["https://motionsites.ai/assets/hero-terra-poster-BN-oVgFr.png", "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif"],
  "veloce-finance-landing": ["https://motionsites.ai/assets/hero-veloce-finance-poster-Crck1KtV.png", "https://motionsites.ai/assets/hero-veloce-finance-preview-DQW35gIt.gif"],
  "clubx-hero": ["https://motionsites.ai/assets/hero-clubx-poster-Dwv_zKz1.png", "https://motionsites.ai/assets/hero-clubx-preview-CpKCe8yV.gif"],
  "railroad-ai-hero": ["https://motionsites.ai/assets/hero-railroad-ai-poster-lVI2bwI8.png", "https://motionsites.ai/assets/hero-railroad-ai-preview-CBjplU90.gif"],
  "slate-hero": ["https://motionsites.ai/assets/slate-hero-DVrU4R-f.png", "https://motionsites.ai/assets/slate-hero-BY-9TCfd.gif"],
  "ecovolta-v2-hero": ["https://motionsites.ai/assets/hero-ecovolta-v2-poster-CuiiqzXg.png", "https://motionsites.ai/assets/hero-ecovolta-v2-preview-D8IVEFGK.gif"],
  "evr-ventures-hero": ["https://motionsites.ai/assets/hero-evr-ventures-poster-Bld4o1cl.png", "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif"],
  "deck-investor": ["https://motionsites.ai/assets/hero-deck-poster-yx2SqADM.png", "https://motionsites.ai/assets/hero-deck-preview-CbidQJxW.gif"],
  "vitara-hero": ["https://motionsites.ai/assets/hero-vitara-poster-CKA8M1gM.png", "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif"],
  "bionova-hero": ["https://motionsites.ai/assets/hero-bionova-poster-CPaKbq55.png", "https://motionsites.ai/assets/hero-bionova-preview-Sk76d0_D.gif"],
  "finlytic-hero": ["https://motionsites.ai/assets/hero-finlytic-poster-BKqseFhS.png", "https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif"],
  "nova-space-landing": ["https://motionsites.ai/assets/hero-nova-space-poster-BNMHPfK2.png", "https://motionsites.ai/assets/hero-nova-space-preview-ej0OOJ0M.gif"],
  "zenith-realty-landing": ["https://motionsites.ai/assets/landing-zenith-realty-poster-Pwf4HO6U.png", "https://motionsites.ai/assets/landing-zenith-realty-preview-Y1uTjYYl.gif"],
  "akor-security-landing": ["https://motionsites.ai/assets/hero-akor-security-poster-Cw0Ko1yz.png", "https://motionsites.ai/assets/hero-akor-security-preview-hRrwsPNf.gif"],
  "prioritize-hero": ["https://motionsites.ai/assets/hero-prioritize-preview-DlI3SYr4.png", "https://motionsites.ai/assets/hero-prioritize-preview-DlI3SYr4.png"],
  "planet-orbit-hero": ["https://motionsites.ai/assets/hero-planet-orbit-poster-CuWG70ga.png", "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif"],
  "mindloop-hero": ["https://motionsites.ai/assets/hero-mindloop-poster-2_RhEWJd.png", "https://motionsites.ai/assets/hero-mindloop-preview-BR8xW6xW.gif"],
  "nexus-hero": ["https://motionsites.ai/assets/hero-nexus-poster-fNblRje9.png", "https://motionsites.ai/assets/hero-nexus-preview-74RfhYpA.gif"],
  "nickel-hero": ["https://motionsites.ai/assets/hero-nickel-poster-Co3f0jXk.png", "https://motionsites.ai/assets/hero-nickel-preview-CnRoBZt5.gif"],
  "orbit-web3-hero": ["https://motionsites.ai/assets/hero-orbit-web3-poster-CsiRb_pp.png", "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif"],
  "apex-saas-hero": ["https://motionsites.ai/assets/hero-apex-saas-poster-CZ6BkKIa.png", "https://motionsites.ai/assets/hero-apex-saas-preview-CbnBKSPv.gif"],
  "vertex-ai-hero": ["https://motionsites.ai/assets/hero-vertex-ai-poster-DEZfbTg3.png", "https://motionsites.ai/assets/hero-vertex-ai-preview-Da80y3xa.gif"],
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
  const file = path.join(folderPath, "working-prompt.md");
  const prompt = fs.readFileSync(file, "utf8").trim();
  if (!prompt) {
    throw new Error(`Empty prompt: ${file}`);
  }
  return prompt;
}

function normalizeCategory(category, title, pageType) {
  const source = `${category || ""} ${title || ""}`.toLowerCase();
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

function mediaFromRecord(record, prompt) {
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
  const media = applyPublicPreviewOverride(record, mediaFromRecord(record, prompt));

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
    tags: Array.isArray(record.types) ? record.types : [],
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

// Check removed to allow dynamic amount of prompts

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

const moduleText = `/* eslint-disable */\n// Generated by scripts/build-catalog.mjs. Do not edit manually.\n\nexport type CatalogItem = {\n  id: string;\n  slug: string;\n  title: string;\n  category: string;\n  originalCategory: string;\n  pageType: string;\n  prompt: string;\n  folder: string;\n  mediaType: \"video\" | \"image\" | \"none\";\n  mediaUrl: string | null;\n  posterUrl: string | null;\n  animatedUrl: string | null;\n  sourceMode: \"original\" | \"reconstructed\";\n  access: \"free\";\n  sortOrder: number;\n  rowSpan: number;\n  createdAt: string | null;\n  tags: string[];\n};\n\nexport type CatalogSummary = {\n  total: number;\n  access: Record<string, number>;\n  sourceModes: Record<string, number>;\n  media: Record<string, number>;\n  categories: Record<string, number>;\n  generatedAt: string;\n};\n\nexport const catalogItems: CatalogItem[] = ${JSON.stringify(items, null, 2)};\n\nexport const catalogSummary: CatalogSummary = ${JSON.stringify(summary, null, 2)};\n`;

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, moduleText);
fs.writeFileSync(summaryFile, `${JSON.stringify(summary, null, 2)}\n`);

console.log(`Generated ${items.length} free catalog items -> ${path.relative(root, outFile)}`);
