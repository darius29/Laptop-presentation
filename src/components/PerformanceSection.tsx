"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceSection() {
  const performanceRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (performanceRef.current && titleRef.current) {
      const items =
        performanceRef.current.querySelectorAll(".performance-item");

      const titleHeight = titleRef.current.clientHeight;

      const start = "top 80%";
      const end = `top+=${titleHeight} top`;

      gsap.fromTo(
        items,
        { opacity: 0, x: (index) => (index % 2 === 0 ? -100 : 100), y: 100 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          stagger: 0.4,
          scrollTrigger: {
            trigger: performanceRef.current,
            start: start,
            end: end,
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const openModal = (index: number) => {
    setSelectedItem(index);
    setModalVisible(true);
    gsap.fromTo(
      modalRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
    );
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => {
        setModalVisible(false);
        setSelectedItem(null);
      },
    });
  };

  const modalContent = selectedItem !== null && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <button
          onClick={closeModal}
          className="absolute text-2xl font-bold text-gray-600 top-2 right-2 hover:text-gray-900">
          &#x2715;
        </button>
        <h3 className="mb-4 text-3xl font-bold">
          {selectedItem === 0 ? "Blazing Fast CPU" : "Powerful GPU"}
        </h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          {selectedItem === 0
            ? "The latest generation CPU ensures blazing fast speeds and unparalleled performance for all your tasks."
            : "Experience the next level of graphics performance with the latest GPU, perfect for gaming and professional work."}
        </p>
        <Image
          src={`/images/${selectedItem === 0 ? "cpu" : "gpu"}.jpg`}
          alt={selectedItem === 0 ? "CPU" : "GPU"}
          width={800}
          height={400}
          layout="responsive"
          className="mb-4 rounded"
        />
        <p className="leading-relaxed text-gray-500">
          {selectedItem === 0
            ? "Whether you&apos;re rendering high-resolution videos, running complex simulations, or simply multitasking, the CPU delivers a seamless experience. It is designed to handle the most demanding tasks with ease, ensuring you stay productive no matter what."
            : "Render complex graphics, enjoy ultra-smooth gaming, and handle demanding visual tasks effortlessly with the latest GPU technology. Perfect for both casual gamers and professional content creators who demand the best performance."}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {modalVisible && modalContent}
      <section
        id="performance"
        ref={performanceRef}
        className="relative py-20 overflow-hidden bg-white">
        <div className="container px-6 mx-auto">
          <h2
            ref={titleRef}
            className="mb-10 text-4xl font-bold text-center">
            Performance
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div
              className="p-6 text-center transition-transform duration-300 transform bg-gray-100 rounded-lg shadow-lg cursor-pointer performance-item"
              onClick={() => openModal(0)}>
              <Image
                src="/images/cpu.jpg"
                alt="CPU"
                width={500}
                height={300}
                layout="responsive"
                className="rounded"
              />
              <h3 className="mt-4 text-2xl font-bold">Blazing Fast CPU</h3>
              <p className="mt-2 text-gray-700">
                Experience unmatched processing power.
              </p>
            </div>
            <div
              className="p-6 text-center transition-transform duration-300 transform bg-gray-100 rounded-lg shadow-lg cursor-pointer performance-item"
              onClick={() => openModal(1)}>
              <Image
                src="/images/gpu.jpg"
                alt="GPU"
                width={500}
                height={300}
                layout="responsive"
                className="rounded"
              />
              <h3 className="mt-4 text-2xl font-bold">Powerful GPU</h3>
              <p className="mt-2 text-gray-700">
                Graphics performance like never before.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
