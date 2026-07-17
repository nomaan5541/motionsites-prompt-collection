import type { CatalogItem } from "../data/prompts.generated";

export type LivePreviewContent = {
  brand: string;
  headline: string;
  subcopy: string;
  primaryCta: string;
  secondaryCta: string;
  navItems: string[];
  stats: Array<{ value: string; label: string }>;
  features: Array<{ title: string; body: string }>;
  videoUrl: string | null;
  imageUrl: string | null;
  accent: string;
  accent2: string;
  background: string;
  foreground: string;
  muted: string;
  surface: string;
  theme: "dark" | "light";
  archetype: "hero" | "agency" | "portfolio" | "dashboard" | "pricing" | "footer" | "case-studies" | "nft" | "signup" | "feature-grid";
  sectionNames: string[];
  cardTitles: string[];
  videoUrls: string[];
  imageUrls: string[];
  colors: string[];
};

const accents = ["#f43f5e", "#f97316", "#a78bfa", "#22d3ee", "#84cc16", "#f59e0b"];
const urlPattern = /https?:\/\/[^\s)`"'<>]+/g;
const hexPattern = /#[0-9a-fA-F]{3,8}\b/g;

export function buildLivePreviewContent(item: CatalogItem): LivePreviewContent {
  const prompt = item.prompt;
  const urls = extractUrls(prompt);
  const videoUrls = extractVideoUrls(urls, item);
  const imageUrls = extractImageUrls(urls, item);
  const colors = extractColors(prompt);
  const theme = inferTheme(prompt);
  const accent = pickAccent(colors, item.sortOrder);
  const accent2 = colors.find((color) => color.toLowerCase() !== accent.toLowerCase() && !isNeutralColor(color)) || accents[(item.sortOrder + 2) % accents.length];
  const tokens = inferTokens(prompt, theme, accent);
  const archetype = inferArchetype(item, prompt);
  const cardTitles = extractCardTitles(prompt, item.category);
  const sectionNames = extractSectionNames(prompt, item.pageType);
  const videoUrl = videoUrls[0] || null;
  const imageUrl =
    imageUrls[0] ||
    null;

  return {
    brand: extractBrand(prompt, item.title),
    headline: extractHeadline(prompt, item.title),
    subcopy: extractSubcopy(prompt, item.title),
    primaryCta: extractCta(prompt, "primary") || "Start now",
    secondaryCta: extractCta(prompt, "secondary") || "View preview",
    navItems: extractNavItems(prompt),
    stats: extractStats(prompt),
    features: extractFeatures(prompt, item.category, cardTitles),
    videoUrl,
    imageUrl,
    accent,
    accent2,
    background: tokens.background,
    foreground: tokens.foreground,
    muted: tokens.muted,
    surface: tokens.surface,
    theme,
    archetype,
    sectionNames,
    cardTitles,
    videoUrls,
    imageUrls,
    colors,
  };
}

function extractUrls(value: string) {
  return (value.match(urlPattern) || []).map((url) => url.replace(/[.,;:]+$/g, ""));
}

function extractVideoUrls(urls: string[], item: CatalogItem) {
  const candidates = [
    ...urls.filter((url) => /\.(mp4|m3u8)(\?|#|$)/i.test(url) || /stream\.mux\.com/i.test(url)),
    item.mediaType === "video" ? item.mediaUrl : null,
    item.animatedUrl,
  ].filter(Boolean) as string[];
  return dedupe(candidates);
}

function extractImageUrls(urls: string[], item: CatalogItem) {
  const candidates = [
    ...urls.filter((url) => /\.(png|jpe?g|webp|gif|avif)(\?|#|$)/i.test(url) || /images\.higgs\.ai|figma\.site|pexels\.com|github\.com/i.test(url)),
    item.posterUrl,
    item.mediaType === "image" ? item.mediaUrl : null,
    item.animatedUrl?.match(/\.(gif|webp)(\?|#|$)/i) ? item.animatedUrl : null,
  ].filter(Boolean) as string[];
  return dedupe(candidates);
}

function dedupe(values: string[]) {
  return values.filter((value, index, list) => list.indexOf(value) === index).slice(0, 12);
}

function extractBrand(prompt: string, fallback: string) {
  const patterns = [
    /called\s+["“]([^"”]+)["”]/i,
    /called\s+([A-Z][A-Za-z0-9 .&-]{2,40})\s+(?:using|with|--|—|[-.])/i,
    /for\s+["“]([^"”]+)["”]/i,
    /brand name:\s*([^\n]+)/i,
    /Logo:\s*["“]([^"”]+)["”]/i,
    /Logo text\s+["“]([^"”]+)["”]/i,
    /Left:\s*(?:Logo text|brand name)?\s*["“]([^"”]+)["”]/i,
    /for\s+(?:a|an)\s+[^.\n]+?\s+called\s+["“]([^"”]+)["”]/i,
  ];

  for (const pattern of patterns) {
    const match = prompt.match(pattern);
    if (match?.[1]) return cleanValue(match[1]).slice(0, 42);
  }

  return fallback;
}

function extractHeadline(prompt: string, fallback: string) {
  const explicit = firstMatch(prompt, [
    /H1:\s*["“]([^"”]+)["”]/i,
    /Heading:\s*["“]([^"”]+)["”]/i,
    /Main Heading:\s*["“]([^"”]+)["”]/i,
    /Headline h1:\s*["“]([^"”]+)["”]/i,
    /Text:\s*["“]([^"”]{12,140})["”]/i,
    /headline:\s*["“]([^"”]+)["”]/i,
  ]);
  if (explicit) return explicit;

  const headingBlock = prompt.match(/\*\*Main Heading:\*\*([\s\S]{0,700}?)(?:\n\n|\*\*)/i)?.[1];
  const quotedLines = headingBlock?.match(/["“]([^"”]+)["”]/g)?.map((value) => cleanValue(value.replace(/^["“]|["”]$/g, "")));
  if (quotedLines?.length) return quotedLines.slice(0, 4).join(" ");

  const singleMainHeading = prompt.match(/Main Heading:[\s\S]{0,260}?["“]([^"”]+)["”]/i)?.[1];
  if (singleMainHeading) return cleanValue(singleMainHeading);

  const quoted = Array.from(prompt.matchAll(/["“]([^"”]{18,100})["”]/g))
    .map((match) => cleanValue(match[1]))
    .filter((value) => !/https?:|font|className|initial|duration|hover|button|section|rounded|hidden/i.test(value));
  if (quoted.length) return quoted[0];

  return `${fallback} with premium motion`;
}

function extractSubcopy(prompt: string, title: string) {
  const explicit = firstMatch(prompt, [
    /Subheading:\s*["“]([^"”]+)["”]/i,
    /Subtext:[\s\S]{0,320}?["“]([^"”]+)["”]/i,
    /supporting paragraph[^\n]*\n?[-:]?\s*["“]([^"”]+)["”]/i,
  ]);
  if (explicit) return explicit;

  const sentence = prompt.match(/(?:Subtext|Subheading|supporting paragraph)[\s\S]{0,420}?([A-Z][^.\n]{45,180}\.)/i)?.[1];
  if (sentence) return cleanValue(sentence);

  return `${title} rendered as a responsive MotionSites-style live preview with cinematic media, crisp hierarchy, and conversion-ready sections.`;
}

function extractCta(prompt: string, kind: "primary" | "secondary") {
  const label = kind === "primary" ? "Primary CTA" : "Secondary CTA";
  return firstMatch(prompt, [
    new RegExp(`${label}:\\s*["“]([^"”]+)["”]`, "i"),
    kind === "primary" ? /CTA button:\s*["“]([^"”]+)["”]/i : /Beside it[\s\S]{0,120}?["“]([^"”]+)["”]/i,
    kind === "primary" ? /button\s+["“]([^"”]{3,32})["”]/i : /link\s+["“]([^"”]{3,32})["”]/i,
  ]);
}

