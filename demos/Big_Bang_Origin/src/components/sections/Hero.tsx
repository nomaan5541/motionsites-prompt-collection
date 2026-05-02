"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

function AnimatedHeadline() {
  const lineOne = "Everything began";
  const lineTwo = "with nothing.";

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.035, delayChildren: 0.25 } },
  };
  const letter = {
    hidden: { opacity: 0, y: "0.55em", filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 220, damping: 22 },
    },
  };

  const renderLetters = (text: string) =>
    text.split("").map((ch, i) => (
      <motion.span
        key={i}
        variants={letter}
        className="inline-block whitespace-pre"
      >
        {ch}
      </motion.span>
    ));

  return (
    <motion.h1
      initial="hidden"
      animate="show"
      variants={container}
      className="headline-frame mt-6 max-w-[18ch] text-4xl font-semibold leading-[1.02] tracking-tighter md:text-6xl lg:text-[88px]"
      aria-label={`${lineOne} ${lineTwo}`}
    >
      <span aria-hidden className="headline-corner tl" />
      <span aria-hidden className="headline-corner tr" />
      <span aria-hidden className="headline-corner bl" />
      <span aria-hidden className="headline-corner br" />
      <span aria-hidden className="trace-edge h top">
        <span className="seg" />
      </span>
      <span aria-hidden className="trace-edge v right">
        <span className="seg" />
      </span>
      <span aria-hidden className="trace-edge h bottom">
        <span className="seg" />
      </span>
      <span aria-hidden className="trace-edge v left">
        <span className="seg" />
      </span>
      <span className="block overflow-hidden pb-[0.12em] [transform:translateZ(0)] text-shimmer-base">
        {renderLetters(lineOne)}
      </span>
      <span className="block overflow-hidden pb-[0.12em] [transform:translateZ(0)] text-shimmer-base">
        {renderLetters(lineTwo)}
      </span>
    </motion.h1>
  );
}

const FRAME_COUNT = 121;
const FRAME_PATH = (i: number) => `/demos/Big_Bang_Origin/frames/frame_${String(i).padStart(4, "0")}.jpg`;

type SpecRow = {
  label: string;
  value?: string;
  pill?: { tag: string; text: string };
};

type Annotation = {
  id: string;
  show: number;
  hide: number;
  era: string;
  title: string;
  rows: SpecRow[];
  // Both points are in viewport percentages.
  point: { x: number; y: number }; // where the small circle sits on the canvas
  card: { x: number; y: number }; // top-left of the card
};

const ANNOTATIONS: Annotation[] = [
  {
    id: "singularity",
    show: 0.1,
    hide: 0.32,
    era: "T = 0 · Planck Era",
    title: "Singularity",
    rows: [
      { label: "Temperature", value: "10³² K" },
      { label: "Density", pill: { tag: "ρ ≈", text: "10⁹³ g · cm⁻³" } },
    ],
    point: { x: 56, y: 38 },
    card: { x: 5, y: 56 },
  },
  {
    id: "inflation",
    show: 0.34,
    hide: 0.56,
    era: "T + 10⁻³⁶ s · GUT Era",
    title: "Cosmic Inflation",
    rows: [
      { label: "Expansion factor", value: "≈ e⁶⁰  (×10²⁶)" },
      { label: "Mechanism", pill: { tag: "FIELD", text: "INFLATON  φ → V(φ)" } },
    ],
    point: { x: 38, y: 50 },
    card: { x: 53, y: 18 },
  },
  {
    id: "recombination",
    show: 0.58,
    hide: 0.79,
    era: "T + 380,000 yr",
    title: "First Light",
    rows: [
      { label: "Plasma temperature", value: "≈ 3,000 K" },
      { label: "Relic radiation", pill: { tag: "CMB", text: "2.725 K  TODAY" } },
    ],
    point: { x: 60, y: 45 },
    card: { x: 6, y: 18 },
  },
  {
    id: "cosmic-web",
    show: 0.81,
    hide: 1.0,
    era: "T + 13.8 Gyr · Now",
    title: "The Cosmic Web",
    rows: [
      { label: "Observable radius", value: "46.5 Gly" },
      { label: "Cosmology", pill: { tag: "ΛCDM", text: "PLANCK 2018" } },
    ],
    point: { x: 46, y: 52 },
    card: { x: 52, y: 56 },
  },
];

function LeaderLine({ point }: { point: { x: number; y: number } }) {
  return (
    <div
      className="pointer-events-none absolute h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/95 bg-black/30 shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_2px_18px_rgba(0,0,0,0.5)]"
      style={{ left: `${point.x}%`, top: `${point.y}%` }}
    >
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
    </div>
  );
}

