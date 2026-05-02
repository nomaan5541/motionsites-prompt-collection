"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import ShaderDemo_ATC from "@/components/ui/atc-shader";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

export function CTA() {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <ShaderDemo_ATC className="h-full w-full" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 55%, transparent 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.85) 100%)",
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[2px] bg-white/10" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col px-6 md:px-10">
        <div className="flex items-center justify-between pt-10 md:pt-14">
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/70">
            CHAPTER IV / 004
          </div>
          <div className="hidden font-mono text-[11px] uppercase tracking-[0.28em] text-white/50 md:block">
            Signal · Open
          </div>
        </div>

        <div className="flex flex-1 flex-col items-start justify-center pb-20 pt-16 md:pb-32 md:pt-24">
          <EyebrowBadge className="!border-white/15 !bg-white/5 !text-white/70">
            Chapter IV · The Invitation
          </EyebrowBadge>

          <h2 className="mt-8 max-w-[18ch] text-5xl font-bold leading-[0.92] tracking-tighter text-white md:text-7xl lg:text-[124px]">
            Build with{" "}
            <span className="bg-gradient-to-r from-amber-200 via-white to-amber-300 bg-clip-text text-transparent">
              Devini.
            </span>
          </h2>

          <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-white/70 md:text-lg">
            Bring an idea, leave with a working artefact. We design, animate
            and ship interfaces that feel alive — pixel-perfect, performant,
            unmistakably yours.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@devini.studio"
              className="group relative inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold tracking-tight text-black transition-transform duration-300 hover:-translate-y-[2px] active:translate-y-[1px]"
              style={{
                boxShadow:
                  "0 18px 40px -12px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,0.85)",
              }}
            >
              Start a project
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </a>

            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium tracking-tight text-white/85 backdrop-blur-md transition-colors duration-300 hover:bg-white/10"
            >
              See the reel
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300 hero-dot" />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between pb-8 md:pb-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
            EST · MMXXVI
          </div>
          <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45 md:flex">
            <span>hello@devini.studio</span>
            <span className="h-3 w-[1px] bg-white/15" />
            <span>+1 (415) 870-2207</span>
          </div>
        </div>
      </div>
    </section>
  );
}
