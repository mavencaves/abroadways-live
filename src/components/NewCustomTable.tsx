interface TableData {
    [key: string]: string | number;
}

interface CustomTableProps {
    data: TableData[];
    columns: {
        key: string;
        label: string;
        width?: string;
    }[];
    className?: string;
}

export default function NewCustomTable({ data, columns, className = "" }: CustomTableProps) {
    return (
        <div className={`overflow-x-auto ${className}`}>
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-blue-600">
                    {columns.map((column) => (
                        <th
                            key={column.key}
                            className={`p-4 text-left font-semibold text-white border-r border-purple-400 last:border-r-0 ${column.width || ''}`}
                        >
                            {column.label}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr
                        key={index}
                        className={`${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        } hover:bg-purple-50 transition-colors duration-200 border-b border-gray-200`}
                    >
                        {columns.map((column) => (
                            <td
                                key={column.key}
                                className="p-4 text-gray-700 border-r border-gray-200 last:border-r-0"
                            >
                                {row[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
