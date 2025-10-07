"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { Briefcase, Users2, Star, Globe2 } from "lucide-react";

export default function OurLeadership() {
    const board = [
        {
            name: "Jane Mwangi",
            title: "Chairperson",
            img: "/images/board1.jpg",
        },
        {
            name: "Samuel Otieno",
            title: "Vice Chair",
            img: "/images/board2.jpg",
        },
        {
            name: "Dr. Amina Noor",
            title: "Non-Executive Director",
            img: "/images/board3.jpg",
        },
    ];

    const executives = [
        {
            name: "Peter Kamau",
            title: "Chief Executive Officer",
            img: "/images/executive1.jpg",
        },
        {
            name: "Grace Njoroge",
            title: "Chief Operations Officer",
            img: "/images/executive2.jpg",
        },
        {
            name: "Brian Kibet",
            title: "Chief Finance Officer",
            img: "/images/executive3.jpg",
        },
    ];

    const advisors = [
        {
            name: "Dr. Alice Oloo",
            title: "Senior Strategic Advisor",
            img: "/images/advisor1.jpg",
        },
        {
            name: "John Mwangi",
            title: "Financial Consultant",
            img: "/images/advisor2.jpg",
        },
    ];

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 px-6 md:px-12 lg:px-24 py-20 space-y-28 relative overflow-hidden">
            {/* Animated hybrid background */}
            <div className="absolute inset-0 -z-10 opacity-50">
                <Image
                    src="/illustrations/culture-shapes-light.svg"
                    alt="Background"
                    fill
                    className="object-cover dark:hidden"
                />
                <Image
                    src="/illustrations/culture-shapes-dark.svg"
                    alt="Background"
                    fill
                    className="object-cover hidden dark:block"
                />
            </div>

            {/* --- Hero Section --- */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4 max-w-3xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
                    Our Leadership
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Visionary leaders driving innovation, integrity, and long-term impact
                    for our people, partners, and communities.
                </p>
            </motion.div>

            {/* --- Board of Directors --- */}
            <motion.div
                id="board"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-10"
            >
                <div className="flex items-center gap-3 justify-center">
                    <Briefcase className="text-brand-blue w-8 h-8" />
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                        Board of Directors
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {board.map((person, i) => (
                        <motion.div key={i} whileHover={{ y: -6 }}>
                            <Card className="overflow-hidden border border-gray-200/60 dark:border-gray-800 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                                <Image
                                    src={person.img}
                                    alt={person.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover"
                                />
                                <CardHeader className="text-center pt-6">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        {person.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {person.title}
                                    </p>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* --- Executive Team --- */}
            <motion.div
                id="executive"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-10"
            >
                <div className="flex items-center gap-3 justify-center">
                    <Users2 className="text-brand-red w-8 h-8" />
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                        Executive Team
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {executives.map((exec, i) => (
                        <motion.div key={i} whileHover={{ y: -6 }}>
                            <Card className="overflow-hidden border border-gray-200/60 dark:border-gray-800 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                                <Image
                                    src={exec.img}
                                    alt={exec.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover"
                                />
                                <CardHeader className="text-center pt-6">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        {exec.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">{exec.title}</p>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* --- Advisors --- */}
            <motion.div
                id="advisors"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-10"
            >
                <div className="flex items-center gap-3 justify-center">
                    <Star className="text-brand-blue w-8 h-8" />
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                        Strategic Advisors
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {advisors.map((a, i) => (
                        <motion.div key={i} whileHover={{ y: -6 }}>
                            <Card className="overflow-hidden border border-gray-200/60 dark:border-gray-800 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                                <Image
                                    src={a.img}
                                    alt={a.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover"
                                />
                                <CardHeader className="text-center pt-6">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        {a.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">{a.title}</p>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* --- Values, Diversity, Community --- */}
            <motion.div
                id="values"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center space-y-6 mt-24 max-w-3xl mx-auto"
            >
                <Globe2 className="w-10 h-10 mx-auto text-brand-blue" />
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                    Our Values
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We operate with integrity, inclusivity, and innovation — cultivating a
                    culture where every decision supports our mission to serve people first.
                </p>
            </motion.div>
        </section>
    );
}
