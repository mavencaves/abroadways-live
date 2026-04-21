import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "সাবিহা রহমান",
            education: "এরিজোনা স্টেট ইউনিভার্সিটি",
            degree: "মার্কিন যুক্তরাষ্ট্র",
            country: "কানাডা",
            bgColor: "bg-slate-800",
            image: "/images/test2.png",
        },
        {
            name: "জহির হোসেন",
            education: "দুরহাম কলেজ",
            degree: "",
            country: "কানাডা",
            bgColor: "bg-blue-600",
            image: "/images/test1.PNG",
        },
        {
            name: "সায়রা সুলতানা",
            education: "ইউনিভার্সিটি অফ ওয়েস্টার্ন",
            degree: "",
            country: "কানাডা",
            bgColor: "bg-gray-700",
            image: "/images/test3.png",

        },
        {
            name: "মাইশা খাতুন",
            education: "শেরিডান কলেজ",
            degree: "",
            country: "কানাডা",
            bgColor: "bg-pink-600",
            image: "/images/test4.png",

        },
    ]

    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-gray-900 text-3xl md:text-4xl font-semibold leading-normal max-w-4xl mx-auto">
                        ২ লক্ষেরও বেশি শিক্ষার্থী আমাদেরকে ভরসা করে বিদেশে উচ্চশিক্ষার জন্য কেন?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`${testimonial.bgColor} border-0 overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300`}
                        >
                            <div className="p-6 h-80 flex flex-col justify-between relative">
                                <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Play className="h-5 w-5 text-blue-600 ml-1" fill="currentColor" />
                                    </div>
                                </div>

                                <div className="text-white z-10">
                                    <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                                    <p className="text-white/90 text-sm mb-1">{testimonial.education}</p>
                                    {testimonial.degree && <p className="text-white/80 text-sm mb-2">{testimonial.degree}</p>}
                                    <p className="text-white/90 text-sm">{testimonial.country}</p>
                                </div>

                                <div className="absolute bottom-0 right-0 overflow-hidden">
                                    <img
                                        src={testimonial.image || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        size="xl"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg"
                    >
                        আপনার জার্নি শুরু করুন
                    </Button>
                </div>
            </div>
        </section>
    )
}
