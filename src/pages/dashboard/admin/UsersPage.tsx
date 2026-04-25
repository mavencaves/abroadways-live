import { useEffect, useMemo, useState } from "react";
import { Copy, KeyRound, Search, ShieldCheck, ShieldEllipsis, Trash2, UserCog, UserMinus, UserPlus, Users } from "lucide-react";
import { adminApi } from "@/lib/api";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type UserRole = "admin" | "user" | "course-manager" | "content-manager";
type UserStatus = "active" | "inactive";
type StaffRole = Exclude<UserRole, "user">;

type UserType = {
  _id: string;
  name: string;
  email: string;
  country?: string;
  avatarUrl?: string;
  status: UserStatus;
  role: UserRole;
  createdAt?: string;
};

type StaffCreateForm = {
  name: string;
  email: string;
  role: StaffRole;
  temporaryPassword: string;
  country: string;
};

const PAGE_SIZE = 10;

const ROLE_LABELS: Record<UserRole, string> = {
  admin: "Admin",
  user: "User",
  "content-manager": "Content Manager",
  "course-manager": "Course Manager",
};

const STATUS_LABELS: Record<UserStatus, string> = {
  active: "Active",
  inactive: "Inactive",
};

const ROLE_FILTER_OPTIONS = [
  { value: "all", label: "All roles" },
  { value: "admin", label: "Admin" },
  { value: "content-manager", label: "Content Manager" },
  { value: "course-manager", label: "Course Manager" },
  { value: "user", label: "User" },
] as const;

