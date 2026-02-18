"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Zap,
  Shield,
  Building,
  MapIcon,
} from "lucide-react";

const ContactPage = () => {
  // Animation refs
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll animation state
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form validation
  const isFormValid = () => {
    return (
      formData.name.trim() && formData.email.trim() && formData.message.trim()
    );
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // GSAP Animations
  useGSAP(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set([formRef.current, infoRef.current, mapRef.current], {
      opacity: 0,
      y: 30,
    });

    // Animate in sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .to(
        [formRef.current, infoRef.current, mapRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.4",
      );
  }, []);

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "shivajarigajurel7@gmail.com",
      description: "Drop us a line anytime",
      action: "mailto:shivajarigajurel7@gmail.com",
      gradient: "from-[#28a717]/100 to-[#28a717]",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (432) 299 4467",
      description: "Mon-Fri from 9am to 6pm",
      action: "tel:+14322994467",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      content: "+1 (432) 299 4467",
      description: "Quick support via WhatsApp",
      action: "https://wa.me/14322994467",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Sheridan, WY 82801",
      description: "30 N Gould St Ste R",
      action: "#location",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  const services = [
    "Digital Marketing Strategy",
    "Web Design & Development",
    "SEO & Content Marketing",
    "Social Media Management",
    "Paid Advertising (Google & Facebook)",
    "E-commerce Solutions",
    "Brand Strategy & Design",
    "Marketing Automation",
    "Other / Custom Project",
  ];

  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      text: "24-hour response guarantee",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Free consultation & strategy session",
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Dedicated account manager",
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "Proven track record with 500+ businesses",
    },
  ];

  return (
    <MainLayoutWrapper>
      <div className="min-h-screen relative">
        {/* Background with radial gradient - matching globals.css */}
        <div className="fixed inset-0 z-0 bg-white">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at top center, rgba(59, 130, 246, 0.15), transparent 70%)`,
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          />
        </div>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-20 -left-10 w-4 h-4 bg-[#28a717] rounded-full opacity-60"
              style={{
                transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
              }}
            />
            <div
              className="absolute bottom-40 -right-8 w-6 h-6 bg-purple-400 rounded-full opacity-40"
              style={{
                transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.08}px)`,
              }}
            />
            <div
              className="absolute top-1/2 -left-16 w-3 h-3 bg-pink-400 rounded-full opacity-50"
              style={{
                transform: `translate(${scrollY * 0.08}px, ${-scrollY * 0.1}px)`,
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium font-cal-sans mb-4 sm:mb-6 text-gray-900 leading-tight"
            >
              Get in Touch with
              <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                {" "}
                TrueScope
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto font-inter leading-relaxed px-2"
            >
              Ready to transform your digital presence? Let&apos;s discuss how
              we can help your business achieve measurable growth through
              strategic digital marketing.
            </p>
          </div>
        </section>

        {/* Main Contact Content */}
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
              {/* Contact Form */}
              <motion.div
                ref={formRef}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="order-2 lg:order-1"
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-gray-100 relative overflow-hidden">
                  {/* Form background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#28a717]/10 to-transparent rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-50 to-transparent rounded-full -ml-12 -mb-12" />

                  <div className="relative z-10">
                    <motion.div variants={itemVariants} className="mb-8">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cal-sans font-medium text-gray-900 mb-3 sm:mb-4">
                        Start Your Growth Journey
                      </h2>
                      <p className="text-gray-600 font-inter text-base sm:text-lg">
                        Tell us about your project and we&apos;ll get back to
                        you within 24 hours with a custom strategy.
                      </p>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div
                      variants={itemVariants}
                      className="mb-6 sm:mb-8"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {benefits.map((benefit, index) => (
                          <div
                            key={index}
                            className="flex items-start sm:items-center gap-3"
                          >
                            <div className="text-[#28a717]">{benefit.icon}</div>
                            <span className="text-xs sm:text-sm font-inter text-gray-600 leading-tight">
                              {benefit.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                      onSubmit={handleSubmit}
                      variants={itemVariants}
                      className="space-y-4 sm:space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 font-inter">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#28a717] focus:ring-2 focus:ring-[#28a717]/20 transition-all duration-300 font-inter text-sm sm:text-base"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 font-inter">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#28a717] focus:ring-2 focus:ring-[#28a717]/20 transition-all duration-300 font-inter text-sm sm:text-base"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 font-inter">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#28a717] focus:ring-2 focus:ring-[#28a717]/20 transition-all duration-300 font-inter text-sm sm:text-base"
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 font-inter">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#28a717] focus:ring-2 focus:ring-[#28a717]/20 transition-all duration-300 font-inter text-sm sm:text-base"
                            placeholder="+1 (432) 299 4467"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 font-inter">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#28a717] focus:ring-2 focus:ring-[#28a717]/20 transition-all duration-300 font-inter text-sm sm:text-base"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 font-inter">
                          Project Details *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#28a717] focus:ring-2 focus:ring-[#28a717]/20 transition-all duration-300 font-inter resize-none text-sm sm:text-base min-h-[100px]"
                          placeholder="Tell us about your project, goals, and how we can help..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={!isFormValid() || isSubmitting}
                        className={`w-full flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 font-inter text-sm sm:text-base ${
                          isSubmitted
                            ? "bg-green-500 hover:bg-green-600 text-white"
                            : isFormValid() && !isSubmitting
                              ? "bg-gradient-to-r from-[#93cbff] via-[#2b7cc7] to-[#034480] hover:from-[#86c2fa] hover:via-[#2677c3] hover:to-[#01396d] text-white hover:scale-105 hover:shadow-lg"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        whileHover={
                          isFormValid() && !isSubmitting ? { scale: 1.02 } : {}
                        }
                        whileTap={
                          isFormValid() && !isSubmitting ? { scale: 0.98 } : {}
                        }
                      >
                        {isSubmitted ? (
                          <>
                            <CheckCircle className="w-5 h-5" />
                            Message Sent Successfully!
                          </>
                        ) : isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </motion.button>

                      <p className="text-xs sm:text-sm text-gray-500 text-center font-inter leading-relaxed">
                        By submitting this form, you agree to our privacy policy
                        and terms of service.
                      </p>
                    </motion.form>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                ref={infoRef}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="order-1 lg:order-2"
              >
                <div className="space-y-8">
                  {/* Contact Methods */}
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-cal-sans font-medium text-gray-900 mb-4 sm:mb-6">
                      Multiple Ways to Connect
                    </h3>
                    <div className="grid gap-6">
                      {contactMethods.map((method, index) => (
                        <motion.a
                          key={index}
                          href={method.action}
                          target={
                            method.action.startsWith("http")
                              ? "_blank"
                              : "_self"
                          }
                          rel={
                            method.action.startsWith("http")
                              ? "noopener noreferrer"
                              : ""
                          }
                          className="group p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div
                              className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${method.gradient} text-white group-hover:scale-110 transition-transform duration-300`}
                            >
                              {method.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-cal-sans font-medium text-gray-900 mb-1 text-sm sm:text-base">
                                {method.title}
                              </h4>
                              <p className="font-inter font-semibold text-gray-800 mb-1 text-sm sm:text-base truncate">
                                {method.content}
                              </p>
                              <p className="font-inter text-xs sm:text-sm text-gray-600 leading-tight">
                                {method.description}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Business Hours */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-br from-[#28a717] to-[#28a717] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white"
                  >
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                      <h3 className="text-lg sm:text-xl font-cal-sans font-medium">
                        Business Hours
                      </h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3 font-inter text-sm sm:text-base">
                      <div className="flex justify-between">
                        <span className="text-[#28a717]/20">
                          Monday - Friday
                        </span>
                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#28a717]/20">Saturday</span>
                        <span className="font-semibold">
                          10:00 AM - 4:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#28a717]/20">Sunday</span>
                        <span className="font-semibold">Closed</span>
                      </div>
                      <div className="pt-4 border-t border-[#28a717]">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          <span className="text-sm text-[#28a717]/20">
                            GMT (UK Time)
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Quick Stats */}
                  <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-2 gap-4 sm:gap-6"
                  >
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 text-center">
                      <div className="text-2xl sm:text-3xl font-cal-sans font-bold text-[#28a717] mb-1 sm:mb-2">
                        500+
                      </div>
                      <div className="text-xs sm:text-sm font-inter text-gray-600">
                        Happy Clients
                      </div>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 text-center">
                      <div className="text-2xl sm:text-3xl font-cal-sans font-bold text-[#28a717] mb-1 sm:mb-2">
                        24h
                      </div>
                      <div className="text-xs sm:text-sm font-inter text-gray-600">
                        Response Time
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section
          ref={mapRef}
          className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cal-sans font-medium text-gray-900 mb-3 sm:mb-4">
                Our Location
              </h2>
              <p className="text-base sm:text-lg font-inter text-gray-600 max-w-2xl mx-auto px-2">
                Strategically located in Sheridan, Wyoming to serve our clients
                across the US and internationally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {/* Map Placeholder */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64 sm:h-80 lg:h-96 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#28a717]/10 to-[#28a717]/100/10 flex items-center justify-center">
                    <div className="text-center px-4">
                      <MapIcon className="w-12 h-12 sm:w-16 sm:h-16 text-[#28a717] mx-auto mb-3 sm:mb-4" />
                      <h3 className="text-lg sm:text-xl font-cal-sans font-medium text-gray-900 mb-2">
                        Interactive Map
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 font-inter">
                        Click to view our location in Google Maps
                      </p>
                      <motion.button
                        className="mt-3 sm:mt-4 inline-flex items-center gap-2 bg-[#28a717] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-inter font-semibold hover:bg-[#1e7a0f] transition-colors duration-300 text-sm sm:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        View in Maps
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6 text-[#28a717]" />
                    <h3 className="text-base sm:text-lg font-cal-sans font-medium text-gray-900">
                      TrueScope
                    </h3>
                  </div>
                  <div className="space-y-2 sm:space-y-3 font-inter text-gray-600 text-sm sm:text-base">
                    <p className="font-semibold text-gray-700">
                      Principal Address:
                    </p>
                    <p>30 N Gould St Ste R</p>
                    <p>Sheridan, WY 82801</p>
                    <p className="pt-2 font-semibold text-gray-700">
                      Contact: Shiva Hari Gajurel
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-100">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    <span className="font-inter font-semibold text-green-800 text-sm sm:text-base">
                      Always Available
                    </span>
                  </div>
                  <p className="font-inter text-xs sm:text-sm text-green-700">
                    Remote consultations available worldwide via video call.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cal-sans font-medium mb-4 sm:mb-6">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl font-inter mb-6 sm:mb-8 px-2">
                Join 500+ businesses that have transformed their digital
                presence with TrueScope. Get your free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto ">
                <motion.button
                  className="bg-white text-[#070707] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter font-semibold hover:shadow-xl transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Call Now</span>
                  </div>
                </motion.button>
                <motion.button
                  className="border-2 border-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter font-semibold hover:bg-white hover:text-[#000000] transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>WhatsApp Us</span>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayoutWrapper>
  );
};

export default ContactPage;
