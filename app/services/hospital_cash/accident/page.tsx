import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function AccidentHospitalPage() {
    return (
        <ServicePageTemplate
            title="Accident Hospitalization"
            subtitle="Immediate Support for Accident-Related Hospital Stays"
            description="Accident Hospitalization cover ensures fast financial assistance for hospital stays resulting from accidents, helping you focus on recovery rather than costs."
            features={[
                "Coverage for accidental injuries requiring hospitalization",
                "Daily cash benefits during recovery",
                "Access to top hospitals and specialists",
                "Quick claim settlement",
                "Available for individuals, families, and corporate groups"
            ]}
            imageSrc="/images/hospital-accident.jpg"
            ctaText="Enroll in Accident Cover"
            ctaHref="/contact"
        />
    );
}
