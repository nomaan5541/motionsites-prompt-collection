You are given a task to integrate an existing React component in the codebase

~~~/README.md
# RollingCounter

A premium, high-performance rolling counter component with smooth mechanical-style transitions. Features automatic digit detection, customizable font sizes, and sleek gradient overlays for a professional 'odometer' effect.

## Dependencies
- `framer-motion`: `^11.0.0`
- `lucide-react`: `latest` (for demo icons)

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | - | The numeric value to display. |
| `fontSize` | `number` | `100` | Font size in pixels. |
| `padding` | `number` | `0` | Vertical padding inside each digit container. |
| `places` | `PlaceValue[]` | - | Custom array of place values (e.g., `[100, 10, 1, '.', 0.1]`). |
| `gap` | `number` | `8` | Gap between digits. |
| `borderRadius` | `number` | `4` | Border radius of the counter container. |
| `horizontalPadding` | `number` | `8` | Horizontal padding of the counter container. |
| `textColor` | `string` | `'inherit'` | Text color. |
| `fontWeight` | `CSSProperties['fontWeight']` | `'inherit'` | Font weight. |
| `gradientHeight` | `number` | `16` | Height of the gradient overlay. |
| `gradientFrom` | `string` | `'hsl(var(--background))'` | Start color of the gradient. |

## Usage
```tsx
import { RollingCounter } from '@/sd-components/7d2b2a3f-6411-4777-94ce-a18ef1ceca98';

export default function MyComponent() {
  return (
    <RollingCounter 
      value={5432.1} 
      fontSize={64}
      textColor="#1A1A1B"
      gradientFrom="#F9F9F9"
    />
  );
}
```
~~~

~~~/src/App.tsx
/**
 * Demo for RollingCounter Component
 * 
 * Shows a minimalist showcase of the rolling counter effect.
 * The counter value increments automatically to demonstrate the motion.
 */

import React, { useState, useEffect } from 'react';
import { RollingCounter } from './Component';
import { RotateCcw } from 'lucide-react';

export default function App() {
  const [value, setValue] = useState(1234.5);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(v => parseFloat((v + 1.1).toFixed(1)));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const resetValue = () => setValue(1234.5);

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col items-center justify-center p-20">
      {/* Title as per design guidelines */}
      <h1 className="mb-12 text-sm uppercase tracking-widest text-muted-foreground font-medium">
        Rolling Counter
      </h1>

      {/* Main Showcase Container */}
      <div className="bg-white p-20 rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.05)] flex flex-col items-center gap-12">
        <RollingCounter 
          value={value} 
          fontSize={120}
          textColor="hsl(var(--foreground))"
          fontWeight={600}
          gradientFrom="white"
          gradientHeight={30}
          gap={4}
        />

        {/* Reply/Action Button as per guidelines */}
        <button 
          onClick={resetValue}
          className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity font-medium text-sm"
        >
          <RotateCcw className="w-4 h-4" />
          Reset Counter
        </button>
      </div>

      {/* Subtitle / Description */}
      <p className="mt-12 text-muted-foreground text-center max-w-md text-sm leading-relaxed">
        A precision mechanical-style animation using Framer Motion 
        with automatic place value detection and smooth transitions.
      </p>
    </div>
  );
}
~~~

