You are given a task to integrate an existing React component in the codebase

~~~/README.md
# Hyperspeed Background

A high-performance warp speed/hyperspeed background effect built with Three.js and React. Features dynamic distortions, customizable color palettes, and interactive speed-up mechanics.

## Features
- **6 Built-in Presets**: From "Turbulent" to "Deep" space distortions.
- **Interactive Speed**: Press and hold interaction to trigger warp speed.
- **Three.js Powered**: Efficient WebGL rendering for smooth 60fps performance.
- **Fully Customizable**: Control road width, island size, lane count, and complex color schemes.

## Dependencies
- `three`: ^0.160.0
- `lucide-react`: latest
- `framer-motion`: latest

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `effectOptions` | `HyperspeedOptions` | `DEFAULT_OPTIONS` | Configuration object for the Three.js effect |
| `className` | `string` | `""` | Additional CSS classes for the container |

### HyperspeedOptions
```typescript
interface HyperspeedOptions {
  onSpeedUp?: () => void;
  onSlowDown?: () => void;
  distortion?: 'turbulentDistortion' | 'mountainDistortion' | 'xyDistortion' | 'LongRaceDistortion' | 'deepDistortion' | 'none';
  length?: number;
  roadWidth?: number;
  islandWidth?: number;
  lanesPerRoad?: number;
  fov?: number;
  fovSpeedUp?: number;
  speedUp?: number;
  colors?: {
    roadColor: number;
    islandColor: number;
    background: number;
    shoulderLines: number;
    brokenLines: number;
    leftCars: number[];
    rightCars: number[];
    sticks: number;
  };
  // ... and more geometric parameters
}
```

## Usage
```tsx
import { Hyperspeed, hyperspeedPresets } from '@/sd-components/a56948cd-644e-4457-bfed-94a964ee5903';

function Example() {
  return (
    <div className="w-full h-screen">
      <Hyperspeed effectOptions={hyperspeedPresets.one} />
    </div>
  );
}
```
~~~

