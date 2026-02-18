import api from "@/lib/axios";

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

export interface CreatePricingPlanInput {
  planId: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  popular?: boolean;
  timeframe?: string;
  badge?: string;
  isMonthly?: boolean;
  slug: string;
  isActive?: boolean;
  sortOrder?: number;
  metadata?: Record<string, unknown>;
}

export type UpdatePricingPlanInput = Partial<CreatePricingPlanInput>;

export interface PaginatedResponse<T> {
  success: boolean;
  data: {
    plans?: T[];
    orders?: T[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
}

export interface PricingPlanParams {
  page?: number;
  limit?: number;
  isMonthly?: boolean | null;
  category?: string;
  isActive?: boolean | null;
}

export const pricingPlansApi = {
  getAll: async (
    params: PricingPlanParams = {},
  ): Promise<PaginatedResponse<PricingPlan>> => {
    const searchParams = new URLSearchParams();
    if (params.page) searchParams.set("page", params.page.toString());
    if (params.limit) searchParams.set("limit", params.limit.toString());
    if (params.isMonthly !== undefined && params.isMonthly !== null) {
      searchParams.set("isMonthly", params.isMonthly.toString());
    }
    if (params.category) searchParams.set("category", params.category);
    if (params.isActive !== undefined && params.isActive !== null) {
      searchParams.set("isActive", params.isActive.toString());
    }

    const response = await api.get(
      `/api/admin/pricing-plans?${searchParams.toString()}`,
    );
    return response.data;
  },

  getById: async (
    id: string,
  ): Promise<{ success: boolean; data: { plan: PricingPlan } }> => {
    const response = await api.get(`/api/admin/pricing-plans/${id}`);
    return response.data;
  },

  create: async (
    data: CreatePricingPlanInput,
  ): Promise<{ success: boolean; data: { plan: PricingPlan } }> => {
    const response = await api.post("/api/admin/pricing-plans", data);
    return response.data;
  },

  update: async (
    id: string,
    data: UpdatePricingPlanInput,
  ): Promise<{ success: boolean; data: { plan: PricingPlan } }> => {
    const response = await api.patch(`/api/admin/pricing-plans/${id}`, data);
    return response.data;
  },

  delete: async (
    id: string,
  ): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/api/admin/pricing-plans/${id}`);
    return response.data;
  },

  // Public API (no auth required)
  getPublic: async (
    params: {
      isMonthly?: boolean;
      category?: string;
    } = {},
  ): Promise<{ success: boolean; data: { plans: PricingPlan[] } }> => {
    const searchParams = new URLSearchParams();
    if (params.isMonthly !== undefined) {
      searchParams.set("isMonthly", params.isMonthly.toString());
    }
    if (params.category) {
      searchParams.set("category", params.category);
    }

    const response = await api.get(
      `/api/pricing-plans?${searchParams.toString()}`,
    );
    return response.data;
  },

  getBySlug: async (
    slug: string,
  ): Promise<{ success: boolean; data: { plan: PricingPlan } }> => {
    const response = await api.get(`/api/pricing-plans/${slug}`);
    return response.data;
  },
};
