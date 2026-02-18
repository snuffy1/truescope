"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { ordersApi, Order, UpdateOrderInput } from "@/lib/api/orders";
import { PageHeader } from "@/components/admin/page-header";
import { DataTable } from "@/components/admin/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { MoreHorizontal, Eye, Edit, RefreshCw, Trash2 } from "lucide-react";

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  processing: "bg-[#28a717]/20 text-[#165c0a] border-[#28a717]/30",
  completed: "bg-green-100 text-green-800 border-green-200",
  failed: "bg-red-100 text-red-800 border-red-200",
  cancelled: "bg-zinc-100 text-zinc-800 border-zinc-200",
};

const paymentStatusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  paid: "bg-green-100 text-green-800 border-green-200",
  failed: "bg-red-100 text-red-800 border-red-200",
  refunded: "bg-purple-100 text-purple-800 border-purple-200",
};

export default function OrdersPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState<string>("all");
  const [emailFilter, setEmailFilter] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [
      "admin",
      "orders",
      page,
      statusFilter,
      paymentStatusFilter,
      emailFilter,
    ],
    queryFn: () =>
      ordersApi.getAll({
        page,
        limit: 10,
        status: statusFilter !== "all" ? statusFilter : undefined,
        paymentStatus:
          paymentStatusFilter !== "all" ? paymentStatusFilter : undefined,
        email: emailFilter || undefined,
      }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateOrderInput }) =>
      ordersApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "orders"] });
      toast.success("Order updated successfully");
      setEditDialogOpen(false);
    },
    onError: () => {
      toast.error("Failed to update order");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => ordersApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "orders"] });
      toast.success("Order deleted successfully");
      setDeleteDialogOpen(false);
      setSelectedOrder(null);
    },
    onError: () => {
      toast.error("Failed to delete order");
    },
  });

  const orders = data?.data?.orders || [];
  const pagination = data?.data?.pagination;

  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: "orderNumber",
      header: "Order #",
      cell: ({ row }) => (
        <span className="font-medium text-zinc-900">
          {row.original.orderNumber}
        </span>
      ),
    },
    {
      accessorKey: "customerName",
      header: "Customer",
      cell: ({ row }) => (
        <div>
          <p className="font-medium text-zinc-900">
            {row.original.customerName}
          </p>
          <p className="text-sm text-zinc-500">{row.original.customerEmail}</p>
        </div>
      ),
    },
    {
      accessorKey: "items",
      header: "Items",
      cell: ({ row }) => (
        <span className="text-zinc-600">
          {row.original.items.length} item(s)
        </span>
      ),
    },
    {
      accessorKey: "total",
      header: "Total",
      cell: ({ row }) => (
        <span className="font-medium text-zinc-900">
          ${row.original.total.toFixed(2)}
        </span>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Badge variant="outline" className={statusColors[row.original.status]}>
          {row.original.status}
        </Badge>
      ),
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment",
      cell: ({ row }) => (
        <Badge
          variant="outline"
          className={paymentStatusColors[row.original.paymentStatus]}
        >
          {row.original.paymentStatus}
        </Badge>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Date",
      cell: ({ row }) => (
        <span className="text-zinc-500">
          {new Date(row.original.createdAt).toLocaleDateString()}
        </span>
      ),
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setSelectedOrder(row.original);
                setViewDialogOpen(true);
              }}
            >
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setSelectedOrder(row.original);
                setEditDialogOpen(true);
              }}
            >
              <Edit className="mr-2 h-4 w-4" />
              Update Status
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setSelectedOrder(row.original);
                setDeleteDialogOpen(true);
              }}
              className="text-red-600 focus:text-red-600"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Order
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Orders"
        description="Manage and track all customer orders"
        action={
          <Button variant="outline" onClick={() => refetch()}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        }
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="w-64">
          <Input
            placeholder="Search by email..."
            value={emailFilter}
            onChange={(e) => {
              setEmailFilter(e.target.value);
              setPage(1);
            }}
          />
        </div>
        <Select
          value={statusFilter}
          onValueChange={(v) => {
            setStatusFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={paymentStatusFilter}
          onValueChange={(v) => {
            setPaymentStatusFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Payment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Payments</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="refunded">Refunded</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={orders}
        isLoading={isLoading}
        isServerSide
        currentPage={pagination?.page || 1}
        totalPages={pagination?.totalPages || 1}
        totalCount={pagination?.total || 0}
        onPageChange={setPage}
      />

      {/* View Order Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
            <DialogDescription>
              Order #{selectedOrder?.orderNumber}
            </DialogDescription>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-6">
              {/* Customer & Status Info */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <Label className="text-zinc-500 text-xs uppercase">
                      Customer Information
                    </Label>
                    <p className="font-medium text-lg mt-1">
                      {selectedOrder.customerName}
                    </p>
                    <p className="text-sm text-zinc-600 flex items-center gap-1 mt-1">
                      <span className="text-zinc-400">📧</span>
                      {selectedOrder.customerEmail}
                    </p>
                    {selectedOrder.customerPhone && (
                      <p className="text-sm text-zinc-600 flex items-center gap-1">
                        <span className="text-zinc-400">📞</span>
                        {selectedOrder.customerPhone}
                      </p>
                    )}
                  </div>
                  {selectedOrder.billingAddress && (
                    <div>
                      <Label className="text-zinc-500 text-xs uppercase">
                        Billing Address
                      </Label>
                      <div className="text-sm text-zinc-600 mt-1 space-y-0.5">
                        {selectedOrder.billingAddress.line1 && (
                          <p>{selectedOrder.billingAddress.line1}</p>
                        )}
                        {selectedOrder.billingAddress.line2 && (
                          <p>{selectedOrder.billingAddress.line2}</p>
                        )}
                        <p>
                          {selectedOrder.billingAddress.city &&
                            `${selectedOrder.billingAddress.city}, `}
                          {selectedOrder.billingAddress.state &&
                            `${selectedOrder.billingAddress.state} `}
                          {selectedOrder.billingAddress.postalCode}
                        </p>
                        {selectedOrder.billingAddress.country && (
                          <p>{selectedOrder.billingAddress.country}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <div>
                    <Label className="text-zinc-500 text-xs uppercase">
                      Order Status
                    </Label>

                    <div className="flex gap-2 mt-1">
                      <Badge
                        variant="outline"
                        className={statusColors[selectedOrder.status]}
                      >
                        {selectedOrder.status}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          paymentStatusColors[selectedOrder.paymentStatus]
                        }
                      >
                        {selectedOrder.paymentStatus}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <Label className="text-zinc-500 text-xs uppercase">
                      Order Date
                    </Label>
                    <p className="text-sm text-zinc-600 mt-1">
                      {new Date(selectedOrder.createdAt).toLocaleString(
                        "en-US",
                        {
                          dateStyle: "medium",
                          timeStyle: "short",
                        },
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <Label className="text-zinc-500 text-xs uppercase mb-2 block">
                  Order Items ({selectedOrder.items.length})
                </Label>
                <div className="border rounded-lg divide-y bg-zinc-50/50">
                  {selectedOrder.items.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 flex justify-between items-start hover:bg-white transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-zinc-900">{item.name}</p>
                        <div className="flex gap-3 mt-1 text-sm text-zinc-500">
                          <span className="flex items-center gap-1">
                            <span className="text-zinc-400">⏱</span>
                            {item.timeframe}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="text-zinc-400">×</span>
                            {item.quantity}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-zinc-900">
                          ${item.price.toFixed(2)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-zinc-500 mt-0.5">
                            ${(item.price / item.quantity).toFixed(2)} each
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Summary */}
              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Subtotal</span>
                  <span className="text-zinc-900">
                    ${selectedOrder.subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Tax</span>
                  <span className="text-zinc-900">
                    ${selectedOrder.tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-semibold text-zinc-900">
                    Total Amount
                  </span>
                  <span className="font-bold text-lg text-[#28a717]">
                    ${selectedOrder.total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Notes Section */}
              {selectedOrder.notes && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <Label className="text-amber-900 text-xs uppercase font-semibold">
                    Order Notes
                  </Label>
                  <p className="text-sm text-amber-800 mt-2 whitespace-pre-wrap">
                    {selectedOrder.notes}
                  </p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Order Dialog */}
      <EditOrderDialog
        order={selectedOrder}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        onSave={(data) => {
          if (selectedOrder) {
            updateMutation.mutate({ id: selectedOrder._id, data });
          }
        }}
        isLoading={updateMutation.isPending}
      />

      {/* Delete Order Dialog */}
      <DeleteOrderDialog
        order={selectedOrder}
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onDelete={() => {
          if (selectedOrder) {
            deleteMutation.mutate(selectedOrder._id);
          }
        }}
        isDeleting={deleteMutation.isPending}
      />
    </div>
  );
}

function EditOrderDialog({
  order,
  open,
  onOpenChange,
  onSave,
  isLoading,
}: {
  order: Order | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: UpdateOrderInput) => void;
  isLoading: boolean;
}) {
  const [status, setStatus] = useState(order?.status || "pending");
  const [paymentStatus, setPaymentStatus] = useState(
    order?.paymentStatus || "pending",
  );
  const [notes, setNotes] = useState(order?.notes || "");

  // Update form when order changes
  useEffect(() => {
    if (order) {
      setStatus(order.status);
      setPaymentStatus(order.paymentStatus);
      setNotes(order.notes || "");
    }
  }, [order]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Order</DialogTitle>
          <DialogDescription>
            Update the status of order #{order?.orderNumber}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Order Status</Label>
            <Select
              value={status}
              onValueChange={(v) => setStatus(v as Order["status"])}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Payment Status</Label>
            <Select
              value={paymentStatus}
              onValueChange={(v) =>
                setPaymentStatus(v as Order["paymentStatus"])
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="refunded">Refunded</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Notes</Label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes about this order..."
              rows={3}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => onSave({ status, paymentStatus, notes })}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function DeleteOrderDialog({
  order,
  open,
  onOpenChange,
  onDelete,
  isDeleting,
}: {
  order: Order | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete: () => void;
  isDeleting: boolean;
}) {
  if (!order) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Delete Order</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this order? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-zinc-50 rounded-lg p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-600">Order Number:</span>
            <span className="font-medium">{order.orderNumber}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-600">Customer:</span>
            <span className="font-medium">{order.customerName}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-600">Total:</span>
            <span className="font-medium">${order.total.toFixed(2)}</span>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={onDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete Order"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
