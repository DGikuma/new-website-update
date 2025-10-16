"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Link, Card, CardHeader, CardBody, Accordion, AccordionItem } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useRef } from "react";

import { siteConfig } from "@/config/site";
import {
  Users,
  FileText,
  Wallet,
  Star,
  Handshake,
  Clock,
} from "lucide-react";

import LiquidRingLoader from "@/components/LiquidRingLoader";

// Animated counter component
interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  { label: "Active Clients", value: 1200, suffix: "+", icon: <Users className="w-8 h-8 text-danger" /> },
  { label: "Policies Issued", value: 4500, suffix: "+", icon: <FileText className="w-8 h-8 text-danger" /> },
  { label: "Claims Settled", value: 3200, suffix: "+", icon: <Wallet className="w-8 h-8 text-danger" /> },
  { label: "Customer Satisfaction", value: 98, suffix: "%", icon: <Star className="w-8 h-8 text-danger" /> },
  { label: "Partner Agencies", value: 85, suffix: "+", icon: <Handshake className="w-8 h-8 text-danger" /> },
  { label: "Years of Service", value: 10, suffix: "+", icon: <Clock className="w-8 h-8 text-danger" /> },
];

function StatCard({ label, value, suffix, icon }: StatItem) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / value));
            const timer = setInterval(() => {
              start += 1;
              setDisplayValue(start);
              if (start >= value) clearInterval(timer);
            }, stepTime);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [value, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 flex flex-col items-center text-center border border-white/20 hover:scale-105 transform transition"
    >
      <div className="mb-4">{icon}</div>
      <motion.h3
        className="text-4xl font-extrabold text-white"
        key={displayValue}
      >
        {displayValue}
        {suffix}
      </motion.h3>
      <p className="mt-2 text-gray-100 text-lg">{label}</p>
    </motion.div>
  );
}

