import { Link, Navigate, Outlet, useLocation } from "react-router";
import { ShieldAlert } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

const getDefaultRouteForRole = (role?: string) => {
  if (role === "user") return "/student/dashboard";
  if (role === "admin" || role === "content-manager") return "/dashboard";
  return "/";
};

export default function ProtectedRoute({ requiredRoles }: { requiredRoles?: string[] }) {
  const { token, user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center px-6 text-sm text-slate-600">
        Checking your access...
      </div>
    );
  }

  if (!token || !user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (requiredRoles && !requiredRoles.includes(user.role)) {
    const fallbackRoute = getDefaultRouteForRole(user.role);

    return (
      <div className="flex min-h-[50vh] items-center justify-center px-4">
        <div className="w-full max-w-xl rounded-3xl border border-amber-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-700">
            <ShieldAlert className="h-7 w-7" />
          </div>
          <h1 className="mt-5 text-2xl font-semibold text-slate-950">Access denied</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Your current role does not have access to this workspace. You are signed in as{" "}
            <span className="font-medium text-slate-900">{user.role}</span>.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link to={fallbackRoute}>Go to your available workspace</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return <Outlet />;
}
