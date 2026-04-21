import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function IeltsAcademicListeningSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">

            <h2 className="text-2xl md:text-3xl font-bold mb-5">
                4. IELTS Exam Pattern & Syllabus for Academic Listening
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                You will have four tasks in the <b>IELTS Listening</b> section, each with a unique recording.
            </p>

            <Card className="mb-5 px-2">
                <CardHeader className="px-2">
                    <CardTitle>IELTS Listening Section</CardTitle>
                </CardHeader>
                <CardContent className="px-2">
                    <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base">
                        <li>4 recordings</li>
                        <li>10 questions for each recording, 40 in total</li>
                        <li>30 minutes to complete section, 10 minutes to transfer answers to the answer sheet</li>
                    </ul>
                    <p className="text-gray-800 text-base mt-2">
                        Within each task, there will be 10 questions, adding up to 40 questions. You'll have 30 minutes to complete this section, and an additional 10 minutes will be given for transferring your answers to the answer sheet. For each correct answer, 1 mark will be awarded.
                    </p>
                </CardContent>
            </Card>

            <Alert  className="mb-5">
                <AlertDescription>
                    This section evaluates your attention to detail, ability to extract information, and comprehension of visual details, key information, and concrete facts.
                </AlertDescription>
            </Alert>

            <h3 className="text-lg md:text-xl font-semibold mb-2 mt-6">
                Let's break down the recording details:
            </h3>
            <div className="grid gap-3 mb-6">
                <Card className="px-2">
                    <CardHeader className="px-2 py-2">
                        <CardTitle className="text-base">Listening Section 1</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2 py-1">
                        <span className="text-gray-800 text-base">
                            10 questions (Involves a general conversation between two native English speakers)
                        </span>
                    </CardContent>
                </Card>
                <Card className="px-2">
                    <CardHeader className="px-2 py-2">
                        <CardTitle className="text-base">Listening Section 2</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2 py-1">
                        <span className="text-gray-800 text-base">
                            10 questions (A monologue on a general topic)
                        </span>
                    </CardContent>
                </Card>
                <Card className="px-2">
                    <CardHeader className="px-2 py-2">
                        <CardTitle className="text-base">Listening Section 3</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2 py-1">
                        <span className="text-gray-800 text-base">
                            10 questions (A conversation involving 2-4 people discussing academic matters)
                        </span>
                    </CardContent>
                </Card>
                <Card className="px-2">
                    <CardHeader className="px-2 py-2">
                        <CardTitle className="text-base">Listening Section 4</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2 py-1">
                        <span className="text-gray-800 text-base">
                            10 questions (A monologue on an academic subject, e.g. a university lecture.)
                        </span>
                    </CardContent>
                </Card>
            </div>

            <Card className="mb-6 px-2">
                <CardHeader className="px-2 py-2">
                    <CardTitle className="text-base">Question Types in IELTS Listening</CardTitle>
                </CardHeader>
                <CardContent className="px-2 py-2">
                    <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base">
                        <li>Multiple choice</li>
                        <li>Matching</li>
                        <li>Labelling plans, maps, and diagrams</li>
                        <li>Completing forms, notes, tables, flowcharts, and summaries</li>
                        <li>Sentence completion</li>
                        <li>Short-answer questions</li>
                    </ul>
                </CardContent>
            </Card>

            <Alert className="mb-6">
                <AlertDescription>
                    The IELTS paper pattern for the Listening section remains consistent for both IELTS Academic and General Training.
                </AlertDescription>
            </Alert>

            <Button variant="default" size="lg" className="w-full md:w-auto mt-2">
                More About IELTS Listening Module
            </Button>
        </section>
    );
}
