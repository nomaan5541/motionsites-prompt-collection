import type { CatalogItem } from "../data/prompts.generated";
import { PromptCard } from "./PromptCard";

export function PromptGrid({
  items,
  onPreview,
  emptyCopy = "No prompts match this filter.",
}: {
  items: readonly CatalogItem[];
  onPreview: (item: CatalogItem) => void;
  emptyCopy?: string;
}) {
  if (items.length === 0) {
    return (
      <div className="rounded-[28px] border border-dashed border-white/14 bg-white/[0.03] p-10 text-center text-white/56">
        {emptyCopy}
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <PromptCard key={item.slug} item={item} onPreview={onPreview} />
      ))}
    </div>
  );
}
