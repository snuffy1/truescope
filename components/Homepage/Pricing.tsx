"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Check,
  Globe,
  Clock,
  TrendingUp,
  Users,
  Megaphone,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ---------------------------- money & animation ---------------------------- */

const fmtUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

// Custom hook for counting animation
const useCountUp = (
  end: number,
  start: number = 0,
  duration: number = 2000,
) => {
  const [count, setCount] = useState(start);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setCount(start);
      return;
    }

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isActive, end, start, duration]);

  const startCounting = useCallback(() => setIsActive(true), []);
  const stopCounting = useCallback(() => setIsActive(false), []);

  return {
    count,
    startCounting,
    stopCounting,
  };
};

interface PricingPlan {
  id: string;
  name: string;
  category: string;
  /** USD price (monthly subscription) */
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  popular?: boolean;
  timeframe: string;
  badge?: string;
  isMonthly?: boolean;
  slug?: string;
}

/* ---------------------- Digital Marketing Service Plans ------------------- */

/* ----------------------- One-Time Service Add-ons ------------------ */

const oneTimeServices: PricingPlan[] = [
  {
    id: "digital-foundation",
    name: "Digital Foundation",
    category: "One-Time Service",
    price: 150,
    description:
      "Essential setup for new businesses entering the digital space",
    features: [
      "Google Business Profile Optimization",
      "Local Directory Listings (Top 5)",
      "Social Media Handle Reservation",
      "Basic Bio & About Us Writing",
      "Initial Security Audit",
      "Digital Presence Roadmap",
    ],
    timeframe: "3-5 Days",
    badge: "FOUNDATION",
    isMonthly: false,
    slug: "digital-foundation",
  },
  {
    id: "visual-identity",
    name: "Visual Identity Kickstart",
    category: "One-Time Service",
    price: 350,
    description: "Establish a consistent look across all marketing channels",
    features: [
      "Modern Logo Suite",
      "Primary & Secondary Color Palette",
      "Typography Selection",
      "5 Custom Social Media Templates",
      "Email Header & Signatures",
      "Brand Style Cheat Sheet",
    ],
    timeframe: "1-2 Weeks",
    badge: "BRANDING",
    isMonthly: false,
    slug: "visual-identity",
  },
  {
    id: "landing-page-pro",
    name: "Conversion Landing Page",
    category: "One-Time Service",
    price: 600,
    originalPrice: 850,
    description: "High-converting single page designed for specific campaigns",
    features: [
      "Persuasive Copywriting",
      "A/B Testing Ready Layout",
      "Mobile-First Performance",
      "CRM / Email Lead Integration",
      "Custom CTA Architecture",
      "Speed & Core Web Vitals Polish",
      "Meta Pixel & Tag Setup",
    ],
    timeframe: "1 Week",
    badge: "CONVERSION",
    isMonthly: false,
    slug: "landing-page-pro",
  },
  {
    id: "authority-content",
    name: "Authority Content Pack",
    category: "One-Time Service",
    price: 900,
    description: "Deep-dive content to establish industry leadership",
    features: [
      "1 Long-form Whitepaper/E-book",
      "4 SEO-Optimized Pillar Blogs",
      "15 High-Engagement Social Posts",
      "Custom Infographic Design",
      "Video Scripting for 3 Reels",
      "Distribution Strategy Plan",
    ],
    timeframe: "3 Weeks",
    badge: "AUTHORITY",
    isMonthly: false,
    slug: "authority-content",
  },
  {
    id: "ecommerce-sprint",
    name: "E-commerce Sprint",
    category: "One-Time Service",
    price: 1500,
    originalPrice: 2200,
    description: "Rapid deployment of a functional online storefront",
    features: [
      "Shopify or WooCommerce Core Setup",
      "Payment Gateway Integration",
      "Product Catalog Upload (Up to 20)",
      "Automated Abandoned Cart Emails",
      "Inventory Management Sync",
      "Post-Launch Technical Support",
      "Shipping Rule Configuration",
    ],
    timeframe: "2-3 Weeks",
    badge: "E-COMMERCE",
    isMonthly: false,
    slug: "ecommerce-sprint",
  },
  {
    id: "omnichannel-growth",
    name: "Omnichannel Growth Launch",
    category: "One-Time Service",
    price: 2500,
    description: "Full-scale aggressive market entry across all platforms",
    features: [
      "Multi-Platform Ad Account Setup",
      "Competitor Intelligence Report",
      "Advanced Audience Segmentation",
      "Retargeting Funnel Creation",
      "Video Ad Creative (2 Edits)",
      "Scaling Roadmap (6 Months)",
      "Conversion Rate Optimization Audit",
      "Dedicated Launch Manager",
    ],
    timeframe: "2-4 Weeks",
    highlighted: true,
    popular: true,
    badge: "GROWTH ELITE",
    isMonthly: false,
    slug: "omnichannel-growth",
  },
];

