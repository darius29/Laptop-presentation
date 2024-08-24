"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceSection() {
  const performanceRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      performanceRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: performanceRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="performance"
      ref={performanceRef}
      className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <img
              src="/images/cpu.jpg"
              alt="CPU"
              className="w-full h-64 object-cover rounded"
            />
            <h3 className="text-2xl font-bold mt-4">Blazing Fast CPU</h3>
            <p className="mt-2 text-gray-700">
              Experience unmatched processing power.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/gpu.jpg"
              alt="GPU"
              className="w-full h-64 object-cover rounded"
            />
            <h3 className="text-2xl font-bold mt-4">Powerful GPU</h3>
            <p className="mt-2 text-gray-700">
              Graphics performance like never before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
