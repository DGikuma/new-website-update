"use client";

import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// ✅ HeroUI imports
import { Card, CardBody } from "@heroui/react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { toast } from "@heroui/react";

// ✅ Your custom components
import BackgroundImage from "../components/BackgroundImage";
import AnimationDownToUp from "./components/Animation/AnimationDownToUp";
import AnimationRightToLeft from "./components/Animation/AnimationRightToLeft";

export interface FormdataType {
  fullnames: string;
  mobileno: string;
  email: string;
  agencies: string;
}

const RegForm: React.FC = () => {
  const [formData, setFormData] = useState<FormdataType>({
    fullnames: "",
    mobileno: "",
    email: "",
    agencies: "",
  });
  const [loaderIcon, setLoaderIcon] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // ✅ HeroUI toast wrappers
  const showSuccess = (message: string) =>
    toast({
      title: "Success",
      description: message,
      color: "success",
      variant: "solid",
      duration: 4000,
    });

  const showError = (message: string) =>
    toast({
      title: "Error",
      description: message,
      color: "danger",
      variant: "solid",
      duration: 6000,
    });

  const handlePhoneChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      mobileno: value,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoaderIcon(true);
    setSubmitted(true);

    try {
      const res = await axios.post(
        "/api/registration-form",
        formData,
        { headers: { "Content-Type": "application/json" }, timeout: 10000 }
      );

      setFormData({ fullnames: "", mobileno: "", email: "", agencies: "" });

      if (res.status === 200) {
        showSuccess(res.data.message || "Form submitted successfully!");
      } else {
        showError(res.data.error || "Something went wrong");
      }
    } catch (error: any) {
      showError(error?.response?.data?.error || error.message || "Submission failed");
    } finally {
      setLoaderIcon(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-10">
      <Card className="w-full max-w-3xl shadow-2xl border border-gray-100 rounded-3xl bg-white/95 backdrop-blur-md">
        <CardBody className="relative p-0 overflow-hidden rounded-3xl">
          {/* ✅ Loader Overlay */}
          {loaderIcon && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-md">
              <div className="flex space-x-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" />
                <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce delay-150" />
                <div className="w-4 h-4 bg-sky-600 rounded-full animate-bounce delay-300" />
              </div>
            </div>
          )}

          {/* ✅ Top Background Section */}
          <div className="relative h-56 overflow-hidden">
            <BackgroundImage />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white" />
          </div>

          {/* ✅ Main Form Section */}
          <div className="relative -mt-20 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white w-full max-w-[90%] p-8 rounded-3xl shadow-2xl border border-gray-200 flex flex-col items-center"
            >
              <AnimationDownToUp>
                <h2 className="text-3xl font-bold text-gray-900 text-center tracking-wide uppercase mb-2">
                  Attendee Registration
                </h2>
                <p className="text-gray-500 text-center mb-6">
                  Please fill in your details accurately to complete registration.
                </p>
              </AnimationDownToUp>

              <form
                onSubmit={handleSubmit}
                className="w-full space-y-8 transition-all duration-500"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <AnimationRightToLeft>
                    <Input
                      name="fullnames"
                      label="Full Name"
                      variant="bordered"
                      value={formData.fullnames}
                      onChange={handleChange}
                      radius="lg"
                      disabled={submitted}
                      className="bg-gray-50"
                      required
                    />
                  </AnimationRightToLeft>

                  <AnimationDownToUp>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <PhoneInput
                        country="ke"
                        value={formData.mobileno}
                        onChange={handlePhoneChange}
                        inputStyle={{
                          width: "100%",
                          height: "52px",
                          borderRadius: "10px",
                          borderColor: "#ddd",
                          fontSize: "15px",
                        }}
                        containerClass="w-full"
                        disabled={submitted}
                      />
                    </div>
                  </AnimationDownToUp>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <AnimationDownToUp>
                    <Input
                      name="email"
                      label="Email Address"
                      type="email"
                      variant="bordered"
                      value={formData.email}
                      onChange={handleChange}
                      radius="lg"
                      disabled={submitted}
                      required
                    />
                  </AnimationDownToUp>

                  <AnimationRightToLeft>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Agency Representation
                      </label>
                      <textarea
                        name="agencies"
                        value={formData.agencies}
                        onChange={handleChange}
                        required
                        disabled={submitted}
                        rows={4}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </AnimationRightToLeft>
                </div>

                {/* ✅ Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex justify-center"
                >
                  <Button
                    type="submit"
                    disabled={submitted}
                    className={`relative px-10 py-5 text-lg font-semibold rounded-xl text-white shadow-lg bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 hover:shadow-indigo-500/50 transition-all duration-300 ease-in-out ${submitted ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                  >
                    {submitted ? "Submitted" : "Submit"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegForm;
