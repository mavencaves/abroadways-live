export interface DashboardCards {
  totalUsers: number;
  newUsers: number;
  activeUsers: number;
  rewardedUsers: number;
}

export interface VisitorData {
  day: string;
  count: number;
}

export interface CountryData {
  name: string;
  value: number;
}

export interface UpdateData {
  id: number;
  type: string;
  title: string;
  date: string;
  status: string;
}

export interface DashboardData {
  cards: DashboardCards;
  visitors: VisitorData[];
  countries: CountryData[];
  updates: UpdateData[];
}

export interface AnalyticsSummary {
  totalLeads: number;
  newLeads: number;
  contactedLeads: number;
  qualifiedLeads: number;
  closedLeads: number;
  lostLeads: number;
  publishedBlogs: number;
  upcomingEvents: number;
}

export interface LeadTrendPoint {
  key: string;
  label: string;
  total: number;
}

export interface FunnelStep {
  status: "new" | "contacted" | "follow-up" | "qualified" | "closed";
  count: number;
  dropOffPercent: number;
}

export interface BreakdownItem {
  name: string;
  total: number;
}

export interface SourceAnalyticsItem {
  source: string;
  label: string;
  total: number;
  closed: number;
  qualified: number;
  lost: number;
  conversionRate: number;
}

export interface StaffPerformanceItem {
  id: string;
  name: string;
  role: string;
  total: number;
  contacted: number;
  qualified: number;
  closed: number;
  conversionRate: number;
}

export interface DashboardAlerts {
  uncontactedOver48h: {
    count: number;
    sample: {
      id: string;
      name: string;
      source: string;
      ageHours: number;
    }[];
  };
  highDropOffWarnings: string[];
}

export interface InquiryDashboardAnalytics {
  summary: AnalyticsSummary;
  leadTrends: {
    daily: LeadTrendPoint[];
    weekly: LeadTrendPoint[];
    monthly: LeadTrendPoint[];
  };
  statusBreakdown: Record<string, number>;
  funnel: FunnelStep[];
  topDestinations: BreakdownItem[];
  topExamInterests: BreakdownItem[];
  sourceAnalytics: SourceAnalyticsItem[];
  staffPerformance: StaffPerformanceItem[];
  alerts: DashboardAlerts;
}
