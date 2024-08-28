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
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "50%", // Center vertically
              left: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#000",
              color: "#fff",
              fontWeight: 700,
              fontSize: "300px",
              fontFamily: "sans-serif",
              mixBlendMode: "multiply",
              userSelect: "none",
              transform: "translateY(-50%)", // Center text vertically with transform
            }}>
            ROGFLOW
          </h1>
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              opacity: 1,
              objectFit: "cover",
            }}>
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
