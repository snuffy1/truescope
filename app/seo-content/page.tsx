import React from "react";
import Link from "next/link";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

const SEOContent = () => {
  return (
    <MainLayoutWrapper>
      <div className="min-h-screen ">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cal-sans font-medium leading-tight">
              <span className="text-gray-800">SEO & Content Marketing</span>
              <br />
              <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                That Drives Growth
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-inter max-w-4xl mx-auto">
              Boost your online visibility and drive organic traffic with our
              comprehensive SEO and content marketing strategies. Designed
              specifically for startups and growing businesses to achieve
              measurable growth and maximize ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#9dd43d] to-[#7aac25] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg font-inter"
              >
                Get Free SEO Audit
              </Link>
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-800 text-gray-800 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 font-inter"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cal-sans font-medium text-gray-800 mb-4">
              Our Core SEO & Content Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Comprehensive solutions tailored for startups and growing
              businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300  backdrop-blur-lg">
              <div className="w-16 h-16  flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-cal-sans font-medium text-gray-800 mb-4">
                Search Engine Optimization
              </h3>
              <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                Improve your website ranking and organic visibility with proven
                SEO strategies that deliver measurable results for growing
                businesses.
              </p>
              <ul className="space-y-3 text-gray-700 font-inter">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717]/100 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Technical SEO audit and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717]/100 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive keyword research and strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717]/100 rounded-full mt-2 flex-shrink-0"></div>
                  <span>On-page and off-page optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717]/100 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Local SEO and Google My Business optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717]/100 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strategic link building and outreach</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717]/100 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Monthly SEO reporting and analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 backdrop-blur-lg">
              <div className="w-16 h-16  flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-cal-sans font-medium text-gray-800 mb-4">
                Content Marketing
              </h3>
              <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                Engage your audience with high-quality, SEO-optimized content
                that drives results and builds brand authority in your industry.
              </p>
              <ul className="space-y-3 text-gray-700 font-inter">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strategic content planning and development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>SEO-optimized blog writing and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Website copy and landing page content</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Content calendar planning and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Performance tracking and content analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Multi-channel content distribution strategy</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO Process Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cal-sans font-medium text-gray-800 mb-4">
              Our Proven{" "}
              <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                SEO Process
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              A systematic approach that delivers consistent results for
              startups and growing businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-black font-cal-sans transition-transform duration-300 group-hover:scale-110">
                1
              </div>
              <h3 className="text-xl lg:text-2xl font-cal-sans font-medium text-gray-800 mb-3">
                Audit & Analysis
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                Comprehensive website and competitor analysis to identify
                opportunities and gaps
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-black font-cal-sans transition-transform duration-300 group-hover:scale-110">
                2
              </div>
              <h3 className="text-xl lg:text-2xl font-cal-sans font-medium text-gray-800 mb-3">
                Strategy Development
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                Develop customized SEO and content strategy aligned with your
                business goals
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-black font-cal-sans transition-transform duration-300 group-hover:scale-110">
                3
              </div>
              <h3 className="text-xl lg:text-2xl font-cal-sans font-medium text-gray-800 mb-3">
                Implementation
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                Execute on-page, technical, and content optimizations with
                precision
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-black font-cal-sans transition-transform duration-300 group-hover:scale-110">
                4
              </div>
              <h3 className="text-xl lg:text-2xl font-cal-sans font-medium text-gray-800 mb-3">
                Monitor & Optimize
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                Track rankings, analyze performance, and continuously refine
                strategies
              </p>
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cal-sans font-medium text-gray-800 mb-4">
              Content That Converts
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Professional content creation services designed to engage your
              audience and drive business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-cal-sans font-medium text-gray-800 mb-4">
                Blog & Editorial Content
              </h3>
              <ul className="space-y-3 text-gray-700 font-inter">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717]/100 rounded-full mt-2 flex-shrink-0"></div>
                  <span>SEO-optimized articles and posts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717]/100 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Industry insights and thought leadership</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717]/100 rounded-full mt-2 flex-shrink-0"></div>
                  <span>How-to guides and tutorials</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717]/100 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Case studies and success stories</span>
                </li>
              </ul>
            </div>

            <div className=" p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-cal-sans font-medium text-gray-800 mb-4">
                Website & Landing Pages
              </h3>
              <ul className="space-y-3 text-gray-700 font-inter">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Homepage and service page copy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conversion-focused landing pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Product and service descriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>About us and company pages</span>
                </li>
              </ul>
            </div>

            <div className=" p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-cal-sans font-medium text-gray-800 mb-4">
                Marketing Materials
              </h3>
              <ul className="space-y-3 text-gray-700 font-inter">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Email marketing campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Social media content</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>White papers and ebooks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Press releases and announcements</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical & Local SEO Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300  backdrop-blur-lg">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-cal-sans font-medium text-gray-800 mb-4">
                Technical SEO Excellence
              </h3>
              <p className="text-gray-700 mb-6 font-inter leading-relaxed">
                Optimize the technical foundation of your website for better
                search engine crawling, indexing, and improved user experience.
              </p>
              <ul className="space-y-3 text-gray-700 font-inter">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Core Web Vitals and site speed optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mobile-first indexing implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717] rounded-full mt-2 flex-shrink-0"></div>
                  <span>XML sitemap creation and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Schema markup implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717] rounded-full mt-2 flex-shrink-0"></div>
                  <span>URL structure and internal linking optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300  backdrop-blur-lg">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-cal-sans font-medium text-gray-800 mb-4">
                Local SEO Domination
              </h3>
              <p className="text-gray-700 mb-6 font-inter leading-relaxed">
                Dominate local search results and attract customers in your
                geographic area with our comprehensive local SEO strategies.
              </p>
              <ul className="space-y-3 text-gray-700 font-inter">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Google My Business optimization and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Local citation building and NAP consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Review generation and reputation management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Local keyword research and targeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#28a717] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Location-based content strategy</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cal-sans font-medium text-gray-800 mb-4">
              SEO & Content{" "}
              <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                Packages
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Affordable packages designed for startups and growing businesses
              to maximize ROI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300  backdrop-blur-lg">
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-cal-sans font-medium text-gray-800 mb-2">
                  Essential SEO
                </h3>
                <p className="text-gray-600 font-inter mb-6">
                  Perfect for small startups
                </p>
                <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2 font-cal-sans">
                  $699
                  <span className="text-lg text-gray-600 font-inter">
                    /month
                  </span>
                </div>
                <p className="text-sm text-gray-500 font-inter mb-8">
                  Build your online presence
                </p>

                <ul className="space-y-4 text-left mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      Technical SEO audit & optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      On-page optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      4 SEO-optimized blog posts per month
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      Keyword research & strategy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      Monthly performance reporting
                    </span>
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="w-full block bg-gradient-to-r from-[#28a717]/100 to-[#28a717] hover:from-[#28a717] hover:to-[#1e7a0f] text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 font-inter text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300  backdrop-blur-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#28a717]/100 to-[#28a717] text-white px-6 py-2 rounded-full text-sm font-semibold font-inter">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-cal-sans font-medium text-gray-800 mb-2">
                  Professional SEO
                </h3>
                <p className="text-gray-600 font-inter mb-6">
                  Ideal for growing businesses
                </p>
                <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2 font-cal-sans">
                  $1,399
                  <span className="text-lg text-gray-600 font-inter">
                    /month
                  </span>
                </div>
                <p className="text-sm text-gray-500 font-inter mb-8">
                  Accelerate your growth
                </p>

                <ul className="space-y-4 text-left mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      Complete SEO strategy & implementation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      Strategic link building campaign
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      8 high-quality blog posts per month
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      Local SEO optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      Bi-weekly detailed reporting
                    </span>
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="w-full block bg-gradient-to-r from-[#28a717] to-[#1e7a0f] hover:from-[#1e7a0f] hover:to-[#165c0a] text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 font-inter text-center"
                >
                  Start Growing
                </Link>
              </div>
            </div>

            <div className="bg-white/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300  backdrop-blur-lg">
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-cal-sans font-medium text-gray-800 mb-2">
                  Enterprise SEO
                </h3>
                <p className="text-gray-600 font-inter mb-6">
                  For established companies
                </p>
                <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2 font-cal-sans">
                  $2,799
                  <span className="text-lg text-gray-600 font-inter">
                    /month
                  </span>
                </div>
                <p className="text-sm text-gray-500 font-inter mb-8">
                  Maximum growth potential
                </p>

                <ul className="space-y-4 text-left mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      Advanced SEO strategy & execution
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      Full content marketing campaigns
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      16+ premium blog posts per month
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      Dedicated SEO specialist
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#28a717]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#28a717]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-inter">
                      Weekly reporting & strategy calls
                    </span>
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="w-full block bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 font-inter text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cal-sans font-medium text-gray-800 mb-4">
              Results You Can{" "}
              <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                Expect
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Our proven strategies deliver measurable growth for startups and
              growing businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl ">
              <div className="text-4xl lg:text-5xl font-bold text-gray-600 mb-3 font-cal-sans">
                3-6
              </div>
              <p className="text-lg font-medium text-gray-800 mb-2 font-cal-sans">
                Months
              </p>
              <p className="text-gray-600 font-inter">
                Initial ranking improvements and organic traffic growth
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl lg:text-5xl font-bold text-gray-600 mb-3 font-cal-sans">
                50-150%
              </div>
              <p className="text-lg font-medium text-gray-800 mb-2 font-cal-sans">
                Growth
              </p>
              <p className="text-gray-600 font-inter">
                Increase in organic traffic within first year
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl ">
              <div className="text-4xl lg:text-5xl font-bold text-gray-600 mb-3 font-cal-sans">
                Top 10
              </div>
              <p className="text-lg font-medium text-gray-800 mb-2 font-cal-sans">
                Rankings
              </p>
              <p className="text-gray-600 font-inter">
                Search engine rankings for target keywords
              </p>
            </div>

            <div className="text-center  p-8 rounded-2xl ">
              <div className="text-4xl lg:text-5xl font-bold text-gray-600 mb-3 font-cal-sans">
                Higher
              </div>
              <p className="text-lg font-medium text-gray-800 mb-2 font-cal-sans">
                ROI
              </p>
              <p className="text-gray-600 font-inter">
                Conversion rates and return on investment
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12   ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cal-sans font-medium text-gray-800 mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                Dominate Search Results?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-inter mb-8 leading-relaxed">
              Start your SEO journey today and watch your organic traffic,
              rankings, and revenue grow. Get a free consultation and see how we
              can transform your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#9dd43d] to-[#7aac25] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg font-inter text-lg"
              >
                Get Free SEO Audit
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 font-inter text-lg"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayoutWrapper>
  );
};

export default SEOContent;