/* --------------------------------- motion --------------------------------- */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.8, rotateX: -15 },
  visible: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
};

const PricingCard: React.FC<{ plan: PricingPlan; index: number }> = ({
  plan,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { amount: 0.3 });

  const { count, startCounting, stopCounting } = useCountUp(
    plan.price,
    0,
    1500,
  );

  useEffect(() => {
    if (isCardInView) startCounting();
    else stopCounting();
  }, [isCardInView, startCounting, stopCounting]);

  const isBright = plan.id === "platinum" || plan.highlighted;

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col h-[700px] ${
        plan.id === "platinum"
          ? "bg-gradient-to-r from-[#28a717] to-[#28a717] text-white border-[#28a717]/100 shadow-2xl scale-105"
          : plan.highlighted
            ? "bg-gradient-to-br from-[#28a717] to-[#28a717] text-white border-[#28a717] shadow-2xl scale-105"
            : "bg-white border-gray-200 hover:border-[#28a717]/40 shadow-lg hover:shadow-xl"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -8,
        scale: 1.02,
        rotateY: 2,
        transition: { duration: 0.3 },
      }}
      style={{ perspective: 1000 }}
    >
      {plan.popular && (
        <motion.div
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: [1, 1.05, 1], rotate: -12, y: [0, -2, 0] }}
          transition={{
            delay: 0.5 + index * 0.1,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-1 rounded-full text-sm font-inter font-semibold shadow-lg"
        >
          Most Popular
        </motion.div>
      )}

      <div className="text-center mb-6">
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            isBright
              ? "bg-white/20"
              : "bg-gradient-to-br from-[#28a717]/20 to-[#28a717]/30"
          }`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {plan.badge?.includes("MARKETING") ||
          plan.badge?.includes("GROWTH") ||
          plan.badge?.includes("PROFESSIONAL") ||
          plan.badge?.includes("ENTERPRISE") ? (
            <TrendingUp
              className={`w-8 h-8 ${
                isBright ? "text-white" : "text-[#28a717]"
              }`}
            />
          ) : plan.badge?.includes("BRAND") ? (
            <Users
              className={`w-8 h-8 ${
                isBright ? "text-white" : "text-[#28a717]"
              }`}
            />
          ) : plan.badge?.includes("SEO") ? (
            <BarChart3
              className={`w-8 h-8 ${
                isBright ? "text-white" : "text-[#28a717]"
              }`}
            />
          ) : plan.badge?.includes("AD CAMPAIGN") ? (
            <Megaphone
              className={`w-8 h-8 ${
                isBright ? "text-white" : "text-[#28a717]"
              }`}
            />
          ) : (
            <Globe
              className={`w-8 h-8 ${
                isBright ? "text-white" : "text-[#28a717]"
              }`}
            />
          )}
        </motion.div>

        <motion.h3
          className={`text-xl font-cal-sans mb-2 ${
            isBright ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {plan.name}
        </motion.h3>

        <p
          className={`text-sm font-inter mb-4 ${
            isBright ? "text-white/80" : "text-gray-600"
          }`}
        >
          {plan.category}
        </p>

        <motion.div
          className="mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3 + index * 0.1,
            type: "spring",
            stiffness: 200,
          }}
        >
          <div className="flex flex-col items-center justify-center">
            {plan.originalPrice && (
              <div className="flex items-baseline justify-center mb-1">
                <span
                  className={`text-lg font-inter line-through ${
                    isBright ? "text-white/60" : "text-gray-400"
                  }`}
                >
                  {fmtUSD.format(plan.originalPrice)}
                </span>
                {plan.isMonthly && (
                  <span
                    className={`text-sm ml-1 line-through ${
                      isBright ? "text-white/60" : "text-gray-400"
                    }`}
                  >
                    /mo
                  </span>
                )}
              </div>
            )}
            <div className="flex items-baseline justify-center">
              <span
                className={`text-4xl font-inter font-bold ${
                  isBright ? "text-white" : "text-gray-900"
                } ${plan.originalPrice ? "text-green-600" : ""}`}
              >
                {isCardInView ? fmtUSD.format(count) : fmtUSD.format(0)}
              </span>
              {plan.isMonthly && (
                <span
                  className={`text-lg font-inter ml-1 ${
                    isBright ? "text-white/80" : "text-gray-600"
                  } ${plan.originalPrice ? "text-green-600" : ""}`}
                >
                  /mo
                </span>
              )}
            </div>
            {plan.originalPrice && (
              <div className="mt-1">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                  Save{" "}
                  {Math.round(
                    ((plan.originalPrice - plan.price) / plan.originalPrice) *
                      100,
                  )}
                  %
                </span>
              </div>
            )}
          </div>
        </motion.div>

        <div
          className={`flex items-center justify-center mb-4 ${
            isBright ? "text-white/80" : "text-gray-600"
          }`}
        >
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm font-inter">{plan.timeframe}</span>
        </div>
      </div>

      <div
        className="space-y-3 mb-6 flex-grow overflow-y-auto"
        style={{ maxHeight: "280px" }}
      >
        {plan.features.map((feature, featureIndex) => (
          <motion.div
            key={featureIndex}
            className="flex items-start space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 + featureIndex * 0.05 }}
          >
            <div
              className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                isBright ? "bg-white/20" : "bg-[#28a717]/20"
              }`}
            >
              <Check
                className={`w-3 h-3 ${
                  isBright ? "text-white" : "text-[#28a717]"
                }`}
              />
            </div>
            <span
              className={`text-sm font-inter ${
                isBright ? "text-white/90" : "text-gray-700"
              }`}
            >
              {feature}
            </span>
          </motion.div>
        ))}
      </div>

      <Link href={`/plans/${plan.slug}`} className="block">
        <motion.button
          className={`w-full py-3 px-6 rounded-full font-inter font-semibold transition-all duration-300 cursor-pointer ${
            plan.id === "platinum"
              ? "bg-white text-#28a717] hover:bg-gray-100"
              : plan.highlighted
                ? "bg-white text-[#28a717] hover:bg-gray-100"
                : "bg-gradient-to-r from-[#9dd43d] to-[#7aac25] text-white hover:from-[#8cbf34] hover:to-[#6f8e1f]"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          MORE DETAILS
        </motion.button>
      </Link>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: isBright
            ? "linear-gradient(45deg, rgba(255,255,255,0.1), transparent)"
            : "linear-gradient(45deg, rgba(4,74,132,0.1), transparent)",
          borderRadius: "1rem", // 16px to match rounded-2xl
        }}
      />
    </motion.div>
  );
};

