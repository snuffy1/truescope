"use client";
import FAQ from "@/components/FAQ/FAQ";
import ClientFeedback from "@/components/Testimonial/ClientFeedback";
import WhyUs from "@/components/WhyUs/WhyUs";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import React from "react";

const AboutUs = () => {
  const about = [
    {
      title: "Welcome to TrueScope Nepal",
      description:
        "Welcome to TrueScope, your premier marketing transformation partner dedicated to explosive business growth. We specialize in turning struggling brands into market leaders through data-driven strategies that deliver measurable ROI. Our proven methodologies have generated over $50M in revenue for our clients and transformed thousands of businesses into industry powerhouses.",
      video: "/videos/vc1.mp4",
    },
    {
      title: "About us",
      description:
        "At TrueScope, we're the marketing catalyst that transforms ordinary businesses into extraordinary success stories. Our comprehensive digital marketing ecosystem includes strategic brand positioning, high-converting funnel optimization, multi-channel campaign management, and advanced analytics. We've helped over 500+ companies achieve an average 320% increase in qualified leads and 280% boost in conversion rates across diverse industries.",
      video: "/videos/vc2.mp4",
    },
    {
      title: "Our Expertise",
      description:
        "Choosing TrueScope means accessing elite marketing intelligence that delivers unprecedented results. Our specialized team combines cutting-edge AI-driven analytics, psychology-based conversion optimization, and proprietary growth frameworks to dominate your market. We don't just create campaigns – we engineer market disruption. With 95% client retention and an average 450% ROI, we're not just your marketing partner; we're your competitive advantage in the digital battlefield.",
      video: "/videos/vc3.mp4",
    },
  ];

  return (
    <MainLayoutWrapper>
      <div className="min-h-screen bg-transparent text-white overflow-x-hidden">
        <div className="container 2xl:max-w-screen mx-auto px-6 sm:px-8 md:px-12 py-16 sm:py-16 md:py-20 relative">
          <h1 className="text-gray-800 text-3xl md:text-7xl font-cal-sans text-center pb-4">
            About TrueScope
          </h1>
          {/* about List */}
          <div className="space-y-6 md:space-y-8">
            {about.map((service, index) => (
              <>
                <div
                  className={`group relative backdrop-blur-sm border-t border-t-gray-700 transition-all duration-500 hover:scale-102 overflow-hidden`}
                >
                  {/* Mobile Layout (Stack Vertically) */}
                  <div className="flex flex-col md:hidden p-4">
                    {/* Service Number and Video Section for Mobile */}
                    <div className="relative mb-4">
                      <div className="h-[200px] relative overflow-hidden rounded-lg">
                        <video
                          src={service.video}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                    </div>

                    {/* Content Section for Mobile */}
                    <div className="space-y-3">
                      {/* Service Title */}
                      <h3 className="text-xl font-medium font-cal-sans text-gray-800 leading-tight">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-gray-900 font-inter text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout (Side by Side) */}
                  <div
                    className={`hidden md:flex  ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } items-center min-h-[300px]`}
                  >
                    {/* Content Section */}
                    <div
                      className={`w-1/2 p-8 lg:p-12 ${
                        index % 2 === 0
                          ? "lg:pl-12 lg:pr-16"
                          : "lg:pr-12 lg:pl-16"
                      }`}
                    >
                      {/* Service Title */}
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-cal-sans font-medium mb-6 text-black ">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-gray-600 leading-relaxed font-inter text-base lg:text-lg mb-8">
                        {service.description}
                      </p>
                    </div>

                    {/* Video Section */}
                    <div className="w-1/2 h-[300px] relative rounded-4xl overflow-hidden">
                      <video
                        src={service.video}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <WhyUs />
      <ClientFeedback />
      <FAQ />
    </MainLayoutWrapper>
  );
};

export default AboutUs;
