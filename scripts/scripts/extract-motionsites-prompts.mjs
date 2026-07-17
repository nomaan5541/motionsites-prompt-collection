import fs from "node:fs/promises";
import path from "node:path";

const SUPABASE_URL = process.env.MOTIONSITES_SUPABASE_URL;
const ANON_KEY = process.env.MOTIONSITES_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !ANON_KEY) {
  throw new Error("Set MOTIONSITES_SUPABASE_URL and MOTIONSITES_SUPABASE_ANON_KEY before running this extractor.");
}

const outDir = path.resolve("motionsites-prompts");
const headers = {
  apikey: ANON_KEY,
  authorization: `Bearer ${ANON_KEY}`,
};

const promptFields = [
  "id",
  "title",
  "category",
  "sort_order",
  "type",
  "types",
  "created_at",
  "page_type",
  "row_span",
  "is_free",
  "image_preview_url",
  "video_preview_url",
].join(",");

const slugify = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);

const cleanMd = (value) => String(value || "").replace(/\r\n/g, "\n").trim();

const fence = (value, lang = "") => {
  const body = cleanMd(value);
  const ticks = body.includes("```") ? "````" : "```";
  return `${ticks}${lang}\n${body}\n${ticks}`;
};

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  const text = await response.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Non-JSON response from ${url}: ${text.slice(0, 500)}`);
  }
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} from ${url}: ${JSON.stringify(json).slice(0, 500)}`);
  }
  return json;
}

async function fetchPrompt(promptId) {
  return fetchJson(`${SUPABASE_URL}/functions/v1/get-prompt`, {
    method: "POST",
    headers: {
      ...headers,
      "content-type": "application/json",
    },
    body: JSON.stringify({ prompt_id: promptId }),
  });
}

function renderPromptMarkdown(record, result, source) {
  const status = result?.prompt_text ? "fetched" : result?.code || "unavailable";
  const lines = [
    `# ${record.title || record.id}`,
    "",
    "## Metadata",
    "",
    `- Source: ${source}`,
    `- Prompt ID: \`${record.id}\``,
    `- Title: ${record.title || ""}`,
    `- Category: ${record.category || ""}`,
    `- Type: ${record.type || ""}`,
    `- Types: ${(record.types || []).join(", ") || ""}`,
    `- Page type: ${record.page_type || ""}`,
    `- Sort order: ${record.sort_order ?? ""}`,
    `- Free in site metadata: ${record.is_free === true ? "yes" : "no"}`,
    `- Fetch status: ${status}`,
    "",
  ];

  if (record.image_preview_url || record.video_preview_url) {
    lines.push("## Preview Assets", "");
    if (record.image_preview_url) lines.push(`- Image: ${record.image_preview_url}`);
    if (record.video_preview_url) lines.push(`- Video: ${record.video_preview_url}`);
    lines.push("");
  }

  if (result?.prompt_text) {
    lines.push("## Full Prompt", "", fence(result.prompt_text), "");
  } else {
    lines.push(
      "## Full Prompt",
      "",
      "Not available from the current public/browser session.",
      "",
      `The MotionSites \`get-prompt\` endpoint returned \`${status}\` for this prompt. This usually means the design is part of Unlimited Access or otherwise gated by the site.`,
      ""
    );
  }

  if (Array.isArray(result?.sections) && result.sections.length > 0) {
    lines.push("## Sections", "");
    for (const section of result.sections) {
      lines.push(`### ${section.name || `Section ${section.sort_order ?? ""}`}`.trim(), "");
      lines.push(fence(section.prompt_text || ""), "");
    }
  }

  if (Array.isArray(result?.section_names) && result.section_names.length > 0 && (!result.sections || result.sections.length === 0)) {
    lines.push("## Section Names", "");
    for (const sectionName of result.section_names) lines.push(`- ${sectionName}`);
    lines.push("");
  }

  return `${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  const url =
    `${SUPABASE_URL}/rest/v1/prompts?select=${encodeURIComponent(promptFields)}` +
    "&order=sort_order.asc.nullslast&order=created_at.desc.nullslast&limit=1000";

  const records = await fetchJson(url, { headers });
  const unique = [];
  const seen = new Set();
  for (const record of records) {
    if (!record?.id || seen.has(record.id)) continue;
    seen.add(record.id);
    unique.push(record);
  }

  const source = "https://motionsites.ai/";
  const raw = new Array(unique.length);

  async function processRecord(record, i) {
    const order = String(record.sort_order ?? i + 1).padStart(3, "0");
    const folderSlug = slugify(`${order}-${record.title || record.id}-${record.id}`);
    const folder = path.join(outDir, folderSlug);
    await fs.mkdir(folder, { recursive: true });

    let result;
    try {
      result = await fetchPrompt(record.id);
    } catch (error) {
      result = {
        error: error.message,
        code: "request_failed",
        prompt_text: null,
        sections: [],
        section_names: [],
      };
    }

    const status = result?.prompt_text ? "fetched" : result?.code || "unavailable";

    await fs.writeFile(path.join(folder, "prompt.md"), renderPromptMarkdown(record, result, source), "utf8");
    await fs.writeFile(path.join(folder, "metadata.json"), `${JSON.stringify({ record, result }, null, 2)}\n`, "utf8");

    return { record, result, folder: path.relative(process.cwd(), folder), folderSlug, status };
  }

  let cursor = 0;
  const workerCount = 8;
  async function worker() {
    while (cursor < unique.length) {
      const i = cursor;
      cursor += 1;
      raw[i] = await processRecord(unique[i], i);
      if ((i + 1) % 25 === 0 || i + 1 === unique.length) {
        console.log(`processed ${i + 1}/${unique.length}`);
      }
    }
  }

  await Promise.all(Array.from({ length: workerCount }, () => worker()));

  const fetched = raw.filter((item) => item.status === "fetched").length;
  const failed = raw.filter((item) => item.status === "request_failed").length;
  const locked = raw.length - fetched - failed;
  const indexRows = raw.map(
    ({ record, folderSlug, status }) =>
      `| ${record.sort_order ?? ""} | ${record.title || record.id} | \`${record.id}\` | ${record.category || ""} | ${record.page_type || ""} | ${record.is_free === true ? "yes" : "no"} | ${status} | [prompt.md](./${folderSlug}/prompt.md) |`
  );

  const fetchedAt = new Date().toISOString();
  const index = [
    "# MotionSites Prompt Extraction",
    "",
    `Fetched at: ${fetchedAt}`,
    "",
    "This archive was built from the live MotionSites catalog metadata and the same `get-prompt` endpoint used by the site UI. Locked Unlimited prompts are recorded with their endpoint status instead of being bypassed.",
    "",
    "## Summary",
    "",
    `- Total prompt records: ${unique.length}`,
    `- Full prompts fetched: ${fetched}`,
    `- Locked/unavailable prompts: ${locked}`,
    `- Request failures: ${failed}`,
    "",
    "## Prompts",
    "",
    "| Sort | Title | ID | Category | Page Type | Free | Status | File |",
    "| ---: | --- | --- | --- | --- | --- | --- | --- |",
    ...indexRows,
    "",
  ].join("\n");

  await fs.writeFile(path.join(outDir, "INDEX.md"), index, "utf8");
  await fs.writeFile(path.join(outDir, "raw-results.json"), `${JSON.stringify({ fetchedAt, summary: { total: unique.length, fetched, locked, failed }, items: raw }, null, 2)}\n`, "utf8");

  console.log(JSON.stringify({ total: unique.length, fetched, locked, failed, outDir }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
