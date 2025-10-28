import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function FishermenPage() {
    return (
        <ServicePageTemplate
            title="Fishermen Welfare Cover"
            subtitle="Protecting Fishermen on the Water"
            description="Our Fishermen Welfare Cover ensures that fishermen have access to medical, accident, and emergency support while working on lakes, rivers, or coastal waters."
            features={[
                "Medical coverage for fishermen",
                "Accident and injury protection",
                "Emergency response and rescue support",
                "Affordable individual and group plans",
                "Quick claim processing on-site or remotely"
            ]}
            imageSrc="/images/aquabima-fishermen.jpg"
            ctaText="Enroll in Fishermen Cover"
            ctaHref="/contact"
        />
    );
}
