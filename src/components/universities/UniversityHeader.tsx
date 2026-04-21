import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router";

interface UniversityHeaderProps {
    backgroundUrl: string;
    name: string;
    location: string;
    logo: string;
}

const UniversityHeader = ({ backgroundUrl, name, location, logo }: UniversityHeaderProps) => (
    <div className="relative w-full overflow-hidden">
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-80">
            <img src={backgroundUrl || "/placeholder.svg"} alt={`${name} campus`} className="block h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,47,0.18)_0%,rgba(6,20,47,0.78)_100%)]" />
        </div>

        <div className="relative -mt-10 mx-4 sm:-mt-12 sm:mx-6 md:-mt-14 md:mx-8 lg:mx-auto lg:max-w-5xl">
            <div
                className="rounded-[1.75rem] border border-white/50 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:p-5 md:p-6"
                style={{
                    boxShadow: "0 20px 48px rgba(15, 23, 42, 0.14)",
                }}
            >
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-5">
                    <div className="flex flex-1 flex-col items-center gap-4 sm:flex-row sm:items-center">
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-[1.25rem] bg-slate-50 ring-1 ring-slate-200 sm:h-18 sm:w-18">
                            <img
                                src={logo || "/placeholder.svg"}
                                alt={`${name} logo`}
                                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                            />
                        </div>
                        <div className="text-center sm:text-left">
                            <h1 className="text-xl font-semibold leading-tight text-slate-950 sm:text-2xl md:text-3xl">{name}</h1>
                            <p className="mt-2 flex items-center justify-center gap-2 text-sm text-slate-600 sm:justify-start md:text-base">
                                <MapPin className="h-4 w-4 flex-shrink-0 text-blue-700" />
                                {location}
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex-shrink-0 sm:w-auto">
                        <Button asChild className="w-full rounded-full bg-blue-700 hover:bg-blue-800" size="xl">
                            <Link to="/contact">Book Consultation</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <div className="pb-8 sm:pb-10 md:pb-12"></div>
    </div>
);

export default UniversityHeader;
