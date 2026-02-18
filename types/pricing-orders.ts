/**
 * Shared TypeScript types for Pricing and Orders
 */

export interface PricingPlan {
  _id: string;
  planId: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  popular?: boolean;
  timeframe: string;
  badge?: string;
  isMonthly: boolean;
  slug: string;
  isActive: boolean;
  sortOrder?: number;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  pricingPlanId: string;
  planId: string;
  name: string;
  slug: string;
  quantity: number;
  price: number;
  isMonthly: boolean;
  timeframe: string;
}

export interface BillingAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Order {
  _id: string;
  orderNumber: string;
  customerEmail: string;
  customerName: string;
  customerPhone?: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: "pending" | "processing" | "completed" | "failed" | "cancelled";
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
  paymentMethod: "stripe" | "other";
  stripePaymentIntentId?: string;
  stripeSessionId?: string;
  billingAddress?: BillingAddress;
  notes?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface CheckoutRequest {
  planIds: string[];
  customerEmail: string;
  customerName: string;
  customerPhone?: string;
  billingAddress?: BillingAddress;
}

export interface CheckoutResponse {
  success: boolean;
  message: string;
  data: {
    sessionId: string;
    sessionUrl: string;
    orderId: string;
    orderNumber: string;
  };
}

export interface VerifyPaymentResponse {
  success: boolean;
  data: {
    order: Order;
    paymentStatus: string;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: {
    items: T[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
}

// Query parameters
export interface PricingPlansQuery {
  isMonthly?: boolean;
  category?: string;
  includeInactive?: boolean;
}

export interface OrdersQuery {
  page?: number;
  limit?: number;
  status?: Order["status"];
  paymentStatus?: Order["paymentStatus"];
  email?: string;
}

// Form data types
export interface CheckoutFormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  billingAddress: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

// Component prop types
export interface PricingDisplayProps {
  category?: string;
  isMonthly?: boolean;
  maxItems?: number;
  showCheckout?: boolean;
}

export interface CheckoutFormProps {
  planIds: string[];
  planNames?: string[];
  onSuccess?: () => void;
}
