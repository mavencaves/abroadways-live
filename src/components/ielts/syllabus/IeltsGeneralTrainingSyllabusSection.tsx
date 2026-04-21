import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Alert, AlertDescription} from "@/components/ui/alert";

export default function IeltsGeneralTrainingSyllabusSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
                6. IELTS Exam Syllabus & Pattern for General Training Test
            </h2>

            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>Who is this test for?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        The <b>IELTS General Training test</b> is appropriate for you if you wish to migrate to an
                        English-speaking country
                        (Australia, Canada, New Zealand, UK).
                    </p>
                </CardContent>
            </Card>

            <Card className="mb-5">
                <CardHeader>
                    <CardTitle>What does it assess?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        The test assesses everyday English language skills you need in social situations and the
                        workplace.
                    </p>
                </CardContent>
            </Card>

            <Alert className="mb-6 bg-blue-100 border-blue-200">
                <AlertDescription className={"text-gray-900"}>
                    The IELTS General test format for <b>speaking and listening</b> sections is the same as the Academic
                    tests.
                </AlertDescription>
            </Alert>
        </section>
    );
}
