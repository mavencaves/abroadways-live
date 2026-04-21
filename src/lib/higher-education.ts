const countryNames: Record<string, string> = {
    usa: "United States",
    uk: "United Kingdom",
    canada: "Canada",
    australia: "Australia",
    "new-zealand": "New Zealand",
    germany: "Germany",
    ireland: "Ireland",
    europe: "Europe",
    asia: "Asia",
    france: "France",
    netherlands: "Netherlands",
    finland: "Finland",
    denmark: "Denmark",
    sweden: "Sweden",
    austria: "Austria",
    belgium: "Belgium",
    hungary: "Hungary",
    romania: "Romania",
    lithuania: "Lithuania",
    estonia: "Estonia",
    latvia: "Latvia",
    croatia: "Croatia",
    cyprus: "Cyprus",
    malta: "Malta",
    greece: "Greece",
    malaysia: "Malaysia",
    thailand: "Thailand",
    singapore: "Singapore",
    china: "China",
    russia: "Russia",
    indonesia: "Indonesia",
    brazil: "Brazil",
    argentina: "Argentina",
    chile: "Chile",
};

const cityNames: Record<string, string> = {
    "new-york": "New York",
    boston: "Boston",
    "san-francisco": "San Francisco",
    "washington-dc": "Washington, DC",
    "los-angeles": "Los Angeles",
    chicago: "Chicago",
    houston: "Houston",
    miami: "Miami",
    london: "London",
    manchester: "Manchester",
    birmingham: "Birmingham",
    leeds: "Leeds",
    glasgow: "Glasgow",
    edinburgh: "Edinburgh",
    cardiff: "Cardiff",
    sheffield: "Sheffield",
    newcastle: "Newcastle",
    southampton: "Southampton",
    sydney: "Sydney",
    melbourne: "Melbourne",
    brisbane: "Brisbane",
    perth: "Perth",
    adelaide: "Adelaide",
    canberra: "Canberra",
    "gold-coast": "Gold Coast",
    toronto: "Toronto",
    vancouver: "Vancouver",
    montreal: "Montreal",
    calgary: "Calgary",
    ottawa: "Ottawa",
    "quebec-city": "Quebec City",
    hamilton: "Hamilton",
    waterloo: "Waterloo",
    berlin: "Berlin",
    munich: "Munich",
    frankfurt: "Frankfurt",
    hamburg: "Hamburg",
    dusseldorf: "Dusseldorf",
    stuttgart: "Stuttgart",
    dortmund: "Dortmund",
    essen: "Essen",
    bonn: "Bonn",
    dublin: "Dublin",
    cork: "Cork",
    limerick: "Limerick",
    galway: "Galway",
    belfast: "Belfast",
    sligo: "Sligo",
    kilkenny: "Kilkenny",
    wexford: "Wexford",
    derry: "Derry",
    lisburn: "Lisburn",
    cambridge: "Cambridge",
    stanford: "Stanford",
    pasadena: "Pasadena",
    philadelphia: "Philadelphia",
    ithaca: "Ithaca",
    "new-haven": "New Haven",
    princeton: "Princeton",
    middletown: "Middletown",
    waltham: "Waltham",
    "winter-park": "Winter Park",
    berkeley: "Berkeley",
    lexington: "Lexington",
    "ann-arbor": "Ann Arbor",
};

export const courseNames: Record<string, string> = {
    mph: "Master of Public Health",
    mscs: "MS in Computer Science",
    msds: "MS in Data Science",
    mbbs: "MBBS",
    "msc-business-management": "MSc in Business and Management",
    mba: "MBA",
    llm: "LLM",
    "meng-engineering": "MEng in Engineering",
    "msc-finance": "MSc in Finance",
    "ma-journalism": "MA in Journalism",
    "msc-psychology": "MSc in Psychology",
    "ma-international-relations": "MA in International Relations",
    "ma-public-policy": "MA in Public Policy",
    "msc-artificial-intelligence": "MSc in Artificial Intelligence",
    "msc-biotechnology": "MSc in Biotechnology",
    "ma-education": "MA in Education",
    "msc-environmental-science": "MSc in Environmental Science",
    "msc-it": "MSc in Information Technology",
    "msc-ce": "MSc in Civil Engineering",
};

const banglaDigitMap: Record<string, string> = {
    "০": "0",
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
};

export function countryLabel(country?: string) {
    if (!country) return "Destination";
    return countryNames[country.toLowerCase()] || toTitleCase(country.replace(/-/g, " "));
}

export function cityLabel(city?: string) {
    if (!city) return "City";
    return cityNames[city.toLowerCase()] || toTitleCase(city.replace(/-/g, " "));
}

export function courseLabel(course?: string) {
    if (!course) return "Course";
    return courseNames[course.toLowerCase()] || toTitleCase(course.replace(/-/g, " "));
}

export function locationLabel(city?: string, country?: string) {
    const cityPart = cityLabel(city);
    const countryPart = countryLabel(country);
    return city && country ? `${cityPart}, ${countryPart}` : cityPart || countryPart;
}

export function normalizeBanglaDigits(input: string) {
    return input.replace(/[০-৯]/g, (digit) => banglaDigitMap[digit] || digit);
}

export function formatTuitionFee(input?: string) {
    if (!input) return "Tuition details available on request";

    const normalized = normalizeBanglaDigits(input)
        .replace(/লাখ টাকা\/বছর/g, " lakh BDT/year")
        .replace(/লাখ টাকা/g, " lakh BDT")
        .replace(/\/বছর/g, "/year")
        .replace(/টাকা/g, "BDT")
        .trim();

    if (normalized === "-/-") {
        return "Tuition details available on request";
    }

    return normalized;
}

function toTitleCase(value: string) {
    return value
        .split(" ")
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}
