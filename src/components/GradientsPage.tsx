import { gradientPacks } from "../data/gradients";
import { cardMotionStyle, resetCardPointer, updateCardPointer } from "../lib/cardMotion";
import { CopyButton } from "./CopyButton";
import { SectionHeader } from "./SectionHeader";

export function GradientsPage() {
  return (
    <section className="page-shell py-14">
      <SectionHeader
        eyebrow="Free gradient collection"
        title="Production-ready gradients in high resolution"
        copy="Copy CSS for glassy hero backgrounds, CTA sections, prompt-card fallbacks, and launch pages."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {gradientPacks.map((pack) => (
          <article
            key={pack.id}
            className="motion-card group relative isolate overflow-hidden rounded-[24px] border border-[#353233] bg-[#232222] shadow-card"
            style={cardMotionStyle}
            onPointerMove={updateCardPointer}
            onPointerLeave={resetCardPointer}
          >
            <div className="motion-card-sheen" aria-hidden="true" />
            <div className="motion-gradient-preview relative h-[340px]" style={{ background: pack.css }}>
              <div className="scene-grid absolute inset-0 opacity-35" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/62">{pack.count} swatches</p>
                <h2 className="mt-2 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
                  {pack.title}
                </h2>
              </div>
            </div>
            <div className="relative z-20 grid gap-4 p-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <p className="text-sm leading-6 text-white/58">{pack.description}</p>
              <CopyButton text={`background: ${pack.css};`} label="Copy CSS" variant="gradient" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
