import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function RiderFuneralPage() {
    return (
        <ServicePageTemplate
            title="Funeral & Repatriation"
            subtitle="Dignified Support for Riders’ Families"
            description="Provide financial support to BodaBoda riders’ families in the event of death, including funeral arrangements and repatriation services."
            features={[
                "Funeral expense coverage",
                "Repatriation of remains",
                "Support for family members",
                "Quick claim processing",
                "Corporate and individual options"
            ]}
            imageSrc="/images/bodaboda-funeral.jpg"
            ctaText="Get Funeral & Repatriation Cover"
            ctaHref="/contact"
        />
    );
}
