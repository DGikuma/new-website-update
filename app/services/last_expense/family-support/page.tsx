// /app/services/last-expense/family-support/page.tsx
import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function FamilySupportPage() {
    return (
        <ServicePageTemplate
            title="Family Support Cover"
            subtitle="Caring for Your Loved Ones"
            description="Ensure your family’s welfare in unforeseen circumstances with our Family Support Cover, providing financial assistance for everyday needs and emergencies."
            features={[
                "Monthly or one-time support payouts",
                "Coverage for dependents",
                "Fast and transparent claims",
                "Flexible coverage for corporate groups",
                "Dedicated support team"
            ]}
            imageSrc="/images/last-expense-family.jpg"
            ctaText="Secure Family Support"
            ctaHref="/contact"
        />
    );
}
