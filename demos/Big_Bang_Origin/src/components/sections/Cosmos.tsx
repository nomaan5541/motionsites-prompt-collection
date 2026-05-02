"use client";

import { useEffect, useRef } from "react";
import Core, { damp } from "smooothy";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

type CosmicType = "nebula" | "galaxy" | "remnant" | "planetary";

type CosmicObject = {
  catalog: string;
  name: string;
  type: CosmicType;
  distance: string;
  classification: string;
  observed: string;
  ra: string;
  palette: { core: string; shell: string; void: string; accent: string };
};

const ROW_TOP: CosmicObject[] = [
  {
    catalog: "M 42",
    name: "Orion Nebula",
    type: "nebula",
    distance: "1,344 ly",
    classification: "EMISSION",
    observed: "1610 / GALILEO",
    ra: "05ʰ 35ᵐ −05° 23′",
    palette: { core: "#fbbf24", shell: "#ec4899", void: "#150a24", accent: "#22d3ee" },
  },
  {
    catalog: "M 31",
    name: "Andromeda",
    type: "galaxy",
    distance: "2.5 Mly",
    classification: "SPIRAL",
    observed: "964 / AL-SUFI",
    ra: "00ʰ 42ᵐ +41° 16′",
    palette: { core: "#fef3c7", shell: "#f59e0b", void: "#0a0716", accent: "#a855f7" },
  },
  {
    catalog: "M 1",
    name: "Crab Nebula",
    type: "remnant",
    distance: "6,500 ly",
    classification: "SN REMNANT",
    observed: "1054 / SUNG",
    ra: "05ʰ 34ᵐ +22° 00′",
    palette: { core: "#fde68a", shell: "#dc2626", void: "#180808", accent: "#3b82f6" },
  },
  {
    catalog: "NGC 7293",
    name: "Helix",
    type: "planetary",
    distance: "650 ly",
    classification: "PLANETARY",
    observed: "1824 / HARDING",
    ra: "22ʰ 29ᵐ −20° 50′",
    palette: { core: "#f87171", shell: "#06b6d4", void: "#06141c", accent: "#fbbf24" },
  },
  {
    catalog: "M 104",
    name: "Sombrero",
    type: "galaxy",
    distance: "31 Mly",
    classification: "LENTICULAR",
    observed: "1781 / MÉCHAIN",
    ra: "12ʰ 39ᵐ −11° 37′",
    palette: { core: "#fef3c7", shell: "#a16207", void: "#0a0a14", accent: "#fb923c" },
  },
  {
    catalog: "M 51",
    name: "Whirlpool",
    type: "galaxy",
    distance: "23 Mly",
    classification: "SPIRAL",
    observed: "1773 / MESSIER",
    ra: "13ʰ 29ᵐ +47° 11′",
    palette: { core: "#fbbf24", shell: "#3b82f6", void: "#070b22", accent: "#ec4899" },
  },
  {
    catalog: "NGC 6543",
    name: "Cat's Eye",
    type: "planetary",
    distance: "3,300 ly",
    classification: "PLANETARY",
    observed: "1786 / HERSCHEL",
    ra: "17ʰ 58ᵐ +66° 38′",
    palette: { core: "#34d399", shell: "#7c3aed", void: "#06121a", accent: "#fde68a" },
  },
  {
    catalog: "NGC 1300",
    name: "Barred Spiral",
    type: "galaxy",
    distance: "61 Mly",
    classification: "SBbc",
    observed: "1835 / HERSCHEL",
    ra: "03ʰ 20ᵐ −19° 25′",
    palette: { core: "#fef3c7", shell: "#0ea5e9", void: "#040816", accent: "#f97316" },
  },
];

