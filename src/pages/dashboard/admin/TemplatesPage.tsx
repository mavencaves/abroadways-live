import { useEffect, useMemo, useState } from "react";
import { Copy, Eye, FileText, MessageCircle, Plus, Search, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { inquiryTemplatesApi } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type TemplateChannel = "email" | "whatsapp";

type InquiryTemplate = {
  _id: string;
  name: string;
  channel: TemplateChannel;
  subject?: string;
  body: string;
  variables?: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

const defaultVariables = ["{{name}}", "{{destination}}", "{{examInterest}}", "{{intake}}", "{{assignedStaff}}"];

const sampleLead = {
  name: "Afsana Rahman",
  destination: "Canada",
  examInterest: "IELTS",
  intake: "Fall 2027",
  assignedStaff: "Nabila Hossain",
};

const renderTemplate = (template: { subject?: string; body: string }) => {
  const fill = (text: string) =>
    text.replace(/\{\{(\w+)\}\}/g, (_, key) => sampleLead[key as keyof typeof sampleLead] || "");

  return {
    subject: fill(template.subject || ""),
    body: fill(template.body),
  };
};

export default function TemplatesPage() {
  const { user } = useAuth();
  const [templates, setTemplates] = useState<InquiryTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingTemplateId, setEditingTemplateId] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    channel: "email" as TemplateChannel,
    subject: "",
    body: "",
    variables: defaultVariables.join(", "),
    isActive: true,
  });

  const canManageTemplates = user ? ["admin", "content-manager"].includes(user.role) : false;

  const loadTemplates = async () => {
    if (!canManageTemplates) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const response = await inquiryTemplatesApi.getAll();
      setTemplates(Array.isArray(response.data) ? response.data : []);
    } catch (err: any) {
      const message = err?.response?.data?.message || "Failed to load communication templates.";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTemplates();
  }, [canManageTemplates]);

  const filteredTemplates = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return templates.filter((template) => {
      if (!query) return true;
      return (
        template.name.toLowerCase().includes(query) ||
        template.channel.toLowerCase().includes(query) ||
        template.body.toLowerCase().includes(query)
      );
    });
  }, [templates, searchTerm]);

  const resetForm = () => {
    setEditingTemplateId(null);
    setFormState({
      name: "",
      channel: "email",
      subject: "",
      body: "",
      variables: defaultVariables.join(", "),
      isActive: true,
    });
  };

  const startEditing = (template: InquiryTemplate) => {
    setEditingTemplateId(template._id);
    setFormState({
      name: template.name,
      channel: template.channel,
      subject: template.subject || "",
      body: template.body,
      variables: (template.variables || defaultVariables).join(", "),
      isActive: template.isActive,
    });
  };

  const handleSave = async () => {
    if (!formState.name.trim() || !formState.body.trim()) {
      toast.error("Template name and body are required.");
      return;
    }

    try {
      setSaving(true);
      const payload = {
        name: formState.name.trim(),
        channel: formState.channel,
        subject: formState.channel === "email" ? formState.subject.trim() : "",
        body: formState.body.trim(),
        variables: formState.variables
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        isActive: formState.isActive,
      };

      if (editingTemplateId) {
        const response = await inquiryTemplatesApi.update(editingTemplateId, payload);
        setTemplates((prev) => prev.map((item) => (item._id === editingTemplateId ? response.data : item)));
        toast.success("Template updated.");
      } else {
        const response = await inquiryTemplatesApi.create(payload);
        setTemplates((prev) => [response.data, ...prev]);
        toast.success("Template created.");
      }

      resetForm();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to save template.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (template: InquiryTemplate) => {
    const confirmed = window.confirm(`Delete "${template.name}"? This cannot be undone.`);
    if (!confirmed) return;

    try {
      setDeletingId(template._id);
      await inquiryTemplatesApi.delete(template._id);
      setTemplates((prev) => prev.filter((item) => item._id !== template._id));
      toast.success("Template deleted.");
      if (editingTemplateId === template._id) {
        resetForm();
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to delete template.");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return <div className="container mx-auto p-6 text-slate-500">Loading templates...</div>;
  }

  if (!canManageTemplates) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="p-8 text-sm text-slate-600">
            Only admin and content-manager accounts can manage communication templates.
          </CardContent>
        </Card>
      </div>
    );
  }

  const preview = renderTemplate({
    subject: formState.subject,
    body: formState.body,
  });

  return (
    <div className="container mx-auto space-y-6 p-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Communication Hub</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Templates</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Create and manage reusable email and WhatsApp templates for the inquiry CRM.
          </p>
        </div>
        <div className="text-sm text-slate-500">
          {templates.filter((item) => item.isActive).length} active of {templates.length} total templates
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-4 p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search templates"
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="gap-2" onClick={resetForm}>
                <Plus className="h-4 w-4" />
                New Template
              </Button>
            </div>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <div className="space-y-3">
              {filteredTemplates.length === 0 ? (
                <Card className="border-dashed border-slate-300">
                  <CardContent className="p-8 text-center text-sm text-slate-500">
                    No templates found yet.
                  </CardContent>
                </Card>
              ) : (
                filteredTemplates.map((template) => (
                  <div key={template._id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-medium text-slate-900">{template.name}</p>
                          <Badge variant="outline">
                            {template.channel === "email" ? (
                              <span className="inline-flex items-center gap-1"><FileText className="h-3.5 w-3.5" /> Email</span>
                            ) : (
                              <span className="inline-flex items-center gap-1"><MessageCircle className="h-3.5 w-3.5" /> WhatsApp</span>
                            )}
                          </Badge>
                          <Badge className={template.isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-700"}>
                            {template.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                        {template.channel === "email" && template.subject ? (
                          <p className="text-sm text-slate-600">{template.subject}</p>
                        ) : null}
                        <p className="line-clamp-2 text-sm text-slate-500">{template.body}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="gap-2" onClick={() => startEditing(template)}>
                          <Eye className="h-4 w-4" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2"
                          onClick={() => handleDelete(template)}
                          disabled={deletingId === template._id}
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-4 p-5">
            <div>
              <p className="text-sm font-medium text-slate-900">
                {editingTemplateId ? "Edit template" : "Create template"}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Supported placeholders: {defaultVariables.join(", ")}
              </p>
            </div>

            <div className="grid gap-4">
              <Input
                value={formState.name}
                onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
                placeholder="Template name"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <select
                  value={formState.channel}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      channel: event.target.value as TemplateChannel,
                      subject: event.target.value === "email" ? prev.subject : "",
                    }))
                  }
                  className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                >
                  <option value="email">Email</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>

                <select
                  value={formState.isActive ? "active" : "inactive"}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, isActive: event.target.value === "active" }))
                  }
                  className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              {formState.channel === "email" ? (
                <Input
                  value={formState.subject}
                  onChange={(event) => setFormState((prev) => ({ ...prev, subject: event.target.value }))}
                  placeholder="Email subject"
                />
              ) : null}

              <Textarea
                value={formState.body}
                onChange={(event) => setFormState((prev) => ({ ...prev, body: event.target.value }))}
                placeholder="Template body"
                className="min-h-40"
              />

              <Input
                value={formState.variables}
                onChange={(event) => setFormState((prev) => ({ ...prev, variables: event.target.value }))}
                placeholder="Variables, separated by commas"
              />

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-900">Rendered preview</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2"
                    onClick={() => handleCopy(preview.subject ? `${preview.subject}\n\n${preview.body}` : preview.body, "Preview")}
                  >
                    <Copy className="h-4 w-4" />
                    Copy
                  </Button>
                </div>
                {formState.channel === "email" ? (
                  <p className="mb-2 text-sm font-medium text-slate-900">{preview.subject || "No subject yet"}</p>
                ) : null}
                <p className="whitespace-pre-wrap text-sm leading-7 text-slate-600">{preview.body || "No body yet"}</p>
              </div>

              <div className="flex flex-wrap justify-end gap-2">
                {editingTemplateId ? (
                  <Button variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                ) : null}
                <Button onClick={handleSave} disabled={saving}>
                  {editingTemplateId ? "Update Template" : "Create Template"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

async function handleCopy(value: string, label: string) {
  try {
    await navigator.clipboard.writeText(value);
    toast.success(`${label} copied.`);
  } catch {
    toast.error(`Unable to copy ${label.toLowerCase()}.`);
  }
}
