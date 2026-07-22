import React, { useState } from "react";
import { Play, Volume2, VolumeX, ArrowUpRight, Copy, Check } from "lucide-react";

export function AurelLiquidHeroDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const promptText = `Create a cinematic liquid hero section "Aurel Liquid Hero" with water light ripples, editorial serif typography, and interactive audio visual controls.`;
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#050811] border border-cyan-500/20 rounded-2xl overflow-hidden shadow-2xl relative">
      {/* Background Liquid Gradient Animation */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-500/30 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Header Bar */}
      <div className="relative z-10 px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono">
            HorizonX Component #02
          </span>
          <h3 className="text-lg font-semibold text-white">Aurel Liquid Hero</h3>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-all"
        >
          {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
          {copied ? "Copied Prompt!" : "Copy Prompt"}
        </button>
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 p-8 md:p-14 flex flex-col items-center justify-center text-center min-h-[400px]">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs tracking-wider uppercase font-medium mb-6">
          <span>Editorial Signal & Motion</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-white max-w-3xl leading-tight mb-6">
          Aurel Liquid <span className="italic font-normal text-cyan-300">Identity System</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-sm md:text-base max-w-xl mb-10 leading-relaxed font-light">
          Where light, water, and editorial typography resolve into one fluid signal. Built for high-end brand showcases and creative studios.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2">
            Explore Collection
            <ArrowUpRight className="size-4" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 backdrop-blur-md transition-all flex items-center gap-2"
          >
            <Play className={`size-4 ${isPlaying ? "text-cyan-400" : "text-gray-400"}`} />
            {isPlaying ? "Pause Ambient Liquid" : "Play Ambient Liquid"}
          </button>
        </div>

        {/* Visual Equalizer / Interactive Audio Bar */}
        <div className="w-full max-w-md p-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-lg flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-3">
            {[40, 75, 25, 90, 60, 30, 80, 45, 100, 65, 35, 85].map((h, idx) => (
              <div
                key={idx}
                className="w-1.5 bg-cyan-400/80 rounded-full transition-all duration-300"
                style={{
                  height: isPlaying ? `${Math.max(12, (h * Math.sin(Date.now() / 200 + idx)) % 32 + 8)}px` : "8px",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition-all"
          >
            {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4 text-cyan-400" />}
          </button>
        </div>
      </div>
    </div>
  );
}
