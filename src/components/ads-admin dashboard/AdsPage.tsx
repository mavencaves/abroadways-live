"use client";

import React, { useMemo, useState } from "react";
import {
  Upload,
  Plus,
  Search,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Pencil,
  Trash2,
  MoreVertical,
} from "lucide-react";

// Import shadcn components (install these first)
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
import { Badge } from "@/components/ui/badge";

export type Campaign = {
  id: string;
  title: string;
  impressions: number;
  clicks: number;
  cost: number;
  date: string;
  status: "চলমান" | "খসড়া" | "বন্ধ";
};

const initialData: Campaign[] = [
  {
    id: "1",
    title: "ভিসা নির্দেশিকা",
    impressions: 24868,
    clicks: 263,
    cost: 60569,
    date: "১৯ অক্টোবর ২০২৫",
    status: "চলমান",
  },
  {
    id: "2",
    title: "বিদেশে পড়াশোনার প্রচারণা",
    impressions: 56398,
    clicks: 378,
    cost: 86969,
    date: "১৯ অক্টোবর ২০২৫",
    status: "চলমান",
  },
  {
    id: "3",
    title: "যুক্তরাজ্যে বৃত্তি খুঁজুন",
    impressions: 82489,
    clicks: 328,
    cost: 89125,
    date: "১৯ অক্টোবর ২০২৫",
    status: "চলমান",
  },
  {
    id: "4",
    title: "ফোনে ভর্তি সাপোর্ট",
    impressions: 20985,
    clicks: 168,
    cost: 89756,
    date: "১৯ অক্টোবর ২০২৫",
    status: "চলমান",
  },
  {
    id: "5",
    title: "ইউরোপে ভর্তি অভিযান",
    impressions: 23856,
    clicks: 163,
    cost: 58657,
    date: "১৯ অক্টোবর ২০২৫",
    status: "খসড়া",
  },
  {
    id: "6",
    title: "SAT মক টেস্ট চালু",
    impressions: 17054,
    clicks: 129,
    cost: 58909,
    date: "১৮ অক্টোবর ২০২৫",
    status: "বন্ধ",
  },
];

const formatBDN = (n: number) => new Intl.NumberFormat("bn-BD").format(n);

const statusConfig = {
  চলমান: { variant: "default" as const, color: "bg-sky-500" },
  খসড়া: { variant: "secondary" as const, color: "bg-amber-500" },
  বন্ধ: { variant: "destructive" as const, color: "bg-rose-500" },
};

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

const AdsDashboard: React.FC = () => {
  const [rows, setRows] = useState<Campaign[]>(initialData);
  const [statusFilter, setStatusFilter] = useState<"সব" | Campaign["status"]>(
      "সব"
  );

  const filteredRows = useMemo(() => {
    if (statusFilter === "সব") return rows;
    return rows.filter((r) => r.status === statusFilter);
  }, [rows, statusFilter]);

  const setStatus = (id: string, status: Campaign["status"]) => {
    setRows((curr) => curr.map((r) => (r.id === id ? { ...r, status } : r)));
  };

  return (
      <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-10">
        <div className="mx-auto container space-y-8">
          {/* Top Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard
                label="সক্রিয় বিজ্ঞাপন প্রচারণা"
                value="১২"
                delta="গতের চেয়ে ২.৮৭% বেশি"
            />
            <StatCard
                label="মোট ইমপ্রেশন"
                value="১৪,৫৬,৩২১"
                delta="গতের চেয়ে ২.৮৭% বেশি"
            />
            <StatCard
                label="মোট ক্লিক"
                value="২০,৪৬৩"
                delta="গতের চেয়ে ২.৮৭% বেশি"
            />
          </div>

          {/* Ads Table Card */}
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle className="text-2xl">বিজ্ঞাপন</CardTitle>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    এক্সপোর্ট CSV ফাইল
                  </Button>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    বিজ্ঞাপন যোগ করুন
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {/* Search and Filter */}
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                      placeholder="সার্চ করুন"
                      className="pl-10"
                  />
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
                    <DropdownMenuItem onClick={() => setStatusFilter("চলমান")}>
                      <span className="mr-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                      চলমান
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("খসড়া")}>
                      <span className="mr-2 h-2.5 w-2.5 rounded-full bg-amber-500" />
                      খসড়া
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("বন্ধ")}>
                      <span className="mr-2 h-2.5 w-2.5 rounded-full bg-rose-500" />
                      বন্ধ
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Table */}
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>প্রচারণা</TableHead>
                      <TableHead>ইমপ্রেশন</TableHead>
                      <TableHead>ক্লিক</TableHead>
                      <TableHead>মোট ব্যয়</TableHead>
                      <TableHead>তারিখ</TableHead>
                      <TableHead>অবস্থা</TableHead>
                      <TableHead className="w-[70px]">কার্যক্রম</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell className="font-medium">{row.title}</TableCell>
                          <TableCell>{formatBDN(row.impressions)}</TableCell>
                          <TableCell>{formatBDN(row.clicks)}</TableCell>
                          <TableCell>BDT {formatBDN(row.cost)}</TableCell>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-auto px-2.5 py-1 text-xs hover:bg-accent"
                                >
                                  <Badge
                                      variant={statusConfig[row.status].variant}
                                      className="cursor-pointer"
                                  >
                                    {row.status}
                                  </Badge>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                    onClick={() => setStatus(row.id, "চলমান")}
                                >
                                  <span className="mr-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                                  চলমান
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => setStatus(row.id, "খসড়া")}
                                >
                                  <span className="mr-2 h-2.5 w-2.5 rounded-full bg-amber-500" />
                                  খসড়া
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => setStatus(row.id, "বন্ধ")}
                                >
                                  <span className="mr-2 h-2.5 w-2.5 rounded-full bg-rose-500" />
                                  বন্ধ
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
                  {`${formatBDN(
                      filteredRows.length
                  )}টি বিজ্ঞাপনের মধ্যে ১ থেকে ${formatBDN(
                      Math.min(filteredRows.length, 6)
                  )}টি দেখানো হচ্ছে`}{" "}
                  — ফিল্টার: {statusFilter}
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
};

export default AdsDashboard;