const ROW_BOTTOM: CosmicObject[] = [
  {
    catalog: "M 16",
    name: "Eagle (Pillars)",
    type: "nebula",
    distance: "7,000 ly",
    classification: "STAR FORM.",
    observed: "1745 / DE CHÉSEAUX",
    ra: "18ʰ 18ᵐ −13° 49′",
    palette: { core: "#a78bfa", shell: "#f59e0b", void: "#0a081c", accent: "#22d3ee" },
  },
  {
    catalog: "NGC 3372",
    name: "Carina",
    type: "nebula",
    distance: "8,500 ly",
    classification: "EMISSION",
    observed: "1751 / LACAILLE",
    ra: "10ʰ 45ᵐ −59° 52′",
    palette: { core: "#fbbf24", shell: "#ef4444", void: "#180808", accent: "#06b6d4" },
  },
  {
    catalog: "Cas A",
    name: "Cassiopeia A",
    type: "remnant",
    distance: "11,000 ly",
    classification: "SN REMNANT",
    observed: "1947 / RYLE",
    ra: "23ʰ 23ᵐ +58° 49′",
    palette: { core: "#fde68a", shell: "#fb923c", void: "#0d0a14", accent: "#7c3aed" },
  },
  {
    catalog: "M 17",
    name: "Omega",
    type: "nebula",
    distance: "5,500 ly",
    classification: "EMISSION",
    observed: "1745 / DE CHÉSEAUX",
    ra: "18ʰ 21ᵐ −16° 11′",
    palette: { core: "#fbbf24", shell: "#22d3ee", void: "#06121a", accent: "#ec4899" },
  },
  {
    catalog: "NGC 6960",
    name: "Veil",
    type: "remnant",
    distance: "2,400 ly",
    classification: "SN REMNANT",
    observed: "1784 / HERSCHEL",
    ra: "20ʰ 45ᵐ +30° 43′",
    palette: { core: "#67e8f9", shell: "#a855f7", void: "#0a081c", accent: "#fde68a" },
  },
  {
    catalog: "M 8",
    name: "Lagoon",
    type: "nebula",
    distance: "4,100 ly",
    classification: "EMISSION",
    observed: "1654 / HODIERNA",
    ra: "18ʰ 03ᵐ −24° 23′",
    palette: { core: "#f43f5e", shell: "#3b82f6", void: "#0a0816", accent: "#fbbf24" },
  },
  {
    catalog: "SN 1987A",
    name: "Tarantula Echo",
    type: "remnant",
    distance: "168,000 ly",
    classification: "SN REMNANT",
    observed: "1987 / SHELTON",
    ra: "05ʰ 35ᵐ −69° 16′",
    palette: { core: "#fde68a", shell: "#dc2626", void: "#0d0014", accent: "#22d3ee" },
  },
  {
    catalog: "NGC 1499",
    name: "California",
    type: "nebula",
    distance: "1,000 ly",
    classification: "EMISSION",
    observed: "1884 / BARNARD",
    ra: "04ʰ 03ᵐ +36° 25′",
    palette: { core: "#ef4444", shell: "#f97316", void: "#180a0a", accent: "#a855f7" },
  },
];

