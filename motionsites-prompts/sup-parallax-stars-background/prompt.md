This is a reference implementation of a parallax stars background

~~~/README.md
# Parallax Stars Background

A mesmerizing space-themed background component with animated parallax pixel stars and a radial gradient atmosphere.

## Features
- **Pure CSS/JS Animation**: Uses efficient `box-shadow` rendering for thousands of particles.
- **Parallax Effect**: Three layers of stars moving at different speeds to create depth.
- **Radial Gradient Atmosphere**: Creates a deep space feel.
- **Customizable**: Adjustable speed and title text.
- **Responsive**: Adapts to screen size.

## Usage

```tsx
import { ParallaxStarsBackground } from '@/sd-components/a17695b3-944f-4e4b-9d72-b0cfd61b9bb8';

function App() {
  return (
    <ParallaxStarsBackground 
      title="MY AWESOME\nSPACE APP" 
      speed={1.5}
    >
      <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-full uppercase tracking-widest text-sm">
        Enter the Void
      </button>
    </ParallaxStarsBackground>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | "PURE CSS\nPARALLAX PIXEL STARS" | Main title text. Use `\n` for line breaks. |
| `children` | `ReactNode` | undefined | Optional content to render below the title. |
| `className` | `string` | "" | Additional classes for the container. |
| `speed` | `number` | 1 | Animation speed multiplier. Higher is faster. |
~~~

~~~/src/App.tsx
import React from 'react';
import { ParallaxStarsBackground } from './Component';

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <ParallaxStarsBackground 
        speed={1}
      />
    </div>
  );
}
~~~

~~~/package.json

{
  "name": "parallax-stars-background",
  "version": "1.0.0",
  "description": "A mesmerizing space-themed background with animated parallax pixel stars and a radial gradient atmosphere.",
  "main": "src/Component.tsx",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.344.0",
    "framer-motion": "^11.0.8",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.1"
  }
}
~~~

~~~/src/Component.tsx
import React, { useMemo } from 'react';

// Types for the component props
export interface ParallaxStarsBackgroundProps {
  /**
   * Title text to display in the center
   * @default "PURE CSS PARALLAX PIXEL STARS"
   */
  title?: string;
  /**
   * Subtitle or additional content
   */
  children?: React.ReactNode;
  /**
   * Class name for the container
   */
  className?: string;
  /**
   * Speed multiplier for the animation
   * @default 1
   */
  speed?: number;
}

// Helper to generate random box shadows
const generateBoxShadows = (n: number) => {
  let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
  for (let i = 2; i <= n; i++) {
    value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
  }
  return value;
};

export function ParallaxStarsBackground({
  title = "PURE CSS\nPARALLAX PIXEL STARS",
  children,
  className = "",
  speed = 1
}: ParallaxStarsBackgroundProps) {
  // Memoize shadows so they don't regenerate on re-renders
  const shadowsSmall = useMemo(() => generateBoxShadows(700), []);
  const shadowsMedium = useMemo(() => generateBoxShadows(200), []);
  const shadowsBig = useMemo(() => generateBoxShadows(100), []);

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-[#090A0F] font-['Lato'] ${className}`}>
      {/* Inline styles for the gradient and animations */}
      <style>{`
        .bg-radial-space {
          background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
        }
        @keyframes animStar {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
        .text-gradient-clip {
          background: linear-gradient(to bottom, white 0%, #38495a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-radial-space z-0" />

      {/* Stars Layer 1 (Small) */}
      <div 
        className="absolute left-0 top-0 w-[1px] h-[1px] bg-transparent z-10 animate-[animStar_50s_linear_infinite]"
        style={{ 
          boxShadow: shadowsSmall,
          animationDuration: `${50 / speed}s`
        }}
      >
        <div 
          className="absolute top-[2000px] w-[1px] h-[1px] bg-transparent"
          style={{ boxShadow: shadowsSmall }}
        />
      </div>

      {/* Stars Layer 2 (Medium) */}
      <div 
        className="absolute left-0 top-0 w-[2px] h-[2px] bg-transparent z-10 animate-[animStar_100s_linear_infinite]"
        style={{ 
          boxShadow: shadowsMedium,
          animationDuration: `${100 / speed}s`
        }}
      >
        <div 
          className="absolute top-[2000px] w-[2px] h-[2px] bg-transparent"
          style={{ boxShadow: shadowsMedium }}
        />
      </div>

      {/* Stars Layer 3 (Big) */}
      <div 
        className="absolute left-0 top-0 w-[3px] h-[3px] bg-transparent z-10 animate-[animStar_150s_linear_infinite]"
        style={{ 
          boxShadow: shadowsBig,
          animationDuration: `${150 / speed}s`
        }}
      >
        <div 
          className="absolute top-[2000px] w-[3px] h-[3px] bg-transparent"
          style={{ boxShadow: shadowsBig }}
        />
      </div>

      {/* Title Content */}
      <div className="absolute top-1/2 left-0 right-0 -mt-[60px] text-center z-20 px-4">
        <h1 className="font-light text-[30px] md:text-[50px] tracking-[10px] text-white leading-tight">
          {title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              <span className={i === 0 ? "text-gradient-clip" : "text-gradient-clip"}>
                {line}
              </span>
              {i < title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}

export default ParallaxStarsBackground;
~~~

Implementation Guidelines

1. Analyze the component structure, styling, animation implementations
2. Review the component's arguments and state
3. Think through what is the best place to adopt this component/style into the design we are doing
4. Then adopt the component/design to our current system

Help me integrate this into my design