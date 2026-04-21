import { Card, CardContent } from '@/components/ui/card';
import { Brain, User, MessageSquare } from 'lucide-react';

const CounselorAdvantagesSection: React.FC = () => {
    const advantages = [
        {
            id: 1,
            icon: Brain,
            title: "ব্যাপক জ্ঞানভান্ডার",
            description: "মেভেনকেভ ট্রেনিং মডিউলগুলো নিশ্চিত করে যে কাউন্সেলররা সর্বশেষ উন্নয়ন সম্পর্কে সর্বদা আপডেট থাকে।"
        },
        {
            id: 2,
            icon: User,
            title: "প্রোফাইলভিত্তিক বরাদ্দ",
            description: "আপনাকে আরও ভাল সেবা দেওয়ার জন্য আপনার প্রোফাইলের ভিত্তিতে কাউন্সেলর বরাদ্দ করা হয়।"
        },
        {
            id: 3,
            icon: MessageSquare,
            title: "সরাসরি প্রতিক্রিয়া",
            description: "আপনার সন্তুষ্টি নিশ্চিত করতে প্রতিটি ধাপে নিয়মিত প্রতিক্রিয়া সেশন অনুষ্ঠিত হয়।"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
                        আমাদের উচ্চশিক্ষা বিদেশে পড়ার পরামর্শকারীরা আপনার সবচেয়ে বড় অনুপ্রেরণাদাতা।
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-5xl mx-auto">
                        আমাদের উচ্চশিক্ষার বিদেশে পড়াশোনা পরামর্শকরা আপনার সবচেয়ে বড় উৎসাহদাতা, যাঁরা প্রতিটি ধাপে আপনাকে গাইড করেন —
                        সঠিক কোর্স নির্বাচন থেকে শুরু করে ভিসা অনুমোদন পর্যন্ত। তাদের বিশেষজ্ঞ পরামর্শ এবং অবিচল সহায়তা আপনার বিদেশে
                        পড়াশোনার স্বপ্নকে করে তোলে আরও সহজ এবং অর্জনযোগ্য।
                    </p>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {advantages.map((advantage) => {
                        const IconComponent = advantage.icon;
                        return (
                            <Card key={advantage.id} className="border-0 shadow-none bg-transparent text-center">
                                <CardContent className="p-8">
                                    {/* Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
                                            <IconComponent className="h-10 w-10 text-white" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {advantage.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed">
                                        {advantage.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CounselorAdvantagesSection;
