import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

export default function IeltsAcademicSpeakingSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
                5. IELTS Exam Pattern & Syllabus for Academic Speaking
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                The <b>IELTS Speaking section</b> is very simple and divided into three parts. The speaking test does not need to be conducted on the same day as the test.
            </p>

            <Card className="mb-5">
                <CardHeader>
                    <CardTitle>IELTS Speaking Section</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base">
                        <li>3 Parts</li>
                        <li>Number of Questions may vary</li>
                        <li>11-14 minutes total time</li>
                    </ul>
                </CardContent>
            </Card>

            <p className="text-gray-800 text-base leading-relaxed mb-3">
                When it comes to IELTS Speaking questions, the syllabus and pattern remain the same for both Academic and General Training:
            </p>

            <div className="mb-5 grid gap-4 md:grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>IELTS Speaking Task 1 (Introduction and Interview)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            You'll start with a general introduction covering topics like education, home, family, and work. This task takes about 4-5 minutes.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>IELTS Speaking Task 2 (Long Turn/ Cue Card)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            The examiner gives you a task card asking you to discuss a particular topic.
                            The card tells you what points to include in your talk and instructs you to explain one aspect of the topic. This includes 3-4 minutes for both talking and preparing your thoughts.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>IELTS Speaking Task 3 (Discussion)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            The examiner will further discuss the topic you talked about in Task 2, giving you 4-5 minutes for this conversation.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                These tasks aim to assess your ability to express your thoughts on daily and given topics and your capacity to provide reasons for your opinions.
            </p>

            <Alert className="mb-6 bg-blue-100 border-blue-200">
                <AlertDescription className={"text-black"}>
                    Remember to communicate clearly and confidently during this part of the test.
                </AlertDescription>
            </Alert>

            <Button variant="default" size="xl" className="w-full md:w-auto mt-2">
                More About IELTS Speaking Module <ArrowRight/>
            </Button>
        </section>
    );
}
