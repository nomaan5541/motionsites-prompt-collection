import React, { useState } from "react";
import { Cpu, Play, CheckCircle, RefreshCw, Copy, Check, ChevronRight } from "lucide-react";

export function TwentyFirstAgentPipelineDemo() {
  const [pipelineState, setPipelineState] = useState<"idle" | "running" | "done">("idle");
  const [activeStep, setActiveStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const steps = [
    { title: "Input Specification", desc: "Parsing natural language requirements" },
    { title: "Code Generator Agent", desc: "Generating React TSX & Tailwind CSS" },
    { title: "AST Linter & Validator", desc: "Checking type safety & design tokens" },
    { title: "Live Deploy Sandbox", desc: "Publishing component preview to CDN" },
  ];

  const handleRunPipeline = () => {
    setPipelineState("running");
    setActiveStep(0);

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setPipelineState("done");
          return steps.length - 1;
        }
        return prev + 1;
      });
    }, 900);
  };

  const handleCopy = () => {
    const promptText = `Build "AI Agent Pipeline" component by dani_0212bfb0. Multi-step execution pipeline dashboard card with live step triggers, animated progress, and terminal output.`;
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#0a121d] border border-emerald-500/20 rounded-2xl overflow-hidden shadow-2xl relative">
      {/* Header Bar */}
      <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">
            21st.dev Component #02
          </span>
          <h3 className="text-lg font-semibold text-white">AI Agent Pipeline & Marquee</h3>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-medium transition-all"
        >
          {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
          {copied ? "Copied Prompt!" : "Copy Prompt"}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-emerald-400">Author: dani_0212bfb0</span>
            <h4 className="text-base font-semibold text-white mt-1">Autonomous AI Code Build Pipeline</h4>
          </div>

          <button
            onClick={handleRunPipeline}
            disabled={pipelineState === "running"}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/30 shrink-0"
          >
            {pipelineState === "running" ? (
              <RefreshCw className="size-4 animate-spin text-white" />
            ) : (
              <Play className="size-4 fill-white" />
            )}
            {pipelineState === "running" ? "Running Build Pipeline..." : "Run AI Pipeline"}
          </button>
        </div>

        {/* Step Nodes Progress List */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {steps.map((step, idx) => {
            const isCurrent = pipelineState === "running" && activeStep === idx;
            const isCompleted = pipelineState === "done" || (pipelineState === "running" && activeStep > idx);

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all ${
                  isCurrent
                    ? "bg-emerald-500/10 border-emerald-400 shadow-lg shadow-emerald-500/20 scale-[1.02]"
                    : isCompleted
                    ? "bg-white/[0.04] border-emerald-500/40 text-emerald-300"
                    : "bg-white/[0.02] border-white/10 text-gray-400"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Step 0{idx + 1}
                  </span>
                  {isCompleted ? (
                    <CheckCircle className="size-4 text-emerald-400" />
                  ) : isCurrent ? (
                    <RefreshCw className="size-4 text-emerald-400 animate-spin" />
                  ) : (
                    <Cpu className="size-4 text-gray-500" />
                  )}
                </div>

                <h5 className="text-xs font-semibold text-white mb-1">{step.title}</h5>
                <p className="text-[10px] text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Terminal Logs Stream Box */}
        <div className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-gray-300 space-y-1">
          <div className="text-gray-500 flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
            <span>AI Agent Terminal Stream:</span>
          </div>
          {pipelineState === "idle" && <p className="text-gray-500 italic">Click "Run AI Pipeline" to initiate autonomous execution.</p>}
          {pipelineState !== "idle" && (
            <>
              <p className="text-emerald-400">✔ Loaded specification requirements (React + Tailwind CSS)</p>
              {activeStep >= 1 && <p className="text-cyan-400">✔ Generated 240 lines of TSX layout code</p>}
              {activeStep >= 2 && <p className="text-purple-400">✔ Passed AST linter checks with zero warnings</p>}
              {activeStep >= 3 && <p className="text-emerald-300">✔ Deployed live component to 21st.dev CDN</p>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
