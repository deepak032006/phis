import type { Metadata } from 'next';
import AwarenessContent from "./AwarenessContent";
import CTASection from "./CTASection";
import DetailedFeatures from "./Detailed-features";
import FaqSection from "./FaqSection";
import KeyFeatures from "./KeyFeatures";

export const metadata: Metadata = {
  title: 'Security Awareness: Mindful Training'
};

export default function AwarenessTrainingPage() {
  return (
    <>
      <CTASection />
      <DetailedFeatures />
      <AwarenessContent />
      <KeyFeatures />
      <FaqSection />
    </>
  );
}
