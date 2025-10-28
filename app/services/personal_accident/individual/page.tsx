import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function IndividualAccidentPage() {
    return (
        <ServicePageTemplate
            title="Individual Accident Cover"
            subtitle="Protection Against Unexpected Life Events"
            description="Our Individual Accident Cover ensures you are financially protected against unforeseen accidents, providing cash benefits for injuries, hospitalization, or permanent disability."
            features={[
                "Coverage for accidental injuries and disability",
                "Daily cash benefits during recovery",
                "Worldwide accident coverage",
                "Fast and hassle-free claims process",
                "Optional add-ons for critical injuries"
            ]}
            imageSrc="/images/accident-individual.jpg"
            ctaText="Get Individual Cover"
            ctaHref="/contact"
        />
    );
}
