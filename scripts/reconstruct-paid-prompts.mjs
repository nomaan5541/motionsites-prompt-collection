import fs from "node:fs/promises";
import path from "node:path";

const archiveDir = path.resolve("motionsites-prompts");
const rawPath = path.join(archiveDir, "raw-results.json");
const markerStart = "<!-- RECONSTRUCTED_WORKING_PROMPT_START -->";
const markerEnd = "<!-- RECONSTRUCTED_WORKING_PROMPT_END -->";

const data = JSON.parse(await fs.readFile(rawPath, "utf8"));

const slug = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

const cleanTitle = (title) =>
  String(title || "Untitled")
    .replace(/\b(hero|section|landing page|landing|website|saas|design|ui|v2)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();

const sentenceTitle = (title) => {
  const base = cleanTitle(title);
  return base || title || "the product";
};

function pickConcept(record) {
  const hay = `${record.title} ${record.category} ${record.type} ${record.id}`.toLowerCase();
  const brand = sentenceTitle(record.title);

  const concepts = [
    {
      test: /solar|eco|volta|energy|green|evergreen|farming|acreage/,
      industry: "climate technology and renewable energy",
      palette: "sunlit amber, deep graphite, fresh green accents, soft sky gradients",
      scene: "cinematic solar fields, glass panels, natural landscapes, subtle data overlays",
      h1: `Power the next era with ${brand}`,
      sub: "A premium clean-energy experience with cinematic motion, crisp trust signals, and conversion-focused product storytelling.",
    },
    {
      test: /web3|nft|defi|crypto|orbit|eos|rivr|clubx|usd|wealth/,
      industry: "web3 finance and digital ownership",
      palette: "deep black, electric violet, cyan glow, brushed silver, luminous token accents",
      scene: "holographic grids, orbital token forms, abstract ledgers, encrypted motion trails",
      h1: `${brand} for the next financial internet`,
      sub: "A cinematic crypto-native interface that feels secure, premium, liquid, and fast.",
    },
    {
      test: /security|guard|sentinel|vault|securify|akor|cyber/,
      industry: "cybersecurity and data protection",
      palette: "midnight navy, black glass, signal green, icy blue, high-contrast white",
      scene: "encrypted nodes, shield geometry, scanning beams, secure command dashboards",
      h1: `Secure every layer with ${brand}`,
      sub: "A premium security hero with enterprise credibility, motion-led proof points, and calm technical confidence.",
    },
    {
      test: /finance|finflow|finlytic|payment|nickel|velo|financial|invoice|flowmate|apex/,
      industry: "fintech, payments, and financial operations",
      palette: "charcoal, ivory, mint, polished chrome, restrained electric blue",
      scene: "floating dashboards, balance cards, animated transaction streams, glass financial widgets",
      h1: `${brand} makes money movement feel effortless`,
      sub: "A polished fintech landing page with clear metrics, elegant charts, and a high-trust conversion path.",
    },
    {
      test: /realty|real estate|estate|yacht|jet|automotive|targo|car|luxury|ecommerce|botanical|daisy/,
      industry: "luxury commerce and premium lifestyle",
      palette: "warm ivory, deep black, champagne, muted gold, editorial neutrals",
      scene: "high-end product photography, cinematic interiors, refined editorial compositions",
      h1: `${brand} built for a more refined customer`,
      sub: "A luxury editorial landing page with dramatic visuals, crisp product hierarchy, and elegant purchase intent.",
    },
    {
      test: /agency|studio|creative|portfolio|designer|viktor|bold|framelix|logoisum|orbit engineers/,
      industry: "creative studio, agency, and portfolio",
      palette: "black, off-white, acid accent color, soft gradients, translucent glass",
      scene: "large typography, project tiles, creative reels, cursor-aware motion, layered portfolio cards",
      h1: `${brand} creates work people remember`,
      sub: "A bold agency experience with confident typography, premium motion, and a portfolio-first layout.",
    },
    {
      test: /space|nova|stellar|celestia|voyage|planet|aether|wisa|cosmic/,
      industry: "space technology and future exploration",
      palette: "black, starlight white, orbital blue, violet haze, solar orange highlights",
      scene: "full-bleed space footage, spacecraft silhouettes, orbital paths, nebula-like gradients",
      h1: `${brand} takes the future beyond orbit`,
      sub: "A cinematic space-tech landing page with deep contrast, elegant glass controls, and immersive scroll depth.",
    },
    {
      test: /ai|automation|neural|synapse|vertex|nexus|nexora|mindloop|datacore|taskora|slate|booked|aura|grow|coder|workflow/,
      industry: "AI SaaS and workflow automation",
      palette: "obsidian, clean white, electric blue, neon violet, soft glass surfaces",
      scene: "AI nodes, workflow maps, dashboard cards, generative particles, automation timelines",
      h1: `${brand} turns AI into everyday leverage`,
      sub: "A modern SaaS interface with layered dashboards, proof cards, and fast product storytelling.",
    },
    {
      test: /biotech|bio|prosthetic|bionova|naturecore/,
      industry: "biotech, health technology, and organic systems",
      palette: "deep graphite, lab white, bio green, cyan glass, soft organic gradients",
      scene: "microscopic forms, biological networks, clean lab surfaces, organic 3D structures",
      h1: `${brand} brings intelligent systems to life`,
      sub: "A premium biotech landing page balancing scientific credibility with cinematic organic motion.",
    },
    {
      test: /map|terra|geo|railroad/,
      industry: "mapping, logistics, and infrastructure intelligence",
      palette: "dark slate, terrain green, amber routes, clean white, steel blue",
      scene: "geospatial grids, animated route lines, terrain layers, operational dashboards",
      h1: `${brand} maps decisions in real time`,
      sub: "A data-rich landing page with map motion, operational cards, and enterprise-grade clarity.",
    },
    {
      test: /deck|presentation|investor/,
      industry: "investor storytelling and presentation design",
      palette: "black, ivory, gradient accents, tasteful chart colors, premium glass",
      scene: "slide previews, financial charts, founder story panels, animated deck thumbnails",
      h1: `${brand} turns strategy into a fundable story`,
      sub: "A presentation product page with high-signal sections, crisp visual proof, and conversion-ready CTAs.",
    },
    {
      test: /404|waitlist|signup|onboard|email|contact/,
      industry: "conversion utility page",
      palette: "dark neutral, clean white, one strong accent, subtle glass, soft background depth",
      scene: "focused form surfaces, helpful empty states, compact product proof, animated accent objects",
      h1: `${brand} keeps the next action obvious`,
      sub: "A focused conversion page with polished microcopy, strong hierarchy, and frictionless interaction states.",
    },
  ];

  return (
    concepts.find((concept) => concept.test.test(hay)) || {
      industry: record.category || "premium digital product",
      palette: "deep black, soft white, refined accent color, subtle gradients, glass highlights",
      scene: "cinematic abstract background, floating interface panels, strong editorial typography",
      h1: `${brand} with premium motion and clarity`,
      sub: "A polished MotionSites-style experience with high contrast, refined layout, and conversion-ready sections.",
    }
  );
}

function pageShape(record) {
  const category = `${record.category || ""} ${record.page_type || ""} ${record.type || ""}`.toLowerCase();
  if (/presentation|deck/.test(category)) return "presentation";
  if (/404/.test(category)) return "utility";
  if (/signup|waitlist|contact|email/.test(category)) return "conversion";
  if (record.page_type === "landing" || /landing|website/.test(category)) return "landing";
  return "hero";
}

function mediaLine(record) {
  if (record.video_preview_url) {
    return `Use the public preview video as the primary visual reference and, when building a browser prototype, as the full-bleed hero background: ${record.video_preview_url}`;
  }
  if (record.image_preview_url) {
    return `Use the public preview image as the primary visual reference and hero visual: ${record.image_preview_url}`;
  }
  return "No public media URL was exposed in the metadata. Reconstruct from the public card title, category, and MotionSites visual language.";
}

function sectionPlan(shape, concept, record) {
  if (shape === "presentation") {
    return [
      "Hero section with a large deck cover mockup, founder/investor copy, and a strong primary CTA.",
      "Slide-preview strip with 5 glass thumbnails: Problem, Market, Product, Traction, Ask.",
      "Metrics band with three large numbers and small animated chart cards.",
      "Final CTA panel with export/share actions and a subtle footer.",
    ];
  }
  if (shape === "utility") {
    return [
      "Compact full-screen utility layout with centered glass panel and oversized expressive headline.",
      "Helpful action buttons for returning home, contacting support, or exploring products.",
      "Animated background object related to the theme, kept subtle enough to preserve readability.",
    ];
  }
  if (shape === "conversion") {
    return [
      "Focused hero/form split with one primary conversion action and no generic marketing fluff.",
      "Small trust strip with product proof, social proof, or availability details.",
      "Secondary card row for benefits, privacy, speed, and next-step clarity.",
    ];
  }
  if (shape === "landing") {
    return [
      "Full-viewport hero with navbar, badge, large editorial headline, subcopy, primary/secondary CTAs, and two proof cards.",
      "Feature section with three glass cards, each with icon, tags, title, and short body copy.",
      "Showcase section with overlapping product/brand panels and motion-led visual depth.",
      "Conversion CTA/footer that repeats the offer with a more compact layout.",
    ];
  }
  return [
    "Single full-viewport hero with navbar, badge, large headline, subcopy, CTAs, and one visual proof row.",
    "Optional below-fold teaser band visible at the bottom edge so the page does not feel like a static poster.",
  ];
}

function reconstructedPrompt(record) {
  const concept = pickConcept(record);
  const shape = pageShape(record);
  const brand = sentenceTitle(record.title);
  const sections = sectionPlan(shape, concept, record);
  const hasFullPage = shape !== "hero";
  const h1 = concept.h1;

  return `Build Prompt: ${record.title}

Create a premium ${shape === "hero" ? "AI website hero section" : "AI landing page"} inspired by the public MotionSites preview for "${record.title}". This is a reconstruction from public metadata and preview media, not the original paid prompt text.

Reference input
- Prompt ID: ${record.id}
- Category: ${record.category || "Unknown"}
- Page type: ${record.page_type || "hero"}
- Visual reference: ${mediaLine(record)}

Core direction
Build a polished, production-grade ${hasFullPage ? "single-page website" : "hero experience"} for ${concept.industry}. The design should feel like a premium MotionSites prompt: cinematic composition, large confident typography, high contrast, strong negative space, glassy interface surfaces, careful micro-interactions, and an immediate first-viewport brand signal.

Tech stack
- React 18, Vite-compatible structure, Tailwind CSS, Framer Motion.
- Use lucide-react icons for interface symbols.
- Use CSS variables for the palette and reusable utility classes for glass, glow, grid, and text treatments.
- Keep the implementation responsive from 390px mobile to wide desktop.
- Avoid external paid assets. Use the preview URL above when provided, otherwise generate the background with CSS gradients, canvas particles, or simple CSS/HTML elements.

Visual system
- Brand name: ${brand}
- Palette: ${concept.palette}
- Scene/backdrop: ${concept.scene}
- Typography: one expressive display face for headlines and a clean geometric sans for UI/body text.
- Layout language: full-bleed background, translucent nav, rounded glass panels, tight badge chips, precise icon buttons, and strong hierarchy.
- Motion language: blur-in headline words, staggered card entrance, slow parallax on the background, hover lift on cards, and cursor-responsive highlights for desktop only.

Copy
- H1: "${h1}"
- Subheading: "${concept.sub}"
- Primary CTA: "Start now"
- Secondary CTA: "View preview"
- Badge: "Premium ${record.category || "Design"}"
- Proof labels: "Launch-ready", "Responsive", "Motion-first"

Structure
${sections.map((section, index) => `${index + 1}. ${section}`).join("\n")}

Component details
- Navbar: transparent/glass container, left-aligned wordmark "${brand}", center nav links, right CTA button. On mobile collapse into a compact menu button.
- Hero content: max-width text block with badge, oversized H1, supporting paragraph, two CTAs, and a small proof row.
- Main visual: if a video URL is available, place it as a muted autoplay background or framed hero media with object-cover. Add a subtle overlay only when readability needs it. If no media is available, create a CSS/canvas composition matching the theme above.
- Cards: use 8px to 18px radii depending on density, thin borders, inner highlights, and readable contrast. Do not nest cards inside cards.
- Icons: use familiar lucide icons, not decorative SVG blobs.
- Footer/CTA: concise final action, compact brand mark, no marketing essay.

Animation details
- Headline words animate from blur(12px), opacity 0, y 28px to blur(0), opacity 1, y 0 with 70ms stagger.
- Background has slow parallax based on scroll and gentle idle movement.
- Cards enter with opacity/y stagger and hover with transform: translateY(-4px).
- Respect prefers-reduced-motion by disabling parallax and heavy transitions.

Responsive requirements
- Mobile: keep the H1 readable, stack CTAs, reduce decorative media density, and keep all text inside containers.
- Desktop: use a 12-column grid or strong split composition with generous margins.
- Ensure the first viewport clearly communicates the brand, category, offer, and primary action.

Avoid
- Do not make a generic SaaS template.
- Do not use placeholder lorem ipsum.
- Do not use giant purple-only gradients as the whole design.
- Do not obscure text with decorative media.
- Do not add irrelevant characters or random mascots.

Quality bar
The final result should look like a premium AI-generated website prompt from MotionSites: specific, visual, animated, responsive, and ready to paste into an AI website builder.`;
}

function extractOriginalPrompt(item) {
  const text = item?.result?.prompt_text;
  return typeof text === "string" && text.trim() ? text.trim() : null;
}

function renderWorkingPrompt(item, prompt, mode) {
  const record = item.record;
  const title =
    mode === "original"
      ? `# Working Prompt: ${record.title}`
      : `# Reconstructed Working Prompt: ${record.title}`;
  const note =
    mode === "original"
      ? "This is the original full prompt returned by the MotionSites `get-prompt` endpoint in the current session."
      : "This is not the original paid prompt. It is a practical reconstruction from the public title, category, and preview media metadata.";

  return `${title}

${note}

## Metadata

- Prompt ID: \`${record.id}\`
- Category: ${record.category || ""}
- Page type: ${record.page_type || ""}
- Source status: ${item.status}
- Preview video: ${record.video_preview_url || ""}
- Preview image: ${record.image_preview_url || ""}

## Prompt

\`\`\`
${prompt.trim()}
\`\`\`
`;
}

function replaceMarkedSection(original, section) {
  const start = original.indexOf(markerStart);
  const end = original.indexOf(markerEnd);
  if (start !== -1 && end !== -1 && end > start) {
    return `${original.slice(0, start).trim()}\n\n${section}\n`;
  }
  return `${original.trim()}\n\n${section}\n`;
}

let originalCount = 0;
let reconstructedCount = 0;

for (const item of data.items) {
  const prompt = extractOriginalPrompt(item) || reconstructedPrompt(item.record);
  const mode = extractOriginalPrompt(item) ? "original" : "reconstructed";
  const folder = path.resolve(item.folder);
  const workingPath = path.join(folder, "working-prompt.md");
  const promptPath = path.join(folder, "prompt.md");
  const metadataPath = path.join(folder, "metadata.json");

  await fs.writeFile(workingPath, renderWorkingPrompt(item, prompt, mode), "utf8");

  const metadata = JSON.parse(await fs.readFile(metadataPath, "utf8"));
  metadata.workingPrompt = {
    mode,
    generatedAt: new Date().toISOString(),
    file: "working-prompt.md",
    note:
      mode === "original"
        ? "Original prompt fetched from get-prompt endpoint."
        : "Reconstructed from public metadata and preview asset references; not the original paid prompt.",
  };
  await fs.writeFile(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, "utf8");

  if (mode === "reconstructed") {
    const promptMd = await fs.readFile(promptPath, "utf8");
    const section = `${markerStart}

## Reconstructed Working Prompt

This is not the original paid prompt. It is a practical reconstruction from the public title, category, and preview media metadata.

\`\`\`
${prompt.trim()}
\`\`\`

${markerEnd}`;
    await fs.writeFile(promptPath, replaceMarkedSection(promptMd, section), "utf8");
    reconstructedCount += 1;
  } else {
    originalCount += 1;
  }
}

const indexPath = path.join(archiveDir, "INDEX.md");
const index = await fs.readFile(indexPath, "utf8");
const summary = `${markerStart}

## Working Prompt Coverage

- Working prompt files: ${data.items.length}
- Original fetched working prompts: ${originalCount}
- Reconstructed working prompts for paid-only items: ${reconstructedCount}
- Important: reconstructed prompts are usable approximations, not the original paid MotionSites prompt text.

${markerEnd}`;
await fs.writeFile(indexPath, replaceMarkedSection(index, summary), "utf8");

console.log(
  JSON.stringify(
    {
      folders: data.items.length,
      original: originalCount,
      reconstructed: reconstructedCount,
      workingPromptFiles: data.items.length,
    },
    null,
    2
  )
);
