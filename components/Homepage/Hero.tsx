"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { Users, TrendingUp, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Define the props for reusability
interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const floatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
  },
};

const Hero = ({
  title,
  subtitle,
  actions,
  stats,
  images,
  className,
}: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-background  py-32 px-4 sm:px-6 md:px-12",
        className,
      )}
    >
      <div className=" mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-light tracking-tight text-foreground sm:text-6xl font-cal-sans"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-md md:max-w-xl text-lg text-muted-foreground font-inter"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            variants={itemVariants}
          >
            {actions.map((action, index) =>
              action.href ? (
                <Link key={index} href={action.href}>
                  <Button
                    onClick={action.onClick}
                    variant={action.variant}
                    size="lg"
                    className={cn(
                      index === 0
                        ? "cursor-pointer !w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-4 min-h-[52px] bg-gray-800 text-white rounded-full font-inter font-medium hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-base focus:outline-none focus:ring-2 focus:ring-[#28a717]/100 focus:ring-offset-2 touch-manipulation"
                        : "cursor-pointer !w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-4 min-h-[52px] border-2 border-gray-800 text-gray-800 rounded-full font-inter font-medium hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-base focus:outline-none focus:ring-2 focus:ring-[#28a717]/100 focus:ring-offset-2 touch-manipulation",
                      action.className,
                    )}
                    style={{ width: "100%" }}
                  >
                    {action.text}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={index}
                  onClick={action.onClick}
                  variant={action.variant}
                  size="lg"
                  className={cn(
                    index === 0
                      ? "cursor-pointer !w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-4 min-h-[52px] bg-gray-800 text-white rounded-full font-inter font-medium hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-base focus:outline-none focus:ring-2 focus:ring-[#28a717]/100 focus:ring-offset-2 touch-manipulation"
                      : "cursor-pointer !w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-4 min-h-[52px] border-2 border-gray-800 text-gray-800 rounded-full font-inter font-medium hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-base focus:outline-none focus:ring-2 focus:ring-[#28a717]/100 focus:ring-offset-2 touch-manipulation",
                    action.className,
                  )}
                  style={{ width: "100%" }}
                >
                  {action.text}
                </Button>
              ),
            )}
          </motion.div>
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Image Collage */}
        <motion.div
          className="relative h-[400px] w-full sm:h-[500px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Shapes */}
          <motion.div
            className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-[#28a717]/30/50 dark:bg-[#165c0a]/30"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-purple-200/50 dark:bg-purple-800/30"
            animate={floatingAnimation}
            style={{ transitionDelay: "0.5s" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full bg-green-200/50 dark:bg-green-800/30"
            animate={floatingAnimation}
            style={{ transitionDelay: "1s" }}
          />

          {/* Images */}
          <motion.div
            className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-2xl bg-muted p-2 shadow-lg sm:h-64 sm:w-64"
            style={{ transformOrigin: "bottom center" }}
            variants={imageVariants}
          >
            <Image
              src={images[0]}
              alt="Marketing success 1"
              className="h-full w-full rounded-xl object-cover"
              width={256}
              height={256}
            />
          </motion.div>
          <motion.div
            className="absolute right-0 top-1/3 h-40 w-40 rounded-2xl bg-muted p-2 shadow-lg sm:h-56 sm:w-56"
            style={{ transformOrigin: "left center" }}
            variants={imageVariants}
          >
            <Image
              src={images[1]}
              alt="Marketing success 2"
              className="h-full w-full rounded-xl object-cover"
              width={224}
              height={224}
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-32 w-32 rounded-2xl bg-muted p-2 shadow-lg sm:h-48 sm:w-48"
            style={{ transformOrigin: "top right" }}
            variants={imageVariants}
          >
            <Image
              src={images[2]}
              alt="Marketing success 3"
              className="h-full w-full rounded-xl object-cover"
              width={192}
              height={192}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Default export with TrueScope Marketing data
const HeroWrapper = () => {
  const heroData = {
    title: (
      <>
        Digital Marketing That <br />
        <span className="bg-gradient-to-r from-[#ACE547]  to-[#416207] bg-clip-text text-transparent">
          Drives Growth
        </span>
      </>
    ),
    subtitle:
      "TrueScope delivers comprehensive digital marketing solutions—from SEO and social media to web design and content marketing—helping startups and growing businesses achieve measurable results.",
    actions: [
      {
        text: "Get Free Consultation",
        href: "/contact",
        variant: "default" as const,
      },
      {
        text: "View Our Services",
        href: "/pricing",
        variant: "outline" as const,
      },
    ],
    stats: [
      {
        value: "500+",
        label: "Happy Clients",
        icon: <Users className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: "3x",
        label: "Avg. Growth",
        icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: "Award-Winning",
        label: "Team",
        icon: <Award className="h-5 w-5 text-muted-foreground" />,
      },
    ],
    images: ["/hero/h1.webp", "/hero/h2.webp", "/hero/h3.webp"],
  };

  return (
    <Hero
      title={heroData.title}
      subtitle={heroData.subtitle}
      actions={heroData.actions}
      stats={heroData.stats}
      images={heroData.images}
    />
  );
};

export default HeroWrapper;
