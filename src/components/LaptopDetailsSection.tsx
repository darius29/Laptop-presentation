"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function LaptopDetailsSection() {
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (detailsRef.current) {
      const sections = detailsRef.current.querySelectorAll(".detail-section");

      sections.forEach((section, index) => {
        const image = section.querySelector("img");

        // Efect de slide pentru imagini
        gsap.fromTo(
          image,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animație pentru secțiuni
        gsap.fromTo(
          section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      ref={detailsRef}
      id="laptop-details"
      className="relative py-20 overflow-hidden text-gray-800 bg-white">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center">
          ASUS ROG GV601RW-M5047W - The Ultimate Gaming Experience
        </h2>
        <div className="space-y-24">
          <div className="flex flex-col items-center detail-section md:flex-row">
            <div className="order-2 md:w-1/3 md:order-1">
              <Image
                src="/images/gallery1.jpg"
                alt="ASUS ROG Laptop"
                width={150}
                height={100}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 text-center md:w-2/3 md:pl-12 md:order-2 md:text-left">
              <h3 className="mb-4 text-2xl font-semibold">
                Stunning QHD Display
              </h3>
              <p className="text-lg leading-relaxed">
                Enjoy a 16-inch display with a QHD resolution and 165Hz refresh
                rate, perfect for gaming and multimedia. The vibrant colors and
                sharp details enhance your visual experience, making every game
                and movie come to life.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center detail-section md:flex-row">
            <div className="text-center md:w-2/3 md:pr-12 md:text-right">
              <h3 className="mb-4 text-2xl font-semibold">
                Powerful Performance
              </h3>
              <p className="text-lg leading-relaxed">
                Equipped with an AMD Ryzen 9 processor, NVIDIA GeForce RTX 3070
                Ti, and 32GB RAM, this laptop delivers exceptional performance.
                Whether gaming or working on intensive tasks, it handles
                everything with ease.
              </p>
            </div>
            <div className="md:w-1/3">
              <Image
                src="/images/gallery2.jpg"
                alt="ASUS ROG Performance"
                width={150}
                height={100}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col items-center detail-section md:flex-row">
            <div className="order-2 md:w-1/3 md:order-1">
              <Image
                src="/images/gallery3.jpg"
                alt="ASUS ROG Cooling System"
                width={150}
                height={100}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 text-center md:w-2/3 md:pl-12 md:order-2 md:text-left">
              <h3 className="mb-4 text-2xl font-semibold">
                Advanced Cooling System
              </h3>
              <p className="text-lg leading-relaxed">
                Stay cool under pressure with a highly efficient cooling system,
                ensuring optimal performance during intense gaming sessions.
                Keep your components cool and your game on fire.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center detail-section md:flex-row">
            <div className="text-center md:w-2/3 md:pr-12 md:text-right">
              <h3 className="mb-4 text-2xl font-semibold">
                Next-Gen Connectivity
              </h3>
              <p className="text-lg leading-relaxed">
                Features a full suite of ports and next-gen connectivity
                options, making it perfect for gamers and professionals alike.
                Stay connected and never miss a beat with ultra-fast data
                transfer speeds.
              </p>
            </div>
            <div className="md:w-1/3">
              <Image
                src="/images/gallery4.jpg"
                alt="ASUS ROG Connectivity"
                width={150}
                height={100}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
