import { Mail, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function RequestPage({ contactMode = false }: { contactMode?: boolean }) {
  return (
    <section className="page-shell py-14">
      <SectionHeader
        eyebrow={contactMode ? "Contact" : "Request"}
        title={contactMode ? "Send a prompt idea" : "Request the next prompt drop"}
        copy="This free build has no backend or account gate. The form is a polished local UI with a mail link fallback."
      />
      <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <form
          className="rounded-[24px] border border-[#353233] bg-[#232222] p-5 shadow-card"
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const data = new FormData(form);
            const subject = encodeURIComponent(String(data.get("title") || "MotionSites prompt request"));
            const body = encodeURIComponent(String(data.get("details") || ""));
            window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
          }}
        >
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-white/54">Prompt title</span>
              <input
                name="title"
                required
                className="h-12 rounded-[14px] border border-white/10 bg-[#292929] px-4 text-sm outline-none focus:border-[#ff6589]"
                placeholder="AI onboarding hero"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-white/54">Details</span>
              <textarea
                name="details"
                required
                rows={8}
                className="resize-none rounded-[14px] border border-white/10 bg-[#292929] p-4 text-sm leading-6 outline-none focus:border-[#ff6589]"
                placeholder="Describe the industry, sections, visual style, and any media direction."
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cta-gradient px-6 text-[12px] font-black uppercase tracking-[0.14em] text-white shadow-glow"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send request
            </button>
          </div>
        </form>
        <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-6">
          <Mail className="h-8 w-8 text-[#ff6589]" aria-hidden="true" />
          <h2 className="mt-8 text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em]">
            Free library, no paid gate.
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/56">
            Keep adding prompt folders to the archive, rerun the catalog generator, and the app will publish them as free
            prompt cards automatically.
          </p>
        </div>
      </div>
    </section>
  );
}
