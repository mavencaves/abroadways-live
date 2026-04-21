import {Link} from "react-router";

interface ArticleCardProps {
    image: string;
    title: string;
    date: string;
    readTime: string;
    href: string;
}

const ArticleCard = ({image, title, date, readTime, href}: ArticleCardProps) => (
    <Link to={href} className="block overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition bg-white mb-4">
        <img src={image} alt={title} className="w-full aspect-[16/9] h-40 object-cover"/>
        <div className="p-4">
            <h3 className="font-semibold text-base text-gray-900 mb-1">{title}</h3>
            <div className="text-gray-500 text-xs">
                {date} / পড়তে সময়: {readTime}
            </div>
        </div>
    </Link>
);

export default ArticleCard;
