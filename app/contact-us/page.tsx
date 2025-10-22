"use client";

import { motion } from "framer-motion";
import ContactDetailsCard from "./ContactDetailsCard";
import InquiryFormCard from "./InquiryFormCard";
import MapSection from "./MapSection";

export default function ContactUs() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/assets/pagesPhotos/contact-us.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-danger/60 mix-blend-overlay" />
      </div>

      {/* Banner */}
      <div className="relative text-white py-20 px-4 text-center shadow-md">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">
            We're here to help. Reach out with your questions or concerns.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div
        id="form"
        className="py-12 px-4 sm:px-8 lg:px-20 grid lg:grid-cols-2 gap-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactDetailsCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <InquiryFormCard />
        </motion.div>
      </div>

      {/* Locations Section */}
      <div id="locations" className="w-full flex justify-center mt-16">
        <MapSection />
      </div>
    </div>
  );
}
