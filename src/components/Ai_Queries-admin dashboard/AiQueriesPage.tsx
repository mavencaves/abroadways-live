import  { useMemo, useState } from "react";
import {
  Upload,
  Search,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Pencil,
  Trash2,
  MoreVertical,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

type QueryStatus = "সমাধান হয়েছে" | "ত্রুটি";

type QueryRow = {
  id: string;
  user: string;
  avatar?: string;
  query: string;
  time: string;
  status: QueryStatus;
};

const initialRows: QueryRow[] = [
  {
    id: "1",
    user: "সাদিয়া আক্তার",
    avatar: "/images/Ai_queries-Admin dashboard/user6.jpg",
    query: "কানাডায় কম্পিউটার সায়েন্সের সেরা বিশ্ববিদ্যালয়সমূহ",
    time: "২০-১০-২০২৫ রাত ৮:৩০",
    status: "সমাধান হয়েছে",
  },
  {
    id: "2",
    user: "মামিন দিশা",
    avatar: "/images/Ai_queries-Admin dashboard/user2.jpg",
    query: "আপনার বর্তমান প্রোফাইল দিয়ে F1 ভিসার সফলতার হার",
    time: "২০-১০-২০২৫ রাত ৮:২৪",
    status: "সমাধান হয়েছে",
  },
  {
    id: "3",
    user: "মিনহাজ হোসেন",
    avatar: "/images/Ai_queries-Admin dashboard/user3.jpg",
    query: "স্কলারশিপ অপশনসমূহ যুক্তরাজ্যে এমবিএ প্রোগ্রামসমূহ",
    time: "২০-১০-২০২৫ রাত ৭:৫৯",
    status: "সমাধান হয়েছে",
  },
  {
    id: "4",
    user: "আয়রিন জানিন",
    avatar: "/images/Ai_queries-Admin dashboard/user4.jpg",
    query: "জার্মানিতে ফাউন্ডেশন কোর্স এবং ভিসা যোগ্যতা",
    time: "২০-১০-২০২৫ রাত ৮:৪৮",
    status: "সমাধান হয়েছে",
  },
  {
    id: "5",
    user: "মারিনা তাসনিম",
    avatar: "/images/Ai_queries-Admin dashboard/user5.jpg",
    query: "৪.০ IELTS নিয়ে যুক্তরাজ্যের স্টুডেন্ট ভিসা কেমন সম্ভব?",
    time: "২০-১০-২০২৫ রাত ৭:৩৩",
    status: "ত্রুটি",
  },
  {
    id: "6",
    user: "রাইহান করিম",
    avatar: "/images/Ai_queries-Admin dashboard/user1.jpg",
    query: "যুক্তরাষ্ট্র ও কানাডায় বিশ্ববিদ্যালয়গুলোর তুলনা",
    time: "২০-১০-২০২৫ রাত ৭:২০",
    status: "সমাধান হয়েছে",
  },
];

const bn = new Intl.NumberFormat("bn-BD");

const StatCard = ({
                    label,
                    value,
                    delta,
                  }: {
  label: string;
  value: string;
  delta: string;
}) => (
    <Card>
      <CardContent className="pt-6">
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="mt-3 flex items-baseline gap-3">
          <div className="text-3xl font-semibold tracking-tight">{value}</div>
          <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
            <ArrowUpRight className="h-3.5 w-3.5" />
            {delta}
          </div>
        </div>
      </CardContent>
    </Card>
);

const statusConfig = {
  "সমাধান হয়েছে": {
    badgeClass: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
    dotColor: "bg-emerald-500",
  },
  ত্রুটি: {
    badgeClass: "bg-rose-50 text-rose-700 hover:bg-rose-100",
    dotColor: "bg-rose-500",
  },
};

export default function AIQueriesDashboard() {
  const [rows, setRows] = useState<QueryRow[]>(initialRows);
  const [statusFilter, setStatusFilter] = useState<"সব" | QueryStatus>("সব");

  const filteredRows = useMemo(() => {
    if (statusFilter === "সব") return rows;
    return rows.filter((r) => r.status === statusFilter);
  }, [rows, statusFilter]);

  const setRowStatus = (id: string, status: QueryStatus) => {
    setRows((curr) => curr.map((r) => (r.id === id ? { ...r, status } : r)));
  };

  return (
      <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-10">
        <div className="mx-auto container space-y-8">
          {/* Stat cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard
                label="মোট কুয়েরি"
                value={bn.format(2400)}
                delta="গতের চেয়ে ২.৮৭% বেশি"
            />
            <StatCard
                label="গড় সাড়া দেওয়ার সময়"
                value={`${bn.format(300)} মিলিসেকন্ড`}
                delta="গতের চেয়ে ২.৮৭% বেশি"
            />
            <StatCard
                label="কনভার্সন হার"
                value="৩.৫%"
                delta="গতের চেয়ে ২.৮৭% বেশি"
            />
          </div>

          {/* Card */}
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle className="text-2xl">AI কুয়েরি</CardTitle>
                <Button size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  এক্সপোর্ট CSV ফাইল
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              {/* Search and Filter */}
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="সার্চ করুন" className="pl-10" />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      অবস্থা <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => setStatusFilter("সব")}>
                      সব দেখান
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setStatusFilter("সমাধান হয়েছে")}
                    >
                      <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      সমাধান হয়েছে
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("ত্রুটি")}>
                      <span className="mr-2 h-2.5 w-2.5 rounded-full bg-rose-500" />
                      ত্রুটি
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Table */}
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ব্যবহারকারী</TableHead>
                      <TableHead>কুয়েরি</TableHead>
                      <TableHead>সময়</TableHead>
                      <TableHead>অবস্থা</TableHead>
                      <TableHead className="w-[70px]">কার্যক্রম</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-9 w-9">
                                <AvatarImage src={row.avatar} alt={row.user} />
                                <AvatarFallback>
                                  {row.user.trim().charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{row.user}</span>
                            </div>
                          </TableCell>
                          <TableCell>{row.query}</TableCell>
                          <TableCell>{row.time}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={`h-auto rounded-full px-2.5 py-1 text-xs font-medium ${statusConfig[row.status].badgeClass}`}
                                >
                                  {row.status}
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                    onClick={() =>
                                        setRowStatus(row.id, "সমাধান হয়েছে")
                                    }
                                >
                                  <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                  সমাধান হয়েছে
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => setRowStatus(row.id, "ত্রুটি")}
                                >
                                  <span className="mr-2 h-2.5 w-2.5 rounded-full bg-rose-500" />
                                  ত্রুটি
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                >
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Pencil className="mr-2 h-4 w-4" />
                                  এডিট
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  ডিলিট
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <p className="text-sm text-muted-foreground">
                  {`${bn.format(2400)}টি AI কুয়েরির মধ্যে ১ থেকে ${bn.format(
                      Math.min(filteredRows.length, 6)
                  )}টি দেখানো হচ্ছে`}
                </p>
                <Button size="sm">
                  পরবর্তী <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
