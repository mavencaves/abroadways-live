export type IeltsImageCarouselCardProps = {
    image: string;
    index: string;
};

export default function IeltsImageCarouselCard({image, index}: IeltsImageCarouselCardProps) {
    return (
        <>
            <img src={image} alt={"IELTS Image"} className="rounded-lg object-cover mb-4"/>
            <span className="text-gray-500 text-base font-semibold">{index}</span>
        </>
    );
}
