import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router";
import { Button } from "@/components/ui/button.tsx";
import { ArrowRight } from "lucide-react";

interface ExamCardProps {
    flag: string;
    title: string;
    href: string;
    description: string;
    linkLabel: string;
}

export function ExamCard({ flag, title, href, description, linkLabel }: ExamCardProps) {
    return (
        <Card className="flex h-full w-full flex-col justify-between rounded-[1.75rem] border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
            <CardContent className="flex flex-1 flex-col p-7">
                <img src={flag} alt={title} className="h-16 w-16 rounded-2xl object-cover ring-1 ring-slate-200" />
                <h3 className="mt-5 text-2xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </CardContent>
            <CardFooter className="w-full p-7 pt-0">
                <Button asChild className="w-full rounded-full bg-blue-700 hover:bg-blue-800" size="xl">
                    <Link to={href}>
                        {linkLabel}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
