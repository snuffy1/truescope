"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { pricingPlansApi, PricingPlan } from "@/lib/api/pricing-plans";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import CheckoutForm from "@/components/CheckoutForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Check,
  ArrowLeft,
  Star,
  Clock,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PlanDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [plan, setPlan] = useState<PricingPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const loadPlan = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await pricingPlansApi.getBySlug(slug);
      if (response.success && response.data.plan) {
        setPlan(response.data.plan);
      } else {
        toast.error("Plan not found");
        router.push("/pricing");
      }
    } catch (error) {
      console.error("Failed to load plan:", error);
      toast.error("Failed to load plan details");
      router.push("/pricing");
    } finally {
      setLoading(false);
    }
  }, [slug, router]);

  useEffect(() => {
    if (slug) {
      loadPlan();
    }
  }, [slug, loadPlan]);

  if (loading) {
    return (
      <MainLayoutWrapper>
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <Skeleton className="h-8 w-32 mb-8" />
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-6" />
            <Skeleton className="h-16 w-64 mx-auto" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-6 w-full" />
            ))}
          </div>
        </div>
      </MainLayoutWrapper>
    );
  }

  if (!plan) {
    return (
      <MainLayoutWrapper>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Plan Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The pricing plan you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/pricing">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Pricing
            </Button>
          </Link>
        </div>
      </MainLayoutWrapper>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <MainLayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-24 pb-8">
          <Link href="/pricing">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Plans
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              {/* Badges */}
              <div className="flex items-center justify-center gap-3 mb-6">
                {plan.popular && (
                  <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                {plan.badge && (
                  <Badge variant="secondary" className="font-semibold">
                    {plan.badge}
                  </Badge>
                )}
                {plan.isMonthly ? (
                  <Badge variant="outline">Monthly Subscription</Badge>
                ) : (
                  <Badge variant="outline">One-Time Service</Badge>
                )}
              </div>

              {/* Plan Name */}
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#044A84] to-blue-600 bg-clip-text text-transparent">
                {plan.name}
              </h1>

              {/* Description */}
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {plan.description}
              </p>

              {/* Pricing */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-gray-900">
                    {formatPrice(plan.price)}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-3xl text-muted-foreground line-through">
                      {formatPrice(plan.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              {/* Timeframe */}
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <Clock className="w-5 h-5" />
                <span className="text-lg">{plan.timeframe}</span>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                onClick={() => setCheckoutOpen(true)}
                className="text-lg px-8 py-6 bg-gradient-to-r from-[#044A84] to-blue-600 hover:from-blue-700 hover:to-blue-800"
              >
                Get Started Now
              </Button>

              {plan.originalPrice && (
                <p className="text-sm text-green-600 font-semibold mt-4">
                  Save {formatPrice(plan.originalPrice - plan.price)} today!
                </p>
              )}
            </motion.div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                What&apos;s Included
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {plan.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Zap className="w-12 h-12 text-[#044A84] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Fast Results</h3>
                <p className="text-sm text-muted-foreground">
                  See measurable improvements in your first 30 days
                </p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Shield className="w-12 h-12 text-[#044A84] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">No Contracts</h3>
                <p className="text-sm text-muted-foreground">
                  Cancel anytime with 30 days notice
                </p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <TrendingUp className="w-12 h-12 text-[#044A84] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Proven ROI</h3>
                <p className="text-sm text-muted-foreground">
                  Average 300% ROI improvement for clients
                </p>
              </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center bg-gradient-to-r from-[#044A84] to-blue-600 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Join hundreds of successful businesses already using {plan.name}
              </p>
              <Button
                size="lg"
                onClick={() => setCheckoutOpen(true)}
                className="bg-white text-[#044A84] hover:bg-gray-100 text-lg px-8 py-6"
              >
                Start Your Journey Today
              </Button>
              <p className="text-sm mt-4 text-white/80">
                No credit card required • Cancel anytime • Full support included
              </p>
            </motion.div>
          </div>
        </div>

        {/* Checkout Dialog */}
        <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Complete Your Purchase</DialogTitle>
              <DialogDescription>
                You&apos;re purchasing: <strong>{plan.name}</strong> -{" "}
                {formatPrice(plan.price)}
              </DialogDescription>
            </DialogHeader>
            <CheckoutForm
              planIds={[plan._id]}
              planNames={[plan.name]}
              onSuccess={() => setCheckoutOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>
    </MainLayoutWrapper>
  );
}
