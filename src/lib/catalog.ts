import { catalogItems, type CatalogItem } from "../data/prompts.generated";

export type CategoryStat = {
  name: string;
  count: number;
};

export const preferredCategories = [
  "Landing Pages",
  "Hero Sections",
  "SaaS",
  "Agency",
  "Pricing",
  "CTA",
  "Footers",
  "Features",
  "Social Proof",
];

export function getCategoryStats(items: readonly CatalogItem[] = catalogItems): CategoryStat[] {
  const counts = new Map<string, number>();
  for (const item of items) {
    counts.set(item.category, (counts.get(item.category) || 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => {
      const aIndex = preferredCategories.indexOf(a.name);
      const bIndex = preferredCategories.indexOf(b.name);
      if (aIndex !== -1 || bIndex !== -1) {
        return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
      }
      return b.count - a.count || a.name.localeCompare(b.name);
    });
}

export function filterCatalog(items: readonly CatalogItem[], category: string, query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  return items.filter((item) => {
    const categoryMatches = category === "All" || item.category === category;
    if (!categoryMatches) return false;
    if (!normalizedQuery) return true;
    return [item.title, item.category, item.originalCategory, item.pageType, item.prompt]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery);
  });
}

export function getFeaturedItems(items: readonly CatalogItem[] = catalogItems, limit = 12) {
  const withMedia = items.filter((item) => item.posterUrl || item.mediaUrl);
  return [...withMedia, ...items.filter((item) => !withMedia.includes(item))].slice(0, limit);
}

export function getBackgroundItems(items: readonly CatalogItem[] = catalogItems, limit?: number) {
  const backgrounds = items.filter((item) => item.mediaType !== "none");
  return typeof limit === "number" ? backgrounds.slice(0, limit) : backgrounds;
}

export function canLivePreview(item: CatalogItem) {
  return item.access === "free" && item.prompt.trim().length > 0;
}

export function findCatalogItemBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return catalogItems.find((item) => item.slug === slug);
}

export function getPageTitle(category: string) {
  if (category === "All") return "Real Landing Pages";
  return category;
}
