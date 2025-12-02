import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.esm.jsx";
import breakingWall from "../../assets/videos/breaking_wall.mp4";
import manSign from "../../assets/images/signs/man_sign.webp";
import MediaWrapper from "../../components/ui/MediaWrapper";

// Register ScrollTrigger globally for GSAP usage
gsap.registerPlugin(ScrollTrigger);

export default function MotionSection() {
  const overlayRef = useRef(null);
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !overlayRef.current) return;

    const ctx = gsap.context(() => {
      const targets = overlayRef.current.querySelectorAll("[data-motion-text]");
      const strike = overlayRef.current.querySelector("[data-strike]");
      const connections =
        overlayRef.current.querySelector("[data-connections]");
      const floatingLabels = imageRef.current?.querySelectorAll(
        "[data-floating-label]"
      );

      // Initial states
      gsap.set(targets, { autoAlpha: 0, y: 60 });
      if (imageRef.current) {
        gsap.set(imageRef.current, { autoAlpha: 0, y: 180 });
      }
      if (floatingLabels) {
        gsap.set(floatingLabels, { autoAlpha: 0, y: 30, scale: 0.8 });
      }

      // --- Timeline 1: Text Appearance (Triggered at 50% screen) ---
      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: overlayRef.current,
          // Start when the top of the overlay hits the center (50%) of the viewport
          start: "top center",
          scrub: true,
        },
      });

      // 1. Text appears
      tlText.to(targets, {
        autoAlpha: 1,
        y: 0,
        ease: "power3.out",
        duration: 1.5,
        stagger: 0.4,
      });

      // --- Timeline 2: Strikethrough, Color Change, Image (Triggered at 0% screen) ---
      const tlEffects = gsap.timeline({
        scrollTrigger: {
          trigger: overlayRef.current,
          // CRITICAL CHANGE: Start when the top of the overlay hits the top (0%) of the viewport
          start: "top top",
          // Set a defined end point for control
          end: "+=1000", // The animation will finish before the ScrollTrigger ends, but this provides a fixed duration point
          scrub: true,
        },
      });

      // 2. Strikethrough animation
      if (strike) {
        // Use a short delay to separate it from the final appearance of the text
        tlEffects.to(
          strike,
          { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
          "+=0.2"
        );
      }

      // 3. "connections" turns blue
      if (connections) {
        tlEffects.to(
          connections,
          { color: "#2F6BFF", duration: 0.5, ease: "power2.out" },
          "<0.1" // Start slightly before the strikethrough finishes
        );
      }

      // 4. Image appears
      if (imageRef.current) {
        tlEffects.to(
          imageRef.current,
          { autoAlpha: 10, y: 0, ease: "power2.out", duration: 5 },
          ">2"
        );
      }

      // 5. Floating labels appear with staggered delays
      if (floatingLabels && floatingLabels.length) {
        tlEffects.to(
          floatingLabels,
          {
            autoAlpha: 1,
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "back.out(1.4)",
            duration: 2.8,
            stagger: 10,
            onComplete: () => {
              // Add pulsing animation after all labels have appeared
              floatingLabels.forEach((label, index) => {
                gsap.to(label, {
                  opacity: 0.6,
                  scale: 0.97,
                  duration: 2 + index * 0.3,
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut",
                  delay: index * 0.5,
                });
              });
            },
          },
          ">0.2"
        );
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full">
      <div ref={wrapperRef} className="h-[350vh] mb-30 md:mb-0">
        <ScrollyVideo
          src={breakingWall}
          transitionSpeed={8}
          frameThreshold={0.1}
          cover
          full
          sticky
          trackScroll
          lockScroll={false}
          className="block sticky top-0 w-full h-screen overflow-hidden"
        />

        <div
          ref={overlayRef}
          className="pointer-events-none sticky top-0 flex h-screen w-full flex-col items-center justify-center md:justify-between gap-8 px-6 pb-10 pt-16 text-center text-white"
        >
          <div className="flex flex-col items-center gap-4">
            <h2
              className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white drop-shadow-[0_15px_30px_rgba(0,0,0,0.65)]"
              data-motion-text
            >
              Break the{" "}
              <span className="relative inline-block font-script text-[1.2em]">
                silence
                <svg
                  data-strike
                  className="absolute left-[-2%] top-[50%] h-[0.35em] w-[104%] -translate-y-1/2 origin-left scale-x-0"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M2 6 Q50 3, 98 6"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              . Build{" "}
              <span data-connections className="text-white">
                connections
              </span>
              .
            </h2>
            <p
              className="max-w-3xl text-white/60 font-sans leading-relaxed"
              data-motion-text
            >
              Created to empower the deaf and hard-of-hearing community, our
              system exists to remove communication limits instead of creating
              them. Scroll to witness the wall breaking, frame by frame.
            </p>
          </div>

          <div
            ref={imageRef}
            className="relative flex w-full md:items-end justify-center md:flex-row flex-col gap-10 items-start"
          >
            <MediaWrapper
              src={manSign}
              alt="Man demonstrating sign"
              className="w-full max-w-3xl drop-shadow-[0_35px_65px_rgba(0,0,0,0.75)]"
            />
            {/* Floating feature labels */}
            <span
              data-floating-label
              className="md:absolute left-[10%] top-[5%] text-4xl font-bold text-white/90 tracking-wide opacity-0"
            >
              [ Real-Time Translation ]
            </span>
            <span
              data-floating-label
              className="md:absolute right-[20%] top-[15%] text-4xl font-bold text-white/90 tracking-wide opacity-0"
            >
              [ User Friendly ]
            </span>
            <span
              data-floating-label
              className="md:absolute left-[5%] top-[40%] text-4xl font-bold text-white/90 tracking-wide opacity-0"
            >
              [ Performance Optimized ]
            </span>
            <span
              data-floating-label
              className="md:absolute right-[8%] top-[45%] text-4xl font-bold text-white/90 tracking-wide opacity-0"
            >
              [ Secure Processing ]
            </span>
            <span
              data-floating-label
              className="md:absolute left-[10%] top-[76%] text-4xl font-bold text-white/90 tracking-wide opacity-0"
            >
              [ Accessible Design ]
            </span>
            <span
              data-floating-label
              className="md:absolute right-[12%] top-[80%] text-4xl font-bold text-white/90 tracking-wide opacity-0"
            >
              [ Multi-Gesture Support ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
