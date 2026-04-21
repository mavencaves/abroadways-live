import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
import { Download, Plus, Search, MoreVertical, TrendingUp, Edit, Trash2, Calendar } from "lucide-react"
import { useEffect, useState } from "react"
import { eventsApi } from "@/lib/api"
import { toast } from "sonner"

interface Event {
    _id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    createdAt: string;
    updatedAt: string;
}

export default function EventsPage() {
    const [events, setEvents] = useState<Event[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [editingEvent, setEditingEvent] = useState<Event | null>(null)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        image: "",
    })

    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = async () => {
        try {
            setLoading(true)
            const response = await eventsApi.getAll()
            setEvents(response.data)
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to load events")
        } finally {
            setLoading(false)
        }
    }

    const handleCreate = () => {
        setEditingEvent(null)
        setFormData({
            title: "",
            description: "",
            date: "",
            time: "",
            location: "",
            image: "",
        })
        setIsDialogOpen(true)
    }

    const handleEdit = (event: Event) => {
        setEditingEvent(event)
        const eventDate = new Date(event.date)
        setFormData({
            title: event.title,
            description: event.description,
            date: eventDate.toISOString().split('T')[0],
            time: event.time,
            location: event.location,
            image: event.image || "",
        })
        setIsDialogOpen(true)
    }

    const handleSubmit = async () => {
        try {
            if (editingEvent) {
                await eventsApi.update(editingEvent._id, formData)
                toast.success("Event updated successfully")
            } else {
                await eventsApi.create(formData)
                toast.success("Event created successfully")
            }
            setIsDialogOpen(false)
            loadEvents()
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to save event")
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this event?")) return
        try {
            await eventsApi.delete(id)
            toast.success("Event deleted successfully")
            loadEvents()
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to delete event")
        }
    }

    const filteredEvents = events.filter((event) => {
        return event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.location.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const upcomingEvents = events.filter(e => new Date(e.date) >= new Date())
    const pastEvents = events.filter(e => new Date(e.date) < new Date())

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <h3 className="text-sm text-gray-600 mb-2">মোট ইভেন্ট</h3>
                        <p className="text-4xl font-bold mb-2">{events.length}</p>
                        <div className="flex items-center gap-2 text-teal-500 text-sm">
                            <TrendingUp className="w-4 h-4" />
                            <span>মোট {events.length}টি ইভেন্ট</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <h3 className="text-sm text-gray-600 mb-2">আসন্ন ইভেন্ট</h3>
                        <p className="text-4xl font-bold mb-2">{upcomingEvents.length}</p>
                        <div className="flex items-center gap-2 text-blue-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>অগ্রিম ইভেন্ট</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <h3 className="text-sm text-gray-600 mb-2">সম্পন্ন ইভেন্ট</h3>
                        <p className="text-4xl font-bold mb-2">{pastEvents.length}</p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>অতীত ইভেন্ট</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Header and Actions */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-purple-600">ইভেন্টসমূহ</h1>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        এক্সপোর্ট CSV ফাইল
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 gap-2" onClick={handleCreate}>
                        <Plus className="w-4 h-4" />
                        ইভেন্ট যোগ করুন
                    </Button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                    placeholder="সার্চ করুন"
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Events Table */}
            <div className="border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader className="bg-purple-100/50">
                        <TableRow>
                            <TableHead className="font-semibold">ইভেন্ট শিরোনাম</TableHead>
                            <TableHead className="font-semibold">তারিখ</TableHead>
                            <TableHead className="font-semibold">সময়</TableHead>
                            <TableHead className="font-semibold">অবস্থান</TableHead>
                            <TableHead className="font-semibold">কার্যক্রম</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredEvents.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                                    No events found
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredEvents.map((event) => {
                                const isUpcoming = new Date(event.date) >= new Date()
                                return (
                                    <TableRow key={event._id} className="hover:bg-gray-50">
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                {event.image && (
                                                    <img
                                                        src={event.image}
                                                        alt={event.title}
                                                        className="w-12 h-12 rounded-lg object-cover"
                                                        onError={(e) => {
                                                            e.currentTarget.src = "https://via.placeholder.com/48"
                                                        }}
                                                    />
                                                )}
                                                <div>
                                                    <span className="font-medium">{event.title}</span>
                                                    <p className="text-sm text-gray-500 line-clamp-1">
                                                        {event.description.substring(0, 50)}...
                                                    </p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div>
                                                <p className="font-medium">{formatDate(event.date)}</p>
                                                <Badge
                                                    variant="secondary"
                                                    className={
                                                        isUpcoming
                                                            ? "bg-green-100 text-green-700 mt-1"
                                                            : "bg-gray-100 text-gray-700 mt-1"
                                                    }
                                                >
                                                    {isUpcoming ? "আসন্ন" : "সম্পন্ন"}
                                                </Badge>
                                            </div>
                                        </TableCell>
                                        <TableCell>{event.time}</TableCell>
                                        <TableCell>{event.location}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <MoreVertical className="w-4 h-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem onClick={() => handleEdit(event)}>
                                                        <Edit className="w-4 h-4 mr-2" />
                                                        সম্পাদনা করুন
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        className="text-red-600"
                                                        onClick={() => handleDelete(event._id)}
                                                    >
                                                        <Trash2 className="w-4 h-4 mr-2" />
                                                        মুছুন
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Create/Edit Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>{editingEvent ? "সম্পাদনা করুন" : "নতুন ইভেন্ট যোগ করুন"}</DialogTitle>
                        <DialogDescription>
                            {editingEvent ? "ইভেন্টের তথ্য আপডেট করুন" : "নতুন ইভেন্ট তৈরি করুন"}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">শিরোনাম</Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="ইভেন্ট শিরোনাম"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">বর্ণনা</Label>
                            <Textarea
                                id="description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="ইভেন্টের বিস্তারিত বর্ণনা"
                                rows={6}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="date">তারিখ</Label>
                                <Input
                                    id="date"
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="time">সময়</Label>
                                <Input
                                    id="time"
                                    type="time"
                                    value={formData.time}
                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="location">অবস্থান</Label>
                                <Input
                                    id="location"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    placeholder="ইভেন্টের অবস্থান"
                                />
                            </div>
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
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                            বাতিল
                        </Button>
                        <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700">
                            {editingEvent ? "আপডেট করুন" : "যোগ করুন"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
