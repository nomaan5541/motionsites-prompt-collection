import { ArrowUpRight, X } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { CatalogItem } from "../data/prompts.generated";
import { canLivePreview } from "../lib/catalog";
import { CopyButton } from "./CopyButton";
import { MediaFrame } from "./MediaFrame";

export function PromptModal({ item, onClose }: { item: CatalogItem | null; onClose: () => void }) {
  useEffect(() => {
    if (!item) return;
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [item, onClose]);

  if (!item) return null;
  const livePreview = canLivePreview(item);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-black/78 px-3 py-5 backdrop-blur-lg sm:px-5" role="dialog" aria-modal="true">
      <div className="flex max-h-[min(900px,calc(100dvh-40px))] w-[min(1180px,calc(100vw-24px))] flex-col overflow-hidden rounded-[24px] border border-white/16 bg-[#202020] shadow-2xl sm:rounded-[28px]">
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
          <div className="min-w-0">
            <h2 className="truncate text-xl font-black uppercase tracking-[-0.02em] sm:text-2xl md:text-3xl">{item.title}</h2>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/48">
              {item.category} / {item.sourceMode === "original" ? "Original source" : "Working reconstruction"} / Free
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/18 bg-white/[0.04] text-white transition-colors hover:bg-white/10 sm:h-12 sm:w-12"
            aria-label="Close preview"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 gap-4 overflow-hidden p-4 sm:p-5 lg:grid-cols-[minmax(320px,0.86fr)_minmax(0,1.14fr)]">
          <div className="min-h-[220px] overflow-hidden rounded-[20px] lg:min-h-0">
            <MediaFrame item={item} className="h-full min-h-[220px] rounded-[20px] lg:min-h-0" />
          </div>
          <div className="flex min-h-[360px] min-w-0 flex-col overflow-hidden rounded-[20px] border border-white/10 bg-black/18 lg:min-h-0">
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-white/10 p-3 sm:p-4">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-white/60">Prompt</span>
              <div className="flex flex-wrap gap-2">
                {livePreview ? (
                  <Link
                    to={`/preview/${item.slug}`}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-white px-4 text-[11px] font-black uppercase tracking-[0.12em] text-[#171717] transition-transform hover:-translate-y-0.5 sm:px-5"
                  >
                    Live Preview
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : null}
                <CopyButton text={item.prompt} variant="gradient" />
              </div>
            </div>
            <pre className="min-h-0 flex-1 overflow-auto whitespace-pre-wrap break-words p-4 font-mono text-[13px] leading-6 text-white/72 [overflow-wrap:anywhere] sm:text-sm">
              {item.prompt}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