const STATUS_FILTER_OPTIONS = [
  { value: "all", label: "All statuses" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
] as const;

const STAFF_ROLE_OPTIONS: Array<{ value: StaffRole; label: string }> = [
  { value: "admin", label: "Admin" },
  { value: "content-manager", label: "Content Manager" },
  { value: "course-manager", label: "Course Manager" },
];

const DEFAULT_STAFF_FORM: StaffCreateForm = {
  name: "",
  email: "",
  role: "content-manager",
  temporaryPassword: "",
  country: "",
};

const formatDate = (value?: string) =>
  value
    ? new Date(value).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : "N/A";

const getRoleBadgeClass = (role: UserRole) => {
  switch (role) {
    case "admin":
      return "bg-slate-900 text-white";
    case "content-manager":
      return "bg-blue-100 text-blue-800";
    case "course-manager":
      return "bg-violet-100 text-violet-800";
    default:
      return "bg-slate-100 text-slate-700";
  }
};

const getStatusBadgeClass = (status: UserStatus) =>
  status === "active" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800";

export default function UsersPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState<UserType[]>([]);
  const [query, setQuery] = useState("");
  const [serverSearch, setServerSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | UserStatus>("all");
  const [roleFilter, setRoleFilter] = useState<"all" | UserRole>("all");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createForm, setCreateForm] = useState<StaffCreateForm>(DEFAULT_STAFF_FORM);
  const [creatingStaff, setCreatingStaff] = useState(false);
  const [activeRoleEditor, setActiveRoleEditor] = useState<UserType | null>(null);
  const [pendingRole, setPendingRole] = useState<UserRole>("content-manager");
  const [workingUserId, setWorkingUserId] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState(0);
  const [credentialNotice, setCredentialNotice] = useState<{
    title: string;
    email: string;
    password: string;
  } | null>(null);

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
        const response = await adminApi.getUsers({
          page,
          limit: PAGE_SIZE,
          q: serverSearch || undefined,
          status: statusFilter === "all" ? undefined : statusFilter,
          role: roleFilter === "all" ? undefined : roleFilter,
        });

        if (!isMounted) return;

        setUsers(response.data.users || []);
        setTotal(response.data.meta?.total || 0);
      } catch (error: any) {
        if (!isMounted) return;

        const status = error?.response?.status;
        const message =
          status === 401
            ? "Your session has expired. Please sign in again."
            : status === 403
              ? "Only admin accounts can access user management."
              : error?.response?.data?.message || "Failed to load users.";

        setLoadError(message);
        setUsers([]);
        setTotal(0);
        toast.error(message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, [canManageUsers, page, refreshToken, roleFilter, serverSearch, statusFilter]);

  const stats = useMemo(() => {
    const inactiveCount = users.filter((entry) => entry.status === "inactive").length;
    const adminCount = users.filter((entry) => entry.role === "admin").length;
    const contentManagerCount = users.filter((entry) => entry.role === "content-manager").length;

    return {
      inactiveCount,
      adminCount,
      contentManagerCount,
    };
  }, [users]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const showingFrom = total === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(page * PAGE_SIZE, total);

  const resetCreateForm = () => {
    setCreateForm(DEFAULT_STAFF_FORM);
  };

  const isCurrentUser = (entry: UserType) => user?._id === entry._id;

  const copyToClipboard = async (value: string, successMessage: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(successMessage);
    } catch {
      toast.error("Unable to copy to clipboard in this browser.");
    }
  };

  const openRoleEditor = (entry: UserType) => {
    setActiveRoleEditor(entry);
    setPendingRole(entry.role);
  };

  const handleCreateStaff = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!createForm.name.trim() || !createForm.email.trim()) {
      toast.error("Please provide a full name and email address.");
      return;
    }

    try {
      setCreatingStaff(true);
      const response = await adminApi.createStaffUser({
        name: createForm.name.trim(),
        email: createForm.email.trim(),
        role: createForm.role,
        temporaryPassword: createForm.temporaryPassword.trim() || undefined,
        country: createForm.country.trim() || undefined,
      });

      const createdUser = response.data.user as UserType;
      const temporaryPassword = response.data.temporaryPassword as string | undefined;

      toast.success(response.data.message || "Staff account created successfully.");
      setShowCreateModal(false);
      resetCreateForm();
      setCredentialNotice(
        temporaryPassword
          ? {
              title: `${ROLE_LABELS[createdUser.role]} credentials created`,
              email: createdUser.email,
              password: temporaryPassword,
            }
          : null
      );
      setPage(1);
      setRefreshToken((value) => value + 1);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Unable to create the staff account.");
    } finally {
      setCreatingStaff(false);
    }
  };

  const handleRoleChange = async () => {
    if (!activeRoleEditor) return;

    if (pendingRole === activeRoleEditor.role) {
      setActiveRoleEditor(null);
      return;
    }

    const confirmed = window.confirm(
      `Change ${activeRoleEditor.name}'s role from ${ROLE_LABELS[activeRoleEditor.role]} to ${ROLE_LABELS[pendingRole]}?`
    );

    if (!confirmed) return;

    try {
      setWorkingUserId(activeRoleEditor._id);
      const response = await adminApi.updateUserRole(activeRoleEditor._id, pendingRole);
      toast.success(response.data.message || "User role updated successfully.");
      setActiveRoleEditor(null);
      setRefreshToken((value) => value + 1);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Unable to update the user role.");
    } finally {
      setWorkingUserId(null);
    }
  };

  const handleStatusToggle = async (entry: UserType) => {
    const nextStatus: UserStatus = entry.status === "active" ? "inactive" : "active";
    const confirmed = window.confirm(
      `${nextStatus === "inactive" ? "Deactivate" : "Reactivate"} ${entry.name}'s account?`
    );

    if (!confirmed) return;

    try {
      setWorkingUserId(entry._id);
      const response = await adminApi.updateUserStatus(entry._id, nextStatus);
      toast.success(response.data.message || "User status updated successfully.");
      setRefreshToken((value) => value + 1);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Unable to update user status.");
    } finally {
      setWorkingUserId(null);
    }
  };

  const handleResetPassword = async (entry: UserType) => {
    const confirmed = window.confirm(`Reset a temporary password for ${entry.name}?`);

    if (!confirmed) return;

    try {
      setWorkingUserId(entry._id);
      const response = await adminApi.resetUserPassword(entry._id);
      const temporaryPassword = response.data.temporaryPassword as string | undefined;
      toast.success(response.data.message || "Temporary password reset successfully.");

      if (temporaryPassword) {
        setCredentialNotice({
          title: `Temporary password reset for ${entry.name}`,
          email: entry.email,
          password: temporaryPassword,
        });
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Unable to reset the temporary password.");
    } finally {
      setWorkingUserId(null);
    }
  };

  const handleDelete = async (entry: UserType) => {
    if (isCurrentUser(entry)) {
      toast.error("You cannot delete your own account.");
      return;
    }

    const confirmed = window.confirm(
      `Delete ${entry.name}'s account? This should only be used for cleanup of accounts that should not remain in the system.`
    );

    if (!confirmed) return;

    try {
      setWorkingUserId(entry._id);
      const response = await adminApi.deleteUser(entry._id);
      toast.success(response.data.message || "User deleted successfully.");
      setRefreshToken((value) => value + 1);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Unable to delete the user.");
    } finally {
      setWorkingUserId(null);
    }
  };

  if (!canManageUsers) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Workspace Access</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Users</h1>
          <p className="mt-2 text-sm text-slate-600">
            Manage staff accounts, role permissions, and dashboard access from the central admin workspace.
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Security & Access</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Users</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Create staff accounts, adjust permissions, deactivate access, and issue temporary password resets without
            weakening public signup or student access rules.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" onClick={() => setRefreshToken((value) => value + 1)}>
            Refresh list
          </Button>
          <Button onClick={() => setShowCreateModal(true)}>
            <UserPlus className="mr-2 h-4 w-4" />
            Create staff user
          </Button>
        </div>
      </div>

      {credentialNotice ? (
        <Card className="border-blue-200 bg-blue-50/70">
          <CardContent className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Temporary credentials</p>
              <h2 className="mt-2 text-lg font-semibold text-slate-950">{credentialNotice.title}</h2>
              <p className="mt-2 text-sm text-slate-600">
                Share this password securely. It is shown here once for{" "}
                <span className="font-medium text-slate-900">{credentialNotice.email}</span>.
              </p>
              <div className="mt-3 rounded-xl border border-blue-200 bg-white px-4 py-3 font-mono text-sm text-slate-900">
                {credentialNotice.password}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() => copyToClipboard(credentialNotice.password, "Temporary password copied.")}
              >
                <Copy className="mr-2 h-4 w-4" />
                Copy password
              </Button>
              <Button variant="outline" onClick={() => setCredentialNotice(null)}>
                Dismiss
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : null}

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Total users</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">{total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Admin accounts</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">{stats.adminCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Content managers</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">{stats.contentManagerCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Inactive accounts</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">{stats.inactiveCount}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.45fr_1fr]">
        <Card>
          <CardContent className="space-y-4 p-5">
            <div className="flex items-center gap-3">
              <ShieldEllipsis className="h-5 w-5 text-blue-700" />
              <div>
                <h2 className="text-lg font-semibold text-slate-950">Role permissions</h2>
                <p className="text-sm text-slate-600">Access stays strict across public, student, and dashboard areas.</p>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Admin</p>
                <p className="mt-2 text-sm text-slate-600">Full dashboard access, staff management, CRM, content, orders, documents, templates, and analytics.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Content Manager</p>
                <p className="mt-2 text-sm text-slate-600">Content and CRM operations including blogs, events, inquiries, templates, and operational follow-up.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Course Manager</p>
                <p className="mt-2 text-sm text-slate-600">Course and mock-test related workflows only. No admin user management and no student portal access.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">User</p>
                <p className="mt-2 text-sm text-slate-600">Student portal only. Public signup continues to create this role by default.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 p-5">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-blue-700" />
              <div>
                <h2 className="text-lg font-semibold text-slate-950">Safety rules</h2>
                <p className="text-sm text-slate-600">Built-in protections for live staff management.</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm leading-7 text-slate-600">
              <li>- Public signup always creates `user` accounts.</li>
              <li>- Only admin can access this screen and backend staff-management routes.</li>
              <li>- You cannot delete or deactivate your own account from here.</li>
              <li>- The system keeps at least one active admin account available.</li>
              <li>- Temporary passwords are shown once and must be shared securely.</li>
            </ul>
          </CardContent>
        </Card>
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
                setStatusFilter(event.target.value as "all" | UserStatus);
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
              onChange={(event) => {
                setRoleFilter(event.target.value as "all" | UserRole);
                setPage(1);
              }}
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
              <Button
                variant="outline"
                onClick={() => {
                  setQuery("");
                  setServerSearch("");
                  setStatusFilter("all");
                  setRoleFilter("all");
                  setPage(1);
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {loadError ? (
        <Card>
          <CardContent className="space-y-4 p-8">
            <p className="text-sm font-medium text-red-600">{loadError}</p>
            <Button onClick={() => setRefreshToken((value) => value + 1)}>Try again</Button>
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
                    <th className="min-w-[130px] px-4 py-3">Country</th>
                    <th className="min-w-[360px] px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-12 text-center text-slate-500">
                        Loading users...
                      </td>
                    </tr>
                  ) : users.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-12 text-center">
                        <p className="font-medium text-slate-900">No users match your current filters.</p>
                        <p className="mt-2 text-sm text-slate-500">
                          Try another search or clear the role and status filters.
                        </p>
                      </td>
                    </tr>
                  ) : (
                    users.map((entry) => {
                      const currentRowBusy = workingUserId === entry._id;
                      const ownAccount = isCurrentUser(entry);

                      return (
                        <tr key={entry._id} className="border-b bg-white align-top hover:bg-slate-50">
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={
                                  entry.avatarUrl ||
                                  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(entry.name)}`
                                }
                                alt={entry.name}
                                className="h-10 w-10 rounded-full bg-indigo-50 object-cover"
                                onError={(event) => {
                                  event.currentTarget.onerror = null;
                                  event.currentTarget.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(entry.name)}`;
                                }}
                              />
                              <div>
                                <p className="font-medium text-slate-900">
                                  {entry.name}
                                  {ownAccount ? (
                                    <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-blue-800">
                                      You
                                    </span>
                                  ) : null}
                                </p>
                                <p className="text-xs text-slate-500">{entry.country || "Unspecified"}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-slate-700">{entry.email}</td>
                          <td className="px-4 py-4">
                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getRoleBadgeClass(entry.role)}`}>
                              {ROLE_LABELS[entry.role]}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeClass(entry.status)}`}>
                              {STATUS_LABELS[entry.status]}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-slate-700">{formatDate(entry.createdAt)}</td>
                          <td className="px-4 py-4 text-slate-700">{entry.country || "Unspecified"}</td>
                          <td className="px-4 py-4">
                            <div className="flex flex-wrap gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => openRoleEditor(entry)}
                                disabled={currentRowBusy || ownAccount}
                              >
                                <UserCog className="mr-2 h-4 w-4" />
                                Change role
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleStatusToggle(entry)}
                                disabled={currentRowBusy || ownAccount}
                              >
                                <UserMinus className="mr-2 h-4 w-4" />
                                {entry.status === "active" ? "Deactivate" : "Reactivate"}
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleResetPassword(entry)}
                                disabled={currentRowBusy}
                              >
                                <KeyRound className="mr-2 h-4 w-4" />
                                Reset temporary password
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-red-200 text-red-700 hover:bg-red-50 hover:text-red-800"
                                onClick={() => handleDelete(entry)}
                                disabled={currentRowBusy || ownAccount}
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </Button>
                            </div>
                            {ownAccount ? (
                              <p className="mt-2 text-xs text-slate-500">
                                Self-delete, self-deactivate, and self-role changes are blocked for safety.
                              </p>
                            ) : null}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 px-5 py-4">
              <div className="text-sm text-slate-600">
                {total === 0 ? "0 users" : `Showing ${showingFrom}-${showingTo} of ${total} users.`}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  disabled={page === 1 || loading}
                  onClick={() => setPage((value) => Math.max(1, value - 1))}
                >
                  Previous
                </Button>
                <span className="text-sm text-slate-700">
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  disabled={page >= totalPages || loading}
                  onClick={() => setPage((value) => value + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {showCreateModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => {
              setShowCreateModal(false);
              resetCreateForm();
            }}
          />
          <div className="z-10 w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <UserPlus className="h-5 w-5 text-blue-700" />
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Create staff user</h2>
                <p className="text-sm text-slate-600">
                  Student accounts stay on public signup. This form is only for admin, content-manager, and
                  course-manager accounts.
                </p>
              </div>
            </div>

            <form onSubmit={handleCreateStaff} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
                  <Input
                    value={createForm.name}
                    onChange={(event) => setCreateForm((prev) => ({ ...prev, name: event.target.value }))}
                    placeholder="Staff member name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                  <Input
                    type="email"
                    value={createForm.email}
                    onChange={(event) => setCreateForm((prev) => ({ ...prev, email: event.target.value }))}
                    placeholder="staff@abroadways.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Staff role</label>
                  <select
                    value={createForm.role}
                    onChange={(event) => setCreateForm((prev) => ({ ...prev, role: event.target.value as StaffRole }))}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    {STAFF_ROLE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Country</label>
                  <Input
                    value={createForm.country}
                    onChange={(event) => setCreateForm((prev) => ({ ...prev, country: event.target.value }))}
                    placeholder="Bangladesh"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Temporary password</label>
                <Input
                  type="text"
                  value={createForm.temporaryPassword}
                  onChange={(event) => setCreateForm((prev) => ({ ...prev, temporaryPassword: event.target.value }))}
                  placeholder="Leave blank to auto-generate"
                />
                <p className="mt-2 text-xs text-slate-500">
                  If left blank, the backend will create a secure temporary password and show it once after save.
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowCreateModal(false);
                    resetCreateForm();
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={creatingStaff}>
                  {creatingStaff ? "Creating..." : "Create staff user"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {activeRoleEditor ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setActiveRoleEditor(null)} />
          <div className="z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <h2 className="text-xl font-semibold text-slate-950">Change role</h2>
            <p className="mt-2 text-sm text-slate-600">
              Update <span className="font-medium text-slate-900">{activeRoleEditor.name}</span>'s dashboard role.
            </p>

            <div className="mt-5 space-y-3">
              <label className="block text-sm font-medium text-slate-700">New role</label>
              <select
                value={pendingRole}
                onChange={(event) => setPendingRole(event.target.value as UserRole)}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                {ROLE_FILTER_OPTIONS.filter((option) => option.value !== "all").map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setActiveRoleEditor(null)}>
                Cancel
              </Button>
              <Button onClick={handleRoleChange} disabled={workingUserId === activeRoleEditor._id}>
                {workingUserId === activeRoleEditor._id ? "Updating..." : "Confirm role change"}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
