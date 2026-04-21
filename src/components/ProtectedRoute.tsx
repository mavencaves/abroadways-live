import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedRoute({ requiredRoles }: { requiredRoles?: string[] }) {
  const { token, user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return null;
  }

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Check role-based access if requiredRoles are specified
  if (requiredRoles && user && !requiredRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}


