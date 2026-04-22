import { useEffect, useMemo, useState } from "react";
import {
  Download,
  Edit,
  FileText,
  MoreVertical,
  Plus,
  Search,
  ShieldCheck,
  Trash2,
  TrendingUp,
} from "lucide-react";
import { blogsApi } from "@/lib/api";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
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

type BlogStatusFilter = "all" | Blog["status"];
type SortOrder = "updated-desc" | "updated-asc";

const statusStyles: Record<Blog["status"], string> = {
  published: "bg-emerald-100 text-emerald-700",
  draft: "bg-amber-100 text-amber-700",
  archived: "bg-slate-100 text-slate-700",
};

const formatDateTime = (value: string) =>
  new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

const formatStatus = (status: Blog["status"]) =>
  status.charAt(0).toUpperCase() + status.slice(1);

export default function BlogsPage() {
  const { user } = useAuth();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<BlogStatusFilter>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("updated-desc");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    image: "",
    category: "",
    status: "draft" as Blog["status"],
  });

  const canManageBlogs = user ? ["admin", "content-manager"].includes(user.role) : false;

  const loadBlogs = async () => {
    if (!canManageBlogs) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setLoadError(null);
      const response = await blogsApi.getAll();
      const list = Array.isArray(response.data) ? response.data : [];
      setBlogs(list);
    } catch (error: any) {
      const status = error?.response?.status;
      const message =
        status === 401
          ? "Your session has expired. Please sign in again to continue managing blogs."
          : status === 403
            ? "Access denied. Only admin and content-manager accounts can manage blogs."
            : error?.response?.data?.message || "Failed to load blogs.";
      setLoadError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, [canManageBlogs]);

  const filteredBlogs = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return [...blogs]
      .filter((blog) => {
        const matchesSearch =
          !normalizedSearch ||
          blog.title.toLowerCase().includes(normalizedSearch) ||
          blog.content.toLowerCase().includes(normalizedSearch) ||
          blog.author.toLowerCase().includes(normalizedSearch) ||
          blog.category?.toLowerCase().includes(normalizedSearch);

        const matchesStatus = statusFilter === "all" || blog.status === statusFilter;
        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        const aTime = new Date(a.updatedAt || a.createdAt).getTime();
        const bTime = new Date(b.updatedAt || b.createdAt).getTime();
        return sortOrder === "updated-desc" ? bTime - aTime : aTime - bTime;
      });
  }, [blogs, searchTerm, statusFilter, sortOrder]);

  const publishedCount = blogs.filter((entry) => entry.status === "published").length;
  const draftCount = blogs.filter((entry) => entry.status === "draft").length;
  const archivedCount = blogs.filter((entry) => entry.status === "archived").length;

  const exportCsv = () => {
    if (!filteredBlogs.length) {
      toast.error("There are no blogs to export.");
      return;
    }

    const headers = ["Title", "Author", "Category", "Status", "Clicks", "Updated"];
    const rows = filteredBlogs.map((entry) =>
      [
        entry.title,
        entry.author,
        entry.category || "Uncategorized",
        formatStatus(entry.status),
        String(entry.clicks || 0),
        formatDateTime(entry.updatedAt || entry.createdAt),
      ]
        .map((value) => `"${String(value).replace(/"/g, "\"\"")}"`)
        .join(","),
    );

    const blob = new Blob([[headers.join(","), ...rows].join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "abroadways-blogs.csv";
    link.click();
    URL.revokeObjectURL(url);
    toast.success("CSV exported successfully.");
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
    if (!formData.title.trim() || !formData.content.trim() || !formData.author.trim()) {
      toast.error("Title, content, and author are required.");
      return;
    }

    try {
      setSaving(true);
      const payload = { ...formData, status: formData.status || "draft" };

      if (editingBlog) {
        await blogsApi.update(editingBlog._id, payload);
        toast.success("Blog updated successfully.");
      } else {
        await blogsApi.create(payload);
        toast.success("Blog created successfully.");
      }

      setIsDialogOpen(false);
      await loadBlogs();
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to save blog.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      setDeletingId(id);
      await blogsApi.delete(id);
      toast.success("Blog deleted successfully.");
      await loadBlogs();
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to delete blog.");
    } finally {
      setDeletingId(null);
    }
  };

  if (!canManageBlogs) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Content Management</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Blogs</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Create, update, and organize public blog content from one editorial workspace.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-4 p-8">
            <div className="flex items-center gap-3 text-amber-700">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-sm font-medium">
                Only admin and content-manager accounts can manage blog content.
              </p>
            </div>
            <p className="text-sm text-slate-600">
              Your current role is <span className="font-medium text-slate-900">{user?.role || "unknown"}</span>.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Content Management</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Blogs</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Manage editorial content, keep article statuses current, and maintain the public blog experience from one place.
          </p>
        </div>
        <div className="text-sm text-slate-500">
          Showing <span className="font-medium text-slate-900">{filteredBlogs.length}</span> of{" "}
          <span className="font-medium text-slate-900">{blogs.length}</span> posts
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Total blogs</p>
            <p className="mt-2 text-3xl font-semibold">{blogs.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Published</p>
            <p className="mt-2 text-3xl font-semibold">{publishedCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Drafts</p>
            <p className="mt-2 text-3xl font-semibold">{draftCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Archived</p>
            <p className="mt-2 text-3xl font-semibold">{archivedCount}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="space-y-4 p-5">
          <div className="grid gap-4 xl:grid-cols-[1fr_200px_220px_auto]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by title, author, category, or content"
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={(value: BlogStatusFilter) => setStatusFilter(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortOrder} onValueChange={(value: SortOrder) => setSortOrder(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort order" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="updated-desc">Newest updated first</SelectItem>
                <SelectItem value="updated-asc">Oldest updated first</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={exportCsv} className="gap-2">
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
              <Button onClick={handleCreate} className="gap-2">
                <Plus className="h-4 w-4" />
                Create Blog
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <Card>
          <CardContent className="p-8 text-sm text-slate-500">Loading blogs...</CardContent>
        </Card>
      ) : loadError ? (
        <Card>
          <CardContent className="space-y-4 p-8">
            <p className="text-sm font-medium text-red-600">{loadError}</p>
            <Button onClick={loadBlogs}>Try Again</Button>
          </CardContent>
        </Card>
      ) : filteredBlogs.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <div className="rounded-full bg-blue-50 p-3 text-blue-700">
              <FileText className="h-6 w-6" />
            </div>
            <p className="text-lg font-medium text-slate-900">No blog posts match your current filters.</p>
            <p className="max-w-xl text-sm text-slate-500">
              Try a different search term, switch back to all statuses, or create a new article to get started.
            </p>
            <Button onClick={handleCreate} className="mt-1 gap-2">
              <Plus className="h-4 w-4" />
              Create Blog
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-hidden rounded-lg border">
              <Table>
                <TableHeader className="bg-blue-50">
                  <TableRow>
                    <TableHead className="font-semibold">Title</TableHead>
                    <TableHead className="font-semibold">Category</TableHead>
                    <TableHead className="font-semibold">Author</TableHead>
                    <TableHead className="font-semibold">Traffic</TableHead>
                    <TableHead className="font-semibold">Updated</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBlogs.map((blog) => (
                    <TableRow key={blog._id} className="hover:bg-slate-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          {blog.image ? (
                            <img
                              src={blog.image}
                              alt={blog.title}
                              className="h-12 w-12 rounded-lg object-cover"
                              onError={(event) => {
                                event.currentTarget.src = "https://via.placeholder.com/48";
                              }}
                            />
                          ) : (
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                              <FileText className="h-5 w-5" />
                            </div>
                          )}
                          <div className="max-w-[360px]">
                            <p className="font-medium text-slate-900">{blog.title}</p>
                            <p className="line-clamp-2 text-sm text-slate-500">{blog.content}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{blog.category || "Uncategorized"}</TableCell>
                      <TableCell>{blog.author}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-slate-700">
                          <TrendingUp className="h-4 w-4 text-slate-400" />
                          {blog.clicks || 0}
                        </div>
                      </TableCell>
                      <TableCell>{formatDateTime(blog.updatedAt || blog.createdAt)}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={statusStyles[blog.status]}>
                          {formatStatus(blog.status)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
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
                            <DropdownMenuItem
                              className="text-red-600"
                              onClick={() => handleDelete(blog._id)}
                              disabled={deletingId === blog._id}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              {deletingId === blog._id ? "Deleting..." : "Delete"}
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingBlog ? "Edit blog" : "Create blog"}</DialogTitle>
            <DialogDescription>
              {editingBlog
                ? "Update the selected blog post."
                : "Add a new blog post to the Abroadways publishing workflow."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(event) => setFormData({ ...formData, title: event.target.value })}
                placeholder="Blog title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(event) => setFormData({ ...formData, content: event.target.value })}
                placeholder="Write the blog content here"
                rows={10}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(event) => setFormData({ ...formData, author: event.target.value })}
                  placeholder="Author name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(event) => setFormData({ ...formData, category: event.target.value })}
                  placeholder="Scholarships, Study Abroad, Visa Guidance..."
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  type="url"
                  value={formData.image}
                  onChange={(event) => setFormData({ ...formData, image: event.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: Blog["status"]) =>
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
            <Button onClick={handleSubmit} className="bg-blue-700 hover:bg-blue-800" disabled={saving}>
              {saving ? "Saving..." : editingBlog ? "Update Blog" : "Create Blog"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
