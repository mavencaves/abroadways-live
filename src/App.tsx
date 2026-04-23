import {Navigate, Route, Routes, useLocation} from "react-router";
import PublicLayout from "./layout/PublicLayout";
import {
    AboutPage,
    BlogPage,
    HomePage,
    IeltsBooksPage,
    ExamsPage,
    MavenCaveAi,
    SOP,
    VisaPredictor,
    IeltsOverviewPage,
    IeltsTypesPage,
    IeltsBlogLayout,
    IeltsEligibilityPage,
    IeltsResultsPage,
    IeltsRegistrationPage,
    IeltsSyllabus,
    SlotBookingPage,
    HarvardReact,
    LorMasters,
    AuthLayout,
    SignUpPage,
    LoginPage,
    CueCardPage,
    SOPPhD,
    Listening,
    Reading,
    Careers,
    KnowledgeCenter,
    MavencaveAdvantage,
    MavencaveFreeClass,
    IeltsExamDate,
    IeltsPractice,
    IeltsFees,
    IeltsTestCenters,
    Speaking,
    PracticeResources,
    Writing,
    StanfordUniversity,
    YaleUniversity,
    OxfordUniversity,
    CambridgeUniversity,
    MIT,
    CostPage,
    FinancePage,
    TOEFLPage,
    GREPage,
    PTEPage,
    HigherEducationPage,
    ResourcesPage,
    ContactPage,
    ColumbiaUniversity,
    DigestPage,
    CounsellorPage,
    UniversityOfBritishColumbia,
    McGillUniversity,
    UniversityOfAlberta,
    UniversityOfMontreal,
    UniversityOfOttawa,
    MonashUniversity,
    SydneyUniversity,
    QueenslandUniversity,
    MaccuireUniversity,
    MelboureUniversity,
    UniversityOfManchester,
    UniversityOfEdinburgh,
    KingsCollegeLondon,
    ImperialCollegeLondon,
    UniversityOfToronto,

} from "@/pages";
import useScrollToTop from "@/hooks/useScrollToTop.tsx";
import TopUniversities from "@/layout/TopUniversities.tsx";
import MastersTopCourses from "@/layout/MastersTopCourses.tsx";
import EventPage from "./components/EventPage/EventPage";
import GreBooks from "@/components/gre_books/GreBooks";
import DuolingoFees from "./components/Duolingo/DuolingFees";
import DuolingoGuidePage from "./components/Duolingo/DuolingoGuidePage";
import SampleQuestionPage from "./components/Duolingo/SampleQuestionPage";
import DuolingoSyllabusPage from "./components/Duolingo/DuolingoSyllabusPage";
import ToeflPrep from "@/components/TOEFL_pages/ToeflPrep";
import ToeflRegistration from "@/components/TOEFL_pages/ToeflRegistration";
import ToeflResult from "@/components/TOEFL_pages/ToeflResult";
import ToeflSyllabus from "@/components/TOEFL_pages/ToeflSyllabus";
import PteBooks from "@/components/pte_books/PteBooks";
import GmatOverviewPage from "./components/GMAT/GmatOverviewPage";
import GmatPrepPage from "./components/GMAT/GmatPrepPage";
import GmatRegistrationPage from "./components/GMAT/GmatRegistrationPage";
import GmatSampleQuesPage from "./components/GMAT/GmatSampleQuesPage";
import GmatSyllabusPage from "./components/GMAT/GmatSyllabusPage";
import SATEligibilityPage from "@/pages/SAT/SATEligibilityPage.tsx";
import SATRegistrationPage from "@/pages/SAT/SATRegistrationPage.tsx";
import SATSyllabusPage from "@/pages/SAT/SATSyllabusPage.tsx";
import SATPreparationPage from "@/pages/SAT/SATPreparationPage.tsx";
import IeltsMasterClass from "@/components/IELTS_masterclass/IeltsMasterClass.tsx";
import GRERegistrationPage from "@/pages/GRE/GRERegistrationPage.tsx";
import GRESyllabusPatternPage from "@/pages/GRE/GRESyllabusPage.tsx";
import GRESlotBookingPage from "@/pages/GRE/GRESlotBookingPage.tsx";
import GREPreparationPage from "@/pages/GRE/GREPreparationPage.tsx";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage.tsx";
import TermsAndConditionsPage from "@/pages/TermsAndConditionsPage.tsx";
import RefundPolicyPage from "@/pages/RefundPolicyPage.tsx";
import CGPACalculatorPage from "@/pages/CGPACalculatorPage.tsx";
import CounsellorHomePage from "./components/CounselorPage/CounsellorHomePage";

