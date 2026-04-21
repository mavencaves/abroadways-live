interface SearchStatsProps {
    totalResults: number;
}

const SearchStats: React.FC<SearchStatsProps> = ({ totalResults }) => {
    return (
        <div className="mb-6 flex flex-col gap-3 rounded-[1.25rem] border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
                <span className="font-semibold text-slate-950">{totalResults}</span> destination results found
            </div>
            <div className="flex flex-wrap items-center gap-4 text-slate-500">
                <span>Study abroad shortlisting</span>
                <span>Student-focused comparison</span>
            </div>
        </div>
    );
};

export default SearchStats;
