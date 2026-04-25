import { Link } from "react-router";
import { RefreshCcw, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServerErrorPage() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_40%),linear-gradient(180deg,#f8fbff_0%,#ffffff_50%,#f8fafc_100%)]">
      <div className="section-container flex min-h-[72vh] items-center justify-center py-16">
        <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 text-center shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur md:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 shadow-[0_18px_40px_rgba(239,68,68,0.10)]">
            <TriangleAlert className="h-7 w-7" />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-red-600">Something went wrong</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            We could not load this page
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            An unexpected error interrupted this request. Please refresh the page or return to the Abroadways
            homepage. If the issue continues, contact support before launch.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="h-11 rounded-full px-5">
              <Link to="/" reloadDocument>
                <RefreshCcw className="mr-2 h-4 w-4" />
                Reload site
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-full px-5">
              <Link to="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
