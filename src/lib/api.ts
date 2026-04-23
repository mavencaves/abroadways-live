import axios from "axios";

const rawApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();
const normalizedApiBaseUrl = rawApiBaseUrl ? rawApiBaseUrl.replace(/\/+$/, "") : "";
const isBrowser = typeof window !== "undefined";
const isDev = import.meta.env.DEV;

const API_BASE_URL =
  normalizedApiBaseUrl ||
  (isDev
    ? "http://localhost:5000"
    : isBrowser
      ? window.location.origin
      : "http://localhost:5000");

if (!normalizedApiBaseUrl && !isDev && isBrowser) {
  console.warn(
    "VITE_API_BASE_URL is not set in production. API requests are falling back to the current site origin."
  );
}

export const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
});

export const authDebug = {
  apiBaseUrl: API_BASE_URL,
  loginEndpoint: `${API_BASE_URL}/api/v1/auth/login`,
};

apiClient.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;
  if (token) {
    config.headers = {
      ...(config.headers ?? {}),
      Authorization: `Bearer ${token}`,
    } as typeof config.headers;
  }
  return config;
});

export const authApi = {
  register: (payload: { name: string; email: string; password: string }) =>
    apiClient.post("/auth/register", payload),
  login: (payload: { email: string; password: string }) =>
    apiClient.post("/auth/login", payload),
  me: () => apiClient.get("/auth/me"),
};

export function getOAuthUrl(provider: "google" | "facebook") {
  return `${API_BASE_URL}/api/v1/auth/${provider}`;
}

const noCacheParams = () => ({ t: Date.now() });

export const blogsApi = {
  getAll: () => apiClient.get("/blogs", { params: noCacheParams() }),
  getById: (id: string) => apiClient.get(`/blogs/${id}`, { params: noCacheParams() }),
  create: (data: any) => apiClient.post("/blogs", data),
  update: (id: string, data: any) => apiClient.put(`/blogs/${id}`, data),
  delete: (id: string) => apiClient.delete(`/blogs/${id}`),
};

export const eventsApi = {
  getAll: () => apiClient.get("/events", { params: noCacheParams() }),
  getById: (id: string) => apiClient.get(`/events/${id}`, { params: noCacheParams() }),
  create: (data: any) => apiClient.post("/events", data),
  update: (id: string, data: any) => apiClient.put(`/events/${id}`, data),
  delete: (id: string) => apiClient.delete(`/events/${id}`),
};

