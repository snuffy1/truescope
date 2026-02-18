"use client";

import React, { useState } from "react";
import { ordersApi } from "@/lib/api/orders";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface CheckoutFormProps {
  planIds: string[];
  planNames?: string[];
  onSuccess?: () => void;
}

export default function CheckoutForm({
  planIds,
  planNames = [],
  onSuccess,
}: CheckoutFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    billingAddress: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "US",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("billing.")) {
      const addressField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        billingAddress: {
          ...prev.billingAddress,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate required fields
      if (!formData.customerName || !formData.customerEmail) {
        toast.error("Please fill in all required fields");
        setIsLoading(false);
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.customerEmail)) {
        toast.error("Please enter a valid email address");
        setIsLoading(false);
        return;
      }

      // Create checkout session
      const response = await ordersApi.checkout({
        planIds,
        customerEmail: formData.customerEmail,
        customerName: formData.customerName,
        customerPhone: formData.customerPhone || undefined,
        billingAddress: formData.billingAddress.line1
          ? formData.billingAddress
          : undefined,
      });

      if (response.success && response.data.sessionUrl) {
        toast.success("Redirecting to checkout...");
        // Redirect to Stripe checkout
        window.location.href = response.data.sessionUrl;
        onSuccess?.();
      } else {
        toast.error("Failed to create checkout session");
      }
    } catch (error: unknown) {
      console.error("Checkout error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred during checkout. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Customer Information</h3>

        {planNames.length > 0 && (
          <div className="rounded-lg border p-4 bg-muted/50">
            <p className="text-sm font-medium mb-2">Selected Plans:</p>
            <ul className="text-sm space-y-1">
              {planNames.map((name, index) => (
                <li key={index} className="text-muted-foreground">
                  • {name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="customerName">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="customerName"
              name="customerName"
              type="text"
              placeholder="John Doe"
              value={formData.customerName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="customerEmail">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="customerEmail"
              name="customerEmail"
              type="email"
              placeholder="john@example.com"
              value={formData.customerEmail}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="customerPhone">Phone (Optional)</Label>
            <Input
              id="customerPhone"
              name="customerPhone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.customerPhone}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Billing Address (Optional)</h3>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="billing.line1">Address Line 1</Label>
            <Input
              id="billing.line1"
              name="billing.line1"
              type="text"
              placeholder="123 Main St"
              value={formData.billingAddress.line1}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="billing.line2">Address Line 2</Label>
            <Input
              id="billing.line2"
              name="billing.line2"
              type="text"
              placeholder="Apt 4B"
              value={formData.billingAddress.line2}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="billing.city">City</Label>
              <Input
                id="billing.city"
                name="billing.city"
                type="text"
                placeholder="New York"
                value={formData.billingAddress.city}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="billing.state">State</Label>
              <Input
                id="billing.state"
                name="billing.state"
                type="text"
                placeholder="NY"
                value={formData.billingAddress.state}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="billing.postalCode">Postal Code</Label>
              <Input
                id="billing.postalCode"
                name="billing.postalCode"
                type="text"
                placeholder="10001"
                value={formData.billingAddress.postalCode}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="billing.country">Country</Label>
              <Input
                id="billing.country"
                name="billing.country"
                type="text"
                placeholder="US"
                value={formData.billingAddress.country}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          "Proceed to Checkout"
        )}
      </Button>
    </form>
  );
}
