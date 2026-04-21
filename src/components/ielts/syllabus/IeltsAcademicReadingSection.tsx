import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

export default function IeltsAcademicReadingSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
                3. IELTS Exam Pattern & Syllabus for Academic Reading
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                The <b>IELTS Reading</b> section is <b>60 minutes long</b> and consists of <b>40 questions</b> distributed among <b>3 sections</b>.
                The Reading passages are medium-length and sourced from journals, books, magazines, and newspapers, and they might include graphs, diagrams, or illustrations.
            </p>

            <Card className="mb-5">
                <CardHeader>
                    <CardTitle>IELTS Reading Section</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base">
                        <li>3 passages</li>
                        <li>40 questions</li>
                        <li>60 minutes total time</li>
                    </ul>
                </CardContent>
            </Card>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
                These passages use various writing styles, such as descriptive, factual, discursive, and analytical.
                Your task is to understand the writers' purpose, attitude, and opinions behind these texts.
            </p>

            <Card className="mb-5">
                <CardHeader>
                    <CardTitle>Different Reading Skills Required</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div>
                        <span className="font-semibold">Skimming</span>
                        <div className="text-gray-700">Reading quickly to grasp the main idea.</div>
                    </div>
                    <div>
                        <span className="font-semibold">Scanning</span>
                        <div className="text-gray-700">Rapid reading to find specific information.</div>
                    </div>
                    <div>
                        <span className="font-semibold">Reading for detail</span>
                        <div className="text-gray-700">Comprehending a logical argument, opinions, attitudes, and the writer's purpose.</div>
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-7">
                <CardHeader>
                    <CardTitle>Question Types in IELTS Reading</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base">
                        <li>Multiple choice</li>
                        <li>Identifying information</li>
                        <li>Identifying the writer's views/claims</li>
                        <li>Matching information</li>
                        <li>Matching headings</li>
                        <li>Matching features</li>
                        <li>Matching sentence endings</li>
                        <li>Sentence completion</li>
                        <li>Summary, note, table, flow-chart completion</li>
                        <li>Diagram label completion</li>
                        <li>Short-answer questions</li>
                    </ul>
                </CardContent>
            </Card>

            <Button variant="default" size="xl" className="w-full md:w-auto mt-1">
                More About IELTS Reading Module <ArrowRight/>
            </Button>
        </section>
    );
}
