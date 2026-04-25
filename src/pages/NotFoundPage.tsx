import { Link } from "react-router";
import { ArrowRight, Compass, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.14),_transparent_45%),linear-gradient(180deg,#f8fbff_0%,#ffffff_55%,#eff6ff_100%)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="section-container flex min-h-[72vh] items-center justify-center py-16">
        <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 text-center shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur md:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#06142f_0%,#0b2a67_55%,#2563eb_100%)] text-white shadow-[0_20px_45px_rgba(37,99,235,0.22)]">
            <Compass className="h-7 w-7" />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            This page is not available
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            The link may be outdated, the page may have moved, or the address may be incorrect. You can head
            back to Abroadways home, explore study abroad guidance, or continue with your portal.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="h-11 rounded-full px-5">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go to home
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-full px-5">
              <Link to="/study-abroad">
                Explore Study Abroad
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
