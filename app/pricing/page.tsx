"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
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
  Star,
  Shield,
  Headphones,
  Zap,
  Target,
  Mail,
  Phone,
} from "lucide-react";
import ClientFeedback from "@/components/Testimonial/ClientFeedback";
import { Features } from "@/components/Features";
import { pricingPlansApi } from "@/lib/api/pricing-plans";
import { toast } from "sonner";

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
  _id: string; // MongoDB ID
  id?: string; // Legacy support
  planId: string;
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
  isMonthly: boolean;
  slug: string;
  isActive: boolean;
}

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

  const isBright = plan.planId === "platinum" || plan.highlighted;

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col h-full ${
        plan.planId === "platinum"
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

      <div className="space-y-3 mb-6 flex-grow">
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
              ? "bg-white text-[#28a717] hover:bg-gray-100"
              : plan.highlighted
                ? "bg-white text-[#28a717] hover:bg-gray-100"
                : "bg-gradient-to-r from-[#28a717] to-[#28a717] text-white hover:from-[#1e7a0f] hover:to-[#165c0a]"
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
      return 3; // desktop/laptop - Changed from 4 to 3 for better spacing
    }
    return 3;
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
              className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              style={{ minWidth: "320px" }}
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

/* ---------------------------- Feature Section ---------------------------- */

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "No Long-term Contracts",
      description:
        "Cancel anytime with 30 days notice. No hidden fees or lock-in periods.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Proven Track Record",
      description:
        "200+ successful campaigns with average 300% ROI improvement for our clients.",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Dedicated Support",
      description:
        "Direct access to your marketing team with same-day response guarantee.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Results",
      description:
        "See measurable improvements in your online presence within the first 30 days.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Custom Strategy",
      description:
        "Tailored marketing approach based on your industry, audience, and goals.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Transparent Reporting",
      description:
        "Monthly detailed reports with clear metrics and actionable insights.",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-cal-sans text-gray-900 mb-4">
            Why Choose TrueScope Digital Marketing?
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
            We don&apos;t just provide services - we deliver results that drive
            real business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-[#28a717] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-cal-sans text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-inter">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------------------- FAQ Section ---------------------------- */

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  const faqs = [
    {
      question: "What's included in the setup process?",
      answer:
        "Every plan includes a comprehensive onboarding process where we audit your current digital presence, set up necessary accounts, and create a custom strategy tailored to your business goals.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Most clients see initial improvements within 30 days, with significant growth typically occurring within 60-90 days. SEO results may take 3-6 months for full impact.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Absolutely! You can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle.",
    },
    {
      question: "Do you work with businesses in my industry?",
      answer:
        "We work with businesses across all industries including healthcare, legal, real estate, e-commerce, SaaS, professional services, and more. Our strategies are customized for each industry's unique requirements.",
    },
    {
      question: "What happens to my accounts if I cancel?",
      answer:
        "You retain full ownership of all accounts we create (Google Ads, social media, etc.). We provide a complete handover with all login credentials and documentation.",
    },
    {
      question: "Do you provide detailed reporting?",
      answer:
        "Yes! All plans include monthly detailed reports with key metrics, campaign performance, ROI analysis, and strategic recommendations for continued growth.",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-cal-sans text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 font-inter">
            Everything you need to know about our digital marketing services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-[#28a717] hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-cal-sans text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-gray-400">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </div>
              </button>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 font-inter leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------------------- Main Pricing Component ---------------------------- */

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "onetime">("monthly");
  const [digitalMarketingPlans, setDigitalMarketingPlans] = useState<
    PricingPlan[]
  >([]);
  const [oneTimeServices, setOneTimeServices] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Fetch pricing plans from API
  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      try {
        const response = await pricingPlansApi.getPublic();

        if (response.success && response.data.plans) {
          const plans = response.data.plans as PricingPlan[];

          // Separate monthly and one-time plans
          const monthly = plans.filter((p) => p.isMonthly);
          const oneTime = plans.filter((p) => !p.isMonthly);

          setDigitalMarketingPlans(monthly);
          setOneTimeServices(oneTime);
        } else {
          toast.error("Failed to load pricing plans");
        }
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
        toast.error("Failed to load pricing plans. Please refresh the page.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return (
    <MainLayoutWrapper>
      {/* Hero Section */}
      <section className="relative pt-32 px-4 md:px-0 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{ y: backgroundY }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.05 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#28a717] rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#28a717] rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-[#28a717]/100 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-[#28a717] rounded-full blur-3xl" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#28a717]"></div>
              </div>
            ) : digitalMarketingPlans.length === 0 &&
              oneTimeServices.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">
                  No pricing plans available at the moment.
                </p>
                <p className="text-sm text-muted-foreground">
                  Please check back later or contact us for custom pricing.
                </p>
              </div>
            ) : (
              <>
                <h1 className="text-3xl md:text-6xl xl:text-7xl font-cal-sans text-gray-900 mb-6">
                  Simple, Transparent
                  <br />
                  <span className="text-[#28a717]">
                    Digital Marketing Pricing
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-inter max-w-4xl mx-auto mb-8">
                  Choose the perfect digital marketing plan for your business.
                  No hidden fees, no long-term contracts, just proven strategies
                  that deliver results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="font-inter">
                      30-Day Money Back Guarantee
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="font-inter">Cancel Anytime</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="font-inter">Free Setup</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        ref={ref}
        className="relative py-20 px-4 md:px-0 overflow-visible"
      >
        <div className="relative lg:px-12">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#28a717]"></div>
            </div>
          ) : digitalMarketingPlans.length === 0 &&
            oneTimeServices.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">
                No pricing plans available at the moment.
              </p>
              <p className="text-sm text-muted-foreground">
                Please check back later or contact us for custom pricing.
              </p>
            </div>
          ) : (
            <>
              <motion.div
                className="flex justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-white p-2 rounded-full shadow-lg border border-gray-200">
                  <div className="flex space-x-2">
                    <motion.button
                      onClick={() => setActiveTab("monthly")}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                        activeTab === "monthly"
                          ? "bg-gradient-to-r from-[#28a717] to-[#28a717] text-white shadow-lg"
                          : "text-gray-600 hover:text-[#28a717]"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-cal-sans font-light">
                        Monthly Plans
                      </span>
                    </motion.button>
                    <motion.button
                      onClick={() => setActiveTab("onetime")}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                        activeTab === "onetime"
                          ? "bg-gradient-to-r from-[#28a717] to-[#28a717] text-white shadow-lg"
                          : "text-gray-600 hover:text-[#28a717]"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BarChart3 className="w-5 h-5" />
                      <span className="font-cal-sans font-light">
                        One-Time Services
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  exit="hidden"
                >
                  <PricingCarousel
                    plans={
                      activeTab === "monthly"
                        ? digitalMarketingPlans
                        : oneTimeServices
                    }
                  />
                </motion.div>
              </AnimatePresence>
            </>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* FAQ Section */}
      <FAQ />
      <Features />
      <ClientFeedback />
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-cal-sans mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl font-inter mb-8 opacity-90">
              Join hundreds of businesses that have accelerated their growth
              with our proven digital marketing strategies. Start your journey
              today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-[#28a717] px-8 py-4 rounded-full font-inter font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Schedule Free Consultation</span>
                </div>
              </motion.button>
              <motion.a
                href="mailto:hello@TrueScope.digital"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-inter font-semibold hover:bg-white hover:text-[#28a717] transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Get Custom Quote</span>
                </div>
              </motion.a>
            </div>
            <p className="text-sm font-inter mt-6 opacity-80">
              🎯 Free strategy session • 📊 Custom proposal • 🚀 No obligation
            </p>
          </motion.div>
        </div>
      </section>
    </MainLayoutWrapper>
  );
};

export default PricingPage;
