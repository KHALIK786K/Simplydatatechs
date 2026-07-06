import type { Course } from "@/types";
import { CourseCard } from "./CourseCard";

export function CourseGrid({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 py-16 text-center text-slate-500">
        No courses match your filters.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((c, i) => (
        <CourseCard key={c.id} course={c} index={i} />
      ))}
    </div>
  );
}
