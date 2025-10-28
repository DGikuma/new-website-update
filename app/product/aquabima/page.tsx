import React from "react";
import ProductTemplate from "../components/ProductTemplate";
import { Globe2 } from "lucide-react";

export default function Page() {
    return (
        <ProductTemplate
            title="AQUABIMA Insurance"
            heroKicker="Fisherfolk & Water Communities"
            heroTagline="Insurance tailored for fishermen and coastal communities — accident cover, equipment loss and death benefits."
            heroImage="/images/aquabima.jpg"
            overview={{
                heading: "Protection for those who work on the water",
                paragraphs: [
                    "AQUABIMA offers practical, low-cost insurance for fishermen, helping cover accidental injury, loss of equipment and funeral support for families.",
                    "This product is built through community groups and cooperatives to keep premiums accessible and claims simple.",
                ],
            }}
            benefits={[
                { title: "Equipment protection", desc: "Cover for loss or damage to basic fishing equipment and small boats." },
                { title: "Accident & death benefits", desc: "Immediate cash support for injury and final expenses." },
                { title: "Community pricing", desc: "Group discounts for cooperatives and registered fishing groups." },
            ]}
            coverages={[
                { heading: "Core cover", paragraphs: ["Accidental injury, death benefit and equipment loss (subject to limits)."] },
            ]}
            eligibility={{
                heading: "Who can join",
                paragraphs: ["Small-scale fishermen, boat owners and registered members of community cooperatives."],
            }}
            claims={{
                heading: "Claim process",
                paragraphs: ["Report incidents within the stated timelines, submit witness statements and photos of lost equipment where possible."],
            }}
            faqs={[
                { q: "Are commercial fishing vessels included?", a: "This product targets small-scale artisanal fishermen; commercial fleet cover is available under bespoke marine policies." },
            ]}
            cta={{ label: "Enroll Your Crew", href: "/Products/aquabima/enroll" }}
            ctaSecondary={{ label: "Group Pricing", href: "/Products/aquabima/premiums" }}
        />
    );
}
