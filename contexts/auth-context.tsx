"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import { authApi, Admin, LoginCredentials } from "@/lib/api/auth";

interface AuthContextType {
  admin: Admin | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const checkAuth = useCallback(async () => {
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        setAdmin(null);
        setIsLoading(false);
        return;
      }

      const response = await authApi.getMe();
      setAdmin(response.data.admin);
    } catch {
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_user");
      setAdmin(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (credentials: LoginCredentials) => {
    const response = await authApi.login(credentials);
    localStorage.setItem("admin_token", response.data.token);
    localStorage.setItem("admin_user", JSON.stringify(response.data.admin));
    setAdmin(response.data.admin);
    router.push("/admin/dashboard");
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch {
      // Ignore errors
    } finally {
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_user");
      setAdmin(null);
      router.push("/admin/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        admin,
        isLoading,
        isAuthenticated: !!admin,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
