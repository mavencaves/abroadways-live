export default function LorTypesSection() {
    return (
        <section className="mx-auto max-w-6xl bg-white p-6 md:p-8 rounded-xl my-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#6A55EA]">
                সুপারিশপত্রের ধরন
            </h2>
            <p className="text-gray-900 text-base leading-relaxed mb-2">
                প্রধানত দুই ধরনের Letter of Recommendation (LOR) রয়েছে: একাডেমিক LOR এবং প্রফেশনাল LOR।
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900 mb-6">
                <li>
                    <span className="font-bold">একাডেমিক LOR:</span> এটি একজন অধ্যাপক বা একাডেমিক অ্যাডভাইজার লিখেন এবং ছাত্র/ছাত্রীর একাডেমিক সাফল্য, রিসার্চ প্রোজেক্ট এবং একাডেমিক ব্যাকগ্রাউন্ডের উপর গুরুত্ব দেয়।
                </li>
                <li>
                    <span className="font-bold">প্রফেশনাল LOR:</span> এটি একজন পূর্ববর্তী নিয়োগকর্তা বা সুপারভাইজার লিখেন এবং ছাত্র/ছাত্রীর পেশাগত দক্ষতা, কাজের নীতি এবং পেশাগত পরিবেশে অর্জিত সাফল্য তুলে ধরে।
                </li>
            </ul>
            <p className="text-gray-900 text-base leading-relaxed">
                উভয় ধরনের LORই একটি সম্পূর্ণ আবেদন প্রক্রিয়ার জন্য গুরুত্বপূর্ণ, কারণ এগুলো ছাত্র/ছাত্রীর ক্ষমতা এবং সম্ভাবনার একটি পূর্ণ চিত্র প্রদান করে।
            </p>
        </section>
    );
}
