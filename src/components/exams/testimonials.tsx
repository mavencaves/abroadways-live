import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { StarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils.ts";

const testimonials = [
    {
        id: 1,
        name: "Sadia Parvin",
        designation: "Student",
        testimonial:
            "The exam section helped me compare IELTS and Duolingo more clearly, and the guidance felt much easier to understand than scattered information online.",
        avatar: "/images/exams/user1.png",
    },
    {
        id: 2,
        name: "Tasnim Islam",
        designation: "Student",
        testimonial:
            "I liked how the information was organized. It gave me a better idea of which exam matched my university goals and what to prepare next.",
        avatar: "/images/exams/user1.png",
    },
];

export default function ExamTestimonials() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
    }, [api]);

    return (
        <section className="w-full px-4 py-18 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Student Feedback</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                        What students say about the exam guidance experience.
                    </h2>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                        Clearer information leads to better decisions, especially when students are comparing multiple
                        tests for higher education abroad.
                    </p>
                </div>
                <div className="mx-auto w-full px-8 md:px-12">
                    <Carousel setApi={setApi}>
                        <CarouselContent>
                            {testimonials.map((testimonial) => (
                                <CarouselItem key={testimonial.id}>
                                    <TestimonialCard testimonial={testimonial} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div className="mt-6 flex items-center justify-center gap-2">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={cn("h-3.5 w-3.5 rounded-full border-2 border-blue-200", {
                                    "border-blue-700 bg-blue-700": current === index + 1,
                                })}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const TestimonialCard = ({
    testimonial,
}: {
    testimonial: (typeof testimonials)[number];
}) => (
    <div className="mb-8 rounded-[2rem] bg-white px-6 py-8 shadow-sm ring-1 ring-slate-200 sm:px-8 sm:py-8">
        <div className="flex items-center justify-between gap-10">
            <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="relative hidden aspect-[3/4] w-full max-w-[16rem] shrink-0 rounded-[1.5rem] bg-muted-foreground/20 object-cover lg:block"
            />
            <div className="flex flex-col justify-center">
                <div className="flex items-center justify-between gap-1">
                    <div className="hidden items-center gap-4 sm:flex md:hidden">
                        <Avatar className="h-8 w-8 md:h-10 md:w-10">
                            <AvatarFallback className="bg-primary text-xl font-medium text-primary-foreground">
                                {testimonial.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-lg font-semibold text-slate-950">{testimonial.name}</p>
                            <p className="text-sm text-slate-500">{testimonial.designation}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <StarIcon key={index} className="h-5 w-5 fill-orange-400 stroke-orange-400" />
                        ))}
                    </div>
                </div>
                <p className="mt-6 text-lg font-semibold leading-normal tracking-tight text-slate-950 sm:text-2xl lg:text-[1.75rem] lg:leading-normal xl:text-3xl">
                    &quot;{testimonial.testimonial}&quot;
                </p>
                <div className="mt-6 flex items-center gap-4 sm:hidden md:flex">
                    <Avatar>
                        <AvatarFallback className="bg-primary text-xl font-medium text-primary-foreground">
                            {testimonial.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-lg font-semibold text-slate-950">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.designation}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
