import { useMemo, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Spinner } from "@/components/ui/Spinner";
import { CourseGrid } from "@/components/sections/CourseGrid";
import { useCourses } from "@/hooks/useCourses";
import { cn } from "@/utils/cn";

export function CoursesPage() {
  const { data, loading, error } = useCourses();
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const set = new Set(data.map((c) => c.category));
    return ["All", ...Array.from(set)];
  }, [data]);

  const filtered = useMemo(() => {
    return data.filter((c) => {
      const matchesCategory = category === "All" || c.category === category;
      const matchesQuery = c.title
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [data, category, query]);

  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Catalogue</p>
        <h1 className="section-title mt-2">Explore our programs</h1>
        <p className="mt-3 text-slate-600">
          Filter by category or search to find the right fit.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                category === cat
                  ? "bg-brand-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search courses…"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 sm:w-64"
        />
      </div>

      <div className="mt-8">
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 py-16 text-center text-red-700">
            {error}
          </div>
        ) : (
          <CourseGrid courses={filtered} />
        )}
      </div>
    </Section>
  );
}
