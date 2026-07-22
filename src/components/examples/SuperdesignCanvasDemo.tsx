import React, { useState } from "react";
import { Plus, ZoomIn, ZoomOut, Move, Sparkles, Layers, Copy, Check, Play } from "lucide-react";

interface CanvasNode {
  id: string;
  title: string;
  type: string;
  x: number;
  y: number;
  color: string;
  status: "idle" | "generating" | "complete";
}

export function SuperdesignCanvasDemo() {
  const [zoom, setZoom] = useState(1);
  const [copied, setCopied] = useState(false);
  const [nodes, setNodes] = useState<CanvasNode[]>([
    { id: "1", title: "Natural Language Prompt", type: "Input", x: 60, y: 80, color: "#3b82f6", status: "complete" },
    { id: "2", title: "Design Token Generator", type: "Agent", x: 320, y: 60, color: "#8b5cf6", status: "complete" },
    { id: "3", title: "React Component Tree", type: "Output", x: 580, y: 120, color: "#10b981", status: "idle" },
  ]);

  const handleAddNode = () => {
    const newNode: CanvasNode = {
      id: String(nodes.length + 1),
      title: `Generated UI Node #${nodes.length + 1}`,
      type: "Component",
      x: 200 + (nodes.length * 40) % 300,
      y: 180 + (nodes.length * 30) % 150,
      color: "#ec4899",
      status: "generating",
    };
    setNodes([...nodes, newNode]);

    setTimeout(() => {
      setNodes((prev) =>
        prev.map((n) => (n.id === newNode.id ? { ...n, status: "complete" } : n))
      );
    }, 1200);
  };

  const handleCopy = () => {
    const promptText = `Superdesign Infinite Canvas Motion: Draggable nodes, spring physics, dynamic zoom controls, and instant prompt-to-UI component generation.`;
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#0d111a] border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl relative">
      {/* Header Bar */}
      <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
            Superdesign Component #01
          </span>
          <h3 className="text-lg font-semibold text-white">Interactive Canvas Motion & Node Physics</h3>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-medium transition-all"
        >
          {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
          {copied ? "Copied Prompt!" : "Copy Prompt"}
        </button>
      </div>

      {/* Infinite Canvas Viewport */}
      <div className="relative w-full h-[420px] bg-[#090d16] overflow-hidden select-none">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#8b5cf6 1px, transparent 1px)",
            backgroundSize: `${24 * zoom}px ${24 * zoom}px`,
          }}
        />

        {/* SVG Connection Lines between nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {nodes.length >= 2 && (
            <path
              d={`M ${nodes[0].x + 140} ${nodes[0].y + 40} C ${nodes[0].x + 230} ${nodes[0].y + 40}, ${nodes[1].x - 50} ${nodes[1].y + 40}, ${nodes[1].x} ${nodes[1].y + 40}`}
              stroke="#8b5cf6"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 4"
              className="animate-pulse"
            />
          )}
          {nodes.length >= 3 && (
            <path
              d={`M ${nodes[1].x + 140} ${nodes[1].y + 40} C ${nodes[1].x + 230} ${nodes[1].y + 40}, ${nodes[2].x - 50} ${nodes[2].y + 40}, ${nodes[2].x} ${nodes[2].y + 40}`}
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
          )}
        </svg>

        {/* Render Canvas Nodes */}
        <div
          className="absolute inset-0 transition-transform duration-300 origin-top-left p-6"
          style={{ transform: `scale(${zoom})` }}
        >
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute w-44 p-4 rounded-xl bg-black/70 border backdrop-blur-xl shadow-xl transition-all cursor-grab active:cursor-grabbing hover:border-purple-400/50"
              style={{
                left: `${node.x}px`,
                top: `${node.y}px`,
                borderColor: `${node.color}60`,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold"
                  style={{ backgroundColor: `${node.color}20`, color: node.color }}
                >
                  {node.type}
                </span>
                {node.status === "generating" ? (
                  <span className="size-2 rounded-full bg-pink-500 animate-ping" />
                ) : (
                  <Layers className="size-3.5 text-gray-400" />
                )}
              </div>
              <h4 className="text-xs font-semibold text-white mb-1">{node.title}</h4>
              <p className="text-[10px] text-gray-400">
                {node.status === "generating" ? "AI Generating Prompt..." : "Active Canvas Node"}
              </p>
            </div>
          ))}
        </div>

        {/* Controls Overlay Bar */}
        <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between gap-4 z-20">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoom(Math.min(1.4, zoom + 0.1))}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition-all"
              title="Zoom In"
            >
              <ZoomIn className="size-4" />
            </button>
            <button
              onClick={() => setZoom(Math.max(0.7, zoom - 0.1))}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition-all"
              title="Zoom Out"
            >
              <ZoomOut className="size-4" />
            </button>
            <span className="text-xs text-gray-400 font-mono px-2">{Math.round(zoom * 100)}%</span>
          </div>

          <button
            onClick={handleAddNode}
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs flex items-center gap-2 shadow-lg shadow-purple-600/30 transition-all"
          >
            <Plus className="size-4" />
            Add AI Node to Canvas
          </button>
        </div>
      </div>
    </div>
  );
}
