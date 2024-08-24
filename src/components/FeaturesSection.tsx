"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current.querySelectorAll(".feature-item"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="features"
      ref={featuresRef}
      className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-item p-6 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/feature1.jpg"
              alt="Feature 1"
              width={500}
              height={300}
              layout="responsive"
              className="rounded"
            />
            <h3 className="text-2xl font-bold mt-4">Long Battery Life</h3>
            <p className="mt-2 text-gray-700">
              Work for hours without needing to recharge.
            </p>
          </div>
          <div className="feature-item p-6 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/feature2.jpg"
              alt="Feature 2"
              width={500}
              height={300}
              layout="responsive"
              className="rounded"
            />
            <h3 className="text-2xl font-bold mt-4">High-Resolution Display</h3>
            <p className="mt-2 text-gray-700">
              Experience vibrant colors and sharp details.
            </p>
          </div>
          <div className="feature-item p-6 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/feature3.jpg"
              alt="Feature 3"
              width={500}
              height={300}
              layout="responsive"
              className="rounded"
            />
            <h3 className="text-2xl font-bold mt-4">Sleek and Portable</h3>
            <p className="mt-2 text-gray-700">
              Take your laptop anywhere with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
