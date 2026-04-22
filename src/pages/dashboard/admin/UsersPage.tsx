import React, { useEffect, useState } from "react";
import { adminApi } from "@/lib/api";
import { toast } from "sonner";

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

const ROLE_OPTIONS = [
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

export default function UsersPage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<UserType | null>(null);
  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [refreshToken, setRefreshToken] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [showMenuId, setShowMenuId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUsers = async () => {
      setLoading(true);
      try {
        const params: Record<string, any> = { page, limit: PAGE_SIZE };
        if (query) params.q = query;
        if (statusFilter !== "all") params.status = statusFilter;

        const response = await adminApi.getUsers(params);
        if (!isMounted) return;

        const data = response.data;
        setUsers(data.users || []);
        setTotal(data.meta?.total || 0);
      } catch (error: any) {
        if (!isMounted) return;
        const message = error?.response?.data?.message || "Failed to load users.";
        toast.error(message);
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
  }, [page, query, statusFilter, refreshToken]);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setPage(1);
  }

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setStatusFilter(e.target.value as "all" | "active" | "inactive");
    setPage(1);
  }

  function escapeCsv(text: string | number | undefined) {
    if (text == null) return "";
    const str = String(text);
    const shouldQuote = /[",\n,]/.test(str);
    return shouldQuote ? `"${str.replace(/"/g, "\"\"")}"` : str;
  }

  function exportCSV() {
    if (!users.length) {
      toast.error("There are no users to export.");
      return;
    }

    const headers = ["Name", "Email", "Country", "Sign-up Date", "Status", "Role"];
    const rows = users.map((u) => [
      escapeCsv(u.name),
      escapeCsv(u.email),
      escapeCsv(u.country || "Not specified"),
      escapeCsv(u.createdAt ? new Date(u.createdAt).toLocaleDateString("en-US") : ""),
      escapeCsv(STATUS_LABELS[u.status]),
      escapeCsv(ROLE_LABELS[u.role]),
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

  const openEditModal = (user: UserType) => {
    setEditingUser(user);
    setForm({
      name: user.name,
      email: user.email,
      country: user.country || "",
      role: user.role,
      status: user.status,
      avatarUrl: user.avatarUrl || "",
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
      const message = error?.response?.data?.message || "Unable to save the user.";
      toast.error(message);
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
      const message = error?.response?.data?.message || "Unable to delete the user.";
      toast.error(message);
    } finally {
      setDeletingId(null);
    }
  }

  function handleEdit(user: UserType) {
    setShowMenuId(null);
    openEditModal(user);
  }

  const showingFrom = total === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(page * PAGE_SIZE, total);
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div>
      <div>
        <h1 className="mb-6 text-2xl font-semibold text-blue-800">Users</h1>

        <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
          <div className="mb-6 flex justify-end gap-3">
            <button
              onClick={exportCSV}
              className="flex items-center rounded-lg border border-blue-200 bg-white px-4 py-2 text-blue-700 shadow-sm transition duration-150 hover:bg-blue-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.707-9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 10.586V3a1 1 0 10-2 0v7.586L6.707 7.707z" clipRule="evenodd" />
              </svg>
              Export CSV
            </button>
            <button
              onClick={openCreateModal}
              className="flex items-center rounded-lg bg-blue-700 px-4 py-2 text-white shadow-md transition duration-150 hover:bg-blue-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add User
            </button>
          </div>

          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <input
                value={query}
                onChange={handleSearchChange}
                placeholder="Search users"
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-700 focus:ring-blue-700 md:w-96"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="relative w-full md:w-48">
              <select value={statusFilter} onChange={handleStatusChange} className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10">
                {STATUS_FILTER_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className="min-h-[300px] overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b bg-gray-50 text-xs uppercase text-gray-700">
                <tr>
                  <th className="min-w-[200px] px-4 py-3">User</th>
                  <th className="min-w-[200px] px-4 py-3">Email</th>
                  <th className="min-w-[120px] px-4 py-3">Country</th>
                  <th className="min-w-[120px] px-4 py-3">Role</th>
                  <th className="min-w-[150px] px-4 py-3">Sign-up Date</th>
                  <th className="min-w-[100px] px-4 py-3">Status</th>
                  <th className="min-w-[80px] px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-12 text-center text-gray-500">Loading users...</td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-12 text-center text-gray-500">No users found.</td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user._id} className="border-b bg-white hover:bg-gray-50">
                      <td className="flex items-center px-4 py-3 font-medium text-gray-900">
                        <img
                          src={user.avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name)}`}
                          alt={user.name}
                          className="mr-3 h-8 w-8 flex-shrink-0 rounded-full bg-indigo-50 object-cover"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name)}`;
                          }}
                        />
                        {user.name}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{user.email}</td>
                      <td className="px-4 py-3">{user.country || "Not specified"}</td>
                      <td className="px-4 py-3">{ROLE_LABELS[user.role]}</td>
                      <td className="px-4 py-3">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString("en-US") : "N/A"}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {STATUS_LABELS[user.status]}
                        </span>
                      </td>
                      <td className="relative px-4 py-3">
                        <button
                          className="rounded-full p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                          onClick={() => setShowMenuId(showMenuId === user._id ? null : user._id)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>

                        {showMenuId === user._id && (
                          <div
                            className="absolute right-0 top-full z-20 mt-1 w-40 overflow-hidden rounded-lg border bg-white shadow-lg"
                            onMouseLeave={() => setShowMenuId(null)}
                          >
                            <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-100" onClick={() => handleEdit(user)}>
                              Edit user
                            </button>
                            <button
                              className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 disabled:opacity-60"
                              onClick={() => handleDelete(user._id)}
                              disabled={deletingId === user._id}
                            >
                              {deletingId === user._id ? "Deleting..." : "Delete user"}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-sm text-gray-600">
              {total === 0 ? "0 items" : `Showing ${showingFrom}-${showingTo} of ${total} users.`}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1 || loading}
                className="rounded-lg border border-gray-300 px-3 py-1 text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>
              <div className="mx-2 text-sm font-medium text-gray-700">Page {page} / {totalPages}</div>
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={page >= totalPages || loading}
                className="rounded-lg border border-blue-700 bg-blue-700 px-4 py-2 text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black opacity-40" onClick={() => { setShowModal(false); resetForm(); }} />
          <div className="z-10 w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl transition-all duration-300">
            <h2 className="mb-5 text-xl font-medium text-gray-800">
              {editingUser ? "Edit user" : "Add new user"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-700 focus:ring-blue-700"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-700 focus:ring-blue-700"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Country</label>
                <input
                  value={form.country}
                  onChange={(e) => setForm((prev) => ({ ...prev, country: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-700 focus:ring-blue-700"
                  placeholder="Bangladesh"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Profile image URL</label>
                <input
                  value={form.avatarUrl}
                  onChange={(e) => setForm((prev) => ({ ...prev, avatarUrl: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-700 focus:ring-blue-700"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Role</label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value as UserType["role"] }))}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-blue-700 focus:ring-blue-700"
                  >
                    {ROLE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Status</label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm((prev) => ({ ...prev, status: e.target.value as UserType["status"] }))}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-blue-700 focus:ring-blue-700"
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
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-blue-700 px-4 py-2 text-white shadow-md transition hover:bg-blue-800 disabled:opacity-50"
                >
                  {submitting ? "Saving..." : editingUser ? "Update user" : "Create user"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
