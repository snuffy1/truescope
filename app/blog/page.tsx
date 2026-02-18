"use client";
import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [scrollY, setScrollY] = useState(0);

  // Animation refs
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blogPosts = [
    {
      title: "10 Web Design Trends That Will Dominate 2024",
      excerpt:
        "After analyzing hundreds of cutting-edge websites and consulting with industry leaders, we've identified the revolutionary changes coming to web design. From AI-driven personalization to immersive 3D experiences, 2024 is bringing game-changing innovations.",
      date: "September 15, 2024",
      category: "Web Design",
      readTime: "5 min read",
      featured: true,
      slug: "web-design-trends-2024",
      author: "TrueScope Team",
      views: "12.3k",
      image: "/blog/web-design-trends.jpg",
    },
    {
      title: "The Ultimate Guide to SEO for Small Businesses",
      excerpt:
        "Small businesses have unique advantages in SEO that Fortune 500 companies can't replicate. This comprehensive guide shows you how to leverage local connections, create authentic content, and compete with industry giants.",
      date: "September 10, 2024",
      category: "SEO",
      readTime: "8 min read",
      featured: false,
      slug: "seo-guide-small-business",
      author: "Sarah Martinez",
      views: "18.7k",
      image: "/blog/seo-guide.jpg",
    },
    {
      title: "Social Media Marketing Strategies That Actually Work",
      excerpt:
        "73% of small businesses waste money on social media chasing vanity metrics. After managing campaigns for 150+ businesses, here are the strategies that drive real revenue, not just likes and follows.",
      date: "September 5, 2024",
      category: "Digital Marketing",
      readTime: "6 min read",
      featured: false,
      slug: "social-media-strategies-2024",
      author: "Marcus Johnson",
      views: "14.2k",
      image: "/blog/social-media.jpg",
    },
    {
      title: "E-commerce Best Practices for Dubai Businesses",
      excerpt:
        "The UAE's e-commerce market is growing 53% annually, but 70% of new online stores fail within their first year. We've analyzed successful Dubai e-commerce businesses to identify the strategies that actually work in this competitive market.",
      date: "August 30, 2024",
      category: "E-commerce",
      readTime: "7 min read",
      featured: false,
      slug: "ecommerce-dubai-best-practices",
      author: "Amira Hassan",
      views: "9.1k",
      image: "/blog/ecommerce.jpg",
    },
    {
      title: "Why Your Business Needs a Mobile-First Website",
      excerpt:
        "Mobile traffic accounts for 67% of all website visits, yet most businesses still design for desktop first. This backwards approach is costing you customers and revenue. Here's how to fix it.",
      date: "August 25, 2024",
      category: "Web Development",
      readTime: "4 min read",
      featured: false,
      slug: "mobile-first-website-design",
      author: "David Chen",
      views: "11.5k",
      image: "/blog/mobile-first.jpg",
    },
    {
      title: "Digital Transformation in the UAE: Real Success Stories",
      excerpt:
        "The UAE leads the region in digital adoption, but transformation isn't just about technology—it's about people and processes. We interviewed 50+ business leaders to understand what actually drives successful digital transformation.",
      date: "August 20, 2024",
      category: "Technology",
      readTime: "9 min read",
      featured: false,
      slug: "uae-digital-transformation-guide",
      author: "Omar Al-Rashid",
      views: "7.8k",
      image: "/blog/digital-transformation.jpg",
    },
    {
      title: "AI-Powered Marketing: Beyond the Hype",
      excerpt:
        "AI marketing tools promise to revolutionize customer engagement, but 84% of businesses struggle to see real ROI. We tested 15 AI marketing platforms to separate genuine innovation from marketing fluff.",
      date: "August 15, 2024",
      category: "Technology",
      readTime: "6 min read",
      featured: false,
      slug: "ai-marketing-tools-review",
      author: "Lisa Rodriguez",
      views: "13.4k",
      image: "/blog/ai-marketing.jpg",
    },
    {
      title: "Content Marketing ROI: What 2024 Data Reveals",
      excerpt:
        "Content marketing costs 62% less than traditional advertising but generates 3x more leads. However, most businesses can't prove ROI. This data-driven analysis shows exactly what metrics matter and how to track them.",
      date: "August 10, 2024",
      category: "Content Marketing",
      readTime: "7 min read",
      featured: false,
      slug: "content-marketing-roi-2024",
      author: "Jennifer Kim",
      views: "16.2k",
      image: "/blog/content-roi.jpg",
    },
    {
      title: "Building Brand Authority: The Compound Effect",
      excerpt:
        "Brand authority isn't built overnight—it's the compound effect of consistent value delivery. After studying 100+ thought leaders, we've identified the exact framework that builds authentic authority in any industry.",
      date: "August 5, 2024",
      category: "Branding",
      readTime: "5 min read",
      featured: false,
      slug: "building-brand-authority-guide",
      author: "Michael Thompson",
      views: "8.9k",
      image: "/blog/brand-authority.jpg",
    },
  ];

  const categories = [
    "All",
    "Web Design",
    "SEO",
    "Digital Marketing",
    "E-commerce",
    "Web Development",
    "Technology",
    "Content Marketing",
    "Branding",
  ];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  // Function to get category-specific images from Unsplash
  const getCategoryImage = (category: string) => {
    const imageMap: { [key: string]: string } = {
      "Web Design":
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      SEO: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      "Digital Marketing":
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2339&q=80",
      "E-commerce":
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      "Web Development":
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      Technology:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80",
      "Content Marketing":
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      Branding:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
    };
    return (
      imageMap[category] ||
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
    );
  };

  // GSAP Animations matching homepage style
  useGSAP(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set([categoriesRef.current, featuredRef.current, postsRef.current], {
      opacity: 0,
      y: 30,
    });

    // Animate in sequence like homepage
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .to(
        categoriesRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3",
      )
      .to(
        [featuredRef.current, postsRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.4",
      );
  }, []);

  return (
    <MainLayoutWrapper>
      <div className="min-h-screen">
        {/* Unified Layout Container */}
        <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
          {/* Hero Section with scroll effects */}
          <section
            ref={heroRef}
            className="relative bg-transparent mb-12 sm:mb-16 lg:mb-20 overflow-hidden"
          >
            <div className="text-center relative z-10">
              <h1
                ref={titleRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-cal-sans mb-4 sm:mb-6 text-gray-900 leading-tight"
              >
                Expert Insights &
                <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                  {" "}
                  Digital Growth
                </span>
              </h1>
              <p
                ref={subtitleRef}
                className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto font-inter leading-relaxed"
              >
                Real strategies from our team&apos;s experience helping 500+
                businesses scale. No fluff, no generic advice—just proven
                tactics that drive measurable results.
              </p>

              {/* Scroll indicator */}
              <div className="flex justify-center mb-8">
                <div
                  className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative cursor-pointer hover:border-[#28a717]/100 transition-colors"
                  style={{
                    transform: scrollY > 50 ? "scale(0.8)" : "scale(1)",
                    opacity: scrollY > 200 ? 0.3 : 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"
                    style={{
                      animationDelay: "0.5s",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Background elements with parallax effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-10 -left-10 w-4 h-4 bg-[#28a717] rounded-full opacity-60"
                style={{
                  transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
                }}
              ></div>
              <div
                className="absolute bottom-20 -right-8 w-6 h-6 bg-purple-400 rounded-full opacity-40"
                style={{
                  transform: `translate(${-scrollY * 0.15}px, ${
                    scrollY * 0.08
                  }px)`,
                }}
              ></div>
              <div
                className="absolute top-1/2 -left-16 w-3 h-3 bg-pink-400 rounded-full opacity-50"
                style={{
                  transform: `translate(${scrollY * 0.08}px, ${
                    -scrollY * 0.1
                  }px)`,
                }}
              ></div>
            </div>
          </section>

          {/* Category Filter */}
          <div ref={categoriesRef} className="mb-12 sm:mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-medium mb-3 font-cal-sans text-gray-900">
                Browse by Expertise
              </h2>
              <p className="text-gray-600 font-inter max-w-2xl mx-auto">
                Deep-dive into specialized knowledge areas where our team has
                hands-on experience driving growth for businesses like yours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {categories.map((category) => {
                const postCount =
                  category === "All"
                    ? blogPosts.length
                    : blogPosts.filter((post) => post.category === category)
                        .length;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`group relative px-4 py-3 sm:px-6 sm:py-4 rounded-full font-medium transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                      activeCategory === category
                        ? "bg-gradient-to-r from-[#9dd43d] to-[#7aac25] text-white shadow-xl shadow-[#28a717]/100/25"
                        : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-[#28a717]/40 hover:shadow-lg"
                    }`}
                  >
                    <span className="flex items-center gap-3 font-inter">
                      <span className="relative">
                        {category}
                        {activeCategory === category && (
                          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/30 rounded-full"></div>
                        )}
                      </span>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium transition-all ${
                          activeCategory === category
                            ? "bg-white/20 text-white backdrop-blur-sm"
                            : "bg-gray-100 text-gray-600 group-hover:bg-[#28a717]/10 group-hover:text-[#1e7a0f]"
                        }`}
                      >
                        {postCount}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Post */}
          {filteredPosts.some((post) => post.featured) && (
            <div ref={featuredRef} className="mb-16 sm:mb-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></div>
                  <h2 className="text-xl sm:text-2xl font-medium text-gray-800 font-cal-sans">
                    Featured Deep-Dive
                  </h2>
                </div>
                <div className="h-px bg-gradient-to-r from-gray-300 to-transparent flex-1"></div>
              </div>
              {filteredPosts
                .filter((post) => post.featured)
                .slice(0, 1)
                .map((post, index) => (
                  <Link
                    key={index}
                    href={`/blog/posts/${post.slug}`}
                    className="block group"
                  >
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-100">
                      <div className="grid lg:grid-cols-5 gap-0">
                        <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12 xl:p-16">
                          <div className="flex items-center gap-3 mb-6">
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 font-inter">
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              Featured
                            </span>
                            <span className="bg-[#28a717]/10 text-[#1e7a0f] px-3 py-2 rounded-full text-sm font-medium font-inter">
                              {post.category}
                            </span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mb-6 text-gray-900 leading-tight font-cal-sans hover:bg-gradient-to-r hover:from-[#9dd43d] hover:to-[#7aac25]  hover:text-transparent hover:bg-clip-text transition-colors duration-300">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 mb-8 text-base sm:text-lg xl:text-xl leading-relaxed font-inter">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4 text-sm text-gray-500 font-inter">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#28a717]/100 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
                                  {post.author
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </div>
                                <span>{post.author}</span>
                              </div>
                              <span>•</span>
                              <span>{post.date}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                              <span>•</span>
                              <span>{post.views} views</span>
                            </div>
                          </div>

                          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9dd43d] to-[#7aac25] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg font-inter">
                            Read Complete Analysis
                            <svg
                              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                          </div>
                        </div>

                        <div className="lg:col-span-2 h-64 lg:h-full relative overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                            alt="Modern web design workspace showing responsive design trends"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-[#28a717]/100/20 to-purple-500/20 group-hover:from-[#28a717]/100/30 group-hover:to-purple-500/30 transition-all duration-700"></div>
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                              <h4 className="text-xl font-cal-sans text-white mb-2">
                                Featured Deep-Dive
                              </h4>
                              <p className="text-[#28a717]/20 font-inter">
                                Expert analysis of emerging design trends
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}

          {/* Blog Grid */}
          <div ref={postsRef}>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 font-cal-sans">
                Latest Insights
              </h2>
              <div className="h-px bg-gradient-to-r from-gray-300 to-transparent flex-1"></div>
              <span className="text-sm text-gray-500 font-inter">
                {filteredPosts.filter((post) => !post.featured).length} articles
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
              {filteredPosts
                .filter((post) => !post.featured)
                .map((post, index) => (
                  <Link
                    key={index}
                    href={`/blog/posts/${post.slug}`}
                    className="block group"
                  >
                    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] border border-gray-100">
                      <div className="h-48 sm:h-52 relative overflow-hidden">
                        <Image
                          src={getCategoryImage(post.category)}
                          alt={`${post.category} - ${post.title}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 group-hover:from-black/30 group-hover:to-black/50 transition-all duration-700"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                            <span className="text-white font-medium text-sm font-inter">
                              {post.category} Guide
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 lg:p-8">
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-gradient-to-r from-[#9dd43d] to-[#7aac25] text-white px-3 py-1.5 rounded-full text-xs font-medium font-inter">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <svg
                                className="w-3 h-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {post.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg
                                className="w-3 h-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0v-.5A1.5 1.5 0 0114.5 6c.526 0 .988-.27 1.256-.679a6.012 6.012 0 011.912 2.706A7.963 7.963 0 0110 14a7.963 7.963 0 01-7.668-6.027z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {post.views}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-4 text-gray-900 group-hover:text-[#28a717] transition-colors duration-300 leading-tight font-cal-sans line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed font-inter line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center text-white text-xs font-semibold">
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <div className="text-xs text-gray-500 font-inter">
                                {post.author}
                              </div>
                              <div className="text-xs text-gray-400 font-inter">
                                {post.date}
                              </div>
                            </div>
                          </div>

                          <div className="text-[#28a717] hover:text-[#1e7a0f] text-sm font-medium transition-all duration-300 flex items-center gap-2 group-hover:gap-3 font-inter">
                            Read Article
                            <svg
                              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayoutWrapper>
  );
};

export default Blog;
