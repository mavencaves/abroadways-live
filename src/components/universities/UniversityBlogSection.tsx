import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const blogItems = [
    {
        imageSrc: "/images/blog/ub1.jpg",
        title: "How to prepare for IELTS or TOEFL before applying abroad",
        date: "July 12, 2025",
        readingTime: "5 min read",
    },
    {
        imageSrc: "/images/blog/ub2.jpg",
        title: "Last-minute checklist before your admission test or interview",
        date: "July 12, 2025",
        readingTime: "5 min read",
    },
    {
        imageSrc: "/images/blog/ub3.jpg",
        title: "Academic and mindset preparation for studying abroad successfully",
        date: "July 12, 2025",
        readingTime: "5 min read",
    },
];

export default function UniversityBlogSection() {
    return (
        <section className="mx-auto mt-12 max-w-6xl rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-8 shadow-sm">
            <h2 className="mb-7 text-2xl font-bold text-slate-950">Related study abroad reads</h2>
            <Carousel className="w-full">
                <CarouselContent className="gap-6">
                    {blogItems.map((item, idx) => (
                        <CarouselItem key={idx} className="w-full sm:basis-1/2 md:basis-1/3">
                            <Card className="flex h-full cursor-pointer flex-col rounded-xl pt-0">
                                <CardHeader className="overflow-hidden rounded-t-xl p-0">
                                    <img
                                        src={item.imageSrc}
                                        alt={item.title}
                                        className="h-48 w-full object-cover rounded-t-xl"
                                    />
                                </CardHeader>
                                <CardContent className="flex flex-grow flex-col">
                                    <CardTitle className="mb-2 text-lg font-bold leading-snug">
                                        {item.title}
                                    </CardTitle>
                                    <p className="mt-auto whitespace-nowrap text-sm text-gray-500">
                                        {item.date} / {item.readingTime}
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full border bg-white p-4 text-2xl shadow">
                    <span aria-hidden="true">&rarr;</span>
                </CarouselNext>
            </Carousel>
        </section>
    );
}
