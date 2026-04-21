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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Download, Plus, Search, MoreVertical, TrendingUp, Edit, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"
import { blogsApi } from "@/lib/api"
import { toast } from "sonner"

interface Blog {
    _id: string;
    title: string;
    content: string;
    author: string;
    image?: string;
    category: string;
    status: 'published' | 'draft' | 'archived';
    clicks: number;
    createdAt: string;
    updatedAt: string;
}

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState<string>("all")
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        author: "",
        image: "",
        category: "",
        status: "draft" as 'published' | 'draft' | 'archived',
    })

    useEffect(() => {
        loadBlogs()
    }, [])

    const loadBlogs = async () => {
        try {
            setLoading(true)
            const response = await blogsApi.getAll()
            setBlogs(response.data)
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to load blogs")
        } finally {
            setLoading(false)
        }
    }

    const handleCreate = () => {
        setEditingBlog(null)
        setFormData({
            title: "",
            content: "",
            author: "",
            image: "",
            category: "",
            status: "draft",
        })
        setIsDialogOpen(true)
    }

    const handleEdit = (blog: Blog) => {
        setEditingBlog(blog)
        setFormData({
            title: blog.title,
            content: blog.content,
            author: blog.author,
            image: blog.image || "",
            category: blog.category || "",
            status: blog.status,
        })
        setIsDialogOpen(true)
    }

    const handleSubmit = async () => {
        try {
            const payload = {
                ...formData,
                status: formData.status || "draft",
            };
            if (editingBlog) {
                await blogsApi.update(editingBlog._id, payload)
                toast.success("Blog updated successfully")
            } else {
                await blogsApi.create(payload)
                toast.success("Blog created successfully")
            }
            setIsDialogOpen(false)
            loadBlogs()
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to save blog")
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this blog?")) return
        try {
            await blogsApi.delete(id)
            toast.success("Blog deleted successfully")
            loadBlogs()
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to delete blog")
        }
    }

    const filteredBlogs = blogs.filter((blog) => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.content.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = statusFilter === "all" || blog.status === statusFilter
        return matchesSearch && matchesStatus
    })

    const publishedCount = blogs.filter(b => b.status === 'published').length
    const draftCount = blogs.filter(b => b.status === 'draft').length
    const archivedCount = blogs.filter(b => b.status === 'archived').length

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    if (loading) {
        return <div className="container mx-auto p-6">Loading...</div>
    }

    return (
        <div className="container mx-auto p-6 space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <h3 className="text-sm text-gray-600 mb-2">ব্লগসমূহ</h3>
                        <p className="text-4xl font-bold mb-2">{blogs.length}</p>
                        <div className="flex items-center gap-2 text-teal-500 text-sm">
                            <TrendingUp className="w-4 h-4" />
                            <span>মোট {blogs.length}টি ব্লগ</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <h3 className="text-sm text-gray-600 mb-2">ড্রাফট ব্লগ</h3>
                        <p className="text-4xl font-bold mb-2">{draftCount}</p>
                        <div className="flex items-center gap-2 text-teal-500 text-sm">
                            <TrendingUp className="w-4 h-4" />
                            <span>প্রকাশের অপেক্ষায়</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <h3 className="text-sm text-gray-600 mb-2">প্রকাশিত</h3>
                        <p className="text-4xl font-bold mb-2">{publishedCount}</p>
                        <div className="flex items-center gap-2 text-teal-500 text-sm">
                            <TrendingUp className="w-4 h-4" />
                            <span>সক্রিয় ব্লগ</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <h3 className="text-sm text-gray-600 mb-2">আর্কাইভ</h3>
                        <p className="text-4xl font-bold mb-2">{archivedCount}</p>
                        <div className="flex items-center gap-2 text-teal-500 text-sm">
                            <TrendingUp className="w-4 h-4" />
                            <span>সংরক্ষিত ব্লগ</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Header and Actions */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-purple-600">ব্লগসমূহ</h1>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        এক্সপোর্ট CSV ফাইল
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 gap-2" onClick={handleCreate}>
                        <Plus className="w-4 h-4" />
                        ব্লগ যোগ করুন
                    </Button>
                </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                        placeholder="সার্চ করুন"
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="অবস্থা" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">সকল</SelectItem>
                        <SelectItem value="published">প্রকাশিত</SelectItem>
                        <SelectItem value="draft">ড্রাফট</SelectItem>
                        <SelectItem value="archived">আর্কাইভ</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Blogs Table */}
            <div className="border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader className="bg-purple-100/50">
                        <TableRow>
                            <TableHead className="font-semibold">ব্লগ শিরোনাম</TableHead>
                            <TableHead className="font-semibold">ক্যাটেগরি</TableHead>
                            <TableHead className="font-semibold">ক্লিক</TableHead>
                            <TableHead className="font-semibold">তারিখ</TableHead>
                            <TableHead className="font-semibold">অবস্থা</TableHead>
                            <TableHead className="font-semibold">কার্যক্রম</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredBlogs.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                                    No blogs found
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredBlogs.map((blog) => (
                                <TableRow key={blog._id} className="hover:bg-gray-50">
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            {blog.image && (
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="w-12 h-12 rounded-lg object-cover"
                                                    onError={(e) => {
                                                        e.currentTarget.src = "https://via.placeholder.com/48"
                                                    }}
                                                />
                                            )}
                                            <span className="font-medium">{blog.title}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{blog.category || "N/A"}</TableCell>
                                    <TableCell>{blog.clicks || 0}</TableCell>
                                    <TableCell>{formatDate(blog.createdAt)}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="secondary"
                                            className={
                                                blog.status === 'published' ? "bg-teal-100 text-teal-700" :
                                                    blog.status === 'draft' ? "bg-yellow-100 text-yellow-700" :
                                                        "bg-gray-100 text-gray-700"
                                            }
                                        >
                                            {blog.status === 'published' ? 'প্রকাশিত' :
                                                blog.status === 'draft' ? 'ড্রাফট' : 'আর্কাইভ'}
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
                                                <DropdownMenuItem onClick={() => handleEdit(blog)}>
                                                    <Edit className="w-4 h-4 mr-2" />
                                                    সম্পাদনা করুন
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="text-red-600"
                                                    onClick={() => handleDelete(blog._id)}
                                                >
                                                    <Trash2 className="w-4 h-4 mr-2" />
                                                    মুছুন
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Create/Edit Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>{editingBlog ? "সম্পাদনা করুন" : "নতুন ব্লগ যোগ করুন"}</DialogTitle>
                        <DialogDescription>
                            {editingBlog ? "ব্লগের তথ্য আপডেট করুন" : "নতুন ব্লগ তৈরি করুন"}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">শিরোনাম</Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="ব্লগ শিরোনাম"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="content">বিষয়বস্তু</Label>
                            <Textarea
                                id="content"
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                placeholder="ব্লগ বিষয়বস্তু"
                                rows={10}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="author">লেখক</Label>
                                <Input
                                    id="author"
                                    value={formData.author}
                                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                    placeholder="লেখকের নাম"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="category">ক্যাটেগরি</Label>
                                <Input
                                    id="category"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    placeholder="ক্যাটেগরি"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="image">ছবির URL</Label>
                                <Input
                                    id="image"
                                    type="url"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    onPaste={(event) => {
                                        const pasted = event.clipboardData.getData("text");
                                        if (pasted) {
                                            event.preventDefault();
                                            setFormData({ ...formData, image: pasted });
                                        }
                                    }}
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="status">অবস্থা</Label>
                                <Select
                                    value={formData.status}
                                    onValueChange={(value: "draft" | "published" | "archived") =>
                                        setFormData((prev) => ({ ...prev, status: value }))
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="draft">ড্রাফট</SelectItem>
                                        <SelectItem value="published">প্রকাশিত</SelectItem>
                                        <SelectItem value="archived">আর্কাইভ</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                            বাতিল
                        </Button>
                        <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700">
                            {editingBlog ? "আপডেট করুন" : "যোগ করুন"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}