## File: `src/App.tsx`

```tsx
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const BG_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_155101_f2540600-6fe9-433e-8e48-b3f4b72f0727.mp4";

const NAV_ITEMS = ['Platform', 'How it works', 'AI Defense', 'Connections', 'Insights'];

function HamburgerButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300"
      style={{ backgroundColor: open ? '#1a1a1a' : 'transparent' }}
      aria-label="Toggle menu"
    >
      <span
        className="absolute transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ opacity: open ? 0 : 1, transform: open ? 'rotate(-90deg) scale(0.5)' : 'rotate(0deg) scale(1)' }}
      >
        <Menu size={20} color="white" strokeWidth={1.5} />
      </span>
      <span
        className="absolute transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ opacity: open ? 1 : 0, transform: open ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0.5)' }}
      >
        <X size={20} color="white" strokeWidth={1.5} />
      </span>
    </button>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <div
        className="fixed inset-0 z-30 lg:hidden transition-all duration-500"
        style={{
          backdropFilter: open ? 'blur(12px)' : 'blur(0px)',
          backgroundColor: open ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)',
          pointerEvents: open ? 'auto' : 'none',
        }}
        onClick={onClose}
      />

      <div
        className="fixed top-0 left-0 right-0 z-40 lg:hidden overflow-hidden"
        style={{
          maxHeight: open ? '420px' : '0px',
          transition: 'max-height 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div
          className="pt-20 pb-6 px-5"
          style={{ backgroundColor: 'rgba(8,8,8,0.97)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item}
                href="#"
                onClick={onClose}
                className="text-white/70 hover:text-white text-base py-3 px-3 rounded-xl hover:bg-white/5 transition-all duration-200 flex items-center justify-between group"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  transitionDelay: open ? `${i * 50 + 80}ms` : '0ms',
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(-8px)',
                  transition: `opacity 0.4s cubic-bezier(0.23,1,0.32,1) ${i * 50 + 80}ms, transform 0.4s cubic-bezier(0.23,1,0.32,1) ${i * 50 + 80}ms, color 0.2s, background 0.2s`,
                }}
              >
                {item}
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-40 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            ))}
          </div>

          <div
            className="mt-5 pt-5"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.07)',
              transitionDelay: open ? '360ms' : '0ms',
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(-8px)',
              transition: `opacity 0.4s cubic-bezier(0.23,1,0.32,1) 360ms, transform 0.4s cubic-bezier(0.23,1,0.32,1) 360ms`,
            }}
          >
            <button
              className="w-full py-3 rounded-full text-black text-sm font-medium transition-all duration-300 hover:opacity-80"
              style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#ffffff' }}
            >
              Join the wait
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 lg:px-10 lg:py-6">
        <span className="text-white text-xl font-semibold tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
          velorix
        </span>
        <div className="hidden lg:flex items-center gap-1 rounded-full px-2 py-1.5" style={{ backgroundColor: '#0C0C0C' }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/80 hover:text-white text-sm px-4 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <HamburgerButton open={open} onClick={() => setOpen((v) => !v)} />
          <button
            className="hidden lg:block text-sm font-medium px-5 py-2 rounded-full text-black transition-all duration-300 hover:opacity-80"
            style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#ffffff' }}
          >
            Join the wait
          </button>
        </div>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black" style={{ fontFamily: 'Inter, sans-serif' }}>
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        src={BG_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />

      <Navbar />

      <div className="relative z-20 flex flex-col items-center text-center pt-[90px] md:pt-[120px] px-5 sm:px-8">
        <h1
          className="text-white font-normal leading-[1.12] tracking-tight max-w-3xl"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.75rem, 5vw, 2.6rem)',
          }}
        >
          Where precision finds its edge
          <br className="hidden sm:block" />
          {' '}and vision rewrites what comes next
        </h1>

        <p
          className="mt-5 md:mt-6 text-white/60 text-sm md:text-base leading-relaxed max-w-xs sm:max-w-sm md:max-w-md"
          style={{ fontFamily: "'Courier New', Courier, monospace", letterSpacing: '0.01em' }}
        >
          a seamless bridge - where raw ambition
          <br className="hidden sm:block" />
          {' '}and machine clarity converge as one
        </p>

        <button
          className="mt-7 md:mt-8 flex items-center gap-2.5 px-5 py-2.5 rounded-full text-black text-sm font-medium transition-all duration-300 hover:opacity-80 group"
          style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#ffffff' }}
        >
          Watch it unfold
          <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}
```

## Assets

**Background video URL (verbatim):**
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_155101_f2540600-6fe9-433e-8e48-b3f4b72f0727.mp4
```

## Icons (from `lucide-react`)

Used via the `<Menu>`, `<X>`, and `<ArrowRight>` components. These are imported from the `lucide-react` npm package — the SVG path data is not inlined in this codebase; it ships inside the package. The three icons are rendered with:

- `<Menu size={20} color="white" strokeWidth={1.5} />`
- `<X size={20} color="white" strokeWidth={1.5} />`
- `<ArrowRight size={15} />` (hero button) and `<ArrowRight size={14} />` (mobile menu links)

## Dependencies (`package.json`)

```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

## Animation values (all CSS, no Framer Motion)

**Hamburger icon crossfade** — `duration: 0.3s`, `ease: cubic-bezier(0.23,1,0.32,1)`; Menu icon `opacity 1→0`, `transform rotate(0deg) scale(1) → rotate(-90deg) scale(0.5)`; X icon inverse.

**Mobile menu backdrop** — `duration: 0.5s`; `backdropFilter blur(0px) → blur(12px)`; `background rgba(0,0,0,0) → rgba(0,0,0,0.6)`.

**Mobile menu panel** — `max-height: 0px → 420px`, `duration: 0.5s`, `ease: cubic-bezier(0.23, 1, 0.32, 1)`.

**Mobile menu link stagger** — each item `duration: 0.4s`, `ease: cubic-bezier(0.23,1,0.32,1)`, `delay: i * 50 + 80ms` (80, 130, 180, 230, 280); `opacity 0 → 1`, `transform translateY(-8px) → translateY(0)`.

**Mobile menu CTA** — `duration: 0.4s`, `ease: cubic-bezier(0.23,1,0.32,1)`, `delay: 360ms`.

**Hero button arrow** — hover `translate-x-0.5`, `duration: 0.2s`.

No Supabase persistence is used on this marketing section — it's presentational only, and nothing on this hero is user-specific or stateful across sessions.