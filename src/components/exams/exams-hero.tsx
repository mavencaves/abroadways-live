import { ArrowRight, ArrowUpRight, BadgeCheck } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface ExamsHeroProps {
    badge?: string;
    heading: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    countryOptions: { value: string; label: string }[];
}

const ExamsHero = ({ badge, heading, description, image, countryOptions }: ExamsHeroProps) => {
    return (
        <section className="w-full bg-[radial-gradient(circle_at_top_left,_rgba(78,129,255,0.22),_transparent_28%),linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-16 text-white md:px-0 md:py-20">
            <div className="container mx-auto">
                <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        {badge && (
                            <Badge className="border-white/15 bg-white/8 px-4 py-2 text-white hover:bg-white/8">
                                {badge}
                                <ArrowUpRight className="ml-2 size-4" />
                            </Badge>
                        )}

                        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/15 px-4 py-2 text-sm font-semibold text-orange-50">
                            <BadgeCheck className="h-4 w-4 text-orange-300" />
                            UKVI Approved LanguageCert Test Centre
                        </div>

                        <h1 className="my-6 max-w-3xl text-pretty font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                            {heading}
                        </h1>

                        <p className="mb-8 max-w-2xl text-base leading-8 text-blue-100 lg:text-lg">
                            {description}
                        </p>

                        <div className="flex w-full flex-col gap-5 rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm sm:max-w-xl">
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Select defaultValue={countryOptions[0]?.value}>
                                    <SelectTrigger className="h-13 w-full rounded-xl border-white/15 bg-white text-slate-900">
                                        <SelectValue placeholder="Choose destination" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {countryOptions.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Button asChild size="xl" className="h-13 rounded-xl bg-white text-slate-950 hover:bg-blue-50">
                                    <Link to="/contact">
                                        Talk to an Advisor
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Button
                                    asChild
                                    size="xl"
                                    variant="outline"
                                    className="h-13 flex-1 rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10"
                                >
                                    <Link to="/resources">Explore Resources</Link>
                                </Button>
                                <Button asChild size="xl" className="h-13 flex-1 rounded-xl bg-blue-500 text-white hover:bg-blue-400">
                                    <Link to="/abroadai">Ask AbroadAI Now</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/12 bg-white/8 p-3 shadow-2xl backdrop-blur-sm">
                        <img src={image.src} alt={image.alt} className="max-h-[560px] w-full rounded-[1.5rem] object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { ExamsHero };
