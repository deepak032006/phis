
import FaqSection from "./FaqSection";
import PricingSection from "./PricingSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title : 'Pricing'
}
 
export default function PricingPage(){
    return(
        <>
        <PricingSection/>
        <FaqSection/>
        </>
    )
}