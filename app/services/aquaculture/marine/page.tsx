import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function MarineAccidentPage() {
    return (
        <ServicePageTemplate
            title="Marine Accident Cover"
            subtitle="Safety on Water for Fishermen & Crews"
            description="Our Marine Accident Cover protects fishermen and marine workers against accidents on the water, including injuries, hospitalization, and emergency evacuation."
            features={[
                "Accident and injury protection",
                "Medical and hospitalization support",
                "Emergency evacuation services",
                "Financial assistance for families",
                "Flexible individual and group plans"
            ]}
            imageSrc="/images/aquabima-marine.jpg"
            ctaText="Get Marine Accident Cover"
            ctaHref="/contact"
        />
    );
}
