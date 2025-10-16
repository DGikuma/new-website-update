"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRIMARY_COLOR = "#1D4ED8"; // Your brand primary
const SECONDARY_COLOR = "#DC2626"; // Your brand secondary

export default function LineRevealLoader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">
            {/* Expanding line */}
            <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="absolute top-1/2 h-[3px]"
                style={{
                    background: `linear-gradient(90deg, ${PRIMARY_COLOR}, ${SECONDARY_COLOR})`,
                    transform: "translateY(-50%)",
                }}
            />

            {/* Reveal panels */}
            <AnimatePresence>
                <motion.div
                    initial={{ height: "0%" }}
                    animate={{ height: "100%" }}
                    transition={{ delay: 1.4, duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                    exit={{ height: "0%" }}
                    className="absolute top-0 left-0 w-full"
                    style={{
                        background: `linear-gradient(180deg, ${PRIMARY_COLOR}, ${SECONDARY_COLOR})`,
                        transformOrigin: "center top",
                    }}
                />
            </AnimatePresence>

            <AnimatePresence>
                <motion.div
                    initial={{ height: "0%" }}
                    animate={{ height: "100%" }}
                    transition={{ delay: 1.4, duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                    exit={{ height: "0%" }}
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                        background: `linear-gradient(0deg, ${PRIMARY_COLOR}, ${SECONDARY_COLOR})`,
                        transformOrigin: "center bottom",
                    }}
                />
            </AnimatePresence>

            {/* Tagline / brand text */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.8 }}
                className="relative text-lg font-semibold tracking-wide"
                style={{
                    background: `linear-gradient(90deg, ${PRIMARY_COLOR}, ${SECONDARY_COLOR})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Exceeding Your Expectations...
            </motion.div>
        </div>
    );
}