/* ----------------------- Pricing Carousel Component ----------------------- */

const PricingCarousel: React.FC<{ plans: PricingPlan[] }> = ({ plans }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Responsive visible cards: 1 on mobile, 2 on tablet, 4 on desktop
  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 4; // desktop/laptop
    }
    return 4;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateScrollButtons = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10); // Small buffer for precision
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / plans.length;
      const scrollPosition = index * cardWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const maxIndex = Math.max(0, plans.length - visibleCards);
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons(); // Initial check
      return () => carousel.removeEventListener("scroll", updateScrollButtons);
    }
  }, [updateScrollButtons, plans.length]);

  // Show navigation only if there are more cards than visible
  const showNavigation = plans.length > visibleCards;

  return (
    <div className="relative max-w-full pt-16">
      {/* Navigation Buttons - Desktop only */}
      {showNavigation && (
        <>
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white border-2 border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center ${
              canScrollLeft
                ? "text-gray-700 hover:text-[#28a717] hover:border-[#28a717] cursor-pointer"
                : "text-gray-300 cursor-not-allowed opacity-50"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white border-2 border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center ${
              canScrollRight
                ? "text-gray-700 hover:text-[#28a717] hover:border-[#28a717] cursor-pointer"
                : "text-gray-300 cursor-not-allowed opacity-50"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pt-12 pb-6 px-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              style={{ minWidth: "320px", maxWidth: "320px" }}
            >
              <div className="pt-6">
                <PricingCard plan={plan} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator - Show on mobile/tablet when needed */}
      {showNavigation && (
        <div className="flex lg:hidden justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(plans.length / visibleCards) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index * visibleCards)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleCards) === index
                    ? "bg-[#28a717]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ),
          )}
        </div>
      )}

      {/* Desktop Dots Indicator */}
      {showNavigation && (
        <div className="hidden lg:flex justify-center mt-8 space-x-2">
          {Array.from({
            length: Math.max(0, plans.length - visibleCards + 1),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#28a717]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Pricing: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative py-20 px-4 md:px-0 overflow-visible">
      {/* Animated background elements with parallax */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 0.05 } : { y: 100, opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#42c633] rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#42c633] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-[#42c633] rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-[#42c633] rounded-full blur-3xl" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#28a717] rounded-full opacity-20"
          initial={{ y: 100, opacity: 0 }}
          animate={
            isInView
              ? {
                  y: [100, -20, 100],
                  opacity: [0, 0.4, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                }
              : { y: 100, opacity: 0 }
          }
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 20}%` }}
        />
      ))}

      <div className="relative lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl xl:text-6xl font-cal-sans text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            One-Time Digital Marketing Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 font-inter max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional one-time services to kickstart your digital presence
            and marketing efforts
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="hidden"
          >
            <PricingCarousel plans={oneTimeServices} />
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 font-inter mb-6">
            Ready to accelerate your business growth? Let&apos;s discuss which
            digital marketing strategy will work best for your startup or
            growing business.
          </p>
          <Link href="/contact">
            <motion.button
              className="bg-gradient-to-r from-[#9dd43d] to-[#7aac25] text-white px-8 py-4 rounded-full font-inter font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Free Marketing Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
