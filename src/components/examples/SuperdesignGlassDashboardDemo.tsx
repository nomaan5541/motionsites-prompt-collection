import React, { useState } from "react";
import { Sparkles, Sun, Moon, Terminal, Layout, Code2, Copy, Check, Send } from "lucide-react";

export function SuperdesignGlassDashboardDemo() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeTab, setActiveTab] = useState<"ui" | "code">("ui");
  const [promptInput, setPromptInput] = useState("Build a sleek glassmorphic dashboard section with neon borders");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 1500);
  };

  const handleCopy = () => {
    const promptText = `Glassmorphism UI Component Suite: Translucent backdrop-blur cards, neon 1px accent borders, dynamic theme toggles, and live streaming prompt engine.`;
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`w-full rounded-2xl overflow-hidden border transition-colors duration-300 shadow-2xl relative ${
        theme === "dark"
          ? "bg-[#0b0f19] border-pink-500/20 text-white"
          : "bg-gray-50 border-gray-300 text-gray-900"
      }`}
    >
      {/* Header Bar */}
      <div
        className={`px-6 py-4 border-b flex items-center justify-between transition-colors ${
          theme === "dark" ? "border-white/10 bg-white/[0.02]" : "border-gray-200 bg-white"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-pink-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-pink-400 font-mono">
            Superdesign Component #02
          </span>
          <h3 className="text-lg font-semibold">Glassmorphic AI Dashboard & Prompt Engine</h3>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-lg border transition-all ${
              theme === "dark"
                ? "bg-white/5 border-white/10 text-yellow-400 hover:bg-white/10"
                : "bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-300"
            }`}
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 border border-pink-500/30 text-xs font-medium transition-all"
          >
            {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
            {copied ? "Copied Prompt!" : "Copy Prompt"}
          </button>
        </div>
      </div>

      {/* Main Glass Workspace */}
      <div className="p-6 md:p-8 space-y-6">
        {/* Prompt Input Box */}
        <div
          className={`p-4 rounded-xl border backdrop-blur-xl flex items-center gap-3 transition-all ${
            theme === "dark"
              ? "bg-white/[0.03] border-white/10 hover:border-pink-500/40"
              : "bg-white border-gray-200 shadow-sm"
          }`}
        >
          <Sparkles className="size-5 text-pink-400 shrink-0" />
          <input
            type="text"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            className={`w-full bg-transparent text-sm focus:outline-none ${
              theme === "dark" ? "text-white placeholder-gray-500" : "text-gray-900 placeholder-gray-400"
            }`}
            placeholder="Type your design prompt..."
          />
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-medium text-xs flex items-center gap-2 transition-all shadow-md shrink-0"
          >
            {isGenerating ? <Sparkles className="size-3.5 animate-spin" /> : <Send className="size-3.5" />}
            {isGenerating ? "Generating..." : "Generate UI"}
          </button>
        </div>

        {/* View Toggle Tabs */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("ui")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 transition-all ${
                activeTab === "ui"
                  ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Layout className="size-3.5" />
              Live UI Mockup
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 transition-all ${
                activeTab === "code"
                  ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Code2 className="size-3.5" />
              React TSX Code
            </button>
          </div>
          <span className="text-xs text-gray-400 font-mono">Superdesign Engine v2.4</span>
        </div>

        {/* Output Panel */}
        <div className="min-h-[220px]">
          {isGenerating ? (
            <div className="h-56 flex flex-col items-center justify-center gap-3">
              <div className="size-8 rounded-full border-2 border-pink-500 border-t-transparent animate-spin" />
              <p className="text-xs text-pink-400 font-mono animate-pulse">Generating UI Components & Code Structure...</p>
            </div>
          ) : activeTab === "ui" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className={`p-5 rounded-xl border backdrop-blur-xl transition-all ${
                  theme === "dark"
                    ? "bg-white/[0.04] border-white/10 hover:border-pink-500/30"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <div className="size-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-xs mb-3">
                  01
                </div>
                <h4 className="text-sm font-semibold mb-1">Translucent Cards</h4>
                <p className="text-xs text-gray-400">Glassmorphism layers with backdrop-blur filters.</p>
              </div>

              <div
                className={`p-5 rounded-xl border backdrop-blur-xl transition-all ${
                  theme === "dark"
                    ? "bg-white/[0.04] border-white/10 hover:border-pink-500/30"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <div className="size-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs mb-3">
                  02
                </div>
                <h4 className="text-sm font-semibold mb-1">Neon Accent Borders</h4>
                <p className="text-xs text-gray-400">1px gradient borders with glowing highlights.</p>
              </div>

              <div
                className={`p-5 rounded-xl border backdrop-blur-xl transition-all ${
                  theme === "dark"
                    ? "bg-white/[0.04] border-white/10 hover:border-pink-500/30"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <div className="size-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs mb-3">
                  03
                </div>
                <h4 className="text-sm font-semibold mb-1">Dynamic Themes</h4>
                <p className="text-xs text-gray-400">Instant toggle between light & dark aesthetics.</p>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-emerald-400 overflow-x-auto">
              <pre>{`export function GlassCard({ title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
}`}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
