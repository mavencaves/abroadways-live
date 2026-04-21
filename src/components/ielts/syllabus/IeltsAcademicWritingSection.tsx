import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Alert, AlertDescription} from "@/components/ui/alert";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

export default function IeltsAcademicWritingSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
                2. IELTS Exam Pattern & Syllabus for Academic Writing
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                In the <b>IELTS Writing</b> section, you'll notice differences depending on whether you're taking the
                Academic or General Training test.
            </p>

            <Card className="mb-5">
                <CardHeader>
                    <CardTitle>IELTS Writing Section</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base">
                        <li>2 Tasks</li>
                        <li>1 question in each part</li>
                        <li>60 minutes total time</li>
                    </ul>
                </CardContent>
            </Card>

            <div className="mb-5 grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Writing Task 1</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Task 1 requires you to explain visual data, like a graph or chart, using your own words.
                            Aim to write a minimum of 150 words within a 20-minute timeframe. You must write at least
                            150 words and will be penalised if your answer is too short.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Writing Task 2</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            In Task 2, you are given a point of view, argument or problem you must address.
                            You need to write at least 250 words in about 40 minutes.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                In both cases, ensure your writing matches what they're asking for.
                The people checking your test look at how well you do the task, how clear and organised your writing is,
                the words you use, and how well you use grammar.
            </p>

            <Alert className="mb-6">
                <AlertDescription>
                    Whether you're taking the IELTS Academic or General Training, the writing section's duration, word
                    limit, and marking criteria are the same.
                    Task 1 may vary in style, whether formal, semi-formal, or personal.
                    However, in Task 2 (the essay), you should present your ideas logically and support them with
                    examples and evidence.
                </AlertDescription>
            </Alert>

            <Button variant="default" size="xl" className="w-full md:w-auto mt-2">
                More About IELTS Writing Module <ArrowRight/>
            </Button>
        </section>
    );
}
