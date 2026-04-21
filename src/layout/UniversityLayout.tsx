import UniversityHeader from "@/components/universities/UniversityHeader.tsx";
import UniversityTabs from "@/components/universities/Tabs.tsx";
import FindUniversityCard from "@/components/universities/FindUniversityCard.tsx";
import UniversityBlogSection from "@/components/universities/UniversityBlogSection.tsx";

interface UniversityLayoutProps {
    backgroundUrl: string;
    name: string;
    location: string;
    logo: string;
    children?: React.ReactNode;
}

export default function UniversityLayout({
                                             backgroundUrl,
                                             name,
                                             location,
                                             logo,
                                             children
                                         }: UniversityLayoutProps) {
    return (
        <div className="mb-24 bg-slate-50 pb-10">
            <UniversityHeader
                backgroundUrl={backgroundUrl || "/placeholder.svg"}
                name={name || "University Name"}
                location={location || "Location"}
                logo={logo || "/placeholder.svg"}
            />

            <div className="container mx-auto px-4">
                <UniversityTabs/>

                <div className="flex flex-col md:flex-row gap-6 mt-6">
                    <main className="flex-grow">
                        {children}
                        <UniversityBlogSection/>
                    </main>
                    <aside className="flex-shrink-0 w-full md:w-80 lg:w-96">
                        <FindUniversityCard/>
                    </aside>
                </div>
            </div>

        </div>
    );
}
