"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

interface OrderDetails {
  order?: {
    orderNumber: string;
    customerEmail: string;
    customerName: string;
    total: number;
    status: string;
    paymentStatus: string;
  };
}

function PaymentFailedContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId) {
        setError("No session ID found");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/orders/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
        });

        const data = await response.json();

        if (data.success) {
          setOrderDetails(data.data);
        } else {
          setError(data.message || "Failed to verify payment");
        }
      } catch (err) {
        console.error("Verification error:", err);
        setError("An error occurred while verifying your payment");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#28a717] mx-auto"></div>
          <p className="mt-4 text-gray-600">Verifying payment status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Failed
          </h1>
          <p className="text-gray-600 mb-6">
            We were unable to process your payment. Please try again.
          </p>

          {orderDetails && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="space-y-2 text-sm text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Number:</span>
                  <span className="font-medium text-gray-900">
                    {orderDetails.order?.orderNumber}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium text-red-600 capitalize">
                    {orderDetails.order?.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Status:</span>
                  <span className="font-medium text-red-600 capitalize">
                    {orderDetails.order?.paymentStatus}
                  </span>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              What happened?
            </h2>
            <ul className="text-sm text-left text-gray-600 space-y-2 mb-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Your payment was cancelled or unsuccessful</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>No charges have been made to your account</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Your order is still pending and can be completed</span>
              </li>
            </ul>

            <div className="border-t pt-4 space-y-3">
              <p className="text-sm font-medium text-gray-900 mb-3">
                Next Steps:
              </p>
              <Link
                href="/pricing"
                className="block w-full bg-[#28a717] text-white px-6 py-3 rounded-lg hover:bg-[#1e7a0f] transition-colors"
              >
                Try Again
              </Link>
              <Link
                href="/contact"
                className="block w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/"
                className="block w-full text-[#28a717] px-6 py-3 rounded-lg hover:bg-[#28a717]/10 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <p className="text-xs text-gray-500">
              If you continue to experience issues, please contact our support
              team for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentFailedPage() {
  return (
    <MainLayoutWrapper>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#28a717]"></div>
          </div>
        }
      >
        <PaymentFailedContent />
      </Suspense>
    </MainLayoutWrapper>
  );
}
