You are given a task to integrate an existing React component in the codebase

~~~/README.md
# CardSwapShowcase

An elegant card swapping animation component with depth perception and perspective. Features automated cycling of cards with a premium floating feel, powered by GSAP.

## Dependencies

- `gsap`: ^3.12.5
- `framer-motion`: ^11.11.17
- `lucide-react`: ^0.460.0

## Props

### CardSwapProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number \| string` | `500` | Width of the cards |
| `height` | `number \| string` | `400` | Height of the cards |
| `cardDistance` | `number` | `60` | Horizontal spacing between stacked cards |
| `verticalDistance` | `number` | `70` | Vertical spacing between stacked cards |
| `delay` | `number` | `5000` | Delay between swaps in milliseconds |
| `pauseOnHover` | `boolean` | `false` | Pause the animation on mouse enter |
| `skewAmount` | `number` | `6` | Initial skew applied to cards for depth |
| `easing` | `'linear' \| 'elastic'` | `'elastic'` | Animation easing style |
| `onCardClick` | `(idx: number) => void` | - | Callback when a card is clicked |
| `children` | `ReactNode` | - | Card elements to display |

### CardProps

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Description |
|------|------|-------------|
| `customClass` | `string` | Additional CSS classes for the card |

## Usage

```tsx
import { CardSwap, Card } from '@/sd-components/b2f54efd-719a-454b-830b-2bf1c09122cc';

function Example() {
  return (
    <CardSwap delay={4000} cardDistance={40}>
      <Card>
        <h3>Card 1</h3>
        <p>Content</p>
      </Card>
      <Card>
        <h3>Card 2</h3>
        <p>Content</p>
      </Card>
    </CardSwap>
  );
}
```
~~~

~~~/src/App.tsx
/**
 * Demo application for the CardSwap component.
 * Showcases the elegant card swapping animation in a minimalist environment.
 */
import React from 'react';
import CardSwap, { Card } from './Component';

export default function App() {
  const cards = [
    {
      id: 1,
      title: "Perspective Design",
      description: "Crafting interfaces with depth and intention.",
      color: "bg-primary",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Fluid Motion",
      description: "Seamless transitions that feel natural and responsive.",
      color: "bg-accent",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Minimalist Aesthetic",
      description: "Less is more when every detail is refined.",
      color: "bg-secondary",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Atmospheric Loops",
      description: "Creating a sense of calm through continuous motion.",
      color: "bg-muted",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-20 overflow-hidden">
      <div className="flex flex-col items-center gap-12">
        <h1 className="text-2xl font-medium text-foreground tracking-tight opacity-80">
          Card Swap Showcase
        </h1>
        
        <div className="relative w-[500px] h-[400px]">
          <CardSwap
            width={400}
            height={300}
            cardDistance={40}
            verticalDistance={40}
            delay={4000}
            pauseOnHover={true}
            skewAmount={4}
          >
            {cards.map((card) => (
              <Card key={card.id} className="p-0 overflow-hidden group">
                <div className="relative h-full w-full flex flex-col">
                  <div className="flex-1 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-xl font-medium mb-2">{card.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed max-w-[80%]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="mt-8 px-6 py-2 rounded-full border border-border text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-300"
        >
          Reply Animation
        </button>
      </div>
    </div>
  );
}
~~~

~~~/package.json
{
  "name": "card-swap-showcase",
  "description": "An elegant perspective card swapping animation component",
  "dependencies": {
    "gsap": "^3.12.5",
    "framer-motion": "^11.11.17",
    "lucide-react": "^0.460.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4"
  }
}
~~~

~~~/src/Component.tsx
/**
 * CardSwap Component
 * An elegant card swapping animation using GSAP for smooth transitions.
 * Supports automated cycling, perspective depth, and interactive elements.
 */
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef
} from 'react';
import gsap from 'gsap';

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: 'linear' | 'elastic';
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-xl border border-border bg-card shadow-lg [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
  />
));

Card.displayName = 'Card';

type CardRef = RefObject<HTMLDivElement | null>;

interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

export const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children) as ReactElement<CardProps>[], [children]);
  const refs = useMemo<CardRef[]>(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr.length]);
  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>(0);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => {
      if (r.current) {
        placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
      }
    });

    const swap = () => {
      if (order.current.length < 2) return;
      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      if (!elFront) return;

      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        if (!el) return;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );

      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover && container.current) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }

    return () => clearInterval(intervalRef.current);
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, refs]);

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e: React.MouseEvent<HTMLDivElement>) => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          }
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div
      ref={container}
      className="relative perspective-[1200px] transform-gpu"
      style={{ width, height }}
    >
      <div className="absolute inset-0 [transform-style:preserve-3d]">
        {rendered}
      </div>
    </div>
  );
};

export default CardSwap;
~~~

Implementation Guidelines

1. Analyze the component structure, styling, animation implementations
2. Review the component's arguments and state
3. Think through what is the best place to adopt this component/style into the design we are doing
4. Then adopt the component/design to our current system

Help me integrate this into my design