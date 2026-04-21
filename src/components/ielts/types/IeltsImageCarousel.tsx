import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import IeltsImageCarouselCard, {
    type IeltsImageCarouselCardProps
} from "@/components/ielts/types/IeltsImageCarouselCard.tsx";


interface IeltsImageCarouselSectionProps {
    data: IeltsImageCarouselCardProps[];
}


export default function IeltsImageCarouselSection({data}: IeltsImageCarouselSectionProps) {
    return (
        <section className={"bg-white p-4 my-10 rounded-xl"}>
            <Carousel
                opts={{align: "start"}}
                className="w-full"
            >
                <CarouselContent className="-ml-2">
                    {data.map((item, idx) => (
                        <CarouselItem className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3" key={idx}>
                            <IeltsImageCarouselCard {...item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious
                    className="w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md static translate-x-0 translate-y-0"/>
                <CarouselNext
                    className="w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md static translate-x-0 translate-y-0"/>
            </Carousel>
        </section>
    );
}
