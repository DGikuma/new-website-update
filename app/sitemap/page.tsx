"use client";

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const sitemapSections = [
    {
        title: "About Us",
        links: [
            { name: "Who We Are", href: "/about" },
            { name: "Our Mission", href: "/about#mission" },
            { name: "Leadership Team", href: "/about#team" },
        ],
    },
    {
        title: "Membership",
        links: [
            { name: "Join Us", href: "/register" },
            { name: "Member Benefits", href: "/membership#benefits" },
            { name: "FAQs", href: "/membership#faqs" },
        ],
    },
    {
        title: "Programs & Forms",
        links: [
            { name: "Kenyans in Japan", href: "/forms/KenyansInJapanForm" },
            { name: "Kenyans in South Wales", href: "/forms/KenyansInSouthWalesForm" },
            { name: "Tricycle Application", href: "/forms/TricycleForm" },
        ],
    },
    {
        title: "Support & Resources",
        links: [
            { name: "Contact Us", href: "/contact" },
            { name: "Help Center", href: "/help" },
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms of Service", href: "/terms" },
        ],
    },
    {
        title: "Admin & Dashboards",
        links: [
            { name: "Super Admin Dashboard", href: "/admin/dashboard" },
            { name: "Support Dashboard", href: "/support/dashboard" },
            { name: "Reports Dashboard", href: "/admin/reports" },
        ],
    },
];

export default function SitemapPage() {
    return (
        <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">
                        Sitemap
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Quick access to all sections of {siteConfig.name}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sitemapSections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="shadow-lg hover:shadow-xl transition-all rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md">
                                <CardHeader className="pb-0">
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                        {section.title}
                                    </h2>
                                </CardHeader>
                                <Divider />
                                <CardBody className="pt-3">
                                    <ul className="space-y-2">
                                        {section.links.map((link, i) => (
                                            <li key={i}>
                                                <Link
                                                    href={link.href}
                                                    className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