function cosmicLayers(obj: CosmicObject): string {
  const { core, shell, void: bg, accent } = obj.palette;
  switch (obj.type) {
    case "galaxy":
      return [
        `radial-gradient(ellipse 70% 22% at 50% 50%, ${core}cc 0%, ${core}33 14%, transparent 60%)`,
        `radial-gradient(ellipse 96% 32% at 50% 50%, ${shell}55 0%, transparent 70%)`,
        `conic-gradient(from 200deg at 50% 50%, ${accent}26 0deg, transparent 110deg, ${shell}3a 220deg, transparent 320deg, ${accent}26 360deg)`,
        `radial-gradient(circle, ${bg} 0%, ${bg} 100%)`,
      ].join(", ");
    case "nebula":
      return [
        `radial-gradient(circle at 32% 38%, ${core}cc 0%, transparent 42%)`,
        `radial-gradient(circle at 70% 62%, ${shell}aa 0%, transparent 55%)`,
        `radial-gradient(circle at 50% 80%, ${accent}55 0%, transparent 50%)`,
        `radial-gradient(circle, ${bg} 0%, ${bg} 100%)`,
      ].join(", ");
    case "remnant":
      return [
        `radial-gradient(circle at 50% 50%, ${core}ee 0%, ${core}55 8%, transparent 24%)`,
        `radial-gradient(circle at 50% 50%, ${shell}88 14%, transparent 50%)`,
        `conic-gradient(from 0deg at 50% 50%, ${shell}33 0deg, transparent 18deg, ${shell}33 36deg, transparent 54deg, ${shell}33 72deg, transparent 90deg, ${shell}33 108deg, transparent 126deg, ${shell}33 144deg, transparent 162deg, ${shell}33 180deg, transparent 198deg)`,
        `radial-gradient(circle, ${bg} 0%, ${bg} 100%)`,
      ].join(", ");
    case "planetary":
      return [
        `radial-gradient(circle at 50% 50%, ${core}ff 0%, ${core}66 9%, transparent 18%)`,
        `radial-gradient(circle at 50% 50%, transparent 26%, ${shell}88 32%, transparent 42%)`,
        `radial-gradient(circle at 50% 50%, transparent 48%, ${accent}3a 52%, transparent 62%)`,
        `radial-gradient(circle, ${bg} 0%, ${bg} 100%)`,
      ].join(", ");
  }
}

function CosmicArt({ obj }: { obj: CosmicObject }) {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{ background: cosmicLayers(obj) }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.85) 0.5px, transparent 0.6px), radial-gradient(rgba(255,255,255,0.55) 0.4px, transparent 0.5px)",
          backgroundSize: "62px 78px, 110px 90px",
          backgroundPosition: "0 0, 30px 25px",
        }}
        aria-hidden
      />
      <div className="film-grain" aria-hidden />
    </>
  );
}

