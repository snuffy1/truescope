"use client";
import React from "react";

const LookingFor = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="py-6 sm:py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cal-sans font-medium leading-tight">
                <span className="text-gray-800">Ready to </span>
                <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                  Scale Your Business?
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="w-[90vw] xl:w-full text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-inter">
              Team up with TrueScope to unlock powerful digital marketing made
              for startups and scaling businesses. From SEO and social media to
              content and stunning web design, we deliver measurable growth with
              budget-friendly packages designed for maximum ROI.
              <span className="font-semibold text-gray-800">
                {" "}
                Reach out today
              </span>{" "}
              to plan your next move!{" "}
            </p>
          </div>

          {/* Right Visual Element */}
          <div className="relative flex justify-center">
            {/* Gradient Sphere */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Video overlay */}
              <div className="absolute inset-4 sm:inset-6 md:inset-8 overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{
                    clipPath:
                      "polygon(5% 0%, 95% 0%, 100% 5%, 100% 80%, 95% 85%, 85% 85%, 85% 100%, 70% 85%, 5% 85%, 0% 80%, 0% 5%)",
                  }}
                >
                  <source src="/videos/vc1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Video overlay */}
              <div className="absolute inset-4 sm:inset-6 md:inset-8 overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{
                    clipPath:
                      "polygon(5% 0%, 95% 0%, 100% 5%, 100% 80%, 95% 85%, 85% 85%, 85% 100%, 70% 85%, 5% 85%, 0% 80%, 0% 5%)",
                  }}
                >
                  <source src="/videos/vc2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Reflection effect */}
          </div>

          {/* Floating elements */}
          <div className="hidden sm:block absolute top-10 -left-10 w-4 h-4 bg-[#28a717] rounded-full opacity-60 animate-pulse"></div>
          <div className="hidden sm:block absolute bottom-20 -right-8 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-bounce"></div>
          <div className="hidden md:block absolute top-1/2 -left-16 w-3 h-3 bg-pink-400 rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default LookingFor;
