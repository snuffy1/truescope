"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FAQ from "@/components/FAQ/FAQ";
import WhyUs from "@/components/WhyUs/WhyUs";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

// Simple Chevron Down Icon
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can TrueScope increase my business revenue?",
      answer:
        "Our clients typically see measurable results within 60-90 days. Most businesses experience a 200-400% increase in qualified leads and 150-300% boost in conversion rates within the first 6 months. Our data-driven strategies and proven marketing frameworks are designed to deliver rapid, sustainable growth that scales with your business.",
    },
    {
      question: "What makes TrueScope different from other marketing agencies?",
      answer:
        "TrueScope combines AI-driven analytics, psychology-based conversion optimization, and proprietary growth frameworks that deliver an average 450% ROI. We don't just run campaigns – we engineer market disruption. With 95% client retention and over $50M in client revenue generated, we're your competitive advantage in the digital battlefield.",
    },
    {
      question: "Do you guarantee marketing results and ROI?",
      answer:
        "Yes! We're so confident in our strategies that we offer performance guarantees. If we don't increase your qualified leads by at least 200% within 6 months, we'll work for free until we do. Our proven track record includes helping 500+ companies achieve breakthrough growth with measurable, data-backed results.",
    },
    {
      question: "What's included in your marketing transformation packages?",
      answer:
        "Our comprehensive ecosystem includes strategic brand positioning, high-converting funnel optimization, multi-channel campaign management, advanced analytics, SEO dominance, social media amplification, content marketing, and conversion rate optimization. Everything you need to dominate your market and scale exponentially.",
    },
    {
      question: "How do you ensure my marketing budget delivers maximum ROI?",
      answer:
        "We use proprietary AI-driven analytics and real-time performance optimization to ensure every dollar works harder. Our clients see an average customer acquisition cost reduction of 45% while increasing sales pipeline by 3x. We provide transparent reporting with detailed ROI metrics updated weekly.",
    },
    {
      question:
        "Can TrueScope help small startups compete with larger companies?",
      answer:
        "Absolutely! We specialize in helping startups and growing businesses achieve market leadership. Our David vs. Goliath strategies have helped numerous small companies outrank Fortune 500 competitors. We level the playing field through smart targeting, innovative positioning, and guerrilla marketing tactics that deliver outsized results.",
    },
    {
      question: "What ongoing support and optimization do you provide?",
      answer:
        "We provide 24/7 performance monitoring, monthly strategy optimization sessions, real-time campaign adjustments, and dedicated account management. Our team continuously refines your campaigns using machine learning algorithms and market intelligence to maintain your competitive edge and accelerate growth.",
    },
    {
      question: "How do you measure and report marketing success?",
      answer:
        "We track 47+ key performance indicators including lead quality, conversion rates, customer lifetime value, market share growth, and brand visibility metrics. You'll receive detailed weekly reports with actionable insights, plus access to our real-time dashboard showing your marketing ROI, lead pipeline, and revenue attribution.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MainLayoutWrapper>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Design matching homepage */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />
        <div className="absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-sky-100 opacity-60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-indigo-100 opacity-60 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-72 rounded-full bg-[#28a717]/10 opacity-40 blur-3xl" />

        <div className="container mx-auto px-6 sm:px-8 md:px-12 py-16 sm:py-16 md:py-20">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-3xl md:text-6xl font-cal-sans font-medium text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-inter leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about our marketing
              transformation services and how we help businesses achieve
              explosive growth.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Interactive FAQ Items */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-16"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 rounded-xl transition-colors duration-200"
                  >
                    <h3 className="text-lg md:text-xl text-gray-900 font-cal-sans pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDownIcon className="w-6 h-6 text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-700 leading-relaxed font-inter">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <FAQ />
      <WhyUs />
    </MainLayoutWrapper>
  );
};

export default FAQPage;
