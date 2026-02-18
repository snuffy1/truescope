"use client";
import React from "react";
import { motion } from "framer-motion";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import {
  Briefcase,
  BellRing,
  Mail,
  HeartHandshake,
  Stethoscope,
  BookOpenCheck,
  Clock8,
  Trophy,
  Users,
  Cpu,
  Sparkles,
  Globe2,
} from "lucide-react";

const iconBox =
  "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#9dd43d]/10 text-[#9dd43d] ring-1 ring-[#9dd43d]/20";

const cardBase =
  "rounded-3xl border bg-white/70 p-6 shadow-sm backdrop-blur ring-1 transition-all";
const cardHover =
  "hover:-translate-y-0.5 hover:shadow-md hover:ring-[#9dd43d]/30";

const Careers = () => {
  return (
    <MainLayoutWrapper>
      <section className="relative min-h-screen overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(157, 212, 61, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(157, 212, 61, 0.08) 1px, transparent 1px)
          `,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Soft squares / blobs */}
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#9dd43d]/20 blur-3xl -z-10" />
        <div className="absolute opacity-0 md:opacity-100 top-24 right-[18%] h-16 w-16 rounded-md bg-[#9dd43d]/20" />
        <div className="absolute opacity-0 md:opacity-100 bottom-40 left-[85%] h-16 w-16 rounded-md bg-orange-100" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 py-16 sm:py-16 md:py-24">
          {/* Header */}
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl mb-6 font-cal-sans tracking-tight text-gray-900">
              Current Openings
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600 font-inter">
              We&apos;re always on the lookout for passionate, driven
              individuals to join our growing team. Explore our current job
              openings below and find the opportunity that best matches.
            </p>
          </div>

          {/* Empty state card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <div
              className={`${cardBase} ${cardHover} border-[#9dd43d]/20 ring-transparent`}
            >
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                <motion.div
                  initial={{ rotate: -6, scale: 0.96 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="shrink-0"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9dd43d]/10 text-[#9dd43d] ring-1 ring-[#9dd43d]/20">
                    <Briefcase className="h-7 w-7" aria-hidden="true" />
                  </div>
                </motion.div>

                <div className="flex-1 font-inter">
                  <h3 className="text-xl font-semibold text-gray-900">
                    No vacancies available right now.
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Don’t miss future roles—get notified or send us your resume
                    for our talent pool.
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row font-inter">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#9dd43d] to-[#7aac25]  hover:from-[#8cbf34] hover:to-[#6f8e1f] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  >
                    <BellRing className="h-4 w-4" />
                    Get job alerts
                  </a>
                  <a
                    href="mailto:hr@TrueScope.com?subject=Resume%20Submission%20-%20TrueScope"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#9dd43d]/30 bg-white px-4 py-2.5 text-sm font-medium text-[#9dd43d] shadow-sm transition hover:border-[#9dd43d]/50 hover:bg-[#9dd43d]/10"
                  >
                    <Mail className="h-4 w-4" />
                    Send resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Why Work With Us */}
          <div className="mt-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 font-cal-sans">
                Why Work With Us?
              </h2>
              <p className="mt-3 text-base text-gray-600 font-inter">
                At TrueScope, we believe people thrive when they feel supported,
                inspired, and equipped to succeed. Here’s what makes our
                workplace stand out.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 font-inter">
              {/* Benefits & Perks */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`${cardBase} ${cardHover} border-[#9dd43d]/20 ring-transparent`}
              >
                <h3 className="flex items-center gap-3 text-xl font-semibold text-[#9dd43d] ">
                  <div className={iconBox}>
                    <HeartHandshake className="h-5 w-5 text-[#9dd43d]" />
                  </div>
                  Benefits &amp; Perks
                </h3>
                <ul className="mt-4 space-y-3 text-sm [#9dd43d]">
                  <li className="flex items-start gap-3">
                    <div className={iconBox}>
                      <Trophy className="h-4 w-4" />
                    </div>
                    Competitive salary packages
                  </li>
                  <li className="flex items-start gap-3">
                    <div className={iconBox}>
                      <Stethoscope className="h-4 w-4" />
                    </div>
                    Health insurance coverage
                  </li>
                  <li className="flex items-start gap-3">
                    <div className={iconBox}>
                      <BookOpenCheck className="h-4 w-4" />
                    </div>
                    Professional development opportunities
                  </li>
                  <li className="flex items-start gap-3">
                    <div className={iconBox}>
                      <Clock8 className="h-4 w-4" />
                    </div>
                    Flexible working arrangements
                  </li>
                  <li className="flex items-start gap-3">
                    <div className={iconBox}>
                      <Sparkles className="h-4 w-4" />
                    </div>
                    Annual performance bonuses
                  </li>
                  <li className="flex items-start gap-3">
                    <div className={iconBox}>
                      <Users className="h-4 w-4" />
                    </div>
                    Team building activities
                  </li>
                </ul>
              </motion.div>

              {/* Work Environment */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`${cardBase} ${cardHover} border-[#9dd43d]/20 ring-transparent`}
              >
                <h3 className="flex items-center gap-3 text-xl font-semibold text-[#9dd43d]">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#9dd43d]/10 text-[#9dd43d] ring-1 ring-[#9dd43d]/20">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  Work Environment
                </h3>
                <ul className="mt-4 space-y-3 text-sm [#9dd43d]">
                  <li className="flex items-start gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#9dd43d]/10 text-[#9dd43d] ring-1 ring-[#9dd43d]/20">
                      <Cpu className="h-4 w-4" />
                    </div>
                    Latest technology and tools
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#9dd43d]/10 text-[#9dd43d] ring-1 ring-[#9dd43d]/20">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    Innovation-driven projects
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#9dd43d]/10 text-[#9dd43d] ring-1 ring-[#9dd43d]/20">
                      <Users className="h-4 w-4" />
                    </div>
                    Collaborative, multicultural team
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#9dd43d]/10 text-[#9dd43d] ring-1 ring-[#9dd43d]/20">
                      <Globe2 className="h-4 w-4" />
                    </div>
                    Modern office in Dubai
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#9dd43d]/10 text-[#9dd43d] ring-1 ring-[#9dd43d]/20">
                      <BookOpenCheck className="h-4 w-4" />
                    </div>
                    Clear growth pathways
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </MainLayoutWrapper>
  );
};

export default Careers;
