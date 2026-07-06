import type { Course, LeadFormValues } from "@/types";
import { courses, testimonials, faqs } from "./mockData";

/**
 * Mock data layer.
 *
 * These functions simulate network latency and mirror the shape a real API
 * would return. Swap the bodies for `apiClient` calls when a backend exists;
 * the components consuming them won't need to change.
 */
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function fetchCourses(): Promise<Course[]> {
  await delay(400);
  return courses;
}

export async function fetchFeaturedCourses(): Promise<Course[]> {
  await delay(300);
  return courses.filter((c) => c.featured);
}

export async function fetchCourseBySlug(slug: string): Promise<Course | null> {
  await delay(300);
  return courses.find((c) => c.slug === slug) ?? null;
}

export async function fetchTestimonials() {
  await delay(200);
  return testimonials;
}

export async function fetchFaqs() {
  await delay(200);
  return faqs;
}

export interface LeadResponse {
  ok: boolean;
  message: string;
}

export async function submitLead(values: LeadFormValues): Promise<LeadResponse> {
  await delay(700);
  // In production this would POST to the backend via apiClient.
  // eslint-disable-next-line no-console
  console.info("[mock] lead submitted:", values);
  return { ok: true, message: "Thanks! Our team will reach out shortly." };
}
