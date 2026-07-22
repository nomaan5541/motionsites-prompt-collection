import React, { useState } from "react";
import { Sparkles, Layers, Code, Shield, Check, Copy } from "lucide-react";
import { MorphoParticlesDemo } from "./examples/MorphoParticlesDemo";
import { AurelLiquidHeroDemo } from "./examples/AurelLiquidHeroDemo";
import { SuperdesignCanvasDemo } from "./examples/SuperdesignCanvasDemo";
import { SuperdesignGlassDashboardDemo } from "./examples/SuperdesignGlassDashboardDemo";
import { TwentyFirstNeonShaderDemo } from "./examples/TwentyFirstNeonShaderDemo";
import { TwentyFirstAgentPipelineDemo } from "./examples/TwentyFirstAgentPipelineDemo";

export function ExtractedExamplesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "horizonx" | "superdesign" | "21st">("all");

  return (
    <div className="min-h-screen bg-[#060913] text-white py-12 px-4 md:px-8 lg:px-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
          <Sparkles className="size-3.5" />
          <span>Interactive Component Demos</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          6 Live Interactive Examples
        </h1>
        <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
          Built from the extracted prompt libraries of <span className="text-blue-400 font-semibold">HorizonX</span>, <span className="text-purple-400 font-semibold">Superdesign</span>, and <span className="text-emerald-400 font-semibold">21st.dev</span>.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          {[
            { id: "all", label: "All 6 Examples" },
            { id: "horizonx", label: "HorizonX (2)" },
            { id: "superdesign", label: "Superdesign (2)" },
            { id: "21st", label: "21st.dev (2)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-white text-black shadow-lg shadow-white/20 scale-105"
                  : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Examples */}
      <div className="max-w-6xl mx-auto space-y-12">
        {/* HorizonX Examples */}
        {(activeTab === "all" || activeTab === "horizonx") && (
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-blue-500/30 pb-3">
              <div className="size-2.5 rounded-full bg-blue-500" />
              <h2 className="text-xl font-bold text-blue-400 tracking-wide">HorizonX — 3D & Liquid Components</h2>
            </div>
            <MorphoParticlesDemo />
            <AurelLiquidHeroDemo />
          </div>
        )}

        {/* Superdesign Examples */}
        {(activeTab === "all" || activeTab === "superdesign") && (
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-purple-500/30 pb-3">
              <div className="size-2.5 rounded-full bg-purple-500" />
              <h2 className="text-xl font-bold text-purple-400 tracking-wide">Superdesign — Canvas & Glassmorphic UI</h2>
            </div>
            <SuperdesignCanvasDemo />
            <SuperdesignGlassDashboardDemo />
          </div>
        )}

        {/* 21st.dev Examples */}
        {(activeTab === "all" || activeTab === "21st") && (
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-emerald-500/30 pb-3">
              <div className="size-2.5 rounded-full bg-emerald-500" />
              <h2 className="text-xl font-bold text-emerald-400 tracking-wide">21st.dev — Shaders & Autonomous Agents</h2>
            </div>
            <TwentyFirstNeonShaderDemo />
            <TwentyFirstAgentPipelineDemo />
          </div>
        )}
      </div>
    </div>
  );
}
