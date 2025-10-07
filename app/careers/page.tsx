"use client";

import { Card, CardHeader, CardBody, Button, Badge } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";

export default function CareersPage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
        }),
    };

    const reasons = [
        {
            title: "Empowering Culture",
            desc: "We nurture an inclusive environment that values every voice, idea, and contribution.",
            icon: "/icons/team.svg",
        },
        {
            title: "Career Growth",
            desc: "Advance your career with continuous learning, mentorship, and clear growth paths.",
            icon: "/icons/growth.svg",
        },
        {
            title: "Meaningful Work",
            desc: "Make an impact through work that matters — protecting and improving lives.",
            icon: "/icons/impact.svg",
        },
        {
            title: "Competitive Benefits",
            desc: "We provide industry-leading packages that reward your hard work and dedication.",
            icon: "/icons/benefits.svg",
        },
    ];

    const positions = [
        {
            title: "Senior Underwriter",
            location: "Nairobi, Kenya",
            type: "Full-time",
            summary:
                "Lead the underwriting process, ensuring accuracy and compliance while supporting product innovation.",
        },
        {
            title: "Customer Experience Officer",
            location: "Nakuru, Kenya",
            type: "Full-time",
            summary:
                "Deliver top-tier customer support and ensure every client receives timely and professional assistance.",
        },
        {
            title: "Claims Analyst",
            location: "Remote (Kenya)",
            type: "Contract",
            summary:
                "Evaluate and process claims efficiently while upholding fairness and compliance with policy standards.",
        },
    ];

    const internships = [
        {
            title: "Actuarial Intern",
            duration: "3 months",
            description:
                "Support our actuarial team in data analysis, product modeling, and financial projections.",
        },
        {
            title: "Marketing Intern",
            duration: "6 months",
            description:
                "Assist in brand campaigns, digital outreach, and creative content to strengthen our presence.",
        },
        {
            title: "Tech & Innovation Intern",
            duration: "4 months",
            description:
                "Collaborate on internal tools and digital initiatives driving our transformation journey.",
        },
    ];

    return (
        <main className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
            {/* ✨ Animated Hybrid Background */}
            <svg
                className="absolute inset-0 -z-10 w-full h-full opacity-[0.15]"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <circle cx="15%" cy="30%" r="80" fill="#2563eb">
                    <animate attributeName="cy" values="30%;35%;30%" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="85%" cy="60%" r="100" fill="#dc2626">
                    <animate attributeName="cy" values="60%;55%;60%" dur="8s" repeatCount="indefinite" />
                </circle>
                <circle cx="50%" cy="85%" r="70" fill="#16a34a">
                    <animate attributeName="cx" values="50%;52%;50%" dur="7s" repeatCount="indefinite" />
                </circle>
            </svg>

            {/* 🌟 Hero Section */}
            <section className="relative h-[50vh] flex flex-col items-center justify-center text-center bg-[url('/images/careers-hero.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 text-white text-5xl font-semibold tracking-tight"
                >
                    Careers at Birdview
                </motion.h1>
                <p className="relative z-10 text-white/80 mt-4 max-w-2xl">
                    Build a meaningful career that shapes the future of insurance.
                </p>
            </section>

            {/* 💼 Why Work With Us */}
            <motion.section
                id="why-us"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-6 py-20"
            >
                <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900 dark:text-gray-100">
                    Why Work With Us
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={r.title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            custom={i}
                        >
                            <Card className="p-6 text-center border border-gray-200/60 dark:border-gray-800 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg hover:shadow-2xl rounded-2xl transition-all duration-300">
                                <CardHeader className="flex flex-col items-center">
                                    <Image
                                        src={r.icon}
                                        alt={r.title}
                                        width={64}
                                        height={64}
                                        className="mb-4"
                                    />
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {r.title}
                                    </h3>
                                </CardHeader>
                                <CardBody>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">{r.desc}</p>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* 🧑‍💼 Open Positions */}
            <motion.section
                id="open-positions"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-20 px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-10 text-center flex items-center justify-center gap-3 text-gray-900 dark:text-gray-100">
                        <Briefcase className="w-7 h-7 text-brand-blue" /> Open Positions
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {positions.map((job, i) => (
                            <motion.div
                                key={job.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                custom={i}
                            >
                                <Card className="h-full p-6 border border-gray-200/60 dark:border-gray-800 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-md hover:shadow-2xl transition-all rounded-2xl">
                                    <CardHeader>
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                            {job.title}
                                        </h3>
                                        <div className="flex gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span>{job.location}</span> • <span>{job.type}</span>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                                            {job.summary}
                                        </p>
                                        <Button color="primary" variant="solid" className="rounded-full w-full">
                                            Apply Now
                                        </Button>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* 🎓 Internships */}
            <motion.section
                id="internships"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-6 py-20"
            >
                <h2 className="text-3xl font-semibold mb-10 text-center flex items-center justify-center gap-3 text-gray-900 dark:text-gray-100">
                    <GraduationCap className="w-7 h-7 text-brand-red" /> Internship Programs
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {internships.map((intern, i) => (
                        <motion.div
                            key={intern.title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            custom={i}
                        >
                            <Card className="p-6 text-center border border-gray-200/60 dark:border-gray-800 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg hover:shadow-2xl rounded-2xl transition-all duration-300">
                                <CardHeader>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {intern.title}
                                    </h3>
                                    <Badge color="secondary" className="mt-2">
                                        {intern.duration}
                                    </Badge>
                                </CardHeader>
                                <CardBody>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                                        {intern.description}
                                    </p>
                                    <Button
                                        color="secondary"
                                        variant="flat"
                                        className="rounded-full"
                                    >
                                        Apply for Internship
                                    </Button>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Ready to take the next step? Join a team that’s transforming the future of insurance.
                    </p>
                    <Button
                        color="primary"
                        variant="solid"
                        size="lg"
                        className="rounded-full"
                    >
                        View All Careers
                    </Button>
                </div>
            </motion.section>
        </main>
    );
}
