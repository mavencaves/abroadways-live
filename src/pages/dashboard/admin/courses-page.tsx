import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Download, Plus, Search, MoreVertical, TrendingUp, ChevronRight } from "lucide-react"

const courses = [
    {
        id: 1,
        name: "IELTS স্পিকিং টেস্ট প্রস্তুতি",
        image: "/placeholder-course-1.jpg",
        instructor: "সাফা নাওয়ার",
        method: "অনলাইন",
        price: "BDT ২,৫০০",
        date: "১৯ অক্টোবর ২০২৫",
        status: "সক্রিয়",
    },
    {
        id: 2,
        name: "SAT প্রস্তুতি",
        image: "/placeholder-course-2.jpg",
        instructor: "তাহের আহসান",
        method: "অনলাইন",
        price: "BDT ২,০০০",
        date: "১৯ অক্টোবর ২০২৫",
        status: "সক্রিয়",
    },
    {
        id: 3,
        name: "PTE রিডিং টেস্ট প্রস্তুতি",
        image: "/placeholder-course-3.jpg",
        instructor: "আলভি রহমান",
        method: "অনলাইন",
        price: "BDT ১,৮০০",
        date: "১৮ অক্টোবর ২০২৫",
        status: "সক্রিয়",
    },
    {
        id: 4,
        name: "IELTS রাইটিং টেস্ট প্রস্তুতি",
        image: "/placeholder-course-4.jpg",
        instructor: "রাফা ইয়াসমিন",
        method: "অনলাইন",
        price: "BDT ২,৫০০",
        date: "১৭ অক্টোবর ২০২৫",
        status: "সক্রিয়",
    },
    {
        id: 5,
        name: "GMAT প্রস্তুতি",
        image: "/placeholder-course-5.jpg",
        instructor: "সারাহ মেহজাবিন",
        method: "অনলাইন",
        price: "BDT ২,৭০০",
        date: "১৭ অক্টোবর ২০২৫",
        status: "সক্রিয়",
    },
    {
        id: 6,
        name: "GRE প্রস্তুতি",
        image: "/placeholder-course-6.jpg",
        instructor: "নাফিস সুলতান",
        method: "অনলাইন",
        price: "BDT ২,৮০০",
        date: "১৬ অক্টোবর ২০২৫",
        status: "সক্রিয়",
    },
]

export default function CoursesPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesStatus = statusFilter === "all" || course.status === statusFilter
        return matchesSearch && matchesStatus
    })

    return (
        <div className="container mx-auto p-6 space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <h3 className="text-sm text-gray-600 mb-2">কোর্সসমূহ</h3>
                        <p className="text-4xl font-bold mb-2">১২৫</p>
                        <div className="flex items-center gap-2 text-teal-500 text-sm">
                            <TrendingUp className="w-4 h-4" />
                            <span>গড়ের চেয়ে ৯.৮৭% বেশি</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <h3 className="text-sm text-gray-600 mb-2">ড্রাফট কোর্সসমূহ</h3>
                        <p className="text-4xl font-bold mb-2">১০</p>
                        <div className="flex items-center gap-2 text-teal-500 text-sm">
                            <TrendingUp className="w-4 h-4" />
                            <span>গড়ের চেয়ে ৯.৮৭% বেশি</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <h3 className="text-sm text-gray-600 mb-2">আর্কাইভ করা কোর্সসমূহ</h3>
                        <p className="text-4xl font-bold mb-2">২</p>
                        <div className="flex items-center gap-2 text-teal-500 text-sm">
                            <TrendingUp className="w-4 h-4" />
                            <span>গড়ের চেয়ে ৯.৮৭% বেশি</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Header and Actions */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-purple-600">কোর্সসমূহ</h1>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        এক্সপোর্ট CSV ফাইল
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                        <Plus className="w-4 h-4" />
                        কোর্স যোগ করুন
                    </Button>
                </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                        placeholder="সার্চ করুন"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="অবস্থা" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">সকল</SelectItem>
                        <SelectItem value="সক্রিয়">সক্রিয়</SelectItem>
                        <SelectItem value="ড্রাফট">ড্রাফট</SelectItem>
                        <SelectItem value="আর্কাইভ">আর্কাইভ</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Courses Table */}
            <div className="border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader className="bg-purple-100/50">
                        <TableRow>
                            <TableHead className="font-semibold">কোর্সের নাম</TableHead>
                            <TableHead className="font-semibold">শিক্ষক</TableHead>
                            <TableHead className="font-semibold">পদ্ধতি</TableHead>
                            <TableHead className="font-semibold">মূল্য</TableHead>
                            <TableHead className="font-semibold">তারিখ</TableHead>
                            <TableHead className="font-semibold">অবস্থা</TableHead>
                            <TableHead className="font-semibold">কার্যক্রম</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredCourses.map((course) => (
                            <TableRow key={course.id} className="hover:bg-gray-50">
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={course.image}
                                            alt={course.name}
                                            className="w-12 h-12 rounded-lg object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://via.placeholder.com/48"
                                            }}
                                        />
                                        <span className="font-medium">{course.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{course.instructor}</TableCell>
                                <TableCell>{course.method}</TableCell>
                                <TableCell>{course.price}</TableCell>
                                <TableCell>{course.date}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="secondary"
                                        className="bg-teal-100 text-teal-700 hover:bg-teal-100"
                                    >
                                        {course.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreVertical className="w-4 h-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>দেখুন</DropdownMenuItem>
                                            <DropdownMenuItem>সম্পাদনা করুন</DropdownMenuItem>
                                            <DropdownMenuItem>ডুপ্লিকেট করুন</DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600">
                                                মুছুন
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                    ১২৫টি কোর্সের মধ্যে ১ থেকে ৬টি এন্ট্রি দেখানো হচ্ছে
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                    পরবর্তী
                    <ChevronRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}
