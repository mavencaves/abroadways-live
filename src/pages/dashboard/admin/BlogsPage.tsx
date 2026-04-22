import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Download, Plus, Search, MoreVertical, TrendingUp, Edit, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { blogsApi } from "@/lib/api";
import { toast } from "sonner";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  image?: string;
  category: string;
  status: "published" | "draft" | "archived";
  clicks: number;
  createdAt: string;
  updatedAt: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    image: "",
    category: "",
    status: "draft" as "published" | "draft" | "archived",
  });

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogsApi.getAll();
      setBlogs(response.data);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      content: "",
      author: "",
      image: "",
      category: "",
      status: "draft",
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      author: blog.author,
      image: blog.image || "",
      category: blog.category || "",
      status: blog.status,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async () => {
    try {
      const payload = { ...formData, status: formData.status || "draft" };
      if (editingBlog) {
        await blogsApi.update(editingBlog._id, payload);
        toast.success("Blog updated successfully");
      } else {
        await blogsApi.create(payload);
        toast.success("Blog created successfully");
      }
      setIsDialogOpen(false);
      loadBlogs();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to save blog");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await blogsApi.delete(id);
      toast.success("Blog deleted successfully");
      loadBlogs();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to delete blog");
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || blog.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const publishedCount = blogs.filter((blog) => blog.status === "published").length;
  const draftCount = blogs.filter((blog) => blog.status === "draft").length;
  const archivedCount = blogs.filter((blog) => blog.status === "archived").length;

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  if (loading) {
    return <div className="container mx-auto p-6">Loading blogs...</div>;
  }

  return (
    <div className="container mx-auto space-y-6 p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="border border-gray-200 bg-white">
          <CardContent className="p-6">
            <h3 className="mb-2 text-sm text-gray-600">Total blogs</h3>
            <p className="mb-2 text-4xl font-bold">{blogs.length}</p>
            <div className="flex items-center gap-2 text-sm text-teal-500">
              <TrendingUp className="h-4 w-4" />
              <span>{blogs.length} blog posts in the system</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 bg-white">
          <CardContent className="p-6">
            <h3 className="mb-2 text-sm text-gray-600">Draft blogs</h3>
            <p className="mb-2 text-4xl font-bold">{draftCount}</p>
            <div className="flex items-center gap-2 text-sm text-teal-500">
              <TrendingUp className="h-4 w-4" />
              <span>Waiting for review or publishing</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 bg-white">
          <CardContent className="p-6">
            <h3 className="mb-2 text-sm text-gray-600">Published</h3>
            <p className="mb-2 text-4xl font-bold">{publishedCount}</p>
            <div className="flex items-center gap-2 text-sm text-teal-500">
              <TrendingUp className="h-4 w-4" />
              <span>Live on the public blog</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 bg-white">
          <CardContent className="p-6">
            <h3 className="mb-2 text-sm text-gray-600">Archived</h3>
            <p className="mb-2 text-4xl font-bold">{archivedCount}</p>
            <div className="flex items-center gap-2 text-sm text-teal-500">
              <TrendingUp className="h-4 w-4" />
              <span>Stored for future reference</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-800">Blogs</h1>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Button className="gap-2 bg-blue-700 hover:bg-blue-800" onClick={handleCreate}>
            <Plus className="h-4 w-4" />
            Add Blog
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input
            placeholder="Search blogs"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader className="bg-blue-50">
            <TableRow>
              <TableHead className="font-semibold">Title</TableHead>
              <TableHead className="font-semibold">Category</TableHead>
              <TableHead className="font-semibold">Clicks</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBlogs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="py-8 text-center text-gray-500">
                  No blogs found.
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
                          className="h-12 w-12 rounded-lg object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/48";
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
                        blog.status === "published"
                          ? "bg-teal-100 text-teal-700"
                          : blog.status === "draft"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-700"
                      }
                    >
                      {blog.status === "published" ? "Published" : blog.status === "draft" ? "Draft" : "Archived"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEdit(blog)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(blog._id)}>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingBlog ? "Edit blog" : "Create blog"}</DialogTitle>
            <DialogDescription>
              {editingBlog ? "Update the selected blog post." : "Add a new blog post to the Abroadways CMS."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Blog title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Blog content"
                rows={10}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="Author name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="Category"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
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
                <Label htmlFor="status">Status</Label>
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
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} className="bg-blue-700 hover:bg-blue-800">
              {editingBlog ? "Update Blog" : "Create Blog"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