~~~/src/App.tsx
import React, { useState } from 'react';
import { Hyperspeed, hyperspeedPresets } from './Component';
import { RefreshCw, Play, FastForward, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * App Demo for Hyperspeed Background
 * Shows the background with a minimalist interface to switch presets
 * and demonstrate the speed-up interaction.
 */
export default function App() {
  const [presetKey, setPresetKey] = useState<keyof typeof hyperspeedPresets>('one');
  const [isSpeeding, setIsSpeeding] = useState(false);

  return (
    <div className="relative w-full h-screen bg-[#1A1A1B] text-[#F9F9F9] font-sans overflow-hidden">
      {/* The Hyperspeed Background */}
      <Hyperspeed 
        effectOptions={{
          ...hyperspeedPresets[presetKey],
          onSpeedUp: () => setIsSpeeding(true),
          onSlowDown: () => setIsSpeeding(false),
        }} 
      />

      {/* Minimalist Overlay UI */}
      <div className="absolute inset-0 flex flex-col items-center justify-between p-12 pointer-events-none">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-2 uppercase italic font-black">
            Hyperspeed
          </h1>
          <p className="text-sm text-[#F9F9F9]/50 tracking-[0.2em] uppercase">
            Warp Speed Simulation • {presetKey.toUpperCase()}
          </p>
        </motion.div>

        {/* Center Hint */}
        <AnimatePresence mode="wait">
          {!isSpeeding && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="flex flex-col items-center gap-4 bg-black/20 backdrop-blur-sm px-8 py-6 rounded-3xl border border-white/5 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-pulse">
                <Play size={20} fill="white" className="ml-1" />
              </div>
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
                Press & Hold to Speed Up
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Preset Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full max-w-2xl pointer-events-auto"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {(Object.keys(hyperspeedPresets) as Array<keyof typeof hyperspeedPresets>).map((key) => (
              <button
                key={key}
                onClick={() => setPresetKey(key)}
                className={`
                  px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300
                  ${presetKey === key 
                    ? 'bg-[#F9F9F9] text-black scale-105' 
                    : 'bg-black/40 text-white/60 hover:bg-black/60 border border-white/10'}
                `}
              >
                {key}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Corner Details */}
      <div className="absolute top-8 left-8 text-[10px] text-white/20 font-mono tracking-tighter pointer-events-none hidden md:block">
        CORE_SYSTEM_01 // WARP_DRIVE_ACTIVE<br />
        SECTOR: 7G-ALPHA-V<br />
        STABILITY: 98.4%
      </div>

      <div className="absolute bottom-8 right-8 flex items-center gap-3 text-white/40 pointer-events-auto">
         <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
            <RefreshCw size={16} />
         </button>
         <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
            <Info size={16} />
         </button>
      </div>

      {/* Minimalist Reply Button as per prompt */}
      <div className="absolute top-8 right-8 pointer-events-auto">
        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all border border-white/10">
          Reply
        </button>
      </div>
    </div>
  );
}
~~~

~~~/package.json
{
  "name": "hyperspeed-background",
  "description": "High-speed warp background effect using Three.js",
  "dependencies": {
    "three": "^0.160.0",
    "lucide-react": "latest",
    "framer-motion": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest"
  }
}
~~~

~~~/src/Component.tsx
import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import * as THREE from 'three';

/**
 * Hyperspeed Background Component
 * 
 * A high-performance Three.js based warp speed effect.
 * Features:
 * - Customizable distortions (turbulent, mountain, xy, LongRace, deep)
 * - Interactive speed-up/slow-down
 * - Multiple presets for color and geometry
 * - Responsive container filling
 */

export interface HyperspeedOptions {
  onSpeedUp?: () => void;
  onSlowDown?: () => void;
  distortion?: 'turbulentDistortion' | 'mountainDistortion' | 'xyDistortion' | 'LongRaceDistortion' | 'deepDistortion' | 'none';
  length?: number;
  roadWidth?: number;
  islandWidth?: number;
  lanesPerRoad?: number;
  fov?: number;
  fovSpeedUp?: number;
  speedUp?: number;
  carLightsFade?: number;
  totalSideLightSticks?: number;
  lightPairsPerRoadWay?: number;
  shoulderLinesWidthPercentage?: number;
  brokenLinesWidthPercentage?: number;
  brokenLinesLengthPercentage?: number;
  lightStickWidth?: [number, number];
  lightStickHeight?: [number, number];
  movingAwaySpeed?: [number, number];
  movingCloserSpeed?: [number, number];
  carLightsLength?: [number, number];
  carLightsRadius?: [number, number];
  carWidthPercentage?: [number, number];
  carShiftX?: [number, number];
  carFloorSeparation?: [number, number];
  colors?: {
    roadColor: number;
    islandColor: number;
    background: number;
    shoulderLines: number;
    brokenLines: number;
    leftCars: number[];
    rightCars: number[];
    sticks: number;
  };
}

export interface HyperspeedProps {
  effectOptions?: HyperspeedOptions;
  className?: string;
}

const DEFAULT_OPTIONS: HyperspeedOptions = {
  onSpeedUp: () => { },
  onSlowDown: () => { },
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xFFFFFF,
    brokenLines: 0xFFFFFF,
    leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
    rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
    sticks: 0x03B3C3,
  }
};

// Shaders for the effect
const fragmentShader = `
  varying vec3 vColor;
  void main() {
    gl_FragColor = vec4(vColor, 1.0);
  }
`;

