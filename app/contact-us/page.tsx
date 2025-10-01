"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Textarea,
  Button,
  Select,
  SelectItem,
} from "@heroui/react";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline"; // for WhatsApp

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiryType: "",
    details: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    type: "success",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSnackbar({
          open: true,
          type: "success",
          message: data.message,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          enquiryType: "",
          details: "",
        });
      } else {
        setSnackbar({ open: true, type: "error", message: data.error });
      }
    } catch (err: any) {
      setSnackbar({ open: true, type: "error", message: err.message });
    }
    setLoading(false);
  };

  const handleClickWhatsapp = () => {
    window.open("https://wa.me/254742222888", "_blank");
  };

  const contactDetails = [
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      label: "+254 742 222 888",
      href: "tel:+254742222888",
    },
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      label: "+254 111 056 610",
      href: "tel:+254111056610",
    },
    {
      icon: <ChatBubbleLeftIcon className="w-5 h-5" />,
      label: "+254 742 222 888",
      onClick: handleClickWhatsapp,
    },
    {
      icon: <EnvelopeIcon className="w-5 h-5" />,
      label: "customerservice@birdviewinsurance.com",
      href: "mailto:customerservice@birdviewinsurance.com",
    },
    {
      icon: <BuildingLibraryIcon className="w-5 h-5" />,
      label:
        "Ground Floor, Fidelity Center, Waiyaki Way, Westlands, Nairobi, Kenya",
      href: "https://www.google.com/maps?q=Fidelity+Center,+Waiyaki+Way,+Westlands,+Nairobi,+Kenya",
      target: "_blank",
    },
  ];

  return (
    <div className="relative min-h-screen w-full">
      {/* Global Branded Background */}
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

      {/* Cards Section */}
      <div className="py-12 px-4 sm:px-8 lg:px-20 grid lg:grid-cols-2 gap-10">
        {/* Contact Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="relative group"
        >
          {/* Glow wrapper */}
          <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-primary/70 to-danger/70 opacity-60 blur-lg group-hover:opacity-90 transition duration-500" />
          <Card
            shadow="lg"
            className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20"
          >
            <CardHeader>
              <h2 className="text-xl font-bold text-primary mb-4">
                Our Contact Details
              </h2>
            </CardHeader>
            <CardBody className="flex flex-col space-y-4">
              {contactDetails.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href || "#"}
                  target={item.target}
                  onClick={item.onClick}
                  className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-gray-100 text-sm md:text-base break-words">
                    {item.label}
                  </span>
                </a>
              ))}
            </CardBody>
          </Card>
        </motion.div>

        {/* Inquiry Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative group"
        >
          {/* Glow wrapper */}
          <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-danger/70 to-primary/70 opacity-60 blur-lg group-hover:opacity-90 transition duration-500" />
          <Card
            shadow="lg"
            className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20"
          >
            <CardHeader>
              <h2 className="text-2xl font-bold text-white mb-4">
                Inquiry Form
              </h2>
            </CardHeader>
            <CardBody>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <Input
                    required
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <Input
                    required
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <Input
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <Select
                    isRequired
                    label="Enquiry Type"
                    name="enquiryType"
                    selectedKeys={[formData.enquiryType]}
                    onChange={(e) =>
                      handleChange({
                        target: {
                          name: "enquiryType",
                          value: e.target.value,
                        },
                      } as any)
                    }
                  >
                    <SelectItem key="General Inquiry">
                      General Inquiry
                    </SelectItem>
                    <SelectItem key="Insurance">Insurance</SelectItem>
                    <SelectItem key="Payment">Payment</SelectItem>
                    <SelectItem key="Support">Support</SelectItem>
                    <SelectItem key="Other">Other</SelectItem>
                  </Select>
                  <Textarea
                    required
                    label="Details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <Button
                    type="submit"
                    loading={loading}
                    className="bg-gradient-to-r from-primary to-danger text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      {/* Map */}
      <div className="w-full flex justify-center mt-16">
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.705416799195!2d36.78112685680388!3d-1.2605821231891767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17096b536781%3A0x3dda25d4e884798f!2sBirdview%20Microinsurance%20Limited!5e0!3m2!1sen!2ske!4v1747302441741!5m2!1sen!2ske"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Birdview Microinsurance Location"
          ></iframe>
        </div>
      </div>

      {/* Snackbar / Alerts */}
      {snackbar.open && (
        <div
          className={`fixed bottom-6 right-6 p-4 rounded-xl shadow-lg text-white ${snackbar.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
        >
          {snackbar.message}
          <button
            onClick={() => setSnackbar({ ...snackbar, open: false })}
            className="ml-4 font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
