import {useState} from 'react';
import {FaArrowLeft, FaArrowRight, FaStar} from 'react-icons/fa'

function Testimonial() {
    // Array of testimonial data
    const testimonials = [
        {
            id: 1,
            image: 'https://i.ibb.co/CpfMCCpH/icons8-team-Fc-Lyt7l-W5wg-unsplash.jpg',
            rating: 5,
            review: "এই প্ল্যাটফর্মটি না পাওয়া পর্যন্ত আমি ভিসা প্রক্রিয়া নিয়ে অভিভূত ছিলাম। এথাই টুলগুলো আমাকে আমার SOP এবং IELTS অ্যাপ্লিকেশন সম্পর্কে তাৎক্ষণিক প্রতিক্রিয়া জানিয়েছে। মাত্র ৩ সপ্তাহের মধ্যে আমি আমার কানাডিয়ান ভিসা পেয়েছি! সত্যিই জীবন বদলে দেওয়া।",
            name: 'অবন্তীতা রহমান',
            title: 'শিক্ষার্থী',
        },
        {
            id: 2,
            image: 'https://i.ibb.co/ZRBYBR5g/front-view-male-student-green-checkered-shirt-with-black-backpack-holding-copybooks-smiling-blue-wal.jpg',
            rating: 5,
            review: "আমার স্বপ্নের বিশ্ববিদ্যালয়ে ভর্তি হওয়ার প্রক্রিয়াটি সহজ করে দিয়েছে এই সার্ভিস। তাদের গাইডেন্স এবং এআই প্রেডিকশন সত্যিই অসাধারণ ছিল। আমি সবাইকে এটি ব্যবহার করার পরামর্শ দেবো। এটি আমার শিক্ষাজীবনের সেরা সিদ্ধান্ত ছিল।",
            name: 'হাসান মাহমুদ',
            title: 'শিক্ষার্থী',
        },
        {
            id: 3,
            image: 'https://i.ibb.co/DgKb3GcY/lifestyle-business-people-using-laptop-computer-pink.jpg',
            rating: 4,
            review: "ভিসা আবেদন অনেক জটিল মনে হতো, কিন্তু এখানে ধাপে ধাপে সঠিক তথ্য পেয়েছি। প্রকাশনা নিয়ে পরামর্শ আমার আবেদনকে আরও শক্তিশালী করেছে। ধন্যবাদ! আমি এটি ব্যবহার করে খুব উপকৃত হয়েছি।",
            name: 'ফারজানা আক্তার',
            title: 'শিক্ষার্থী',
        },
        {
            id: 4,
            image: 'https://i.ibb.co/p69XSN1v/smiling-young-school-woman-wearing-backpack-with-glasses.jpg',
            rating: 5,
            review: "IELTS এর প্রস্তুতি থেকে শুরু করে ভিসা ইন্টারভিউ পর্যন্ত প্রতিটি ধাপে তাদের সহায়তা ছিল অতুলনীয়। এর ফলে আমার আত্মবিশ্বাস বেড়েছে এবং আমি সফলভাবে ভিসা পেয়েছি। তাদের টিমের প্রতি কৃতজ্ঞ।",
            name: 'শোভন দেবনাথ',
            title: 'শিক্ষার্থী',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            (prevSlide + 1) % testimonials.length
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            (prevSlide - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Heading */}
                <p className="text-blue-600 font-semibold uppercase text-sm mb-2">প্রতিক্রিয়া</p>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    আমাদের শিক্ষার্থীরা আমাদের <br className="hidden md:block"/> সম্পর্কে কী বলে
                </h2>
                <p className="text-lg text-gray-700 mb-12">
                    আমাদের AI-নির্ভর ভিসা সহায়ক সেবা বিগত বছরগুলোয় বহু ভুল শিক্ষার্থীদের স্বপ্নের কলেজিয়েট <br
                    className="hidden md:block"/>
                    জীবন লাভে সফলভাবে সহায়তা করে এসেছে।
                </p>

                {/* Testimonial Carousel Container */}
                <div className="relative flex items-center justify-center w-full">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 z-10 p-3 bg-blue-100 text-blue-600 rounded-full shadow-md hover:bg-blue-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 -ml-4 md:-ml-8 lg:-ml-12"
                    >
                        <FaArrowLeft className="text-xl"/>
                    </button>

                    {/* Testimonial Card */}

                    <div
                        key={testimonials[currentSlide].id}
                        className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg max-w-3xl w-full flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 transition-opacity duration-500 ease-in-out opacity-100"
                    >
                        {/* Left Side: Image */}
                        <div className="flex-shrink-0">
                            <img
                                src={testimonials[currentSlide].image}
                                alt={`Student ${testimonials[currentSlide].id}`}
                                className="w-28 h-28 md:w-36 md:h-36 object-cover shadow-md mx-auto sm:mx-0 rounded-lg"
                            />
                        </div>

                        {/* Right Side: Ratings, Review, Name, Title */}
                        <div className="flex-grow">
                            {/* Stars */}
                            <div className="flex justify-center sm:justify-start text-yellow-500 mb-2">
                                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                                    <FaStar key={i} className="text-lg"/>
                                ))}
                            </div>
                            {/* Review Text */}
                            <p className="text-gray-800 text-md italic mb-4">
                                "{testimonials[currentSlide].review}"
                            </p>
                            {/* Author Info */}
                            <p className="text-gray-900 font-bold text-md mb-0.5">{testimonials[currentSlide].name}</p>
                            <p className="text-gray-600 text-sm">{testimonials[currentSlide].title}</p>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 z-10 p-3 bg-blue-100 text-blue-600 rounded-full shadow-md hover:bg-blue-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 -mr-4 md:-mr-8 lg:-mr-12"
                    >
                        <FaArrowRight className="text-xl"/>
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full ${
                                index === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300'
                            } transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonial;