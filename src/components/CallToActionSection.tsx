"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CallToActionSection() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    if (buttonRef.current) {
      buttonRef.current.addEventListener("mouseenter", () => {
        gsap.to(buttonRef.current, { scale: 1.1, duration: 0.3 });
      });
      buttonRef.current.addEventListener("mouseleave", () => {
        gsap.to(buttonRef.current, { scale: 1, duration: 0.3 });
      });
    }
  }, []);

  return (
    <section
      id="cta"
      ref={ctaRef}
      className="py-20 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Get Your Laptop Today</h2>
        <p className="text-xl mb-8">
          Don&apos;t miss out on the latest technology.
        </p>
        <button
          ref={buttonRef}
          className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100">
          Buy Now
        </button>
      </div>
    </section>
  );
}
