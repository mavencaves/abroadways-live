export default function Title({title}: { title: string }) {
    return (
        <h1 className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-3 tracking-tight text-gray-900">
            {title}
        </h1>
    )
}