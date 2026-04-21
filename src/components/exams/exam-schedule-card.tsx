import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button.tsx";
import { CalendarDays, Clock3, CreditCard, MapPin, MonitorSmartphone, Ticket } from "lucide-react";
import { Link } from "react-router";

interface ExamScheduleCardProps {
    image: string;
    title: string;
    subtitle: string;
    date: string;
    time: string;
    duration: string;
    location: string;
    fee: string;
    seatType: string;
    venue?: string;
    linkLabel: string;
    href: string;
}

export function ExamScheduleCard({
    image,
    title,
    subtitle,
    date,
    time,
    duration,
    location,
    fee,
    seatType,
    venue,
    linkLabel,
    href,
}: ExamScheduleCardProps) {
    return (
        <Card className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader className="p-3">
                <img src={image} alt={title} className="h-56 w-full rounded-[1.25rem] object-cover" />
            </CardHeader>
            <CardContent className="flex flex-1 flex-col p-6 pt-2">
                <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{subtitle}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                        <CalendarDays className="mt-0.5 h-4 w-4 text-blue-700" />
                        <span>{date}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Clock3 className="mt-0.5 h-4 w-4 text-blue-700" />
                        <span>{time}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <MonitorSmartphone className="mt-0.5 h-4 w-4 text-blue-700" />
                        <span>{duration}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Ticket className="mt-0.5 h-4 w-4 text-blue-700" />
                        <span>{location}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CreditCard className="mt-0.5 h-4 w-4 text-blue-700" />
                        <span>{fee}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Ticket className="mt-0.5 h-4 w-4 text-blue-700" />
                        <span>{seatType}</span>
                    </li>
                    {venue && (
                        <li className="flex items-start gap-3">
                            <MapPin className="mt-0.5 h-4 w-4 text-blue-700" />
                            <span>{venue}</span>
                        </li>
                    )}
                </ul>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full rounded-full bg-blue-700 hover:bg-blue-800">
                    <Link to={href}>{linkLabel}</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
