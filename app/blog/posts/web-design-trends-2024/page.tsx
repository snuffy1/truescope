"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

const WebDesignTrends2024 = () => {
  const headerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set([headerRef.current, titleRef.current, metaRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set([contentRef.current, sidebarRef.current], {
      opacity: 0,
      y: 30,
    });

    // Animate in sequence
    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .to(
        metaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .to(
        [contentRef.current, sidebarRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.2",
      );
  }, []);

  return (
    <MainLayoutWrapper>
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
          <div className="max-w-8xl mx-auto">
            {/* Back to Blog Button */}
            <div className="mb-8 mt-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-[#28a717] transition-colors duration-300 group"
              >
                <svg
                  className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="font-inter font-medium">Back to Blog</span>
              </Link>
            </div>

            <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Main Article */}
              <div className="lg:col-span-3">
                {/* Header */}
                <header ref={headerRef} className="mb-8 sm:mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-gradient-to-r from-[#28a717] to-[#28a717] text-white px-4 py-2 rounded-full text-sm font-medium">
                      Web Design
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>

                  <h1
                    ref={titleRef}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cal-sans font-medium leading-tight text-gray-900 mb-6"
                  >
                    10 Web Design Trends That Will
                    <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                      {" "}
                      Dominate 2024
                    </span>
                  </h1>

                  <div
                    ref={metaRef}
                    className="flex flex-wrap items-center gap-6 text-sm text-gray-600 font-inter"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#28a717]/100 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
                        TS
                      </div>
                      <span>TrueScope Team</span>
                    </div>
                    <span>•</span>
                    <span>September 15, 2024</span>
                    <span>•</span>
                    <span>5 min read</span>
                    <span>•</span>
                    <span>12.3k views</span>
                  </div>
                </header>

                {/* Featured Image */}
                <div className="relative mb-8 sm:mb-12">
                  <div className="h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                      alt="Modern web design workspace with multiple devices showing responsive design"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#28a717]/100/20 to-purple-500/20"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <h3 className="text-xl font-cal-sans text-white mb-2">
                          Web Design Trends 2024
                        </h3>
                        <p className="text-[#28a717]/20 font-inter text-sm">
                          Modern responsive design across all devices
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div ref={contentRef} className="prose prose-lg max-w-none">
                  <div className="bg-[#28a717]/10 border-l-4 border-[#28a717]/100 p-6 rounded-r-xl mb-8">
                    <p className="text-lg font-inter text-[#0d3e06] mb-0">
                      <strong>Key Takeaway:</strong> 2024 is bringing
                      revolutionary changes to web design, with AI-driven
                      personalization, immersive 3D experiences, and sustainable
                      design practices leading the charge. Stay ahead of the
                      curve with these game-changing trends.
                    </p>
                  </div>

                  <div className="font-inter text-gray-700 leading-relaxed space-y-6">
                    <p className="text-xl text-gray-800 font-medium">
                      The digital landscape is evolving at breakneck speed, and
                      2024 is set to be a pivotal year for web design. As user
                      expectations continue to rise and technology advances,
                      designers and developers must adapt to stay competitive.
                    </p>

                    <p>
                      After analyzing hundreds of cutting-edge websites and
                      consulting with industry leaders, we&apos;ve identified
                      the top 10 trends that will define web design in 2024.
                      These aren&apos;t just aesthetic changes—they represent
                      fundamental shifts in how we think about user experience,
                      accessibility, and digital interaction.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-cal-sans font-medium text-gray-900 mt-8 mb-4">
                      1. AI-Powered Personalization
                    </h2>

                    <p>
                      Artificial intelligence is no longer a futuristic
                      concept—it&apos;s here, and it&apos;s transforming how
                      websites adapt to individual users. In 2024, we&apos;re
                      seeing websites that learn from user behavior and
                      dynamically adjust content, layout, and even color schemes
                      to match personal preferences.
                    </p>

                    <div className="bg-gray-100 p-6 rounded-xl my-6">
                      <h4 className="font-cal-sans font-medium text-gray-900 mb-2">
                        Real-World Example:
                      </h4>
                      <p className="text-gray-700 mb-0">
                        E-commerce giant Shopify has implemented AI that
                        analyzes browsing patterns to rearrange product
                        displays, showing items most likely to interest each
                        visitor based on their behavior and purchase history.
                      </p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-cal-sans font-medium text-gray-900 mt-8 mb-4">
                      2. Immersive 3D Experiences
                    </h2>

                    <p>
                      WebGL and Three.js have matured to the point where complex
                      3D experiences are not only possible but practical for
                      mainstream websites. From product configurators to virtual
                      showrooms, 3D is becoming an expected feature rather than
                      a novelty.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-cal-sans font-medium text-gray-900 mt-8 mb-4">
                      3. Sustainable Design Practices
                    </h2>

                    <p>
                      With growing awareness of digital carbon footprints,
                      sustainable web design is moving from nice-to-have to
                      necessity. This includes optimizing images, reducing
                      server requests, and choosing hosting providers powered by
                      renewable energy.
                    </p>

                    <div className="bg-green-50 border border-green-200 p-6 rounded-xl my-6">
                      <h4 className="font-cal-sans font-medium text-green-900 mb-2">
                        Impact Statistics:
                      </h4>
                      <ul className="text-green-800 space-y-1 mb-0">
                        <li>
                          • Optimized websites can reduce carbon emissions by up
                          to 70%
                        </li>
                        <li>
                          • 57% of users prefer brands with sustainable
                          practices
                        </li>
                        <li>
                          • Green hosting can cut a website&apos;s carbon
                          footprint by 80%
                        </li>
                      </ul>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-cal-sans font-medium text-gray-900 mt-8 mb-4">
                      Looking Ahead: Implementation Strategy
                    </h2>

                    <p>
                      Adopting these trends doesn&apos;t mean overhauling your
                      entire website overnight. Start with small
                      experiments—test AI-powered content recommendations, add
                      subtle 3D elements to key pages, or optimize your
                      site&apos;s performance for sustainability.
                    </p>

                    <p>
                      The key is to choose trends that align with your brand
                      identity and user needs. Not every trend will be right for
                      every website, but understanding these developments will
                      help you make informed decisions about your digital
                      strategy.
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="py-8 rounded-2xl mt-12">
                    <h3 className="text-2xl font-cal-sans font-medium mb-4">
                      Ready to Future-Proof Your Website?
                    </h3>
                    <p className="text-gray-800 mb-6 font-inter">
                      Let TrueScope help you implement these cutting-edge design
                      trends. Our team specializes in creating websites that not
                      only look amazing but also drive results.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9dd43d] to-[#7aac25] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                      Get Your Free Design Consultation
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div ref={sidebarRef} className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Table of Contents */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-cal-sans font-medium text-gray-900 mb-4">
                      In This Article
                    </h3>
                    <ul className="space-y-3 text-sm font-inter">
                      <li>
                        <a
                          href="#ai-personalization"
                          className="text-gray-600 hover:text-[#28a717] transition-colors"
                        >
                          AI-Powered Personalization
                        </a>
                      </li>
                      <li>
                        <a
                          href="#3d-experiences"
                          className="text-gray-600 hover:text-[#28a717] transition-colors"
                        >
                          Immersive 3D Experiences
                        </a>
                      </li>
                      <li>
                        <a
                          href="#sustainable-design"
                          className="text-gray-600 hover:text-[#28a717] transition-colors"
                        >
                          Sustainable Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="#implementation"
                          className="text-gray-600 hover:text-[#28a717] transition-colors"
                        >
                          Implementation Strategy
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Related Articles */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-cal-sans font-medium text-gray-900 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      <Link
                        href="/blog/posts/mobile-first-design"
                        className="block group"
                      >
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#28a717] transition-colors font-inter">
                          Why Your Business Needs Mobile-First Design
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">4 min read</p>
                      </Link>
                      <Link
                        href="/blog/posts/seo-guide-2024"
                        className="block group"
                      >
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#28a717] transition-colors font-inter">
                          Complete SEO Guide for 2024
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">8 min read</p>
                      </Link>
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-[#28a717]/10 p-6 rounded-xl border border-[#28a717]/20">
                    <h3 className="font-cal-sans font-medium text-[#0d3e06] mb-2">
                      Stay Updated
                    </h3>
                    <p className="text-sm text-[#1e7a0f] mb-4 font-inter">
                      Get weekly design insights delivered to your inbox.
                    </p>
                    <Link
                      href="/contact"
                      className="w-full block bg-[#28a717] hover:bg-[#1e7a0f] text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium text-center"
                    >
                      Subscribe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayoutWrapper>
  );
};

export default WebDesignTrends2024;
