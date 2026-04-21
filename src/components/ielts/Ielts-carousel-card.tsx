type IeltsCarouselCardProps = {
    image: string;
    title: string;
    description: string;
    index: string;
};

export default function IeltsCarouselCard({ image, title, description, index }: IeltsCarouselCardProps) {
    return (
        <div className="bg-white rounded-xl border p-4 h-full flex flex-col justify-between min-h-[380px]">
            <img src={image} alt={title} className="rounded-t-lg object-cover w-full h-48 mb-4" />
            <div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm mb-4">{description}</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
                <button className="bg-gray-50 border rounded px-4 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100">
                    আরও পড়ুন <span className="ml-1">▼</span>
                </button>
                <span className="text-gray-500 text-base font-semibold">{index}</span>
            </div>
        </div>
    );
}
