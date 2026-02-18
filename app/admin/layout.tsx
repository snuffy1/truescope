import { Metadata } from "next";
import { AuthProvider } from "@/contexts/auth-context";
import { QueryProvider } from "@/contexts/query-provider";

export const metadata: Metadata = {
  title: "Admin - TrueScope Marketing",
  description: "Admin dashboard for TrueScope Marketing",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <AuthProvider>
        <div className="min-h-screen bg-zinc-50 font-inter">{children}</div>
      </AuthProvider>
    </QueryProvider>
  );
}
