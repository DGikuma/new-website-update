import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function CorporateMedicalPage() {
    return (
        <ServicePageTemplate
            title="Corporate & SME Plans"
            subtitle="Health Insurance for Businesses and Employees"
            description="Provide your employees with comprehensive health benefits through our Corporate & SME Medical Plans, designed to boost productivity and safeguard workforce wellness."
            features={[
                "Tailored plans for SMEs and large corporations",
                "Employee wellness and preventive programs",
                "Flexible coverage options and network hospitals",
                "Simplified claims management for HR teams",
                "24/7 dedicated corporate support"
            ]}
            imageSrc="/images/medical-corporate.jpg"
            ctaText="Enroll Your Employees"
            ctaHref="/contact"
        />
    );
}
