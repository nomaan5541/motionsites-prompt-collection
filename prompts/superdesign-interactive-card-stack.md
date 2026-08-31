You are given a task to integrate an existing React component in the codebase

~~~/README.md
# InteractiveCardStack

A premium, interactive card stack component for React. It features smooth drag physics, customizable animations, and automatic cycling. Perfect for showcases, galleries, or landing page features.

## Features
- 🖱️ **Drag-to-back physics**: Fluid interactions with Framer Motion.
- 📱 **Mobile Optimized**: Custom handling for touch devices.
- 🔄 **Autoplay**: Optional automatic card cycling with pause-on-hover.
- 🎨 **Fully Customizable**: Control rotation, sensitivity, and spring physics.
- 🌗 **Theme Aware**: Works seamlessly with light and dark modes.

## Dependencies
- `framer-motion`: ^11.0.0
- `lucide-react`: ^0.454.0

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cards` | `React.ReactNode[]` | `[]` | Array of React elements to display as cards. |
| `randomRotation` | `boolean` | `false` | Apply slight random rotations to cards for a organic feel. |
| `sensitivity` | `number` | `180` | Distance in pixels a card must be dragged to trigger send-to-back. |
| `sendToBackOnClick` | `boolean` | `false` | Allow clicking a card to send it to the back. |
| `autoplay` | `boolean` | `false` | Enable automatic cycling of cards. |
| `autoplayDelay` | `number` | `3000` | Delay in ms between automatic transitions. |
| `pauseOnHover` | `boolean` | `true` | Pause autoplay when user hovers over the stack. |
| `animationConfig` | `object` | `{ stiffness: 260, damping: 20 }` | Framer Motion spring configuration. |
| `mobileClickOnly` | `boolean` | `false` | Disable dragging on mobile; cards only cycle via click. |

## Usage

```tsx
import { InteractiveCardStack } from '@/sd-components/f7c18bb8-fe7d-4435-b722-c543df486128';

