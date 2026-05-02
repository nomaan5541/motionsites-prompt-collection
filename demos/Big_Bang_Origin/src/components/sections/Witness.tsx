"use client";

import { useEffect, useRef, useState } from "react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const FRAME_COUNT = 97;
const FRAME_PATH = (i: number) =>
  `/demos/Big_Bang_Origin/frames-2/frame_${String(i).padStart(4, "0")}.jpg`;

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
  point: { x: number; y: number };
  card: { x: number; y: number };
};

const ANNOTATIONS: Annotation[] = [
  {
    id: "ember",
    show: 0.12,
    hide: 0.36,
    era: "Phase 01 · Pre-perception",
    title: "Embers along the lash",
    rows: [
      { label: "Thermal trace", value: "≈ 1,400 K" },
      { label: "Form", pill: { tag: "STATE", text: "MATTER NOT YET SEEN" } },
    ],
    point: { x: 50, y: 44 },
    card: { x: 6, y: 60 },
  },
  {
    id: "opening",
    show: 0.4,
    hide: 0.66,
    era: "Phase 02 · First aperture",
    title: "The lid lifts",
    rows: [
      { label: "Iris diameter", value: "f / 1.4 → f / 0.95" },
      { label: "Reflex", pill: { tag: "OPTIC", text: "DARK ADAPTATION" } },
    ],
    point: { x: 52, y: 46 },
    card: { x: 56, y: 16 },
  },
  {
    id: "singularity",
    show: 0.7,
    hide: 1.0,
    era: "Phase 03 · The witness",
    title: "A singularity in the iris",
    rows: [
      { label: "Event horizon", value: "rₛ = 2GM / c²" },
      { label: "Observer", pill: { tag: "FRAME", text: "PROPER · INFINITE TIME" } },
    ],
    point: { x: 50, y: 52 },
    card: { x: 6, y: 16 },
  },
];

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
      </div>
    </div>
  );
}

export function Witness() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const tickingRef = useRef(false);
  const prevVisibleIdsRef = useRef<string>("");

  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState<Set<string>>(new Set());

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

        if (introRef.current) {
          const opacity = Math.max(0, 1 - progress / 0.08);
          introRef.current.style.opacity = String(opacity);
          introRef.current.style.transform = `translateY(${progress * 40}px)`;
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

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-white/10">
          <div
            ref={progressBarRef}
            className="h-full origin-left bg-gradient-to-r from-amber-300 to-amber-500"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/70">
            WITNESS / 002
          </div>
          <div className="hidden font-mono text-[11px] uppercase tracking-[0.28em] text-white/50 md:block">
            And then someone looked back
          </div>
        </div>

        <div
          ref={introRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white"
        >
          <EyebrowBadge className="!border-white/15 !bg-white/5 !text-white/70">
            Chapter II · The Witness
          </EyebrowBadge>
          <h2 className="mt-6 max-w-[20ch] text-4xl font-semibold leading-[1.02] tracking-tighter md:text-6xl lg:text-[88px]">
            13.8 billion years
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-white to-amber-300 bg-clip-text text-transparent">
              before an eye opened.
            </span>
          </h2>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
            Every singularity is private until something looks at it. Scroll to
            watch the universe become aware of itself.
          </p>
          <div className="mt-12 flex flex-col items-center gap-2 text-white/50">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em]">
              Scroll
            </div>
            <div className="h-10 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>

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
                <SpecCard a={a} />
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-6 right-6 z-20 hidden font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 md:block">
          APERTURE  ·  CLOSED → OPEN
        </div>
      </div>
    </section>
  );
}
