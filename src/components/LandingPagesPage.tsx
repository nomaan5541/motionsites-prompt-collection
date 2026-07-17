import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { catalogItems, type CatalogItem } from "../data/prompts.generated";
import { filterCatalog, getCategoryStats, getPageTitle } from "../lib/catalog";
import { PromptGrid } from "./PromptGrid";
import { PromptModal } from "./PromptModal";
import { SectionHeader } from "./SectionHeader";

const PAGE_SIZE = 24;

export function LandingPagesPage() {
  const [params, setParams] = useSearchParams();
  const [selected, setSelected] = useState<CatalogItem | null>(null);
  const [query, setQuery] = useState("");
  const activeCategory = params.get("category") || "All";
  const [page, setPage] = useState(1);
  const categories = useMemo(() => [{ name: "All", count: catalogItems.length }, ...getCategoryStats()], []);
  const filtered = useMemo(() => filterCatalog(catalogItems, activeCategory, query), [activeCategory, query]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function setCategory(category: string) {
    const next = new URLSearchParams(params);
    if (category === "All") next.delete("category");
    else next.set("category", category);
    setParams(next);
    setPage(1);
  }

  return (
    <>
      <section className="page-shell py-10">
        <SectionHeader
          title={getPageTitle(activeCategory)}
          copy={`${filtered.length} matching prompts. Filter, preview, copy, and customize without account gates.`}
        />

        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-full gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() => setCategory(category.name)}
                className={`h-11 shrink-0 rounded-full px-5 text-sm font-semibold transition-colors ${
                  activeCategory === category.name
                    ? "bg-white text-[#171717]"
                    : "bg-[#202020] text-[#ababab] hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <label className="flex h-11 w-full items-center gap-3 rounded-full bg-[#202020] px-4 lg:w-[320px]">
            <Search className="h-4 w-4 text-white/42" aria-hidden="true" />
            <span className="sr-only">Search prompts</span>
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Search prompts"
              className="w-full border-0 bg-transparent text-sm text-white outline-none placeholder:text-white/38"
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
