import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function TukTukDriverPassengerPage() {
    return (
        <ServicePageTemplate
            title="Driver & Passenger Cover"
            subtitle="Protecting Drivers and Passengers"
            description="Our TukTuk Welfare plan provides comprehensive coverage for both drivers and passengers, ensuring safety and financial protection in case of accidents or injuries."
            features={[
                "Accident and injury coverage for drivers and passengers",
                "Medical support during emergencies",
                "Fast claims and assistance",
                "Affordable premiums for individuals and fleets",
                "Optional add-ons for extended benefits"
            ]}
            imageSrc="/images/tuktuk-driver-passenger.jpg"
            ctaText="Enroll in Driver & Passenger Cover"
            ctaHref="/contact"
        />
    );
}