function Tile({ obj, idx, total }: { obj: CosmicObject; idx: number; total: number }) {
  return (
    <div className="cosmic-slide flex-shrink-0 px-2.5 md:px-3">
      <div
        className="cosmic-tile relative aspect-[3/4] w-[72vw] max-w-[320px] overflow-hidden rounded-[24px] border border-white/10 bg-black md:w-[26vw] md:max-w-[360px]"
        data-tile
      >
        <CosmicArt obj={obj} />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/85">
            {obj.catalog}
          </div>
          <div className="rounded-full border border-white/15 bg-black/40 px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">
            {obj.classification}
          </div>
        </div>

        <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2">
          <div className="font-mono text-[8.5px] uppercase tracking-[0.32em] text-white/35 [writing-mode:vertical-rl] [transform:rotate(180deg)]">
            {obj.ra}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 rounded-[16px] border border-white/12 bg-black/45 p-3 backdrop-blur-xl backdrop-saturate-150">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold leading-none tracking-tight text-white md:text-lg">
              {obj.name}
            </h3>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/50">
              {String(idx + 1).padStart(2, "0")} / {total}
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/55">
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            <span>{obj.distance}</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="truncate text-white/45">{obj.observed}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function useSmoothRow(opts: {
  lerp?: number;
  drag?: number;
  reverse?: boolean;
  skew?: number;
  drift?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = ref.current;
    if (!wrapper) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let lerpedSpeed = 0;

    const slider = new Core(wrapper, {
      infinite: true,
      snap: false,
      lerpFactor: opts.lerp ?? 0.08,
      dragSensitivity: opts.drag ?? 0.005,
      scrollInput: false,
      speedDecay: 0.92,
    });

    const tiles = Array.from(
      wrapper.querySelectorAll<HTMLElement>("[data-tile]")
    );

    const driftRate = reduce ? 0 : opts.drift ?? 0.18;
    const driftDir = opts.reverse ? -1 : 1;

    const tick = () => {
      slider.update();
      const dt = slider.deltaTime || 0.016;

      if (driftRate > 0 && !slider.isDragging && !slider.isTouching) {
        slider.target += driftDir * dt * driftRate;
      }

      lerpedSpeed = damp(lerpedSpeed, slider.speed, 6, dt);
      const clamped = Math.max(-0.6, Math.min(0.6, lerpedSpeed));
      const skew = reduce ? 0 : clamped * (opts.skew ?? 14);
      const sy = reduce ? 1 : 1 - Math.min(0.05, Math.abs(clamped) * 0.45);
      const blur =
        reduce || Math.abs(clamped) < 0.05
          ? 0
          : Math.min(5, Math.abs(clamped) * 9);
      const transform = `skewX(${skew.toFixed(2)}deg) scaleY(${sy.toFixed(3)})`;
      const filter = blur > 0 ? `blur(${blur.toFixed(1)}px)` : "";

      for (let i = 0; i < tiles.length; i++) {
        tiles[i].style.transform = transform;
        tiles[i].style.filter = filter;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      slider.destroy();
    };
  }, [opts.lerp, opts.drag, opts.reverse, opts.skew, opts.drift]);

  return ref;
}

export function Cosmos() {
  const topRow = useSmoothRow({ lerp: 0.07, skew: 16, drift: 0.18 });
  const botRow = useSmoothRow({ lerp: 0.09, skew: 11, reverse: true, drift: 0.12 });

  return (
    <section className="relative overflow-hidden bg-black pb-24 pt-24 md:pb-32 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,90,255,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(251,191,36,0.06),transparent_60%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-white/10" />

      <div className="relative z-10 mb-10 flex items-center justify-between px-6 md:px-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/70">
          ARCHIVE / 003
        </div>
        <div className="hidden font-mono text-[11px] uppercase tracking-[0.28em] text-white/50 md:block">
          Drag · 13.8 Gyr of light
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <EyebrowBadge className="!border-white/15 !bg-white/5 !text-white/70">
          Chapter III · The Archive
        </EyebrowBadge>
        <h2 className="mt-6 max-w-[20ch] text-4xl font-semibold leading-[0.98] tracking-tighter text-white md:text-6xl lg:text-[88px]">
          Sixteen ghosts
          <br />
          <span className="bg-gradient-to-r from-amber-200 via-white to-amber-300 bg-clip-text text-transparent">
            of ancient light.
          </span>
        </h2>
        <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
          Each of these was burning before language. Some before Earth. Drag
          the catalog to wander 13.8 billion years of visible light.
        </p>
      </div>

      <div className="relative z-10 mt-14 select-none md:mt-16">
        <div
          ref={topRow}
          data-slider
          className="cosmic-slider flex cursor-grab overflow-hidden will-change-transform active:cursor-grabbing"
        >
          {ROW_TOP.map((obj, i) => (
            <Tile
              key={`t-${obj.catalog}`}
              obj={obj}
              idx={i}
              total={ROW_TOP.length + ROW_BOTTOM.length}
            />
          ))}
        </div>
        <div
          ref={botRow}
          data-slider
          className="cosmic-slider mt-5 flex cursor-grab overflow-hidden will-change-transform active:cursor-grabbing md:mt-6"
        >
          {ROW_BOTTOM.map((obj, i) => (
            <Tile
              key={`b-${obj.catalog}`}
              obj={obj}
              idx={i + ROW_TOP.length}
              total={ROW_TOP.length + ROW_BOTTOM.length}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-14 flex items-center justify-between px-6 md:mt-16 md:px-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
          16 / ∞ · Catalog open
        </div>
        <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 md:flex">
          <span>← drag</span>
          <span className="h-3 w-[1px] bg-white/15" />
          <span>infinite</span>
          <span className="h-3 w-[1px] bg-white/15" />
          <span>release →</span>
        </div>
      </div>
    </section>
  );
}
