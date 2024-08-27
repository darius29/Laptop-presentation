import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import PerformanceSection from "../components/PerformanceSection";
import GallerySection from "../components/GallerySection";
import VideoSection from "../components/VideoSection";
import CallToActionSection from "../components/CallToActionSection";
import FooterSection from "../components/FooterSection";
import Header from "@/components/Header";
import LaptopDetailsSection from "@/components/LaptopDetailsSection";
// import VideoTextSection from "@/components/VideoTextSection";
import TextWithVideoAnimation from "@/components/TextWithVideoAnimation";
import Video from "@/components/TextWithVideoAnimation";
import VideoAnimation from "@/components/VideoAnimation";
// import { VideoTextSection } from "@/components/VideoTextSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <GallerySection />
      <FeaturesSection />
      <LaptopDetailsSection />
      {/* <Video /> */}
      <VideoAnimation />
      {/* <TextWithVideoAnimation /> */}
      {/* <VideoTextSection /> */}
      <PerformanceSection />
      {/* <VideoSection /> */}
      <CallToActionSection />
      <FooterSection />
    </>
  );
}
