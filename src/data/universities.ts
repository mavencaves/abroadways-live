export interface University {
    id: string;
    name: string;
    location: string;
    logo: string;
    englishName: string
    qsRank: number | string;
    tuitionFee: string;
    ieltsScore: number;
    country: string;
    city: string;
}

const newYorkUniversities: University[] = [
    {
        id: "ny_1",
        name: "কলম্বিয়া বিশ্ববিদ্যালয়",
        englishName: "Columbia University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.columbia.edu/favicon.ico",
        qsRank: 22,
        tuitionFee: "-/-",
        ieltsScore: 6.0
    },
    {
        id: "ny_2",
        name: "বার্কলে কলেজ",
        englishName: "Berkeley College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://berkeleycollege.edu/favicon.ico",
        qsRank: 27,
        tuitionFee: "১২ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "ny_3",
        name: "নিউ ইয়র্ক বিশ্ববিদ্যালয়",
        englishName: "New York University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.nyu.edu/favicon.ico",
        qsRank: 39,
        tuitionFee: "২০ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "ny_4",
        name: "ইয়েশিভা বিশ্ববিদ্যালয়",
        englishName: "Yeshiva University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.yu.edu/favicon.ico",
        qsRank: 246,
        tuitionFee: "১৮ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "ny_5",
        name: "ওয়াগনার কলেজ",
        englishName: "Wagner College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.wagner.edu/favicon.ico",
        qsRank: 251,
        tuitionFee: "৩৭ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_6",
        name: "অ্যাডেলফি বিশ্ববিদ্যালয়",
        englishName: "Adelphi University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.adelphi.edu/favicon.ico",
        qsRank: 251,
        tuitionFee: "১৭ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "ny_7",
        name: "মেট্রোপলিটন কলেজ অফ নিউ ইয়র্ক",
        englishName: "Metropolitan College of New York",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.mcny.edu/favicon.ico",
        qsRank: 701,
        tuitionFee: "১৭ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_8",
        name: "ফোর্ডহ্যাম বিশ্ববিদ্যালয়",
        englishName: "Fordham University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.fordham.edu/favicon.ico",
        qsRank: 801,
        tuitionFee: "৪২ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "ny_9",
        name: "গ্লাসগো ক্যালেডোনিয়ান নিউ ইয়র্ক কলেজ",
        englishName: "Glasgow Caledonian New York College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.gcnyc.edu/favicon.ico",
        qsRank: 1001,
        tuitionFee: "-/-",
        ieltsScore: 6.5
    },
    {
        id: "ny_10",
        name: "দ্য সিটি কলেজ অফ নিউ ইয়র্ক",
        englishName: "The City College of New York",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.ccny.cuny.edu/favicon.ico",
        qsRank: 1001,
        tuitionFee: "১২ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_11",
        name: "সেন্ট জন'স বিশ্ববিদ্যালয়",
        englishName: "St. John's University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.stjohns.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৯ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "ny_12",
        name: "টুরো কলেজ",
        englishName: "Touro College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.touro.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৪ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_13",
        name: "আইকাহন স্কুল অফ মেডিসিন অ্যাট মাউন্ট সিনাই",
        englishName: "Icahn School of Medicine at Mount Sinai",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.mountsinai.org/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "৪৫ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "ny_14",
        name: "কুইন্স কলেজ",
        englishName: "Queens College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.qc.cuny.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১১ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_15",
        name: "নিউ ইয়র্ক ফিল্ম একাডেমি",
        englishName: "New York Film Academy",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.nyfa.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "২৭ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "ny_16",
        name: "নিউ ইয়র্ক টেক - লং আইল্যান্ড",
        englishName: "New York Tech - Long Island",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.nyit.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "৩৩ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_17",
        name: "লং আইল্যান্ড বিশ্ববিদ্যালয়",
        englishName: "Long Island University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.liu.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "২০ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "ny_18",
        name: "বারুচ কলেজ",
        englishName: "Baruch College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.baruch.cuny.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৬ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_19",
        name: "মার্সি কলেজ",
        englishName: "Mercy College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.mercy.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "-/-",
        ieltsScore: 6.5
    },
    {
        id: "ny_20",
        name: "পেস বিশ্ববিদ্যালয়",
        englishName: "Pace University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.pace.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১২ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const bostonUniversities: University[] = [
    {
        id: "boston_1",
        name: "বোস্টন বিশ্ববিদ্যালয়",
        englishName: "Boston University",
        country: "usa",
        city: "boston",
        location: "বোস্টন",
        logo: "https://www.bu.edu/favicon.ico",
        qsRank: 108,
        tuitionFee: "৬৪ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "boston_2",
        name: "নর্থইস্টার্ন বিশ্ববিদ্যালয়",
        englishName: "Northeastern University",
        country: "usa",
        city: "boston",
        location: "বোস্টন",
        logo: "https://www.northeastern.edu/favicon.ico",
        qsRank: 375,
        tuitionFee: "৬১ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "boston_3",
        name: "বোস্টন কলেজ",
        englishName: "Boston College",
        country: "usa",
        city: "boston",
        location: "বোস্টন",
        logo: "https://www.bc.edu/favicon.ico",
        qsRank: 631,
        tuitionFee: "৬৬ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "boston_4",
        name: "সাফোক বিশ্ববিদ্যালয়",
        englishName: "Suffolk University",
        country: "usa",
        city: "boston",
        location: "বোস্টন",
        logo: "https://www.suffolk.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "৪৬ লাখ টাকা/বছর",
        ieltsScore: 6.5
    }
];
const sanFranciscoUniversities: University[] = [
    {
        id: "sf_1",
        name: "ইউনিভার্সিটি অফ ক্যালিফোর্নিয়া, সান ফ্রান্সিসকো",
        englishName: "University of California, San Francisco",
        country: "usa",
        city: "san-francisco",
        location: "সান ফ্রান্সিসকো",
        logo: "https://www.ucsf.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "৬০ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "sf_2",
        name: "সান ফ্রান্সিসকো স্টেট বিশ্ববিদ্যালয়",
        englishName: "San Francisco State University",
        country: "usa",
        city: "san-francisco",
        location: "সান ফ্রান্সিসকো",
        logo: "https://www.sfsu.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "২০ লাখ টাকা/বছর",
        ieltsScore: 6.5
    }
];
const washingtonDCUniversities: University[] = [
    {
        id: "dc_1",
        name: "হাওয়ার্ড বিশ্ববিদ্যালয়",
        englishName: "Howard University",
        country: "usa",
        city: "washington-dc",
        location: "ওয়াশিংটন ডিসি",
        logo: "https://www.howard.edu/favicon.ico",
        qsRank: 104,
        tuitionFee: "২৮ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "dc_2",
        name: "দ্য ক্যাথলিক ইউনিভার্সিটি অফ আমেরিকা",
        englishName: "The Catholic University of America",
        country: "usa",
        city: "washington-dc",
        location: "ওয়াশিংটন ডিসি",
        logo: "https://www.catholic.edu/favicon.ico",
        qsRank: 176,
        tuitionFee: "৫৫ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "dc_3",
        name: "জর্জ ওয়াশিংটন বিশ্ববিদ্যালয়",
        englishName: "George Washington University",
        country: "usa",
        city: "washington-dc",
        location: "ওয়াশিংটন ডিসি",
        logo: "https://www.gwu.edu/favicon.ico",
        qsRank: 214,
        tuitionFee: "৬১ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "dc_4",
        name: "ইউনিভার্সিটি অফ দ্য ডিস্ট্রিক্ট অফ কলম্বিয়া",
        englishName: "University of the District of Columbia",
        country: "usa",
        city: "washington-dc",
        location: "ওয়াশিংটন ডিসি",
        logo: "https://www.udc.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "২০ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const losAngelesUniversities: University[] = [
    {
        id: "la_1",
        name: "ইউনিভার্সিটি অফ ক্যালিফোর্নিয়া, লস এঞ্জেলেস",
        englishName: "University of California, Los Angeles",
        country: "usa",
        city: "los-angeles",
        location: "লস এঞ্জেলেস",
        logo: "https://www.ucla.edu/favicon.ico",
        qsRank: 29,
        tuitionFee: "৭৩ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "la_2",
        name: "লয়োলা মেরিমাউন্ট বিশ্ববিদ্যালয়",
        englishName: "Loyola Marymount University",
        country: "usa",
        city: "los-angeles",
        location: "লস এঞ্জেলেস",
        logo: "https://www.lmu.edu/favicon.ico",
        qsRank: 76,
        tuitionFee: "৬০ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "la_3",
        name: "ইউনিভার্সিটি অফ সাউদার্ন ক্যালিফোর্নিয়া",
        englishName: "University of Southern California",
        country: "usa",
        city: "los-angeles",
        location: "লস এঞ্জেলেস",
        logo: "https://www.usc.edu/favicon.ico",
        qsRank: 116,
        tuitionFee: "৬৭ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "la_4",
        name: "ক্যালিফোর্নিয়া স্টেট ইউনিভার্সিটি, লস এঞ্জেলেস",
        englishName: "California State University, Los Angeles",
        country: "usa",
        city: "los-angeles",
        location: "লস এঞ্জেলেস",
        logo: "https://www.calstatela.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৯ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const berlinUniversities: University[] = [
    {
        id: "berlin_1",
        name: "ফ্রাইয়ে ইউনিভার্সিট্যাট বার্লিন",
        englishName: "Freie Universität Berlin",
        country: "germany",
        city: "berlin",
        location: "বার্লিন",
        logo: "https://www.fu-berlin.de/favicon.ico",
        qsRank: 97,
        tuitionFee: "-/-",
        ieltsScore: 6.5
    },
    {
        id: "berlin_2",
        name: "হুমবোল্ট-ইউনিভার্সিট্যাট জু বার্লিন",
        englishName: "Humboldt-Universität zu Berlin",
        country: "germany",
        city: "berlin",
        location: "বার্লিন",
        logo: "https://www.hu-berlin.de/favicon.ico",
        qsRank: 126,
        tuitionFee: "-/-",
        ieltsScore: 6.5
    },
    {
        id: "berlin_3",
        name: "টেকনিশে ইউনিভার্সিট্যাট বার্লিন",
        englishName: "Technische Universität Berlin",
        country: "germany",
        city: "berlin",
        location: "বার্লিন",
        logo: "https://www.tu-berlin.de/favicon.ico",
        qsRank: 145,
        tuitionFee: "-/-",
        ieltsScore: 6.0
    },
    {
        id: "berlin_4",
        name: "বার্ড কলেজ বার্লিন",
        englishName: "Bard College Berlin",
        country: "germany",
        city: "berlin",
        location: "বার্লিন",
        logo: "https://www.berlin.bard.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "৩০ লাখ টাকা/বছর",
        ieltsScore: 7.0
    }
];
const munichUniversities: University[] = [
    {
        id: "munich_1",
        name: "টেকনিকাল ইউনিভার্সিটি অফ মিউনিখ",
        englishName: "Technical University of Munich",
        country: "germany",
        city: "munich",
        location: "মিউনিখ",
        logo: "https://www.tum.de/favicon.ico",
        qsRank: 97,
        tuitionFee: "৭ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "munich_2",
        name: "লুডভিগ-ম্যাক্সিমিলিয়ানস ইউনিভার্সিট্যাট মিউনিখ",
        englishName: "Ludwig-Maximilians-Universität München",
        country: "germany",
        city: "munich",
        location: "মিউনিখ",
        logo: "https://www.lmu.de/favicon.ico",
        qsRank: 55,
        tuitionFee: "-/-",
        ieltsScore: 6.5
    }
];
const hamburgUniversities: University[] = [
    {
        id: "hamburg_1",
        name: "ইউনিভার্সিটি অফ হামবুর্গ",
        englishName: "University of Hamburg",
        country: "germany",
        city: "hamburg",
        location: "হামবুর্গ",
        logo: "https://www.uni-hamburg.de/favicon.ico",
        qsRank: 191,
        tuitionFee: "-/-",
        ieltsScore: 6.5
    },
    {
        id: "hamburg_2",
        name: "হামবুর্গ ইউনিভার্সিটি অফ টেকনোলজি",
        englishName: "Hamburg University of Technology",
        country: "germany",
        city: "hamburg",
        location: "হামবুর্গ",
        logo: "https://www.tuhh.de/favicon.ico",
        qsRank: 696,
        tuitionFee: "-/-",
        ieltsScore: 6.0
    },
    {
        id: "hamburg_3",
        name: "কুহনে লজিস্টিকস ইউনিভার্সিটি",
        englishName: "Kühne Logistics University",
        country: "germany",
        city: "hamburg",
        location: "হামবুর্গ",
        logo: "https://www.klu.org/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৭ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "hamburg_4",
        name: "হাফেনসিটি ইউনিভার্সিটি হামবুর্গ",
        englishName: "HafenCity University Hamburg",
        country: "germany",
        city: "hamburg",
        location: "হামবুর্গ",
        logo: "https://www.hcu-hamburg.de/favicon.ico",
        qsRank: 159,
        tuitionFee: "-/-",
        ieltsScore: 6.5
    }
];
const frankfurtUniversities: University[] = [
    {
        id: "frankfurt_1",
        name: "গ্যোটে ইউনিভার্সিটি ফ্রাঙ্কফুর্ট",
        englishName: "Goethe University Frankfurt",
        country: "germany",
        city: "frankfurt",
        location: "ফ্রাঙ্কফুর্ট আম মাইন",
        logo: "https://www.uni-frankfurt.de/favicon.ico",
        qsRank: 316,
        tuitionFee: "-/-",
        ieltsScore: 6.5
    },
    {
        id: "frankfurt_2",
        name: "ফ্রাঙ্কফুর্ট ইউনিভার্সিটি অফ অ্যাপ্লাইড সায়েন্সেস",
        englishName: "Frankfurt University of Applied Sciences",
        country: "germany",
        city: "frankfurt",
        location: "ফ্রাঙ্কফুর্ট আম মাইন",
        logo: "https://www.frankfurt-university.de/favicon.ico",
        qsRank: 300,
        tuitionFee: "-/-",
        ieltsScore: 6.0
    },
    {
        id: "frankfurt_3",
        name: "ফ্রাঙ্কফুর্ট স্কুল অফ ফাইন্যান্স অ্যান্ড ম্যানেজমেন্ট",
        englishName: "Frankfurt School of Finance & Management",
        country: "germany",
        city: "frankfurt",
        location: "ফ্রাঙ্কফুর্ট আম মাইন",
        logo: "https://www.frankfurt-school.de/favicon.ico",
        qsRank: 45,
        tuitionFee: "৪৫ লাখ টাকা/বছর",
        ieltsScore: 7.0
    }
];
const londonUniversities: University[] = [
    {
        id: "london_1",
        name: "রয়্যাল কলেজ অব আর্ট",
        englishName: "Royal College of Art",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.rca.ac.uk/favicon.ico",
        qsRank: 1,
        tuitionFee: "৩৪ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "london_2",
        name: "ইউনিভার্সিটি অব দ্য আর্টস লন্ডন",
        englishName: "University of the Arts London",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.arts.ac.uk/favicon.ico",
        qsRank: 2,
        tuitionFee: "৩৫ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "london_3",
        name: "ইম্পেরিয়াল কলেজ লন্ডন",
        englishName: "Imperial College London",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.imperial.ac.uk/favicon.ico",
        qsRank: 2,
        tuitionFee: "৫১ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "london_4",
        name: "লন্ডন বিসনেস স্কুল",
        englishName: "London Business School",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.london.edu/favicon.ico",
        qsRank: 4,
        tuitionFee: "১৪৫ লাখ টাকা/বছর",
        ieltsScore: 7.5
    },
    {
        id: "london_5",
        name: "ইউনিভার্সিটি কলেজ লন্ডন",
        englishName: "University College London",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.ucl.ac.uk/favicon.ico",
        qsRank: 9,
        tuitionFee: "৫০ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "london_6",
        name: "কিংস কলেজ লন্ডন",
        englishName: "King's College London",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.kcl.ac.uk/favicon.ico",
        qsRank: 40,
        tuitionFee: "৪৫ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "london_7",
        name: "লন্ডন বিশ্ববিদ্যালয়",
        englishName: "University of London",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.london.ac.uk/favicon.ico",
        qsRank: 44,
        tuitionFee: "২০ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "london_8",
        name: "দ্য লন্ডন স্কুল অব ইকোনমিক্স অ্যান্ড পলিটিক্যাল সায়েন্স",
        englishName: "The London School of Economics and Political Science",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.lse.ac.uk/favicon.ico",
        qsRank: 45,
        tuitionFee: "৩৫ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "london_9",
        name: "কুইন মেরি ইউনিভার্সিটি অব লন্ডন",
        englishName: "Queen Mary University of London",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.qmul.ac.uk/favicon.ico",
        qsRank: 145,
        tuitionFee: "৩২ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "london_10",
        name: "লন্ডন স্কুল অব হাইজিন অ্যান্ড ট্রপিক্যাল মেডিসিন",
        englishName: "London School of Hygiene and Tropical Medicine",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.lshtm.ac.uk/favicon.ico",
        qsRank: 279,
        tuitionFee: "২৮ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "london_11",
        name: "ব্রুনেল বিশ্ববিদ্যালয় লন্ডন",
        englishName: "Brunel University London",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.brunel.ac.uk/favicon.ico",
        qsRank: 343,
        tuitionFee: "২৬ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "london_12",
        name: "SOAS, লন্ডন বিশ্ববিদ্যালয়",
        englishName: "SOAS, University of London",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.soas.ac.uk/favicon.ico",
        qsRank: 379,
        tuitionFee: "২৯ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "london_13",
        name: "কিংস্টন বিশ্ববিদ্যালয়",
        englishName: "Kingston University",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.kingston.ac.uk/favicon.ico",
        qsRank: 601,
        tuitionFee: "২১ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "london_14",
        name: "ওয়েস্টমিনস্টার বিশ্ববিদ্যালয়",
        englishName: "University of Westminster",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.westminster.ac.uk/favicon.ico",
        qsRank: 651,
        tuitionFee: "২০ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "london_15",
        name: "লন্ডন সাউথ ব্যাংক বিশ্ববিদ্যালয়",
        englishName: "London South Bank University",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.lsbu.ac.uk/favicon.ico",
        qsRank: 1201,
        tuitionFee: "২১ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "london_16",
        name: "সিটি সেন্ট জর্জ'স, লন্ডন বিশ্ববিদ্যালয়",
        englishName: "City St George's, University of London",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.city.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "৫৫ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "london_17",
        name: "রয়্যাল কলেজ অব মিউজিক",
        englishName: "Royal College of Music",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.rcm.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "৩৬ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "london_18",
        name: "গ্রিনউইচ বিশ্ববিদ্যালয়",
        englishName: "University of Greenwich",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.gre.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "-/-",
        ieltsScore: 6.0
    },
    {
        id: "london_19",
        name: "ইস্ট লন্ডন বিশ্ববিদ্যালয়",
        englishName: "University of East London",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.uel.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "২১ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "london_20",
        name: "দ্য ইউনিভার্সিটি অব ল'",
        englishName: "The University of Law",
        country: "uk",
        city: "london",
        location: "লন্ডন",
        logo: "https://www.law.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "২২ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const manchesterUniversities: University[] = [
    {
        id: "manchester_1",
        name: "ম্যানচেস্টার বিশ্ববিদ্যালয়",
        englishName: "University of Manchester",
        country: "uk",
        city: "manchester",
        location: "ম্যানচেস্টার",
        logo: "https://www.manchester.ac.uk/favicon.ico",
        qsRank: 32,
        tuitionFee: "২৬ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "manchester_2",
        name: "ম্যানচেস্টার মেট্রোপলিটন বিশ্ববিদ্যালয়",
        englishName: "Manchester Metropolitan University",
        country: "uk",
        city: "manchester",
        location: "ম্যানচেস্টার",
        logo: "https://www.mmu.ac.uk/favicon.ico",
        qsRank: 801,
        tuitionFee: "২৬ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "manchester_3",
        name: "রয়্যাল নর্দার্ন কলেজ অব মিউজিক",
        englishName: "Royal Northern College of Music",
        country: "uk",
        city: "manchester",
        location: "ম্যানচেস্টার",
        logo: "https://www.rncm.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "৩৭ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const edinburghUniversities: University[] = [
    {
        id: "edinburgh_1",
        name: "এডিনবার্গ বিশ্ববিদ্যালয়",
        englishName: "University of Edinburgh",
        country: "uk",
        city: "edinburgh",
        location: "এডিনবার্গ",
        logo: "https://www.ed.ac.uk/favicon.ico",
        qsRank: 22,
        tuitionFee: "৪৪ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "edinburgh_2",
        name: "হেরিয়ট-ওয়াট বিশ্ববিদ্যালয়",
        englishName: "Heriot-Watt University",
        country: "uk",
        city: "edinburgh",
        location: "এডিনবার্গ",
        logo: "https://www.hw.ac.uk/favicon.ico",
        qsRank: 281,
        tuitionFee: "-/-",
        ieltsScore: 6.0
    },
    {
        id: "edinburgh_3",
        name: "কুইন মার্গারেট বিশ্ববিদ্যালয়",
        englishName: "Queen Margaret University",
        country: "uk",
        city: "edinburgh",
        location: "এডিনবার্গ",
        logo: "https://www.qmu.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৪ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "edinburgh_4",
        name: "স্কটল্যান্ডস রুরাল কলেজ",
        englishName: "Scotland's Rural College",
        country: "uk",
        city: "edinburgh",
        location: "এডিনবার্গ",
        logo: "https://www.sruc.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "২১ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "edinburgh_5",
        name: "এডিনবার্গ ন্যাপিয়ার বিশ্ববিদ্যালয়",
        englishName: "Edinburgh Napier University",
        country: "uk",
        city: "edinburgh",
        location: "এডিনবার্গ",
        logo: "https://www.napier.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "২৩ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const leedsUniversities: University[] = [
    {
        id: "leeds_1",
        name: "লিডস বিশ্ববিদ্যালয়",
        englishName: "University of Leeds",
        country: "uk",
        city: "leeds",
        location: "লিডস",
        logo: "https://www.leeds.ac.uk/favicon.ico",
        qsRank: 75,
        tuitionFee: "৩১ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "leeds_2",
        name: "লিডস বেকেট বিশ্ববিদ্যালয়",
        englishName: "Leeds Beckett University",
        country: "uk",
        city: "leeds",
        location: "লিডস",
        logo: "https://www.leedsbeckett.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৫ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "leeds_3",
        name: "লিডস ট্রিনিটি বিশ্ববিদ্যালয়",
        englishName: "Leeds Trinity University",
        country: "uk",
        city: "leeds",
        location: "লিডস",
        logo: "https://www.leedstrinity.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৬ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "leeds_4",
        name: "লিডস আর্টস বিশ্ববিদ্যালয়",
        englishName: "Leeds Arts University",
        country: "uk",
        city: "leeds",
        location: "লিডস",
        logo: "https://www.leeds-art.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১১ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "leeds_5",
        name: "লিডস কনসারভেটোয়ার",
        englishName: "Leeds Conservatoire",
        country: "uk",
        city: "leeds",
        location: "লিডস",
        logo: "https://www.leedsconservatoire.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "২৬ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "leeds_6",
        name: "নর্দার্ন স্কুল অব কনটেম্পোরারি ডান্স",
        englishName: "Northern School of Contemporary Dance",
        country: "uk",
        city: "leeds",
        location: "লিডস",
        logo: "https://www.nscd.ac.uk/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "২৮ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const vancouverUniversities: University[] = [
    {
        id: "vancouver_1",
        name: "ব্রিটিশ কলাম্বিয়া বিশ্ববিদ্যালয়",
        englishName: "University of British Columbia",
        country: "canada",
        city: "vancouver",
        location: "ভাঙ্কুভার",
        logo: "https://www.ubc.ca/favicon.ico",
        qsRank: 34,
        tuitionFee: "৩৪ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "vancouver_2",
        name: "এমিলি কার ইউনিভার্সিটি অব আর্ট + ডিজাইন",
        englishName: "Emily Carr University of Art + Design",
        country: "canada",
        city: "vancouver",
        location: "ভাঙ্কুভার",
        logo: "https://www.ecuad.ca/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৬ লাখ টাকা/বছর",
        ieltsScore: 6.5
    }
];
const montrealUniversities: University[] = [
    {
        id: "montreal_1",
        name: "ম্যাকগিল বিশ্ববিদ্যালয়",
        englishName: "McGill University",
        country: "canada",
        city: "montreal",
        location: "মন্ট্রিল",
        logo: "https://www.mcgill.ca/favicon.ico",
        qsRank: 30,
        tuitionFee: "৩৫ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "montreal_2",
        name: "মন্ট্রিল বিশ্ববিদ্যালয়",
        englishName: "University of Montreal",
        country: "canada",
        city: "montreal",
        location: "মন্ট্রিল",
        logo: "https://www.umontreal.ca/favicon.ico",
        qsRank: 141,
        tuitionFee: "২০ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "montreal_3",
        name: "কনকর্ডিয়া বিশ্ববিদ্যালয়",
        englishName: "Concordia University",
        country: "canada",
        city: "montreal",
        location: "মন্ট্রিল",
        logo: "https://www.concordia.ca/favicon.ico",
        qsRank: 456,
        tuitionFee: "১৫ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "montreal_4",
        name: "একল দে টেকনোলজি সুপেরিয়র",
        englishName: "École de technologie supérieure",
        country: "canada",
        city: "montreal",
        location: "মন্ট্রিল",
        logo: "https://www.etsmtl.ca/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৩ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "montreal_5",
        name: "ইউনিভার্সিতে দু কুইবেক আ মন্ট্রিল",
        englishName: "Université du Québec à Montréal",
        country: "canada",
        city: "montreal",
        location: "মন্ট্রিল",
        logo: "https://www.uqam.ca/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৫ লাখ টাকা/বছর",
        ieltsScore: 6.5
    }
];
const ottawaUniversities: University[] = [
    {
        id: "ottawa_1",
        name: "অটোয়া বিশ্ববিদ্যালয়",
        englishName: "University of Ottawa",
        country: "canada",
        city: "ottawa",
        location: "অটোয়া",
        logo: "https://www.uottawa.ca/favicon.ico",
        qsRank: 203,
        tuitionFee: "১৮ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "ottawa_2",
        name: "কার্লেটন বিশ্ববিদ্যালয়",
        englishName: "Carleton University",
        country: "canada",
        city: "ottawa",
        location: "অটোয়া",
        logo: "https://www.carleton.ca/favicon.ico",
        qsRank: 651,
        tuitionFee: "-/-",
        ieltsScore: 6.5
    },
    {
        id: "ottawa_3",
        name: "টেলফার স্কুল অব ম্যানেজমেন্ট",
        englishName: "Telfer School of Management",
        country: "canada",
        city: "ottawa",
        location: "অটোয়া",
        logo: "https://www.uottawa.ca/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "২৫ লাখ টাকা/বছর",
        ieltsScore: 6.5
    }
];
const calgaryUniversities: University[] = [
    {
        id: "calgary_1",
        name: "ক্যালগারি বিশ্ববিদ্যালয়",
        englishName: "University of Calgary",
        country: "canada",
        city: "calgary",
        location: "ক্যালগারি",
        logo: "https://www.ucalgary.ca/favicon.ico",
        qsRank: 182,
        tuitionFee: "২ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "calgary_2",
        name: "মাউন্ট রয়্যাল বিশ্ববিদ্যালয়",
        englishName: "Mount Royal University",
        country: "canada",
        city: "calgary",
        location: "ক্যালগারি",
        logo: "https://www.mtroyal.ca/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১২ লাখ টাকা/বছর",
        ieltsScore: 6.5
    }
];
const kingstonUniversities: University[] = [
    {
        id: "kingston_1",
        name: "কুইন্স বিশ্ববিদ্যালয়",
        englishName: "Queen's University",
        country: "canada",
        city: "kingston",
        location: "কিংস্টন",
        logo: "https://www.queensu.ca/favicon.ico",
        qsRank: 209,
        tuitionFee: "১৯ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "kingston_2",
        name: "রয়্যাল মিলিটারি কলেজ অব কানাডা",
        englishName: "Royal Military College of Canada",
        country: "canada",
        city: "kingston",
        location: "কিংস্টন",
        logo: "https://www.rmc-cmr.ca/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১২ লাখ টাকা/বছর",
        ieltsScore: 6.5
    }
];
const melbourneUniversities: University[] = [
    {
        id: "melbourne_1",
        name: "মেলবোর্ন বিশ্ববিদ্যালয়",
        englishName: "University of Melbourne",
        country: "australia",
        city: "melbourne",
        location: "মেলবোর্ন",
        logo: "https://www.unimelb.edu.au/favicon.ico",
        qsRank: 14,
        tuitionFee: "২১ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "melbourne_2",
        name: "মনাশ বিশ্ববিদ্যালয়",
        englishName: "Monash University",
        country: "australia",
        city: "melbourne",
        location: "মেলবোর্ন",
        logo: "https://www.monash.edu/favicon.ico",
        qsRank: 42,
        tuitionFee: "১৯ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "melbourne_3",
        name: "আরএমআইটি বিশ্ববিদ্যালয়",
        englishName: "RMIT University",
        country: "australia",
        city: "melbourne",
        location: "মেলবোর্ন",
        logo: "https://www.rmit.edu.au/favicon.ico",
        qsRank: 140,
        tuitionFee: "১৪ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "melbourne_4",
        name: "ডেকিন বিশ্ববিদ্যালয়",
        englishName: "Deakin University",
        country: "australia",
        city: "melbourne",
        location: "মেলবোর্ন",
        logo: "https://www.deakin.edu.au/favicon.ico",
        qsRank: 266,
        tuitionFee: "২০ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "melbourne_5",
        name: "সুইনবার্ন ইনস্টিটিউট অব টেকনোলজি",
        englishName: "Swinburne Institute of Technology",
        country: "australia",
        city: "melbourne",
        location: "মেলবোর্ন",
        logo: "https://www.swinburne.edu.au/favicon.ico",
        qsRank: 285,
        tuitionFee: "২১ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "melbourne_6",
        name: "লা ট্রোব বিশ্ববিদ্যালয়",
        englishName: "La Trobe University",
        country: "australia",
        city: "melbourne",
        location: "মেলবোর্ন",
        logo: "https://www.latrobe.edu.au/favicon.ico",
        qsRank: 316,
        tuitionFee: "১৪ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "melbourne_7",
        name: "ভিক্টোরিয়া বিশ্ববিদ্যালয়",
        englishName: "Victoria University",
        country: "australia",
        city: "melbourne",
        location: "মেলবোর্ন",
        logo: "https://www.vu.edu.au/favicon.ico",
        qsRank: 651,
        tuitionFee: "১৮ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "melbourne_8",
        name: "ডিভিনিটি বিশ্ববিদ্যালয়",
        englishName: "Divinity University",
        country: "australia",
        city: "melbourne",
        location: "মেলবোর্ন",
        logo: "https://www.divinity.edu.au/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১২ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const sydneyUniversities: University[] = [
    {
        id: "sydney_1",
        name: "ইউনিভার্সিটি অব নিউ সাউথ ওয়েলস",
        englishName: "University of New South Wales",
        country: "australia",
        city: "sydney",
        location: "সিডনি",
        logo: "https://www.unsw.edu.au/favicon.ico",
        qsRank: 19,
        tuitionFee: "২৭ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "sydney_2",
        name: "সিডনি বিশ্ববিদ্যালয়",
        englishName: "University of Sydney",
        country: "australia",
        city: "sydney",
        location: "সিডনি",
        logo: "https://www.sydney.edu.au/favicon.ico",
        qsRank: 19,
        tuitionFee: "২৯ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "sydney_3",
        name: "ইউনিভার্সিটি অব টেকনোলজি সিডনি",
        englishName: "University of Technology Sydney",
        country: "australia",
        city: "sydney",
        location: "সিডনি",
        logo: "https://www.uts.edu.au/favicon.ico",
        qsRank: 90,
        tuitionFee: "৪২ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "sydney_4",
        name: "ম্যাককোয়ারি বিশ্ববিদ্যালয়",
        englishName: "Macquarie University",
        country: "australia",
        city: "sydney",
        location: "সিডনি",
        logo: "https://www.mq.edu.au/favicon.ico",
        qsRank: 130,
        tuitionFee: "২৮ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "sydney_5",
        name: "ওয়েস্টার্ন সিডনি বিশ্ববিদ্যালয়",
        englishName: "Western Sydney University",
        country: "australia",
        city: "sydney",
        location: "সিডনি",
        logo: "https://www.westernsydney.edu.au/favicon.ico",
        qsRank: 641,
        tuitionFee: "২৩ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const brisbaneUniversities: University[] = [
    {
        id: "brisbane_1",
        name: "কুইন্সল্যান্ড বিশ্ববিদ্যালয়",
        englishName: "University of Queensland",
        country: "australia",
        city: "brisbane",
        location: "ব্রিসবেন",
        logo: "https://www.uq.edu.au/favicon.ico",
        qsRank: 43,
        tuitionFee: "২২ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "brisbane_2",
        name: "কুইন্সল্যান্ড ইউনিভার্সিটি অব টেকনোলজি",
        englishName: "Queensland University of Technology",
        country: "australia",
        city: "brisbane",
        location: "ব্রিসবেন",
        logo: "https://www.qut.edu.au/favicon.ico",
        qsRank: 189,
        tuitionFee: "২২ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "brisbane_3",
        name: "গ্রিফিথ বিশ্ববিদ্যালয়",
        englishName: "Griffith University",
        country: "australia",
        city: "brisbane",
        location: "ব্রিসবেন",
        logo: "https://www.griffith.edu.au/favicon.ico",
        qsRank: 300,
        tuitionFee: "২১ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "brisbane_4",
        name: "অস্ট্রেলিয়ান ক্যাথলিক বিশ্ববিদ্যালয়",
        englishName: "Australian Catholic University",
        country: "australia",
        city: "brisbane",
        location: "ব্রিসবেন",
        logo: "https://www.acu.edu.au/favicon.ico",
        qsRank: 801,
        tuitionFee: "১৫ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const adelaideUniversities: University[] = [
    {
        id: "adelaide_1",
        name: "এডিলেড বিশ্ববিদ্যালয়",
        englishName: "University of Adelaide",
        country: "australia",
        city: "adelaide",
        location: "এডিলেড",
        logo: "https://www.adelaide.edu.au/favicon.ico",
        qsRank: 89,
        tuitionFee: "৩০ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "adelaide_2",
        name: "ইউনিভার্সিটি অব সাউথ অস্ট্রেলিয়া",
        englishName: "University of South Australia",
        country: "australia",
        city: "adelaide",
        location: "এডিলেড",
        logo: "https://www.unisa.edu.au/favicon.ico",
        qsRank: 326,
        tuitionFee: "২১ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "adelaide_3",
        name: "ফ্লিন্ডার্স বিশ্ববিদ্যালয়",
        englishName: "Flinders University",
        country: "australia",
        city: "adelaide",
        location: "এডিলেড",
        logo: "https://www.flinders.edu.au/favicon.ico",
        qsRank: 431,
        tuitionFee: "৮ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "adelaide_4",
        name: "টরেন্স ইউনিভার্সিটি অস্ট্রেলিয়া",
        englishName: "Torrens University Australia",
        country: "australia",
        city: "adelaide",
        location: "এডিলেড",
        logo: "https://www.torrens.edu.au/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৮ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const perthUniversities: University[] = [
    {
        id: "perth_1",
        name: "ইউনিভার্সিটি অব ওয়েস্টার্ন অস্ট্রেলিয়া",
        englishName: "University of Western Australia",
        country: "australia",
        city: "perth",
        location: "পার্থ",
        logo: "https://www.uwa.edu.au/favicon.ico",
        qsRank: 72,
        tuitionFee: "২৫ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "perth_2",
        name: "কার্টিন বিশ্ববিদ্যালয়",
        englishName: "Curtin University",
        country: "australia",
        city: "perth",
        location: "পার্থ",
        logo: "https://www.curtin.edu.au/favicon.ico",
        qsRank: 183,
        tuitionFee: "১৪ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "perth_3",
        name: "মারডক বিশ্ববিদ্যালয়",
        englishName: "Murdoch University",
        country: "australia",
        city: "perth",
        location: "পার্থ",
        logo: "https://www.murdoch.edu.au/favicon.ico",
        qsRank: 431,
        tuitionFee: "২৩ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "perth_4",
        name: "এডিথ কোয়ান বিশ্ববিদ্যালয়",
        englishName: "Edith Cowan University",
        country: "australia",
        city: "perth",
        location: "পার্থ",
        logo: "https://www.ecu.edu.au/favicon.ico",
        qsRank: 651,
        tuitionFee: "১৪ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const dublinUniversities: University[] = [
    {
        id: "dublin_1",
        name: "ট্রিনিটি কলেজ ডাবলিন",
        englishName: "Trinity College Dublin",
        country: "ireland",
        city: "dublin",
        location: "ডাবলিন",
        logo: "https://www.tcd.ie/favicon.ico",
        qsRank: 98,
        tuitionFee: "২৫ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "dublin_2",
        name: "ইউনিভার্সিটি কলেজ ডাবলিন",
        englishName: "University College Dublin",
        country: "ireland",
        city: "dublin",
        location: "ডাবলিন",
        logo: "https://www.ucd.ie/favicon.ico",
        qsRank: 171,
        tuitionFee: "২৩ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "dublin_3",
        name: "ডাবলিন সিটি বিশ্ববিদ্যালয়",
        englishName: "Dublin City University",
        country: "ireland",
        city: "dublin",
        location: "ডাবলিন",
        logo: "https://www.dcu.ie/favicon.ico",
        qsRank: 436,
        tuitionFee: "১৫ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "dublin_4",
        name: "টেকনোলজিকাল ইউনিভার্সিটি ডাবলিন",
        englishName: "Technological University Dublin",
        country: "ireland",
        city: "dublin",
        location: "ডাবলিন",
        logo: "https://www.tudublin.ie/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৪ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const corkUniversities: University[] = [
    {
        id: "cork_1",
        name: "ইউনিভার্সিটি কলেজ কর্ক",
        englishName: "University College Cork",
        country: "ireland",
        city: "cork",
        location: "কর্ক",
        logo: "https://www.ucc.ie/favicon.ico",
        qsRank: 292,
        tuitionFee: "১৯ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "cork_2",
        name: "মনস্টার টেকনোলজিকাল বিশ্ববিদ্যালয়",
        englishName: "Munster Technological University",
        country: "ireland",
        city: "cork",
        location: "কর্ক",
        logo: "https://www.mtu.ie/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৬ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const limerickUniversities: University[] = [
    {
        id: "limerick_1",
        name: "লিমেরিক বিশ্ববিদ্যালয়",
        englishName: "University of Limerick",
        country: "ireland",
        city: "limerick",
        location: "লিমেরিক",
        logo: "https://www.ul.ie/favicon.ico",
        qsRank: 531,
        tuitionFee: "১৮ লাখ টাকা/বছর",
        ieltsScore: 6.5
    }
];
const galwayUniversities: University[] = [
    {
        id: "galway_1",
        name: "গালওয়ে বিশ্ববিদ্যালয়",
        englishName: "University of Galway",
        country: "ireland",
        city: "galway",
        location: "গ্যালওয়ে",
        logo: "https://www.universityofgalway.ie/favicon.ico",
        qsRank: 531,
        tuitionFee: "-/-",
        ieltsScore: 6.5
    }
];






export const universities: University[] = [
    ...newYorkUniversities,
    ...bostonUniversities,
    ...sanFranciscoUniversities,
    ...washingtonDCUniversities,
    ...losAngelesUniversities,
    ...berlinUniversities,
    ...munichUniversities,
    ...hamburgUniversities,
    ...frankfurtUniversities,
    ...londonUniversities,
    ...manchesterUniversities,
    ...edinburghUniversities,
    ...leedsUniversities,
    ...vancouverUniversities,
    ...montrealUniversities,
    ...ottawaUniversities,
    ...calgaryUniversities,
    ...kingstonUniversities,
    ...melbourneUniversities,
    ...sydneyUniversities,
    ...brisbaneUniversities,
    ...adelaideUniversities,
    ...perthUniversities,
    ...dublinUniversities,
    ...corkUniversities,
    ...limerickUniversities,
    ...galwayUniversities

];