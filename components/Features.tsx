"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Features() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-7xl  text-neutral-800 dark:text-gray-900 font-cal-sans ">
        Our Digital Marketing Services
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Search Engine Optimization",
    title: "Boost your online visibility with proven SEO strategies.",
    src: "/carasouel/seo.jpg",
  },
  {
    category: "Social Media Marketing",
    title: "Engage your audience across all social platforms.",
    src: "/carasouel/marketing.jpg",
  },
  {
    category: "Web Design & Development",
    title: "Create stunning websites that convert visitors to customers.",
    src: "/carasouel/web.jpg",
  },
  {
    category: "Content Marketing",
    title: "Tell your brand story with compelling content.",
    src: "/carasouel/content.jpg",
  },
  {
    category: "Paid Advertising",
    title: "Maximize ROI with targeted Google & Facebook Ads.",
    src: "/carasouel/paid.jpg",
  },
  {
    category: "Email Marketing",
    title: "Build lasting relationships through strategic email campaigns.",
    src: "/carasouel/email.jpg",
  },
];
