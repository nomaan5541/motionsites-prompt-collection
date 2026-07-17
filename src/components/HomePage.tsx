import { ArrowRight, Rocket } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { catalogItems, catalogSummary, type CatalogItem } from "../data/prompts.generated";
import { gradientPacks } from "../data/gradients";
import { getBackgroundItems, getFeaturedItems } from "../lib/catalog";
import { CopyButton } from "./CopyButton";
import { MediaFrame } from "./MediaFrame";
import { PromptGrid } from "./PromptGrid";
import { PromptModal } from "./PromptModal";
import { SectionHeader } from "./SectionHeader";

export function HomePage() {
  const [selected, setSelected] = useState<CatalogItem | null>(null);
  const featured = getFeaturedItems(catalogItems, 9);
  const backgrounds = getBackgroundItems(catalogItems, 6);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="scene-grid absolute inset-x-0 top-0 -z-10 h-[560px] opacity-45" />
        <div className="page-shell flex min-h-[430px] flex-col justify-center py-10 md:min-h-[500px]">
          <div className="mx-auto max-w-3xl text-center">
            <a
              href="https://designrocket.io/"
              className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-[#ababab] transition-colors hover:text-white"
            >
              Powered by <Rocket className="h-4 w-4 text-[#f97316]" aria-hidden="true" /> Design Rocket
            </a>
            <h1 className="text-[clamp(2.4rem,5.1vw,4.7rem)] font-black uppercase leading-[0.86] tracking-[-0.055em] text-[#f5f5f5]">
              Unlock your AI
              <span className="motion-hero-gradient block">Design Superpowers</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[520px] text-base font-semibold leading-6 text-[#ababab]">
              Build beautiful landing pages in minutes with our ready-to-use prompt library. Just copy, paste, and
              launch.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/search"
                className="inline-flex h-14 items-center gap-2 rounded-full bg-gradient-to-b from-white to-[#dbeafe] px-8 text-lg font-black text-[#09090b] shadow-[0_16px_45px_rgba(219,234,254,0.16)] transition-transform hover:-translate-y-0.5"
              >
                Search Premium Prompts
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-sm font-medium text-[#ababab]">
            {catalogSummary.total} Premium Prompts · {catalogSummary.media.video || 0} animated previews · no paid gates
          </p>
        </div>
      </section>


      <section className="page-shell py-5">
        <SectionHeader
          title="Landing page prompts"
          copy="Every card is free to inspect and copy. Original prompts and reconstructed working prompts are treated as usable launch material."
        />
        <PromptGrid items={featured} onPreview={setSelected} />
      </section>

      <section className="page-shell py-12">
        <SectionHeader
          eyebrow="Animated backgrounds"
          title="Media references ready to copy"
          copy="Use preview URLs as visual references or quick background inputs when generating a matching landing page."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {backgrounds.map((item) => (
            <article key={item.slug} className="overflow-hidden rounded-[20px] border border-[#353233] bg-[#232222]">
              <MediaFrame item={item} className="h-[260px]" label="Preview" />
              <div className="space-y-3 p-4">
                <h2 className="text-lg font-black uppercase tracking-[-0.02em]">{item.title}</h2>
                <CopyButton text={item.mediaUrl || item.posterUrl || item.prompt} label="Copy URL" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell py-12">
        <SectionHeader
          eyebrow="Production gradients"
          title="Glassy gradient backgrounds"
          copy="Code-native gradients for sections, hero backdrops, and empty media states."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {gradientPacks.map((pack) => (
            <article key={pack.id} className="overflow-hidden rounded-[20px] border border-[#353233] bg-[#232222]">
              <div className="h-48" style={{ background: pack.css }} />
              <div className="space-y-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-black uppercase leading-5 tracking-[-0.02em]">{pack.title}</h2>
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/62">
                    {pack.count}
                  </span>
                </div>
                <p className="min-h-[60px] text-sm leading-5 text-white/54">{pack.description}</p>
                <CopyButton text={`background: ${pack.css};`} label="Copy CSS" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <PromptModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
