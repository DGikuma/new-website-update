"use client";

import { useState, useEffect } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Checkbox,
    Card,
    CardBody,
} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings } from "lucide-react";

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showSettingsBtn, setShowSettingsBtn] = useState(true);
    const [preferences, setPreferences] = useState({
        necessary: true,
        performance: false,
        marketing: false,
        functional: false,
    });

    useEffect(() => {
        const stored = localStorage.getItem("cookiePrefs");
        if (!stored) {
            setShowBanner(true);
        } else {
            setPreferences(JSON.parse(stored));
        }

        // Hide settings button after 3 seconds
        const timer = setTimeout(() => setShowSettingsBtn(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const savePreferences = () => {
        localStorage.setItem("cookiePrefs", JSON.stringify(preferences));
        setShowBanner(false);
        setShowModal(false);
    };

    return (
        <>
            {/* 🔹 Banner */}
            <AnimatePresence>
                {showBanner && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed bottom-4 inset-x-4 z-50"
                    >
                        <Card className="bg-gradient-to-r from-primary to-danger text-white shadow-2xl rounded-2xl border border-white/20">
                            <CardBody className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6">
                                <p className="text-base max-w-2xl">
                                    We use cookies to improve your browsing experience, personalize
                                    content, and analyze our traffic. You can accept all cookies or
                                    manage your preferences.
                                </p>
                                <div className="flex gap-3 shrink-0">
                                    <Button
                                        color="danger"
                                        onPress={() => setShowModal(true)}
                                        className="rounded-xl shadow-lg bg-white text-danger font-semibold"
                                    >
                                        Manage Preferences
                                    </Button>
                                    <Button
                                        color="primary"
                                        onPress={savePreferences}
                                        className="rounded-xl shadow-lg bg-white text-primary font-semibold"
                                    >
                                        Accept All
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ⚙️ Floating Settings Button (bottom-left) */}
            <AnimatePresence>
                {showSettingsBtn && (
                    <motion.button
                        onClick={() => setShowModal(true)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-gradient-to-r from-primary to-danger text-white shadow-xl border border-white/20"
                    >
                        <Settings className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* 🔹 Preferences Modal */}
            <Modal isOpen={showModal} onOpenChange={setShowModal} size="lg">
                <ModalContent className="bg-white rounded-2xl shadow-2xl">
                    <ModalHeader className="text-2xl font-bold text-primary">
                        Cookie Preferences
                    </ModalHeader>
                    <ModalBody className="space-y-4 text-gray-700">
                        <Checkbox
                            isSelected={preferences.necessary}
                            isDisabled
                            className="text-danger"
                        >
                            Strictly Necessary Cookies (Always Active)
                        </Checkbox>
                        <Checkbox
                            isSelected={preferences.performance}
                            onValueChange={(val) =>
                                setPreferences((p) => ({ ...p, performance: val }))
                            }
                        >
                            Performance Cookies
                        </Checkbox>
                        <Checkbox
                            isSelected={preferences.functional}
                            onValueChange={(val) =>
                                setPreferences((p) => ({ ...p, functional: val }))
                            }
                        >
                            Functional Cookies
                        </Checkbox>
                        <Checkbox
                            isSelected={preferences.marketing}
                            onValueChange={(val) =>
                                setPreferences((p) => ({ ...p, marketing: val }))
                            }
                        >
                            Marketing Cookies
                        </Checkbox>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="danger"
                            variant="light"
                            onPress={() => setShowModal(false)}
                        >
                            Cancel
                        </Button>
                        <Button color="primary" onPress={savePreferences}>
                            Save Preferences
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
