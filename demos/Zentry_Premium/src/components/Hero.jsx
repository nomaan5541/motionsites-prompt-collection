import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoading(false);
  };

  useGSAP(() => {
    // Replicate the Zentry hero scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-frame",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    // As user scrolls, the video frame expands to fill the screen completely
    tl.to("#hero-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0%",
      width: "100vw",
      height: "100vh",
      ease: "power1.inOut",
    }, 0);

    // The text splits and moves away
    tl.to(".hero-heading-top", {
      y: -200,
      opacity: 0,
      ease: "power1.inOut",
    }, 0);

    tl.to(".hero-heading-bottom", {
      y: 200,
      opacity: 0,
      ease: "power1.inOut",
    }, 0);
  });

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-black text-blue-75">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-black">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      {/* Static Background Text (behind the video frame) */}
      <div className="absolute left-0 top-0 z-0 flex size-full flex-col justify-between p-10 px-5 sm:px-10">
        <h1 className="special-font hero-heading hero-heading-top pointer-events-none z-0 mt-16 text-blue-75 opacity-50">
          REDE<b>F</b>INE
        </h1>
        <h1 className="special-font hero-heading hero-heading-bottom pointer-events-none z-0 text-right text-blue-75 opacity-50">
          REAL<b>I</b>TY
        </h1>
      </div>

      <div
        id="hero-frame"
        className="relative z-10 mx-auto mt-20 flex h-[70vh] w-[80vw] flex-col items-center justify-center overflow-hidden rounded-3xl bg-transparent sm:h-[80vh] sm:w-[90vw]"
        style={{ clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)" }}
      >
        <video
          ref={videoRef}
          src="https://cdn.guildfi.com/video/upload/v1755844035/zentry/F1_Updated.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 size-full object-cover object-center mix-blend-screen"
          onLoadedData={handleVideoLoad}
        />

        {/* Foreground Text (inside the video frame, gets clipped) */}
        <div className="absolute left-0 top-0 flex size-full flex-col justify-between p-10 px-5 sm:px-10">
          <div className="flex w-full justify-between">
            <h1 className="special-font hero-heading hero-heading-top z-40 text-blue-75">
              REDE<b>F</b>INE
            </h1>
          </div>
          
          <div className="z-40 max-w-sm font-robert-regular text-sm text-blue-100 sm:text-base mt-20 md:mt-0">
            Enter the Human-Agentic OS <br /> The substrate where life, data, and AI form a perpetual engine, compounding intelligence, capability, and value.
          </div>

          <h1 className="special-font hero-heading hero-heading-bottom z-40 text-right text-blue-75">
            REAL<b>I</b>TY
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
