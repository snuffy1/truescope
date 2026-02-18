"use client";

import React from "react";
import { motion } from "framer-motion";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import {
  Search,
  Globe,
  Target,
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
  PenTool,
  Eye,
} from "lucide-react";
import Link from "next/link";

const DigitalAdvertisements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <MainLayoutWrapper>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />
          <div className="absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-sky-100 opacity-60 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-indigo-100 opacity-60 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cal-sans font-medium leading-tight mb-6">
              <span className="text-gray-800">Digital Advertising That </span>
              <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                Drives Results
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto font-inter leading-relaxed">
              Transform your online presence with data-driven advertising
              campaigns that reach your ideal customers across Google, Facebook,
              LinkedIn, and premium platforms. Maximize ROI with our strategic
              approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gray-800 text-white rounded-full font-inter font-medium hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
              >
                Get Free Ad Strategy
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#platforms"
                className="px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-full font-inter font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Explore Platforms
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Advertising Platforms */}
        <section
          id="platforms"
          className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cal-sans font-medium mb-4 text-gray-800">
              Advertising Platforms We Master
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
              Reach your audience where they spend their time with targeted
              campaigns across industry-leading platforms
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center backdrop-blur-lg group"
            >
              <div className="w-16 h-16  flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl mb-3 text-gray-800 font-cal-sans">
                Google Ads
              </h3>
              <p className="text-gray-600 font-inter text-sm leading-relaxed">
                Search, Display, Shopping, and YouTube campaigns that capture
                high-intent customers
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center backdrop-blur-lg group"
            >
              <div className="w-16 h-16  flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl mb-3 text-gray-800 font-cal-sans">
                Meta Ads
              </h3>
              <p className="text-gray-600 font-inter text-sm leading-relaxed">
                Targeted campaigns across Facebook and Instagram with advanced
                audience insights
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center backdrop-blur-lg group"
            >
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl mb-3 text-gray-800 font-cal-sans">
                LinkedIn Ads
              </h3>
              <p className="text-gray-600 font-inter text-sm leading-relaxed">
                B2B focused advertising and lead generation for professional
                audiences
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center backdrop-blur-lg group"
            >
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl mb-3 text-gray-800 font-cal-sans">
                Retargeting
              </h3>
              <p className="text-gray-600 font-inter text-sm leading-relaxed">
                Re-engage visitors and convert warm prospects across multiple
                platforms
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cal-sans font-medium mb-4 text-gray-800">
              Comprehensive Advertising Services
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of your digital
              advertising campaigns
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/50 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 border border-black rounded-2xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl text-gray-800 font-cal-sans">
                  Campaign Management
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Strategic campaign planning and competitive analysis
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Advanced keyword research and audience targeting
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Compelling ad copy creation and A/B testing
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Smart budget allocation and bidding optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Real-time performance monitoring and reporting
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/50 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12  border border-black rounded-2xl flex items-center justify-center mr-4">
                  <PenTool className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl text-gray-800 font-cal-sans">
                  Creative Development
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Professional ad creative design and production
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Landing page optimization for maximum conversions
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Engaging video content creation and editing
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Eye-catching display banner and social media creatives
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Mobile-first design and brand-consistent messaging
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Campaign Types */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cal-sans font-medium mb-4 text-gray-800">
              Campaign Types We Specialize In
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
              Strategic advertising solutions tailored to your business goals
              and target audience
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 backdrop-blur-lg"
            >
              <div className="w-16 h-16">
                <Search className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl mb-4 text-gray-800 font-cal-sans">
                Search Campaigns
              </h3>
              <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                Capture high-intent customers actively searching for your
                products or services with strategic search advertising.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 font-inter">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Google Search Ads
                </li>
                <li className="flex items-center text-gray-600 font-inter">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Bing Ads & Microsoft Advertising
                </li>
                <li className="flex items-center text-gray-600 font-inter">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Local search optimization
                </li>
                <li className="flex items-center text-gray-600 font-inter">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Google Shopping campaigns
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 backdrop-blur-lg"
            >
              <div className="w-16 h-16 ">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl mb-4 text-gray-800 font-cal-sans">
                Display Campaigns
              </h3>
              <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                Build brand awareness and reach potential customers across the
                web with visually compelling display advertising.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 font-inter">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Banner advertising networks
                </li>
                <li className="flex items-center text-gray-600 font-inter">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Video advertising campaigns
                </li>
                <li className="flex items-center text-gray-600 font-inter">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Programmatic media buying
                </li>
                <li className="flex items-center text-gray-600 font-inter">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Native advertising placements
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 backdrop-blur-lg"
            >
              <div className="w-16 h-16 ">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl mb-4 text-gray-800 font-cal-sans">
                Social Campaigns
              </h3>
              <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                Engage your target audience on their favorite social media
                platforms with data-driven social advertising.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 font-inter">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Facebook & Instagram ads
                </li>
                <li className="flex items-center text-gray-600 font-inter">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  LinkedIn sponsored content
                </li>
                <li className="flex items-center text-gray-600 font-inter">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Twitter advertising campaigns
                </li>
                <li className="flex items-center text-gray-600 font-inter">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  TikTok & YouTube advertising
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* Results & Stats */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cal-sans font-medium mb-4">
              Proven Results for Growing Businesses
            </h2>
            <p className="text-lg text-gray-800 font-inter max-w-3xl mx-auto">
              Our data-driven approach delivers measurable growth for startups
              and SMEs across the UAE
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold font-cal-sans mb-2 bg-gradient-to-r from-[#28a717] to-[#0d3e06] bg-clip-text text-transparent">
                300%
              </div>
              <p className="text-gray-900 font-inter">Average ROI Increase</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold font-cal-sans mb-2 bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent">
                85%
              </div>
              <p className="text-gray-900 font-inter">
                Conversion Rate Improvement
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold font-cal-sans mb-2 bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text text-transparent">
                50+
              </div>
              <p className="text-gray-900 font-inter">Successful Campaigns</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold font-cal-sans mb-2 bg-gradient-to-r from-orange-400 to-orange-900 bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-gray-900 font-inter">Campaign Monitoring</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Pricing */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cal-sans font-medium mb-4 text-gray-800">
              Digital Advertising Packages
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
              Choose the perfect advertising solution for your business growth
              stage and budget
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 backdrop-blur-lg flex flex-col h-full"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl mb-4 text-gray-800 font-cal-sans">
                  Starter Campaign
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800 font-cal-sans">
                    $799
                  </span>
                  <span className="text-gray-600 font-inter">/month</span>
                </div>
                <p className="text-gray-600 font-inter">
                  Perfect for small businesses ready to get started with digital
                  advertising
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    1-2 advertising platforms
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Campaign setup & basic optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Monthly performance reporting
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Ad spend management
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Email support
                  </span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="w-full block text-center px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-full font-inter font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/50 p-8 rounded-2xl shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 relative backdrop-blur-lg flex flex-col h-full"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#28a717] to-[#28a717] text-white px-6 py-2 rounded-full text-sm font-inter font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl mb-4 text-gray-800 font-cal-sans">
                  Professional Campaign
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-[#28a717] to-[#28a717] bg-clip-text text-transparent font-cal-sans">
                    $1,599
                  </span>
                  <span className="text-gray-600 font-inter">/month</span>
                </div>
                <p className="text-gray-600 font-inter">
                  Ideal for growing businesses ready to scale their advertising
                  efforts
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Multi-platform campaigns
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Advanced targeting & optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Custom creative development
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Bi-weekly reporting & optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Landing page optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Priority phone & email support
                  </span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="w-full block text-center px-6 py-3 bg-gradient-to-r from-[#28a717] to-[#28a717] text-white rounded-full font-inter font-medium hover:from-[#1e7a0f] hover:to-[#165c0a] transition-all duration-300"
                >
                  Start Scaling
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 backdrop-blur-lg flex flex-col h-full"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl mb-4 text-gray-800 font-cal-sans">
                  Enterprise Campaign
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800 font-cal-sans">
                    $3,499
                  </span>
                  <span className="text-gray-600 font-inter">/month</span>
                </div>
                <p className="text-gray-600 font-inter">
                  For established businesses requiring comprehensive advertising
                  solutions
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Full-funnel campaign strategy
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Premium creative production
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Dedicated account manager
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Real-time optimization & monitoring
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Advanced analytics & insights
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    24/7 dedicated support
                  </span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="w-full block text-center px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-full font-inter font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 font-inter text-sm">
              * Ad spend budget not included. We recommend a minimum $800/month
              ad spend for optimal results.
              <br />
              All packages include strategic consultation and performance
              optimization.
            </p>
          </motion.div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cal-sans font-medium leading-tight mb-6">
                <span className="text-gray-800">Ready to </span>
                <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                  Scale Your Business?
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 font-inter leading-relaxed max-w-3xl mx-auto">
                Launch high-performing digital advertising campaigns that drive
                real results for your business. Get started with a free strategy
                consultation and see how we can transform your online presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gray-800 text-white rounded-full font-inter font-medium hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
                >
                  Get Free Strategy Session
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-full font-inter font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayoutWrapper>
  );
};

export default DigitalAdvertisements;
