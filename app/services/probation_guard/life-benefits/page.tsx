// /app/services/probation/life-benefits/page.tsx
import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function ProbationLifeBenefitsPage() {
    return (
        <ServicePageTemplate
            title="Life & Accident Benefits"
            subtitle="Comprehensive Protection for Employees"
            description="Our Life & Accident Benefits plan offers financial security for employees on probation, covering accidental death, disability, and life insurance benefits."
            features={[
                "Accidental death and disability coverage",
                "Life insurance protection",
                "Emergency medical support",
                "Fast claims and family assistance",
                "Flexible individual or corporate packages"
            ]}
            imageSrc="/images/probation-life.jpg"
            ctaText="Get Life & Accident Benefits"
            ctaHref="/contact"
        />
    );
}
