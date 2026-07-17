import { useState } from "react";
import { catalogItems } from "../data/prompts.generated";
import { cardMotionStyle, resetCardPointer, updateCardPointer } from "../lib/cardMotion";
import { getBackgroundItems } from "../lib/catalog";
import { CopyButton } from "./CopyButton";
import { MediaFrame } from "./MediaFrame";
import { SectionHeader } from "./SectionHeader";

export function BackgroundsPage() {
  const [showAll, setShowAll] = useState(false);
  const backgrounds = getBackgroundItems(catalogItems);
  const visible = showAll ? backgrounds : backgrounds.slice(0, 24);

  return (
    <section className="page-shell py-14">
      <SectionHeader
        eyebrow="Animated backgrounds"
        title="Preview media references"
        copy={`${backgrounds.length} public media references from the local prompt archive. Copy the URL or open the matching prompt from the catalogue.`}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((item) => (
          <article
            key={item.slug}
            className="motion-card group relative isolate overflow-hidden rounded-[20px] border border-[#353233] bg-[#232222] shadow-card"
            style={cardMotionStyle}
            onPointerMove={updateCardPointer}
            onPointerLeave={resetCardPointer}
          >
            <div className="motion-card-sheen" aria-hidden="true" />
            <MediaFrame item={item} className="h-[280px]" label={item.mediaType === "video" ? "Motion" : "Image"} />
            <div className="relative z-20 space-y-4 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-black uppercase leading-5 tracking-[-0.02em]">{item.title}</h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/44">{item.category}</p>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-100">
                  Free
                </span>
              </div>
              <CopyButton text={item.mediaUrl || item.posterUrl || ""} label="Copy URL" />
            </div>
          </article>
        ))}
      </div>
      {!showAll && backgrounds.length > visible.length ? (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="rounded-full bg-cta-gradient px-6 py-3 text-[12px] font-black uppercase tracking-[0.14em] text-white shadow-glow"
          >
            Show all backgrounds
          </button>
        </div>
      ) : null}
    </section>
  );
}
