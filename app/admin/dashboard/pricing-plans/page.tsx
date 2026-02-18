"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import {
  pricingPlansApi,
  PricingPlan,
  CreatePricingPlanInput,
} from "@/lib/api/pricing-plans";
import { PageHeader } from "@/components/admin/page-header";
import { DataTable } from "@/components/admin/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import {
  MoreHorizontal,
  Plus,
  Edit,
  Trash2,
  Eye,
  RefreshCw,
} from "lucide-react";

export default function PricingPlansPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [isMonthlyFilter, setIsMonthlyFilter] = useState<string>("all");
  const [isActiveFilter, setIsActiveFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState("");

  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [
      "admin",
      "pricing-plans",
      page,
      isMonthlyFilter,
      isActiveFilter,
      categoryFilter,
    ],
    queryFn: () =>
      pricingPlansApi.getAll({
        page,
        limit: 10,
        isMonthly:
          isMonthlyFilter === "all" ? null : isMonthlyFilter === "true",
        isActive: isActiveFilter === "all" ? null : isActiveFilter === "true",
        category: categoryFilter || undefined,
      }),
  });

  const createMutation = useMutation({
    mutationFn: (data: CreatePricingPlanInput) => pricingPlansApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "pricing-plans"] });
      toast.success("Plan created successfully");
      setCreateDialogOpen(false);
    },
    onError: (error: { response?: { data?: { message?: string } } }) => {
      toast.error(error.response?.data?.message || "Failed to create plan");
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<CreatePricingPlanInput>;
    }) => pricingPlansApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "pricing-plans"] });
      toast.success("Plan updated successfully");
      setEditDialogOpen(false);
    },
    onError: (error: { response?: { data?: { message?: string } } }) => {
      toast.error(error.response?.data?.message || "Failed to update plan");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => pricingPlansApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "pricing-plans"] });
      toast.success("Plan deleted successfully");
      setDeleteDialogOpen(false);
    },
    onError: () => {
      toast.error("Failed to delete plan");
    },
  });

  const plans = data?.data?.plans || [];
  const pagination = data?.data?.pagination;

  const columns: ColumnDef<PricingPlan>[] = [
    {
      accessorKey: "name",
      header: "Plan",
      cell: ({ row }) => (
        <div>
          <p className="font-medium text-zinc-900">{row.original.name}</p>
          <p className="text-sm text-zinc-500">{row.original.category}</p>
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => (
        <div>
          <span className="font-medium text-zinc-900">
            ${row.original.price}
          </span>
          {row.original.originalPrice && (
            <span className="ml-2 text-sm text-zinc-400 line-through">
              ${row.original.originalPrice}
            </span>
          )}
        </div>
      ),
    },
    {
      accessorKey: "isMonthly",
      header: "Type",
      cell: ({ row }) => (
        <Badge variant="outline">
          {row.original.isMonthly ? "Monthly" : "One-time"}
        </Badge>
      ),
    },
    {
      accessorKey: "timeframe",
      header: "Timeframe",
      cell: ({ row }) => (
        <span className="text-zinc-600">{row.original.timeframe}</span>
      ),
    },
    {
      accessorKey: "isActive",
      header: "Status",
      cell: ({ row }) => (
        <Badge
          variant="outline"
          className={
            row.original.isActive
              ? "bg-green-100 text-green-800 border-green-200"
              : "bg-zinc-100 text-zinc-600 border-zinc-200"
          }
        >
          {row.original.isActive ? "Active" : "Inactive"}
        </Badge>
      ),
    },
    {
      accessorKey: "features",
      header: "Features",
      cell: ({ row }) => (
        <span className="text-zinc-500">
          {row.original.features.length} features
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
                setSelectedPlan(row.original);
                setViewDialogOpen(true);
              }}
            >
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setSelectedPlan(row.original);
                setEditDialogOpen(true);
              }}
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit Plan
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-600"
              onClick={() => {
                setSelectedPlan(row.original);
                setDeleteDialogOpen(true);
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Plan
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pricing Plans"
        description="Manage your pricing plans and offerings"
        action={
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => refetch()}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button onClick={() => setCreateDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Plan
            </Button>
          </div>
        }
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <Input
          placeholder="Filter by category..."
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            setPage(1);
          }}
          className="w-64"
        />
        <Select
          value={isMonthlyFilter}
          onValueChange={(v) => {
            setIsMonthlyFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="true">Monthly</SelectItem>
            <SelectItem value="false">One-time</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={isActiveFilter}
          onValueChange={(v) => {
            setIsActiveFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="true">Active</SelectItem>
            <SelectItem value="false">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={plans}
        isLoading={isLoading}
        isServerSide
        currentPage={pagination?.page || 1}
        totalPages={pagination?.totalPages || 1}
        totalCount={pagination?.total || 0}
        onPageChange={setPage}
      />

      {/* View Plan Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedPlan?.name}</DialogTitle>
            <DialogDescription>{selectedPlan?.description}</DialogDescription>
          </DialogHeader>
          {selectedPlan && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-zinc-500">Price</Label>
                  <p className="font-medium text-lg">
                    ${selectedPlan.price}
                    {selectedPlan.originalPrice && (
                      <span className="ml-2 text-sm text-zinc-400 line-through">
                        ${selectedPlan.originalPrice}
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <Label className="text-zinc-500">Category</Label>
                  <p className="font-medium">{selectedPlan.category}</p>
                </div>
                <div>
                  <Label className="text-zinc-500">Type</Label>
                  <p className="font-medium">
                    {selectedPlan.isMonthly
                      ? "Monthly Subscription"
                      : "One-time Service"}
                  </p>
                </div>
                <div>
                  <Label className="text-zinc-500">Timeframe</Label>
                  <p className="font-medium">{selectedPlan.timeframe}</p>
                </div>
              </div>

              <div>
                <Label className="text-zinc-500 mb-2 block">Features</Label>
                <ul className="space-y-2">
                  {selectedPlan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                {selectedPlan.highlighted && <Badge>Highlighted</Badge>}
                {selectedPlan.popular && (
                  <Badge variant="secondary">Popular</Badge>
                )}
                {selectedPlan.badge && (
                  <Badge variant="outline">{selectedPlan.badge}</Badge>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Create/Edit Plan Dialog */}
      <PlanFormDialog
        plan={editDialogOpen ? selectedPlan : null}
        open={createDialogOpen || editDialogOpen}
        onOpenChange={(open) => {
          if (!open) {
            setCreateDialogOpen(false);
            setEditDialogOpen(false);
          }
        }}
        onSave={(data) => {
          if (editDialogOpen && selectedPlan) {
            updateMutation.mutate({ id: selectedPlan._id, data });
          } else {
            createMutation.mutate(data as CreatePricingPlanInput);
          }
        }}
        isLoading={createMutation.isPending || updateMutation.isPending}
        mode={editDialogOpen ? "edit" : "create"}
      />

      {/* Delete Confirmation */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Plan</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete &ldquo;{selectedPlan?.name}
              &rdquo;? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={() => {
                if (selectedPlan) {
                  deleteMutation.mutate(selectedPlan._id);
                }
              }}
            >
              {deleteMutation.isPending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

interface PlanFormDialogProps {
  plan: PricingPlan | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: Partial<CreatePricingPlanInput>) => void;
  isLoading: boolean;
  mode: "create" | "edit";
}

function PlanFormDialog({
  plan,
  open,
  onOpenChange,
  onSave,
  isLoading,
  mode,
}: PlanFormDialogProps) {
  const [formData, setFormData] = useState<Partial<CreatePricingPlanInput>>({
    name: "",
    category: "",
    price: 0,
    originalPrice: undefined,
    description: "",
    features: [],
    highlighted: false,
    popular: false,
    timeframe: "Monthly",
    badge: "",
    isMonthly: true,
    slug: "",
    isActive: true,
  });
  const [featuresText, setFeaturesText] = useState("");

  // Reset form when dialog opens
  useEffect(() => {
    if (open && plan) {
      setFormData({
        name: plan.name,
        category: plan.category,
        price: plan.price,
        originalPrice: plan.originalPrice,
        description: plan.description,
        features: plan.features,
        highlighted: plan.highlighted,
        popular: plan.popular,
        timeframe: plan.timeframe,
        badge: plan.badge,
        isMonthly: plan.isMonthly,
        slug: plan.slug,
        isActive: plan.isActive,
      });
      setFeaturesText(plan.features.join("\n"));
    } else if (open && !plan) {
      setFormData({
        name: "",
        category: "",
        price: 0,
        originalPrice: undefined,
        description: "",
        features: [],
        highlighted: false,
        popular: false,
        timeframe: "Monthly",
        badge: "",
        isMonthly: true,
        slug: "",
        isActive: true,
      });
      setFeaturesText("");
    }
  }, [open, plan]);

  const handleSubmit = () => {
    const features = featuresText
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f.length > 0);
    onSave({ ...formData, features });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Create New Plan" : "Edit Plan"}
          </DialogTitle>
          <DialogDescription>
            {mode === "create"
              ? "Add a new pricing plan to your offerings"
              : "Update the plan details"}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => {
                  const name = e.target.value;
                  const slug = name
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, "")
                    .replace(/\s+/g, "-")
                    .replace(/-+/g, "-");
                  setFormData({ ...formData, name, slug });
                }}
                placeholder="e.g., Marketing Starter"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                value={formData.slug}
                placeholder="e.g., marketing-starter"
                disabled
                className="bg-zinc-50"
              />
              <p className="text-xs text-zinc-500">
                Auto-generated from name. Plan ID will be auto-incremented (1,
                2, 3...).
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Budget-Friendly Essentials">
                      Budget-Friendly Essentials
                    </SelectItem>
                    <SelectItem value="Essential Digital Marketing">
                      Essential Digital Marketing
                    </SelectItem>
                    <SelectItem value="Comprehensive Marketing">
                      Comprehensive Marketing
                    </SelectItem>
                    <SelectItem value="Full-Service Marketing">
                      Full-Service Marketing
                    </SelectItem>
                    <SelectItem value="Custom Marketing Solutions">
                      Custom Marketing Solutions
                    </SelectItem>
                    <SelectItem value="One-Time Service">
                      One-Time Service
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeframe">Timeframe *</Label>
                <Input
                  id="timeframe"
                  value={formData.timeframe}
                  onChange={(e) =>
                    setFormData({ ...formData, timeframe: e.target.value })
                  }
                  placeholder="e.g., Monthly"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price *</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: parseFloat(e.target.value) || 0,
                    })
                  }
                  placeholder="0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="originalPrice">Original Price</Label>
                <Input
                  id="originalPrice"
                  type="number"
                  value={formData.originalPrice || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      originalPrice: e.target.value
                        ? parseFloat(e.target.value)
                        : undefined,
                    })
                  }
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Describe the plan..."
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="features">Features (one per line) *</Label>
              <Textarea
                id="features"
                value={featuresText}
                onChange={(e) => setFeaturesText(e.target.value)}
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                rows={5}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="badge">Badge</Label>
              <Input
                id="badge"
                value={formData.badge}
                onChange={(e) =>
                  setFormData({ ...formData, badge: e.target.value })
                }
                placeholder="e.g., POPULAR"
              />
            </div>

            <div className="space-y-2">
              <Label>Plan Type</Label>
              <Select
                value={formData.isMonthly ? "monthly" : "onetime"}
                onValueChange={(v) =>
                  setFormData({ ...formData, isMonthly: v === "monthly" })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly Subscription</SelectItem>
                  <SelectItem value="onetime">One-time Service</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-zinc-500">
                Sort order will be auto-incremented automatically.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, isActive: !!checked })
                  }
                />
                <Label htmlFor="isActive" className="cursor-pointer">
                  Active
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="highlighted"
                  checked={formData.highlighted}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, highlighted: !!checked })
                  }
                />
                <Label htmlFor="highlighted" className="cursor-pointer">
                  Highlighted
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="popular"
                  checked={formData.popular}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, popular: !!checked })
                  }
                />
                <Label htmlFor="popular" className="cursor-pointer">
                  Popular
                </Label>
              </div>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading
              ? "Saving..."
              : mode === "create"
                ? "Create Plan"
                : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
