"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.querySelectorAll("h3, p"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          stagger: 0.3, // Apare pe rând
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    if (videoContainerRef.current) {
      gsap.fromTo(
        videoContainerRef.current.querySelector("iframe"),
        { scale: 0.8, opacity: 0.7 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: videoContainerRef.current,
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
      id="video"
      className="relative py-20 overflow-hidden text-center bg-gradient-to-r from-gray-200 via-white to-gray-200">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover opacity-10"
        style={{ backgroundImage: "url('/images/video-bg.jpg')" }}></div>
      <div className="container relative z-10 px-6 mx-auto">
        <h2 className="sticky top-0 z-10 py-4 mb-10 text-4xl font-bold">
          Watch the Laptop in Action
        </h2>

        <div className="flex flex-col items-center justify-between mt-10 space-y-10 md:flex-row md:space-y-0">
          <div
            ref={textRef}
            className="mb-10 space-y-6 text-left md:w-1/2 md:mb-0">
            <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 hover:text-blue-600">
              Discover the Power of Our Laptop
            </h3>
            <p className="mb-6 text-lg text-gray-700 transition-colors duration-300 hover:text-gray-900">
              Explore the latest features and advancements in technology with
              our new laptop model. Experience exceptional performance and
              stunning visuals designed to enhance your productivity.
            </p>
            <p className="text-lg text-gray-700 transition-colors duration-300 hover:text-gray-900">
              Watch the video to see the laptop in action and understand why
              it&apos;s the best choice for professionals and gamers alike.
            </p>
          </div>
          <div
            ref={videoContainerRef}
            className="flex items-center justify-center md:w-1/2">
            <div
              className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg hover:shadow-2xl"
              style={{ paddingTop: "56.25%", width: "80%", maxWidth: "600px" }}>
              <iframe
                src="https://www.youtube.com/embed/x1Qx890x3iI?si=tyWTyK_gn78SVWq8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 rounded-lg hover:scale-105"></iframe>
              <div className="absolute inset-0 bg-black rounded-lg bg-opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
