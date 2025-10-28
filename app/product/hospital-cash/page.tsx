import React from "react";
import ProductTemplate from "../components/ProductTemplate";
import { HeartPulse } from "lucide-react";

export default function Page() {
    return (
        <ProductTemplate
            title="Hospital Cash"
            heroKicker="Daily Hospital Benefit"
            heroTagline="A simple daily cash payment while you’re admitted — helps with incidental costs not covered by medical insurance."
            heroImage="/images/hospital-cash.jpg"
            overview={{
                heading: "Cash support for hospital stays",
                paragraphs: [
                    "Hospital Cash provides a fixed daily benefit for each day of inpatient admission, helping cover travel, accommodation for family, and everyday expenses.",
                ],
            }}
            benefits={[
                { title: "Daily Benefit", desc: "Receive a fixed cash amount for every night you stay in hospital." },
                { title: "No receipts required", desc: "Cash is paid directly to the policyholder to use as needed." },
                { title: "Stackable", desc: "Can be used alongside medical insurance for more comprehensive protection." },
            ]}
            coverages={[
                { heading: "Core benefit", paragraphs: ["Daily cash payment per night of hospitalisation as per selected plan."] },
                { heading: "Add-ons", paragraphs: ["Optional surgical cash top-up and ICU multipliers available."] },
            ]}
            eligibility={{
                heading: "Who should choose this",
                paragraphs: ["Individuals who want a simple, low-cost buffer for incidental hospital costs and family support."],
            }}
            claims={{
                heading: "How to claim hospital cash",
                paragraphs: ["Submit admission & discharge summaries and hospital bill. Payments typically processed within 5–7 business days."],
            }}
            faqs={[
                { q: "Can I claim for pre-existing conditions?", a: "This depends on the plan; check the benefits schedule." },
            ]}
            cta={{ label: "Compare Plans", href: "/Products/hospital-cash/pricing" }}
            ctaSecondary={{ label: "Apply Now", href: "/Products/hospital-cash/apply" }}
        />
    );
}