export const mediaApi = {
  getAll: () => apiClient.get("/media", { params: noCacheParams() }),
  upload: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return apiClient.post("/media", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  delete: (publicId: string) =>
    apiClient.delete("/media", {
      data: { publicId },
    }),
};

export const aboutApi = {
  getAll: () => apiClient.get("/about-us", { params: noCacheParams() }),
};

export const inquiriesApi = {
  create: (data: {
    name: string;
    email?: string;
    phone?: string;
    source: "homepage-lead" | "homepage-consultation" | "contact-page" | "other";
    destination?: string;
    qualification?: string;
    intake?: string;
    examInterest?: string;
    message?: string;
  }) => apiClient.post("/inquiries", data),
  getAll: () => apiClient.get("/inquiries", { params: noCacheParams() }),
  getMeta: () => apiClient.get("/inquiries/meta", { params: noCacheParams() }),
  getMetrics: () => apiClient.get("/inquiries/metrics", { params: noCacheParams() }),
  getNotifications: () => apiClient.get("/inquiries/notifications", { params: noCacheParams() }),
  getTemplates: () => apiClient.get("/inquiries/templates", { params: noCacheParams() }),
  getDashboardAnalytics: () => apiClient.get("/inquiries/dashboard-analytics", { params: noCacheParams() }),
  update: (
    id: string,
    data: {
      status?: "new" | "contacted" | "follow-up" | "qualified" | "closed" | "lost";
      adminNotes?: string;
      note?: string;
      assignedTo?: string | null;
      nextFollowUpAt?: string | null;
      completeFollowUp?: boolean;
      task?: {
        action: "create" | "update";
        taskId?: string;
        title?: string;
        dueDate?: string;
        status?: "pending" | "in-progress" | "completed" | "cancelled";
        assignedTo?: string | null;
      };
      templateAction?: {
        templateKey: string;
        channel: "email" | "whatsapp";
        recipient?: string;
      };
      communicationAction?: {
        channel: "email" | "whatsapp";
        actionType: "copied" | "opened" | "sent-manually";
        templateId?: string;
        templateName?: string;
        renderedSubject?: string;
        renderedBody?: string;
      };
    }
  ) =>
    apiClient.patch(`/inquiries/${id}`, data),
};

export const inquiryTemplatesApi = {
  getAll: () => apiClient.get("/inquiry-templates", { params: noCacheParams() }),
  create: (data: {
    name: string;
    channel: "email" | "whatsapp";
    subject?: string;
    body: string;
    variables?: string[];
    isActive?: boolean;
  }) => apiClient.post("/inquiry-templates", data),
  update: (
    id: string,
    data: {
      name?: string;
      channel?: "email" | "whatsapp";
      subject?: string;
      body?: string;
      variables?: string[];
      isActive?: boolean;
    }
  ) => apiClient.put(`/inquiry-templates/${id}`, data),
  delete: (id: string) => apiClient.delete(`/inquiry-templates/${id}`),
};

export const chatApi = {
  getSessions: () => apiClient.get("/chat/sessions", { params: noCacheParams() }),
  createSession: (data: { title?: string } = {}) => apiClient.post("/chat/sessions", data),
  getSessionById: (id: string) => apiClient.get(`/chat/sessions/${id}`, { params: noCacheParams() }),
  updateSessionTitle: (id: string, data: { title: string }) => apiClient.patch(`/chat/sessions/${id}`, data),
  deleteSession: (id: string) => apiClient.delete(`/chat/sessions/${id}`),
  sendMessage: (id: string, data: { prompt: string }) => apiClient.post(`/chat/sessions/${id}/messages`, data),
};

export const adminApi = {
  getDashboardOverview: () => apiClient.get("/admin/dashboard/overview", { params: noCacheParams() }),
  getUsers: (params?: Record<string, any>) => apiClient.get("/admin/users", { params }),
  createUser: (payload: any) => apiClient.post("/admin/users", payload),
  updateUser: (id: string, payload: any) => apiClient.put(`/admin/users/${id}`, payload),
  deleteUser: (id: string) => apiClient.delete(`/admin/users/${id}`),
};

export const studentApi = {
  getPortal: () => apiClient.get("/student/portal", { params: noCacheParams() }),
  getProfile: () => apiClient.get("/student/profile", { params: noCacheParams() }),
  updateProfile: (payload: {
    fullName?: string;
    phone?: string;
    destinationInterests?: string[];
    preferredCountry?: string;
    intake?: string;
    qualification?: string;
    examInterest?: string;
    budget?: string;
    academicBackground?: string;
    notes?: string;
  }) => apiClient.put("/student/profile", payload),
  getApplications: () => apiClient.get("/student/applications", { params: noCacheParams() }),
  updateApplications: (payload: { applicationStage: string }) => apiClient.put("/student/applications", payload),
  getDocuments: () => apiClient.get("/student/documents", { params: noCacheParams() }),
  addDocument: (payload: {
    title: string;
    type?: string;
    notes?: string;
    file: File;
  }) => {
    const formData = new FormData();
    formData.append("title", payload.title);
    formData.append("type", payload.type || "other");
    formData.append("notes", payload.notes || "");
    formData.append("file", payload.file);

    return apiClient.post("/student/documents", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  resubmitDocument: (
    documentId: string,
    payload: {
      title?: string;
      type?: string;
      notes?: string;
      file: File;
    }
  ) => {
    const formData = new FormData();
    if (payload.title !== undefined) formData.append("title", payload.title);
    if (payload.type !== undefined) formData.append("type", payload.type);
    if (payload.notes !== undefined) formData.append("notes", payload.notes);
    formData.append("file", payload.file);

    return apiClient.post(`/student/documents/${documentId}/resubmit`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateDocument: (
    documentId: string,
    payload: {
      title?: string;
      type?: string;
      notes?: string;
    }
  ) => apiClient.patch(`/student/documents/${documentId}`, payload),
  getAdminDocuments: (params?: Record<string, any>) =>
    apiClient.get("/student/admin/documents", { params: { ...params, ...noCacheParams() } }),
  reviewAdminDocument: (
    profileId: string,
    documentId: string,
    payload: {
      status: "under-review" | "approved" | "rejected" | "needs-resubmission";
      reviewNotes?: string;
    }
  ) => apiClient.patch(`/student/admin/documents/${profileId}/${documentId}/review`, payload),
};