function MyGallery() {
  const items = [
    <img src="/img1.jpg" className="w-full h-full object-cover" />,
    <img src="/img2.jpg" className="w-full h-full object-cover" />,
    <div className="bg-primary text-white p-8">Custom Content</div>
  ];

  return (
    <div className="w-80 h-[450px]">
      <InteractiveCardStack 
        cards={items} 
        randomRotation={true}
        sendToBackOnClick={true}
      />
    </div>
  );
}
```
~~~

~~~/src/App.tsx
import React, { useState } from 'react';
import { InteractiveCardStack } from './Component';
import { RefreshCcw } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
];

export default function App() {
  const [key, setKey] = useState(0);

  const cardItems = IMAGES.map((src, i) => (
    <div key={i} className="w-full h-full relative group">
      <img 
        src={src} 
        alt={`Showcase ${i + 1}`} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  ));

  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#1A1A1B] flex flex-col items-center justify-center p-20">
      {/* Title as requested in style guide */}
      <h2 className="text-xl font-medium mb-12 text-[#1A1A1B] dark:text-[#F9F9F9] tracking-tight">
        Interactive Card Stack
      </h2>

      <div className="relative group">
        {/* Subtle borderless container with soft shadow */}
        <div className="w-[320px] h-[420px] rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.08)] bg-transparent">
          <InteractiveCardStack 
            key={key}
            cards={cardItems}
            randomRotation={true}
            sendToBackOnClick={true}
            autoplay={false}
            pauseOnHover={true}
          />
        </div>

        {/* Reply/Reset button as requested */}
        <button 
          onClick={() => setKey(prev => prev + 1)}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 p-3 bg-white dark:bg-zinc-800 rounded-full shadow-lg border border-border/50 hover:scale-110 active:scale-95 transition-all duration-200 group/btn"
          aria-label="Reset Animation"
        >
          <RefreshCcw className="w-5 h-5 text-primary group-hover/btn:rotate-180 transition-transform duration-500" />
        </button>
      </div>

      <p className="mt-32 text-sm text-muted-foreground font-normal opacity-50">
        Drag or click the top card to cycle
      </p>
    </div>
  );
}
~~~

~~~/package.json
{
  "name": "@seedance/interactive-card-stack",
  "description": "Premium interactive card stack with drag physics and autoplay",
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.454.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4"
  }
}
~~~

~~~/src/Component.tsx
/**
 * InteractiveCardStack Component
 * A premium, smooth, and interactive card stack with drag-to-back physics.
 * Supports random rotation, autoplay, and mobile interactions.
 */

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence, type PanInfo } from 'framer-motion';

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
  disableDrag?: boolean;
}

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return (
      <motion.div className="absolute inset-0" style={{ x: 0, y: 0 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export interface InteractiveCardStackProps {
  /** Array of card contents */
  cards?: React.ReactNode[];
  /** Enable random rotation for each card */
  randomRotation?: boolean;
  /** Sensitivity for the drag-to-back action (pixels) */
  sensitivity?: number;
  /** Whether clicking a card sends it to the back */
  sendToBackOnClick?: boolean;
  /** Spring animation configuration */
  animationConfig?: { stiffness: number; damping: number };
  /** Enable automatic cycling of cards */
  autoplay?: boolean;
  /** Delay between cycles in milliseconds */
  autoplayDelay?: number;
  /** Pause autoplay when hovering */
  pauseOnHover?: boolean;
  /** Disable drag on mobile devices and only allow clicks */
  mobileClickOnly?: boolean;
  /** Viewport width breakpoint for mobile detection */
  mobileBreakpoint?: number;
  /** Custom class for the container */
  className?: string;
}

export function InteractiveCardStack({
  cards = [],
  randomRotation = false,
  sensitivity = 180,
  sendToBackOnClick = false,
  animationConfig = { stiffness: 260, damping: 20 },
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = true,
  mobileClickOnly = false,
  mobileBreakpoint = 768,
  className = ""
}: InteractiveCardStackProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Initialize stack with IDs to track items correctly
  const [stack, setStack] = useState<{ id: string; content: React.ReactNode; randomRot: number }[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  useEffect(() => {
    if (cards.length > 0) {
      setStack(cards.map((content, index) => ({
        id: `card-${index}-${Date.now()}`, // Ensure unique IDs even if content is similar
        content,
        randomRot: randomRotation ? Math.random() * 10 - 5 : 0
      })));
    }
  }, [cards, randomRotation]);

  const sendToBack = (id: string) => {
    setStack(prev => {
      const index = prev.findIndex(card => card.id === id);
      if (index === -1) return prev;
      
      const newStack = [...prev];
      const [card] = newStack.splice(index, 1);
      
      // Update random rotation for the card when it goes to back
      const updatedCard = {
        ...card,
        randomRot: randomRotation ? Math.random() * 10 - 5 : 0
      };
      
      newStack.unshift(updatedCard);
      return newStack;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  if (stack.length === 0) return null;

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{ perspective: 1000 }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <AnimatePresence>
        {stack.map((card, index) => {
          // index 0 is bottom, stack.length - 1 is top
          const isTop = index === stack.length - 1;
          const depth = stack.length - 1 - index;
          
          return (
            <CardRotate
              key={card.id}
              onSendToBack={() => sendToBack(card.id)}
              sensitivity={sensitivity}
              disableDrag={!isTop || shouldDisableDrag}
            >
              <motion.div
                className="rounded-2xl overflow-hidden w-full h-full bg-card border border-border/50 shadow-sm"
                onClick={() => isTop && shouldEnableClick && sendToBack(card.id)}
                style={{
                  zIndex: index,
                }}
                animate={{
                  rotateZ: depth * -2 + card.randomRot,
                  scale: 1 - depth * 0.04,
                  y: depth * -8,
                  opacity: 1 - depth * 0.15,
                  transformOrigin: 'center center'
                }}
                transition={{
                  type: 'spring',
                  stiffness: animationConfig.stiffness,
                  damping: animationConfig.damping
                }}
              >
                {card.content}
              </motion.div>
            </CardRotate>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default InteractiveCardStack;
~~~

Implementation Guidelines

1. Analyze the component structure, styling, animation implementations
2. Review the component's arguments and state
3. Think through what is the best place to adopt this component/style into the design we are doing
4. Then adopt the component/design to our current system

Help me integrate this into my design