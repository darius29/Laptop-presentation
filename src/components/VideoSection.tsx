"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: videoRef.current,
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
      ref={videoRef}
      className="py-20 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Watch the Laptop in Action</h2>
        <div
          className="relative overflow-hidden"
          style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/x1Qx890x3iI?si=tyWTyK_gn78SVWq8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"></iframe>
        </div>
      </div>
    </section>
  );
}
