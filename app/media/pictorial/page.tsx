"use client";

import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {
    title?: string;
    subtitle?: string;
};

const galleryImages = [
    "https://images.unsplash.com/photo-1581093588401-22dbe5320b8f?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091870637-3d8f2f8d9fce?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1625231334160-3798e0c9a6e3?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80&auto=format&fit=crop",
];

export default function CorporatePictorial({
    title = "Securing Dreams, Protecting Generations.",
    subtitle = "Discover how our promise of care and reliability transforms uncertainty into confidence, one life at a time.",
}: Props) {
    const router = useRouter();

    const brandPrimary = "var(--color-primary)";
    const brandDanger = "var(--color-danger)";

    return (
        <main className="relative w-screen min-h-screen overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-500">
            {/* === HERO SECTION === */}
            <section className="relative h-[80vh] lg:h-[90vh] w-screen overflow-hidden">
                {/* Background Layer */}
                <div className="absolute inset-0 overflow-hidden">
                    {galleryImages.slice(0, 3).map((src, idx) => (
                        <motion.img
                            key={idx}
                            src={src}
                            alt={`hero-${idx}`}
                            className="absolute inset-0 w-full h-full object-cover opacity-70"
                            initial={{ scale: 1.15 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 2, delay: idx * 0.4 }}
                        />
                    ))}
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90 dark:from-black/40 dark:to-black/80" />

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24 xl:px-36">
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
                        style={{
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundImage: `linear-gradient(90deg, ${brandPrimary}, ${brandDanger})`,
                        }}
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-5 max-w-3xl text-lg sm:text-xl text-gray-200 dark:text-gray-300 leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-10 flex gap-4"
                    >
                        <Button
                            className="px-8 py-3 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
                            style={{
                                background: `linear-gradient(135deg, ${brandPrimary}, ${brandDanger})`,
                            }}
                            onClick={() => router.push("/contact")}
                        >
                            Get a Quote
                        </Button>
                        <Button
                            className="px-8 py-3 text-white font-semibold rounded-full border border-white/60 hover:bg-white/10 hover:scale-105 transition-all"
                            onClick={() => router.push("/about")}
                        >
                            Learn More
                        </Button>
                    </motion.div>
                </div>

                {/* Floating Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-8 right-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-3 text-sm text-gray-100 shadow-lg"
                >
                    <p>Trusted by over <span className="font-bold text-white">500,000+</span> clients worldcwide</p>
                </motion.div>
            </section>

            {/* PEOPLE & PURPOSE */}
            <section className="w-screen py-24 px-4 sm:px-10 lg:px-20 xl:px-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-500">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                            style={{
                                background: `linear-gradient(90deg, ${brandPrimary}, ${brandDanger})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            People & Purpose
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            A celebration of humanity — compassion, trust, and unity. These
                            portraits embody the heart of our promise: protecting lives and
                            nurturing futures.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {galleryImages.slice(1, 5).map((src, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.04 }}
                                className="rounded-xl overflow-hidden shadow-lg"
                            >
                                <img
                                    src={src}
                                    alt={`people-${idx}`}
                                    className="w-full h-44 sm:h-56 object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="w-screen py-28 px-4 sm:px-10 lg:px-20 xl:px-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
                <div className="max-w-7xl mx-auto text-center space-y-16">
                    <h3
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                        style={{
                            background: `linear-gradient(90deg, ${brandPrimary}, ${brandDanger})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Visual Toolkit & Services
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Executive Portraits",
                                desc: "Professional imagery that inspires trust, power, and connection.",
                            },
                            {
                                title: "Brand Storytelling",
                                desc: "Compelling visual narratives that express your purpose and identity.",
                            },
                            {
                                title: "Process Illustrations",
                                desc: "Beautiful diagrams simplifying the complex world of insurance and finance.",
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: `0 0 25px ${brandPrimary}33`,
                                }}
                                className="rounded-2xl p-8 bg-white/80 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 transition-all duration-300"
                            >
                                <h4
                                    className="text-xl sm:text-2xl font-semibold mb-3"
                                    style={{
                                        background: `linear-gradient(90deg, ${brandPrimary}, ${brandDanger})`,
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                                    {item.desc}
                                </p>
                                <Button
                                    variant="ghost"
                                    className="mt-5 px-4 py-2 hover:scale-105 transition-all"
                                    style={{
                                        color: brandPrimary,
                                    }}
                                >
                                    Learn More
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
