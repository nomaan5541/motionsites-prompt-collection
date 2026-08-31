You are given a task to integrate an existing React component in the codebase

~~~/README.md
# PillNav Component

A premium, minimalist pill-shaped navigation component built with React, GSAP, and Tailwind CSS. It features distinctive hover animations where a background circle "rises" to fill the pill, and a rotating logo interaction.

## Features

- **GSAP Animations**: Fluid, high-performance animations for hover states and entrance.
- **Responsive**: Fully functional mobile menu with smooth transitions.
- **Smart Link Handling**: Automatically detects and handles both internal (React Router) and external links.
- **Customizable**: Control colors, easing, and load animations via props.
- **Aesthetic**: Minimalist design with high attention to detail.

## Dependencies

- `gsap`: ^3.12.0
- `react-router-dom`: ^6.28.0
- `lucide-react`: latest
- `framer-motion`: latest (optional for additional effects)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `string` | - | **Required**. URL/path to the logo image. |
| `items` | `PillNavItem[]` | - | **Required**. Array of navigation items `{ label, href, ariaLabel? }`. |
| `activeHref` | `string` | - | The href of the current active page. |
| `logoAlt` | `string` | `"Logo"` | Alt text for the logo. |
| `baseColor` | `string` | `hsl(var(--primary))` | Background color of the main nav containers. |
| `pillColor` | `string` | `hsl(var(--background))` | Default background color of individual pills. |
| `pillTextColor` | `string` | `hsl(var(--foreground))` | Default text color of individual pills. |
| `hoveredPillTextColor`| `string` | `hsl(var(--primary-foreground))` | Text color when a pill is hovered. |
| `ease` | `string` | `"power3.out"` | GSAP easing function for animations. |
| `initialLoadAnimation`| `boolean`| `true` | Whether to play entrance animation on mount. |

## Usage Example

```tsx
import { PillNav } from '@/sd-components/386926b7-61c2-45ee-b7bf-f86e750ca9ca';

const MyNav = () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' }
  ];

  return (
    <PillNav 
      logo="/logo.svg"
      items={items}
      activeHref="/"
    />
  );
};
```
~~~

~~~/src/App.tsx
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { PillNav } from './Component';
import { Rocket } from 'lucide-react';

export default function App() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Collection', href: '/collection' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <HashRouter>
      <div className="min-h-screen bg-[#F9F9F9] flex flex-col items-center justify-center p-20">
        <div className="w-full max-w-2xl bg-white/50 backdrop-blur-sm rounded-[40px] shadow-2xl shadow-black/5 p-12 flex items-center justify-center relative overflow-visible">
          <PillNav 
            logo={<Rocket size={24} />}
            items={navItems}
            activeHref="/"
            baseColor="#1A1A1B"
            pillColor="#F9F9F9"
            hoveredPillTextColor="#FFFFFF"
            pillTextColor="#1A1A1B"
          />
        </div>
        
        <div className="mt-12 text-center">
          <h1 className="text-2xl font-medium text-slate-900 tracking-tight">Pill Navigation</h1>
          <p className="text-slate-500 mt-2 max-w-md mx-auto text-balance">
            A premium navigation component with GSAP animations. Hover over the links to see the rising background effect.
          </p>
        </div>

        {/* Reply Button (as requested by system prompt) */}
        <button 
          onClick={() => window.location.reload()}
          className="fixed bottom-8 right-8 px-6 py-3 bg-slate-900 text-white rounded-full font-medium shadow-xl hover:scale-105 active:scale-95 transition-transform flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          Replay Animation
        </button>
      </div>
    </HashRouter>
  );
}
~~~

~~~/package.json
{
  "name": "pill-nav-showcase",
  "description": "A premium pill-shaped navigation with GSAP animations",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "gsap": "^3.12.0",
    "react-router-dom": "^6.28.0",
    "lucide-react": "latest",
    "framer-motion": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest"
  }
}
~~~

