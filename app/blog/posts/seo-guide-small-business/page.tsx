"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

const SEOGuideSmallBusiness = () => {
  const headerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set([headerRef.current, titleRef.current, metaRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set([contentRef.current, sidebarRef.current], {
      opacity: 0,
      y: 30,
    });

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
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      SEO Strategy
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      Essential Guide
                    </span>
                  </div>

                  <h1
                    ref={titleRef}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cal-sans font-medium leading-tight text-gray-900 mb-6"
                  >
                    The Ultimate Guide to
                    <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                      {" "}
                      SEO for Small Businesses
                    </span>
                  </h1>

                  <div
                    ref={metaRef}
                    className="flex flex-wrap items-center gap-6 text-sm text-gray-600 font-inter"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-xs font-semibold">
                        TS
                      </div>
                      <span>Sarah Martinez, SEO Specialist</span>
                    </div>
                    <span>•</span>
                    <span>September 10, 2024</span>
                    <span>•</span>
                    <span>8 min read</span>
                    <span>•</span>
                    <span>18.7k views</span>
                  </div>
                </header>

                {/* Featured Image */}
                <div className="relative mb-8 sm:mb-12">
                  <div className="h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
                      alt="SEO analytics dashboard showing search rankings and website performance metrics"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-[#28a717]/100/20"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <h3 className="text-xl font-cal-sans text-white mb-2">
                          SEO Success Framework
                        </h3>
                        <p className="text-green-100 font-inter text-sm">
                          Data-driven approach to search optimization
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div ref={contentRef} className="prose prose-lg max-w-none">
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
                    <p className="text-lg font-inter text-green-900 mb-0">
                      <strong>Bottom Line:</strong> Small businesses can compete
                      with industry giants in search rankings by focusing on
                      local SEO, creating valuable content, and optimizing for
                      user intent. This comprehensive guide provides actionable
                      strategies that deliver measurable results.
                    </p>
                  </div>

                  <div className="font-inter text-gray-700 leading-relaxed space-y-6">
                    <p className="text-xl text-gray-800 font-medium">
                      Search Engine Optimization isn&apos;t just for Fortune 500
                      companies. In fact, small businesses often have unique
                      advantages in SEO that larger corporations struggle to
                      replicate—authentic local connections, nimble content
                      creation, and genuine customer relationships.
                    </p>

                    <p>
                      This guide distills years of experience helping small
                      businesses climb search rankings and attract their ideal
                      customers. We&apos;ll cut through the technical jargon and
                      focus on strategies that actually move the needle for
                      businesses with limited time and resources.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-cal-sans font-medium text-gray-900 mt-8 mb-4">
                      Chapter 1: Foundation - Technical SEO Basics
                    </h2>

                    <p>
                      Before diving into content strategies, your website needs
                      solid technical foundations. Think of this as the plumbing
                      of your digital presence—it might not be glamorous, but
                      it&apos;s essential for everything else to work.
                    </p>

                    <div className="bg-[#28a717]/10 p-6 rounded-xl my-6">
                      <h4 className="font-cal-sans font-medium text-[#0d3e06] mb-3">
                        Essential Technical Checklist:
                      </h4>
                      <ul className="text-[#165c0a] space-y-2 mb-0">
                        <li className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          SSL certificate (https://) for security and trust
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          Mobile-responsive design (60%+ of searches are mobile)
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          Page speed under 3 seconds (use Google PageSpeed
                          Insights)
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          XML sitemap submitted to Google Search Console
                        </li>
                      </ul>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-cal-sans font-medium text-gray-900 mt-8 mb-4">
                      Chapter 2: Local SEO - Your Secret Weapon
                    </h2>

                    <p>
                      For small businesses, local SEO isn&apos;t just
                      important—it&apos;s often the difference between thriving
                      and barely surviving. When someone searches &quot;coffee
                      shop near me&quot; or &quot;best plumber in [city],&quot;
                      you want to be the first result they see.
                    </p>

                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-6">
                      <h4 className="font-cal-sans font-medium text-yellow-900 mb-3">
                        Local SEO Quick Wins:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4 text-yellow-800">
                        <div>
                          <h5 className="font-medium mb-2">
                            Google Business Profile
                          </h5>
                          <ul className="text-sm space-y-1">
                            <li>• Complete all profile sections</li>
                            <li>• Add high-quality photos</li>
                            <li>• Encourage customer reviews</li>
                            <li>• Post regular updates</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Local Citations</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Consistent NAP (Name, Address, Phone)</li>
                            <li>• Yelp, Yellowpages, industry directories</li>
                            <li>• Local chamber of commerce</li>
                            <li>• Niche-specific platforms</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-cal-sans font-medium text-gray-900 mt-8 mb-4">
                      Chapter 3: Content Strategy That Converts
                    </h2>

                    <p>
                      Content is still king, but context is queen. The best SEO
                      content doesn&apos;t just rank well—it genuinely helps
                      your potential customers solve problems and make informed
                      decisions. This builds trust and positions you as the
                      obvious choice when they&apos;re ready to buy.
                    </p>

                    <div className="bg-gray-100 p-6 rounded-xl my-6">
                      <h4 className="font-cal-sans font-medium text-gray-900 mb-3">
                        Content Planning Framework:
                      </h4>
                      <div className="space-y-4 text-gray-700">
                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-[#28a717] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                            1
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">
                              Research Your Audience&apos;s Questions
                            </h5>
                            <p className="text-sm">
                              Use tools like AnswerThePublic or simply ask your
                              customers what they want to know.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-[#28a717] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                            2
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">
                              Create Comprehensive Answers
                            </h5>
                            <p className="text-sm">
                              Don&apos;t just scratch the surface—provide the
                              most thorough, helpful answer available.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-[#28a717] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                            3
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">
                              Optimize for Search Intent
                            </h5>
                            <p className="text-sm">
                              Match your content format to what searchers
                              expect—tutorials, comparisons, or quick answers.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-cal-sans font-medium text-gray-900 mt-8 mb-4">
                      Measuring Success: Key Metrics That Matter
                    </h2>

                    <p>
                      SEO isn&apos;t a &quot;set it and forget it&quot;
                      strategy. Regular monitoring and adjustment are crucial
                      for long-term success. Focus on metrics that directly
                      correlate with business growth, not just vanity numbers.
                    </p>

                    <div className="bg-green-50 border border-green-200 p-6 rounded-xl my-6">
                      <h4 className="font-cal-sans font-medium text-green-900 mb-3">
                        Essential KPIs to Track:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4 text-green-800">
                        <div>
                          <h5 className="font-medium mb-2">Traffic Quality</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Organic traffic growth</li>
                            <li>• Time on site</li>
                            <li>• Pages per session</li>
                            <li>• Bounce rate improvement</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Business Impact</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Lead generation increase</li>
                            <li>• Phone calls from search</li>
                            <li>• Online conversions</li>
                            <li>• Revenue attribution</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <p>
                      Remember, SEO is a marathon, not a sprint. Most businesses
                      start seeing significant results within 3-6 months of
                      consistent effort. The key is staying focused on providing
                      genuine value to your audience while following SEO best
                      practices.
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className=" py-8 rounded-2xl  mt-12">
                    <h3 className="text-2xl font-cal-sans font-medium mb-4">
                      Ready to Dominate Local Search Results?
                    </h3>
                    <p className="text-gray-800 mb-6 font-inter">
                      Let TrueScope implement a proven SEO strategy for your
                      business. We&apos;ve helped hundreds of small businesses
                      increase their online visibility and attract more
                      customers.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9dd43d] to-[#7aac25] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                      Get Your Free SEO Audit
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
                      Chapter Overview
                    </h3>
                    <ul className="space-y-3 text-sm font-inter">
                      <li>
                        <a
                          href="#technical-seo"
                          className="text-gray-600 hover:text-[#28a717] transition-colors"
                        >
                          1. Technical SEO Basics
                        </a>
                      </li>
                      <li>
                        <a
                          href="#local-seo"
                          className="text-gray-600 hover:text-[#28a717] transition-colors"
                        >
                          2. Local SEO Strategy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#content-strategy"
                          className="text-gray-600 hover:text-[#28a717] transition-colors"
                        >
                          3. Content That Converts
                        </a>
                      </li>
                      <li>
                        <a
                          href="#measuring-success"
                          className="text-gray-600 hover:text-[#28a717] transition-colors"
                        >
                          4. Measuring Success
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Free Resources */}
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="font-cal-sans font-medium text-green-900 mb-4">
                      Free SEO Tools
                    </h3>
                    <div className="space-y-3 text-sm">
                      <a
                        href="#"
                        className="block text-green-700 hover:text-green-900 transition-colors"
                      >
                        📊 SEO Audit Checklist
                      </a>
                      <a
                        href="#"
                        className="block text-green-700 hover:text-green-900 transition-colors"
                      >
                        🎯 Keyword Research Template
                      </a>
                      <a
                        href="#"
                        className="block text-green-700 hover:text-green-900 transition-colors"
                      >
                        📈 Monthly SEO Report Template
                      </a>
                    </div>
                  </div>

                  {/* Author Bio */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white font-semibold">
                        SM
                      </div>
                      <div>
                        <h4 className="font-cal-sans font-medium text-gray-900">
                          Sarah Martinez
                        </h4>
                        <p className="text-sm text-gray-600">SEO Specialist</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 font-inter">
                      Sarah has helped over 200 small businesses improve their
                      search rankings and grow their online presence through
                      strategic SEO implementation.
                    </p>
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

export default SEOGuideSmallBusiness;
