"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { Heart, Users, Sparkles, Handshake } from "lucide-react";

export default function OurCulture() {
    const values = [
        {
            icon: <Heart className="w-8 h-8 text-[var(--color-danger,#dc2626)]" />,
            title: "Integrity & Empathy",
            desc: "We act with compassion and honesty in everything we do — placing people before profits.",
        },
        {
            icon: <Sparkles className="w-8 h-8 text-amber-400" />,
            title: "Innovation & Excellence",
            desc: "We strive for creative solutions and continuous improvement, redefining excellence daily.",
        },
        {
            icon: <Handshake className="w-8 h-8 text-emerald-400" />,
            title: "Trust & Collaboration",
            desc: "We build relationships on mutual respect and transparent communication.",
        },
    ];

    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 px-6 md:px-12 lg:px-24 py-16 space-y-24">
            {/* Background Decorative SVGs */}
            <Image
                src="/illustrations/culture-shapes-light.svg"
                alt=""
                fill
                className="absolute inset-0 object-cover opacity-20 dark:hidden"
            />
            <Image
                src="/illustrations/culture-shapes-dark.svg"
                alt=""
                fill
                className="absolute inset-0 object-cover opacity-20 hidden dark:block"
            />

            {/* --- Hero --- */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative text-center space-y-4 z-10"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
                    Our Culture & Values
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    We believe our people define who we are — shaping a culture of empathy,
                    inclusivity, and impact that extends beyond business.
                </p>
            </motion.div>

            {/* --- Our Values --- */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 grid md:grid-cols-3 gap-8"
            >
                {values.map((v, i) => (
                    <motion.div key={i} whileHover={{ y: -6 }} className="h-full">
                        <Card className="shadow-lg border border-gray-200/40 dark:border-gray-700/40 hover:shadow-xl transition-all duration-300 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl">
                            <CardHeader className="flex flex-col items-center gap-3 text-center pt-8">
                                {v.icon}
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    {v.title}
                                </h3>
                            </CardHeader>
                            <CardBody>
                                <p className="text-gray-600 dark:text-gray-300 text-center">
                                    {v.desc}
                                </p>
                            </CardBody>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            {/* --- Diversity & Inclusion --- */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden py-20 px-10 md:px-20 bg-gradient-to-r from-[var(--color-primary,#2563eb)] via-purple-500 to-[var(--color-danger,#dc2626)] text-white"
            >
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/illustrations/diversity-bg-light.svg"
                        alt="Diversity"
                        fill
                        className="object-cover dark:hidden"
                    />
                    <Image
                        src="/illustrations/diversity-bg-dark.svg"
                        alt="Diversity Dark"
                        fill
                        className="object-cover hidden dark:block"
                    />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                    <Users className="w-12 h-12 mx-auto text-white drop-shadow-lg" />
                    <h2 className="text-3xl md:text-4xl font-bold">Diversity & Inclusion</h2>
                    <p className="text-lg text-white/90">
                        We embrace every voice and celebrate differences, empowering each
                        person to contribute authentically. Together, we create a space where
                        every individual feels valued and heard.
                    </p>
                </div>
            </motion.div>

            {/* --- Community Engagement --- */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="relative grid md:grid-cols-2 gap-10 items-center z-10"
            >
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Community Engagement
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Our commitment extends beyond business — we actively support community
                        initiatives, mentorship programs, and environmental sustainability.
                        We believe growth means lifting others alongside us.
                    </p>
                </div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl overflow-hidden shadow-xl border border-gray-200/40 dark:border-gray-700/40"
                >
                    <Image
                        src="/illustrations/community-pattern-light.svg"
                        alt="Community"
                        width={600}
                        height={400}
                        className="object-cover dark:hidden"
                    />
                    <Image
                        src="/illustrations/community-pattern-dark.svg"
                        alt="Community Dark"
                        width={600}
                        height={400}
                        className="object-cover hidden dark:block"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
