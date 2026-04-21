import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CounselorHeroSection: React.FC = () => {
    const heroData = {
        image: "/images/c-hero.jpg",
        title: "আপনার আবেদন প্রক্রিয়ার প্রতিটি ধাপে সহজেই পরামর্শকের সাথে যোগাযোগ করুন।",
        subtitle: "আমাদের পরামর্শকেরা আপনার আবেদন প্রক্রিয়ার প্রতিটি ধাপে চ্যাট ও ভিডিও কলে সহায়তার জন্য সর্বদা উপলব্ধ।",
        buttonText: "কাউন্সেলর এর সাথে কথা বলুন"
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <Card className="overflow-hidden border-none shadow-lg py-0 hover:shadow-xl transition-shadow duration-300">
                    {/* Mobile Layout - Stacked */}
                    <div className="flex flex-col md:hidden">
                        {/* Image on top for mobile */}
                        <div className="w-full">
                            <div className="aspect-[16/10] relative overflow-hidden">
                                <img
                                    src={heroData.image}
                                    alt="পরামর্শক দল"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = '/api/placeholder/600/400';
                                    }}
                                />
                            </div>
                        </div>

                        {/* Content below for mobile */}
                        <div className="p-6 bg-white">
                            <h1 className="text-xl font-bold text-gray-900 leading-tight mb-4">
                                {heroData.title}
                            </h1>
                            <p className="text-base text-gray-600 leading-relaxed mb-6">
                                {heroData.subtitle}
                            </p>
                            <Button className="font-semibold rounded-lg w-full sm:w-fit">
                                {heroData.buttonText}
                            </Button>
                        </div>
                    </div>

                    {/* Desktop Layout - Side by Side with Equal Heights */}
                    <div className="hidden md:flex min-h-[400px] lg:min-h-[500px]">
                        {/* Left side - Image (50% width) */}
                        <div className="md:w-1/2 relative">
                            <img
                                src={heroData.image}
                                alt="পরামর্শক দল"
                                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/api/placeholder/600/400';
                                }}
                            />
                        </div>

                        {/* Right side - Content (50% width) */}
                        <div className="md:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-white">
                            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                                {heroData.title}
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {heroData.subtitle}
                            </p>

                            <Button
                                className="font-semibold rounded-lg w-fit"
                                size="lg"
                            >
                                {heroData.buttonText}
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default CounselorHeroSection;
