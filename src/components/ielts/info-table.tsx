import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";
import {ArrowRight} from "lucide-react";
import {Link} from "react-router";


type InfoTableSectionProps = {
    title: string;
    data: { label: string; href: string }[][];
};
export default function InfoTableSection({title, data}: InfoTableSectionProps) {
    return (
        <section className="bg-white p-4 rounded-xl mx-auto my-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">{title}</h3>
            <div className="border border-black rounded-xl overflow-hidden">
                <Table className="border-collapse">
                    <TableBody>
                        {data.map((row, i) => (
                            <TableRow key={i} className="divide-x">
                                {row.map((cell, j) => (
                                    <TableCell
                                        key={j}
                                        className="px-3 py-3 border-b whitespace-nowrap"
                                    >
                                        <Link
                                            to={cell.href}
                                            className="flex items-center justify-between gap-2 hover:underline font-medium text-gray-900"
                                        >
                                            {cell.label}
                                            {cell.label ? <ArrowRight/> : null}
                                        </Link>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
}
