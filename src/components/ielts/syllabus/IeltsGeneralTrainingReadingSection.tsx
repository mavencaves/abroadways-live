import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

export default function IeltsGeneralTrainingReadingSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
                7. IELTS Exam Syllabus & Pattern for General Training Reading
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
                <b>IELTS General Training Reading</b> conducted for 60 minutes (including the transfer time) includes
                three sections with excerpts from newspapers, books, magazines, guidelines, advertisements, handbooks,
                and notices.
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
                    <p className="text-gray-800 text-base mt-2">
                        The IELTS Reading Section requires you to read and analyse the three passages and answer the
                        questions following them.
                    </p>
                </CardContent>
            </Card>

            <h3 className="text-lg md:text-xl font-semibold mb-3">
                Here is the breakdown of the 3 tasks:
            </h3>
            <div className="mb-6 grid gap-4 md:grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>IELTS Reading Task 1</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            This task you'll write about <b>social survival</b>.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>IELTS Reading Task 2</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            This task you'll write about <b>workplace survival</b>.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>IELTS Reading Task 3</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            This task features a general Reading passage with a somewhat complex structure.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Button variant="default" size="xl" className="w-full md:w-auto mt-2">
                More About IELTS Reading Module <ArrowRight/>
            </Button>
        </section>
    );
}
