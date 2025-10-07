"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const posts = [
  {
    title: "Hospital Cash Insurance in Kenya: How It Works & Why You Need It",
    excerpt:
      "Hospital cash insurance cushions families during unexpected hospital stays, offering affordable protection when most needed.",
    date: "Sep 1, 2025",
    image: "/images/blog-hospital-cash.jpg",
    slug: "hospital-cash-insurance-kenya-how-it-works-why-you-need-it",
    category: "Insurance",
  },
  {
    title: "Last Expense Insurance in Kenya: A Complete Guide for Families",
    excerpt:
      "Funeral costs can overwhelm grieving families. Learn how last expense insurance provides dignity, preparedness, and financial relief.",
    date: "Sep 3, 2025",
    image: "/images/blog-last-expense.jpg",
    slug: "last-expense-insurance-kenya-complete-guide-families",
    category: "Insurance",
  },
  {
    title: "Group Medical Insurance for SMEs in Kenya: Costs, Benefits & How It Works",
    excerpt:
      "SMEs power Kenya’s economy. Group medical insurance helps attract and retain talent while keeping costs manageable.",
    date: "Sep 5, 2025",
    image: "/images/blog-sme-medical.jpg",
    slug: "group-medical-insurance-smes-kenya-costs-benefits",
    category: "Insurance",
  },
  {
    title:
      "How Medical Evacuation & Repatriation Insurance Saves Kenyan Families (And Why It’s Becoming Essential)",
    excerpt:
      "Emergencies strike without warning. Medical evacuation and repatriation insurance ensures safety and dignity anywhere in the world.",
    date: "Sep 7, 2025",
    image: "/images/blog-evacuation.jpg",
    slug: "medical-evacuation-repatriation-insurance-kenya-essential",
    category: "Insurance",
  },
  {
    title: "Birdview Brings the Vibe: Chill & Vybz Mombasa Edition",
    excerpt:
      "Birdview Insurance joined Chill & Vybz Season 4 as proud sponsors, celebrating culture, music, and togetherness in Mombasa.",
    date: "Sep 10, 2025",
    image: "/images/blog-chillvybz.jpg",
    slug: "birdview-brings-vibe-chill-vybz-mombasa-edition",
    category: "Events",
  },
  {
    title:
      "Birdview at the Kenya-UK Investment Mission 2025: Championing Diaspora Protection Alongside Progress",
    excerpt:
      "At the Kenya-UK Investment Mission, Birdview highlighted its role in protecting diaspora families navigating life abroad.",
    date: "Sep 12, 2025",
    image: "/images/blog-uk-mission.jpg",
    slug: "birdview-kenya-uk-investment-mission-2025-diaspora-protection",
    category: "Events",
  },
  {
    title: "Celebrating Culture and Connection: Birdview at Kenya-UK Utamaduni Day",
    excerpt:
      "Birdview proudly sponsored Utamaduni Day, uniting the Kenyan diaspora in the UK with culture, pride, and heritage.",
    date: "Sep 14, 2025",
    image: "/images/blog-utamaduni.jpg",
    slug: "birdview-kenya-uk-utamaduni-day-celebration",
    category: "Events",
  },
  {
    title:
      "Mitigating the Crisis: How Birdview Insurance Protects Kenyans Abroad from the Worst-Case Scenarios",
    excerpt:
      "Birdview provides critical insurance for Kenyans abroad, protecting them against abuse, exploitation, and tragic loss.",
    date: "Sep 16, 2025",
    image: "/images/blog-crisis.jpg",
    slug: "mitigating-crisis-birdview-insurance-protects-kenyans-abroad",
    category: "Insurance",
  },
  {
    title:
      "South Sudan Insurance Conference: Birdview Leads the Way in Diaspora Protection",
    excerpt:
      "Birdview deepened its regional presence by hosting the Diaspora Insurance Conference in Juba, South Sudan.",
    date: "Sep 18, 2025",
    image: "/images/blog-south-sudan.jpg",
    slug: "south-sudan-insurance-conference-birdview-diaspora-protection",
    category: "Events",
  },
  {
    title: "Evacuation & Repatriation Insurance for Kenyans Abroad",
    excerpt:
      "Evacuation and repatriation cover ensures dignity and financial support for Kenyans abroad during emergencies.",
    date: "Sep 20, 2025",
    image: "/images/blog-repatriation.jpg",
    slug: "evacuation-repatriation-insurance-kenyans-abroad",
    category: "Insurance",
  },
  {
    title:
      "How Digital Innovation Is Making Insurance More Accessible in Kenya & Beyond",
    excerpt:
      "From mobile to automation, digital innovation is transforming how Kenyans access affordable, instant insurance.",
    date: "Sep 22, 2025",
    image: "/images/blog-digital.jpg",
    slug: "digital-innovation-making-insurance-accessible-kenya-beyond",
    category: "Innovation",
  },
  {
    title:
      "Affordable Insurance Solutions for Migrant Workers & Kenyans in the Diaspora",
    excerpt:
      "Birdview offers affordable, tailored coverage for migrant workers, protecting against risks like job loss and medical emergencies.",
    date: "Sep 23, 2025",
    image: "/images/blog-diaspora.jpg",
    slug: "affordable-insurance-solutions-migrant-workers-kenyans-diaspora",
    category: "Insurance",
  },
  {
    title: "Why Birdview Exists: A Story of Purpose, Protection, and Kenyan Resilience",
    excerpt:
      "Birdview was founded to make protection simple, affordable, and accessible—especially when it matters most.",
    date: "Sep 24, 2025",
    image: "/images/blog-purpose.jpg",
    slug: "why-birdview-exists-purpose-protection-kenyan-resilience",
    category: "Corporate",
  },
  {
    title:
      "Case Study: The Emotional and Financial Toll of Repatriation – A Call for Preparedness",
    excerpt:
      "Repatriating a loved one is emotionally heavy and financially draining. Learn why preparedness is essential.",
    date: "Sep 25, 2025",
    image: "/images/blog-case-repatriation.jpg",
    slug: "case-study-repatriation-emotional-financial-toll",
    category: "Case Study",
  },
  {
    title:
      "Why Traditional Insurance Isn’t Built for Everyone—and How Microinsurance Is Changing the Game",
    excerpt:
      "Traditional insurance often excludes millions. Microinsurance provides affordable, practical solutions for everyday realities.",
    date: "Sep 26, 2025",
    image: "/images/blog-microinsurance.jpg",
    slug: "why-traditional-insurance-not-for-everyone-microinsurance-changing-game",
    category: "Innovation",
  },
  {
    title:
      "Birdview Insurance Connects with Diaspora at LDSCKF Kenya Cultural Day",
    excerpt:
      "Birdview engaged diaspora communities at the LDSCKF Kenya Cultural Day, reinforcing its mission of protection.",
    date: "Sep 27, 2025",
    image: "/images/blog-culturalday.jpg",
    slug: "birdview-insurance-diaspora-ldsckf-kenya-cultural-day",
    category: "Events",
  },
];

