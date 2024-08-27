"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./VideoAnimation.module.css";

gsap.registerPlugin(ScrollTrigger);

const VideoAnimation = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && textRef.current && maskRef.current) {
      // Set initial state for the text
      gsap.set(textRef.current, { scale: 8, opacity: 1 });

      // Pin and scrub the container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        onEnter: () => gsap.to(textRef.current, { scale: 8, opacity: 1 }), // Ensure text is large and visible on enter
        onLeaveBack: () => gsap.to(textRef.current, { scale: 8, opacity: 1 }), // Reset to large size when scrolling back up
      });

      // Animate the text scaling and fading out
      gsap.fromTo(
        textRef.current,
        { scale: 8, opacity: 1 },
        {
          scale: 1,
          opacity: 0, // Fade out the text
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Animate the mask effect
      gsap.to(maskRef.current, {
        webkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        webkitMaskPosition: "center",
        maskPosition: "center",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.videoContainer}>
      <video
        autoPlay
        loop
        muted
        className={styles.video}>
        <source
          src="/images/rog_flow.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div
        className={styles.textMask}
        ref={maskRef}>
        <div
          ref={textRef}
          className={styles.maskedText}>
          ROGFLOW
        </div>
      </div>
    </div>
  );
};

export default VideoAnimation;
