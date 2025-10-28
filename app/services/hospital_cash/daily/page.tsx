import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function DailyHospitalPage() {
    return (
        <ServicePageTemplate
            title="Daily Hospital Benefit"
            subtitle="Daily Cash Support During Hospitalization"
            description="Receive daily cash payouts to help cover hospital expenses, transportation, and daily needs during hospitalization. Our plan ensures financial relief when you need it most."
            features={[
                "Fixed daily cash benefits",
                "Coverage for in-patient hospital stays",
                "Supports recovery and medical expenses",
                "Simple claims with fast processing",
                "Available for individuals and families"
            ]}
            imageSrc="/images/hospital-daily.jpg"
            ctaText="Apply for Daily Benefit"
            ctaHref="/contact"
        />
    );
}
