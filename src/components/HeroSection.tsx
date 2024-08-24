"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) {
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
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center h-screen text-center text-white overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-background.jpg')" }}></div>
      <div className="relative z-10 max-w-xl">
        <h1 className="text-5xl font-bold">Experience the Future Today</h1>
        <p className="mt-4 text-lg">
          Discover the most advanced technology ever created.
        </p>
        <button className="px-6 py-2 mt-8 text-white bg-blue-600 rounded-full hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </section>
  );
}
