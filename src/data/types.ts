// types.ts

export interface UniversityOverview {
  university_name: string;
  qs_world_ranking_2026: number;
  annual_tuition_fees_usd: number;
  annual_tuition_fees_inr: number;
}

export interface DetailedUniversity {
  id: number;
  name: string;
  established: number;
  notable_facts: string;
  gre_policy: string;
  admission_focus: string;
  key_details: {
    location: string;
    gre_waiver_courses: string[];
    ielts?: number; // Optional as some use speaking scores
    toefl?: number | string; // Can be a range (string) or number
    ielts_speaking?: number; 
    toefl_speaking?: number;
    average_tuition_fees_usd: number;
    acceptance_rate: string;
  };
}

export interface AlternativeTest {
  test: string;
  purpose: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface AppData {
  title: string;
  last_updated: string;
  read_time: string;
  introduction: {
    summary: string;
    holistic_admissions: {
      key_points: string[];
    };
    source_of_information: string;
  };
  top_universities_quick_overview: {
    heading: string;
    conversion_rate: string;
    source: string;
    universities: UniversityOverview[];
  };
  detailed_university_list: {
    heading: string;
    universities_details: DetailedUniversity[];
  };
  gre_alternatives: {
    heading: string;
    alternatives: AlternativeTest[];
  };
  how_to_apply_without_gre: {
    heading: string;
    key_stat: string;
    steps: string[];
  };
  why_study_without_gre: {
    heading: string;
    reasons: string[];
  };
  conclusion: {
    summary: string;
    other_options: string[];
    call_to_action: string;
  };
  frequently_asked_questions: FAQ[];
}