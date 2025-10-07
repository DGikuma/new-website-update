"use client";

import React, { useState } from "react";
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
import { motion } from "framer-motion";
import { Contact } from "lucide-react";
import MediaEnquiryCard from "../media_enquiry/page";

export default function Press() {
    const [activeTab, setActiveTab] = useState(0);
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleImageClick = (img: string) => {
        setSelectedImage(img);
        setImageModalOpen(true);
    };

    const handleOpen = (item: any) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
    };

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
        {
            label: "Contact for Media Inquiries",
            data: [
                {
                    title: "Media Contact",
                    description: (
                        <MediaEnquiryCard />
                    ),
                },
            ],
        },
    ];

    return (
        <>
            {/* 🌟 Hero Banner - Premium Media Center Style */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/media.png')",
                        backgroundAttachment: "fixed",
                    }}
                />

                {/* Layered Overlays for Cinematic Depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary/40 to-red-700/40" />
                <div className="absolute inset-0 backdrop-blur-[2px]" />

                {/* Subtle Animated Gradient Sweep */}
                <motion.div
                    className="absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.15)_50%,transparent_60%)]"
                    animate={{ backgroundPositionX: ["0%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    style={{ backgroundSize: "200% 100%" }}
                />

                {/* Floating Light Particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <motion.span
                            key={i}
                            className="absolute rounded-full bg-white/20 blur-sm"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 4 + 1}px`,
                                height: `${Math.random() * 4 + 1}px`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.1, 0.6, 0.1],
                            }}
                            transition={{
                                duration: Math.random() * 6 + 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                {/* Logo Watermark - Pulsating Glow */}
                <motion.div
                    initial={{ opacity: 0.05, scale: 1 }}
                    animate={{
                        opacity: [0.05, 0.15, 0.05],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Image
                        src="/logo-light.svg"
                        alt="Birdview Logo"
                        width={380}
                        height={380}
                        className="object-contain"
                    />
                </motion.div>

                {/* Central Hero Text */}
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
                        Explore our latest stories, news features, and brand updates — all in one modern, immersive hub.
                    </motion.p>

                    {/* Decorative Divider Line */}
                    <motion.div
                        className="mt-6 h-[2px] w-32 mx-auto bg-gradient-to-r from-primary via-white/80 to-red-600 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    />
                </motion.div>
            </div>

            {/* Tabs Section */}
            <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
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

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                        },
                    }}
                >
                    {TABS[activeTab].data.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
                            }}
                            whileHover={{
                                scale: 1.04,
                                rotateX: 2,
                                rotateY: -2,
                                boxShadow: "0 15px 30px rgba(255,0,0,0.2)",
                            }}
                            className="w-full max-w-sm"
                        >
                            <Card
                                isPressable
                                onPress={() => handleOpen(item)}
                                shadow="sm"
                                className="h-[420px] flex flex-col justify-between rounded-2xl border border-gray-100 
          hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 
          backdrop-blur-sm bg-white/90"
                            >
                                {/* Image */}
                                {item.image && (
                                    <div className="h-48 w-full overflow-hidden rounded-t-2xl">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="h-full w-full"
                                        >
                                            <Image
                                                alt={item.title}
                                                src={item.image}
                                                radius="none"
                                                className="h-full w-full object-cover"
                                            />
                                        </motion.div>
                                    </div>
                                )}

                                {/* Card Content */}
                                <div className="flex flex-col flex-1 justify-between p-4">
                                    <CardHeader className="flex flex-col items-start gap-1 p-0">
                                        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                                            {item.title}
                                        </h3>
                                    </CardHeader>

                                    <CardBody className="p-0 mt-2 text-gray-600 text-sm line-clamp-3 flex-grow">
                                        {item.description}
                                    </CardBody>

                                    {/* Premium “Read More” Button with Birdview Gradient */}
                                    <motion.button
                                        aria-label="Read more"
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                        className="group mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-primary text-white px-5 py-2.5 font-semibold transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                    >
                                        <span className="relative z-10">Read More</span>

                                        <motion.span
                                            className="relative z-10 inline-flex"
                                            variants={{
                                                rest: { x: 0 },
                                                hover: { x: 10 }, // slides right when parent is hovered
                                            }}
                                            transition={{ type: "spring", stiffness: 400, damping: 22 }}
                                        >
                                            {/* Crisp chevron-right SVG */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </motion.span>
                                    </motion.button>

                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            {/* Video/Image Modal */}
            <Modal isOpen={open} onOpenChange={handleClose} size="4xl" scrollBehavior="inside">
                <ModalContent>
                    <ModalHeader className="font-bold text-lg text-gray-800">
                        {selectedItem?.title}
                    </ModalHeader>
                    <ModalBody>
                        {selectedItem?.video ? (
                            <div
                                dangerouslySetInnerHTML={{ __html: selectedItem.video }}
                                className="rounded-xl overflow-hidden mb-4"
                            />
                        ) : selectedItem?.image ? (
                            <Image
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="rounded-xl mb-4 cursor-pointer"
                                onClick={() => handleImageClick(selectedItem.image)}
                            />
                        ) : null}

                        {selectedItem?.content ? (
                            <div
                                dangerouslySetInnerHTML={{ __html: selectedItem.content }}
                                className="text-gray-700 leading-relaxed"
                            />
                        ) : (
                            <p className="text-gray-600 leading-relaxed">
                                {selectedItem?.details || selectedItem?.description}
                            </p>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* Image Modal */}
            <Modal isOpen={imageModalOpen} onOpenChange={setImageModalOpen}>
                <ModalContent>
                    <ModalBody className="flex justify-center items-center">
                        <Image
                            src={selectedImage}
                            alt="Selected"
                            className="max-h-[80vh] rounded-xl object-contain"
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
