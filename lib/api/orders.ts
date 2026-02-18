import api from "@/lib/axios";

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
  billingAddress?: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  notes?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface OrdersParams {
  page?: number;
  limit?: number;
  status?: string;
  paymentStatus?: string;
  email?: string;
}

export interface PaginatedOrdersResponse {
  success: boolean;
  data: {
    orders: Order[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
}

export interface UpdateOrderInput {
  status?: Order["status"];
  paymentStatus?: Order["paymentStatus"];
  notes?: string;
}

export const ordersApi = {
  getAll: async (
    params: OrdersParams = {},
  ): Promise<PaginatedOrdersResponse> => {
    const searchParams = new URLSearchParams();
    if (params.page) searchParams.set("page", params.page.toString());
    if (params.limit) searchParams.set("limit", params.limit.toString());
    if (params.status) searchParams.set("status", params.status);
    if (params.paymentStatus)
      searchParams.set("paymentStatus", params.paymentStatus);
    if (params.email) searchParams.set("email", params.email);

    const response = await api.get(
      `/api/admin/orders?${searchParams.toString()}`,
    );
    return response.data;
  },

  getById: async (
    id: string,
  ): Promise<{ success: boolean; data: { order: Order } }> => {
    const response = await api.get(`/api/admin/orders/${id}`);
    return response.data;
  },

  update: async (
    id: string,
    data: UpdateOrderInput,
  ): Promise<{ success: boolean; data: { order: Order } }> => {
    const response = await api.patch(`/api/admin/orders/${id}`, data);
    return response.data;
  },

  // Public API for checkout
  checkout: async (data: {
    planIds: string[];
    customerEmail: string;
    customerName: string;
    customerPhone?: string;
    billingAddress?: {
      line1: string;
      line2?: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
  }): Promise<{
    success: boolean;
    message: string;
    data: {
      sessionId: string;
      sessionUrl: string;
      orderId: string;
      orderNumber: string;
    };
  }> => {
    const response = await api.post("/api/orders/checkout", data);
    return response.data;
  },

  verifyPayment: async (
    sessionId: string,
  ): Promise<{
    success: boolean;
    data: {
      order: Order;
      paymentStatus: string;
    };
  }> => {
    const response = await api.get(
      `/api/orders/verify?session_id=${sessionId}`,
    );
    return response.data;
  },

  delete: async (
    id: string,
  ): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/api/admin/orders/${id}`);
    return response.data;
  },
};
