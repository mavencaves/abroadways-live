import axios from "axios";

const AUTH_TOKEN_KEY = "auth_token";
const AUTH_USER_KEY = "auth_user";
const AUTH_EXPIRED_EVENT = "abroadways:auth-expired";

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

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const isBrowserRuntime = typeof window !== "undefined";
    const hadToken = isBrowserRuntime ? Boolean(localStorage.getItem(AUTH_TOKEN_KEY)) : false;

    if (status === 401 && isBrowserRuntime && hadToken) {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(AUTH_USER_KEY);
      window.dispatchEvent(new Event(AUTH_EXPIRED_EVENT));
    }

    return Promise.reject(error);
  }
);

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

export const publicPagesApi = {
  getAllAdmin: () => apiClient.get("/public-pages/admin/all", { params: noCacheParams() }),
  getByRouteKey: (routeKey: string) => apiClient.get(`/public-pages/${routeKey}`, { params: noCacheParams() }),
  create: (
    payload: {
      routeKey: string;
      slug: string;
      name: string;
      pageTitle: string;
      seoTitle?: string;
      seoDescription?: string;
      heroKicker?: string;
      heroTitle: string;
      heroSubtitle?: string;
      heroImageUrl?: string;
      heroImageAlt?: string;
      siteLogo?: string;
      siteLogoAlt?: string;
      siteLogoDark?: string;
      siteLogoDarkAlt?: string;
      favicon?: string;
      bodyIntro?: string;
      sections: Array<{
        key?: string;
        title: string;
        body?: string;
        bullets?: string[];
        imageUrl?: string;
        imageAlt?: string;
      }>;
      ctaTitle?: string;
      ctaDescription?: string;
      ctaPrimaryText?: string;
      ctaPrimaryUrl?: string;
      ctaSecondaryText?: string;
      ctaSecondaryUrl?: string;
      status: "draft" | "published" | "archived";
    }
  ) => apiClient.post("/public-pages", payload),
  updateByRouteKey: (
    routeKey: string,
    payload: {
      routeKey: string;
      slug: string;
      name: string;
      pageTitle: string;
      seoTitle?: string;
      seoDescription?: string;
      heroKicker?: string;
      heroTitle: string;
      heroSubtitle?: string;
      heroImageUrl?: string;
      heroImageAlt?: string;
      siteLogo?: string;
      siteLogoAlt?: string;
      siteLogoDark?: string;
      siteLogoDarkAlt?: string;
      favicon?: string;
      bodyIntro?: string;
      sections: Array<{
        key?: string;
        title: string;
        body?: string;
        bullets?: string[];
        imageUrl?: string;
        imageAlt?: string;
      }>;
      ctaTitle?: string;
      ctaDescription?: string;
      ctaPrimaryText?: string;
      ctaPrimaryUrl?: string;
      ctaSecondaryText?: string;
      ctaSecondaryUrl?: string;
      status: "draft" | "published" | "archived";
    }
  ) => apiClient.put(`/public-pages/${routeKey}`, payload),
  delete: (id: string) => apiClient.delete(`/public-pages/${id}`),
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
        actionType: "copied" | "opened" | "sent-manually" | "sent";
        templateId?: string;
        templateName?: string;
        renderedSubject?: string;
        renderedBody?: string;
      };
    }
  ) =>
    apiClient.patch(`/inquiries/${id}`, data),
  sendEmail: (id: string, data: { templateId: string }) =>
    apiClient.post(`/inquiries/${id}/send-email`, data),
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
  sendDemoMessage: (data: {
    prompt: string;
    history?: Array<{
      role: "user" | "assistant";
      content: string;
    }>;
  }) => apiClient.post("/chat/demo", data),
  getSessions: () => apiClient.get("/chat/sessions", { params: noCacheParams() }),
  createSession: (data: { title?: string; assistantMode?: "general" | "student-portal" } = {}) =>
    apiClient.post("/chat/sessions", data),
  getSessionById: (id: string) => apiClient.get(`/chat/sessions/${id}`, { params: noCacheParams() }),
  updateSessionTitle: (id: string, data: { title: string }) => apiClient.patch(`/chat/sessions/${id}`, data),
  deleteSession: (id: string) => apiClient.delete(`/chat/sessions/${id}`),
  sendMessage: (id: string, data: { prompt: string }) => apiClient.post(`/chat/sessions/${id}/messages`, data),
  getAdminInsights: () => apiClient.get("/chat/admin/insights", { params: noCacheParams() }),
};