function extractNavItems(prompt: string) {
  const navLine = prompt.match(/Nav links[^\n]+/i)?.[0] || prompt.match(/center nav links[^\n]+/i)?.[0] || "";
  const quoted = Array.from(navLine.matchAll(/["“]([^"”]+)["”]/g)).map((match) => cleanValue(match[1]));
  const colonList = navLine
    .replace(/^.*?--\s*/, "")
    .split(/,|—|-/)
    .map(cleanValue)
    .filter((item) => /^[A-Z][A-Za-z ]{2,18}$/.test(item));
  const items = [...quoted, ...colonList].filter((item, index, list) => list.indexOf(item) === index);
  return items.length >= 3 ? items.slice(0, 5) : ["Home", "Studio", "About", "Contact"];
}

function extractStats(prompt: string) {
  const stats = Array.from(prompt.matchAll(/["“]([^"”]{1,12})["”]\s*\/\s*["“]([^"”]{3,42})["”]/g)).map((match) => ({
    value: cleanValue(match[1]),
    label: cleanValue(match[2]),
  }));

  return stats.length
    ? stats.slice(0, 3)
    : [
        { value: "01", label: "Responsive" },
        { value: "02", label: "Motion-first" },
        { value: "03", label: "Launch-ready" },
      ];
}

function extractFeatures(prompt: string, category: string, cardTitles: string[]) {
  const proofLabels = prompt.match(/Proof labels:\s*([^\n]+)/i)?.[1];
  const labels = proofLabels
    ? Array.from(proofLabels.matchAll(/["“]([^"”]+)["”]/g)).map((match) => cleanValue(match[1]))
    : [];

  const source = labels.length ? labels : cardTitles.length ? cardTitles : ["Cinematic system", "Conversion sections", "Responsive motion"];
  return source.slice(0, 3).map((title, index) => ({
    title,
    body:
      index === 0
        ? `A polished ${category.toLowerCase()} opening with immediate brand signal.`
        : index === 1
          ? "Glass surfaces, strong typography, and clear action hierarchy."
          : "Built to adapt from mobile to wide desktop without losing energy.",
  }));
}

function inferTheme(prompt: string): "dark" | "light" {
  const lower = prompt.toLowerCase();
  const lightSignals = ["bg-white", "white background", "light gray", "#fcfcfc", "#efefef", "#f5f5f5", "bg-gray-50", "text-black"];
  const darkSignals = ["bg-black", "black background", "dark theme", "dark,", "dark ", "#000000", "#0a0a0a", "#010828", "text-white"];
  const lightScore = lightSignals.filter((signal) => lower.includes(signal)).length;
  const darkScore = darkSignals.filter((signal) => lower.includes(signal)).length;
  return lightScore > darkScore ? "light" : "dark";
}

function inferArchetype(item: CatalogItem, prompt: string): LivePreviewContent["archetype"] {
  const lower = `${item.category} ${item.originalCategory} ${item.title} ${prompt}`.toLowerCase();
  const label = `${item.category} ${item.originalCategory} ${item.title} ${item.pageType}`.toLowerCase();
  const explicitHero = /\bhero\b/.test(label);
  if (/pricing|plans|price row|best value/.test(lower) && !explicitHero) return "pricing";
  if (/footer|legal line|brand row|nav columns/.test(lower) && !explicitHero) return "footer";
  if (/case studies|projects catalog|project cards|marquee/.test(lower)) return "case-studies";
  if (/portfolio|3d creator|about me|services section|sticky/.test(lower)) return "portfolio";
  if (/nft|web3|crypto|defi|token|rarity/.test(lower)) return "nft";
  if (/\b(agency|studio|creative studio|design agency|branding agency|brand identity)\b/.test(lower)) return "agency";
  if (explicitHero) return "hero";
  if (/\b(signup|sign up|waitlist|email input|subscribe|newsletter|form)\b/.test(lower)) return "signup";
  if (/dashboard|saas|workflow|automation|ai builder|platform/.test(lower)) return "dashboard";
  if (/features|cards|accordion|tabs|process|capabilities|specifications/.test(lower)) return "feature-grid";
  return "hero";
}

function extractColors(prompt: string) {
  return dedupe((prompt.match(hexPattern) || []).map((color) => normalizeHex(color))).slice(0, 8);
}

function normalizeHex(color: string) {
  if (color.length === 4) {
    return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
  }
  return color.slice(0, 7);
}

function pickAccent(colors: string[], sortOrder: number) {
  return colors.find((color) => !isNeutralColor(color)) || accents[sortOrder % accents.length];
}

function isNeutralColor(color: string) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max - min < 18 || max < 24 || min > 232;
}

function inferTokens(prompt: string, theme: LivePreviewContent["theme"], accent: string) {
  const colors = extractColors(prompt);
  const lower = prompt.toLowerCase();
  const background =
    firstColorAfter(prompt, /background[^#]{0,80}(#[0-9a-fA-F]{6})/i) ||
    (lower.includes("deep navy") ? "#010828" : theme === "light" ? "#f5f5f5" : "#000000");
  const foreground =
    firstColorAfter(prompt, /(?:foreground|text color|primary text)[^#]{0,80}(#[0-9a-fA-F]{6})/i) ||
    (theme === "light" ? "#111111" : "#ffffff");
  const surface =
    firstColorAfter(prompt, /(?:surface|card|features cards|about card)[^#]{0,80}(#[0-9a-fA-F]{6})/i) ||
    (theme === "light" ? "#ffffff" : "#171717");
  const muted = theme === "light" ? "#5f6368" : "#a1a1aa";

  return {
    background: colors.includes(background) || background ? background : theme === "light" ? "#f5f5f5" : "#000000",
    foreground,
    muted,
    surface,
    accent,
  };
}

function firstColorAfter(prompt: string, pattern: RegExp) {
  return prompt.match(pattern)?.[1] || null;
}

function extractSectionNames(prompt: string, pageType: string) {
  const explicit = Array.from(prompt.matchAll(/SECTION\s+\d+\s*[:—-]\s*([^\n(]+)/gi)).map((match) => cleanValue(match[1]));
  const named = Array.from(prompt.matchAll(/\b(Hero|About|Features|Services|Projects|Pricing|FAQ|CTA|Footer|Case Studies|Mission|Solution|Philosophy|Collection|Capabilities)\b/gi)).map((match) =>
    cleanValue(match[1]),
  );
  const source = explicit.length ? explicit : named;
  const unique = source.filter((item, index, list) => item.length > 2 && list.findIndex((candidate) => candidate.toLowerCase() === item.toLowerCase()) === index);
  return unique.slice(0, 5).length ? unique.slice(0, 5) : [pageType === "hero" ? "Hero" : "Hero", "Features", "CTA"];
}

function extractCardTitles(prompt: string, category: string) {
  const quotedAfterCard = Array.from(prompt.matchAll(/(?:Card|Plan|Project|Title|Feature)\s*\d*[^"“\n]{0,80}["“]([^"”]{3,48})["”]/gi)).map((match) =>
    cleanValue(match[1]),
  );
  const planNames = Array.from(prompt.matchAll(/name:\s*["“]([^"”]{3,48})["”]/gi)).map((match) => cleanValue(match[1]));
  const markdownTitles = Array.from(prompt.matchAll(/\*\*([^*\n]{3,42})\*\*/g)).map((match) => cleanValue(match[1]));
  const source = [...quotedAfterCard, ...planNames, ...markdownTitles].filter((value) => !/section|container|wrapper|exact|video|font|color|hover|button/i.test(value));
  const unique = source.filter((item, index, list) => list.findIndex((candidate) => candidate.toLowerCase() === item.toLowerCase()) === index);
  return unique.slice(0, 6).length ? unique.slice(0, 6) : [`${category} System`, "Motion Layer", "Launch Surface"];
}

function firstMatch(prompt: string, patterns: RegExp[]) {
  for (const pattern of patterns) {
    const match = prompt.match(pattern);
    if (match?.[1]) return cleanValue(match[1]);
  }
  return null;
}

function cleanValue(value: string) {
  return value.replace(/[`*_]/g, "").replace(/\s+/g, " ").replace(/[.:,-]+$/g, "").trim();
}
