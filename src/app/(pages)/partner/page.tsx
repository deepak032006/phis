import { Metadata } from "next";
import FaqSection from "./FaqSection";
import PartnerWithUsSection from "./PartnerWithUsSection";
import PartnerFeatures from "./PartnerFeatures";

export const metadata: Metadata = {
    title: 'Partner with phish defense'
}

export default function Partner() {
    return (
        <div>
            <PartnerWithUsSection />
            <PartnerFeatures />
            <FaqSection/>
        </div>
    )
}