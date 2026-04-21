import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import IeltsCarouselCard from "@/components/ielts/Ielts-carousel-card.tsx";


interface IeltsCarouselSectionProps {
    data: {
        image: string;
        title: string;
        description: string;
        index: string;
    }[];
}


export default function CustomCarouselSection({data}: IeltsCarouselSectionProps) {
    return (
        <section className={"bg-white p-4 my-10 rounded-xl"}>
            <h2 className="text-3xl font-bold mb-4">এই পৃষ্ঠায় <span className="inline-block align-middle ml-2">→</span>
            </h2>
            <Carousel
                opts={{align: "start"}}
                className="w-full"
            >
                <CarouselContent className="-ml-2">
                    {data.map((item, idx) => (
                        <CarouselItem className="pl-2 basis-full sm:basis-1/2 lg:basis-1/2" key={idx}>
                            <IeltsCarouselCard {...item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="w-full flex justify-center gap-4 mt-6">

                </div>
                <CarouselPrevious
                    className="w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md static translate-x-0 translate-y-0"/>
                <CarouselNext
                    className="w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md static translate-x-0 translate-y-0"/>
            </Carousel>
        </section>
    );
}
