import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TrustBadge from "@/components/trust-badge";
import { inquiriesApi } from "@/lib/api";
import { toast } from "sonner";

export default function SessionBook() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        destination: "",
        examInterest: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

    const handleChange =
        (field: keyof typeof formData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData((prev) => ({ ...prev, [field]: event.target.value }));
        };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitState("idle");

        try {
            if (!formData.name.trim()) {
                throw new Error("Please provide your name.");
            }

            if (!formData.email.trim() && !formData.phone.trim()) {
                throw new Error("Please provide either an email address or phone number.");
            }

            await inquiriesApi.create({
                name: formData.name.trim(),
                phone: formData.phone.trim(),
                email: formData.email.trim(),
                source: "homepage-consultation",
                destination: formData.destination.trim(),
                examInterest: formData.examInterest.trim(),
                message: formData.message.trim(),
            });

            setFormData({
                name: "",
                phone: "",
                email: "",
                destination: "",
                examInterest: "",
                message: "",
            });
            setSubmitState("success");
            toast.success("Your consultation request has been sent.");
        } catch (error: any) {
            setSubmitState("error");
            toast.error(error?.response?.data?.message || error?.message || "We could not submit your consultation request.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section-shell bg-slate-50">
            <div className="section-container">
                <Card className="overflow-hidden border-0 bg-[linear-gradient(135deg,#071a3f_0%,#0d2f6f_52%,#1b56bf_100%)] text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                    <CardContent className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
                        <div>
                            <TrustBadge className="mb-4" />

                            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                                Book a consultation that turns uncertainty into a clear action plan.
                            </h2>

                            <p className="mb-6 mt-4 text-base leading-8 text-blue-100 md:text-lg">
                                Speak with an Abroadways advisor about your target destination, university shortlist,
                                scholarship opportunities, and visa strategy.
                            </p>

                            <ul className="space-y-3 text-sm text-blue-50 md:text-base">
                                <li>&bull; Personalized university and destination planning</li>
                                <li>&bull; Scholarship, budget, and affordability guidance</li>
                                <li>&bull; Visa documentation and interview preparation support</li>
                                <li>&bull; LanguageCert, IELTS, PTE, TOEFL, GRE, GMAT, and SAT planning</li>
                                <li>&bull; Clear next steps for students and parents</li>
                            </ul>
                        </div>

                        <div className="rounded-[1.75rem] bg-white p-6 text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                            <h3 className="text-2xl font-semibold">Request your consultation</h3>

                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Share your details and our team will follow up with a clear next-step consultation plan.
                            </p>

                            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                                <Input type="text" placeholder="Student Full Name" className="h-12" value={formData.name} onChange={handleChange("name")} />
                                <Input type="tel" placeholder="Phone / WhatsApp Number" className="h-12" value={formData.phone} onChange={handleChange("phone")} />
                                <Input type="email" placeholder="Email Address" className="h-12" value={formData.email} onChange={handleChange("email")} />
                                <Input type="text" placeholder="Preferred Destination" className="h-12" value={formData.destination} onChange={handleChange("destination")} />
                                <Input
                                    type="text"
                                    placeholder="Exam Interest: LanguageCert / IELTS / PTE / TOEFL / GRE / GMAT / SAT"
                                    className="h-12"
                                    value={formData.examInterest}
                                    onChange={handleChange("examInterest")}
                                />
                                <Textarea
                                    placeholder="Tell us about your academic background, preferred intake, budget, or current questions."
                                    className="min-h-28"
                                    value={formData.message}
                                    onChange={handleChange("message")}
                                />

                                <Button className="h-12 w-full text-base font-semibold text-white" disabled={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Book My Free Consultation"}
                                </Button>
                            </form>

                            <p className="mt-4 text-xs text-slate-500">
                                Your inquiry goes directly to the Abroadways lead system for follow-up.
                            </p>
                            {submitState === "success" ? (
                                <p className="mt-3 text-sm font-medium text-emerald-600">
                                    Thank you. We will contact you with the next available consultation step.
                                </p>
                            ) : null}
                            {submitState === "error" ? (
                                <p className="mt-3 text-sm font-medium text-red-600">
                                    Submission failed. Please try again or use the contact page.
                                </p>
                            ) : null}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
