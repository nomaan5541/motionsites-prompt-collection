import React, { useState } from "react";
import { Terminal, Copy, Check, ExternalLink, Zap, Flame } from "lucide-react";

export function TwentyFirstNeonShaderDemo() {
  const [copiedCli, setCopiedCli] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const cliCommand = "npx shadcn@latest add https://21st.dev/r/ashish.indora/red-in-black";

  const handleCopyCli = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const handleCopyPrompt = () => {
    const promptText = `Build and wire "Red in Black" neon shader hero component by ashish.indora. High-intensity dark mode hero with red/cyan neon shader glow borders and shadcn integration.`;
    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="w-full bg-[#070003] border border-red-600/30 rounded-2xl overflow-hidden shadow-2xl relative">
      {/* Background Animated Neon Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-red-600 blur-[120px] animate-pulse" />
      </div>

      {/* Header Bar */}
      <div className="relative z-10 px-6 py-4 border-b border-red-500/20 flex items-center justify-between bg-black/40">
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-red-500 animate-ping" />
          <span className="text-xs uppercase tracking-widest text-red-400 font-mono">
            21st.dev Component #01
          </span>
          <h3 className="text-lg font-semibold text-white">Red in Black — Neon Shader Hero</h3>
        </div>

        <button
          onClick={handleCopyPrompt}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-medium transition-all"
        >
          {copiedPrompt ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
          {copiedPrompt ? "Copied Prompt!" : "Copy Prompt"}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center">
        {/* Author Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono mb-6">
          <Flame className="size-3.5 text-red-500" />
          <span>Author: ashish.indora</span>
        </div>

        {/* Big Neon Title */}
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600 tracking-tight mb-4 drop-shadow-[0_0_25px_rgba(239,68,68,0.4)]">
          RED IN BLACK SHADER
        </h1>

        <p className="text-gray-400 text-sm md:text-base max-w-lg mb-8 font-light">
          A high-intensity, dark-mode hero section powered by WebGL shader animations, crimson glowing borders, and one-line shadcn installation.
        </p>

        {/* CLI Command Bar */}
        <div className="w-full max-w-xl p-3 rounded-xl bg-black/80 border border-red-500/30 backdrop-blur-md flex items-center justify-between gap-3 font-mono text-xs text-gray-300 mb-8">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <Terminal className="size-4 text-red-500 shrink-0" />
            <span className="text-red-400">$</span>
            <span className="truncate">{cliCommand}</span>
          </div>

          <button
            onClick={handleCopyCli}
            className="px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 font-sans text-xs font-medium shrink-0 transition-all border border-red-500/30"
          >
            {copiedCli ? "Copied!" : "Copy Command"}
          </button>
        </div>

        {/* Interactive Action Button */}
        <button className="px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all flex items-center gap-2">
          <Zap className="size-4" />
          Launch Shader Engine
        </button>
      </div>
    </div>
  );
}
