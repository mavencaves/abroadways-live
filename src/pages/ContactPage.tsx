import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BadgeCheck, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { inquiriesApi } from "@/lib/api";
import { toast } from "sonner";

const contactCards = [
    {
        title: "Call us",
        value: "+880 1898801960",
        href: "tel:+8801898801960",
        icon: Phone,
    },
    {
        title: "Email us",
        value: "info@abroadways.com.bd",
        href: "mailto:info@abroadways.com.bd",
        icon: Mail,
    },
    {
        title: "Visit us",
        value: "Dhaka, Bangladesh",
        href: "https://maps.google.com/?q=Dhaka,Bangladesh",
        icon: MapPin,
    },
    {
        title: "WhatsApp",
        value: "Chat with Abroadways",
        href: "https://wa.me/8801898801960",
        icon: MessageCircle,
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        destination: "",
        qualification: "",
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
                source: "contact-page",
                destination: formData.destination.trim(),
                qualification: formData.qualification.trim(),
                message: formData.message.trim(),
            });

            setFormData({
                name: "",
                phone: "",
                email: "",
                destination: "",
                qualification: "",
                message: "",
            });
            setSubmitState("success");
            toast.success("Your enquiry has been sent.");
        } catch (error: any) {
            setSubmitState("error");
            toast.error(error?.response?.data?.message || error?.message || "We could not send your enquiry right now.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-slate-50">
            <section className="bg-[linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-18 text-white sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/15 px-4 py-2 text-sm font-semibold text-orange-50">
                            <BadgeCheck className="h-4 w-4 text-orange-300" />
                            UKVI Approved LanguageCert Test Centre
                        </div>
                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Contact Abroadways</p>
                        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                            Speak with a trusted study abroad team that understands student and parent priorities.
                        </h1>
                        <p className="mt-6 text-base leading-8 text-blue-100 sm:text-lg">
                            Contact Abroadways for higher education guidance, scholarships, visa planning, LanguageCert
                            support, and exam-related questions from Bangladesh.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="space-y-6">
                        {contactCards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <a key={card.title} href={card.href} className="block rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
                                    <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h2 className="mt-4 text-xl font-semibold text-slate-950">{card.title}</h2>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">{card.value}</p>
                                </a>
                            );
                        })}
                    </div>

                    <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Enquiry Form</p>
                        <h2 className="mt-3 text-3xl font-semibold text-slate-950">Request a callback from our team</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            Share your interest in higher education abroad, scholarships, visa guidance, or exam support
                            and our team will follow up with the next best step.
                        </p>

                        <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                            <Input placeholder="Full Name" className="h-12 rounded-xl bg-slate-50" value={formData.name} onChange={handleChange("name")} />
                            <Input placeholder="Phone / WhatsApp" className="h-12 rounded-xl bg-slate-50" value={formData.phone} onChange={handleChange("phone")} />
                            <Input placeholder="Email Address" className="h-12 rounded-xl bg-slate-50" value={formData.email} onChange={handleChange("email")} />
                            <Input placeholder="Preferred Destination" className="h-12 rounded-xl bg-slate-50" value={formData.destination} onChange={handleChange("destination")} />
                            <Input placeholder="Current Qualification" className="h-12 rounded-xl bg-slate-50 md:col-span-2" value={formData.qualification} onChange={handleChange("qualification")} />
                            <Textarea placeholder="Tell us about your plan or question" className="min-h-32 rounded-xl bg-slate-50 md:col-span-2" value={formData.message} onChange={handleChange("message")} />
                            <Button className="h-12 rounded-full bg-blue-700 text-white hover:bg-blue-800 md:col-span-2" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Request My Callback"}
                            </Button>
                        </form>
                        {submitState === "success" ? (
                            <p className="mt-4 text-sm font-medium text-emerald-600">
                                Thank you. An Abroadways advisor will reach out soon.
                            </p>
                        ) : null}
                        {submitState === "error" ? (
                            <p className="mt-4 text-sm font-medium text-red-600">
                                We could not send your enquiry. Please try again or use the phone and WhatsApp options above.
                            </p>
                        ) : null}
                    </div>
                </div>
            </section>
        </div>
    );
}
