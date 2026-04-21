import { Link } from "react-router";
import { ArrowUpRight, Compass, Globe2, MapPinned, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { regionSummaries } from "@/data/higher-education-regions";

export default function StatsSection() {
  return (
    <section className="section-shell bg-white">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="section-intro">
            <p className="section-kicker">Top Study Regions</p>
            <h2 className="section-title">
              Start with the right region, then explore the countries that fit your budget, goals, and study plan.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Abroadways now presents destinations the way students actually compare them first: by region, then by
              country, then by the right next step.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700">
                5 regions
              </div>
              <div className="mt-4 text-2xl font-semibold text-slate-950">Region-first discovery</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">Premium entry points that make country comparison clearer from the homepage.</div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-700">
                Better UX
              </div>
              <div className="mt-4 text-2xl font-semibold text-slate-950">Clearer structure</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">Students can choose a destination zone before moving into country-level detail.</div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                <Sparkles className="h-3.5 w-3.5" />
                Safe growth
              </div>
              <div className="mt-4 text-2xl font-semibold text-slate-950">Route-safe expansion</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">No broken pages while new countries and deeper guidance are added over time.</div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {regionSummaries.map((region, index) => (
            <Link key={region.slug} to={`/higher-education/${region.slug}`} className="block">
              <Card
                className={`group h-full overflow-hidden border-slate-200 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_48px_rgba(15,23,42,0.10)] ${
                  index < 2
                    ? "bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] shadow-[0_16px_38px_rgba(15,23,42,0.06)]"
                    : "bg-white shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                }`}
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-blue-100 text-blue-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                      {region.slug === "europe" ? (
                        <Compass className="h-5 w-5" />
                      ) : region.slug === "north-america" ? (
                        <MapPinned className="h-5 w-5" />
                      ) : (
                        <Globe2 className="h-5 w-5" />
                      )}
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-orange-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div className="h-1.5 w-12 rounded-full bg-blue-700" />
                    <span className="rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-700">
                      {region.kicker}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{region.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{region.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {region.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
