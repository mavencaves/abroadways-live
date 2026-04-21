import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Bell, Mail, Shield, Plug } from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="container max-w-4xl mx-auto p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-purple-600">সেটিংস</h1>
                <p className="text-gray-600 mt-2">
                    আপনার অ্যাডমিন ড্যাশবোর্ডের পছন্দ এবং কনফিগারেশন পরিচালনা করুন
                </p>
            </div>

            <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-purple-100/50">
                    <TabsTrigger value="general" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                        জেনারেল
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                        নোটিফিকেশান
                    </TabsTrigger>
                    <TabsTrigger value="security" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                        নিরাপত্তা
                    </TabsTrigger>
                    <TabsTrigger value="integrations" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                        ইন্টিগ্রেশনস
                    </TabsTrigger>
                </TabsList>

                {/* General Tab */}
                <TabsContent value="general" className="space-y-6 mt-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                <span className="text-purple-600">👤</span>
                            </div>
                            <h2 className="text-xl font-semibold">প্রোফাইল তথ্য</h2>
                        </div>
                        <p className="text-sm text-gray-600">আপনার ব্যক্তিগত তথ্য আপডেট করুন</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-purple-600">প্রথম নাম</Label>
                            <Input id="firstName" placeholder="আপনার প্রথম নাম লিখুন" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-purple-600">শেষ নাম</Label>
                            <Input id="lastName" placeholder="আপনার শেষ নাম লিখুন" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-purple-600">ইমেইল</Label>
                        <Input id="email" type="email" placeholder="আপনার ইমেইল লিখুন" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-purple-600">ফোন নাম্বার</Label>
                        <Input id="phone" placeholder="আপনার ফোন নাম্বার লিখুন" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="bio" className="text-purple-600">বায়ো</Label>
                        <Textarea
                            id="bio"
                            placeholder="আমাদের আপনার সম্পর্কে বলুন"
                            className="min-h-[120px]"
                        />
                    </div>

                    <div className="flex gap-4">
                        <Button className="bg-purple-600 hover:bg-purple-700">পরিবর্তনগুলি সেভ করুন</Button>
                        <Button variant="outline">বাতিল করুন</Button>
                    </div>

                    <div className="border-t pt-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🎨</span>
                            <h2 className="text-xl font-semibold">দেখানোর ধরন</h2>
                        </div>
                        <p className="text-sm text-gray-600">আপনার ড্যাশবোর্ডের লুক এবং ফিল কাস্টমাইজ করুন</p>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <p className="font-medium">ডার্ক মোড</p>
                            <p className="text-sm text-gray-600">ড্যাশবোর্ডের জন্য ডার্ক মোড সক্রিয় করুন</p>
                        </div>
                        <Switch />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <p className="font-medium">কমপ্যাক্ট ভিউ</p>
                            <p className="text-sm text-gray-600">একটি কমপ্যাক্ট লেআউট ব্যবহার করুন</p>
                        </div>
                        <Switch />
                    </div>

                    <div className="border-t pt-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🌍</span>
                            <h2 className="text-xl font-semibold">আঞ্চলিক সেটিংস</h2>
                        </div>
                        <p className="text-sm text-gray-600">টাইমজোন এবং ভাষার পছন্দগুলি পরিচালনা করুন</p>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-purple-600">টাইমজোন</Label>
                        <Select defaultValue="utc-5">
                            <SelectTrigger>
                                <SelectValue placeholder="UTC-5 (ইস্টার্ন টাইম)" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="utc-5">UTC-5 (ইস্টার্ন টাইম)</SelectItem>
                                <SelectItem value="utc+6">UTC+6 (বাংলাদেশ সময়)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-purple-600">ভাষা</Label>
                        <Select defaultValue="en">
                            <SelectTrigger>
                                <SelectValue placeholder="ইংরেজি (US)" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">ইংরেজি (US)</SelectItem>
                                <SelectItem value="bn">বাংলা</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-purple-600">তারিখের ফরম্যাট</Label>
                        <Input defaultValue="MM/DD/YYYY" />
                    </div>
                </TabsContent>

                {/* Notifications Tab */}
                <TabsContent value="notifications" className="space-y-6 mt-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Bell className="w-6 h-6 text-purple-600" />
                            <h2 className="text-xl font-semibold">ইমেইল নোটিফিকেশন</h2>
                        </div>
                        <p className="text-sm text-gray-600">নির্ধারণ করুন কোন ইমেইল নোটিফিকেশন আপনি পাবেন</p>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <p className="font-medium">নতুন ইউজার রেজিস্ট্রেশন</p>
                            <p className="text-sm text-gray-600">নতুন ইউজার সাইন আপ করলে নোটিফিকেশন পান</p>
                        </div>
                        <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <p className="font-medium">নতুন AI কুয়েরি</p>
                            <p className="text-sm text-gray-600">নতুন পরামর্শ অনুরোধের জন্য সতর্কতা পান</p>
                        </div>
                        <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <p className="font-medium">কোর্স এনরোলমেন্ট</p>
                            <p className="text-sm text-gray-600">নতুন কোর্স এনরোলমেন্টের নোটিফিকেশন পান</p>
                        </div>
                        <Switch />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <p className="font-medium">ব্লগ মন্তব্য</p>
                            <p className="text-sm text-gray-600">নতুন ব্লগ মন্তব্যের নোটিফিকেশন পান</p>
                        </div>
                        <Switch />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <p className="font-medium">সাপ্তাহিক রিপোর্ট</p>
                            <p className="text-sm text-gray-600">সাপ্তাহিক বিশ্লেষণ সংক্ষেপ পান</p>
                        </div>
                        <Switch defaultChecked />
                    </div>

                    <div className="border-t pt-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <Mail className="w-6 h-6 text-purple-600" />
                            <h2 className="text-xl font-semibold">পুশ নোটিফিকেশন</h2>
                        </div>
                        <p className="text-sm text-gray-600">ব্রাউজার পুশ নোটিফিকেশন পরিচালনা করুন</p>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <p className="font-medium">পুশ নোটিফিকেশন সক্রিয় করুন</p>
                            <p className="text-sm text-gray-600">ব্রাউজারে রিয়েল-টাইম আপডেট পান</p>
                        </div>
                        <Switch />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <p className="font-medium">সাউন্ড সতর্কতা</p>
                            <p className="text-sm text-gray-600">গুরুত্বপূর্ণ নোটিফিকেশনের জন্য শব্দ বাজান</p>
                        </div>
                        <Switch />
                    </div>
                </TabsContent>

                {/* Security Tab */}
                <TabsContent value="security" className="space-y-6 mt-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Shield className="w-6 h-6 text-purple-600" />
                            <h2 className="text-xl font-semibold">পাসওয়ার্ড পরিবর্তন</h2>
                        </div>
                        <p className="text-sm text-gray-600">আপনার অ্যাকাউন্টের পাসওয়ার্ড আপডেট করুন</p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="currentPassword" className="text-purple-600">বর্তমান পাসওয়ার্ড</Label>
                        <Input id="currentPassword" type="password" placeholder="আপনার বর্তমান পাসওয়ার্ড লিখুন" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="newPassword" className="text-purple-600">নতুন পাসওয়ার্ড</Label>
                        <Input id="newPassword" type="password" placeholder="আপনার নতুন পাসওয়ার্ড লিখুন" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-purple-600">নতুন পাসওয়ার্ড নিশ্চিত করুন</Label>
                        <Input id="confirmPassword" type="password" placeholder="নতুন পাসওয়ার্ড নিশ্চিত করুন" />
                    </div>

                    <Button className="bg-purple-600 hover:bg-purple-700">পাসওয়ার্ড আপডেট করুন</Button>

                    <div className="border-t pt-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <Shield className="w-6 h-6 text-purple-600" />
                            <h2 className="text-xl font-semibold">দুই-স্তরের প্রমাণীকরণ (Two-Factor Authentication)</h2>
                        </div>
                        <p className="text-sm text-gray-600">আপনার অ্যাকাউন্টের সুরক্ষার জন্য অতিরিক্ত স্তর যোগ করুন</p>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <p className="font-medium">2FA সক্রিয় করুন</p>
                            <p className="text-sm text-gray-600">লগইনের জন্য প্রমাণীকরণ কোড প্রয়োজন</p>
                        </div>
                        <Switch />
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                            দুই-ধাপ প্রমাণীকরণ (Two-factor authentication) লগইনের সময় কেবল পাসওয়ার্ডের চেয়ে বেশি কিছু প্রমাণের প্রয়োজনীয়তার মাধ্যমে একটি অতিরিক্ত নিরাপত্তা স্তর যোগ করে।
                        </p>
                    </div>

                    <Button variant="outline">2FA সেট আপ করুন</Button>

                    <div className="border-t pt-6 space-y-4">
                        <h2 className="text-xl font-semibold">সক্রিয় সেশনসমূহ</h2>
                        <p className="text-sm text-gray-600">আপনার সক্রিয় লগইন সেশনগুলি পরিচালনা করুন</p>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">বর্তমান সেশন</p>
                                <p className="text-sm text-gray-600">উইন্ডোজে ক্রোম • ঢাকা, বাংলাদেশ</p>
                            </div>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">সক্রিয়</span>
                        </div>
                    </div>

                    <Button variant="destructive">সব অন্যান্য সেশন থেকে সাইন আউট করুন</Button>
                </TabsContent>

                {/* Integrations Tab */}
                <TabsContent value="integrations" className="space-y-6 mt-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Plug className="w-6 h-6 text-purple-600" />
                            <h2 className="text-xl font-semibold">API সেটিংস</h2>
                        </div>
                        <p className="text-sm text-gray-600">API কী এবং ইন্টিগ্রেশনগুলি পরিচালনা করুন</p>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-purple-600">API কী</Label>
                        <div className="flex gap-2">
                            <Input type="password" value="*************************" readOnly />
                            <Button variant="outline">কপি</Button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-purple-600">ওয়েবহুক URL</Label>
                        <Input defaultValue="https://your-domain.com/webhook" />
                    </div>

                    <Button className="bg-purple-600 hover:bg-purple-700">নতুন API কী তৈরি করুন</Button>

                    <div className="border-t pt-6 space-y-4">
                        <h2 className="text-xl font-semibold">তৃতীয়-পক্ষের ইন্টিগ্রেশনসমূহ</h2>
                        <p className="text-sm text-gray-600">বাইরের সেবা এবং টুলগুলির সাথে সংযোগ করুন</p>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <p className="font-medium">গুগল অ্যানালিটিক্স</p>
                            <p className="text-sm text-gray-600">ওয়েবসাইট বিশ্লেষণ ট্র্যাক করুন</p>
                        </div>
                        <Button className="bg-purple-600 hover:bg-purple-700">সংযোগ করুন</Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <p className="font-medium">মেইলচিম্প</p>
                            <p className="text-sm text-gray-600">ইমেইল মার্কেটিং অটোমেশন</p>
                        </div>
                        <Button className="bg-purple-600 hover:bg-purple-700">সংযোগ করুন</Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <p className="font-medium">স্ট্রাইপ</p>
                            <p className="text-sm text-gray-600">পেমেন্ট প্রসেসিং</p>
                        </div>
                        <Button className="bg-purple-600 hover:bg-purple-700">সংযোগ করুন</Button>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
