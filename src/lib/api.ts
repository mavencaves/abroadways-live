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
  update: (id: string, data: { status?: "new" | "contacted" | "closed"; adminNotes?: string }) =>
    apiClient.patch(`/inquiries/${id}`, data),
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
