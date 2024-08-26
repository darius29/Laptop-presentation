"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [flipped, setFlipped] = useState<number | null>(null);

  useEffect(() => {
    if (featuresRef.current && titleRef.current) {
      const items = featuresRef.current.querySelectorAll(".feature-item");

      // Efect de parallax pe întreaga secțiune
      gsap.to(featuresRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Animații pentru fiecare element - Zoom și Smooth Flip
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            rotateY: 90,
            scale: 0.8,
          },
          {
            opacity: 1,
            rotateY: 0, // Se rotește în poziția normală
            scale: 1, // Revine la mărimea normală
            duration: 1.5, // Durată mai lungă pentru o mișcare mai lină
            ease: "power2.out", // Easing mai smooth
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "center center", // Se termină când titlul ajunge la jumătatea ecranului
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animația pentru titlu - rămâne vizibil, dar ușor mișcat
      gsap.to(titleRef.current, {
        yPercent: -20,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top top",
          end: "top+=100 center",
          scrub: true,
        },
      });
    }
  }, []);

  const handleCardClick = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section
      ref={featuresRef}
      id="features"
      className="relative py-20 overflow-hidden bg-gray-100">
      <div className="container px-6 mx-auto">
        <h2
          ref={titleRef}
          className="mb-16 text-4xl font-bold text-center">
          Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className={`p-6 bg-white rounded-lg shadow-lg feature-item transform transition-transform duration-500 relative cursor-pointer ${
                flipped === index ? "flipped" : ""
              }`}
              onClick={() => handleCardClick(index)}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
                width: "100%",
                height: "400px",
              }}>
              <div
                className="absolute inset-0 front backface-hidden"
                style={{
                  transform:
                    flipped === index ? "rotateY(180deg)" : "rotateY(0deg)",
                  backfaceVisibility: "hidden",
                  transition:
                    "transform 1s ease-in-out, opacity 1s ease-in-out", // Animație mult mai smooth
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                  backgroundColor: "#fff",
                  opacity: flipped === index ? 0 : 1, // Efect de fading la flip
                }}>
                <div className="relative w-full overflow-hidden rounded-lg">
                  <Image
                    src={`/images/feature${item}.jpg`}
                    alt={`Feature ${item}`}
                    width={350}
                    height={250}
                    layout="responsive"
                    className="transition-transform duration-500 transform rounded hover:scale-105" // Efect de hover pentru imagine
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <h3 className="mt-4 text-2xl font-bold">
                  {item === 1
                    ? "Long Battery Life"
                    : item === 2
                    ? "High-Resolution Display"
                    : "Sleek and Portable"}
                </h3>
                <p className="mt-2 text-center text-gray-700">
                  {item === 1
                    ? "Work for hours without needing to recharge."
                    : item === 2
                    ? "Experience vibrant colors and sharp details."
                    : "Take your laptop anywhere with ease."}
                </p>
              </div>
              <div
                className="absolute inset-0 back backface-hidden"
                style={{
                  transform:
                    flipped === index ? "rotateY(0deg)" : "rotateY(-180deg)",
                  backfaceVisibility: "hidden",
                  transition:
                    "transform 1s ease-in-out, opacity 1s ease-in-out",
                  backgroundColor: "#f9f9f9",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  opacity: flipped === index ? 1 : 0, // Efect de fading la flip
                }}>
                <h3 className="text-2xl font-bold">
                  {item === 1
                    ? "Extended Battery Life"
                    : item === 2
                    ? "Crystal Clear Display"
                    : "Ultimate Portability"}
                </h3>
                <p className="mt-2 text-gray-700">
                  {item === 1
                    ? "Get up to 20 hours of battery life with a single charge."
                    : item === 2
                    ? "Stunning 4K display with vibrant colors and sharp details."
                    : "Ultra-light and durable design for ultimate portability."}
                </p>
                <p className="mt-4 text-gray-500">
                  {item === 1
                    ? "Perfect for long work sessions or travel."
                    : item === 2
                    ? "Ideal for professionals and content creators."
                    : "Take it with you anywhere without the extra weight."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