import ReferralPage from "./components/CounselorPage/ReferralPage";
import CounselingSection from "./components/CounselorPage/CouselingModal/CounselingSection";
import AdminDashboardLayout from "@/layout/AdminDashboardLayout.tsx";
import ProtectedRoute from "@/components/ProtectedRoute";
import UsersPage from "@/pages/dashboard/admin/UsersPage.tsx";
import BlogsPage from "./pages/dashboard/admin/BlogsPage";
import EventsPage from "./pages/dashboard/admin/EventsPage";
import DashboardOverview from "./pages/dashboard/admin/DashBoardOverview";
import BlogEditorPage from "./pages/dashboard/admin/BlogEditorPage";
import EventEditorPage from "./pages/dashboard/admin/EventEditorPage";
import MediaLibraryPage from "./pages/dashboard/admin/MediaLibraryPage";
import EligibilityFirstPage from "./pages/Elegibility/ElegibilityFirstPage";
import BookAseat from "./pages/BookAseat/BookAseat";
import HigherEducationRegionPage from "@/pages/HigherEducationRegionPage.tsx";
import StudyAbroadCountryPage from "@/pages/StudyAbroadCountryPage.tsx";
import CoursesLandingPage from "@/pages/CoursesLandingPage.tsx";
import BlogDetailPage from "@/pages/BlogDetailPage.tsx";
import InquiriesPage from "@/pages/dashboard/admin/InquiriesPage.tsx";

function getLegacyExamRedirect(pathname: string) {
    const normalizedPath = pathname.toLowerCase();
    const exactMatches: Record<string, string> = {
        "/study-abroad/exams": "/exams/overview",
        "/study-abroad/exams/ielts": "/exams/ielts/overview",
        "/study-abroad/exams/ielts/booklist": "/resources/books/ielts",
        "/study-abroad/exams/ielts/syllabus-pattern": "/exams/ielts/syllabus",
        "/study-abroad/exams/gre": "/exams/gre/overview",
        "/study-abroad/exams/gre/books": "/resources/books/gre",
        "/study-abroad/exams/gre/syllabus-pattern": "/exams/gre/syllabus",
        "/study-abroad/exams/sat": "/exams/sat/preparation",
        "/study-abroad/exams/pte": "/exams/pte/overview",
        "/study-abroad/exams/pte/books": "/resources/books/pte",
        "/study-abroad/exams/toefl": "/exams/toefl/overview",
        "/study-abroad/exams/toefl/results": "/exams/toefl/result",
    };

    if (exactMatches[normalizedPath]) {
        return exactMatches[normalizedPath];
    }

    if (normalizedPath.startsWith("/study-abroad/exams/ielts/")) {
        return normalizedPath.replace("/study-abroad/exams/ielts", "/exams/ielts");
    }

    if (normalizedPath.startsWith("/study-abroad/exams/gre/")) {
        const suffix = normalizedPath.replace("/study-abroad/exams/gre/", "");
        const supportedGreRoutes = new Set(["registration", "syllabus", "slot-booking", "preparation"]);
        return supportedGreRoutes.has(suffix) ? `/exams/gre/${suffix}` : "/exams/gre/overview";
    }

    if (normalizedPath.startsWith("/study-abroad/exams/toefl/")) {
        const suffix = normalizedPath.replace("/study-abroad/exams/toefl/", "");
        const supportedToeflRoutes: Record<string, string> = {
            registration: "/exams/toefl/registration",
            syllabus: "/exams/toefl/syllabus",
            preparation: "/exams/toefl/preparation",
            result: "/exams/toefl/result",
            results: "/exams/toefl/result",
        };

        return supportedToeflRoutes[suffix] ?? "/exams/toefl/overview";
    }

    if (normalizedPath.startsWith("/study-abroad/exams/sat/")) {
        const suffix = normalizedPath.replace("/study-abroad/exams/sat/", "");
        const supportedSatRoutes = new Set(["preparation", "eligibility", "registration", "syllabus"]);
        return supportedSatRoutes.has(suffix) ? `/exams/sat/${suffix}` : "/exams/sat/preparation";
    }

    if (normalizedPath.startsWith("/study-abroad/exams/pte/")) {
        return "/exams/pte/overview";
    }

    if (normalizedPath.startsWith("/study-abroad/exams/duolingo/")) {
        const suffix = normalizedPath.replace("/study-abroad/exams/duolingo/", "");
        const supportedDuolingoRoutes = new Set(["fees", "preparation", "sample", "syllabus"]);
        return supportedDuolingoRoutes.has(suffix) ? `/exams/duolingo/${suffix}` : "/exams/duolingo/preparation";
    }

    return "/exams/overview";
}

