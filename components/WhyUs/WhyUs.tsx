"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Zap, Target, BarChart3, Cpu, Users2, Lock } from "lucide-react";

// -------------------- Variants --------------------
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// -------------------- Data --------------------
const reasons = [
  {
    Icon: Target,
    title: "Strategy First",
    desc: "Every engagement begins with deep research and a measurable plan—so your digital presence connects, converts, and scales.",
  },
  {
    Icon: Cpu,
    title: "High-Performance Tech",
    desc: "Blazing-fast loads and modern architecture designed for Core Web Vitals, ensuring your site stays competitive and SEO-ready.",
  },
  {
    Icon: Zap,
    title: "All-in-One Solution",
    desc: "Branding, development, and marketing housed under one roof. We eliminate the friction of managing multiple specialized vendors.",
  },
  {
    Icon: BarChart3,
    title: "Data-Driven ROI",
    desc: "We prioritize insights over intuition. Every design choice is validated by data to drive consistent growth and performance.",
  },
  {
    Icon: Users2,
    title: "Human-Centered UX",
    desc: "Intuitive journeys designed for real people. We build trust through seamless interactions that turn visitors into loyal customers.",
  },
  {
    Icon: Lock,
    title: "Reliable Architecture",
    desc: "Secure, transparent, and scalable. We provide proactive communication and infrastructure that grows alongside your business.",
  },
];

// -------------------- Component --------------------
export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-white"
      aria-labelledby="why-us-heading"
    >
      {/* Refined Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute top-0 right-0 -z-10  bg-sky-50 rounded-full blur-3xl opacity-50 " />

      <div className=" px-6 sm:px-8 md:px-12 py-20 lg:py-32">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className=" font-bold tracking-widest uppercase text-3xl md:text-5xl mb-4 block">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                {" "}
                TrueScope
              </span>
            </span>
            <h2
              id="why-us-heading"
              className="text-4xl mt-8 font-bold tracking-tight text-slate-900 leading-[1.1]"
            >
              Experiences that drive growth.
            </h2>
            <h2>
              {" "}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-600 mt-4"
              >
                We combine product thinking, beautiful design, and technical
                excellence to deliver outcomes your team can measure.
              </motion.p>
            </h2>
          </motion.div>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map(({ Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={item}
              className="group relative p-8 rounded-2xl border border-slate-100 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-xl hover:border-sky-200 hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-[#28a717] group-hover:bg-[#28a717] group-hover:text-white transition-colors duration-300">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>

              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                {desc}
              </p>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-[-20px] right-[-20px] h-10 w-10 rotate-45 bg-sky-50 transition-transform group-hover:scale-150" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
