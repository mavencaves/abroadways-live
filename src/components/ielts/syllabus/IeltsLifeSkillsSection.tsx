import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function IeltsLifeSkillsSection() {
    return (
        <section className="mx-auto mt-10 bg-white p-4 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
                9. IELTS Exam Syllabus & Pattern for Life Skills Test
            </h2>

            <Card className="mb-5">
                <CardHeader>
                    <CardTitle>IELTS Life Skill Test</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        The <b>IELTS Life Skills test</b> is an important part of the UK Visa and Immigration (UKVI) process.
                        It's a special type of IELTS test made specifically for UKVI purposes. This test checks your English skills in everyday situations.
                    </p>
                </CardContent>
            </Card>

            <Card className="mb-5">
                <CardHeader>
                    <CardTitle>Life Skills Test Format</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base">
                        <li>
                            <b>IELTS Life Skills – A1:</b> Speaking and Listening (16 - 18 Minutes)
                        </li>
                        <li>
                            <b>IELTS Life Skills – A2:</b> Speaking and Listening (Available in the UK only, 20 Minutes)
                        </li>
                        <li>
                            <b>IELTS Life Skills – B1:</b> Speaking and Listening (22 Minutes)
                        </li>
                    </ul>
                    <p className="text-gray-800 text-base mt-2">
                        Each test corresponds to a specific CEFR proficiency level, widely recognized for assessing language skills.
                    </p>
                </CardContent>
            </Card>

            <Card className="mb-5">
                <CardHeader>
                    <CardTitle>Structure & What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-2">
                        The Life Skills tests consist of two main parts:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base mb-2">
                        <li>In the first part, you will be asked questions on familiar topics.</li>
                        <li>The second part combines both listening and speaking tasks.</li>
                    </ul>
                    <div className="mb-2">
                        <div className="font-semibold mb-1">Here's what you'll be required to do during the test:</div>
                        <ol className="list-decimal pl-6 space-y-1 text-gray-800 text-base">
                            <li>
                                All Life Skills test takers will listen to a task played on a CD. You'll be assessed on your ability to understand the general meaning and specific details.
                                While listening, you can make notes on paper.
                            </li>
                            <li>
                                Following this listening task, you'll discuss a topic related to what you heard on the CD.
                            </li>
                        </ol>
                        <div className="mt-2">
                            For the <b>B1 level test</b>, there is an additional task where you'll plan an activity with the other test taker.
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Assessment Focus</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Your assessment will focus on four key language skills:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base">
                        <li>Gathering information</li>
                        <li>Conveying information</li>
                        <li>Speaking to communicate</li>
                        <li>Engaging in discussion</li>
                    </ul>
                    <p className="mt-2 text-gray-700">
                        You can take notes during the test to prepare your answers, but the examiner will evaluate your speaking and listening skills, not your notes.
                    </p>
                </CardContent>
            </Card>

            <Alert className="mb-4 bg-blue-50 border-blue-200">
                <AlertDescription>
                    IELTS Life Skills tests are conducted with another candidate.
                    This format evaluates how well you can communicate in everyday English with others by pairing you with someone at a similar proficiency level.
                    The goal is to see your ability to use English to communicate and engage in discussions in real-life scenarios.
                </AlertDescription>
            </Alert>
        </section>
    );
}
