import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin, Trophy } from "lucide-react";
import type { University } from "@/data/universities.ts";
import { Link } from "react-router";
import { formatTuitionFee, locationLabel } from "@/lib/higher-education";

interface UniversityCardProps {
    university: University;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ university }) => {
    return (
        <Card className="h-full rounded-[1.75rem] border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
            <CardContent className="h-full p-6">
                <div className="flex h-full flex-col space-y-5">
                    <div className="flex items-start gap-4">
                        <img
                            src={university.logo}
                            alt={`${university.englishName} logo`}
                            className="h-14 w-14 rounded-2xl object-cover ring-1 ring-slate-200"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                target.nextElementSibling?.classList.remove("hidden");
                            }}
                        />
                        <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                            <GraduationCap className="h-6 w-6" />
                        </div>

                        <div className="min-w-0 flex-grow">
                            <h3 className="mb-2 text-xl font-semibold leading-tight text-slate-950">
                                {university.englishName}
                            </h3>
                            <div className="flex items-center gap-2 text-slate-600">
                                <MapPin className="h-4 w-4 flex-shrink-0 text-blue-700" />
                                <span className="text-sm">{locationLabel(university.city, university.country)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 rounded-[1.25rem] bg-slate-50 p-4 sm:grid-cols-3">
                        <div>
                            <div className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                                QS Rank
                            </div>
                            <div className="flex items-center gap-2">
                                <Trophy className="h-4 w-4 text-blue-700" />
                                <span className="text-lg font-semibold text-blue-800">{university.qsRank}</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                                Tuition
                            </div>
                            <div className="text-sm font-semibold leading-6 text-slate-900">
                                {formatTuitionFee(university.tuitionFee)}
                            </div>
                        </div>

                        <div>
                            <div className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                                IELTS
                            </div>
                            <div className="text-sm font-semibold text-slate-900">
                                Minimum {university.ieltsScore}
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto flex flex-col gap-3 pt-2">
                        <Button asChild variant="outline" size="xl" className="w-full rounded-full border-blue-200 text-blue-700 hover:bg-blue-50">
                            <Link to={new URL(university.logo).origin} target="_blank">
                                Visit Official Site
                            </Link>
                        </Button>
                        <Button asChild size="xl" className="w-full rounded-full bg-blue-700 hover:bg-blue-800">
                            <Link to="/resources/eligibility">Check My Eligibility</Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default UniversityCard;
