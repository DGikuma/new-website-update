import React from "react";
import ProductTemplate from "../components/ProductTemplate";
import { Users2 } from "lucide-react";

export default function Page() {
    return (
        <ProductTemplate
            title="BodaBoda Welfare Cover"
            heroKicker="Driver-first Protection"
            heroTagline="Affordable, practical cover built for boda drivers — accident benefits, hospital support and income protection."
            heroImage="/images/bodaboda.jpg"
            overview={{
                heading: "Designed for boda boda operators",
                paragraphs: [
                    "A practical welfare product tailored to the needs of motorcycle taxi operators: quick claims, hospital cash and funeral support.",
                ],
            }}
            benefits={[
                { title: "Accident medical benefits", desc: "Immediate hospitalization support and cash for recovery." },
                { title: "Income replacement", desc: "Short-term weekly payment while recovering." },
                { title: "Funeral support", desc: "Last expense benefit for driver’s beneficiaries." },
            ]}
            coverages={[
                { heading: "Core benefits", paragraphs: ["Accident medical, temporary disability, funeral cover and optional legal assistance."] },
            ]}
            eligibility={{
                heading: "Membership",
                paragraphs: ["Open to licensed boda operators with a valid driver’s permit; group rates available through sacco or unions."],
            }}
            claims={{
                heading: "Claims process for riders",
                paragraphs: ["Contact our boda desk, provide incident & medical reports. Fast-track claim lanes for members registered with partner groups."],
            }}
            faqs={[
                { q: "Is gear cover included?", a: "Protective equipment cover is available as an add-on on selected plans." },
            ]}
            cta={{ label: "Join the Welfare Scheme", href: "/Products/bodaboda-welfare/enroll" }}
            ctaSecondary={{ label: "Member Benefits", href: "/Products/bodaboda-welfare/benefits" }}
        />
    );
}
