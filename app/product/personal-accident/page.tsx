import React from "react";
import ProductTemplate from "../components/ProductTemplate";
import { Users2 } from "lucide-react";

export default function Page() {
    return (
        <ProductTemplate
            title="Personal Accident"
            heroKicker="Accidental Injury & Death"
            heroTagline="Lump-sum and weekly benefit payouts for accidental injury, permanent disability and accidental death."
            heroImage="/images/personal-accident.jpg"
            overview={{
                heading: "Financial protection following an accident",
                paragraphs: [
                    "Personal Accident cover offers immediate financial relief in the event of accidental death or disablement and supports recovery with weekly incapacity benefits.",
                ],
            }}
            benefits={[
                { title: "Accidental Death Benefit", desc: "Lump-sum payout to beneficiaries." },
                { title: "Permanent Disability", desc: "Pro-rated compensation for loss of limb or function." },
                { title: "Income Support", desc: "Weekly benefit for temporary total disablement." },
            ]}
            coverages={[
                {
                    heading: "Typical exclusions",
                    paragraphs: ["Self-inflicted injury, participating in unlawful acts, and some hazardous activities unless rider included."],
                },
            ]}
            eligibility={{
                heading: "Eligible applicants",
                paragraphs: ["Adults and certain occupational groups; riders available for high-risk professions."],
            }}
            claims={{
                heading: "How to claim",
                paragraphs: ["File an incident report, police report (if applicable), medical reports and employer statements for wage loss."],
            }}
            faqs={[
                { q: "Are motorcycle accidents covered?", a: "Yes for standard accidental coverage — specialised BodaBoda or TukTuk plans are recommended for professional riders." },
            ]}
            cta={{ label: "Get Accident Cover", href: "/Products/personal-accident/enroll" }}
            ctaSecondary={{ label: "Calculate Benefit", href: "/Products/personal-accident/calculator" }}
            crossSell={[{ title: "BodaBoda Welfare Cover", href: "/Products/bodaboda-welfare", desc: "Specialised rider plans for boda drivers." }]}
        />
    );
}
