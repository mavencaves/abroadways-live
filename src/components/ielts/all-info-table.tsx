import InfoTableSection from "./info-table";

const ieltsImportantInfo = [
    [
        { label: "IELTS Exam Dates", href: "/exams/ielts/dates" },
        { label: "IELTS Fees", href: "/exams/ielts/fees" },
    ],
    [
        { label: "IELTS Speaking Practice", href: "/exams/ielts/practice/speaking" },
        { label: "IELTS Listening Practice", href: "/exams/ielts/practice/listening" },
    ],
    [
        { label: "IELTS Reading Practice", href: "/exams/ielts/practice/reading" },
        { label: "IELTS Writing Practice", href: "/exams/ielts/practice/writing" },
        { label: "IELTS Test Centres", href: "/exams/ielts/centers" },
    ],
    [
        { label: "IELTS Results", href: "/exams/ielts/results" },
        { label: "IELTS Registration", href: "/exams/ielts/registration" },
        { label: "IELTS Books", href: "/resources/books/ielts" },
    ],
];

const ieltsCountries = [
    [
        { label: "Study in the United States", href: "/study-abroad/usa" },
        { label: "Study in Canada", href: "/study-abroad/canada" },
        { label: "Study in the United Kingdom", href: "/study-abroad/uk" },
    ],
    [
        { label: "Study in Australia", href: "/study-abroad/australia" },
        { label: "Study in Ireland", href: "/study-abroad/ireland" },
        { label: "Study in Germany", href: "/study-abroad/germany" },
    ],
];

const ieltsUniversities = [
    [
        { label: "Massachusetts Institute of Technology", href: "/study-abroad/usa/universities/mit" },
        { label: "University of British Columbia", href: "/study-abroad/canada/universities/ubc" },
        { label: "Harvard University", href: "/study-abroad/usa/universities/harvard-university" },
    ],
    [
        { label: "University of Toronto", href: "/study-abroad/canada/universities/university-of-toronto" },
        { label: "Oxford University", href: "/study-abroad/uk/universities/oxford-university" },
        { label: "Stanford University", href: "/study-abroad/usa/universities/stanford-university" },
    ],
];

const ieltsCentersBangladesh = [
    [
        { label: "IELTS in Dhaka", href: "/exams/ielts/centers" },
        { label: "IELTS in Rajshahi", href: "/exams/ielts/centers" },
        { label: "IELTS in Chittagong", href: "/exams/ielts/centers" },
    ],
    [
        { label: "IELTS in Sylhet", href: "/exams/ielts/centers" },
        { label: "IELTS in Khulna", href: "/exams/ielts/centers" },
        { label: "IELTS in Barisal", href: "/exams/ielts/centers" },
    ],
    [
        { label: "IELTS in Cumilla", href: "/exams/ielts/centers" },
        { label: "IELTS in Rangpur", href: "/exams/ielts/centers" },
        { label: "IELTS in Narail", href: "/exams/ielts/centers" },
    ],
];

export default function IeltsAllInfoTables() {
    return (
        <div className="py-4">
            <InfoTableSection title="Important IELTS Information" data={ieltsImportantInfo} />
            <InfoTableSection title="Popular Study Abroad Destinations" data={ieltsCountries} />
            <InfoTableSection title="Popular Universities Requiring IELTS" data={ieltsUniversities} />
            <InfoTableSection title="IELTS Test Centre Guidance in Bangladesh" data={ieltsCentersBangladesh} />
        </div>
    );
}
