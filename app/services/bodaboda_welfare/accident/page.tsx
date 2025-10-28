import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function RiderAccidentPage() {
    return (
        <ServicePageTemplate
            title="Accident & Injury Cover"
            subtitle="Safety Net for Riders on the Road"
            description="Our Accident & Injury Cover protects BodaBoda riders against financial loss resulting from accidents, providing compensation for injuries and hospitalization."
            features={[
                "Accidental injury compensation",
                "Medical and hospital cash benefits",
                "Coverage for permanent disability",
                "Fast claims and emergency support",
                "Affordable individual and group options"
            ]}
            imageSrc="/images/bodaboda-accident.jpg"
            ctaText="Enroll in Accident Cover"
            ctaHref="/contact"
        />
    );
}
