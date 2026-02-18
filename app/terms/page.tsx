import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Adalchemy",
  description:
    "Terms and conditions for using Adalchemy services, including our refund policy.",
};

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 text-lg">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Adalchemy. These Terms and Conditions
              (&quot;Terms&quot;) govern your use of our services and website.
              By accessing or using our services, you agree to be bound by these
              Terms. Please read them carefully before proceeding.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By creating an account, placing an order, or using any of our
              services, you acknowledge that you have read, understood, and
              agree to be bound by these Terms and our Privacy Policy. If you do
              not agree to these Terms, please do not use our services.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Our Services
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Adalchemy provides digital marketing services, including but not
              limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Digital Advertisement Campaigns</li>
              <li>SEO Content Creation and Optimization</li>
              <li>Social Media Management</li>
              <li>Website Design and Development</li>
              <li>Brand Strategy Consultation</li>
              <li>SEO Audits and Analysis</li>
            </ul>
          </section>

          {/* Refund Policy - Highlighted Section */}
          <section className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg
                className="w-7 h-7 mr-3 text-amber-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              4. Refund Policy
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed font-medium">
                Please read our refund policy carefully before making a
                purchase:
              </p>
              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  1-Day Refund Window
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong className="text-amber-700">
                    Refunds are only available within 1 day (24 hours)
                  </strong>{" "}
                  of your initial purchase or service activation. After this
                  1-day period, no refunds will be issued under any
                  circumstances.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The 1-day refund period begins at the time of payment
                  confirmation. To request a refund within this window, please
                  contact our support team at{" "}
                  <Link
                    href="/contact"
                    className="text-amber-700 hover:text-amber-800 font-medium underline"
                  >
                    our contact page
                  </Link>{" "}
                  with your order details.
                </p>
              </div>
              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-900 mb-2">
                  ⚠️ Important Notice
                </h3>
                <p className="text-red-800 font-medium">
                  After 1 day (24 hours) from purchase, all sales are final and
                  non-refundable. We cannot process refund requests submitted
                  after this period has elapsed.
                </p>
              </div>
              <div className="space-y-3 mt-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Refund Process
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>
                    Submit your refund request within 24 hours of purchase
                  </li>
                  <li>
                    Provide your order number and reason for the refund request
                  </li>
                  <li>
                    Our team will review your request within 1-2 business days
                  </li>
                  <li>
                    Approved refunds will be processed within 5-10 business days
                  </li>
                  <li>Refunds will be issued to the original payment method</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Payment Terms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All payments are processed securely through our payment gateway.
              By making a purchase, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Provide accurate and complete payment information</li>
              <li>Pay all charges at the prices in effect when incurred</li>
              <li>
                Authorize us to charge your selected payment method for all fees
              </li>
              <li>
                Be responsible for any applicable taxes related to your purchase
              </li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. User Responsibilities
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>
                Provide accurate, current, and complete information as required
              </li>
              <li>Maintain the security of your account credentials</li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
              <li>Comply with all applicable laws and regulations</li>
              <li>
                Not use our services for any unlawful or prohibited purposes
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content, features, and functionality of our services,
              including but not limited to text, graphics, logos, and software,
              are the exclusive property of Adalchemy and are protected by
              international copyright, trademark, and other intellectual
              property laws.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To the fullest extent permitted by law, Adalchemy shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use or inability to use our
              services, even if we have been advised of the possibility of such
              damages.
            </p>
          </section>

          {/* Modifications to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Modifications to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will
              notify users of any material changes by posting the updated Terms
              on our website with a revised &quot;Last updated&quot; date. Your
              continued use of our services after such modifications constitutes
              your acceptance of the updated Terms.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate your account and
              access to our services at our sole discretion, without notice, for
              conduct that we believe violates these Terms or is harmful to
              other users, us, or third parties, or for any other reason.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please
              contact us:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> shivajarigajurel7@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +1 (432) 299 4467
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 30 N Gould St Ste R, Sheridan, WY
                82801
              </p>
              <Link
                href="/contact"
                className="inline-block mt-3 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Contact Support
              </Link>
            </div>
          </section>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
