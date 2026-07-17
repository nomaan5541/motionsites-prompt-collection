import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Check,
  Globe2,
  Layers,
  Mail,
  Menu,
  Plus,
  Sparkles,
  Zap,
} from "lucide-react";
import type { CSSProperties } from "react";
import type { CatalogItem } from "../data/prompts.generated";
import { buildLivePreviewContent, type LivePreviewContent } from "../lib/livePreview";
import { AetherisVoyagePreview } from "./live-previews/AetherisVoyagePreview";
import { NeoMuseumPreview } from "./live-previews/NeoMuseumPreview";

export function PromptLiveRenderer({ item }: { item: CatalogItem }) {
  if (item.id === "aetheris-voyage-hero") {
    return <AetherisVoyagePreview />;
  }

  if (item.id === "neo-museum") {
    return <NeoMuseumPreview />;
  }

  return <GenericPromptLiveRenderer item={item} />;
}

function GenericPromptLiveRenderer({ item }: { item: CatalogItem }) {
  const content = buildLivePreviewContent(item);
  const words = content.headline.split(/\s+/).filter(Boolean);
  const isLight = content.theme === "light";
  const style = {
    "--preview-bg": content.background,
    "--preview-fg": content.foreground,
    "--preview-muted": content.muted,
    "--preview-surface": content.surface,
    "--preview-accent": content.accent,
    "--preview-accent-2": content.accent2,
  } as CSSProperties;

  return (
    <div
      className={`prompt-driven-preview live-preview-canvas relative isolate min-h-[820px] overflow-hidden rounded-[28px] border shadow-2xl ${
        isLight ? "border-black/10 text-[#111]" : "border-white/10 text-white"
      }`}
      style={style}
      data-archetype={content.archetype}
    >
      <LiveMedia content={content} />
      <VisualBackdrop content={content} />

      <header className="relative z-10 mx-auto flex w-[min(1180px,calc(100%-32px))] items-center justify-between py-6">
        <div className="flex items-center gap-3">
          <BrandMark content={content} />
          <div className="text-2xl font-black tracking-[-0.05em] sm:text-3xl">{content.brand}</div>
        </div>
        <nav className={`hidden items-center gap-7 rounded-full border px-5 py-3 text-sm font-semibold backdrop-blur-md md:flex ${isLight ? "border-black/10 bg-white/58 text-black/70" : "border-white/10 bg-black/20 text-white/72"}`}>
          {content.navItems.map((navItem) => (
            <a key={navItem} href="#features" className={`transition-colors ${isLight ? "hover:text-black" : "hover:text-white"}`}>
              {navItem}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className={`hidden rounded-full border px-5 py-3 text-sm font-bold backdrop-blur-md transition-transform hover:-translate-y-0.5 md:inline-flex ${
            isLight ? "border-black/10 bg-black text-white" : "border-white/18 bg-white/10 text-white"
          }`}
        >
          {content.primaryCta}
        </button>
        <button type="button" className={`grid h-11 w-11 place-items-center rounded-full border md:hidden ${isLight ? "border-black/12 bg-black/5" : "border-white/14 bg-white/10"}`} aria-label="Menu">
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </header>

      <section className="relative z-10 mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 pb-14 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:pb-18 lg:pt-20">
        <div>
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.16em] backdrop-blur-md ${isLight ? "border-black/10 bg-white/70 text-black/60" : "border-white/12 bg-black/24 text-white/72"}`}>
            <Sparkles className="h-4 w-4" style={{ color: content.accent }} aria-hidden="true" />
            {content.sectionNames[0] || item.category}
          </div>
          <h1
            className={`max-w-5xl leading-[0.9] tracking-[-0.06em] ${
              content.archetype === "agency" || content.archetype === "portfolio" ? "text-6xl font-black uppercase sm:text-8xl lg:text-[118px]" : "text-5xl font-black sm:text-7xl lg:text-[92px]"
            }`}
          >
            {words.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="live-word inline-block pr-[0.2em]"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className={`mt-7 max-w-2xl text-base font-medium leading-7 sm:text-lg ${isLight ? "text-black/62" : "text-white/68"}`}>{content.subcopy}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className={`inline-flex h-14 items-center gap-2 rounded-full px-7 text-sm font-black uppercase tracking-[0.12em] transition-transform hover:-translate-y-0.5 ${
                isLight ? "bg-[#111] text-white" : "bg-white text-[#111]"
              }`}
            >
              {content.primaryCta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`inline-flex h-14 items-center gap-2 rounded-full border px-7 text-sm font-black uppercase tracking-[0.12em] backdrop-blur-md transition-transform hover:-translate-y-0.5 ${
                isLight ? "border-black/12 bg-white/60 text-black" : "border-white/16 bg-white/8 text-white"
              }`}
            >
              {content.secondaryCta}
            </button>
          </div>
        </div>

        <HeroVisual content={content} />
      </section>

      <ArchetypeSection content={content} />
    </div>
  );
}

function VisualBackdrop({ content }: { content: LivePreviewContent }) {
  const isLight = content.theme === "light";
  if (content.videoUrl || content.imageUrl) {
    return <div className={`absolute inset-0 -z-10 ${isLight ? "bg-white/30" : "bg-black/30"}`} />;
  }
  return (
    <>
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: `radial-gradient(circle at 18% 16%, ${content.accent}44, transparent 34%), radial-gradient(circle at 82% 28%, ${content.accent2}36, transparent 30%), linear-gradient(135deg, ${content.background}, ${content.theme === "light" ? "#f7f7f7" : "#070707"} 70%)`,
        }}
      />
      {content.archetype === "case-studies" || content.archetype === "portfolio" ? <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" /> : null}
      {content.theme === "dark" ? <div className="scene-grid absolute inset-0 -z-10 opacity-35" /> : null}
    </>
  );
}

function BrandMark({ content }: { content: LivePreviewContent }) {
  const initials = content.brand
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <span
      className="grid h-10 w-10 place-items-center rounded-full text-xs font-black"
      style={{ backgroundColor: content.accent, color: content.theme === "light" ? "#fff" : "#050505" }}
    >
      {initials || "M"}
    </span>
  );
}

function HeroVisual({ content }: { content: LivePreviewContent }) {
  const isLight = content.theme === "light";

  if (content.archetype === "pricing") return <PricingPreview content={content} compact />;
  if (content.archetype === "footer") return <FooterPreview content={content} compact />;
  if (content.archetype === "case-studies") return <CaseStudiesPreview content={content} compact />;
  if (content.archetype === "dashboard") return <DashboardPreview content={content} />;
  if (content.archetype === "portfolio") return <PortfolioPreview content={content} compact />;
  if (content.archetype === "nft") return <NftPreview content={content} compact />;
  if (content.archetype === "signup") return <SignupPreview content={content} />;

  return (
    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
      {content.stats.map((stat) => (
        <div key={`${stat.value}-${stat.label}`} className={`rounded-2xl border p-5 backdrop-blur-md ${isLight ? "border-black/10 bg-white/64" : "border-white/10 bg-black/24"}`}>
          <p className="text-3xl font-black tracking-[-0.04em]" style={{ color: content.accent }}>
            {stat.value}
          </p>
          <p className={`mt-1 text-[11px] font-black uppercase tracking-[0.16em] ${isLight ? "text-black/48" : "text-white/48"}`}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function ArchetypeSection({ content }: { content: LivePreviewContent }) {
  if (content.archetype === "pricing") return <PricingPreview content={content} />;
  if (content.archetype === "footer") return <FooterPreview content={content} />;
  if (content.archetype === "case-studies") return <CaseStudiesPreview content={content} />;
  if (content.archetype === "portfolio") return <PortfolioPreview content={content} />;
  if (content.archetype === "nft") return <NftPreview content={content} />;
  if (content.archetype === "dashboard") return <FeatureSection content={content} dashboard />;
  if (content.archetype === "signup") return <SignupBand content={content} />;
  return <FeatureSection content={content} />;
}

function FeatureSection({ content, dashboard = false }: { content: LivePreviewContent; dashboard?: boolean }) {
  const isLight = content.theme === "light";
  return (
    <section id="features" className="relative z-10 mx-auto grid w-[min(1180px,calc(100%-32px))] gap-3 pb-8 md:grid-cols-3">
      {content.features.map((feature, index) => {
        const Icon = dashboard ? BarChart3 : index === 0 ? BadgeCheck : index === 1 ? Layers : Zap;
        return (
          <article key={feature.title} className={`motion-card rounded-2xl border p-5 backdrop-blur-md ${isLight ? "border-black/10 bg-white/72" : "border-white/10 bg-[#171717]/72"}`}>
            <div className={`${isLight ? "bg-black/5" : "bg-white/10"} mb-6 grid h-11 w-11 place-items-center rounded-xl`} style={{ color: content.accent }}>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-black tracking-[-0.04em]">{feature.title}</h2>
            <p className={`mt-3 text-sm leading-6 ${isLight ? "text-black/58" : "text-white/58"}`}>{feature.body}</p>
          </article>
        );
      })}
    </section>
  );
}

function PricingPreview({ content, compact = false }: { content: LivePreviewContent; compact?: boolean }) {
  const plans = content.cardTitles.slice(0, 2);
  return (
    <div className={`${compact ? "grid gap-4" : "relative z-10 mx-auto grid w-[min(860px,calc(100%-32px))] gap-5 pb-8 md:grid-cols-2"}`}>
      {plans.map((plan, index) => (
        <article key={plan} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md" style={{ backgroundColor: index === 1 ? `${content.accent}33` : "rgba(255,255,255,0.08)" }}>
          {index === 1 ? <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">Best Value</span> : null}
          <p className="mt-5 text-[11px] font-black uppercase tracking-[0.2em] text-white/60">{plan}</p>
          <div className="mt-6 flex items-end gap-2">
            <span className="text-5xl font-black">${index ? "239" : "159"}</span>
            <span className="pb-1 text-white/40 line-through">${index ? "697" : "497"}</span>
          </div>
          <button className="mt-6 rounded-full bg-white px-5 py-2 text-sm font-bold text-black">Get Started</button>
          <ul className="mt-6 space-y-3 text-sm text-white/72">
            {content.features.map((feature) => (
              <li key={feature.title} className="flex items-center gap-2">
                <Check className="h-4 w-4" style={{ color: content.accent }} aria-hidden="true" />
                {feature.title}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function FooterPreview({ content, compact = false }: { content: LivePreviewContent; compact?: boolean }) {
  return (
    <section className={`${compact ? "" : "relative z-10 mx-auto w-[min(1180px,calc(100%-32px))] pb-8"} rounded-[28px] bg-black p-7 text-white`}>
      <div className="mb-8 h-14 overflow-hidden opacity-70">
        <div className="h-full w-[200%] animate-[footerDotsMove_18s_linear_infinite] bg-[radial-gradient(circle,rgba(255,255,255,0.55)_1.5px,transparent_2px)] bg-[size:72px_38px]" />
      </div>
      <div className="grid gap-8 md:grid-cols-[1.25fr_repeat(3,0.42fr)]">
        <h2 className="text-4xl font-light leading-tight md:text-5xl">{content.headline}</h2>
        {[0, 1, 2].map((column) => (
          <nav key={column} className="flex flex-col gap-3 text-sm font-bold text-white/82">
            {content.navItems.slice(column, column + 4).map((nav) => (
              <a key={nav} href="#footer-preview">
                {nav}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <div className="mt-10 flex items-end gap-4">
        <BrandMark content={content} />
        <p className="text-[clamp(42px,9vw,132px)] font-black leading-[0.78] tracking-[-0.06em]">{content.brand}</p>
      </div>
    </section>
  );
}

function CaseStudiesPreview({ content, compact = false }: { content: LivePreviewContent; compact?: boolean }) {
  const images = content.imageUrls.length ? content.imageUrls : content.imageUrl ? [content.imageUrl] : [];
  const cards = content.cardTitles.slice(0, compact ? 2 : 4);
  return (
    <section className={`${compact ? "" : "relative z-10 mx-auto w-[min(1180px,calc(100%-32px))] pb-8"} grid gap-4 md:grid-cols-2`}>
      {cards.map((title, index) => (
        <article key={title} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-white text-black">
          {images[index % Math.max(images.length, 1)] ? <img src={images[index % images.length]} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /> : null}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-0 transition-opacity group-hover:opacity-100">
            {Array.from({ length: 24 }).map((_, block) => (
              <span key={block} className="bg-black/70" style={{ transitionDelay: `${block * 12}ms` }} />
            ))}
          </div>
          <button className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center border border-white/30 text-white">
            <Plus className="h-4 w-4" aria-hidden="true" />
          </button>
          <div className="absolute bottom-0 left-0 z-20 max-w-[76%] bg-white px-4 pb-3 pt-2">
            <h3 className="text-2xl font-normal leading-tight">{title}</h3>
            <p className="mt-1 text-xs text-black/60">{content.sectionNames[index] || "Brand Strategy"} / 2026</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function PortfolioPreview({ content, compact = false }: { content: LivePreviewContent; compact?: boolean }) {
  return (
    <section className={`${compact ? "" : "relative z-10 mx-auto w-[min(1180px,calc(100%-32px))] pb-8"} rounded-[32px] border border-white/10 bg-[#0c0c0c] p-6 text-white`}>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-white/60">{content.sectionNames[1] || "Portfolio"}</p>
          <h2 className="mt-4 text-[clamp(48px,10vw,132px)] font-black uppercase leading-none tracking-[-0.06em] text-white/90">{content.brand}</h2>
        </div>
        {content.imageUrl ? <img src={content.imageUrl} alt="" className="hidden h-72 w-56 rounded-[32px] object-cover md:block" /> : null}
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {content.cardTitles.slice(0, 3).map((title, index) => (
          <div key={title} className="rounded-[24px] border border-white/12 p-5">
            <p className="text-5xl font-black text-white/24">0{index + 1}</p>
            <h3 className="mt-4 text-xl font-bold">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function NftPreview({ content, compact = false }: { content: LivePreviewContent; compact?: boolean }) {
  const videos = content.videoUrls;
  return (
    <section className={`${compact ? "" : "relative z-10 mx-auto w-[min(1180px,calc(100%-32px))] pb-8"} rounded-[32px] border border-white/10 bg-[#010828] p-6 text-[#EFF4FF]`}>
      <div className="flex items-end justify-between gap-6">
        <h2 className="max-w-xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-7xl">{content.headline}</h2>
        <span className="hidden rotate-[-4deg] text-4xl font-serif italic md:block" style={{ color: content.accent }}>
          {content.brand}
        </span>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {content.cardTitles.slice(0, 3).map((title, index) => (
          <article key={title} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-3">
            <div className="aspect-square overflow-hidden rounded-[22px] bg-black/30">
              {videos[index] ? <video src={videos[index]} autoPlay muted loop playsInline className="h-full w-full object-cover" /> : <div className="h-full w-full" style={{ background: `radial-gradient(circle, ${content.accent}, transparent 55%)` }} />}
            </div>
            <div className="mt-3 flex items-center justify-between rounded-2xl bg-white/[0.04] p-3">
              <span className="text-xs uppercase text-white/60">{title}</span>
              <span className="font-bold">{index === 1 ? "9.0" : "8.7"}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DashboardPreview({ content }: { content: LivePreviewContent }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-black/28 p-4 backdrop-blur-md">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/46">Live system</p>
          <h3 className="text-2xl font-black">{content.brand}</h3>
        </div>
        <Globe2 className="h-6 w-6" style={{ color: content.accent }} aria-hidden="true" />
      </div>
      <div className="grid gap-3">
        {content.features.map((feature, index) => (
          <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
            <div className="mb-4 h-2 rounded-full bg-white/10">
              <div className="h-full rounded-full" style={{ width: `${48 + index * 18}%`, backgroundColor: content.accent }} />
            </div>
            <p className="font-bold">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SignupPreview({ content }: { content: LivePreviewContent }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-black/24 p-6 backdrop-blur-md">
      <Mail className="mb-8 h-8 w-8" style={{ color: content.accent }} aria-hidden="true" />
      <p className="text-3xl font-black tracking-[-0.04em]">Join {content.brand}</p>
      <div className="mt-6 flex rounded-full border border-white/12 bg-white/8 p-2">
        <span className="flex-1 px-4 py-3 text-white/40">Enter your email</span>
        <button className="rounded-full bg-white px-5 text-sm font-bold text-black">
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function SignupBand({ content }: { content: LivePreviewContent }) {
  return (
    <section className="relative z-10 mx-auto w-[min(1180px,calc(100%-32px))] pb-8">
      <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md md:flex md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/44">{content.sectionNames[1] || "Newsletter"}</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">{content.cardTitles[0] || "Start your journey"}</h2>
        </div>
        <button className="mt-5 rounded-full bg-white px-6 py-3 text-sm font-bold text-black md:mt-0">{content.primaryCta}</button>
      </div>
    </section>
  );
}

function LiveMedia({ content }: { content: ReturnType<typeof buildLivePreviewContent> }) {
  if (content.videoUrl) {
    return (
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-58"
        src={content.videoUrl}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  if (content.imageUrl) {
    return <img className="absolute inset-0 -z-20 h-full w-full object-cover opacity-58" src={content.imageUrl} alt="" />;
  }

  return null;
}
