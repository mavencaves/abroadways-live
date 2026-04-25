import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "@/hooks/useAuth";

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
    return (
      <Navigate
        to="/unauthorized"
        replace
        state={{
          from: location.pathname,
          role: user.role,
          requiredRoles,
        }}
      />
    );
  }

  return <Outlet />;
}
