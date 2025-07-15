import { Metadata } from "next";
import AwarenessContent from "./AwarenessContent";
import CTASection from "./CTASection";
import KeyFeatures from "./KeyFeatures";

export const metadata: Metadata = {
title : "SMS Phishing"
}

export default function SMSPhishingPage() {
    return (
        <>
            <CTASection />
            <AwarenessContent />
            <KeyFeatures />
        </>
    );
}