function SpecCard({ a }: { a: Annotation }) {
  return (
    <div
      className="absolute w-[78vw] max-w-[360px] md:w-[26vw] md:max-w-[380px]"
      style={{ left: `${a.card.x}%`, top: `${a.card.y}%` }}
    >
      <div className="rounded-[22px] border border-white/15 bg-white/[0.06] p-5 text-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl backdrop-saturate-150 md:p-6">
        <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/55">
          {a.era}
        </div>
        <h3 className="mt-2 text-2xl font-medium leading-[0.98] tracking-tight md:text-[28px]">
          {a.title}
        </h3>

        <div className="mt-5 space-y-3.5">
          {a.rows.map((row, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/55">
                <span className="h-1 w-1 rounded-full bg-amber-400" />
                {row.label}
              </div>
              {row.value && (
                <div className="mt-1 text-sm font-medium leading-tight tracking-tight text-white md:text-base">
                  {row.value}
                </div>
              )}
              {row.pill && (
                <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 py-0.5 pl-1 pr-2.5">
                  <span className="rounded-full bg-amber-400/95 px-1.5 py-0.5 font-mono text-[8.5px] font-semibold uppercase tracking-wider text-black">
                    {row.pill.tag}
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/85">
                    {row.pill.text}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.22em] text-white/45">
          <span>Visible in</span>
          <span className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-white/85" />
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            <span className="h-1 w-1 rounded-full bg-white/30" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const tickingRef = useRef(false);
  const prevVisibleIdsRef = useRef<string>("");

  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [visible, setVisible] = useState<Set<string>>(new Set());

  // Preload frames
  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      const done = () => {
        if (cancelled) return;
        loadedCount += 1;
        setLoadProgress(loadedCount / FRAME_COUNT);
        if (loadedCount === FRAME_COUNT) setLoaded(true);
      };
      img.onload = done;
      img.onerror = done;
      imgs.push(img);
    }
    framesRef.current = imgs;

    return () => {
      cancelled = true;
    };
  }, []);

  // Canvas + scroll wiring
  useEffect(() => {
    if (!loaded) return;
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const currentFrameRef = { current: 0 };

    const drawFrame = (index: number) => {
      const img = framesRef.current[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;
      const cw = window.innerWidth;
      const ch = window.innerHeight;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = cw / ch;

      let drawW: number;
      let drawH: number;

      if (canvasRatio > imgRatio) {
        drawW = cw;
        drawH = cw / imgRatio;
      } else {
        drawH = ch;
        drawW = ch * imgRatio;
      }

      if (window.innerWidth <= 768) {
        drawW *= 1.3;
        drawH *= 1.3;
      }

      const drawX = (cw - drawW) / 2;
      const drawY = (ch - drawH) / 2;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFrame(currentFrameRef.current);
    };

    const updateAnnotations = (progress: number) => {
      const next = new Set<string>();
      for (const a of ANNOTATIONS) {
        if (progress >= a.show && progress < a.hide) next.add(a.id);
      }
      const sortedIds = [...next].sort().join(",");
      if (sortedIds !== prevVisibleIdsRef.current) {
        prevVisibleIdsRef.current = sortedIds;
        setVisible(next);
      }
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const scrollableHeight = section.offsetHeight - window.innerHeight;
        const progress = Math.min(
          1,
          Math.max(0, -rect.top / Math.max(1, scrollableHeight))
        );

        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(progress * FRAME_COUNT)
        );
        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }

        if (heroTextRef.current) {
          const opacity = Math.max(0, 1 - progress / 0.08);
          heroTextRef.current.style.opacity = String(opacity);
          heroTextRef.current.style.transform = `translateY(${progress * 40}px)`;
        }

        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${progress})`;
        }

        updateAnnotations(progress);
        tickingRef.current = false;
      });
    };

    resizeCanvas();
    drawFrame(0);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [loaded]);

  return (
    <section ref={sectionRef} className="scroll-animation relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        <div className="film-grain" aria-hidden />

        {/* Vignette + edge gradients for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Loading overlay */}
        {!loaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black">
            <div className="mb-6 text-[10px] font-medium uppercase tracking-[0.32em] text-zinc-400">
              Compressing 13.8 billion years
            </div>
            <div className="h-[2px] w-64 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full origin-left rounded-full bg-gradient-to-r from-amber-300 to-amber-500 transition-transform duration-150 ease-out"
                style={{ transform: `scaleX(${loadProgress})` }}
              />
            </div>
            <div className="mt-3 font-mono text-[10px] text-zinc-500">
              {Math.round(loadProgress * 100)}%
            </div>
          </div>
        )}

        {/* Top scroll progress bar */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-white/10">
          <div
            ref={progressBarRef}
            className="h-full origin-left bg-gradient-to-r from-amber-300 to-amber-500"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Header */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/70">
            ORIGIN / 001
          </div>
          <div className="hidden font-mono text-[11px] uppercase tracking-[0.28em] text-white/50 md:block">
            A scroll through deep time
          </div>
        </div>

        {/* Hero text — centered, fades on scroll */}
        <div
          ref={heroTextRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white"
        >
          <EyebrowBadge className="!border-white/15 !bg-white/5 !text-white/70">
            Chapter I · The Origin
          </EyebrowBadge>
          <AnimatedHeadline />
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
            13.8 billion years ago, the universe was a point smaller than an
            atom. Scroll to watch it become galaxies, stars — and you.
          </p>
          <div className="mt-12 flex flex-col items-center gap-2 text-white/50">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em]">
              Scroll
            </div>
            <div className="h-10 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>

        {/* Annotation cards + leader lines */}
        <div className="pointer-events-none absolute inset-0 z-10">
          {ANNOTATIONS.map((a) => {
            const isVisible = visible.has(a.id);
            return (
              <div
                key={a.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={!isVisible}
              >
                <LeaderLine point={a.point} />
                <SpecCard a={a} />
              </div>
            );
          })}
        </div>

        {/* Bottom corner timecode */}
        <div className="absolute bottom-6 right-6 z-20 hidden font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 md:block">
          T + 0.000 → 13.8 Gyr
        </div>
      </div>
    </section>
  );
}
