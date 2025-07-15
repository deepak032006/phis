import { Metadata } from "next";
import TeamSection from "./TeamSection";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata: Metadata ={
    title : "About Us"
}

export default function About(){
    return(
        <div>
            <TeamSection/>
        </div>
    )
}