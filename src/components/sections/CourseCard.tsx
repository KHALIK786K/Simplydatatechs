import { Link } from "react-router-dom";
import type { Course } from "@/types";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { formatInr, formatCompact } from "@/utils/format";

const categoryGradient: Record<string, string> = {
  "Data & AI": "from-brand-500 to-violet-500",
  Management: "from-accent-500 to-brand-500",
  Software: "from-cyber-500 to-brand-500",
  Marketing: "from-violet-500 to-brand-600",
};

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  const grad = categoryGradient[course.category] ?? "from-brand-500 to-violet-500";

  return (
    <Reveal delay={(index % 3) * 0.06}>
      <TiltCard intensity={6} className="h-full">
        <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-shadow duration-300 hover:shadow-card">
          {/* Gradient banner */}
          <div className={`relative h-24 bg-gradient-to-r ${grad}`}>
            <div className="absolute inset-0 bg-grid-slate opacity-20 [background-size:22px_22px]" />
            <span className="absolute left-5 top-5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {course.category}
            </span>
            <span className="absolute right-5 top-5 text-xs font-medium text-white/90">
              {course.level}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-lg font-bold text-slate-900">
              <Link to={`/courses/${course.slug}`} className="hover:text-brand-700">
                {course.title}
              </Link>
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-600">{course.summary}</p>

            <dl className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-slate-600">
              <div className="rounded-xl bg-slate-50 py-2">
                <dt className="text-slate-400">Duration</dt>
                <dd className="font-semibold text-slate-800">
                  {course.durationMonths} mo
                </dd>
              </div>
              <div className="rounded-xl bg-slate-50 py-2">
                <dt className="text-slate-400">Mode</dt>
                <dd className="font-semibold text-slate-800">{course.mode}</dd>
              </div>
              <div className="rounded-xl bg-slate-50 py-2">
                <dt className="text-slate-400">Rating</dt>
                <dd className="font-semibold text-slate-800">{course.rating}★</dd>
              </div>
            </dl>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-slate-900">
                  {formatInr(course.priceInr)}
                </div>
                <div className="text-xs text-slate-500">
                  {formatCompact(course.learners)} learners
                </div>
              </div>
              <Link
                to={`/courses/${course.slug}`}
                className="btn btn-outline group-hover:border-brand-400 group-hover:text-brand-700"
              >
                View details
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
}
