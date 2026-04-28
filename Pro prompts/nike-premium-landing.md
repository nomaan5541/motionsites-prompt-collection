# Nike Premium Landing

**ID:** nike-premium-landing  
**Category:** Landing Page  
**Type:** hero  

---

Create a high-end, interactive Nike hero landing page with two scrolling sections. The app requires `react-player` and `gsap` for animations and interactive masks.

Follow these strict requirements to perfectly match the design, assets, fonts, and logic:

### 1. Dependencies to Install
Install `react-player` and `gsap`.

### 2. Globals & Configuration (`src/index.css`)
Replace `index.css` with this exact Tailwind v4 and Google Fonts configuration:
```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Manrope", sans-serif;
  --font-serif: "Instrument Serif", serif;
}
3. Bubble Menu Component (src/components/BubbleMenu.css)
code
CSS
.bubble-menu { display: flex; align-items: center; gap: 12px; z-index: 50; }
.bubble-menu.absolute { position: absolute; }
.bubble-menu.fixed { position: fixed; }
.bubble { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px); transition: transform 0.2s ease, background 0.3s ease; }
.bubble:hover { transform: scale(1.05); }
.menu-btn { flex-direction: column; gap: 6px; }
.menu-line { width: 20px; height: 2px; border-radius: 2px; transition: all 0.3s ease; }
.menu-line.short { width: 14px; }
.menu-btn:hover .menu-line.short { width: 20px; }
.menu-btn.open .menu-line:not(.short) { transform: translateY(4px) rotate(45deg); }
.menu-btn.open .menu-line.short { transform: translateY(-4px) rotate(-45deg); width: 20px; }
.bubble-menu-items { inset: 0; position: fixed; display: none; align-items: center; justify-content: center; z-index: 40; background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
.pill-list { list-style: none; padding: 0; margin: 0; display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; max-width: 800px; }
.pill-link { display: block; padding: 16px 36px; border-radius: 9999px; background-color: var(--pill-bg); color: var(--pill-color); text-decoration: none; font-weight: 500; font-size: 24px; transform: rotate(var(--item-rot)); transition: all 0.3s ease; border: 1px solid rgba(255, 255, 255, 0.1); }
.pill-link:hover { background-color: var(--hover-bg) !important; color: var(--hover-color) !important; transform: scale(1.05) rotate(0deg); }
.pill-label { display: block; }
4. Bubble Menu Logic (src/components/BubbleMenu.tsx)
Create a GSAP-animated pill-menu component.
code
Tsx
import { useState, useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import './BubbleMenu.css';

interface MenuItem { label: string; href: string; ariaLabel?: string; rotation?: number; hoverStyles?: { bgColor: string; textColor: string }; }
interface BubbleMenuProps { logo?: string | ReactNode; onMenuClick?: (isOpen: boolean) => void; className?: string; style?: React.CSSProperties; menuAriaLabel?: string; menuBg?: string; menuContentColor?: string; useFixedPosition?: boolean; items?: MenuItem[]; animationEase?: string; animationDuration?: number; staggerDelay?: number; }

export default function BubbleMenu({ logo, onMenuClick, className, style, menuAriaLabel = 'Toggle menu', menuBg = '#fff', menuContentColor = '#111', useFixedPosition = false, items, animationEase = 'back.out(1.5)', animationDuration = 0.5, staggerDelay = 0.12 }: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const containerClassName = ['bubble-menu', useFixedPosition ? 'fixed' : 'absolute', className].filter(Boolean).join(' ');

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);
    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: 'flex' });
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%' });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });
        tl.to(bubble, { scale: 1, duration: animationDuration, ease: animationEase });
        if (labels[i]) tl.to(labels[i], { y: 0, autoAlpha: 1, duration: animationDuration, ease: 'power3.out' }, `-=${animationDuration * 0.9}`);
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.to(labels, { y: 24, autoAlpha: 0, duration: 0.2, ease: 'power3.in' });
      gsap.to(bubbles, { scale: 0, duration: 0.2, ease: 'power3.in', onComplete: () => { gsap.set(overlay, { display: 'none' }); setShowOverlay(false); } });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

  return (
    <>
      <nav className={containerClassName} style={style} aria-label="Main navigation">
        <button type="button" className={`bubble toggle-bubble menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={handleToggle} style={{ background: menuBg }}>
          <span className="menu-line" style={{ background: menuContentColor }} />
          <span className="menu-line short" style={{ background: menuContentColor }} />
        </button>
      </nav>
      {showOverlay && (
        <div ref={overlayRef} className="bubble-menu-items fixed">
          <ul className="pill-list">
            {items?.map((item, idx) => (
              <li key={idx}>
                <a href={item.href} className="pill-link" style={{ '--item-rot': `${item.rotation ?? 0}deg`, '--pill-bg': menuBg, '--pill-color': menuContentColor, '--hover-bg': item.hoverStyles?.bgColor, '--hover-color': item.hoverStyles?.textColor } as any} ref={el => { bubblesRef.current[idx] = el; }} onClick={handleToggle}>
                  <span className="pill-label" ref={el => { labelRefs.current[idx] = el; }}>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
5. Spotlight Reveal Interactive Video Mask (src/components/SpotlightReveal.tsx)
code
Tsx
import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

interface SpotlightRevealProps { imageSrc: string; videoSrc: string; isPlaying?: boolean; baseRadius?: number; }

export default function SpotlightReveal({ imageSrc, videoSrc, isPlaying = true, baseRadius = 420 }: SpotlightRevealProps) {
  const NUM_TRAILS = 6;
  const videoRef = useRef<HTMLVideoElement>(null);
  const pointsRef = useRef(Array.from({ length: NUM_TRAILS }, () => ({ x: -1000, y: -1000 })));

  useEffect(() => {
    if (videoRef.current) { isPlaying ? videoRef.current.play() : videoRef.current.pause(); }
  }, [isPlaying]);

  useEffect(() => {
    let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
    const handleMouseMove = (e: MouseEvent) => { targetX = e.clientX; targetY = e.clientY; };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const animate = () => {
      const points = pointsRef.current;
      points[0].x += (targetX - points[0].x) * 0.2;
      points[0].y += (targetY - points[0].y) * 0.2;
      for (let i = 1; i < points.length; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.35;
        points[i].y += (points[i - 1].y - points[i].y) * 0.35;
      }
      for (let i = 0; i < points.length; i++) {
        const circle = document.getElementById(`trail-${i}`);
        if (circle) { circle.setAttribute('cx', points[i].x.toString()); circle.setAttribute('cy', points[i].y.toString()); }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener('mousemove', handleMouseMove); cancelAnimationFrame(animationFrameId); };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-black pointer-events-none overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none">
        <video ref={videoRef} src={videoSrc} className="absolute inset-0 w-full h-full object-cover" muted loop playsInline />
      </div>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="holeGradient">
            <stop offset="0%" stopColor="black" stopOpacity="1" />
            <stop offset="60%" stopColor="black" stopOpacity="0.8" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <mask id="spotlight-mask" maskContentUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
            <rect width="100%" height="100%" fill="white" />
            {Array.from({ length: NUM_TRAILS }).reverse().map((_, reversedIndex) => {
              const i = NUM_TRAILS - 1 - reversedIndex;
              return <circle key={`trail-${i}`} id={`trail-${i}`} cx="-1000" cy="-1000" r={baseRadius - i * 35} fill="url(#holeGradient)" opacity={1 - i * 0.15} />;
            })}
          </mask>
        </defs>
        <image href={imageSrc} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" mask="url(#spotlight-mask)" />
      </svg>
    </div>
  );
}
6. App Layout & Data (src/App.tsx)
code
Tsx
import { useState } from 'react';
import BubbleMenu from './components/BubbleMenu';
import SpotlightReveal from './components/SpotlightReveal';

const items = [
  { label: 'Drops', href: '#', rotation: -8, hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' } },
  { label: 'Innovation', href: '#', rotation: 8, hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' } },
  { label: 'Collections', href: '#', rotation: 8, hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' } },
  { label: 'Community', href: '#', rotation: 8, hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' } },
  { label: 'Stores', href: '#', rotation: -8, hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' } }
];

export default function App() {
  const [isFirstVideoPlaying, setIsFirstVideoPlaying] = useState(false);
  const [isSecondVideoPlaying, setIsSecondVideoPlaying] = useState(false);

  return (
    <div className="relative w-full flex flex-col bg-[#050505]">
      {/* First Screen */}
      <section className="sticky top-0 z-0 w-full h-[100dvh] overflow-hidden flex flex-col justify-between pointer-events-auto">
        <SpotlightReveal 
          imageSrc="https://github.com/dsMagnatov/Acreage-landing-assets/blob/main/0098888.jpg?raw=true"
          videoSrc="https://pikaso.cdnpk.net/private/production/4021778466/80a7f7ef-643d-40bc-b533-1e86f159d653-0.mp4?token=exp=1777075200~hmac=91d86c3600a89e923130fce0912dcfb0de81f05f2cde5fc77c30f3e7ae094342"
          isPlaying={isFirstVideoPlaying}
        />
        
        <div className="absolute bottom-0 left-0 w-full h-[75%] z-20" onMouseEnter={() => setIsFirstVideoPlaying(true)} onMouseLeave={() => setIsFirstVideoPlaying(false)} />
        
        <header className="relative z-50 w-full flex justify-center items-start pt-[150px]">
          <svg width="120" viewBox="135.5 361.38 420.32 149.8" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="m181.86 511.11c-12.524-0.49755-22.77-3.9244-30.782-10.289-1.529-1.2159-5.1725-4.8616-6.3949-6.3992-3.2489-4.0853-5.4578-8.0611-6.931-12.472-4.5334-13.579-2.2002-31.397 6.6737-50.953 7.5979-16.742 19.322-33.347 39.776-56.344 3.013-3.384 11.986-13.281 12.043-13.281 0.0216 0-0.46749 0.84706-1.083 1.8786-5.3183 8.9082-9.8689 19.401-12.348 28.485-3.9823 14.576-3.502 27.085 1.4068 36.784 3.3862 6.6822 9.1913 12.47 15.719 15.67 11.428 5.5993 28.159 6.0625 48.592 1.3554 1.4068-0.32599 71.116-18.831 154.91-41.123 83.794-22.294 152.36-40.52 152.37-40.505 0.0237 0.0193-194.68 83.333-295.75 126.56-16.007 6.8431-20.287 8.5715-27.812 11.214-19.236 6.7551-36.467 9.9783-50.396 9.4251z"/>
          </svg>
          <BubbleMenu items={items} className="absolute top-8 right-8 z-50" />
        </header>

        <main className="relative z-10 w-full flex-1 flex flex-col items-center justify-end pb-24 px-4 text-center text-white">
          <h1 className="font-sans font-medium leading-[1.05] tracking-tight w-full mx-auto translate-y-[50px]" style={{ fontSize: 'clamp(14px, 3vw, 51px)' }}>
            <span className="block">Pure Comfort For</span>
            <span className="block">Next-Generation Athletes. <span className="font-serif italic font-normal pr-1">We Craft</span></span>
            <span className="block font-serif italic font-normal pr-1">The Ultimate Footwear For Elite Performance,</span>
            <span className="block font-serif italic font-normal pr-1">Urban Exploration, Everyday Style.</span>
          </h1>
        </main>
      </section>

      {/* Second Screen */}
      <section className="relative z-10 w-full h-[100dvh] overflow-hidden bg-black text-white" style={{ boxShadow: '0 -20px 50px rgba(0,0,0,0.5)' }}>
        <SpotlightReveal 
          imageSrc="https://github.com/dsMagnatov/Acreage-landing-assets/blob/main/02604201313.png?raw=true"
          videoSrc="https://pikaso.cdnpk.net/private/production/4024859125/d070ae9c-55df-47aa-acbe-4ee66337855c-0.mp4?token=exp=1777075200~hmac=4202c1d0ec90137eb6dffa8e0db93ed7569a68b2016165d8b1b567f888869ff5"
          isPlaying={isSecondVideoPlaying}
          baseRadius={520}
        />

        <div className="absolute right-[calc(8%+100px)] bottom-[12%] w-[calc(50%-50px)] h-[calc(50%+230px)] z-30" onMouseEnter={() => setIsSecondVideoPlaying(true)} onMouseLeave={() => setIsSecondVideoPlaying(false)} />
        <div className="absolute left-[calc(8%+200px)] top-[calc(20%+190px)] w-[calc(15%+250px)] h-[calc(22.5%+130px)] -translate-y-full z-30" onMouseEnter={() => setIsSecondVideoPlaying(true)} onMouseLeave={() => setIsSecondVideoPlaying(false)} />

        <div className="absolute left-[calc(8%+200px)] top-[20%] z-20 w-[320px] px-8 py-6 rounded-sm border border-white/10" style={{ background: 'rgba(0, 0, 0, 0.16)', backdropFilter: 'blur(80px)', WebkitBackdropFilter: 'blur(80px)' }}>
          <div className="flex items-end gap-2 mb-4">
            <span className="font-serif italic text-[#DA3A16] text-[72px] leading-[80px] tracking-tight">78%</span>
            <div className="w-[11px]">
              <svg style={{ width: '160px', height: '80px' }} viewBox="0 0 289 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_878_28499)"><path d="M22.5 48.7306C39.7833 48.7306 49.34 54.94 63.1667 69.2965C76.9933 83.653 86.55 110.5 103.833 110.5C121.117 110.5 130.673 84.2876 144.5 59.2856C158.327 34.2837 167.883 19.5573 185.167 19.5573C202.45 19.5573 208.55 57.6673 225.833 57.6673C243.117 57.6673 249.217 19.5 266.5 19.5" stroke="#DA3A16" strokeWidth="2"/></g>
                <defs><filter id="filter0_d_878_28499" x="0" y="0" width="289" height="138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="11.25"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.854902 0 0 0 0 0.227451 0 0 0 0 0.0862745 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_878_28499"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_878_28499" result="shape"/></filter></defs>
              </svg>
            </div>
          </div>
          <h3 className="font-serif text-white text-[15px] tracking-[0.02em] uppercase mb-2 leading-tight">NEXT-GEN CUSHIONING ARCHITECTURE</h3>
          <p className="font-serif text-white/64 text-[13px]">Impact Absorption & Energy Return Dynamics</p>
        </div>

        <div className="absolute left-[8%] bottom-[12%] z-20 text-white max-w-[500px]">
          <h2 className="text-[44px] leading-[1.05] tracking-tight flex flex-col">
            <span className="font-sans font-medium">Bringing Aerospace-</span>
            <span className="font-sans font-medium">Grade Infrastructure</span>
            <span className="font-serif font-normal pt-1"><span className="not-italic">Directly To Your </span><span className="italic">Everyday</span></span>
            <span className="font-serif italic font-normal">Urban Exploration</span>
          </h2>
        </div>

        <div className="absolute right-[calc(8%+100px)] bottom-[12%] z-20 flex flex-col items-center">
           <div className="bg-white w-[180px] py-[6px] flex justify-center items-center">
              <span className="text-black font-serif text-[10px] uppercase font-bold tracking-[0.08em] text-center leading-[16px]">THE SCIENCE OF IMPACT CONTROL</span>
           </div>
           <div className="bg-[#DA3A16] w-[180px] h-[100px] flex justify-center items-center">
              <svg width="86" viewBox="135.5 361.38 420.32 149.8" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="m181.86 511.11c-12.524-0.49755-22.77-3.9244-30.782-10.289-1.529-1.2159-5.1725-4.8616-6.3949-6.3992-3.2489-4.0853-5.4578-8.0611-6.931-12.472-4.5334-13.579-2.2002-31.397 6.6737-50.953 7.5979-16.742 19.322-33.347 39.776-56.344 3.013-3.384 11.986-13.281 12.043-13.281 0.0216 0-0.46749 0.84706-1.083 1.8786-5.3183 8.9082-9.8689 19.401-12.348 28.485-3.9823 14.576-3.502 27.085 1.4068 36.784 3.3862 6.6822 9.1913 12.47 15.719 15.67 11.428 5.5993 28.159 6.0625 48.592 1.3554 1.4068-0.32599 71.116-18.831 154.91-41.123 83.794-22.294 152.36-40.52 152.37-40.505 0.0237 0.0193-194.68 83.333-295.75 126.56-16.007 6.8431-20.287 8.5715-27.812 11.214-19.236 6.7551-36.467 9.9783-50.396 9.4251z"/>
              </svg>
           </div>
        </div>
      </section>
    </div>
  );
}