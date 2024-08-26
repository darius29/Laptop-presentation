import { useEffect } from "react";
import gsap from "gsap";

export default function LightningCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "lightning-cursor";
    document.body.appendChild(cursor);

    const lightningEffect = document.createElement("div");
    lightningEffect.className = "lightning-effect";
    cursor.appendChild(lightningEffect);

    const updateCursorPosition = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.fromTo(
        lightningEffect,
        { scale: 0, opacity: 1 },
        { scale: 1.5, opacity: 0, duration: 0.5, ease: "power2.out" }
      );
    };

    const handleMouseEnter = () => {
      cursor.style.display = "block";
    };

    const handleMouseLeave = () => {
      cursor.style.display = "none";
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
}
