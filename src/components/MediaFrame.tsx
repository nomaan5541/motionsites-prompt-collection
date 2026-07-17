import type { CatalogItem } from "../data/prompts.generated";

const fallbackGradients = [
  "radial-gradient(circle at 20% 15%, rgba(255,101,137,.68), transparent 26%), linear-gradient(135deg, #272727, #141414 64%, #421017)",
  "radial-gradient(circle at 78% 20%, rgba(255,183,74,.44), transparent 24%), linear-gradient(145deg, #161616, #2b2020 58%, #ff0432 140%)",
  "radial-gradient(circle at 28% 80%, rgba(255,47,95,.54), transparent 28%), linear-gradient(160deg, #202020, #151515)",
  "linear-gradient(135deg, #242424, #171717 46%, #3d111b), radial-gradient(circle at 70% 18%, rgba(255,101,137,.48), transparent 25%)",
];

const fallbackAccents = ["#f43f5e", "#f59e0b", "#a78bfa", "#22d3ee", "#f97316", "#e879f9"];

export function MediaFrame({
  item,
  label,
  className = "",
  compact = false,
}: {
  item: Pick<CatalogItem, "title" | "posterUrl" | "animatedUrl" | "mediaType" | "mediaUrl" | "sortOrder" | "category">;
  label?: string;
  className?: string;
  compact?: boolean;
}) {
  const background = fallbackGradients[item.sortOrder % fallbackGradients.length];
  const accent = fallbackAccents[item.sortOrder % fallbackAccents.length];

  return (
    <div className={`relative isolate overflow-hidden bg-[#202020] ${className}`}>
      <div className="absolute inset-0 -z-10" style={{ background }} />
      <GeneratedThumb item={item} accent={accent} compact={compact} />
      {item.posterUrl ? (
        <img
          src={item.posterUrl}
          alt=""
          className="motion-media-drift absolute inset-0 z-10 h-full w-full object-cover object-top"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : null}
      {item.animatedUrl ? (
        <img
          src={item.animatedUrl}
          alt=""
          className="motion-media-animated motion-media-drift absolute inset-0 z-20 h-full w-full object-cover object-top"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : item.mediaType === "video" && item.mediaUrl?.endsWith(".mp4") ? (
        <video
          src={item.mediaUrl}
          className="motion-media-drift absolute inset-0 z-20 h-full w-full object-cover object-top"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : null}
      <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
      {!compact ? <div className="scene-grid absolute inset-0 z-30 opacity-35" /> : null}
      {!compact ? (
        <>
          <div className="absolute left-3 top-3 z-40 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
            {label || (item.mediaType === "none" ? "Generated" : item.mediaType)}
          </div>
          <div className="absolute bottom-3 left-3 right-3 z-40">
            <p className="line-clamp-2 text-sm font-black uppercase leading-4 tracking-[-0.01em] text-white">{item.title}</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/54">{item.category}</p>
          </div>
        </>
      ) : null}
    </div>
  );
}

function GeneratedThumb({
  item,
  accent,
  compact,
}: {
  item: Pick<CatalogItem, "title" | "sortOrder" | "category">;
  accent: string;
  compact: boolean;
}) {
  const variant = item.sortOrder % 4;
  const titleWords = item.title.split(/\s+/).filter(Boolean).slice(0, 3);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-[9%] top-[12%] h-px bg-white/12" />
      <div className="motion-thumb-float absolute left-[9%] top-[9%] flex gap-1.5">
        <span className="h-1.5 w-6 rounded-full" style={{ backgroundColor: accent }} />
        <span className="h-1.5 w-3 rounded-full bg-white/20" />
        <span className="h-1.5 w-3 rounded-full bg-white/12" />
      </div>

      {variant === 0 ? (
        <>
          <div className="motion-thumb-panel absolute left-[9%] top-[28%] h-[9%] w-[54%] rounded-full bg-white/90" />
          <div className="absolute left-[9%] top-[42%] h-[4%] w-[39%] rounded-full bg-white/30" />
          <div className="absolute left-[9%] top-[51%] h-[4%] w-[26%] rounded-full bg-white/18" />
          <div className="motion-thumb-panel absolute bottom-[13%] right-[8%] h-[54%] w-[34%] rounded-[18%] border border-white/10 bg-white/[0.07] shadow-2xl" />
          <div className="motion-thumb-orb absolute bottom-[18%] right-[12%] h-[38%] w-[26%] rounded-full blur-sm" style={{ backgroundColor: accent }} />
        </>
      ) : variant === 1 ? (
        <>
          <div className="motion-thumb-panel absolute left-[8%] top-[24%] grid w-[84%] grid-cols-3 gap-2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <span
                key={index}
                className="h-8 rounded-md border border-white/10 bg-white/[0.06]"
                style={index === 1 || index === 3 ? { backgroundColor: accent, opacity: 0.55 } : undefined}
              />
            ))}
          </div>
          <div className="absolute bottom-[14%] left-[9%] h-[7%] w-[34%] rounded-full bg-white/85" />
          <div className="absolute bottom-[15%] right-[10%] h-[6%] w-[18%] rounded-full" style={{ backgroundColor: accent }} />
        </>
      ) : variant === 2 ? (
        <>
          <div className="motion-thumb-panel absolute left-[10%] top-[25%] h-[44%] w-[36%] rounded-xl border border-white/10 bg-black/20" />
          <div className="motion-thumb-panel absolute right-[9%] top-[20%] h-[52%] w-[42%] rounded-xl border border-white/10 bg-white/[0.06]" />
          <div className="motion-thumb-orb absolute right-[14%] top-[31%] h-[18%] w-[26%] rounded-full blur-sm" style={{ backgroundColor: accent }} />
          <div className="absolute bottom-[18%] left-[12%] h-[5%] w-[58%] rounded-full bg-white/24" />
        </>
      ) : (
        <>
          <div className="motion-thumb-panel absolute left-[8%] top-[22%] h-[18%] w-[84%] rounded-2xl border border-white/10 bg-white/[0.08]" />
          <div className="absolute left-[12%] top-[47%] h-[7%] w-[44%] rounded-full bg-white/86" />
          <div className="absolute left-[12%] top-[59%] h-[4%] w-[66%] rounded-full bg-white/20" />
          <div className="motion-thumb-orb absolute bottom-[13%] left-[12%] h-[8%] w-[24%] rounded-full" style={{ backgroundColor: accent }} />
        </>
      )}

      {!compact ? null : (
        <div className="absolute bottom-[10%] left-[9%] max-w-[70%] space-y-1.5">
          <div className="flex gap-1">
            {titleWords.map((word) => (
              <span key={word} className="h-1.5 rounded-full bg-white/24" style={{ width: `${Math.min(38, word.length * 6)}px` }} />
            ))}
          </div>
          <span className="block h-1.5 w-14 rounded-full bg-white/12" />
        </div>
      )}
    </div>
  );
}