export default function Home() {
  const allProducts = [
    { title: "Evacuation and Repatriation", img: "/assets/productsPhotos/Evacuation-and-Repatriation.png", desc: "This cover is crafted to intervene and rescue situations of citizens being either stranded or deceased abroad." },
    { title: "Last Expense", img: "/assets/productsPhotos/last-expense.png", desc: "Our last expense/funeral expense cover pays a specified cash amount within 48 hours of notification of death." },
    { title: "Medical", img: "/assets/productsPhotos/medical.png", desc: "Our medical insurance products include inpatient (With In-built Maternity), Outpatient, Dental, and Optical." },
    { title: "Hospital Cash", img: "/assets/productsPhotos/hospital-cash.png", desc: "Daily payments for insureds admitted in hospital for up to a maximum of 10 payments per year or admission." },
    { title: "Personal Accident", img: "/assets/productsPhotos/personal-accident.png", desc: "Plan provides fixed sum payout on death, permanent disablement, and medical expenses arising because of an accident." },
    { title: "Motorbike/Bodaboda Insurance Application", img: "/assets/productsPhotos/motorbike.jpg", desc: "Covers your motorbike against damage, theft, or loss, including third-party liability." },
    { title: "TukuTuk Insurance Application", img: "/assets/productsPhotos/tuktuk.png", desc: "This insurance offers both Third Party and Comprehensive cover—protecting against damage or loss, third party liability." },
    { title: "Probation Guard", img: "/assets/productsPhotos/prob_guard.png", desc: "This enhancement to our existing Evacuation and Repatriation Cover includes a new component." },
    { title: "AQUABIMA Insurance", img: "/assets/productsPhotos/aqua_culture.jpeg", desc: "AQUABIMA is a tailored insurance solution for cage and pond farmers, ensuring guaranteed returns on investment." },
  ];

  const testimonials = [
    { name: "Alice Mwangi", role: "Software Engineer", avatar: "/assets/managementPhotos/Ann-Kinyanjui.png", text: "Birdview Insurance made choosing the right plan incredibly easy. Highly recommend!" },
    { name: "John Kamau", role: "Business Owner", avatar: "/assets/managementPhotos/Richard-Muiru.png", text: "Fast, reliable, and trustworthy. Their coverage saved us during an unexpected event." },
    { name: "Grace Njeri", role: "Freelancer", avatar: "/assets/managementPhotos/Mary-Mundia.png", text: "Excellent customer service and flexible plans that fit my needs perfectly." },
  ];

  const benefits = [
    {
      title: "Fast Claims",
      icon: "/icons/fast.svg",
      desc: "Quick and hassle-free claim processing."
    },
    {
      title: "Trusted Partner",
      icon: "/icons/trusted.svg",
      desc: "Over 20 years of experience and reliability."
    },
    {
      title: "24/7 Support",
      icon: "/icons/support.svg",
      desc: "We’re here for you anytime, anywhere."
    },
    {
      title: "Tailored Plans",
      icon: "/icons/tailored.svg",
      desc: "Custom insurance plans that fit your life."
    },
    {
      title: "Global Coverage",
      icon: "/icons/global.svg",
      desc: "Insurance solutions that protect you worldwide."
    },
    {
      title: "Affordable Premiums",
      icon: "/icons/affordable.svg",
      desc: "Comprehensive protection at competitive rates."
    },
  ];

  const faqs = [
    {
      q: "What types of insurance do you offer?",
      a: "We provide comprehensive coverage including Health, Auto, Life, Property, Travel, and Business Insurance. Each plan is customizable to suit individual or corporate needs.",
    },
    {
      q: "How can I get a quote?",
      a: "You can easily request a free online quote through our website, or schedule a call with one of our licensed agents for a personalized consultation.",
    },
    {
      q: "Do you cover businesses?",
      a: "Yes, we offer tailored solutions for businesses of all sizes, including liability, employee health, fleet, and property insurance packages.",
    },
    {
      q: "Are your plans flexible?",
      a: "Absolutely. We provide flexible options and add-ons so that your coverage grows with your needs, ensuring you're always protected.",
    },
    {
      q: "How do I file a claim?",
      a: "You can file a claim directly on our website, through our mobile app, or by contacting our 24/7 customer support team. Claims are processed promptly with full transparency.",
    },
    {
      q: "Do you offer international coverage?",
      a: "Yes. For frequent travelers and expatriates, we provide global coverage options that ensure you’re protected anywhere in the world.",
    },
    {
      q: "Is there a dedicated support team?",
      a: "Yes, we have a 24/7 dedicated support team available via phone, email, and live chat to assist you with inquiries, claims, or policy updates.",
    },
  ];

  const partners = [
    { name: "Liason", logo: "/partners/liason.png" },
    { name: "Covara", logo: "/partners/covara.png" },
    { name: "Imana", logo: "/partners/imana.png" },
    { name: "Waumini", logo: "/partners/waumini.png" },
    { name: "AIBK", logo: "/partners/aibk.png" },
  ];

  const [showAllProducts, setShowAllProducts] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Animate products sequentially
  const productVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15 } }),
  };

  const [isLoading, setIsLoading] = useState(true);

  // Cycle testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [previewLength, setPreviewLength] = useState(80);

  // Adjust preview length based on screen size
  useEffect(() => {
    const updateLength = () => {
      if (window.innerWidth < 640) {
        setPreviewLength(50); // mobile
      } else if (window.innerWidth < 1024) {
        setPreviewLength(80); // tablet
      } else {
        setPreviewLength(120); // desktop
      }
    };

    updateLength();
    window.addEventListener("resize", updateLength);
    return () => window.removeEventListener("resize", updateLength);
  }, []);

  useEffect(() => {
    // Simulate a loading delay (e.g., API call or heavy assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Loader visible for ~2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LiquidRingLoader />;
  }

  return (
    <section className="flex flex-col gap-16 w-full overflow-visible">

      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      >
        {/* Overlay for brand colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-black/40 to-red-600/80" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white max-w-5xl"
          >
            Exceeding <span className="text-red-400">Your Expectations</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 text-gray-200 md:text-lg max-w-3xl"
          >
            Affordable and reliable micro insurance solutions, built to protect
            individuals, families, and small businesses. Coverage that grows with
            your needs — simple, transparent, and accessible.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex gap-4 mt-8 flex-wrap justify-center"
          >
            <Link
              href={siteConfig.links.getQuote || "#"}
              className="relative px-6 py-3 rounded-full text-white font-semibold bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-500 shadow-lg"
            >
              Get Covered Today
            </Link>
            <Link
              href={siteConfig.links.services || "#"}
              className="relative px-6 py-3 rounded-full text-white font-semibold bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-500 shadow-lg"
            >
              Explore Plans
            </Link>
          </motion.div>
        </div>
      </div>


      {/* Products Section */}
      <Card
        shadow="lg"
        radius="lg"
        className="w-full relative overflow-visible 
             bg-gradient-to-br from-primary/95 via-primary/80 to-danger/90 
             text-white rounded-3xl"
      >
        {/* Premium Gradient + Image Overlay */}
        <div className="absolute inset-0 -z-10">
          {/* Smooth brand gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-danger/80" />

          {/* Hero abstract light burst */}
          <div className="absolute top-[-6rem] left-[-6rem] w-[20rem] h-[20rem] bg-primary/40 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute bottom-[-6rem] right-[-6rem] w-[22rem] h-[22rem] bg-danger/40 rounded-full blur-3xl opacity-50 animate-pulse" />

          {/* Background image with frosted overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{ backgroundImage: "url('/images/premium-bg.jpg')" }}
          />
        </div>

        {/* Decorative Background Wave */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 -z-10 opacity-30">
          <svg viewBox="0 0 1440 320" className="w-full h-full">
            <path
              fill="white"
              fillOpacity="0.3"
              d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,224C672,224,768,192,864,176C960,160,1056,160,1152,165.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Section Header */}
        <CardHeader className="text-3xl md:text-4xl font-bold text-center text-white mb-10 relative z-10 drop-shadow-lg">
          Our Insurance Products
        </CardHeader>

        {/* Product Cards with Frosted Glass & Glow */}
        <CardBody className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {(showAllProducts ? allProducts : allProducts.slice(0, 4)).map((product, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={productVariants}
              whileHover={{ scale: 1.07 }}
              className="cursor-pointer"
            >
              <Card
                shadow="sm"
                radius="lg"
                className="relative overflow-hidden 
                     bg-white/10 backdrop-blur-xl 
                     border border-white/20 
                     hover:shadow-2xl transition-all duration-300"
              >
                {/* Glow Overlay */}
                <div
                  className="absolute inset-0 rounded-lg pointer-events-none opacity-50"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(var(--tw-primary-rgb),0.25), rgba(var(--tw-danger-rgb),0.25))",
                  }}
                />

                <Image
                  src={product.img}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="rounded-t-lg object-cover h-48 w-full relative z-10"
                />
                <CardHeader className="text-xl font-semibold text-white px-4 pt-4 relative z-10 drop-shadow-md">
                  {product.title}
                </CardHeader>
                <CardBody className="text-gray-200 px-4 pb-6 relative z-10">
                  {product.desc}
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </CardBody>

        {/* Dropdown Arrow */}
        <div className="flex justify-center mt-6 relative z-10">
          <button
            onClick={() => setShowAllProducts(!showAllProducts)}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-primary shadow-lg backdrop-blur-md transition-all"
          >
            {showAllProducts ? "Show Less" : "Show More"}
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${showAllProducts ? "rotate-180" : ""
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </Card>

      {/* Testimonial Carousel */}
      <Card
        shadow="lg"
        radius="xl"
        className="w-full relative overflow-hidden py-20"
      >
        {/* Background Image + Brand Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/backdrop1.jpg"
            alt="Corporate backdrop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-black/60 to-danger/80 mix-blend-multiply" />
        </div>

        {/* Header */}
        <CardHeader className="text-4xl md:text-5xl font-bold text-center text-white mb-14 relative z-10 tracking-tight">
          What Our Clients Say
        </CardHeader>

        {/* Testimonial Content */}
        <CardBody className="relative z-10 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (t, i) =>
                i === currentTestimonial && (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-6 text-center px-8"
                  >
                    {/* Quote Icon */}
                    <div className="text-6xl text-white/40 font-serif">“</div>

                    {/* Testimonial Text */}
                    <p className="text-white text-xl md:text-2xl leading-relaxed font-light italic max-w-3xl">
                      {t.text}
                    </p>

                    {/* Client Identity */}
                    <div className="flex flex-col items-center gap-1">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={180}
                        height={180}
                        className="rounded-full object-cover shadow-lg border-4 border-white/40"
                      />
                      <p className="mt-4 font-semibold text-lg text-white">{t.name}</p>
                      <p className="text-sm text-white/70 tracking-wide uppercase">
                        {t.role}
                      </p>
                    </div>

                    {/* Optional: Client Company Logo */}
                    {t.companyLogo && (
                      <Image
                        src={t.companyLogo}
                        alt={`${t.name} company`}
                        width={140}
                        height={50}
                        className="mt-4 object-contain opacity-80 invert"
                      />
                    )}
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </CardBody>
      </Card>

      {/* Why Choose Us / Benefits */}
      <Card
        shadow="lg"
        radius="xl"
        className="relative w-full py-20 overflow-hidden border-0"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/partner.png"
            alt="Global Background"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-black/80 to-danger/90 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <CardHeader className="text-3xl md:text-4xl font-bold text-center text-white drop-shadow mb-16">
            Why Choose Birdview Insurance
          </CardHeader>

          <CardBody>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg transition hover:scale-105 h-full"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="drop-shadow-lg"
                  />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardBody>
        </div>
      </Card>

      {/* Partners Section */}
      <Card
        shadow="lg"
        radius="xl"
        className="w-full relative overflow-hidden py-20 px-6 md:px-12 border border-white/20"
        style={{
          backgroundImage: "url('/images/partner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <CardHeader className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-white"
            >
              Trusted by Global Industry Leaders
            </motion.h2>
            <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
              We partner with the world’s most respected insurers to deliver
              <span className="text-danger font-semibold"> secure, reliable,</span>{" "}
              and <span className="text-danger font-semibold">customer-first</span>{" "}
              solutions across industries.
            </p>
          </CardHeader>
          <CardBody className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-500 ease-out flex items-center justify-center w-full h-28"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={60}
                    className="object-contain w-full h-full grayscale hover:grayscale-0 transition duration-500 ease-out"
                  />
                </div>
              </motion.div>
            ))}
          </CardBody>
        </div>
      </Card>

      {/* Quick Quote CTA */}
      <div className="w-full bg-gradient-to-r from-primary to-violet py-24 text-center text-white relative z-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Protect What Matters Most?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Get your personalized insurance quote in minutes.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href={siteConfig.links.getQuote || "https://quote.birdviewinsurance.com/"}
            className="px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-primary/90 transition"
          >
            Get a Quote
          </Link>
          <Link
            href={siteConfig.links.contact || "#"}
            className="px-8 py-4 rounded-full bg-danger text-white font-semibold shadow-lg hover:bg-danger/90 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      { /* STATS */}
      <Card
        shadow="lg"
        radius="xl"
        className="relative overflow-hidden w-full text-white py-20 px-6 md:px-12 border border-white/20"
        style={{
          backgroundImage: "url('/images/stats.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blurred overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-center mb-12"
          >
            Our Growth in Numbers
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>
        </div>
      </Card>

      {/* FAQ */}
      <Card
        shadow="lg"
        radius="lg"
        className="
    w-full relative overflow-hidden
    py-16 px-6 md:px-12
    text-white
    rounded-3xl
    border border-white/10
    bg-white/10
    backdrop-blur-2xl
    shadow-[0_8px_30px_rgba(0,0,0,0.2)]
  "
      >
        {/* 🌌 Background Image with Gradient Overlay */}
        <Image
          src="/images/faq-bg.png"
          alt="FAQ Background"
          fill
          priority
          className="object-cover opacity-40 absolute inset-0 -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-danger/50 to-primary/70 -z-10" />

        {/* 🔹 Animated Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 drop-shadow-lg"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="max-w-3xl mx-auto"
        >
          <Accordion
            variant="splitted"
            className="rounded-xl overflow-hidden"
            itemClasses={{
              base: "rounded-xl overflow-hidden group relative",
              trigger: "px-6 py-4 transition-colors",
              content: "px-6 pb-4 text-sm",
            }}
          >
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                aria-label={faq.q}
                title={
                  <span
                    className="
                font-bold 
                group-data-[open=false]:text-white/90 
                group-data-[open=true]:text-white
              "
                  >
                    {faq.q}
                  </span>
                }
                className={`
            group relative
            [&[data-open='true']]:bg-gradient-to-r from-danger to-primary
            [&[data-open='false']]:bg-white/10
            backdrop-blur-xl
            transition-all duration-500
            border border-white/10
          `}
              >
                {/* 🔹 Hover Tooltip Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                  className="
              absolute left-1/2 -translate-x-1/2 -top-12
              px-3 py-2 
              bg-black/70 text-white text-xs rounded-lg shadow-lg
              max-w-[250px] sm:max-w-[300px] md:max-w-[400px]
              text-center z-50
              opacity-0 pointer-events-none
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-300
            "
                >
                  {faq.a.length > 80 ? faq.a.substring(0, 80) + "..." : faq.a}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-white/90"
                >
                  {faq.a}
                </motion.p>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Card>

    </section >
  );
}