~~~/src/Component.tsx
/**
 * PillNav - A premium, GSAP-powered navigation component.
 * Features:
 * - Rising circle background animation on hover
 * - Rotating logo animation
 * - Responsive mobile menu with GSAP transitions
 * - Support for both React Router Link and standard anchor tags
 * - Customizable colors and easing
 */

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Menu, X, Rocket } from 'lucide-react';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  /** Logo icon component or source URL (image or SVG) */
  logo: React.ReactNode | string;
  /** Alt text for the logo */
  logoAlt?: string;
  /** Navigation items array */
  items: PillNavItem[];
  /** The current active href for highlighting */
  activeHref?: string;
  /** Optional extra class names for the nav container */
  className?: string;
  /** GSAP easing function */
  ease?: string;
  /** The base background color of the nav pills and logo container */
  baseColor?: string;
  /** The color of the pill when not hovered */
  pillColor?: string;
  /** Text color when the pill is hovered */
  hoveredPillTextColor?: string;
  /** Default text color for the pills */
  pillTextColor?: string;
  /** Callback for mobile menu toggle */
  onMobileMenuClick?: () => void;
  /** Whether to play an entrance animation on mount */
  initialLoadAnimation?: boolean;
}

export const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.out',
  baseColor = 'hsl(var(--primary))',
  pillColor = 'hsl(var(--background))',
  hoveredPillTextColor = 'hsl(var(--primary-foreground))',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? 'hsl(var(--foreground))';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | HTMLDivElement | null>(null);

  const renderLogo = () => {
    if (typeof logo === 'string') {
      return (
        <img 
          src={logo} 
          alt={logoAlt} 
          ref={logoImgRef} 
          className="w-8 h-8 object-contain pointer-events-none" 
        />
      );
    }
    return (
      <div ref={logoImgRef} className="flex items-center justify-center">
        {logo}
      </div>
    );
  };

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;
        
        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        
        // Calculate the radius for the expanding circle to cover the pill
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;
        
        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const white = pill.querySelector<HTMLElement>('.pill-label-hover');
        
        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        
        tl.to(circle, { 
          scale: 1.2, 
          xPercent: -50, 
          duration: 0.8, 
          ease, 
          overwrite: 'auto' 
        }, 0);
        
        if (label) {
          tl.to(label, { 
            y: -(h + 8), 
            duration: 0.6, 
            ease, 
            overwrite: 'auto' 
          }, 0);
        }
        
        if (white) {
          gsap.set(white, { y: Math.ceil(h + 20), opacity: 0 });
          tl.to(white, { 
            y: 0, 
            opacity: 1, 
            duration: 0.6, 
            ease, 
            overwrite: 'auto' 
          }, 0);
        }
        
        tlRefs.current[index] = tl;
      });
    };

    layout();
    
    const onResize = () => layout();
    window.addEventListener('resize', onResize);
    
    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    // Initial load animation
    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;
      
      if (logo) {
        gsap.set(logo, { scale: 0, opacity: 0 });
        gsap.to(logo, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)"
        });
      }
      
      if (navItems) {
        const listItems = navItems.querySelectorAll('li');
        gsap.set(listItems, { opacity: 0, x: -20 });
        gsap.to(listItems, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.2
        });
      }
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.4,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
      overwrite: 'auto',
      onComplete: () => gsap.set(img, { rotate: 0 })
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    const menu = mobileMenuRef.current;
    if (menu) {
      if (newState) {
        gsap.set(menu, { display: 'block', opacity: 0, y: -20 });
        gsap.to(menu, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out"
        });
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(menu, { display: 'none' });
          }
        });
      }
    }
    onMobileMenuClick?.();
  };

  const isExternalLink = (href: string) =>
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#');

  const isRouterLink = (href?: string) => href && !isExternalLink(href);

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
    '--nav-h': '48px',
    '--logo-size': '40px',
    '--pill-pad-x': '20px',
    '--pill-gap': '6px'
  } as React.CSSProperties;

  return (
    <div className={`relative z-[1000] w-full max-w-4xl mx-auto ${className}`} style={cssVars}>
      <nav
        className="w-full flex items-center justify-between md:justify-center p-4 gap-4"
        aria-label="Primary"
      >
        {/* Logo Section */}
        <div 
          ref={el => { logoRef.current = el as HTMLDivElement; }}
          onMouseEnter={handleLogoEnter}
          className="flex-shrink-0"
        >
          {isRouterLink(items[0]?.href) ? (
            <Link
              to={items[0].href}
              className="flex items-center justify-center rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
              style={{
                width: 'var(--nav-h)',
                height: 'var(--nav-h)',
                background: 'var(--base)',
                color: 'var(--pill-bg)'
              }}
            >
              {renderLogo()}
            </Link>
          ) : (
            <a
              href={items[0]?.href || '#'}
              className="flex items-center justify-center rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
              style={{
                width: 'var(--nav-h)',
                height: 'var(--nav-h)',
                background: 'var(--base)',
                color: 'var(--pill-bg)'
              }}
            >
              {renderLogo()}
            </a>
          )}
        </div>

        {/* Desktop Menu */}
        <div
          ref={navItemsRef}
          className="hidden md:flex items-center rounded-full px-1.5"
          style={{
            height: 'var(--nav-h)',
            background: 'var(--base)'
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-0 h-full"
            style={{ gap: 'var(--pill-gap)' }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;
              
              const pillStyle: React.CSSProperties = {
                background: 'var(--pill-bg)',
                color: 'var(--pill-text)',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)'
              };

              const PillContent = (
                <>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{
                      background: 'var(--base)',
                      willChange: 'transform'
                    }}
                    aria-hidden="true"
                    ref={el => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-none z-[2] overflow-hidden py-1">
                    <span
                      className="pill-label relative z-[2] inline-block"
                      style={{ willChange: 'transform' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-1 z-[3] inline-block w-full text-center"
                      style={{
                        color: 'var(--hover-text)',
                        willChange: 'transform, opacity'
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1 h-1 rounded-full z-[4]"
                      style={{ background: 'var(--base)' }}
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              const basePillClasses = "relative overflow-hidden inline-flex items-center justify-center h-[calc(var(--nav-h)-12px)] self-center no-underline rounded-full box-border font-medium text-sm uppercase tracking-wider cursor-pointer transition-colors duration-200 hover:z-10";

              return (
                <li key={item.href} role="none" className="flex items-center">
                  {isRouterLink(item.href) ? (
                    <Link
                      role="menuitem"
                      to={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </Link>
                  ) : (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden flex items-center justify-center rounded-full transition-transform active:scale-90"
          style={{
            width: 'var(--nav-h)',
            height: 'var(--nav-h)',
            background: 'var(--base)',
            color: 'var(--pill-bg)'
          }}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl overflow-hidden shadow-2xl z-[999] hidden border border-border/10"
        style={{
          background: 'var(--base)'
        }}
      >
        <ul className="list-none m-0 p-2 flex flex-col gap-1">
          {items.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <li key={item.href}>
                {isRouterLink(item.href) ? (
                  <Link
                    to={item.href}
                    className={`block py-3 px-6 text-sm font-semibold uppercase tracking-widest rounded-xl transition-all ${
                      isActive 
                        ? 'bg-background text-foreground' 
                        : 'text-primary-foreground/70 hover:bg-background/10 hover:text-primary-foreground'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`block py-3 px-6 text-sm font-semibold uppercase tracking-widest rounded-xl transition-all ${
                      isActive 
                        ? 'bg-background text-foreground' 
                        : 'text-primary-foreground/70 hover:bg-background/10 hover:text-primary-foreground'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
~~~

Implementation Guidelines

1. Analyze the component structure, styling, animation implementations
2. Review the component's arguments and state
3. Think through what is the best place to adopt this component/style into the design we are doing
4. Then adopt the component/design to our current system

Help me integrate this into my design