export const adminApi = {
  getDashboardOverview: () => apiClient.get("/admin/dashboard/overview", { params: noCacheParams() }),
  getUsers: (params?: Record<string, any>) => apiClient.get("/admin/users", { params }),
  createStaffUser: (payload: {
    name: string;
    email: string;
    role: "admin" | "content-manager" | "course-manager";
    temporaryPassword?: string;
    country?: string;
    avatarUrl?: string;
  }) => apiClient.post("/admin/users/staff", payload),
  createUser: (payload: any) => apiClient.post("/admin/users", payload),
  updateUser: (id: string, payload: any) => apiClient.put(`/admin/users/${id}`, payload),
  updateUserRole: (id: string, role: "admin" | "content-manager" | "course-manager" | "user") =>
    apiClient.patch(`/admin/users/${id}/role`, { role }),
  updateUserStatus: (id: string, status: "active" | "inactive") =>
    apiClient.patch(`/admin/users/${id}/status`, { status }),
  resetUserPassword: (id: string, temporaryPassword?: string) =>
    apiClient.patch(`/admin/users/${id}/reset-password`, temporaryPassword ? { temporaryPassword } : {}),
  deleteUser: (id: string) => apiClient.delete(`/admin/users/${id}`),
};

export const appointmentsApi = {
  getStudentAppointments: () => apiClient.get("/appointments/student", { params: noCacheParams() }),
  getStudentSlots: (date: string) => apiClient.get("/appointments/student/slots", { params: { date, ...noCacheParams() } }),
  createStudentAppointment: (payload: {
    date: string;
    time: string;
    type: "online" | "office";
    notes?: string;
  }) => apiClient.post("/appointments/student", payload),
  cancelStudentAppointment: (id: string) => apiClient.patch(`/appointments/student/${id}/cancel`),
  getAdminAppointments: (params?: Record<string, any>) =>
    apiClient.get("/appointments/admin", { params: { ...params, ...noCacheParams() } }),
  updateAdminAppointment: (
    id: string,
    payload: {
      assignedStaff?: string | null;
      date?: string;
      time?: string;
      type?: "online" | "office";
      status?: "requested" | "confirmed" | "completed" | "cancelled" | "no-show";
      notes?: string;
    }
  ) => apiClient.patch(`/appointments/admin/${id}`, payload),
  getAdminSummary: () => apiClient.get("/appointments/admin/summary", { params: noCacheParams() }),
};

