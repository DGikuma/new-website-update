import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function FuneralExpensePage() {
    return (
        <ServicePageTemplate
            title="Funeral Expense Cover"
            subtitle="Financial Peace of Mind for Your Family"
            description="Our Funeral Expense Cover ensures that your loved ones are supported financially during difficult times, covering all funeral-related expenses."
            features={[
                "Comprehensive funeral cost coverage",
                "Assistance with funeral arrangements",
                "24/7 family support hotline",
                "Flexible individual and corporate plans",
                "Fast claim processing"
            ]}
            imageSrc="/images/last-expense-funeral.jpg"
            ctaText="Get Funeral Cover"
            ctaHref="/contact"
        />
    );
}
