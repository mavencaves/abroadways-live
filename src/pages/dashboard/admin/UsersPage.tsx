import React, { useEffect, useMemo, useState } from "react";
import { Search, ShieldCheck } from "lucide-react";
import { adminApi } from "@/lib/api";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type UserType = {
  _id: string;
  name: string;
  email: string;
  country?: string;
  avatarUrl?: string;
  status: "active" | "inactive";
  role: "admin" | "user" | "course-manager" | "content-manager";
  createdAt?: string;
};

const PAGE_SIZE = 10;

const STATUS_LABELS: Record<UserType["status"], string> = {
  active: "Active",
  inactive: "Inactive",
};

const ROLE_LABELS: Record<UserType["role"], string> = {
  admin: "Admin",
  user: "User",
  "course-manager": "Course Manager",
  "content-manager": "Content Manager",
};

const STATUS_FILTER_OPTIONS = [
  { value: "all", label: "All statuses" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
] as const;

const ROLE_FILTER_OPTIONS = [
  { value: "all", label: "All roles" },
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" },
  { value: "course-manager", label: "Course Manager" },
  { value: "content-manager", label: "Content Manager" },
] as const;

type FormState = {
  name: string;
  email: string;
  country: string;
  role: UserType["role"];
  status: UserType["status"];
  avatarUrl: string;
};

const DEFAULT_FORM: FormState = {
  name: "",
  email: "",
  country: "",
  role: "user",
  status: "active",
  avatarUrl: "",
};

const formatDate = (value?: string) =>
  value
    ? new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "N/A";

export default function UsersPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState<UserType[]>([]);
  const [query, setQuery] = useState("");
  const [serverSearch, setServerSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");
  const [roleFilter, setRoleFilter] = useState<(typeof ROLE_FILTER_OPTIONS)[number]["value"]>("all");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<UserType | null>(null);
  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [refreshToken, setRefreshToken] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [showMenuId, setShowMenuId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const canManageUsers = user?.role === "admin";

  useEffect(() => {
    if (!canManageUsers) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    const fetchUsers = async () => {
      setLoading(true);
      setLoadError(null);

      try {
        const params: Record<string, any> = {
          page,
          limit: PAGE_SIZE,
        };

        if (serverSearch) params.q = serverSearch;
        if (statusFilter !== "all") params.status = statusFilter;

        const response = await adminApi.getUsers(params);
        if (!isMounted) return;

        const data = response.data;
        setUsers(data.users || []);
        setTotal(data.meta?.total || 0);
      } catch (error: any) {
        if (!isMounted) return;
        const status = error?.response?.status;
        const message =
          status === 401
            ? "Your session has expired. Please sign in again."
            : status === 403
              ? "Only admin accounts can access user management."
              : error?.response?.data?.message || "Failed to load users.";
        toast.error(message);
        setLoadError(message);
        setUsers([]);
        setTotal(0);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, [canManageUsers, page, refreshToken, serverSearch, statusFilter]);

  const visibleUsers = useMemo(() => {
    return users.filter((entry) => roleFilter === "all" || entry.role === roleFilter);
  }, [roleFilter, users]);

  function escapeCsv(text: string | number | undefined) {
    if (text == null) return "";
    const str = String(text);
    const shouldQuote = /[",\n,]/.test(str);
    return shouldQuote ? `"${str.replace(/"/g, "\"\"")}"` : str;
  }

  function exportCSV() {
    if (!visibleUsers.length) {
      toast.error("There are no users to export.");
      return;
    }

    const headers = ["Name", "Email", "Country", "Role", "Status", "Created Date"];
    const rows = visibleUsers.map((entry) => [
      escapeCsv(entry.name),
      escapeCsv(entry.email),
      escapeCsv(entry.country || "Not specified"),
      escapeCsv(ROLE_LABELS[entry.role]),
      escapeCsv(STATUS_LABELS[entry.status]),
      escapeCsv(formatDate(entry.createdAt)),
    ]);

    const csv = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `abroadways-users-page-${page}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("CSV exported successfully.");
  }

  const resetForm = () => {
    setForm(DEFAULT_FORM);
    setEditingUser(null);
  };

  const openCreateModal = () => {
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (entry: UserType) => {
    setEditingUser(entry);
    setForm({
      name: entry.name,
      email: entry.email,
      country: entry.country || "",
      role: entry.role,
      status: entry.status,
      avatarUrl: entry.avatarUrl || "",
    });
    setShowModal(true);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.email) {
      toast.error("Please provide both name and email.");
      return;
    }

    try {
      setSubmitting(true);
      if (editingUser) {
        await adminApi.updateUser(editingUser._id, form);
        toast.success("User updated successfully.");
      } else {
        await adminApi.createUser(form);
        toast.success("User created successfully.");
      }

      setShowModal(false);
      resetForm();
      setPage(1);
      setRefreshToken((token) => token + 1);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Unable to save the user.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(userId: string) {
    if (!confirm("Are you sure you want to delete this user?")) return;

    setShowMenuId(null);
    setDeletingId(userId);

    try {
      await adminApi.deleteUser(userId);
      toast.success("User deleted successfully.");
      setRefreshToken((token) => token + 1);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Unable to delete the user.");
    } finally {
      setDeletingId(null);
    }
  }

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const showingFrom = total === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(page * PAGE_SIZE, total);

  if (!canManageUsers) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Workspace Access</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Users</h1>
          <p className="mt-2 text-sm text-slate-600">
            Manage dashboard users, roles, and account status from the central admin workspace.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-4 p-8">
            <div className="flex items-center gap-3 text-amber-700">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-sm font-medium">Only admin accounts can manage users.</p>
            </div>
            <p className="text-sm text-slate-600">
              Your current role is <span className="font-medium text-slate-900">{user?.role || "unknown"}</span>.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Workspace Access</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Users</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Manage dashboard users, roles, and account status from the central admin workspace.
          </p>
        </div>
        <div className="text-sm text-slate-500">
          Showing <span className="font-medium text-slate-900">{visibleUsers.length}</span> visible records
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Total users</p><p className="mt-2 text-3xl font-semibold">{total}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Active</p><p className="mt-2 text-3xl font-semibold">{users.filter((entry) => entry.status === "active").length}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Content managers</p><p className="mt-2 text-3xl font-semibold">{users.filter((entry) => entry.role === "content-manager").length}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Course managers</p><p className="mt-2 text-3xl font-semibold">{users.filter((entry) => entry.role === "course-manager").length}</p></CardContent></Card>
      </div>

      <Card>
        <CardContent className="space-y-4 p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_220px_220px_auto]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name or email"
                className="pl-10"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(event) => {
                setStatusFilter(event.target.value as typeof statusFilter);
                setPage(1);
              }}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              {STATUS_FILTER_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <select
              value={roleFilter}
              onChange={(event) => setRoleFilter(event.target.value as typeof roleFilter)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              {ROLE_FILTER_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setServerSearch(query.trim());
                  setPage(1);
                }}
              >
                Search
              </Button>
              <Button variant="outline" onClick={exportCSV}>Export CSV</Button>
              <Button onClick={openCreateModal}>Add User</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {loadError ? (
        <Card>
          <CardContent className="space-y-4 p-8">
            <p className="text-sm font-medium text-red-600">{loadError}</p>
            <Button onClick={() => setRefreshToken((token) => token + 1)}>Try Again</Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="min-h-[320px] overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
                  <tr>
                    <th className="min-w-[220px] px-4 py-3">User</th>
                    <th className="min-w-[220px] px-4 py-3">Email</th>
                    <th className="min-w-[150px] px-4 py-3">Role</th>
                    <th className="min-w-[120px] px-4 py-3">Status</th>
                    <th className="min-w-[160px] px-4 py-3">Created</th>
                    <th className="min-w-[120px] px-4 py-3">Country</th>
                    <th className="min-w-[90px] px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-12 text-center text-slate-500">Loading users...</td>
                    </tr>
                  ) : visibleUsers.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-12 text-center">
                        <p className="font-medium text-slate-900">No users match your current filters.</p>
                        <p className="mt-2 text-sm text-slate-500">Try another search or reset the role and status filters.</p>
                      </td>
                    </tr>
                  ) : (
                    visibleUsers.map((entry) => (
                      <tr key={entry._id} className="border-b bg-white hover:bg-slate-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={entry.avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(entry.name)}`}
                              alt={entry.name}
                              className="h-9 w-9 rounded-full bg-indigo-50 object-cover"
                              onError={(event) => {
                                event.currentTarget.onerror = null;
                                event.currentTarget.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(entry.name)}`;
                              }}
                            />
                            <div>
                              <p className="font-medium text-slate-900">{entry.name}</p>
                              <p className="text-xs text-slate-500">{entry.country || "Not specified"}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-slate-700">{entry.email}</td>
                        <td className="px-4 py-3">{ROLE_LABELS[entry.role]}</td>
                        <td className="px-4 py-3">
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${entry.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                            {STATUS_LABELS[entry.status]}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-700">{formatDate(entry.createdAt)}</td>
                        <td className="px-4 py-3 text-slate-700">{entry.country || "Not specified"}</td>
                        <td className="relative px-4 py-3 text-right">
                          <button
                            className="rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                            onClick={() => setShowMenuId(showMenuId === entry._id ? null : entry._id)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                          {showMenuId === entry._id ? (
                            <div
                              className="absolute right-4 top-full z-20 mt-1 w-40 overflow-hidden rounded-lg border bg-white shadow-lg"
                              onMouseLeave={() => setShowMenuId(null)}
                            >
                              <button className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-blue-50" onClick={() => openEditModal(entry)}>
                                Edit user
                              </button>
                              <button
                                className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 disabled:opacity-60"
                                onClick={() => handleDelete(entry._id)}
                                disabled={deletingId === entry._id}
                              >
                                {deletingId === entry._id ? "Deleting..." : "Delete user"}
                              </button>
                            </div>
                          ) : null}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 px-5 py-4">
              <div className="text-sm text-slate-600">
                {total === 0 ? "0 users" : `Showing ${showingFrom}-${showingTo} of ${total} users.`}
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled={page === 1 || loading} onClick={() => setPage((value) => Math.max(1, value - 1))}>
                  Previous
                </Button>
                <span className="text-sm text-slate-700">Page {page} of {totalPages}</span>
                <Button variant="outline" disabled={page >= totalPages || loading} onClick={() => setPage((value) => value + 1)}>
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => { setShowModal(false); resetForm(); }} />
          <div className="z-10 w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
            <h2 className="mb-5 text-xl font-medium text-slate-800">
              {editingUser ? "Edit user" : "Add new user"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-blue-700 focus:ring-blue-700"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-blue-700 focus:ring-blue-700"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Country</label>
                <input
                  value={form.country}
                  onChange={(event) => setForm((prev) => ({ ...prev, country: event.target.value }))}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-blue-700 focus:ring-blue-700"
                  placeholder="Bangladesh"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Profile image URL</label>
                <input
                  value={form.avatarUrl}
                  onChange={(event) => setForm((prev) => ({ ...prev, avatarUrl: event.target.value }))}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-blue-700 focus:ring-blue-700"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Role</label>
                  <select
                    value={form.role}
                    onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value as UserType["role"] }))}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 focus:border-blue-700 focus:ring-blue-700"
                  >
                    {ROLE_FILTER_OPTIONS.filter((option) => option.value !== "all").map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Status</label>
                  <select
                    value={form.status}
                    onChange={(event) => setForm((prev) => ({ ...prev, status: event.target.value as UserType["status"] }))}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 focus:border-blue-700 focus:ring-blue-700"
                  >
                    {STATUS_FILTER_OPTIONS.filter((option) => option.value !== "all").map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? "Saving..." : editingUser ? "Update user" : "Create user"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
