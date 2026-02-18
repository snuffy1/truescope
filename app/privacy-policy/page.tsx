import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Adalchemy",
  description:
    "Privacy policy and data protection information for Adalchemy services.",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
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
              At Adalchemy, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our services and website. Please read
              this policy carefully to understand our practices regarding your
              personal data.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Personal Information
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Create an account or register for our services</li>
                  <li>Make a purchase or place an order</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us for support or inquiries</li>
                  <li>Fill out forms on our website</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-3">
                  This may include your name, email address, phone number,
                  billing address, payment information, and company details.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Automatically Collected Information
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When you access our website, we may automatically collect
                  certain information, including your IP address, browser type,
                  operating system, referring URLs, pages viewed, and the dates
                  and times of your visits.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Providing and maintaining our services</li>
              <li>Processing your orders and payments</li>
              <li>Sending you service-related communications</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Improving our website and services</li>
              <li>
                Sending you marketing and promotional communications (with your
                consent)
              </li>
              <li>Detecting and preventing fraud and security issues</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          {/* Payment and Refund Information */}
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
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              4. Payment and Refund Information
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We process payments securely through trusted third-party payment
                processors. We do not store your complete credit card
                information on our servers. Your payment data is encrypted and
                handled in accordance with PCI-DSS standards.
              </p>
              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Refund Policy Reminder
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong className="text-amber-700">
                    Important: Refunds are only available within 1 day (24
                    hours)
                  </strong>{" "}
                  of your purchase. After this 1-day period, all sales are final
                  and no refunds will be issued.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When you request a refund within the eligible period, we may
                  retain certain transaction information for record-keeping,
                  fraud prevention, and compliance purposes, even after the
                  refund is processed.
                </p>
                <Link
                  href="/terms"
                  className="inline-block mt-3 text-amber-700 hover:text-amber-800 font-medium underline"
                >
                  Read our full Terms & Conditions for complete refund details →
                </Link>
              </div>
            </div>
          </section>

          {/* Data Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information in the following
              circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>
                <strong>Service Providers:</strong> With trusted third-party
                service providers who assist us in operating our website,
                conducting our business, or servicing you
              </li>
              <li>
                <strong>Payment Processors:</strong> With payment gateway
                providers to process your transactions securely
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights, property, or safety
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets
              </li>
              <li>
                <strong>With Your Consent:</strong> When you have given us
                explicit permission to share your information
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. These measures
              include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>
                Encryption of sensitive data during transmission (SSL/TLS)
              </li>
              <li>Secure server infrastructure and data storage</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              However, please note that no method of transmission over the
              internet or electronic storage is 100% secure. While we strive to
              protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. This
              includes retaining information for compliance with legal,
              accounting, or reporting requirements, as well as for fraud
              prevention and dispute resolution purposes.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Your Rights and Choices
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>
                <strong>Access:</strong> Request access to the personal
                information we hold about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information, subject to legal obligations
              </li>
              <li>
                <strong>Opt-Out:</strong> Unsubscribe from marketing
                communications at any time
              </li>
              <li>
                <strong>Data Portability:</strong> Request a copy of your data
                in a structured format
              </li>
              <li>
                <strong>Object:</strong> Object to certain processing of your
                personal information
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              To exercise any of these rights, please contact us using the
              information provided at the end of this policy.
            </p>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your
              experience on our website. Cookies are small data files stored on
              your device that help us:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve website functionality and performance</li>
              <li>Deliver personalized content and advertisements</li>
              <li>Analyze website traffic and usage patterns</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              You can control cookie preferences through your browser settings.
              However, disabling cookies may affect the functionality of our
              website.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Third-Party Links
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites or services
              that are not owned or controlled by Adalchemy. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to review the privacy policies of any third-party
              sites you visit.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Children&apos;s Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you are a parent or guardian and believe your child has provided
              us with personal information, please contact us so we can delete
              such information.
            </p>
          </section>

          {/* International Data Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. International Data Transfers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your information may be transferred to and maintained on computers
              located outside of your state, province, country, or other
              governmental jurisdiction where data protection laws may differ
              from those in your jurisdiction. By using our services, you
              consent to the transfer of your information to our facilities and
              service providers as described in this policy.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for legal, operational, or regulatory
              reasons. We will notify you of any material changes by posting the
              updated policy on our website with a revised &quot;Last
              updated&quot; date. We encourage you to review this policy
              periodically to stay informed about how we protect your
              information.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
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
                Contact Privacy Team
              </Link>
            </div>
          </section>

          {/* GDPR Compliance Notice */}
          <section className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              🇪🇺 For European Users (GDPR)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              If you are located in the European Economic Area (EEA), you have
              additional rights under the General Data Protection Regulation
              (GDPR), including the right to lodge a complaint with a
              supervisory authority. We process your data based on legitimate
              interests, contractual necessity, or your consent. You may
              withdraw consent at any time where we rely on it.
            </p>
          </section>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center items-center space-x-8 mt-8">
          <Link
            href="/terms"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center space-x-2"
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Terms & Conditions</span>
          </Link>
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center space-x-2"
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

export default PrivacyPolicyPage;
