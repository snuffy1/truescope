import api from "@/lib/axios";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface Admin {
  id: string;
  email: string;
  name: string;
  role: "admin" | "superadmin";
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    admin: Admin;
  };
}

export interface MeResponse {
  success: boolean;
  data: {
    admin: Admin;
  };
}

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>(
      "/api/admin/auth/login",
      credentials,
    );
    return response.data;
  },

  logout: async (): Promise<{ success: boolean; message: string }> => {
    const response = await api.post("/api/admin/auth/logout");
    return response.data;
  },

  getMe: async (): Promise<MeResponse> => {
    const response = await api.get<MeResponse>("/api/admin/auth/me");
    return response.data;
  },

  changePassword: async (data: {
    currentPassword: string;
    newPassword: string;
  }): Promise<{ success: boolean; message: string }> => {
    const response = await api.post("/api/admin/change-password", data);
    return response.data;
  },
};
