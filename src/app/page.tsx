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

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <GallerySection />
      <FeaturesSection />
      <LaptopDetailsSection />
      <VideoAnimation />
      <PerformanceSection />
      {/* <VideoSection /> */}
      <CallToActionSection />
      <FooterSection />
    </>
  );
}
