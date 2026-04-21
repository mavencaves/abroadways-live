import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function IeltsGeneralTrainingWritingSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
                8. IELTS Exam Syllabus & Pattern for General Training Writing
            </h2>

            <Card className="mb-5">
                <CardHeader>
                    <CardTitle>IELTS Writing Section</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-800 text-base mb-2">
                        You have two tasks to complete within a total of 60 minutes. Here's a breakdown:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base mb-2">
                        <li>2 Tasks</li>
                        <li>1 question in each part</li>
                        <li>60 minutes total time</li>
                    </ul>
                    <p className="text-gray-800 text-base">
                        You have two tasks to complete within a total of 60 minutes. Here's a breakdown:
                    </p>
                </CardContent>
            </Card>

            <div className="mb-6 grid gap-4 md:grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>IELTS Writing Task 1</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-800 text-base">
                            For IELTS Writing Task 1, you'll get 20 minutes to write at least 150 words.
                            In the General training version, you'll write a letter. The tone might be formal, semi-formal, or informal,
                            depending on the specific scenario presented in the task.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>IELTS Writing Task 2</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-800 text-base">
                            For IELTS Writing Task 2, you'll have at least 40 minutes to write at least 250 words.
                            In the General Training version, you'll respond to an argument or point of view with an essay. The tone is generally more formal.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
