// src/types/analytics.ts

export interface UniversityRanking {
  name: string;
  qsRanking2026: number | string; // Ranking (number) or 'Not ranked' (string) or joint rank (string like "306 (joint)")
  tuitionFeeUSD: number;
  tuitionFeeINR: number;
  program?: string; // For "Other Universities" list
  perCredit?: boolean; // To indicate if tuition is per credit
}

export interface WhyPursuePoint {
  heading: string;
  details: string;
}

export interface AdmissionStep {
  stepNumber: number;
  title: string;
  details: string;
}

export interface EstimatedCost {
  expenseCategory: string;
  estimatedRangeUSD: string; // e.g., "$30,000 – $90,000"
  estimatedRangeINR: string; // e.g., "₹2,664,000 – ₹7,996,800"
}

export interface JobRole {
  role: string;
  medianSalaryUSD: number;
  medianSalaryINR: number;
  jobOutlookGrowth: string;
  keyIndustries: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BusinessAnalyticsData {
  summary: {
    lastUpdated: string;
    readTime: string;
    blsPrediction: string;
    employerHiringRate: string;
    startingSalaryRangeUSD: string;
    startingSalaryRangeINR: string;
    stemOptDuration: string;
    postStudySalaryRangeUSD: string;
    postStudySalaryRangeINR: string;
    conversionRateUsed: string;
  };
  topUniversities: UniversityRanking[];
  whyPursue: WhyPursuePoint[];
  eligibility: {
    title: string;
    academic: string[];
    technical: string[];
    standardizedTests: string[];
    workExperience: string[];
    additionalRequirements: string[];
  };
  otherUniversities: UniversityRanking[];
  admissionProcess: AdmissionStep[];
  costOfStudy: {
    title: string;
    conversionRate: string;
    estimatedAnnualCosts: EstimatedCost[];
    lowFeeStrategy: {
      title: string;
      points: string[];
    };
  };
  jobOpportunities: {
    title: string;
    source: string;
    roles: JobRole[];
    keyInsights: string[];
  };
  faq: FAQItem[];
}