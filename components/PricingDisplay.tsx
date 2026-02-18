"use client";

import React, { useState, useEffect, useCallback } from "react";
import { pricingPlansApi, PricingPlan } from "@/lib/api/pricing-plans";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, Star } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CheckoutForm from "@/components/CheckoutForm";

interface PricingDisplayProps {
  category?: string;
  isMonthly?: boolean;
  maxItems?: number;
  showCheckout?: boolean;
}

export default function PricingDisplay({
  category,
  isMonthly,
  maxItems,
  showCheckout = true,
}: PricingDisplayProps) {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlanIds, setSelectedPlanIds] = useState<string[]>([]);
  const [checkoutDialogOpen, setCheckoutDialogOpen] = useState(false);

  const fetchPricingPlans = useCallback(async () => {
    setLoading(true);
    try {
      const response = await pricingPlansApi.getPublic({
        category,
        isMonthly,
      });

      if (response.success && response.data.plans) {
        let fetchedPlans = response.data.plans;

        // Filter by maxItems if specified
        if (maxItems) {
          fetchedPlans = fetchedPlans.slice(0, maxItems);
        }

        setPlans(fetchedPlans);
      } else {
        toast.error("Failed to load pricing plans");
      }
    } catch (error) {
      console.error("Error fetching pricing plans:", error);
      toast.error("Failed to load pricing plans");
    } finally {
      setLoading(false);
    }
  }, [category, isMonthly, maxItems]);

  useEffect(() => {
    fetchPricingPlans();
  }, [fetchPricingPlans]);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanIds([planId]);
    setCheckoutDialogOpen(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="flex flex-col">
            <CardHeader>
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-8 w-24" />
            </CardHeader>
            <CardContent className="flex-1">
              <Skeleton className="h-20 w-full mb-4" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((j) => (
                  <Skeleton key={j} className="h-4 w-full" />
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (plans.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No pricing plans available</p>
      </div>
    );
  }

  const selectedPlans = plans.filter((plan) =>
    selectedPlanIds.includes(plan._id),
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan._id}
            className={`flex flex-col relative transition-all hover:shadow-lg ${
              plan.highlighted ? "border-primary shadow-md scale-105" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              </div>
            )}

            {plan.badge && !plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary">{plan.badge}</Badge>
              </div>
            )}

            <CardHeader className="pb-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">
                    {formatPrice(plan.price)}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(plan.originalPrice)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {plan.timeframe}
                </p>
              </div>
              <p className="text-sm text-muted-foreground pt-2">
                {plan.description}
              </p>
            </CardHeader>

            <CardContent className="flex-1">
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            {showCheckout && (
              <CardFooter>
                <Button
                  onClick={() => handleSelectPlan(plan._id)}
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>

      {showCheckout && (
        <Dialog open={checkoutDialogOpen} onOpenChange={setCheckoutDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Complete Your Purchase</DialogTitle>
              <DialogDescription>
                Enter your details to proceed with checkout
              </DialogDescription>
            </DialogHeader>
            <CheckoutForm
              planIds={selectedPlanIds}
              planNames={selectedPlans.map((p) => p.name)}
              onSuccess={() => setCheckoutDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
