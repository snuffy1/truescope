"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What strategic services does TrueScope provide?",
      answer:
        "We deliver high-fidelity digital solutions encompassing custom web development, cloud infrastructure management, and performance-led marketing strategies. Our focus is on engineering platforms that convert visitors into measurable revenue.",
    },
    {
      question: "How does TrueScope ensure project performance?",
      answer:
        "Our architecture is built on advanced cloud hosting and proprietary server configurations. By combining the agility of our engineering team with data-driven management, we guarantee sub-second load times and 99.9% uptime for mission-critical business tools.",
    },
    {
      question: "Static vs. Dynamic: Which infrastructure do I need?",
      answer:
        "Static architectures are optimal for high-speed brand storytelling and portfolios where security is paramount. Dynamic systems are engineered for scale—ideal for e-commerce, user-driven dashboards, and content-heavy platforms requiring real-time data synchronization.",
    },
    {
      question: "What is your approach to Social Media Growth?",
      answer:
        "We move beyond 'posting' to full-funnel management. This includes multi-platform creative direction, high-intent ad placement on Google and Meta, and conversion rate optimization (CRO) to ensure your social presence drives direct sales impact.",
    },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32 border-t border-slate-50">
      <div className=" px-6 lg:px-12">
        {/* Editorial Header Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20 lg:mb-32">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-black tracking-[0.3em] uppercase text-[#28a717] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#28a717]" />
              Support & Insights
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[0.95]">
              Common {""}
              <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                Inquiries.
              </span>
            </h3>
          </div>

          <div className="lg:w-1/3 flex items-end">
            <p className="text-lg text-slate-500 font-medium leading-relaxed border-l-2 border-slate-100 pl-6">
              Clear answers to our most frequent partnership questions. Designed
              for transparency and operational clarity.
            </p>
          </div>
        </div>

        {/* Minimalist Accordion */}
        <div className=" border-t border-slate-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border-b border-slate-100 transition-colors duration-500 ${
                  isOpen ? "bg-slate-50/50" : "hover:bg-slate-50/30"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-8 px-4 text-left group"
                >
                  <span
                    className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-[#28a717]" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-500 ${
                      isOpen
                        ? "bg-[#28a717] border-[#28a717] rotate-45"
                        : "border-slate-200"
                    }`}
                  >
                    <Plus
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isOpen
                          ? "text-white"
                          : "text-slate-400 group-hover:text-slate-900"
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 px-4 max-w-3xl">
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                          {faq.answer}
                        </p>

                        <div className="mt-8 flex gap-4">
                          <span className="h-px w-12 bg-[#28a717]/20 self-center" />
                          <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#28a717] hover:opacity-70 transition-opacity">
                            Learn more about this service
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer Contact Prompt */}
        <div className="= flex flex-col items-center">
          <div className="h-px w-24 bg-slate-100 mb-8" />
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">
            Still have questions?
            <span className="text-[#28a717] ml-2 cursor-pointer border-b border-[#28a717]/20 hover:border-[#28a717]">
              Contact our strategy team
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
