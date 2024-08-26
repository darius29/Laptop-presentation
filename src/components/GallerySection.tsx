"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      // Efect de parallax pe întreaga secțiune
      gsap.to(galleryRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Animația la hover pentru fiecare imagine din swiper
      galleryRef.current
        .querySelectorAll(".mySwiper-image")
        .forEach((image) => {
          image.addEventListener("mouseenter", () => {
            gsap.to(image, {
              scale: 1.05,
              duration: 0.3,
            });
          });

          image.addEventListener("mouseleave", () => {
            gsap.to(image, {
              scale: 1,
              duration: 0.3,
            });
          });
        });
    }
  }, []);

  return (
    <section
      id="gallery"
      ref={galleryRef}
      className="relative py-20 overflow-hidden bg-white">
      <div className="container px-6 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center">Gallery</h2>
        <div className="overflow-hidden rounded-lg">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="mySwiper"
            style={{
              borderRadius: "15px",
              overflow: "hidden",
            }}>
            <SwiperSlide>
              <div className="relative w-full h-96">
                <Image
                  src="/images/gallery1.jpg"
                  alt="Gallery Image 1"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg mySwiper-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-96">
                <Image
                  src="/images/gallery2.jpg"
                  alt="Gallery Image 2"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg mySwiper-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-96">
                <Image
                  src="/images/gallery3.jpg"
                  alt="Gallery Image 3"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg mySwiper-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-96">
                <Image
                  src="/images/gallery4.jpg"
                  alt="Gallery Image 4"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg mySwiper-image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
