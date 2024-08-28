import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import PerformanceSection from "../components/PerformanceSection";
import GallerySection from "../components/GallerySection";
import VideoSection from "../components/VideoSection";
import CallToActionSection from "../components/CallToActionSection";
import FooterSection from "../components/FooterSection";
import Header from "@/components/Header";
import LaptopDetailsSection from "@/components/LaptopDetailsSection";
import VideoAnimation from "@/components/VideoAnimation";
import VideoTextMobile from "@/components/VideoTextMobile";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <GallerySection />
      <FeaturesSection />
      <LaptopDetailsSection />
      {/* Afișează VideoAnimation pe desktop și ascunde pe mobile */}
      <div className="hidden lg:flex">
        <VideoAnimation />
      </div>

      {/* Afișează VideoTextMobile pe mobile și ascunde pe desktop */}
      <div className="block lg:hidden">
        <VideoTextMobile />
      </div>
      <PerformanceSection />
      {/* <VideoSection /> */}
      <CallToActionSection />
      <FooterSection />
    </>
  );
}