const vertexShader = `
  attribute vec3 color;
  varying vec3 vColor;
  void main() {
    vColor = color;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const Hyperspeed = forwardRef<HTMLDivElement, HyperspeedProps>(({ effectOptions, className }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<any>(null);

  useImperativeHandle(ref, () => containerRef.current!);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const options = { ...DEFAULT_OPTIONS, ...effectOptions };
    const colors = { ...DEFAULT_OPTIONS.colors, ...effectOptions?.colors };
    
    // Internal state for animation
    const state = {
      speed: 1,
      targetSpeed: 1,
      fov: options.fov || 90,
      targetFov: options.fov || 90,
    };

    // Three.js setup
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: true,
      alpha: true 
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(colors.background);

    const camera = new THREE.PerspectiveCamera(state.fov, 1, 0.1, 10000);
    camera.position.z = 10;
    camera.position.y = 7;

    const resize = () => {
      const width = containerRef.current!.clientWidth;
      const height = containerRef.current!.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', resize);
    resize();

    // Create Geometry & Materials
    // In a real implementation, we'd add complex road/car lights here.
    // For this demonstration, we'll create a stylized warp tunnel.
    
    const count = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3 * 2);
    const lineColors = new Float32Array(count * 3 * 2);

    for (let i = 0; i < count; i++) {
      const z = Math.random() * options.length!;
      const r = options.roadWidth! + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      
      const x = Math.cos(theta) * r;
      const y = Math.sin(theta) * r;

      const idx = i * 6;
      positions[idx] = x;
      positions[idx + 1] = y;
      positions[idx + 2] = -z;
      
      positions[idx + 3] = x;
      positions[idx + 4] = y;
      positions[idx + 5] = -(z + 10 + Math.random() * 50);

      const colorSet = i % 2 === 0 ? colors.leftCars : colors.rightCars;
      const chosenColor = new THREE.Color(colorSet[Math.floor(Math.random() * colorSet.length)]);
      
      lineColors[idx] = chosenColor.r;
      lineColors[idx + 1] = chosenColor.g;
      lineColors[idx + 2] = chosenColor.b;
      
      lineColors[idx + 3] = chosenColor.r;
      lineColors[idx + 4] = chosenColor.g;
      lineColors[idx + 5] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const material = new THREE.LineBasicMaterial({ 
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const lines = new THREE.LineSegments(geometry, material);
    scene.add(lines);

    // Distortion logic (simplified for React implementation)
    const applyDistortion = (time: number) => {
      const pos = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const idx = i * 6;
        // Moving lines
        pos[idx + 2] += state.speed * 5;
        pos[idx + 5] += state.speed * 5;

        // Reset if passed
        if (pos[idx + 2] > 50) {
          const newZ = options.length!;
          const length = 10 + Math.random() * 50;
          pos[idx + 2] = -newZ;
          pos[idx + 5] = -(newZ + length);
        }

        // Apply distortion based on type
        if (options.distortion === 'turbulentDistortion') {
          const offset = Math.sin(time * 0.001 + pos[idx + 2] * 0.01) * 2;
          pos[idx] += offset * 0.01;
          pos[idx + 3] += offset * 0.01;
        } else if (options.distortion === 'mountainDistortion') {
            const offset = Math.cos(pos[idx + 2] * 0.005) * 5;
            pos[idx + 1] += offset * 0.01;
            pos[idx + 4] += offset * 0.01;
        }
      }
      geometry.attributes.position.needsUpdate = true;
    };

    // Animation Loop
    let animationId: number;
    const animate = (time: number) => {
      animationId = requestAnimationFrame(animate);

      // Speed interpolation
      state.speed += (state.targetSpeed - state.speed) * 0.05;
      state.fov += (state.targetFov - state.fov) * 0.05;
      
      camera.fov = state.fov;
      camera.updateProjectionMatrix();

      applyDistortion(time);
      
      renderer.render(scene, camera);
    };

    animate(0);

    // Interaction handlers
    const handleMouseDown = () => {
      state.targetSpeed = options.speedUp!;
      state.targetFov = options.fovSpeedUp!;
      options.onSpeedUp?.();
    };

    const handleMouseUp = () => {
      state.targetSpeed = 1;
      state.targetFov = options.fov!;
      options.onSlowDown?.();
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleMouseDown);
    window.addEventListener('touchend', handleMouseUp);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('touchend', handleMouseUp);
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [effectOptions]);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-full overflow-hidden ${className || ''}`}
    >
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full"
      />
    </div>
  );
});

export default Hyperspeed;

export const hyperspeedPresets = {
  one: {
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
      rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
      sticks: 0x03b3c3
    }
  },
  two: {
    distortion: 'mountainDistortion',
    length: 400,
    roadWidth: 9,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0xff102a, 0xeb383e, 0xff102a],
      rightCars: [0xdadafa, 0xbebae3, 0x8f97e4],
      sticks: 0xdadafa
    }
  },
  three: {
    distortion: 'xyDistortion',
    length: 400,
    roadWidth: 9,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 3,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0x7d0d1b, 0xa90519, 0xff102a],
      rightCars: [0xf1eece, 0xe6e2b1, 0xdfd98a],
      sticks: 0xf1eece
    }
  },
  four: {
    distortion: 'LongRaceDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 5,
    lanesPerRoad: 2,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0xff5f73, 0xe74d60, 0xff102a],
      rightCars: [0xa4e3e6, 0x80d1d4, 0x53c2c6],
      sticks: 0xa4e3e6
    }
  },
  five: {
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 9,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0xdc5b20, 0xdca320, 0xdc2020],
      rightCars: [0x334bf7, 0xe5e6ed, 0xbfc6f3],
      sticks: 0xc5e8eb
    }
  },
  six: {
    distortion: 'deepDistortion',
    length: 400,
    roadWidth: 18,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0xff322f, 0xa33010, 0xa81508],
      rightCars: [0xfdfdf0, 0xf3dea0, 0xe2bb88],
      sticks: 0xfdfdf0
    }
  }
};
~~~

Implementation Guidelines

1. Analyze the component structure, styling, animation implementations
2. Review the component's arguments and state
3. Think through what is the best place to adopt this component/style into the design we are doing
4. Then adopt the component/design to our current system

Help me integrate this into my design