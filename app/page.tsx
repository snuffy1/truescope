import { Features } from "@/components/Features";
import Hero from "@/components/Homepage/Hero";
import LookingFor from "@/components/Homepage/LookingFor";
import Pricing from "@/components/Homepage/Pricing";
// import VideoCarousel from "@/components/Homepage/VideoCarasouel";
import ClientFeedback from "@/components/Testimonial/ClientFeedback";
// import { HomePage } from "@/components/scrolling-animation";
import React from "react";
import FAQ from "@/components/FAQ/FAQ";
import WhyUs from "@/components/WhyUs/WhyUs";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import ImageCarousel from "@/components/Homepage/ImageCarousel";

const page = () => {
  return (
    <MainLayoutWrapper>
      <div>
        <Hero />
        <section className="py-16 ">
          <ImageCarousel />
        </section>
        <LookingFor />
        <Pricing />
        <WhyUs />
        <Features />
        <ClientFeedback />
        <FAQ />
      </div>
    </MainLayoutWrapper>
  );
};

export default page;
