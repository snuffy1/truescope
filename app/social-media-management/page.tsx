"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import {
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const SocialMediaManagement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const socialPlatforms = [
    {
      name: "Facebook",
      icon: Facebook,
      description:
        "Leverage the world's largest social network for brand growth",
      stats: "2.9B Monthly Active Users",
      features: [
        "Business Page Management",
        "Ad Campaign Integration",
        "Analytics Dashboard",
        "Community Building",
      ],
    },
    {
      name: "Instagram",
      icon: Instagram,
      description: "Visual storytelling that captivates and converts",
      stats: "2B Monthly Active Users",
      features: [
        "Visual Content Strategy",
        "Stories & Reels",
        "Influencer Partnerships",
        "Shopping Integration",
      ],
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      description: "Professional networking for B2B excellence",
      stats: "900M Professional Users",
      features: [
        "Thought Leadership",
        "B2B Lead Generation",
        "Company Page Management",
        "Employee Advocacy",
      ],
    },
    {
      name: "Twitter",
      icon: Twitter,
      description: "Real-time engagement and brand voice amplification",
      stats: "450M Monthly Active Users",
      features: [
        "Real-time Marketing",
        "Customer Service",
        "Trend Monitoring",
        "Crisis Management",
      ],
    },
  ];

  const services = [
    {
      title: "Strategic Planning",
      description:
        "Data-driven social media strategies aligned with your business objectives",
      features: [
        "Comprehensive market analysis",
        "Competitor benchmarking",
        "Target audience profiling",
        "KPI definition and tracking",
        "Quarterly strategy reviews",
      ],
    },
    {
      title: "Content Excellence",
      description: "Premium content creation that resonates with your audience",
      features: [
        "Professional photography & videography",
        "Copywriting by industry experts",
        "Brand voice development",
        "Content calendar management",
        "Multi-format content optimization",
      ],
    },
    {
      title: "Community Management",
      description: "24/7 engagement that builds lasting customer relationships",
      features: [
        "Real-time response management",
        "Community growth strategies",
        "Reputation management",
        "Customer sentiment analysis",
        "Crisis communication protocols",
      ],
    },
    {
      title: "Performance Analytics",
      description: "Actionable insights that drive continuous improvement",
      features: [
        "Custom dashboard creation",
        "ROI measurement & reporting",
        "A/B testing frameworks",
        "Conversion tracking",
        "Monthly performance reviews",
      ],
    },
  ];

  const caseStudies = [
    { client: "Tech Startup", growth: "+312%", metric: "Engagement Rate" },
    { client: "E-commerce Brand", growth: "+247%", metric: "Follower Growth" },
    { client: "B2B Software", growth: "+189%", metric: "Lead Generation" },
    {
      client: "Healthcare Provider",
      growth: "+425%",
      metric: "Brand Awareness",
    },
  ];

  return (
    <MainLayoutWrapper>
      <div className="min-h-screen text-gray-900">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-12 relative">
            <div
              className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } `}
            >
              <div className="inline-flex items-center bg-[#28a717]/10 text-[#1e7a0f] px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
                <span className="w-2 h-2 bg-[#28a717] rounded-full mr-2 animate-pulse"></span>
                Trusted by 500+ Brands Worldwide
              </div>

              <h1 className="text-5xl md:text-6xl  mb-6 font-cal-sans text-gray-900">
                Professional Social Media
                <span className="block bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent pb-4">
                  Management Services
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Elevate your brand&apos;s digital presence with strategic social
                media management that drives measurable business results and
                authentic engagement.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#9dd43d] to-[#7aac25] hover:from-[#8cbf34] hover:to-[#6f8e1f] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-white text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300 border border-gray-300 cursor-pointer"
                >
                  Download Case Studies
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 items-center text-gray-600 font-inter">
                <div className="flex items-center ">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  ISO 27001 Certified
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  99.9% Uptime
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Expertise */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className=" mx-auto px-4 sm:px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 font-cal-sans">
                Platform Expertise
              </h2>
              <p className="text-xl text-gray-600 font-inter">
                Master every platform with our specialized teams
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialPlatforms.map((platform, index) => {
                const IconComponent = platform.icon;
                const iconColors = {
                  Facebook: "#1877F2",
                  Instagram: "#E4405F",
                  LinkedIn: "#0A66C2",
                  Twitter: "#1DA1F2",
                };
                return (
                  <div
                    key={index}
                    className={`bg-white/50 backdrop-blur-lg border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div
                      className="w-12 h-12 mb-4"
                      style={{
                        color:
                          iconColors[platform.name as keyof typeof iconColors],
                      }}
                    >
                      <IconComponent className="w-full h-full" />
                    </div>
                    <h3 className="text-xl mb-2 font-cal-sans">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-[#28a717] font-medium mb-3 font-inter">
                      {platform.stats}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm">
                      {platform.description}
                    </p>
                    <ul className="space-y-2">
                      {platform.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600 font-inter"
                        >
                          <svg
                            className="w-4 h-4 text-[#28a717]/100 mr-2 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className=" mx-auto px-4 sm:px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 font-cal-sans">
                Comprehensive Service Suite
              </h2>
              <p className="text-xl text-gray-600">
                End-to-end social media solutions for modern businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-lg rounded-xl p-8 border border-gray-200 hover:border-[#28a717]/30 transition-all duration-300"
                >
                  <h3 className="text-2xl mb-3 font-cal-sans">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#28a717] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 font-inter">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#ACE547] to-[#416207] text-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 font-cal-sans">Proven Results</h2>
              <p className="text-xl text-[#28a717]/20">
                Our track record speaks for itself
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-2">{study.growth}</div>
                  <div className="text-[#28a717]/20 mb-1">{study.metric}</div>
                  <div className="text-sm text-[#28a717]/30">
                    {study.client}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50 px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cal-sans font-medium mb-4 text-gray-800">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
              Choose the plan that fits your business needs
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
                  Essential
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800 font-cal-sans">
                    $699
                  </span>
                  <span className="text-gray-600 font-inter">/month</span>
                </div>
                <p className="text-gray-600 font-inter">
                  Perfect for small businesses starting their social journey
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Up to 3 social platforms
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    20 posts per month
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Basic analytics reporting
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Community management (business hours)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Monthly strategy calls
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Brand guidelines compliance
                  </span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="w-full block text-center px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-full font-inter font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  Start Free Trial
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
                  Professional
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-[#28a717] to-[#28a717] bg-clip-text text-transparent font-cal-sans">
                    $1,399
                  </span>
                  <span className="text-gray-600 font-inter">/month</span>
                </div>
                <p className="text-gray-600 font-inter">
                  Ideal for growing brands seeking comprehensive management
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Up to 5 social platforms
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    40 posts per month
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
                    24/7 community management
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Bi-weekly strategy sessions
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Influencer outreach program
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Paid social media consultation
                  </span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="w-full block text-center px-6 py-3 bg-gradient-to-r from-[#28a717] to-[#28a717] text-white rounded-full font-inter font-medium hover:from-[#1e7a0f] hover:to-[#165c0a] transition-all duration-300"
                >
                  Most Popular
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 backdrop-blur-lg flex flex-col h-full"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl mb-4 text-gray-800 font-cal-sans">
                  Enterprise
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800 font-cal-sans">
                    Custom
                  </span>
                </div>
                <p className="text-gray-600 font-inter">
                  Tailored solutions for large-scale operations
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Unlimited platforms
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Custom post volume
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Dedicated account team
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Real-time analytics dashboard
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Weekly executive briefings
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Crisis management support
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Global campaign coordination
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">
                    Custom integrations
                  </span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="w-full block text-center px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-full font-inter font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  Contact Sales
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
              All packages include strategic consultation and performance
              optimization.
              <br />
              Custom plans available for enterprise clients with specific needs.
            </p>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center">
            <h2 className="text-4xl mb-4 font-cal-sans">
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join industry leaders who trust TrueScope to manage their social
              media strategy and execution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#28a717] text-white rounded-full cursor-pointer font-medium hover:bg-[#1e7a0f] transition-all duration-300"
              >
                Start Your Free Trial
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent text-white rounded-full cursor-pointer font-medium hover:bg-white/10 transition-all duration-300 border border-white/30"
              >
                Book a Strategy Call
              </Link>
            </div>

            <div className="mt-12 text-gray-400">
              <p className="mb-4 font-inter">
                Trusted by leading brands worldwide
              </p>
              <div className="flex justify-center items-center space-x-8 opacity-50">
                {/* Add client logos here */}
                <div className="text-sm font-inter">Fortune 500</div>
                <div className="text-sm font-inter">Tech Leaders</div>
                <div className="text-sm font-inter">Global Brands</div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          .bg-grid-pattern {
            background-image:
              linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
          }
        `}</style>
      </div>
    </MainLayoutWrapper>
  );
};

export default SocialMediaManagement;
