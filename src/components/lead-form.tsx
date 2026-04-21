import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { inquiriesApi } from "@/lib/api";
import { toast } from "sonner";

export default function LeadFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        destination: "",
        qualification: "",
        intake: "",
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
                source: "homepage-lead",
                destination: formData.destination.trim(),
                qualification: formData.qualification.trim(),
                intake: formData.intake.trim(),
                examInterest: formData.examInterest.trim(),
                message: formData.message.trim(),
            });

            setFormData({
                name: "",
                phone: "",
                email: "",
                destination: "",
                qualification: "",
                intake: "",
                examInterest: "",
                message: "",
            });
            setSubmitState("success");
            toast.success("Your callback request has been sent.");
        } catch (error: any) {
            setSubmitState("error");
            toast.error(error?.response?.data?.message || error?.message || "We could not submit your request right now.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section-shell bg-white">
            <div className="section-container">
                <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="section-kicker">Lead Capture</p>
                        <h2 className="section-title">Get a personalised roadmap for study abroad from Bangladesh.</h2>
                        <p className="mb-6 mt-4 text-base leading-8 text-slate-600">
                            Share your profile and an Abroadways consultant will contact you with tailored guidance on
                            destinations, scholarships, visa strategy, and admission test planning.
                        </p>

                        <ul className="space-y-3 text-slate-700">
                            <li>&bull; Premium counselling for Canada, the UK, Europe, Australia, and more</li>
                            <li>&bull; Support for scholarships, budgets, and visa guidance</li>
                            <li>&bull; Trusted support backed by our UKVI Approved LanguageCert Test Centre positioning</li>
                            <li>&bull; Secure inquiry capture for callback and consultation follow-up</li>
                        </ul>
                    </div>

                    <div className="premium-card-soft p-6 md:p-8">
                        <h3 className="text-2xl font-semibold text-slate-950">Request a callback</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                            Perfect for students exploring study abroad consultancy options, Europe study choices,
                            Canada study plans, or English test guidance.
                        </p>

                        <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                            <Input type="text" placeholder="Full Name" className="h-12" value={formData.name} onChange={handleChange("name")} />
                            <Input type="text" placeholder="Phone / WhatsApp" className="h-12" value={formData.phone} onChange={handleChange("phone")} />
                            <Input type="email" placeholder="Email Address" className="h-12" value={formData.email} onChange={handleChange("email")} />
                            <Input type="text" placeholder="Preferred Country" className="h-12" value={formData.destination} onChange={handleChange("destination")} />
                            <Input type="text" placeholder="Current Qualification" className="h-12" value={formData.qualification} onChange={handleChange("qualification")} />
                            <Input type="text" placeholder="Expected Intake" className="h-12" value={formData.intake} onChange={handleChange("intake")} />
                            <Input type="text" placeholder="Exam Interest" className="h-12 md:col-span-2" value={formData.examInterest} onChange={handleChange("examInterest")} />
                            <Textarea placeholder="Message or profile summary" className="min-h-28 md:col-span-2" value={formData.message} onChange={handleChange("message")} />

                            <Button className="h-12 text-white md:col-span-2" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Request My Callback"}
                            </Button>
                        </form>

                        <p className="mt-4 text-xs text-slate-500">
                            By submitting this form, you agree to be contacted by Abroadways about counselling,
                            applications, scholarships, tests, and visa support.
                        </p>
                        {submitState === "success" ? (
                            <p className="mt-3 text-sm font-medium text-emerald-600">
                                Thank you. Our team will contact you shortly.
                            </p>
                        ) : null}
                        {submitState === "error" ? (
                            <p className="mt-3 text-sm font-medium text-red-600">
                                Submission failed. Please try again or contact us directly.
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
}
