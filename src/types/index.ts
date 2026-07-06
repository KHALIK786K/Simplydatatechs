// Shared domain types for the template.

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  durationMonths: number;
  mode: "Online" | "Hybrid";
  priceInr: number;
  rating: number;
  learners: number;
  summary: string;
  highlights: string[];
  syllabus: { module: string; topics: string[] }[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarColor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface LeadFormValues {
  fullName: string;
  email: string;
  phone: string;
  courseSlug: string;
  consent: boolean;
}
