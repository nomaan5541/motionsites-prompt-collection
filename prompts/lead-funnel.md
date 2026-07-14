<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Viktor Oddy - Hero Website</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100..900&family=Fraunces:ital,opsz,wght@1,9..144,100..900&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Inter Tight"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
            serif: ['"Fraunces"', 'Georgia', 'serif'],
          },
        },
      },
    };
  </script>
  <style>
    @keyframes cursor-blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .animate-cursor-blink {
      animation: cursor-blink 1.0s step-end infinite;
    }
    html, body {
      display: grid;
      margin: 0;
      padding: 0;
      overflow: hidden;
      height: 100%;
      width: 100%;
      background: #000000;
      user-select: none;
      touch-action: none;
      font-size: clamp(9px, 0.55vw + 0.65vh + 3px, 16px);
    }
    #root {
      display: grid;
      width: 100%;
      height: 100%;
    }
    .scene, .a3d {
      display: grid;
    }
    .scene {
      overflow: hidden;
      perspective: 35em;
      width: 100vw;
      height: 100vh;
    }
    .a3d {
      place-self: end center;
      margin-bottom: 12em;
      transform-style: preserve-3d;
    }
    .card {
      --w: 24em;
      --h: calc(var(--w) * 1);
      --ba: calc(360deg / var(--n));
      grid-area: 1/ 1;
      width: var(--w);
      height: var(--h);
      object-fit: contain;
      border-radius: 12px;
      overflow: hidden;
      backface-visibility: hidden;
      transition: opacity 0.5s ease, filter 0.5s ease;
      --card-rz: clamp(-20deg, calc(var(--vel, 0) * 1.0deg), 20deg);
      --card-skew-x: clamp(-10deg, calc(var(--vel, 0) * 0.4deg), 10deg);
      --card-z-offset: calc(var(--abs-vel, 0) * -2px);
      --card-scale: calc(1 - var(--abs-vel, 0) * 0.0025);
      transform:
        rotateY(calc(var(--i) * var(--ba)))
        translateZ(calc(var(--z-trans) + var(--card-z-offset)))
        rotateZ(var(--card-rz))
        skewX(var(--card-skew-x))
        scale(var(--card-scale));
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel" data-type="module" data-presets="react">
    import React, { useState, useEffect, useRef, useCallback, useMemo, forwardRef, useImperativeHandle } from "https://esm.sh/react@19.0.0";
    import { createRoot } from "https://esm.sh/react-dom@19.0.0/client";
    import { motion, AnimatePresence, useReducedMotion } from "https://esm.sh/motion@12.23.24/react";

    // ===== KineticTextReveal Component =====
    function splitIntoGraphemes(value) {
      if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
        const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
        return Array.from(segmenter.segment(value), ({ segment }) => segment);
      }
      return Array.from(value);
    }

    function getSegments(text, splitBy) {
      let animatedIndex = 0;
      if (splitBy === "lines") {
        return text.split("\n").map((line) => ({
          value: line,
          animated: line.length > 0,
          index: line.length > 0 ? animatedIndex++ : -1,
        }));
      }
      if (splitBy === "characters") {
        return splitIntoGraphemes(text).map((character) => {
          const animated = !/\s/.test(character);
          return { value: character, animated, index: animated ? animatedIndex++ : -1 };
        });
      }
      return text.split(/(\s+)/).map((part) => {
        const animated = !/^\s+$/.test(part) && part.length > 0;
        return { value: part, animated, index: animated ? animatedIndex++ : -1 };
      });
    }

    function getDelay(index, total, stagger, staggerFrom) {
      if (typeof staggerFrom === "number") return Math.abs(staggerFrom - index) * stagger;
      if (staggerFrom === "end") return (total - 1 - index) * stagger;
      if (staggerFrom === "center") return Math.abs((total - 1) / 2 - index) * stagger;
      if (staggerFrom === "edges") return Math.min(index, total - 1 - index) * stagger;
      if (staggerFrom === "random") {
        const seeded = Math.abs(Math.sin(index * 12.9898) * 43758.5453) % 1;
        return Math.floor(seeded * total) * stagger;
      }
      return index * stagger;
    }

    function getOffset(direction, distance) {
      if (direction === "down") return { x: 0, y: -distance };
      if (direction === "left") return { x: distance, y: 0 };
      if (direction === "right") return { x: -distance, y: 0 };
      return { x: 0, y: distance };
    }

    function cn(...classes) { return classes.filter(Boolean).join(" "); }

    const KineticTextReveal = forwardRef(({
      text, className, segmentClassName, maskClassName,
      splitBy = "words", direction = "up", distance = 20,
      stagger = 0.075, staggerFrom = "start",
      transition = { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
      blur = true, autoPlay = true, delay = 0,
      onRevealStart, onRevealComplete, ...props
    }, ref) => {
      const shouldReduceMotion = useReducedMotion();
      const [run, setRun] = useState(0);
      const [visible, setVisible] = useState(false);
      const segments = useMemo(() => getSegments(text, splitBy), [text, splitBy]);
      const animatedTotal = segments.filter((s) => s.animated).length;

      useImperativeHandle(ref, () => ({
        play: () => { setVisible(false); requestAnimationFrame(() => { setRun((c) => c + 1); setVisible(true); onRevealStart?.(); }); },
        reset: () => setVisible(false),
      }));

      useEffect(() => {
        if (!autoPlay) return;
        const timeout = window.setTimeout(() => { setRun((c) => c + 1); setVisible(true); onRevealStart?.(); }, delay * 1000);
        return () => window.clearTimeout(timeout);
      }, [autoPlay, delay, text, onRevealStart]);

      const offset = getOffset(direction, distance);
      const variants = {
        hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: offset.x, y: offset.y, filter: blur ? "blur(6px)" : "blur(0px)" },
        visible: (index) => ({
          opacity: 1, x: 0, y: 0, filter: "blur(0px)",
          transition: shouldReduceMotion ? { duration: 0.01 } : { ...transition, delay: getDelay(index, animatedTotal, stagger, staggerFrom) },
        }),
      };

      return (
        <span className={cn("inline-flex flex-wrap whitespace-pre-wrap align-baseline justify-center", splitBy === "lines" && "flex-col items-center", className)} aria-label={text} {...props}>
          <span className="sr-only">{text}</span>
          {segments.map((segment, index) => {
            if (!segment.animated) return <span key={`${run}-${index}`} aria-hidden="true" className="inline-block">{segment.value}</span>;
            return (
              <span key={`${run}-${index}`} className={cn("inline-block overflow-hidden align-baseline pb-1", maskClassName)} aria-hidden="true">
                <motion.span custom={segment.index} variants={variants} initial="hidden" animate={visible ? "visible" : "hidden"} className={cn("inline-block will-change-transform", segmentClassName)} onAnimationComplete={segment.index === animatedTotal - 1 ? onRevealComplete : undefined}>
                  {segment.value}
                </motion.span>
              </span>
            );
          })}
        </span>
      );
    });

    // ===== PagePreloader Component =====
    const PagePreloader = ({ onComplete, images }) => {
      const [progress, setProgress] = useState(1);
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [isFadingOut, setIsFadingOut] = useState(false);

      useEffect(() => {
        const uniqueImages = Array.from(new Set(images));
        uniqueImages.forEach((src) => { const img = new Image(); img.src = src; });
      }, [images]);

      useEffect(() => {
        const interval = setInterval(() => { setCurrentImageIndex((prev) => (prev + 1) % images.length); }, 85);
        return () => clearInterval(interval);
      }, [images]);

      useEffect(() => {
        let currentVal = 1;
        const interval = setInterval(() => {
          const isNearEnd = currentVal > 85;
          const step = isNearEnd ? Math.floor(Math.random() * 2) + 1 : Math.floor(Math.random() * 6) + 2;
          currentVal = Math.min(100, currentVal + step);
          setProgress(currentVal);
          if (currentVal >= 100) clearInterval(interval);
        }, 45);
        return () => clearInterval(interval);
      }, []);

      const onCompleteRef = useRef(onComplete);
      useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

      useEffect(() => {
        if (progress === 100) {
          setIsFadingOut(true);
          const fadeTimer = setTimeout(() => { onCompleteRef.current(); }, 500);
          return () => clearTimeout(fadeTimer);
        }
      }, [progress]);

      const normalizedProgress = progress / 100;
      const blurFactor = Math.pow(normalizedProgress, 4);
      const blurAmount = blurFactor * 18;

      return (
        <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center select-none overflow-hidden transition-opacity duration-500 ease-in-out" style={{ opacity: isFadingOut ? 0 : 1, pointerEvents: isFadingOut ? "none" : "auto" }}>
          <div className="relative shadow-[0_16px_48px_rgba(0,0,0,0.85)]" style={{ width: "100px", height: "100px", borderRadius: "1.5em", overflow: "hidden", filter: `blur(${blurAmount}px)`, transform: `scale(${1 - (progress / 100) * 0.1})`, transition: "filter 0.1s ease-out, transform 0.1s ease-out", willChange: "filter, transform" }}>
            <img src={images[currentImageIndex]} alt="loading preview" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "1.5em" }} className="select-none pointer-events-none" referrerPolicy="no-referrer" />
          </div>
          <div className="fixed bottom-8 right-8 md:bottom-12 md:right-16 z-[10000] font-sans font-[300] tracking-[-0.015em] text-[5rem] leading-none text-white select-none pointer-events-none tabular-nums" style={{ filter: `blur(${blurAmount * 0.6}px)`, transition: "filter 0.1s ease-out", willChange: "filter" }}>
            {progress}%
          </div>
        </div>
      );
    };

    // ===== Main App =====
    const DATA = [
      "https://image.mux.com/Fha8aU022LfL14z2WB1SbgIvq901NKvnl77OaQBOJXTk4/animated.webp?width=640&fps=15",
      "https://i.ibb.co/gFyGKsKC/temp-Imagel0c-NFL-heic-202606192014.jpg",
      "https://image.mux.com/3QMFUgJOJoclCn3i3dUJJQDapAuIhKin2VesnbIVThk/animated.webp?width=640&fps=15",
      "https://i.ibb.co/7JXNrt9z/temp-Imagel0c-NFL-heic-202606192011.jpg",
      "https://image.mux.com/8v3ptTfh02ifW501AE0101Oc9likenmSljCmutT2xXSEzEk/animated.webp?width=640&fps=15",
      "https://i.ibb.co/hJj4nxBT/temp-Imagel0c-NFL-heic-202606192019.jpg",
      "https://image.mux.com/rjL6oQiSOfhaxXgbslqGUsFKnaRtqLdxwurjT6Yv5PQ/animated.webp?width=640&fps=15",
      "https://i.ibb.co/gFyGKsKC/temp-Imagel0c-NFL-heic-202606192014.jpg",
      "https://image.mux.com/WuNDVUgyyrxFhrn2QxrF1LjMS3nBwrD7xjMNnIEn6nU/animated.webp?width=640&fps=15",
      "https://i.ibb.co/7JXNrt9z/temp-Imagel0c-NFL-heic-202606192011.jpg",
      "https://image.mux.com/lc4s01TqqDHxVTc01xNacwF2tHu3CdTXQflRRS8H02WYDs/animated.webp?width=640&fps=15",
      "https://i.ibb.co/hJj4nxBT/temp-Imagel0c-NFL-heic-202606192019.jpg"
    ];

    const N = DATA.length;
    const BASE_ANGLE = 360 / N;
    const CARD_HEIGHT_EM = 24;
    const BACK_COLOR = "#000000";

    const ProgressiveBlur = ({ className = "", backgroundColor = BACK_COLOR, position = "left", width = "25%", height = "100%", blurAmount = "12px" }) => {
      const isLeft = position === "left";
      const isRight = position === "right";
      const isTop = position === "top";
      const style = { position: "absolute", pointerEvents: "none", zIndex: 10, userSelect: "none", WebkitUserSelect: "none", WebkitBackdropFilter: `blur(${blurAmount})`, backdropFilter: `blur(${blurAmount})` };
      if (isLeft || isRight) {
        style.top = 0; style[isLeft ? "left" : "right"] = 0; style.width = width; style.height = "100%";
        style.background = isLeft ? `linear-gradient(to left, transparent, ${backgroundColor})` : `linear-gradient(to right, transparent, ${backgroundColor})`;
        const mask = isLeft ? `linear-gradient(to right, ${backgroundColor} 30%, transparent)` : `linear-gradient(to left, ${backgroundColor} 30%, transparent)`;
        style.maskImage = mask; style.WebkitMaskImage = mask;
      } else {
        style.left = 0; style[isTop ? "top" : "bottom"] = 0; style.width = "100%"; style.height = height;
        style.background = isTop ? `linear-gradient(to top, transparent, ${backgroundColor})` : `linear-gradient(to bottom, transparent, ${backgroundColor})`;
        const mask = isTop ? `linear-gradient(to bottom, ${backgroundColor} 30%, transparent)` : `linear-gradient(to top, ${backgroundColor} 30%, transparent)`;
        style.maskImage = mask; style.WebkitMaskImage = mask;
      }
      return <div className={`select-none pointer-events-none ${className}`} style={style} />;
    };

    const Ticker = ({ rotationY, widthClass = "w-[270px]" }) => {
      const textRef = useRef(null);
      const [textWidth, setTextWidth] = useState(0);
      useEffect(() => {
        if (!textRef.current) return;
        const observer = new ResizeObserver((entries) => {
          for (let entry of entries) {
            const fullWidth = textRef.current?.getBoundingClientRect().width || entry.contentRect.width + 48;
            if (fullWidth > 0) setTextWidth(fullWidth);
          }
        });
        observer.observe(textRef.current);
        return () => observer.disconnect();
      }, []);

      const speedScale = -1.35;
      const rawOffset = rotationY * speedScale;
      let offset = 0;
      if (textWidth > 0) { offset = rawOffset % textWidth; if (offset > 0) offset -= textWidth; }

      const tickerContent = (
        <div className="flex flex-row shrink-0 items-center pr-5 gap-x-5">
          <span className="text-white text-[12px] md:text-[13px] font-sans font-light tracking-normal select-none leading-none">We build websites that convert.</span>
          <span className="text-white/30 text-[12px] md:text-[13px] font-sans font-light tracking-normal select-none leading-none">Designed to reduce friction and maximize leads.</span>
        </div>
      );

      return (
        <div className={`relative ${widthClass} h-[18px] overflow-hidden select-none pointer-events-none flex items-center font-sans`}>
          <div className="absolute left-0 top-0 bottom-0 w-[24px] bg-gradient-to-r from-black via-black/35 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[24px] bg-gradient-to-l from-black via-black/35 to-transparent z-10 pointer-events-none" />
          <div className="flex flex-row whitespace-nowrap" style={{ transform: `translateX(${offset}px)`, willChange: "transform" }}>
            <div ref={textRef} className="flex flex-row shrink-0">{tickerContent}</div>
            {tickerContent}{tickerContent}{tickerContent}
          </div>
        </div>
      );
    };

    function App() {
      const [isPreloaderActive, setIsPreloaderActive] = useState(true);
      const [step, setStep] = useState(1);
      const stepRef = useRef(1); stepRef.current = step;
      const [rawAmount, setRawAmount] = useState("");
      const [rawEmail, setRawEmail] = useState("");
      const [isFocused, setIsFocused] = useState(false);
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [showCookies, setShowCookies] = useState(true);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const inputRef = useRef(null);

      const focusInput = () => { inputRef.current?.focus(); if (step === 1) inputRef.current?.select(); };

      useEffect(() => { if (step === 2) setTimeout(() => { inputRef.current?.focus(); }, 100); }, [step]);

      const handleInputChange = (e) => {
        let val = e.target.value.replace(/,/g, ".");
        if (rawAmount === "0.0" && val !== "0.0" && val !== "") {
          const added = val.replace("0.0", "");
          if (/^[0-9]$/.test(added)) val = added;
          else if (val.length === 1 && /^[0-9.]$/.test(val)) val = val;
          else if (val.startsWith("0.0") && val.length > 3) val = val.substring(3);
          else if (val.endsWith("0.0") && val.length > 3) val = val.slice(0, -3);
        }
        let cleaned = val.replace(/[^0-9.]/g, "");
        const parts = cleaned.split(".");
        if (parts.length > 2) cleaned = parts[0] + "." + parts.slice(1).join("");
        if (parts.length === 2 && parts[1].length > 2) cleaned = parts[0] + "." + parts[1].slice(0, 2);
        if (cleaned.length > 1 && cleaned.startsWith("0") && cleaned[1] !== ".") {
          cleaned = cleaned.replace(/^0+/, "");
          if (cleaned === "" || cleaned.startsWith(".")) cleaned = "0" + cleaned;
        }
        setRawAmount(cleaned);
      };

      const formatCurrency = (val) => {
        if (!val) return "";
        const parts = val.split(".");
        const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return parts.length > 1 ? integerPart + "," + parts[1] : integerPart;
      };

      const formattedAmount = formatCurrency(rawAmount);
      const numericValue = parseFloat(rawAmount);
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail);
      const showNext = !isSubmitted && (step === 1 ? (!isNaN(numericValue) && numericValue >= 1000) : rawEmail.length >= 4);

      const getScaleFactor = (text) => {
        if (step === 2) {
          if (rawEmail === "") return 1.0;
          const len = rawEmail.length;
          if (len <= 3) return 1.0;
          return Math.max(0.35, 1.0 - (len - 3) * 0.022);
        }
        if (rawAmount === "") return 1.0;
        const parts = rawAmount.split(".");
        const integerDigits = parts[0].replace(/[^0-9]/g, "");
        const digitCount = integerDigits.length;
        let scale = 1.0;
        if (digitCount <= 3) scale = 1.0;
        else if (digitCount === 4) scale = 0.92;
        else if (digitCount === 5) scale = 0.82;
        else if (digitCount === 6) scale = 0.72;
        else if (digitCount === 7) scale = 0.62;
        else if (digitCount === 8) scale = 0.52;
        else if (digitCount === 9) scale = 0.44;
        else if (digitCount === 10) scale = 0.38;
        else scale = Math.max(0.25, 0.38 - (digitCount - 10) * 0.05);
        if (parts.length > 1 && parts[1].length > 0) scale = Math.max(0.25, scale - 0.08);
        return scale;
      };

      const scaleFactor = getScaleFactor(step === 1 ? (rawAmount !== "" ? formattedAmount : "your budget") : (rawEmail !== "" ? rawEmail : "your email"));

      const handleKeyDown = (e) => {
        if (e.key === "Enter" && showNext) {
          if (step === 1) { setStep(2); velocityRef.current = 4.5 * scrollDirectionRef.current; setTimeout(() => { inputRef.current?.focus(); }, 120); }
          else { setIsSubmitted(true); velocityRef.current = 7.5 * scrollDirectionRef.current; }
        }
      };

      const [rotationY, setRotationY] = useState(0);
      const targetRotationRef = useRef(0);
      const currentRotationRef = useRef(0);
      const isDraggingRef = useRef(false);
      const lastInputTimeRef = useRef(0);
      const clickTargetRotationRef = useRef(null);
      const scrollDirectionRef = useRef(1);
      const startXRef = useRef(0);
      const startRotationYRef = useRef(0);
      const lastDragXRef = useRef(0);
      const lastDragTimeRef = useRef(0);
      const velocityRef = useRef(0);
      const prevRotationRef = useRef(0);
      const deformationVelRef = useRef(0);
      const deformationForceRef = useRef(0);

      useEffect(() => {
        let animId;
        const tick = () => {
          const target = targetRotationRef.current;
          let current = currentRotationRef.current;
          if (isDraggingRef.current) {
            currentRotationRef.current = target;
            velocityRef.current = currentRotationRef.current - prevRotationRef.current;
          } else if (clickTargetRotationRef.current !== null) {
            const diff = clickTargetRotationRef.current - current;
            if (Math.abs(diff) < 0.05) { currentRotationRef.current = clickTargetRotationRef.current; clickTargetRotationRef.current = null; velocityRef.current = 0; }
            else { const s = diff * 0.08; currentRotationRef.current += s; velocityRef.current = s; }
            targetRotationRef.current = currentRotationRef.current;
          } else {
            const autoScrollSpeed = 0.24 * scrollDirectionRef.current;
            const decayFactor = 0.982;
            velocityRef.current = autoScrollSpeed + (velocityRef.current - autoScrollSpeed) * decayFactor;
            currentRotationRef.current += velocityRef.current;
            targetRotationRef.current = currentRotationRef.current;
          }
          const instantV = currentRotationRef.current - prevRotationRef.current;
          prevRotationRef.current = currentRotationRef.current;
          const k = 0.16, c = 0.52;
          const force = -k * (deformationVelRef.current - instantV) - c * deformationForceRef.current;
          deformationForceRef.current += force;
          deformationVelRef.current += deformationForceRef.current;
          if (Math.abs(deformationVelRef.current) > 25) deformationVelRef.current = Math.sign(deformationVelRef.current) * 25;
          if (Math.abs(deformationForceRef.current) > 8) deformationForceRef.current = Math.sign(deformationForceRef.current) * 8;
          if (Math.abs(deformationVelRef.current) < 0.001 && Math.abs(instantV) < 0.001) { deformationVelRef.current = 0; deformationForceRef.current = 0; }
          setRotationY(currentRotationRef.current);
          animId = requestAnimationFrame(tick);
        };
        animId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animId);
      }, []);

      useEffect(() => {
        const handleWheel = (e) => {
          e.preventDefault();
          clickTargetRotationRef.current = null;
          const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
          if (delta > 0) scrollDirectionRef.current = -1;
          else if (delta < 0) scrollDirectionRef.current = 1;
          const wheelVelocityImpulse = -delta * 0.052;
          const clampedImpulse = Math.max(-8, Math.min(8, wheelVelocityImpulse));
          velocityRef.current = velocityRef.current * 0.45 + clampedImpulse * 0.55;
          lastInputTimeRef.current = Date.now();
        };
        const handleKey = (e) => {
          if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
            e.preventDefault();
            const currentCard = Math.round(-currentRotationRef.current / BASE_ANGLE);
            const nextRotation = -(currentCard - 1) * BASE_ANGLE;
            clickTargetRotationRef.current = nextRotation; targetRotationRef.current = nextRotation;
            scrollDirectionRef.current = 1; lastInputTimeRef.current = Date.now();
          } else if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown") {
            e.preventDefault();
            const currentCard = Math.round(-currentRotationRef.current / BASE_ANGLE);
            const nextRotation = -(currentCard + 1) * BASE_ANGLE;
            clickTargetRotationRef.current = nextRotation; targetRotationRef.current = nextRotation;
            scrollDirectionRef.current = -1; lastInputTimeRef.current = Date.now();
          }
        };
        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("keydown", handleKey);
        return () => { window.removeEventListener("wheel", handleWheel); window.removeEventListener("keydown", handleKey); };
      }, []);

      const handlePointerDown = (e) => {
        isDraggingRef.current = true; clickTargetRotationRef.current = null;
        startXRef.current = e.clientX; startRotationYRef.current = currentRotationRef.current;
        lastDragXRef.current = e.clientX; lastDragTimeRef.current = Date.now(); velocityRef.current = 0;
        lastInputTimeRef.current = Date.now(); e.currentTarget.setPointerCapture(e.pointerId);
      };
      const handlePointerMove = (e) => {
        if (!isDraggingRef.current) return;
        const deltaX = e.clientX - startXRef.current;
        const degrees = deltaX * 0.18;
        targetRotationRef.current = startRotationYRef.current + degrees;
        lastInputTimeRef.current = Date.now();
        if (deltaX > 0) scrollDirectionRef.current = 1; else if (deltaX < 0) scrollDirectionRef.current = -1;
        const now = Date.now(); const dt = now - lastDragTimeRef.current;
        if (dt > 0) { const dx = e.clientX - lastDragXRef.current; const frameFraction = dt / 16.666; velocityRef.current = (dx * 0.18) / frameFraction; }
        lastDragXRef.current = e.clientX; lastDragTimeRef.current = now;
      };
      const handlePointerUp = (e) => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false; e.currentTarget.releasePointerCapture(e.pointerId);
        lastInputTimeRef.current = Date.now();
        const maxVelocity = 12;
        if (Math.abs(velocityRef.current) > maxVelocity) velocityRef.current = Math.sign(velocityRef.current) * maxVelocity;
      };

      const angleRad = Math.PI / N;
      const radiusEm = (0.5 * CARD_HEIGHT_EM + 0.5) / Math.tan(angleRad);
      const zTrans = `calc(-1 * ${radiusEm}em)`;

      const handleCardClick = (idx) => {
        lastInputTimeRef.current = Date.now();
        const currentRot = currentRotationRef.current;
        const targetAngle = idx * BASE_ANGLE;
        const currentLap = Math.round(currentRot / 360) * 360;
        const candidates = [currentLap + targetAngle, currentLap - 360 + targetAngle, currentLap + 360 + targetAngle];
        let bestTarget = candidates[0], minDistance = Math.abs(candidates[0] - currentRot);
        for (let i = 1; i < candidates.length; i++) { const dist = Math.abs(candidates[i] - currentRot); if (dist < minDistance) { minDistance = dist; bestTarget = candidates[i]; } }
        if (bestTarget > currentRot) scrollDirectionRef.current = 1; else if (bestTarget < currentRot) scrollDirectionRef.current = -1;
        clickTargetRotationRef.current = bestTarget; targetRotationRef.current = bestTarget;
      };

      const handlePreloaderComplete = useCallback(() => { setIsPreloaderActive(false); }, []);

      useEffect(() => {
        if (!isPreloaderActive && step === 1) { const timer = setTimeout(() => { inputRef.current?.focus(); }, 350); return () => clearTimeout(timer); }
      }, [isPreloaderActive, step]);

      return (
        <div className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden" style={{ background: BACK_COLOR }}>
          {isPreloaderActive ? (
            <PagePreloader images={DATA} onComplete={handlePreloaderComplete} />
          ) : (
            <>
              {/* Header */}
              <div className="absolute top-6 left-6 right-6 z-50 flex flex-col gap-4 pointer-events-none">
                <div className="flex items-center justify-between w-full pointer-events-none">
                  <div className="flex items-center gap-4 pointer-events-auto">
                    <motion.a href="https://x.com/viktoroddy" target="_blank" rel="noopener noreferrer"
                      initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8, opacity: { type: "tween", ease: "easeInOut", duration: 0.8, delay: 0.3 }, y: { type: "tween", ease: "easeInOut", duration: 0.8, delay: 0.3 } }}
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      className="flex items-center p-[6px] pr-3.5 rounded-full bg-white/10 hover:bg-white/15 active:bg-white/20 backdrop-blur-md transition-colors duration-200 cursor-pointer select-none shadow-[0_4px_16px_rgba(0,0,0,0.4)] h-[38px] gap-2.5 group flex-shrink-0">
                      <div className="w-[26px] h-[26px] rounded-full overflow-hidden flex-shrink-0 bg-white/10 relative">
                        <img src="https://pbs.twimg.com/profile_images/1941325782829113344/buT3DYqx_400x400.jpg" alt="Viktor Oddy" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                      <span className="font-sans font-medium text-[12px] leading-[18px] tracking-normal text-white/80 group-hover:text-white transition-colors duration-200">@viktoroddy</span>
                    </motion.a>
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8, opacity: { type: "tween", ease: "easeInOut", duration: 0.8, delay: 0.4 }, x: { type: "tween", ease: "easeInOut", duration: 0.8, delay: 0.4 } }} className="hidden sm:block flex-shrink-0">
                      <Ticker rotationY={rotationY} />
                    </motion.div>
                  </div>
                  <div className="flex items-center h-[38px] pointer-events-auto">
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="hidden sm:flex items-center gap-5 md:gap-7">
                      {["About", "Portfolio", "Contact"].map((label) => (
                        <a key={label} href={`#${label.toLowerCase()}`} onClick={(e) => e.preventDefault()} className="font-sans text-[12px] md:text-[13px] text-white/30 underline hover:text-white transition-colors duration-200 cursor-pointer tracking-wide">{label}</a>
                      ))}
                    </motion.div>
                    <div className="sm:hidden flex items-center">
                      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-white/10 hover:bg-white/15 active:bg-white/20 backdrop-blur-md text-white/80 hover:text-white transition-colors duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.4)] cursor-pointer select-none" aria-label="Toggle menu">
                        <div className="w-4 h-[10px] relative flex flex-col justify-between">
                          <motion.span animate={isMobileMenuOpen ? { rotate: 45, y: 4.25 } : { rotate: 0, y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="absolute top-0 left-0 w-full h-[1.5px] bg-current rounded-full" />
                          <motion.span animate={isMobileMenuOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }} transition={{ duration: 0.12 }} className="absolute top-[4.25px] left-0 w-full h-[1.5px] bg-current rounded-full" />
                          <motion.span animate={isMobileMenuOpen ? { rotate: -45, y: -4.25 } : { rotate: 0, y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="absolute bottom-0 left-0 w-full h-[1.5px] bg-current rounded-full" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block sm:hidden w-full pointer-events-auto h-[18px]">
                  <Ticker rotationY={rotationY} widthClass="w-full" />
                </div>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="fixed inset-0 bg-black/95 z-40 sm:hidden flex flex-col justify-center items-end px-12 select-none">
                    <motion.div initial="hidden" animate="visible" exit="hidden" variants={{ hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }} className="flex flex-col gap-10 text-right items-end pr-4 pointer-events-auto w-full max-w-xs mr-2">
                      {[{ label: "About", href: "#about" }, { label: "Portfolio", href: "#portfolio" }, { label: "Contact", href: "#contact" }].map((item) => (
                        <motion.div key={item.label} className="w-full text-right" variants={{ hidden: { opacity: 0, x: 40, filter: "blur(4px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 120, damping: 20 } } }}>
                          <a href={item.href} onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }} className="inline-block text-[20px] font-sans font-light tracking-wide text-white underline decoration-white decoration-[0.5px] hover:decoration-white underline-offset-[5px] transition-all duration-200">{item.label}</a>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Headline + Input */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1, y: showNext ? "-1.5rem" : (isSubmitted ? "5rem" : "5rem") }}
                transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8 }}
                className="absolute top-[calc(7.5%_+_70px)] lg:top-[7.5%] mt-[20px] lg:mt-[30px] left-0 right-0 z-20 flex flex-col items-center justify-center text-center px-4 select-none pointer-events-none">
                <motion.h1
                  animate={{
                    scale: isSubmitted ? 1.0 : step === 1 ? (rawAmount.length >= 4 ? Math.max(0.55, 1.0 - (rawAmount.length - 3) * 0.08) : 1.0) : (rawEmail.length >= 4 ? Math.max(0.55, 1.0 - (rawEmail.length - 3) * 0.08) : 1.0),
                    y: 0,
                    opacity: isSubmitted ? 1.0 : (step === 1 ? (rawAmount.length > 0 ? 0.45 : 1.0) : (rawEmail.length > 0 ? 0.45 : 1.0)),
                    filter: isSubmitted ? "blur(0px)" : step === 1 ? `blur(${Math.min(12, rawAmount.length * 1.5)}px)` : `blur(${Math.min(12, rawEmail.length * 1.5)}px)`
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
                  style={{ transformOrigin: "bottom center" }}
                  className={isSubmitted ? "text-white w-full max-w-4xl flex items-center justify-center font-normal px-4 md:px-0" : "text-[2.5rem] tracking-[-0.01em] text-white leading-[1.05] font-sans font-normal flex flex-col items-center"}>
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center text-center select-none pointer-events-auto w-full max-w-xl mx-auto px-6">
                      <motion.div initial={{ opacity: 0, scale: 0.8, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8, delay: 0.05 }} className="text-white mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[48px] h-[48px]" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>
                      </motion.div>
                      <div className="flex flex-col items-center leading-[1.05] text-center mb-6 text-[2.5rem] tracking-[-0.01em]">
                        <KineticTextReveal text="Submission" splitBy="characters" direction="up" distance={15} stagger={0.05} delay={0.15} blur={true} segmentClassName="text-white font-sans font-light tracking-[-0.015em] pb-1 inline-block" />
                        <KineticTextReveal text="accepted." splitBy="characters" direction="up" distance={15} stagger={0.05} delay={0.3} blur={true} className="mt-[-0.06em]" segmentClassName="font-serif italic font-[280] text-neutral-100 inline-block" />
                      </div>
                      <motion.span initial={{ opacity: 0, scale: 0.96, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8, delay: 0.45 }} className="text-white/80 text-[1.1rem] md:text-[1.3rem] lg:text-[1.4rem] font-sans font-light tracking-normal leading-[1.2] mb-12 max-w-[24rem]">We'll be in touch shortly.</motion.span>
                      <motion.div initial={{ opacity: 0, scale: 0.96, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8, delay: 0.6 }} className="flex flex-col gap-2 text-center select-none items-center justify-center text-[13px] md:text-[14px]">
                        <div className="flex flex-row items-center gap-1.5 leading-none"><span className="font-sans text-white/35 lowercase font-light">budget</span><span className="font-sans text-white font-light tracking-tight">$ {formattedAmount}</span></div>
                        <div className="flex flex-row items-center gap-1.5 leading-none mt-1"><span className="font-sans text-white/35 lowercase font-light">email</span><span className="font-sans text-white font-light break-all max-w-[280px] md:max-w-md">{rawEmail}</span></div>
                      </motion.div>
                    </div>
                  ) : (
                    <>
                      <KineticTextReveal text="More High-Intent Leads." splitBy="words" direction="up" distance={15} stagger={0.08} delay={0.1} blur={true} segmentClassName="font-sans font-[300] text-white pb-1" />
                      <KineticTextReveal text="Less Friction." splitBy="words" direction="up" distance={15} stagger={0.08} delay={0.4} blur={true} className="mt-[-0.06em]" segmentClassName="font-serif italic font-[280] text-neutral-100 pb-1" />
                    </>
                  )}
                </motion.h1>

                {!isSubmitted && (
                  <div onClick={focusInput} className="mt-[2.5rem] pointer-events-auto relative cursor-text group select-none w-full max-w-[33.75rem] h-[6rem] flex items-center justify-center text-center px-4">
                    {step === 1 ? (
                      <input ref={inputRef} key="input-budget" type="text" inputMode="decimal" value={rawAmount} onChange={handleInputChange} onKeyDown={handleKeyDown} onFocus={(e) => { setIsFocused(true); e.currentTarget.select(); }} onBlur={() => { setIsFocused(false); if (rawAmount === "" || rawAmount === "0" || rawAmount === "0.0") setRawAmount(""); }} className="absolute inset-0 w-full h-full opacity-0 cursor-text z-20" aria-label="Sum Input" />
                    ) : (
                      <input ref={inputRef} key="input-email" type="email" value={rawEmail} onChange={(e) => setRawEmail(e.target.value)} onKeyDown={handleKeyDown} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className="absolute inset-0 w-full h-full opacity-0 cursor-text z-20" aria-label="Email Input" />
                    )}
                    <AnimatePresence mode="wait">
                      {step === 1 ? (
                        <motion.div key="budget-step" initial={{ scale: 0.92, opacity: 0, y: 15 }} animate={{ scale: scaleFactor, opacity: 1, y: 0 }} exit={{ scale: 0.92, opacity: 0, y: -15 }} transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8 }} className="flex items-center justify-center select-none" style={{ transformOrigin: "center center" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`mr-3 w-[4.5rem] h-[4.5rem] select-none transition-colors duration-150 ${rawAmount !== "" ? "text-white" : "text-white/20"}`}><path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" /><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" /></svg>
                          <span className={`font-sans font-[300] select-none tabular-nums text-[5rem] leading-none relative flex items-center tracking-[-0.015em] transition-colors duration-150 ${rawAmount !== "" ? "text-white" : "text-white/20"}`}>
                            {rawAmount !== "" ? formattedAmount : "your budget"}
                            <span className={`w-[2px] bg-white inline-block ml-1 h-[0.85em] transition-opacity duration-150 ${isFocused ? "animate-cursor-blink opacity-100" : "opacity-0 pointer-events-none"}`} />
                          </span>
                        </motion.div>
                      ) : (
                        <motion.div key="email-step" initial={{ scale: 0.92, opacity: 0, y: 15 }} animate={{ scale: scaleFactor, opacity: 1, y: 0 }} exit={{ scale: 0.92, opacity: 0, y: -15 }} transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8 }} className="flex items-center justify-center select-none" style={{ transformOrigin: "center center" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`mr-3 w-[4.5rem] h-[4.5rem] select-none transition-colors duration-150 ${rawEmail !== "" ? "text-white" : "text-white/20"}`}><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>
                          <span className={`font-sans font-[300] select-none text-[5rem] leading-none relative flex items-center tracking-[-0.015em] transition-colors duration-150 ${rawEmail !== "" ? "text-white" : "text-white/20"}`}>
                            {rawEmail !== "" ? rawEmail : "your email"}
                            <span className={`w-[2px] bg-white inline-block ml-1 h-[0.85em] transition-opacity duration-150 ${isFocused ? "animate-cursor-blink opacity-100" : "opacity-0 pointer-events-none"}`} />
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                <AnimatePresence>
                  {showNext && (
                    <motion.button initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      className="mt-[1.5rem] pointer-events-auto flex items-center justify-center h-[50px] md:h-[60px] px-[2.1875rem] rounded-full bg-white/10 hover:bg-white/15 text-white font-sans font-normal text-[clamp(13px,0.93rem,15px)] transition-colors duration-200 cursor-pointer select-none shadow-[0_8px_32px_rgba(255,255,255,0.02)] backdrop-blur-md"
                      onClick={() => { if (step === 1) { setStep(2); velocityRef.current = 4.5 * scrollDirectionRef.current; } else { setIsSubmitted(true); velocityRef.current = 7.5 * scrollDirectionRef.current; } }}>
                      {step === 1 ? "Okay, next" : "Submit"}
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Progressive Blurs */}
              <ProgressiveBlur position="left" backgroundColor={BACK_COLOR} />
              <ProgressiveBlur position="right" backgroundColor={BACK_COLOR} />

              {/* 3D Carousel */}
              <motion.div className="scene"
                initial={{ opacity: 0, scale: 0.9, y: "16rem" }}
                animate={{ opacity: isSubmitted ? 0 : 1, scale: isSubmitted ? 0.80 : 1, y: isSubmitted ? "15rem" : "12rem" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ pointerEvents: isSubmitted ? "none" : "auto" }}>
                <div className="a3d cursor-grab active:cursor-grabbing select-none"
                  style={{ "--n": N, "--z-trans": zTrans, "--vel": deformationVelRef.current, "--abs-vel": Math.abs(deformationVelRef.current), transform: `rotateY(${rotationY}deg)` }}
                  onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp}>
                  {DATA.map((imgUrl, idx) => {
                    const cardAngle = idx * BASE_ANGLE;
                    let angleDiff = (cardAngle + rotationY) % 360;
                    if (angleDiff > 180) angleDiff -= 360;
                    if (angleDiff < -180) angleDiff += 360;
                    const absDiff = Math.abs(angleDiff);
                    const isOutOfView = absDiff > 90;
                    return <img key={idx} className="card" src={imgUrl} alt="pinterest image" referrerPolicy="no-referrer" style={{ "--i": idx, opacity: isOutOfView ? 0 : 1, filter: "none", pointerEvents: isOutOfView ? "none" : "auto" }} onClick={(e) => { e.stopPropagation(); handleCardClick(idx); }} />;
                  })}
                </div>
              </motion.div>

              {/* Cookie Banner */}
              <AnimatePresence>
                {showCookies && (
                  <motion.div initial={{ opacity: 0, y: 55, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 35, scale: 0.96 }} transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.8 }}
                    className="fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 z-50 flex flex-col md:flex-row items-center justify-between p-2 gap-3 md:gap-8 rounded-xl md:rounded-full bg-white/10 backdrop-blur-md shadow-[0_12px_45px_rgba(0,0,0,0.85)] w-[calc(100%-2rem)] max-w-4xl md:h-[45px]">
                    <div className="flex items-center gap-2.5 w-full md:w-auto">
                      <div className="w-[29px] h-[29px] rounded-full overflow-hidden flex-shrink-0 bg-white/10 flex items-center justify-center relative">
                        <svg className="w-[15px] h-[15px] text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 2A1.5 1.5 0 1 0 15.5 5 1.5 1.5 0 1 0 15.5 2z"/><path d="M21 5A1 1 0 1 0 21 7 1 1 0 1 0 21 5z"/><path d="m21.6,11.04c-.25-.19-.56-.25-.85-.17-.29.07-.52.11-.74.11-1.65,0-3-1.35-3-2.95,0-.03.02-.13.02-.17.01-.32-.13-.62-.37-.82-.25-.2-.58-.27-.88-.19-.29.08-.53.11-.76.11-1.65,0-3-1.35-3-3.01,0-.22.03-.45.1-.72.08-.31,0-.65-.21-.89-.21-.25-.53-.37-.85-.34C5.88,2.5,2,6.79,2,11.98c0,5.53,4.49,10.02,10,10.02s10-4.5,10-10.02v-.16c-.01-.31-.16-.59-.4-.78Zm-12.6-3.04c.55,0,1,.45,1,1s-.45,1-1,1-1-.45-1-1,.45-1,1-1Zm-1.5,6c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm3,4c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm2-5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm2.5,3c-.55,0-1-.45-1-1s.45-1,1-1,1,.45,1,1-.45,1-1,1Z"/></svg>
                      </div>
                      <p className="font-sans font-light text-[12px] md:text-[13px] leading-relaxed text-white/80 tracking-normal">
                        We use cookies to understand how you use our site. Accept to help us improve.{" "}
                        <a href="/privacy" onClick={(e) => e.preventDefault()} className="text-white/30 underline hover:text-white transition-colors">Privacy Policy</a>
                      </p>
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8 }} onClick={() => { localStorage.setItem("cookie_consent", "declined"); setShowCookies(false); }} className="flex-1 md:flex-none flex items-center justify-center px-4 py-1 h-[29px] min-w-[76px] rounded-full bg-white/5 hover:bg-white/10 active:bg-white/15 text-white/80 hover:text-white transition-colors duration-200 text-[12px] font-sans font-medium cursor-pointer">Decline</motion.button>
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8 }} onClick={() => { localStorage.setItem("cookie_consent", "accepted"); setShowCookies(false); }} className="flex-1 md:flex-none flex items-center justify-center px-4 py-1 h-[29px] min-w-[76px] rounded-full bg-white hover:bg-white/90 text-black transition-colors duration-200 text-[12px] font-sans font-medium cursor-pointer">Accept</motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      );
    }

    const root = createRoot(document.getElementById("root"));
    root.render(<App />);
  </script>
</body>
</html>