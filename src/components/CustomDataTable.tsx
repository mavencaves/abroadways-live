import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"

interface Column {
    key: string
    header: string
    width?: string
}

interface CustomDataTableProps {
    columns: Column[]
    data: Record<string, string>[] | Record<string, React.ReactNode>[]
    className?: string
}

export function CustomDataTable({columns, data, className = ""}: CustomDataTableProps) {
    return (
        <div className={`${className}`}>
            <div className="rounded-lg border border-gray-300 overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-blue-100 hover:bg-blue-100">
                            {columns.map((column, index) => (
                                <TableHead
                                    key={column.key}
                                    className={`sm:text-lg text-gray-900 h-12 px-4 ${
                                        index < columns.length - 1 ? "border-r border-gray-300" : ""
                                    }`}
                                    style={{width: column.width}}
                                >
                                    {column.header}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, rowIndex) => (
                            <TableRow
                                key={rowIndex}
                                className={`${rowIndex % 2 === 0 ? "bg-blue-50" : "bg-white"} hover:bg-blue-100 transition-colors`}
                            >
                                {columns.map((column, colIndex) => (
                                    <TableCell
                                        key={column.key}
                                        className={` sm:text-lg text-gray-900 h-12 px-4 ${
                                            colIndex < columns.length - 1 ? "border-r border-gray-300" : ""
                                        }`}
                                    >
                                        {row[column.key]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
