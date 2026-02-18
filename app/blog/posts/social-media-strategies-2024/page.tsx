"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

const SocialMediaStrategies2024 = () => {
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
                    <span className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Social Media
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      Strategy Guide
                    </span>
                  </div>

                  <h1
                    ref={titleRef}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cal-sans font-medium leading-tight text-gray-900 mb-6"
                  >
                    Social Media Marketing Strategies
                    <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                      {" "}
                      That Actually Work
                    </span>
                  </h1>

                  <div
                    ref={metaRef}
                    className="flex flex-wrap items-center gap-6 text-sm text-gray-600 font-inter"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-red-600 flex items-center justify-center text-white text-xs font-semibold">
                        MJ
                      </div>
                      <span>Marcus Johnson, Social Media Expert</span>
                    </div>
                    <span>•</span>
                    <span>September 5, 2024</span>
                    <span>•</span>
                    <span>6 min read</span>
                    <span>•</span>
                    <span>14.2k views</span>
                  </div>
                </header>

                {/* Featured Image */}
                <div className="relative mb-8 sm:mb-12">
                  <div className="h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80"
                      alt="Social media marketing strategy workspace with analytics, content planning, and engagement metrics"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <h3 className="text-xl font-cal-sans text-white mb-2">
                          Social Media Excellence
                        </h3>
                        <p className="text-pink-100 font-inter text-sm">
                          Strategic engagement that drives real business results
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div ref={contentRef} className="prose prose-lg max-w-none">
                  <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-xl mb-8">
                    <p className="text-lg font-inter text-pink-900 mb-0">
                      <strong>Reality Check:</strong> 73% of small businesses
                      waste money on social media because they&apos;re chasing
                      vanity metrics instead of building genuine relationships.
                      This guide focuses on strategies that drive real business
                      results, not just likes and follows.
                    </p>
                  </div>

                  <div className="font-inter text-gray-700 leading-relaxed space-y-6">
                    <p className="text-xl text-gray-800 font-medium">
                      Social media marketing has evolved far beyond posting
                      pretty pictures and hoping for engagement. Today&apos;s
                      successful businesses use social platforms as
                      sophisticated customer acquisition and retention tools,
                      building communities that translate directly into revenue.
                    </p>

                    <p>
                      After managing social media campaigns for over 150
                      businesses across diverse industries, I&apos;ve identified
                      the key strategies that separate thriving social media
                      presences from those that merely exist. Let&apos;s dive
                      into what actually works.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-cal-sans font-medium text-gray-900 mt-8 mb-4">
                      Strategy 1: Platform-Specific Content That Resonates
                    </h2>

                    <p>
                      The biggest mistake businesses make is treating all social
                      platforms the same. Each platform has its own culture,
                      content preferences, and user behavior patterns.
                      One-size-fits-all content is a recipe for mediocrity.
                    </p>

                    <div className="bg-gray-100 p-6 rounded-xl my-6">
                      <h4 className="font-cal-sans font-medium text-gray-900 mb-4">
                        Platform-Specific Best Practices:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-[#28a717] mb-2">
                              📘 Facebook
                            </h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>
                                • Focus on community building and local
                                engagement
                              </li>
                              <li>
                                • Use Facebook Groups for customer support
                              </li>
                              <li>
                                • Share behind-the-scenes content and company
                                culture
                              </li>
                              <li>
                                • Leverage Facebook Events for offline
                                connections
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-pink-600 mb-2">
                              📸 Instagram
                            </h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>
                                • Prioritize high-quality visual storytelling
                              </li>
                              <li>
                                • Use Stories for daily engagement and polls
                              </li>
                              <li>
                                • Partner with micro-influencers in your niche
                              </li>
                              <li>
                                • Create Instagram-specific hashtag strategies
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-[#28a717] mb-2">
                              🐦 Twitter/X
                            </h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>
                                • Join industry conversations and trending
                                topics
                              </li>
                              <li>• Share quick tips and industry insights</li>
                              <li>
                                • Provide rapid customer service responses
                              </li>
                              <li>
                                • Use Twitter Spaces for thought leadership
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-[#1e7a0f] mb-2">
                              💼 LinkedIn
                            </h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Publish in-depth industry analysis</li>
                              <li>
                                • Share company milestones and achievements
                              </li>
                              <li>• Network with industry professionals</li>
                              <li>
                                • Use LinkedIn articles for thought leadership
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-cal-sans font-medium text-gray-900 mt-8 mb-4">
                      Strategy 2: The 80/20 Content Rule That Builds Trust
                    </h2>

                    <p>
                      Here&apos;s a hard truth: people don&apos;t follow
                      businesses to see constant sales pitches. They follow for
                      value, entertainment, and authentic connection. The most
                      successful businesses follow the 80/20 rule—80% valuable,
                      non-promotional content and 20% strategic business
                      promotion.
                    </p>

                    <div className="bg-[#28a717]/10 p-6 rounded-xl my-6">
                      <h4 className="font-cal-sans font-medium text-[#0d3e06] mb-3">
                        The 80% - Value-First Content Ideas:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4 text-[#165c0a]">
                        <div>
                          <h5 className="font-medium mb-2">
                            Educational Content
                          </h5>
                          <ul className="text-sm space-y-1">
                            <li>• How-to tutorials and tips</li>
                            <li>• Industry insights and trends</li>
                            <li>• Common mistakes to avoid</li>
                            <li>• Tool recommendations and reviews</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">
                            Community Building
                          </h5>
                          <ul className="text-sm space-y-1">
                            <li>• Behind-the-scenes team content</li>
                            <li>• Customer success stories</li>
                            <li>• User-generated content features</li>
                            <li>• Industry news commentary</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-cal-sans font-medium text-gray-900 mt-8 mb-4">
                      Strategy 3: Engagement That Converts to Customers
                    </h2>

                    <p>
                      Engagement isn&apos;t just about responding to
                      comments—it&apos;s about creating meaningful interactions
                      that move people along your customer journey. Every
                      engagement opportunity is a chance to demonstrate your
                      expertise and build relationships.
                    </p>

                    <div className="bg-green-50 border border-green-200 p-6 rounded-xl my-6">
                      <h4 className="font-cal-sans font-medium text-green-900 mb-3">
                        Advanced Engagement Tactics:
                      </h4>
                      <div className="space-y-4 text-green-800">
                        <div className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
                            1
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">
                              Proactive Industry Participation
                            </h5>
                            <p className="text-sm">
                              Join conversations in industry hashtags and groups
                              before people know your brand.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
                            2
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">
                              Strategic Question Campaigns
                            </h5>
                            <p className="text-sm">
                              Ask questions that naturally lead to discussions
                              about your services without being salesy.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
                            3
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Value-Add DMs</h5>
                            <p className="text-sm">
                              Send helpful resources via direct message to
                              engaged followers (not sales pitches).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-cal-sans font-medium text-gray-900 mt-8 mb-4">
                      Measuring What Matters: Business-Focused Metrics
                    </h2>

                    <p>
                      Vanity metrics like follower count and total likes feel
                      good but don&apos;t pay the bills. Focus on metrics that
                      directly correlate with business growth and customer
                      acquisition.
                    </p>

                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-6">
                      <h4 className="font-cal-sans font-medium text-yellow-900 mb-3">
                        Business-Impact Metrics to Track:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4 text-yellow-800">
                        <div>
                          <h5 className="font-medium mb-2">
                            💰 Revenue Metrics
                          </h5>
                          <ul className="text-sm space-y-1">
                            <li>• Social media-attributed sales</li>
                            <li>• Cost per lead from social</li>
                            <li>• Customer lifetime value of social leads</li>
                            <li>• Return on ad spend (ROAS)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">
                            🎯 Engagement Quality
                          </h5>
                          <ul className="text-sm space-y-1">
                            <li>• Comments-to-follower ratio</li>
                            <li>• Share/save rates on content</li>
                            <li>• Direct message conversion rate</li>
                            <li>• Social mention sentiment analysis</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <p>
                      Remember, social media marketing is about building
                      relationships at scale. Focus on providing genuine value,
                      engaging authentically, and measuring what actually
                      matters to your business. The followers and revenue will
                      follow naturally.
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="py-8 rounded-2xl mt-12">
                    <h3 className="text-2xl font-cal-sans font-medium mb-4">
                      Ready to Transform Your Social Media Presence?
                    </h3>
                    <p className="text-gray-800 mb-6 font-inter">
                      Let TrueScope create a social media strategy that actually
                      drives business results. We&apos;ll help you build genuine
                      connections that convert to loyal customers.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9dd43d] to-[#7aac25] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                      Get Your Social Media Strategy
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
                      Strategy Overview
                    </h3>
                    <ul className="space-y-3 text-sm font-inter">
                      <li>
                        <a
                          href="#platform-specific"
                          className="text-gray-600 hover:text-[#28a717] transition-colors"
                        >
                          Platform-Specific Content
                        </a>
                      </li>
                      <li>
                        <a
                          href="#80-20-rule"
                          className="text-gray-600 hover:text-[#28a717] transition-colors"
                        >
                          The 80/20 Content Rule
                        </a>
                      </li>
                      <li>
                        <a
                          href="#engagement-tactics"
                          className="text-gray-600 hover:text-[#28a717] transition-colors"
                        >
                          Engagement That Converts
                        </a>
                      </li>
                      <li>
                        <a
                          href="#business-metrics"
                          className="text-gray-600 hover:text-[#28a717] transition-colors"
                        >
                          Business-Focused Metrics
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Social Media Tools */}
                  <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                    <h3 className="font-cal-sans font-medium text-pink-900 mb-4">
                      Recommended Tools
                    </h3>
                    <div className="space-y-3 text-sm">
                      <a
                        href="#"
                        className="block text-pink-700 hover:text-pink-900 transition-colors"
                      >
                        📊 Buffer - Content Scheduling
                      </a>
                      <a
                        href="#"
                        className="block text-pink-700 hover:text-pink-900 transition-colors"
                      >
                        📈 Hootsuite Analytics - Performance Tracking
                      </a>
                      <a
                        href="#"
                        className="block text-pink-700 hover:text-pink-900 transition-colors"
                      >
                        🎨 Canva - Visual Content Creation
                      </a>
                      <a
                        href="#"
                        className="block text-pink-700 hover:text-pink-900 transition-colors"
                      >
                        📱 Later - Instagram Planning
                      </a>
                    </div>
                  </div>

                  {/* Author Bio */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-600 flex items-center justify-center text-white font-semibold">
                        MJ
                      </div>
                      <div>
                        <h4 className="font-cal-sans font-medium text-gray-900">
                          Marcus Johnson
                        </h4>
                        <p className="text-sm text-gray-600">
                          Social Media Expert
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 font-inter">
                      Marcus has built social media strategies for 150+
                      businesses, generating over $2M in social media-attributed
                      revenue across diverse industries.
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

export default SocialMediaStrategies2024;
