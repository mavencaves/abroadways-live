import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {Link} from "react-router";
import {ArrowRight} from "lucide-react";

export default function HarvardReact() {
  const [activeTab, setActiveTab] = useState('overview')

  // Tabs data (labels in Bangla)
  const tabs = [
    { id: 'overview', label: 'সংক্ষিপ্ত বিবরণ' },
    { id: 'admission', label: 'ভর্তি' },
    { id: 'ranking', label: 'র‌্যাঙ্কিং' },
    { id: 'courses', label: 'কোর্স ও ফি' },
  ]

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Header Image */}
        <div className="relative w-full h-72">
          <img
              src="/images/ratul/harvard.png"
              alt="Harvard"
              className="w-full h-full object-cover"
          />
        </div>

        {/* University Card */}
        <div className="container mx-auto px-4 relative -mt-12 mb-6">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 flex items-center justify-between">
              {/* Left */}
              <div className="flex items-center gap-4">
                <img
                    src="/images/ratul/logo.png"
                    alt="Harvard Logo"
                    className="w-16 h-16 rounded-full"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">হার্ভার্ড বিশ্ববিদ্যালয়</h1>
                  <p className="text-gray-600">কেমব্রিজ - ম্যাসাচুসেটস</p>
                </div>
              </div>
              {/* Right */}
              <Button className="bg-blue-600 hover:bg-blue-700">
                আপনার যোগ্যতা যাচাই করুন
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Layout Container */}
        <div className="container mx-auto px-4 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Content - 8 columns */}
            <div className="lg:col-span-8">
              {/* Navigation Tabs */}
              <div className="mb-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-gray-100">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.id}
                            value={tab.id}
                            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                        >
                          {tab.label}
                        </TabsTrigger>
                    ))}
                  </TabsList>

                  <TabsContent value="overview" className="mt-6 space-y-6">
                    {/* Important Figures Section - Left Content Only */}
                    <Card className="bg-blue-600 text-white">
                      <CardHeader>
                        <CardTitle className="text-white">গুরুত্বপূর্ণ দিক</CardTitle>
                        <p className="text-blue-100 text-sm">মুখ্যভাবে প্রদত্ত সংখ্যাগুলি সূত্র দ্বারা প্রদান করা হয়েছে</p>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-blue-100 text-gray-900 rounded-lg overflow-hidden">
                          <div className="grid grid-cols-2 divide-x divide-gray-300">
                            <div className="p-4 text-center">
                              <p className="text-2xl font-bold">১৬৩৬</p>
                              <p className="text-sm text-gray-600">প্রতিষ্ঠিত</p>
                            </div>
                            <div className="p-4 text-center">
                              <p className="text-2xl font-bold">৫৭,৭৮৬</p>
                              <p className="text-sm text-gray-600">মোট শিক্ষার্থীর সংখ্যা</p>
                            </div>
                          </div>
                          <div className="border-t border-gray-300 p-4 text-center">
                            <p className="text-2xl font-bold">৭,৫২৪</p>
                            <p className="text-sm text-gray-600">মোট আন্তর্জাতিক শিক্ষার্থী</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Top Courses Section */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-2xl">শীর্ষ কোর্সসমূহ</CardTitle>
                        <Button variant="link" className="text-blue-600">
                          সব দেখুন ›
                        </Button>
                      </CardHeader>
                      <CardContent>
                        {/* Course Categories */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          <Badge variant="default" className="bg-blue-600 hover:bg-blue-700">
                            আর্কিটেকচার ›
                          </Badge>
                          <Badge variant="outline">ডেটা সায়েন্স ›</Badge>
                          <Badge variant="outline">ইঞ্জিনিয়ারিং সায়েন্স ›</Badge>
                          <Badge variant="outline">বায়োলজি ›</Badge>
                          <Badge variant="outline">শিক্ষকতা / শিক্ষা বিষয়ক স্টাডিজ ›</Badge>
                        </div>

                        {/* Breadcrumb */}
                        <div className="text-sm text-gray-600 mb-4">
                          <span>মাস্টার অব আর্কিটেকচার-১</span>
                          <span className="text-gray-400 mx-2">›</span>
                        </div>

                        {/* Course Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <Card className="bg-gray-100">
                            <CardContent className="p-4 flex items-center gap-4">
                              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                  <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                                  <path d="M16 2v4M8 2v4M3 10h18"></path>
                                </svg>
                              </div>
                              <div>
                                <p className="text-gray-600 text-sm">৪২ ঘন্টা</p>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="md:col-span-2 bg-blue-600 text-white">
                            <CardContent className="p-6 flex flex-col justify-center min-h-[140px]">
                              <Link to={"/"}>
                                <p className="text-xl flex gap-2 items-center hover:underline font-semibold mb-3">মাস্টার অব আর্কিটেকচার 2 <ArrowRight/></p>
                              </Link>
                            </CardContent>
                          </Card>
                        </div>

                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          আপনার জন্য সেরা কোর্সটি বেছে নিন
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Admission Section */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>ভর্তি গ্রহণ ও আবেদন শেষ তারিখ</CardTitle>
                        <Button variant="link" className="text-blue-600">
                          সব দেখুন ›
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 mb-6">
                          {['JAN\'2026', 'MAY\'2026', 'AUG\'2026', 'SEP\'2026'].map((month) => (
                              <div key={month} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                                <span className="font-semibold text-gray-900">{month}</span>
                                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                                  ভর্তি চলছে
                                </Badge>
                              </div>
                          ))}
                        </div>

                        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                          আপনার জন্য সেরা ইন্টেকটি খুঁজুন
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Eligibility Section */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>ভর্তি যোগ্যতার শর্ত</CardTitle>
                        <Button variant="link" className="text-blue-600">
                          সব দেখুন ›
                        </Button>
                      </CardHeader>
                    </Card>
                  </TabsContent>

                  <TabsContent value="ranking" className="mt-6">
                    {/* Rankings Section */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-2xl">র‌্যাঙ্কিং</CardTitle>
                        <Button variant="link" className="text-blue-600">
                          সব দেখুন ›
                        </Button>
                      </CardHeader>
                      <CardContent className="space-y-8">
                        {/* US News */}
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-8 bg-blue-600 rounded flex items-center justify-center">
                              <span className="text-white text-xs font-bold">USNEWS</span>
                            </div>
                            <h3 className="text-lg font-semibold">ইউএস নিউজ</h3>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <Card>
                              <CardContent className="p-4 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2"># ৩</div>
                                <p className="text-sm text-gray-600">সেরা জাতীয় স্কুলসমূহ – ২০২৫</p>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="p-4 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2"># ১</div>
                                <p className="text-sm text-gray-600">সেরা বিশ্ব র‌্যাঙ্কিং স্কুলসমূহ – ২০২৩</p>
                              </CardContent>
                            </Card>
                            <Card className="sm:col-span-2">
                              <CardContent className="p-4 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2"># ২</div>
                                <p className="text-sm text-gray-600">সেরা বিশ্ববিদ্যালয় র‌্যাঙ্কিং স্কুলসমূহ – ২০২২</p>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        {/* Times Higher Education */}
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                              <img
                                  src="/images/ratul/logo.png"
                                  alt="THE Logo"
                                  className="w-8 h-8"
                              />
                            </div>
                            <h3 className="text-lg font-semibold">টাইমস হায়ার এডুকেশন</h3>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <Card>
                              <CardContent className="p-4 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2"># ২</div>
                                <p className="text-sm text-gray-600">সেরা বিশ্ব র‌্যাঙ্কিং স্কুলসমূহ – ২০২৩</p>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="p-4 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2"># ২</div>
                                <p className="text-sm text-gray-600">সেরা বিশ্ববিদ্যালয় র‌্যাঙ্কিং স্কুলসমূহ – ২০২২</p>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        {/* QS Ranking */}
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                              <img
                                  src="/images/ratul/qs.png"
                                  alt="QS Logo"
                                  className="w-8 h-8"
                              />
                            </div>
                            <h3 className="text-lg font-semibold">কিউএস র‌্যাঙ্ক</h3>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <Card>
                              <CardContent className="p-4 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2"># ৮</div>
                                <p className="text-sm text-gray-600">সেরা বিশ্ব র‌্যাঙ্কিং স্কুলসমূহ – ২০২৫</p>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="p-4 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2"># ৫</div>
                                <p className="text-sm text-gray-600">সেরা বিশ্ব র‌্যাঙ্কিং স্কুলসমূহ – ২০২৩</p>
                              </CardContent>
                            </Card>
                            <Card className="sm:col-span-2">
                              <CardContent className="p-4 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2"># ৫</div>
                                <p className="text-sm text-gray-600">সেরা বিশ্ব র‌্যাঙ্কিং স্কুলসমূহ – ২০২৩</p>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 mt-8">
                          এখানে জানুন আপনার ভর্তি সম্ভাবনা
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="admission" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>ভর্তি সংক্রান্ত তথ্য</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">ভর্তি সংক্রান্ত বিস্তারিত তথ্য এখানে থাকবে।</p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="courses" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>কোর্স ও ফি</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">কোর্স ও ফি সংক্রান্ত তথ্য এখানে থাকবে।</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Blog Section - Left Content */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-2xl">ব্লগসমূহ - ব্যবহারকারীরাও এটি পড়েছেন</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Blog Card 1 */}
                    <Card className="overflow-hidden py-0">
                      <div className="aspect-video overflow-hidden">
                        <img
                            src="/images/ratul/image1.png"
                            alt="IELTS/TOEFL প্রস্তুতি"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          IELTS/TOEFL পরীক্ষার জন্য কিভাবে প্রস্তুতি নেবেন?
                        </h3>
                        <p className="text-sm text-gray-600">
                          ১২ জুলাই, ২০২৫ / পড়তে সময় লাগবে: ৫ মিনিট
                        </p>
                      </CardContent>
                    </Card>

                    {/* Blog Card 2 */}
                    <Card className="overflow-hidden py-0">
                      <div className="aspect-video overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop"
                            alt="পরীক্ষার প্রস্তুতি"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          শেষ মুহূর্তের প্রস্তুতি: পরীক্ষার আগের রাতের করণীয়
                        </h3>
                        <p className="text-sm text-gray-600">
                          ১২ জুলাই, ২০২৫ / পড়তে সময় লাগবে: ৫ মিনিট
                        </p>
                      </CardContent>
                    </Card>

                    {/* Blog Card 3 */}
                    <Card className="overflow-hidden py-0">
                      <div className="aspect-video overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
                            alt="পড়াশোনায় মনোযোগ"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          পড়াশোনায় মনোযোগ বাড়ানোর বৈজ্ঞানিক টিপস
                        </h3>
                        <p className="text-sm text-gray-600">
                          ১২ জুলাই, ২০২৫
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Breadcrumbs */}
                  <nav className="mt-8 text-sm text-gray-600">
                    <div className="flex flex-wrap items-center gap-2">
                      <Button variant="link" className="p-0 h-auto text-gray-600 hover:text-blue-600">
                        বিদেশে উচ্চশিক্ষা
                      </Button>
                      <span className="text-gray-400">/</span>
                      <Button variant="link" className="p-0 h-auto text-gray-600 hover:text-blue-600">
                        যুক্তরাজ্যে উচ্চশিক্ষা
                      </Button>
                      <span className="text-gray-400">/</span>
                      <Button variant="link" className="p-0 h-auto text-gray-600 hover:text-blue-600">
                        যুক্তরাজ্যের বিশ্ববিদ্যালয়সমূহ
                      </Button>
                      <span className="text-gray-400">/</span>
                      <Button variant="link" className="p-0 h-auto text-gray-600 hover:text-blue-600">
                        কেমব্রিজ, অক্সফোর্ড বিশ্ববিদ্যালয়সমূহ
                      </Button>
                      <span className="text-gray-400">/</span>
                      <span className="font-semibold text-gray-900">হার্ভার্ড বিশ্ববিদ্যালয়</span>
                    </div>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar - 4 columns */}
            <div className="lg:col-span-4">
              <div className="sticky top-6">
                {/* University Finder Card - Sidebar */}
                <Card className="mb-6">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <img
                          src="/images/ratul/Icons.png"
                          alt="University Icon"
                          className="w-10 h-10"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">আপনার যোগ্যতা যাচাইকরণ</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      আপনার স্বপ্নের বিশ্ববিদ্যালয়ে ভর্তি হওয়ার যোগ্যতা রয়েছে কি না তা জানুন
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                      আপনার যোগ্যতা যাচাই করুন
                    </Button>

                    {/* Footer with avatars */}
                    <div className="flex items-center gap-2 justify-center">
                      <div className="flex -space-x-2">
                        <img
                            src="https://randomuser.me/api/portraits/women/65.jpg"
                            className="w-8 h-8 rounded-full border-2 border-white"
                            alt="User 1"
                        />
                        <img
                            src="https://randomuser.me/api/portraits/men/45.jpg"
                            className="w-8 h-8 rounded-full border-2 border-white"
                            alt="User 2"
                        />
                      </div>
                      <p className="text-xs text-gray-600 ml-2">
                        গত সপ্তাহে ১০০+ শিক্ষার্থী যোগ্যতা যাচাই করেছেন
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Sidebar Content */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">সহায়তা</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      আরো তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন
                    </p>
                    <Button variant="outline" className="w-full">
                      যোগাযোগ করুন
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
