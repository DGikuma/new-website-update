import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function AirAmbulancePage() {
    return (
        <ServicePageTemplate
            title="Air Ambulance Support"
            subtitle="Advanced Life-Saving Air Transport"
            description="Our air ambulance service delivers immediate, safe, and medically equipped transport for critical emergencies, ensuring patients receive care en route to specialized facilities."
            features={[
                "Fully equipped aircraft with ICU facilities",
                "Certified medical team onboard",
                "Rapid deployment anywhere in the world",
                "Customized patient care protocols",
                "Seamless coordination with hospitals and emergency centers"
            ]}
            imageSrc="/images/evacuation-air-ambulance.jpg"
            ctaText="Book Air Ambulance"
            ctaHref="/contact"
        />
    );
}
