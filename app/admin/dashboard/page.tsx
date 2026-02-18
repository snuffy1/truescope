"use client";

import { useQuery } from "@tanstack/react-query";
import { ordersApi } from "@/lib/api/orders";
import { pricingPlansApi } from "@/lib/api/pricing-plans";
import { PageHeader } from "@/components/admin/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ShoppingCart,
  CreditCard,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import Link from "next/link";

function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendUp,
  isLoading,
}: {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
  trend?: string;
  trendUp?: boolean;
  isLoading?: boolean;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-zinc-500">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-zinc-400" />
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <>
            <Skeleton className="h-8 w-24 mb-1" />
            <Skeleton className="h-4 w-32" />
          </>
        ) : (
          <>
            <div className="text-2xl font-bold text-zinc-900">{value}</div>
            {description && (
              <p className="text-xs text-zinc-500 mt-1">{description}</p>
            )}
            {trend && (
              <div className="flex items-center gap-1 mt-2">
                {trendUp ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                )}
                <span
                  className={`text-xs ${trendUp ? "text-green-600" : "text-red-600"}`}
                >
                  {trend}
                </span>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}

function RecentOrdersTable({
  orders,
  isLoading,
}: {
  orders: {
    orderNumber: string;
    customerName: string;
    total: number;
    status: string;
    createdAt: string;
  }[];
  isLoading: boolean;
}) {
  const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-[#28a717]/20 text-[#165c0a]",
    completed: "bg-green-100 text-green-800",
    failed: "bg-red-100 text-red-800",
    cancelled: "bg-zinc-100 text-zinc-800",
  };

  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Orders</CardTitle>
        <Link
          href="/admin/dashboard/orders"
          className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          View all
        </Link>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            ))}
          </div>
        ) : orders.length === 0 ? (
          <p className="text-sm text-zinc-500 text-center py-8">
            No orders yet
          </p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.orderNumber}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 text-zinc-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-900">
                      {order.customerName}
                    </p>
                    <p className="text-xs text-zinc-500">{order.orderNumber}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-zinc-900">
                    ${order.total.toFixed(2)}
                  </p>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[order.status] || "bg-zinc-100 text-zinc-800"}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function TopPlansCard({
  plans,
  isLoading,
}: {
  plans: { name: string; price: number; category: string }[];
  isLoading: boolean;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Active Plans</CardTitle>
        <Link
          href="/admin/dashboard/pricing-plans"
          className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          View all
        </Link>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex justify-between">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        ) : plans.length === 0 ? (
          <p className="text-sm text-zinc-500 text-center py-8">
            No active plans
          </p>
        ) : (
          <div className="space-y-4">
            {plans.slice(0, 5).map((plan, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-900">
                    {plan.name}
                  </p>
                  <p className="text-xs text-zinc-500">{plan.category}</p>
                </div>
                <p className="text-sm font-medium text-zinc-900">
                  ${plan.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  const { data: ordersData, isLoading: ordersLoading } = useQuery({
    queryKey: ["admin", "orders", "dashboard"],
    queryFn: () => ordersApi.getAll({ limit: 5 }),
  });

  const { data: plansData, isLoading: plansLoading } = useQuery({
    queryKey: ["admin", "pricing-plans", "dashboard"],
    queryFn: () => pricingPlansApi.getAll({ limit: 50, isActive: true }),
  });

  const orders = ordersData?.data?.orders || [];
  const plans = plansData?.data?.plans || [];
  const totalOrders = ordersData?.data?.pagination?.total || 0;
  const totalPlans = plansData?.data?.pagination?.total || 0;

  // Calculate revenue from completed orders
  const completedOrders = orders.filter((o) => o.status === "completed");
  const totalRevenue = completedOrders.reduce((sum, o) => sum + o.total, 0);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's an overview of your business."
      />

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Orders"
          value={totalOrders}
          description="All time orders"
          icon={ShoppingCart}
          isLoading={ordersLoading}
        />
        <StatCard
          title="Active Plans"
          value={totalPlans}
          description="Available for purchase"
          icon={CreditCard}
          isLoading={plansLoading}
        />
        <StatCard
          title="Revenue"
          value={`$${totalRevenue.toFixed(2)}`}
          description="From completed orders"
          icon={DollarSign}
          isLoading={ordersLoading}
        />
        <StatCard
          title="Conversion"
          value={
            totalOrders > 0
              ? `${((completedOrders.length / totalOrders) * 100).toFixed(1)}%`
              : "0%"
          }
          description="Order completion rate"
          icon={TrendingUp}
          isLoading={ordersLoading}
        />
      </div>

      {/* Charts and Tables */}
      <div className="grid gap-6 lg:grid-cols-3">
        <RecentOrdersTable orders={orders} isLoading={ordersLoading} />
        <TopPlansCard plans={plans} isLoading={plansLoading} />
      </div>
    </div>
  );
}