export const serviceOrdersApi = {
  getStudentServices: () => apiClient.get("/service-orders/student/services", { params: noCacheParams() }),
  getStudentOrders: () => apiClient.get("/service-orders/student/orders", { params: noCacheParams() }),
  requestStudentService: (payload: { serviceType: string; notes?: string }) =>
    apiClient.post("/service-orders/student/orders", payload),
  initiateStudentPayment: (id: string) => apiClient.post(`/service-orders/student/orders/${id}/pay`),
  submitStudentPaymentReference: (
    id: string,
    payload: { paymentMethod: string; transactionReference: string }
  ) => apiClient.patch(`/service-orders/student/orders/${id}/payment`, payload),
  getAdminOrders: (params?: Record<string, any>) =>
    apiClient.get("/service-orders/admin/orders", { params: { ...params, ...noCacheParams() } }),
  createAdminOrder: (payload: {
    studentId: string;
    inquiryId?: string | null;
    appointmentId?: string | null;
    serviceType: string;
    amount?: number;
    currency?: string;
    status?: "draft" | "pending-payment" | "paid" | "cancelled" | "refunded";
    paymentMethod?: string;
    transactionReference?: string;
    adminNotes?: string;
  }) => apiClient.post("/service-orders/admin/orders", payload),
  updateAdminOrder: (
    id: string,
    payload: {
      serviceType?: string;
      amount?: number;
      currency?: string;
      status?: "draft" | "pending-payment" | "paid" | "cancelled" | "refunded";
      paymentMethod?: string;
      transactionReference?: string;
      adminNotes?: string;
    }
  ) => apiClient.patch(`/service-orders/admin/orders/${id}`, payload),
  getAdminSummary: () => apiClient.get("/service-orders/admin/summary", { params: noCacheParams() }),
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

export const notificationsApi = {
  list: (params?: { read?: "all" | "read" | "unread"; priority?: "" | "low" | "medium" | "high"; limit?: number }) =>
    apiClient.get("/notifications", { params: { ...params, ...noCacheParams() } }),
  markRead: (id: string) => apiClient.patch(`/notifications/${id}/read`),
  markAllRead: () => apiClient.patch("/notifications/read-all"),
};

export const mockTestsApi = {
  getCatalog: () => apiClient.get("/mock-tests/catalog", { params: noCacheParams() }),
  getExamLanding: (examSlug: string) => apiClient.get(`/mock-tests/exams/${examSlug}`, { params: noCacheParams() }),
  getExamTestSets: (examSlug: string) =>
    apiClient.get(`/mock-tests/exams/${examSlug}/test-sets`, { params: noCacheParams() }),
  getStudentExamLibrary: (examSlug: string) =>
    apiClient.get(`/mock-tests/me/exams/${examSlug}/test-sets`, { params: noCacheParams() }),
  getQuestions: (params: {
    examSlug: string;
    sectionKey?: string;
    type?: string;
    search?: string;
  }) => apiClient.get("/mock-tests/questions", { params: { ...params, ...noCacheParams() } }),
  createQuestion: (payload: {
    examSlug: string;
    sectionKey: string;
    type: string;
    text: string;
    options?: string[];
    correctAnswer?: any;
    marks?: number;
    difficulty?: "easy" | "medium" | "hard";
    tags?: string[];
    explanation?: string;
    isActive?: boolean;
    meta?: Record<string, any>;
  }) => apiClient.post("/mock-tests/questions", payload),
  updateQuestion: (
    questionId: string,
    payload: {
      sectionKey?: string;
      type?: string;
      text?: string;
      options?: string[];
      correctAnswer?: any;
      marks?: number;
      difficulty?: "easy" | "medium" | "hard";
      tags?: string[];
      explanation?: string;
      isActive?: boolean;
      meta?: Record<string, any>;
    }
  ) => apiClient.put(`/mock-tests/questions/${questionId}`, payload),
  deleteQuestion: (questionId: string) => apiClient.delete(`/mock-tests/questions/${questionId}`),
  getAdminTestSets: (params: { examSlug: string; status?: string }) =>
    apiClient.get("/mock-tests/test-sets", { params: { ...params, ...noCacheParams() } }),
  createTestSet: (payload: {
    examSlug: string;
    title: string;
    slug: string;
    description?: string;
    instructions?: string;
    durationMinutes?: number;
    accessType?: "free" | "paid";
    price?: number;
    currency?: string;
    status?: "draft" | "published" | "archived";
    sectionConfig?: Array<{
      key: string;
      title?: string;
      questionCount?: number;
      durationMinutes?: number;
    }>;
    questionIds?: string[];
    assignedUsers?: string[];
  }) => apiClient.post("/mock-tests/test-sets", payload),
  updateTestSet: (
    testSetId: string,
    payload: {
      title?: string;
      slug?: string;
      description?: string;
      instructions?: string;
      durationMinutes?: number;
      accessType?: "free" | "paid";
      price?: number;
      currency?: string;
      status?: "draft" | "published" | "archived";
      sectionConfig?: Array<{
        key: string;
        title?: string;
        questionCount?: number;
        durationMinutes?: number;
      }>;
      questionIds?: string[];
      assignedUsers?: string[];
    }
  ) => apiClient.put(`/mock-tests/test-sets/${testSetId}`, payload),
  deleteTestSet: (testSetId: string) => apiClient.delete(`/mock-tests/test-sets/${testSetId}`),
  getAssignableStudents: () => apiClient.get("/mock-tests/students", { params: noCacheParams() }),
  createPurchaseOrder: (payload: { testSetId: string }) => apiClient.post("/mock-tests/purchase", payload),
  startSession: (payload: { testSetId: string; mode?: "practice" | "exam" }) =>
    apiClient.post("/mock-tests/sessions/start", payload),
  getSession: (sessionId: string) => apiClient.get(`/mock-tests/sessions/${sessionId}`, { params: noCacheParams() }),
  submitAnswer: (sessionId: string, payload: { questionId: string; answer: any }) =>
    apiClient.post(`/mock-tests/sessions/${sessionId}/answer`, payload),
  finishSession: (sessionId: string) => apiClient.post(`/mock-tests/sessions/${sessionId}/finish`),
  getMyResults: (examSlug?: string) =>
    apiClient.get("/mock-tests/results/me", { params: { ...(examSlug ? { examSlug } : {}), ...noCacheParams() } }),
  getAdminResults: (params?: { examSlug?: string; status?: string }) =>
    apiClient.get("/mock-tests/results/admin/all", { params: { ...params, ...noCacheParams() } }),
  getResult: (resultId: string) => apiClient.get(`/mock-tests/results/${resultId}`, { params: noCacheParams() }),
  manualReviewResult: (
    resultId: string,
    payload: {
      scores: Array<{
        answerId: string;
        marks: number;
        feedback?: string;
      }>;
    }
  ) => apiClient.post(`/mock-tests/results/${resultId}/manual-review`, payload),
  getAdminSummary: () => apiClient.get("/mock-tests/admin/summary", { params: noCacheParams() }),
};
