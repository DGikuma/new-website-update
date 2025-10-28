"use client";

import React, { useState, useRef, useEffect } from "react";
import {
    Tabs,
    Tab,
    Card,
    CardBody,
    CardHeader,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Image,
} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import MediaEnquiryCard from "../media_enquiry/page";

export default function Press() {
    const [activeTab, setActiveTab] = useState(0);
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [blurActive, setBlurActive] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const [particles] = useState(
        Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 4 + 1,
            duration: Math.random() * 6 + 4,
        }))
    );

    const handleOpen = (item: any) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
        setSelectedVideo(null);
        setBlurActive(false);
    };

    const handleVideoEnd = () => {
        setBlurActive(true);
        setTimeout(() => {
            handleClose();
        }, 1500);
    };

    useEffect(() => {
        if (selectedVideo && videoRef.current) videoRef.current.play();
    }, [selectedVideo]);

    const TABS = [
        {
            label: "Latest Media Features",
            data: [
                {
                    title: 'Waendeshaji Tuktuk Waraiwa Kukumbatia Bima',
                    description: "Birdview Insurance yawarai Waendeshaji TukTuk Umuhimu wa Kuchukua Bima.",
                    image: 'https://img.youtube.com/vi/VrOd5vprdpg/maxresdefault.jpg',
                    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/VrOd5vprdpg?si=kQ5mPatGfbavgOwR" frameborder="0" allowfullscreen></iframe>`,
                },
                {
                    title: 'BIRDVIEW MAKES HEADLINES LANDMARKING INCLUSIVE INSURANCE IN KENYA',
                    description: "Birdview Insurance's innovative approach to inclusive insurance in Kenya.",
                    image: 'https://img.youtube.com/vi/OlMJkxjipl4/maxresdefault.jpg',
                    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/OlMJkxjipl4?si=kQ5mPatGfbavgOwR" frameborder="0" allowfullscreen></iframe>`,
                },
                {
                    title: 'Birdview Insurance at the Kenyans in France Dijon BBQ Party.',
                    description: "Birdview Insurance's presence at the Kenyans in France Dijon BBQ Party.",
                    image: '/images/barbecue/dijon.jpeg',
                    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/6Rc2hV0nMYA?si=kQ5mPatGfbavgOwR" frameborder="0" allowfullscreen></iframe>`,
                },
                {
                    title: 'KENYA DIASPORA EXPO NAIROBI 2025 at CK SQUARE, TWO RIVERS',
                    description: "Birdview Insurance showcases diaspora insurance solutions at the Kenya Diaspora Expo 2025.",
                    image: 'https://img.youtube.com/vi/-Phe_HYg3l4/maxresdefault.jpg',
                    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/ah-Phe_HYg3l4?si=kQ5mPatGfbavgOwR" frameborder="0" allowfullscreen></iframe>`,
                },
                {
                    title: 'KENYANS IN THE UK FOOTBALL TOURNAMENT 2025 AT BRITWELL COMMUNITY FIELD, SLOUGH,',
                    description: "Birdview Insurance sponsors the Kenyans in the UK Football Tournament 2025.",
                    image: 'https://img.youtube.com/vi/fGLhFhlJhiU/maxresdefault.jpg',
                    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/fGLhFhlJhiU?si=kQ5mPatGfbavgOwR" frameborder="0" allowfullscreen></iframe>`,
                },
                {
                    title: "Daring Abroad Investment Forum 2025 - USA",
                    description: "Proud Partner of Daring Abroad Investment Forum 2025",
                    image: "https://img.youtube.com/vi/ah68LjbM6Hw/maxresdefault.jpg",
                    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/ah68LjbM6Hw?si=kQ5mPatGfbavgOwR" frameborder="0" allowfullscreen></iframe>`
                },
                {
                    title: "Evacuation & Repatriation Testimonial",
                    description: "🌍 Real Story, Real Peace of Mind | Birdview Evacuation & Repatriation Insurance Testimonial",
                    image: "/assets/E&R_Testimonial.png",
                    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/3xnugdHmAh0?si=wXw8PED5Ld3v6ud5" frameborder="0" allowfullscreen></iframe>`
                },
                {
                    title: "Evacuation & Repatriation Dinner",
                    description: "The Dinner was held on 10th March 2025 at Radisson Blu Hotel with KNCCI",
                    image: "/assets/noticeBoard/Evac Conference.jpeg",
                    details: "The Dinner brought together stakeholders to discuss evacuation insurance innovations."
                },
                {
                    title: "Diaspora Insurance Coverage",
                    description: "A new product tailored for Kenyans abroad.",
                    image: "https://img.youtube.com/vi/-COQI7Itdu4/hqdefault.jpg",
                    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/-COQI7Itdu4" frameborder="0" allowfullscreen></iframe>`
                }
            ],
        },
        {
            label: "Press Releases",
            data: [
                {
                    title: "Birdview in UK Cultural Day",
                    image: 'https://img.youtube.com/vi/bYmdmbwBOMc/hqdefault.jpg',
                    video: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/bYmdmbwBOMc" frameborder="0" allowfullscreen></iframe>',
                    description: "Birdview promoted diaspora insurance at LDSCKF UK event."
                },
                {
                    title: "Welcome Ann Kinyanjui",
                    description: `Appointed as Manager, Diaspora Business Development.`,
                    image: "/assets/noticeBoard/Ann_Kinyanjui.jpeg",
                    content: `<p>Ann Kinyanjui joins Birdview with 5+ years experience in diaspora banking.</p>`
                },
                {
                    title: 'Recruitment agencies partner with an insurance firm to develop cover for Kenyans working in diaspora',
                    image: 'https://img.youtube.com/vi/uIpPSzLgghY/hqdefault.jpg',
                    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uIpPSzLgghY?si=m-irU0AQVVOh_pL_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                },
                {
                    title: '#MohoroGitau',
                    image: 'https://img.youtube.com/vi/4qIBk5G_BfU/hqdefault.jpg',
                    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4qIBk5G_BfU?si=gTXuwW7Lj0u7oL-3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                },
                {
                    title: 'Protecting Kenyans abroad: Plan for compulsory insurance hatched',
                    image: 'https://img.youtube.com/vi/ev3_ffJBQzA/hqdefault.jpg',
                    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ev3_ffJBQzA?si=hxufZBySbQcZf9bI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                },
                {
                    title: 'KNCCI partners to enhance financial protection for Kenyans working abroad',
                    image: 'https://img.youtube.com/vi/rgjmdpy79KM/hqdefault.jpg',
                    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rgjmdpy79KM?si=vfnZVMrXW15tmq5h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                }
            ],
        },
    ];

    return (
        <>
            {/* 🏔️ Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/media.png')", backgroundAttachment: "fixed" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary/40 to-red-700/40" />
                <div className="absolute inset-0 backdrop-blur-[2px]" />

                <motion.div
                    className="absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.15)_50%,transparent_60%)]"
                    animate={{ backgroundPositionX: ["0%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    style={{ backgroundSize: "200% 100%" }}
                />

                <div className="absolute inset-0 overflow-hidden">
                    {particles.map((p) => (
                        <motion.span
                            key={p.id}
                            className="absolute rounded-full bg-white/20 blur-sm"
                            style={{
                                top: p.top,
                                left: p.left,
                                width: `${p.size}px`,
                                height: `${p.size}px`,
                            }}
                            animate={{ y: [0, -30, 0], opacity: [0.1, 0.6, 0.1] }}
                            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0.05, scale: 1 }}
                    animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Image src="/logo-light.svg" alt="Birdview Logo" width={380} height={380} className="object-contain" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center text-white px-4"
                >
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Press & Media Center
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        Explore our latest stories, news features, and brand updates — all in one immersive hub.
                    </motion.p>
                </motion.div>
            </div>

            {/* 📰 Tabs + Cards */}
            <div className="max-w-7xl mx-auto py-16 px-6 md:px-10 lg:px-16">
                <Tabs
                    aria-label="Press Tabs"
                    selectedKey={activeTab}
                    onSelectionChange={(key: any) => setActiveTab(Number(key))}
                    variant="underlined"
                    className="justify-center mb-10"
                >
                    {TABS.map((tab, index) => (
                        <Tab key={index} title={tab.label} />
                    ))}
                </Tabs>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
                    }}
                >
                    {TABS[activeTab].data.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                            }}
                            whileHover={{ scale: 1.04, boxShadow: "0 15px 30px rgba(255,0,0,0.2)" }}
                            className="w-full max-w-sm"
                        >
                            <Card
                                shadow="sm"
                                className="h-[420px] flex flex-col justify-between rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90"
                            >
                                {item.image && (
                                    <div className="h-48 w-full overflow-hidden rounded-t-2xl">
                                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.8 }}>
                                            <Image src={item.image} alt={item.title} radius="none" className="h-full w-full object-cover" />
                                        </motion.div>
                                    </div>
                                )}

                                <div className="flex flex-col flex-1 justify-between p-4">
                                    <CardHeader className="flex flex-col items-start gap-1 p-0">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2">
                                            {item.title}
                                        </h3>
                                    </CardHeader>

                                    <CardBody className="p-0 mt-2 text-gray-600 dark:text-gray-300 text-sm line-clamp-3 flex-grow">
                                        {item.description}
                                    </CardBody>

                                    {item.video && (
                                        <motion.button
                                            aria-label="Play video"
                                            onClick={() => handleOpen(item)}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-primary text-white px-5 py-2.5 font-semibold transition-all duration-300 hover:bg-red-600"
                                        >
                                            <motion.div
                                                className="flex items-center justify-center"
                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                            >
                                                <Play className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
                                            </motion.div>
                                            <span>Play</span>
                                        </motion.button>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* 💬 Media & Press Contact Section */}
            <section className="relative w-full py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-red-500/5 pointer-events-none"
                />

                <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Media & Press
                        </h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Access our press kits, interview opportunities, and the latest corporate updates from Birdview Microinsurance.
                        </p>
                    </div>

                    <div className="w-full">
                        <MediaEnquiryCard />
                    </div>
                </div>
            </section>

            {/* 🎬 Video Modal */}
            <Modal isOpen={open} onOpenChange={handleClose} size="4xl" scrollBehavior="inside">
                <ModalContent>
                    <ModalHeader className="font-bold text-lg text-gray-800">{selectedItem?.title}</ModalHeader>
                    <ModalBody>
                        {selectedItem?.video && (
                            <div dangerouslySetInnerHTML={{ __html: selectedItem.video }} className="rounded-xl overflow-hidden mb-4" />
                        )}
                        {selectedItem?.description && (
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedItem.description}</p>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* ⚡ Cinematic Outro */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        key="video-modal"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <video
                                ref={videoRef}
                                src={selectedVideo}
                                onEnded={handleVideoEnd}
                                controls
                                className="w-full h-auto rounded-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
