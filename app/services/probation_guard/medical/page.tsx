import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function ProbationMedicalPage() {
    return (
        <ServicePageTemplate
            title="Medical & Injury Cover"
            subtitle="Protecting Health During Employment"
            description="Our Probation Medical & Injury Cover provides comprehensive healthcare and injury protection for individuals during probation or new employment periods."
            features={[
                "Medical and hospitalization coverage",
                "Accident and injury benefits",
                "Access to approved healthcare providers",
                "Fast claims and support",
                "Customizable coverage for individuals and corporate teams"
            ]}
            imageSrc="/images/probation-medical.jpg"
            ctaText="Enroll in Medical & Injury Cover"
            ctaHref="/contact"
        />
    );
}
