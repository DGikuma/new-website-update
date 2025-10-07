"use client";

import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Input,
    Textarea,
} from "@heroui/react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Twitter, Download } from "lucide-react";

export default function MediaEnquiryCard() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        name: "",
        org: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Media enquiry from ${form.name}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nOrganization: ${form.org}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
        );
        window.location.href = `mailto:media@birdviewinsurance.com?subject=${subject}&body=${body}`;
        setOpen(false);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-3xl mx-auto relative group"
            >
                {/* Animated border sweep */}
                <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-red-500 to-primary opacity-70 blur-sm"
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-xl">
                    {/* Header */}
                    <CardHeader className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-gradient-to-r from-primary to-red-600 text-white px-6 py-8 rounded-t-3xl">
                        <div className="flex items-center gap-4">
                            <img
                                src="/media-relations.jpg"
                                alt="Media Relations"
                                className="w-16 h-16 rounded-2xl object-cover border-2 border-white/20"
                            />
                            <div>
                                <h3 className="text-2xl font-bold">Media & Press Enquiries</h3>
                                <p className="text-sm opacity-80 mt-1">
                                    Speak directly with our Media Relations Officer
                                </p>
                            </div>
                        </div>

                        {/* Quick contact */}
                        <div className="flex flex-col gap-2 mt-4 sm:mt-0 text-sm text-white/90">
                            <a
                                href="mailto:media@birdviewinsurance.com"
                                className="inline-flex items-center gap-2 hover:underline"
                            >
                                <Mail className="w-4 h-4" /> media@birdviewinsurance.com
                            </a>
                            <a
                                href="tel:+254112072445"
                                className="inline-flex items-center gap-2 hover:underline"
                            >
                                <Phone className="w-4 h-4" /> +254 112 072 445
                            </a>
                        </div>
                    </CardHeader>

                    {/* Body */}
                    <CardBody className="px-6 py-6 grid md:grid-cols-2 gap-6">
                        {/* Left: Description */}
                        <div>
                            <h4 className="text-xl font-semibold text-white">
                                Need press materials or an interview?
                            </h4>
                            <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                                Birdview Insurance’s Marketing & Communications team provides
                                resources for journalists, partners, and collaborators — from
                                our latest press kits to interview scheduling.
                            </p>

                            <div className="flex items-center gap-4 mt-5">
                                <motion.button
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    onClick={() => setOpen(true)}
                                    className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 font-semibold transition-colors duration-300 hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                >
                                    <span>Request Interview</span>
                                    <motion.span
                                        variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </motion.span>
                                </motion.button>

                                <a
                                    href="/assets/press-kit.zip"
                                    download
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-white text-sm hover:bg-white/10 transition"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Kit
                                </a>
                            </div>
                        </div>

                        {/* Right: Contact / Social */}
                        <div className="bg-white/5 rounded-2xl p-4 flex flex-col justify-between">
                            <div>
                                <h5 className="font-semibold text-white mb-3">
                                    Media Contact
                                </h5>
                                <p className="text-white/90 font-medium">
                                    Jane Mwangi, Head of Media Relations
                                </p>
                                <p className="text-gray-400 text-sm mt-1">
                                    For all press & corporate communications
                                </p>

                                <div className="flex gap-3 mt-4">
                                    <a
                                        href="https://www.linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                                        title="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5 text-white" />
                                        <a
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                                            title="Twitter"
                                        >
                                            <Twitter className="w-5 h-5 text-white" />
                                        </a>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 text-xs text-gray-400">
                                © {new Date().getFullYear()} Birdview Microinsurance Marketing Dept.
                            </div>
                        </div>
                    </CardBody>

                    <CardFooter className="px-6 py-4 border-t border-white/10 text-gray-300 text-sm flex justify-between items-center">
                        <span>Birdview Corporate Communications</span>
                        <a
                            href="/privacy"
                            className="hover:text-white hover:underline transition"
                        >
                            Privacy Policy
                        </a>
                    </CardFooter>
                </Card>
            </motion.div>

            {/* Modal */}
            <Modal isOpen={open} onOpenChange={setOpen}>
                <ModalContent>
                    <ModalHeader className="font-bold text-lg">
                        Request Interview / Press Kit
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleSubmit} className="grid gap-3">
                            <Input
                                name="name"
                                placeholder="Full name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                name="org"
                                placeholder="Organization"
                                value={form.org}
                                onChange={handleChange}
                            />
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                name="phone"
                                placeholder="Phone"
                                value={form.phone}
                                onChange={handleChange}
                            />
                            <Textarea
                                name="message"
                                placeholder="Your message"
                                value={form.message}
                                onChange={handleChange}
                            />
                            <div className="flex justify-end gap-2 mt-3">
                                <Button variant="ghost" onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit">Send</Button>
                            </div>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