function LegacyExamAliasRedirect() {
    const { pathname } = useLocation();

    return <Navigate to={getLegacyExamRedirect(pathname)} replace />;
}

function App() {
    useScrollToTop()
    return (
        <Routes>
            <Route path={"/"} element={<PublicLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"about"} element={<AboutPage/>}/>
                <Route path={"blog"} element={<BlogPage/>}/>
                <Route path={"blog/:blogId"} element={<BlogDetailPage/>}/>
                <Route path={"higher-education"} element={<HigherEducationPage/>}/>
                <Route path={"higher-education/:region"} element={<HigherEducationRegionPage/>}/>
                <Route path={"study-abroad"} element={<HigherEducationPage/>}/>
                <Route path={"study-abroad/asia"} element={<HigherEducationRegionPage regionSlug="asia"/>}/>
                <Route path={"study-abroad/europe"} element={<HigherEducationRegionPage regionSlug="europe"/>}/>
                <Route path={"study-abroad/north-america"} element={<HigherEducationRegionPage regionSlug="north-america"/>}/>
                <Route path={"study-abroad/south-america"} element={<HigherEducationRegionPage regionSlug="south-america"/>}/>
                <Route path={"study-abroad/australia-oceania"} element={<HigherEducationRegionPage regionSlug="australia-oceania"/>}/>
                <Route path={"resources"} element={<ResourcesPage/>}/>
                <Route path={"contact"} element={<ContactPage/>}/>
                <Route path={"courses"} element={<CoursesLandingPage/>}/>

                <Route path={"bookseat"} element={<BookAseat/>}/>

                {/* blog details pages */}

                {/* cousellor pages */}
                <Route path={"/counsellor-home"} element={<CounsellorHomePage/>}/>
                <Route path={"/counsellor-modal"} element={<CounselingSection/>}/>
                <Route path={"/counsellor-referral"} element={<ReferralPage/>}/>

                {/*<Route path={"/study-abroad/usa/cities/new-york"} element={<StudyAbroad/>}/>*/}
                <Route path={"/study-abroad/:country/cities/:city"} element={<TopUniversities/>}/>
                <Route path={"study-abroad/:country/courses/:course"} element={<MastersTopCourses/>}/>
                <Route path={"abroadai"} element={<MavenCaveAi/>}/>
                <Route path={"abroadways-ai"} element={<MavenCaveAi/>}/>
                <Route path={"mavencave-ai"} element={<MavenCaveAi/>}/>
                <Route path={"study-abroad/exams"} element={<LegacyExamAliasRedirect/>}/>
                <Route path={"study-abroad/exams/*"} element={<LegacyExamAliasRedirect/>}/>
                <Route path={"resources/sop"} element={<SOP/>}/>
                <Route path={"resources/eligibility"} element={<EligibilityFirstPage/>}/>
                <Route element={<IeltsBlogLayout/>}>
                    <Route path={"/exams/ielts/overview"} element={<IeltsOverviewPage/>}/>
                    <Route path={"/exams/ielts/types"} element={<IeltsTypesPage/>}/>
                    <Route path={"/resources/books/ielts"} element={<IeltsBooksPage/>}/>
                    <Route path={"/exams/ielts/eligibility"} element={<IeltsEligibilityPage/>}/>
                    <Route path={"/exams/ielts/registration"} element={<IeltsRegistrationPage/>}/>
                    <Route path={"/exams/ielts/results"} element={<IeltsResultsPage/>}/>
                    <Route path={"/exams/ielts/syllabus"} element={<IeltsSyllabus/>}/>
                    <Route path={"/exams/ielts/slot-booking"} element={<SlotBookingPage/>}/>
                    <Route path={"/resources/recommendation-letter/masters"} element={<LorMasters/>}/>
                    <Route path={"/exams/ielts/practice/listening"} element={<Listening/>}/>
                    <Route path={"/exams/ielts/practice/reading"} element={<Reading/>}/>
                    <Route path={"/exams/ielts/dates"} element={<IeltsExamDate/>}/>
                    <Route path={"/exams/ielts/fees"} element={<IeltsFees/>}/>
                    <Route path={"/exams/ielts/centers"} element={<IeltsTestCenters/>}/>
                    <Route path={"/exams/ielts/practice/speaking"} element={<Speaking/>}/>
                    <Route path={"/exams/ielts/practice/writing"} element={<Writing/>}/>
                    <Route path={"/exams/ielts/practice/all-in-one"} element={<IeltsPractice/>}/>
                    <Route path={"/exams/toefl/overview"} element={<TOEFLPage/>}/>
                    <Route path={"/exams/gre/overview"} element={<GREPage/>}/>
                    <Route path={"/exams/sat/eligibility"} element={<SATEligibilityPage/>}/>
                    <Route path={"/exams/sat/registration"} element={<SATRegistrationPage/>}/>
                    <Route path={"/exams/sat/syllabus"} element={<SATSyllabusPage/>}/>
                    <Route path={"/exams/sat/preparation"} element={<SATPreparationPage/>}/>
                    <Route path={"/exams/pte/overview"} element={<PTEPage/>}/>
                    {/* Duolingo */}
                    <Route path={"/exams/duolingo/fees"} element={<DuolingoFees/>}/>
                    <Route path={"/exams/duolingo/preparation"} element={<DuolingoGuidePage/>}/>
                    <Route path={"/exams/duolingo/sample"} element={<SampleQuestionPage/>}/>
                    <Route path={"/exams/duolingo/syllabus"} element={<DuolingoSyllabusPage/>}/>
                    {/* GMAT */}
                    <Route path={"/exams/gmat/overview"} element={<GmatOverviewPage/>}/>
                    <Route path={"/exams/gmat/preparation"} element={<GmatPrepPage/>}/>
                    <Route path={"/exams/gmat/registration"} element={<GmatRegistrationPage/>}/>
                    <Route path={"/exams/gmat/sample-question"} element={<GmatSampleQuesPage/>}/>
                    <Route path={"/exams/gmat/syllabus"} element={<GmatSyllabusPage/>}/>

                    {/*GRE*/}
                    <Route path={"/exams/gre/registration"} element={<GRERegistrationPage/>}/>
                    <Route path={"/exams/gre/syllabus"} element={<GRESyllabusPatternPage/>}/>
                    <Route path={"/exams/gre/slot-booking"} element={<GRESlotBookingPage/>}/>
                    <Route path={"/exams/gre/preparation"} element={<GREPreparationPage/>}/>


                </Route>
                {/* USA */}
                <Route path="/study-abroad/usa/universities/stanford-university" element={<StanfordUniversity/>}/>
                <Route path="/study-abroad/usa/universities/yale-university" element={<YaleUniversity/>}/>
                <Route path="/study-abroad/usa/universities/columbia-university" element={<ColumbiaUniversity/>}/>
                <Route path="/study-abroad/usa/universities/mit" element={<MIT/>}/>

                {/* UK */}
                <Route path="/study-abroad/uk/universities/oxford-university" element={<OxfordUniversity/>}/>
                <Route path="/study-abroad/uk/universities/cambridge-university" element={<CambridgeUniversity/>}/>
                <Route path="/study-abroad/uk/universities/manchester-university" element={<UniversityOfManchester/>}/>
                <Route path="/study-abroad/uk/universities/edinburgh-university" element={<UniversityOfEdinburgh/>}/>
                <Route path="/study-abroad/uk/universities/kings-college-london" element={<KingsCollegeLondon/>}/>
                <Route path="/study-abroad/uk/universities/imperial-college-london" element={<ImperialCollegeLondon/>}/>

                {/* Canada */}
                <Route path="/study-abroad/canada/universities/ubc" element={<UniversityOfBritishColumbia/>}/>
                <Route path="/study-abroad/canada/universities/mcgill-university" element={<McGillUniversity/>}/>
                <Route path="/study-abroad/canada/universities/university-of-alberta" element={<UniversityOfAlberta/>}/>
                <Route path="/study-abroad/canada/universities/university-of-montreal"
                       element={<UniversityOfMontreal/>}/>
                <Route path="/study-abroad/canada/universities/university-of-ottawa" element={<UniversityOfOttawa/>}/>
                <Route path="/study-abroad/canada/universities/university-of-toronto" element={<UniversityOfToronto/>}/>

                {/* Australia */}
                <Route path="/study-abroad/australia/universities/macquarie-university"
                       element={<MaccuireUniversity/>}/>
                <Route path="/study-abroad/australia/universities/monash-university" element={<MonashUniversity/>}/>
                <Route path="/study-abroad/australia/universities/university-of-sydney" element={<SydneyUniversity/>}/>
                <Route path="/study-abroad/australia/universities/university-of-melbourne"
                       element={<MelboureUniversity/>}/>
                <Route path="/study-abroad/australia/universities/uq" element={<QueenslandUniversity/>}/>
                <Route path={"study-abroad/:countrySlug"} element={<StudyAbroadCountryPage/>}/>

                <Route element={<AuthLayout/>}>
                    <Route path={"/signup"} element={<SignUpPage/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                </Route>
                <Route path={"/visa-predictor"} element={<VisaPredictor/>}/>
                <Route path={"/ielts-cue-cards"} element={<CueCardPage/>}/>
                <Route path={"/exams/overview"} element={<ExamsPage/>}/>
                <Route path={"/resources/sop/phd"} element={<SOPPhD/>}/>
                <Route path={"/study-abroad/usa/universities/harvard-university"} element={<HarvardReact/>}/>
                <Route path={"/careers"} element={<Careers/>}/>
                <Route path={"/knowledge-center"} element={<KnowledgeCenter/>}/>
                <Route path={"/products/facilities"} element={<MavencaveAdvantage/>}/>
                <Route path={"/mavencave-freeClass"} element={<MavencaveFreeClass/>}/>
                <Route path={"/ielts-resources"} element={<PracticeResources/>}/>
                <Route path={"/calculator/cost"} element={<CostPage/>}/>
                <Route path={"/products/finance"} element={<FinancePage/>}/>
                <Route path={"/mavencave-digest"} element={<DigestPage/>}/>
                <Route path={"/testimonials/counseling"} element={<CounsellorPage/>}/>
                <Route path={"/event"} element={<EventPage/>}/>
                <Route path={"/resources/books/gre"} element={<GreBooks/>}/>
                <Route path={"/exams/toefl/registration"} element={<ToeflRegistration/>}/>
                <Route path={"/exams/toefl/syllabus"} element={<ToeflSyllabus/>}/>
                <Route path={"/exams/toefl/preparation"} element={<ToeflPrep/>}/>
                <Route path={"/exams/toefl/result"} element={<ToeflResult/>}/>
                <Route path={"/resources/books/pte"} element={<PteBooks/>}/>
                <Route path={"/offers/ielts-masterclass"} element={<IeltsMasterClass/>}/>
                <Route path={"/privacy-policy"} element={<PrivacyPolicyPage/>}/>
                <Route path={"/terms"} element={<TermsAndConditionsPage/>}/>
                <Route path={"/refund-policy"} element={<RefundPolicyPage/>}/>
                {/*Calculator*/}
                <Route path={"/calculator/cgpa"} element={<CGPACalculatorPage/>}/>

            </Route>
            <Route path={"/admin/dashboard"} element={<Navigate to="/dashboard" replace/>}/>
            <Route element={<ProtectedRoute requiredRoles={['admin', 'content-manager']}/>}>
            <Route path={"/dashboard"} element={<AdminDashboardLayout/>}>
                <Route index element={<DashboardOverview/>}/>
                <Route path={"users"} element={<UsersPage/>}/>
                <Route path={"blogs"} element={<BlogsPage/>}/>
                <Route path={"blogs/new"} element={<BlogEditorPage/>}/>
                <Route path={"blogs/:blogId/edit"} element={<BlogEditorPage/>}/>
                <Route path={"events"} element={<EventsPage/>}/>
                <Route path={"events/new"} element={<EventEditorPage/>}/>
                <Route path={"events/:eventId/edit"} element={<EventEditorPage/>}/>
                <Route path={"media"} element={<MediaLibraryPage/>}/>
                <Route path={"inquiries"} element={<InquiriesPage/>}/>
            </Route>
            </Route>
        </Routes>
    )
}

export default App
