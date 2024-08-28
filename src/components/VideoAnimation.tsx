"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const video = videoRef.current;

    if (!container || !text || !video) return;

    // Text animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true, // Synchronize with scroll speed
        pin: true,
      },
    });

    // Set initial state for text
    gsap.set(text, { scale: 300, opacity: 1, yPercent: -50 });

    // Animate text scale down on scroll
    tl.to(text, {
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
    });

    // Play video initially
    video.play();

    // ScrollTrigger for video playback control
    ScrollTrigger.create({
      trigger: container,
      start: "top top", // Start video playback immediately
      onEnter: () => video.play(), // Ensure video plays when entering the trigger point
      onLeaveBack: () => video.play(), // Pause video when scrolling back up
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden ">
      <div className="h-[1000px] w-screen">
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden bg-black">
          <h1
            ref={textRef}
            className="absolute left-0 flex items-center justify-center w-full h-full font-bold text-white transform -translate-y-1/2 bg-black top-1/2 mix-blend-multiply user-select-none"
            style={{
              fontSize: "300px",
              fontFamily: "sans-serif",
            }}>
            ROGFLOW
          </h1>
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="object-cover w-full h-full opacity-100">
            <source
              src="/images/rog_flow.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="h-[980px] bg-white"></div>
    </div>
  );
};

export default VideoAnimation;
