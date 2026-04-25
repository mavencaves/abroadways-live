import { Link, useLocation } from "react-router";
import { LockKeyhole, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

type UnauthorizedState = {
  from?: string;
  role?: string;
  requiredRoles?: string[];
};

const getWorkspaceRoute = (role?: string) => {
  if (role === "user") return "/student/dashboard";
  if (role === "admin" || role === "content-manager") return "/dashboard";
  return "/";
};

export default function UnauthorizedPage() {
  const location = useLocation();
  const { user } = useAuth();
  const state = (location.state as UnauthorizedState | null) ?? null;
  const activeRole = user?.role ?? state?.role;
  const requiredRoles = state?.requiredRoles ?? [];
  const fallbackRoute = getWorkspaceRoute(activeRole);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.12),_transparent_40%),linear-gradient(180deg,#fffaf5_0%,#ffffff_50%,#f8fafc_100%)]">
      <div className="section-container flex min-h-[72vh] items-center justify-center py-16">
        <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-amber-200/80 bg-white/95 p-8 text-center shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur md:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 shadow-[0_18px_40px_rgba(245,158,11,0.12)]">
            <ShieldAlert className="h-7 w-7" />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">Access control</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            You do not have access to this area
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            This workspace is restricted to the appropriate Abroadways account role. Your current account is{" "}
            <span className="font-semibold text-slate-900">{activeRole ?? "not signed in"}</span>.
          </p>
          {requiredRoles.length > 0 && (
            <p className="mt-3 text-sm text-slate-500">
              Allowed roles: <span className="font-medium text-slate-700">{requiredRoles.join(", ")}</span>
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {user ? (
              <Button asChild className="h-11 rounded-full px-5">
                <Link to={fallbackRoute}>
                  <LockKeyhole className="mr-2 h-4 w-4" />
                  Go to your workspace
                </Link>
              </Button>
            ) : (
              <Button asChild className="h-11 rounded-full px-5">
                <Link to="/login">
                  <LockKeyhole className="mr-2 h-4 w-4" />
                  Sign in
                </Link>
              </Button>
            )}
            <Button asChild variant="outline" className="h-11 rounded-full px-5">
              <Link to="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
