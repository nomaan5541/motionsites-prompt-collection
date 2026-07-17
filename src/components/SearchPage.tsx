import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { catalogItems, type CatalogItem } from "../data/prompts.generated";
import { PromptGrid } from "./PromptGrid";
import { PromptModal } from "./PromptModal";
import { SectionHeader } from "./SectionHeader";
import { similarity } from "../lib/fuzzy";

const PAGE_SIZE = 24;

export function SearchPage() {
  const [selected, setSelected] = useState<CatalogItem | null>(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = catalogItems;
    if (query) {
      const q = query.toLowerCase();
      
      const scored = result.map((item) => {
        // exact match boost
        if (item.title.toLowerCase().includes(q) || item.prompt.toLowerCase().includes(q)) {
          return { item, score: 2 };
        }
        
        // fuzzy match
        const sim = similarity(q, item.title);
        return { item, score: sim };
      });
      
      // Filter out low scores (less than 0.3) unless they matched perfectly
      const matched = scored.filter(s => s.score > 0.3).sort((a, b) => b.score - a.score);
      result = matched.map(m => m.item);
    }
    return result;
  }, [query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <section className="page-shell py-10">
        <SectionHeader
          title="Premium Prompts Search"
          copy={`${filtered.length} matching prompts. Search, preview, copy, and customize without account gates.`}
        />

        <div className="mb-6 flex justify-center">
          <label className="flex h-12 w-full max-w-2xl items-center gap-3 rounded-full bg-[#202020] px-5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]">
            <Search className="h-5 w-5 text-white/50" aria-hidden="true" />
            <span className="sr-only">Search prompts</span>
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Search by name or keyword..."
              className="w-full border-0 bg-transparent text-base text-white outline-none placeholder:text-white/40"
            />
          </label>
        </div>

        <PromptGrid items={visible} onPreview={setSelected} />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <PageButton disabled={page === 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Previous
          </PageButton>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white/58">
            Page {page} of {pageCount}
          </span>
          <PageButton disabled={page === pageCount} onClick={() => setPage((value) => Math.min(pageCount, value + 1))}>
            Next
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </PageButton>
        </div>
      </section>
      <PromptModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}

function PageButton({
  children,
  disabled,
  onClick,
}: {
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-[12px] font-black uppercase tracking-[0.12em] text-white disabled:cursor-not-allowed disabled:opacity-35"
    >
      {children}
    </button>
  );
}
