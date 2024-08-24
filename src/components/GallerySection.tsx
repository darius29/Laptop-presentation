"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      gsap.fromTo(
        galleryRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: galleryRef.current,
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
      id="gallery"
      ref={galleryRef}
      className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Gallery</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          effect="fade"
          loop
          className="mySwiper">
          <SwiperSlide>
            <Image
              src="/images/gallery1.jpg"
              alt="Gallery Image 1"
              width={1200}
              height={600}
              layout="responsive"
              className="rounded mySwiper-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/gallery2.jpg"
              alt="Gallery Image 2"
              width={1200}
              height={600}
              layout="responsive"
              className="rounded mySwiper-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/gallery3.jpg"
              alt="Gallery Image 3"
              width={1200}
              height={600}
              layout="responsive"
              className="rounded mySwiper-image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