~~~/package.json
{
  "name": "rolling-counter",
  "description": "A premium mechanical rolling counter component with smooth Framer Motion animations.",
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "latest",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
~~~

~~~/src/Component.tsx
/**
 * RollingCounter Component
 * 
 * A high-performance, mechanical-style rolling counter using Framer Motion.
 * It features smooth digit transitions, automatic place value detection,
 * and customizable styling including gradient overlays for a polished look.
 */

import { MotionValue, motion, useSpring, useTransform } from 'framer-motion';
import React, { useEffect } from 'react';

type PlaceValue = number | '.';

interface NumberProps {
  mv: MotionValue<number>;
  number: number;
  height: number;
}

function Number({ mv, number, height }: NumberProps) {
  const y = useTransform(mv, latest => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return <motion.span style={{ ...baseStyle, y }}>{number}</motion.span>;
}

interface DigitProps {
  place: PlaceValue;
  value: number;
  height: number;
  digitStyle?: React.CSSProperties;
}

function Digit({ place, value, height, digitStyle }: DigitProps) {
  // Decimal point digit
  if (place === '.') {
    return (
      <span
        className="relative inline-flex items-center justify-center"
        style={{ height, width: 'fit-content', ...digitStyle }}
      >
        .
      </span>
    );
  }

  // Numeric digit
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace, {
    damping: 20,
    stiffness: 100,
    mass: 1
  });

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  const defaultStyle: React.CSSProperties = {
    height,
    position: 'relative',
    width: '1ch',
    fontVariantNumeric: 'tabular-nums'
  };

  return (
    <span className="relative inline-flex overflow-hidden" style={{ ...defaultStyle, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </span>
  );
}

export interface RollingCounterProps {
  /** The numeric value to display */
  value: number;
  /** Font size in pixels (default: 100) */
  fontSize?: number;
  /** Vertical padding inside each digit container (default: 0) */
  padding?: number;
  /** 
   * Custom array of place values (e.g., [100, 10, 1, '.', 0.1]). 
   * If omitted, it's automatically detected from value.
   */
  places?: PlaceValue[];
  /** Gap between digits (default: 8) */
  gap?: number;
  /** Border radius of the counter container (default: 4) */
  borderRadius?: number;
  /** Horizontal padding of the counter container (default: 8) */
  horizontalPadding?: number;
  /** Text color (default: 'inherit') */
  textColor?: string;
  /** Font weight (default: 'inherit') */
  fontWeight?: React.CSSProperties['fontWeight'];
  /** Style object for the outer container */
  containerStyle?: React.CSSProperties;
  /** Style object for the inner counter wrapper */
  counterStyle?: React.CSSProperties;
  /** Style object for each individual digit span */
  digitStyle?: React.CSSProperties;
  /** Height of the gradient overlay (default: 16) */
  gradientHeight?: number;
  /** Start color of the gradient (default: 'black') */
  gradientFrom?: string;
  /** End color of the gradient (default: 'transparent') */
  gradientTo?: string;
  /** Custom style for the top gradient */
  topGradientStyle?: React.CSSProperties;
  /** Custom style for the bottom gradient */
  bottomGradientStyle?: React.CSSProperties;
}

/**
 * A reusable rolling counter component with smooth mechanical motion.
 */
export function RollingCounter({
  value,
  fontSize = 100,
  padding = 0,
  places,
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = 'inherit',
  fontWeight = 'inherit',
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = 'hsl(var(--background))',
  gradientTo = 'transparent',
  topGradientStyle,
  bottomGradientStyle
}: RollingCounterProps) {
  const height = fontSize + padding;

  // Automatic place detection if none provided
  const derivedPlaces = places || [...value.toString()].map((ch, i, a) => {
    if (ch === '.') return '.';
    const dotIndex = a.indexOf('.');
    const isInteger = dotIndex === -1;
    const exponent = isInteger ? a.length - i - 1 : i < dotIndex ? dotIndex - i - 1 : -(i - dotIndex);
    return 10 ** exponent;
  });

  const defaultContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block'
  };

  const defaultCounterStyle: React.CSSProperties = {
    fontSize,
    display: 'flex',
    gap,
    overflow: 'hidden',
    borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    lineHeight: 1,
    color: textColor,
    fontWeight
  };

  const gradientContainerStyle: React.CSSProperties = {
    pointerEvents: 'none',
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const defaultTopGradientStyle: React.CSSProperties = {
    height: gradientHeight,
    background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
    zIndex: 10
  };

  const defaultBottomGradientStyle: React.CSSProperties = {
    height: gradientHeight,
    background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
    zIndex: 10
  };

  return (
    <span style={{ ...defaultContainerStyle, ...containerStyle }}>
      <span style={{ ...defaultCounterStyle, ...counterStyle }}>
        {derivedPlaces.map((place, idx) => (
          <Digit 
            key={`${place}-${idx}`} 
            place={place} 
            value={value} 
            height={height} 
            digitStyle={digitStyle} 
          />
        ))}
      </span>
      <span style={gradientContainerStyle}>
        <span style={topGradientStyle ?? defaultTopGradientStyle} />
        <span style={bottomGradientStyle ?? defaultBottomGradientStyle} />
      </span>
    </span>
  );
}

export default RollingCounter;
~~~

Implementation Guidelines

1. Analyze the component structure, styling, animation implementations
2. Review the component's arguments and state
3. Think through what is the best place to adopt this component/style into the design we are doing
4. Then adopt the component/design to our current system

Help me integrate this into my design