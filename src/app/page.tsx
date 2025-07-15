import CounterStats from "@/components/(home-page)/CounterStats";
import FaqAccordion from "@/components/(home-page)/FaqAccordion";
import FeatureSection from "@/components/(home-page)/FeatureSection";
import HeroSection from "@/components/(home-page)/HeroSection";
import ServiceCards from "@/components/(home-page)/ServiceCards"
import TestimonialCarousel from "@/components/(home-page)/TestimonialCarousel";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ServiceCards />
      <CounterStats />
      <FaqAccordion />
      <TestimonialCarousel />
    </>
  )
}