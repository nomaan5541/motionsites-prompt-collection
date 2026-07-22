import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Sliders, RefreshCw, Copy, Check } from "lucide-react";

export function MorphoParticlesDemo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particleCount, setParticleCount] = useState(180);
  const [speed, setSpeed] = useState(1.5);
  const [colorScheme, setColorScheme] = useState<"blue" | "purple" | "gold">("blue");
  const [copied, setCopied] = useState(false);

  const colors = {
    blue: ["#3b82f6", "#60a5fa", "#93c5fd", "#e0f2fe"],
    purple: ["#8b5cf6", "#a855f7", "#d8b4fe", "#fae8ff"],
    gold: ["#f59e0b", "#fbbf24", "#fde68a", "#fffbeb"],
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 420);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 420;
    };
    window.addEventListener("resize", handleResize);

    // Particle system logic
    let mouse = { x: width / 2, y: height / 2, radius: 120 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    interface Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      color: string;
      angle: number;
      distance: number;
      speed: number;
      wingFactor: number;
    }

    const currentColors = colors[colorScheme];
    const particles: Particle[] = [];

    // Generate butterfly wing particle shape
    for (let i = 0; i < particleCount; i++) {
      const t = (i / particleCount) * Math.PI * 2;
      // Butterfly curve formula
      const r = Math.exp(Math.cos(t)) - 2 * Math.cos(4 * t) + Math.pow(Math.sin(t / 12), 5);
      const scale = 75;
      const x = width / 2 + Math.sin(t) * r * scale;
      const y = height / 2 - Math.cos(t) * r * scale;

      particles.push({
        x,
        y,
        originX: x,
        originY: y,
        size: Math.random() * 2.5 + 1,
        color: currentColors[Math.floor(Math.random() * currentColors.length)],
        angle: t,
        distance: r * scale,
        speed: (Math.random() * 0.02 + 0.01) * speed,
        wingFactor: Math.random() * 0.4 + 0.8,
      });
    }

    let tick = 0;

    const render = () => {
      ctx.fillStyle = "rgba(10, 15, 29, 0.25)";
      ctx.fillRect(0, 0, width, height);

      tick += 0.03 * speed;
      const wingFlap = Math.sin(tick) * 0.35;

      particles.forEach((p) => {
        // Wing motion animation
        const flapX = p.originX + Math.sin(p.angle) * wingFlap * 40 * p.wingFactor;
        const flapY = p.originY + Math.cos(tick * 0.5) * 5;

        // Mouse displacement
        const dx = mouse.x - flapX;
        const dy = mouse.y - flapY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = flapX;
        let targetY = flapY;

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          targetX -= (dx / dist) * force * 50;
          targetY -= (dy / dist) * force * 50;
        }

        p.x += (targetX - p.x) * 0.1;
        p.y += (targetY - p.y) * 0.1;

        // Render glow particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [particleCount, speed, colorScheme]);

  const handleCopy = () => {
    const promptText = `Create a senior-grade 3D particles simulator component "MORPHO". Interactive WebGL butterfly with cursor reactivity, shimmering particles, and live controls.`;
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#0a0f1d] border border-blue-500/20 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header Bar */}
      <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-blue-400 font-mono">
            HorizonX Component #01
          </span>
          <h3 className="text-lg font-semibold text-white">MORPHO — 3D Particles Simulator</h3>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-medium transition-all"
        >
          {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
          {copied ? "Copied Prompt!" : "Copy Prompt"}
        </button>
      </div>

      {/* Interactive Viewport Canvas */}
      <div className="relative w-full h-[420px] bg-[#0a0f1d] overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />

        {/* Floating Controls Bar */}
        <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Sparkles className="size-4 text-blue-400" />
              <span className="text-xs text-gray-300 font-medium">Particles ({particleCount})</span>
              <input
                type="range"
                min="60"
                max="300"
                value={particleCount}
                onChange={(e) => setParticleCount(Number(e.target.value))}
                className="w-24 accent-blue-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <Sliders className="size-4 text-blue-400" />
              <span className="text-xs text-gray-300 font-medium">Speed ({speed}x)</span>
              <input
                type="range"
                min="0.5"
                max="3.0"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-24 accent-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 mr-1">Shimmer:</span>
            {(["blue", "purple", "gold"] as const).map((scheme) => (
              <button
                key={scheme}
                onClick={() => setColorScheme(scheme)}
                className={`px-3 py-1 rounded-full text-xs font-medium capitalize transition-all ${
                  colorScheme === scheme
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/5 text-gray-400 hover:text-white"
                }`}
              >
                {scheme}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