export default function Blog() {
  const [showAll, setShowAll] = useState(false);

  const initialPosts = posts.slice(0, 6);
  const remainingPosts = posts.slice(6);

  return (
    <main className="relative min-h-screen px-6 py-20 bg-pr">
      {/* Corporate Background Image */}


      <h1 className="text-5xl font-bold text-center text-white mb-12 relative z-10">
        Blog & Insights
      </h1>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {initialPosts.map((post, i) => (
          <BlogCard key={i} post={post} index={i} />
        ))}

        {/* Animate remaining posts with slide-down */}
        <AnimatePresence initial={false}>
          {showAll &&
            remainingPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <BlogCard post={post} index={i + 6} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less Button */}
      <div className="flex justify-center mt-12 relative z-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full shadow-lg transition"
        >
          {showAll ? "Show Less" : "Show More"}
          <motion.span
            animate={{ rotate: showAll ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            ▼
          </motion.span>
        </button>
      </div>
    </main>
  );
}

// BlogCard Component
function BlogCard({ post, index }: { post: typeof posts[0]; index: number }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <Card className="bg-white/80 backdrop-blur-lg border border-gray-300 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <CardHeader className="p-6 flex flex-col gap-2">
          {/* Category Badge */}
          <span className="self-start px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-blue-600 text-white shadow-md">
            {post.category}
          </span>

          <h2 className="text-2xl font-semibold text-gray-900 group-hover:underline">
            {post.title}
          </h2>
        </CardHeader>

        <CardBody className="p-6 text-gray-700">
          <p className="mb-4">{post.excerpt}</p>
          <p className="text-sm text-gray-500">{post.date}</p>
        </CardBody>
      </Card>
    </Link>
  );
}
