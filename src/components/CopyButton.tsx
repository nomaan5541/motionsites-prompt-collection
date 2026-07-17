import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { copyText } from "../lib/clipboard";

export function CopyButton({
  text,
  label = "Copy Prompt",
  copiedLabel = "Copied",
  variant = "default",
}: {
  text: string;
  label?: string;
  copiedLabel?: string;
  variant?: "default" | "gradient";
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await copyText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={
        variant === "gradient"
          ? "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-cta-gradient px-5 text-[12px] font-black uppercase tracking-[0.12em] text-[#171717] shadow-[0_16px_45px_rgba(219,234,254,0.14)] transition-transform hover:-translate-y-0.5"
          : "inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#303030] px-4 text-sm font-semibold text-[#ababab] transition-colors hover:bg-[#3a3a3a] hover:text-white"
      }
      aria-live="polite"
    >
      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      {copied ? copiedLabel : label}
    </button>
  );
}
