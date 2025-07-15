import { Metadata } from "next";
import AwarenessContent from "./AwarenessContent";
import CTASection from "./CTASection";
import FaqSection from "./FaqSection";
import KeyFeatures from "./KeyFeatures";

export const metadata: Metadata = {
title : "Whatsapp Phishing"
}

export default function WhatsappPhishingPage() {
  return (
  <>
  <CTASection/>
  <AwarenessContent/>
  <KeyFeatures/>
  <FaqSection/>
  </>
  );
}
