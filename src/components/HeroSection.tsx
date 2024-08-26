"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const animationLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      heroRef.current &&
      titleRef.current &&
      textRef.current &&
      buttonRef.current &&
      bgRef.current &&
      animationLayerRef.current
    ) {
      // Parallax effect for background
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Subtle pulsing animation for the background image
      gsap.to(animationLayerRef.current, {
        scale: 1.05,
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });

      // Animation for title (visible from start)
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.2 }
      );

      // Animation for text (visible from start)
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.4 }
      );

      // Animation for button (visible from start)
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          delay: 0.6,
        }
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center h-screen overflow-hidden text-center text-white">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/hero-background.jpg')" }}></div>

      {/* Animation Layer */}
      <div
        ref={animationLayerRef}
        className="absolute inset-0"
        style={{
          background: "rgba(255, 255, 255, 0.1)", // Replace with your desired effect
          zIndex: 1,
          pointerEvents: "none", // Ensures the layer doesn't interfere with other interactions
        }}></div>

      <div className="relative z-10 max-w-xl">
        <h1
          ref={titleRef}
          className="text-5xl font-bold">
          Experience the Future Today
        </h1>
        <p
          ref={textRef}
          className="mt-4 text-lg">
          Discover the most advanced technology ever created.
        </p>
        <button
          ref={buttonRef}
          className="px-6 py-2 mt-8 text-white bg-blue-600 rounded-full hover:bg-blue-700 hero-button">
          Learn More
        </button>
      </div>
    </section>
  );
}
