import { Metadata } from "next";
import AwarenessContent from "./AwarenessContent";
import CTASection from "./CTASection";
import FaqSection from "./FaqSection";
import KeyFeatures from "./KeyFeatures";
import PhishingBenefits from "./PhishingBenefits";

export const metadata: Metadata = {
title : "Phishing Reporter Plugin: Swiftly Report Scams"
}

export default function PhishingReporterPage() {
    return (
        <>
            <CTASection />
            <AwarenessContent />
            <KeyFeatures />
            <PhishingBenefits />
            <FaqSection />
        </>
    );
}
