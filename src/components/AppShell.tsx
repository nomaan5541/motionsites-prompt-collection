import { Menu, X, Github, Star, AlertTriangle, Search, CheckCircle, Info } from "lucide-react";
import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { catalogSummary } from "../data/prompts.generated";

const navItems = [
  { label: "6 Extracted Examples", to: "/examples", badge: "6 Live" },
  { label: "Search Premium Prompts", to: "/search", badge: "New" },
  { label: "Backgrounds", to: "/backgrounds", badge: "Free" },
  { label: "Gradients", to: "/gradients" },
];

export function AppShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [showBottomBanner, setShowBottomBanner] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup modal on initial session load
    const modalDismissed = sessionStorage.getItem("notice_modal_dismissed");
    if (!modalDismissed) {
      setShowNoticeModal(true);
    }
  }, []);

  const dismissModal = () => {
    setShowNoticeModal(false);
    sessionStorage.setItem("notice_modal_dismissed", "true");
  };

  return (
    <div className="min-h-screen overflow-x-clip pb-16 relative">
      <header className="fixed left-0 right-0 top-0 z-40 bg-[#171717]/90 backdrop-blur-xl">
        <nav className="page-shell flex h-20 items-center justify-between gap-5">
          <NavLink to="/" className="flex items-center gap-3" aria-label="MotionSites Free home">
            <span className="motionsites-mark text-[34px] leading-none" aria-hidden="true">m</span>
            <span className="leading-none">
              <span className="block text-[22px] font-black lowercase tracking-[-0.05em]">motionsites</span>
              <span className="sr-only">Free Library</span>
            </span>
          </NavLink>

          <div className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    isActive ? "text-white" : "text-[#ababab] hover:text-white"
                  }`
                }
              >
                {item.label}
                {"badge" in item && item.badge ? (
                  <span className="rounded-full border border-amber-200/70 px-1.5 py-px text-[8px] font-black uppercase leading-none text-amber-100">
                    {item.badge}
                  </span>
                ) : null}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <span className="rounded-full border border-white/10 bg-[#202020] px-4 py-2 text-[12px] font-semibold text-[#d4d4d4]">
              {catalogSummary.total} Free Prompts
            </span>
            <NavLink
              to="/search"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[#171717] shadow-[0_12px_32px_rgba(219,234,254,0.12)] transition-transform hover:-translate-y-0.5"
            >
              Search Prompts
            </NavLink>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white lg:hidden"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-[#171717]/96 backdrop-blur-xl lg:hidden" role="dialog" aria-modal="true">
          <div className="page-shell flex h-20 items-center justify-between">
            <span className="text-xl font-black lowercase tracking-[-0.05em]">motionsites</span>
            <button
              className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white"
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="page-shell flex flex-col gap-3 pt-10">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-[#202020] px-5 py-5 text-2xl font-black tracking-[-0.04em] text-white"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}

      <main className="pt-20">{children}</main>
      <Footer />

      {/* --- POPUP NOTICE MODAL --- */}
      {showNoticeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl border border-amber-500/40 bg-[#161412] p-6 shadow-2xl text-white">
            <button
              onClick={dismissModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <AlertTriangle className="size-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-bold">
                  Important Notice
                </span>
                <h3 className="text-xl font-bold text-white leading-tight">Media Preview Status</h3>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Please note that some media previews may currently have loading errors or be unavailable.{" "}
              <strong className="text-amber-300 font-semibold">
                Sorry for the preview issue, but don't worry — all prompts are 100% available!
              </strong>
            </p>

            <div className="p-3.5 rounded-xl bg-black/50 border border-amber-500/20 text-xs text-gray-300 space-y-2 mb-6">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <CheckCircle className="size-4 shrink-0" />
                <span>All prompt text files are fully accessible & ready to copy.</span>
              </div>
              <div className="flex items-center gap-2 text-amber-300 font-medium">
                <Search className="size-4 shrink-0" />
                <span>Just search for any prompt by name or keyword and enjoy!</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={() => {
                  dismissModal();
                  navigate("/search");
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
              >
                Search Prompts Now
              </button>
              <button
                onClick={dismissModal}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all border border-white/10"
              >
                Got It & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- PERSISTENT BOTTOM NOTICE BANNER --- */}
      {showBottomBanner && (
        <aside
          aria-label="Site notice"
          className="fixed bottom-0 inset-x-0 z-40 border-t border-amber-500/30 bg-[#161412]/95 backdrop-blur-lg py-3 px-4 shadow-2xl"
        >
          <div className="page-shell flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="flex size-7 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
                <Info className="size-4" />
              </span>
              <p className="text-gray-200">
                <strong className="text-amber-400 font-semibold">Notice:</strong> Some media previews may have loading issues, but{" "}
                <span className="text-amber-300 font-semibold">all prompts are 100% available!</span> Just search for any prompt and enjoy!
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <NavLink
                to="/search"
                className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition-all shadow-md"
              >
                Search Prompts
              </NavLink>
              <button
                onClick={() => setShowBottomBanner(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-white transition-colors"
                title="Dismiss Banner"
                aria-label="Dismiss Notice Banner"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

function Footer() {
  const legalItems = [
    { label: "Terms of Use", to: "https://github.com/nomaan5541/motionsites-prompt-collection/blob/main/TERMS_OF_USE.md", external: true },
    { label: "Fair Use Notice", to: "https://github.com/nomaan5541/motionsites-prompt-collection/blob/main/FAIR_USE_NOTICE.md", external: true },
    { label: "Privacy Policy", to: "https://github.com/nomaan5541/motionsites-prompt-collection/blob/main/PRIVACY_POLICY.md", external: true },
    { label: "License", to: "https://github.com/nomaan5541/motionsites-prompt-collection/blob/main/LICENSE", external: true },
    { label: "Disclaimer", to: "https://github.com/nomaan5541/motionsites-prompt-collection/blob/main/DISCLAIMER.md", external: true },
    { label: "DMCA Policy", to: "https://github.com/nomaan5541/motionsites-prompt-collection/blob/main/DMCA.md", external: true },
    { label: "Code of Conduct", to: "https://github.com/nomaan5541/motionsites-prompt-collection/blob/main/CODE_OF_CONDUCT.md", external: true },
    { label: "Security", to: "https://github.com/nomaan5541/motionsites-prompt-collection/blob/main/SECURITY.md", external: true },
  ];

  return (
    <footer className="mt-20 border-t border-white/10 py-12">
      <div className="page-shell grid gap-10 md:grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-3">
            <span className="motionsites-mark text-[30px] leading-none" aria-hidden="true">m</span>
            <span className="text-xl font-black lowercase tracking-[-0.05em]">motionsites</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/52">
            A free prompt catalogue built from the local MotionSites archive. Copy prompts, preview references, and ship
            landing pages without paid gates.
          </p>
          <div className="mt-6">
            <a
              href="https://github.com/nomaan5541/motionsites-prompt-collection"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/10 hover:text-white"
            >
              <Github className="size-4" />
              <span>Star on GitHub</span>
              <Star className="size-4 text-amber-400" fill="currentColor" />
            </a>
          </div>
        </div>
        <FooterColumn title="Legal" items={legalItems} />
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; to: string; external?: boolean }[] }) {
  return (
    <div>
      <h2 className="text-xs font-black uppercase tracking-[0.18em] text-white/82">{title}</h2>
      <div className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          item.external ? (
            <a
              key={item.to}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/52 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ) : (
            <NavLink key={item.to} to={item.to} className="text-sm text-white/52 transition-colors hover:text-white">
              {item.label}
            </NavLink>
          )
        ))}
      </div>
    </div>
  );
}
