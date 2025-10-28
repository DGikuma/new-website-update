"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductTemplate from "../components/ProductTemplate";
import { Airplay, Globe2 } from "lucide-react";

// Animation variants for scroll-in effects
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Page() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="overflow-hidden"
        >
            <ProductTemplate
                title="Evacuation & Repatriation"
                heroKicker="Crisis & Travel Support"
                heroTagline="Rapid medical evacuation and dignified repatriation worldwide — when time matters most."
                heroImage="/images/evacuation-hero.jpg"
                heroClassName="bg-gradient-to-r from-primary/70 via-red-500/60 to-orange-400/70 text-white"
                overview={{
                    heading: "Critical transport when ordinary options aren’t enough",
                    paragraphs: [
                        "Our Evacuation & Repatriation product coordinates medical transport, arranging flights, medical teams, and receiving family support. We cover both emergency air ambulance and dignified repatriation for eligible events.",
                        "We partner with accredited medical evacuation providers globally so you receive immediate, professional care and safe transport home or to specialized facilities.",
                    ],
                }}
                benefits={[
                    {
                        title: "24/7 Global Response",
                        desc: "Dedicated emergency desk available around the clock to coordinate evacuations.",
                        icon: (
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Globe2 className="w-6 h-6 text-primary" />
                            </motion.div>
                        ),
                        cardWrapper: (children: React.ReactNode) => (
                            <motion.div
                                variants={fadeInUp}
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-primary/10 to-blue-100 hover:from-primary/20 hover:to-blue-200 transition-all shadow-md rounded-xl"
                            >
                                {children}
                            </motion.div>
                        ),
                    },
                    {
                        title: "Full Medical Escort",
                        desc: "Critical care nurses or physicians accompany you during transfers when required.",
                        icon: (
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ scale: 1.15, rotate: -5 }}
                            >
                                <Airplay className="w-6 h-6 text-danger" />
                            </motion.div>
                        ),
                        cardWrapper: (children: React.ReactNode) => (
                            <motion.div
                                variants={fadeInUp}
                                className="bg-gradient-to-br from-danger/10 to-red-100 hover:from-danger/20 hover:to-red-200 transition-all shadow-md rounded-xl"
                            >
                                {children}
                            </motion.div>
                        ),
                    },
                    {
                        title: "Family Repatriation Support",
                        desc: "We assist with travel and accommodation for immediate family when repatriation is needed.",
                        icon: (
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ scale: 1.15 }}
                            >
                                <Airplay className="w-6 h-6 text-amber-500" />
                            </motion.div>
                        ),
                        cardWrapper: (children: React.ReactNode) => (
                            <motion.div
                                variants={fadeInUp}
                                className="bg-gradient-to-br from-amber-50 to-yellow-100 hover:from-amber-100 hover:to-yellow-200 transition-all shadow-md rounded-xl"
                            >
                                {children}
                            </motion.div>
                        ),
                    },
                ]}
                coverages={[
                    {
                        heading: "What’s covered",
                        paragraphs: [
                            "Emergency air ambulance transport to the nearest appropriate facility or repatriation to home country when medically necessary.",
                        ],
                        bullets: [
                            "Air ambulance and stretcher flights",
                            "Ground ambulance & hospital transfers",
                            "Medical escort staff and ventilator support if needed",
                        ],
                        wrapper: (children: React.ReactNode) => (
                            <motion.div
                                variants={fadeInUp}
                                className="bg-gradient-to-br from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200 shadow-md rounded-xl transition-all"
                            >
                                {children}
                            </motion.div>
                        ),
                    },
                    {
                        heading: "Limits & conditions",
                        paragraphs: [
                            "Coverage depends on plan tier. Pre-existing conditions may have waiting periods — consult policy terms for specific exclusions.",
                        ],
                        wrapper: (children: React.ReactNode) => (
                            <motion.div
                                variants={fadeInUp}
                                className="bg-gradient-to-br from-gray-50 to-slate-100 hover:from-gray-100 hover:to-slate-200 shadow-md rounded-xl transition-all"
                            >
                                {children}
                            </motion.div>
                        ),
                    },
                ]}
                eligibility={{
                    heading: "Eligible members",
                    paragraphs: [
                        "Individuals and families with active Evacuation add-on in their policy. Corporate travellers can be covered under corporate packages.",
                    ],
                    bullets: [
                        "Active policy at time of incident",
                        "Coverage varies by plan tier",
                    ],
                    wrapper: (children: React.ReactNode) => (
                        <motion.div
                            variants={fadeInUp}
                            className="bg-gradient-to-br from-indigo-50 to-purple-100 hover:from-indigo-100 hover:to-purple-200 transition-all shadow-md rounded-xl"
                        >
                            {children}
                        </motion.div>
                    ),
                }}
                claims={{
                    heading: "How to file an evacuation claim",
                    paragraphs: [
                        "Contact our emergency desk immediately via the number on your policy card. Our team will coordinate logistics and file required documentation on your behalf.",
                    ],
                    bullets: [
                        "Call emergency desk (24/7)",
                        "Submit medical reports and incident forms",
                        "Claim handler will advise next steps",
                    ],
                    wrapper: (children: React.ReactNode) => (
                        <motion.div
                            variants={fadeInUp}
                            className="bg-gradient-to-br from-sky-50 to-cyan-100 hover:from-sky-100 hover:to-cyan-200 transition-all shadow-md rounded-xl"
                        >
                            {children}
                        </motion.div>
                    ),
                }}
                faqs={[
                    {
                        q: "Is evacuation covered for pre-existing conditions?",
                        a: "Pre-existing conditions may be excluded or require waiting periods — review your policy schedule or speak with our advisors.",
                    },
                    {
                        q: "How fast can an air ambulance be arranged?",
                        a: "We typically mobilize the nearest available resource within hours depending on location and medical needs.",
                    },
                ]}
                cta={{
                    label: "Request Emergency Assistance",
                    href: "/Contact/emergency",
                    className:
                        "bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/80 transition-all shadow-lg",
                }}
                ctaSecondary={{
                    label: "Get a Quote",
                    href: "/Products/evacuation-repatriation/quote",
                    className:
                        "bg-danger text-white px-6 py-3 rounded-xl font-semibold hover:bg-danger/80 transition-all shadow-lg",
                }}
                crossSell={[
                    {
                        title: "Medical Insurance",
                        href: "/Products/medical-insurance",
                        desc: "Comprehensive medical & hospital cover.",
                    },
                    {
                        title: "Travel Add-ons",
                        href: "/Products/travel-addons",
                        desc: "Trip cancellation and baggage protection.",
                    },
                ]}
            />
        </motion.div>
    );
}
