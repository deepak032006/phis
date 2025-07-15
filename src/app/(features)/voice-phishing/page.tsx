import { Metadata } from "next";
import AwarenessContent from "./AwarenessContent";
import CTASection from "./CTASection";
import FaqSection from "./FaqSection";
import KeyFeatures from "./KeyFeatures";

export const metadata: Metadata = {
title : "Voice Phishing"
}

export default function VoicePhishingPage() {
    return (
        <>
            <CTASection/>
            <AwarenessContent />
            <KeyFeatures />
            <FaqSection />
        </>
    );
}
