import { useMemo, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Spinner } from "@/components/ui/Spinner";
import { Icon } from "@/components/ui/Icon";
import { LazyImage } from "@/components/ui/LazyImage";
import { CourseGrid } from "@/components/sections/CourseGrid";
import { useCourses } from "@/hooks/useCourses";
import { images } from "@/config/images";
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
      const matchCat = category === "All" || c.category === category;
      const matchQ = c.title.toLowerCase().includes(query.trim().toLowerCase());
      return matchCat && matchQ;
    });
  }, [data, category, query]);

  return (
    <>
      {/* Hero band */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-violet-600/40 bg-animated" />
        <div className="absolute inset-0 bg-grid-slate opacity-[0.05] [background-size:44px_44px]" />
        <div className="absolute inset-0 opacity-[0.06]">
          <img src={images.courseBannerDS} alt="" className="h-full w-full object-cover" aria-hidden="true" />
        </div>
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyber-500/25 blur-[80px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/20 blur-[80px]" />
        <div className="container relative py-16 sm:py-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
              <Icon name="layers" className="h-4 w-4 text-accent-400" /> Catalogue
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Explore our <span className="text-gradient">programs</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-brand-100/90">
              40+ industry-aligned programs across Data, AI, Cloud, Software, and Management.
              Filter by category or search to find the right fit for your career goals.
            </p>
          </Reveal>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      <Section>
        {/* Filters */}
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
                    category === cat
                      ? "bg-brand-600 text-white shadow-glow"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700 hover:-translate-y-0.5"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative">
              <Icon name="sparkle" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses…"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm shadow-soft outline-none transition-all focus:border-brand-400 focus:ring-2 focus:ring-brand-100 sm:w-72"
              />
            </div>
          </div>
        </Reveal>

        {/* Results summary */}
        <Reveal>
          <p className="mt-6 text-sm text-slate-500">
            Showing {filtered.length} {filtered.length === 1 ? "program" : "programs"}
            {category !== "All" && <> in <span className="font-semibold text-brand-600">{category}</span></>}
            {query && <> matching "<span className="font-semibold">{query}</span>"</>}
          </p>
        </Reveal>

        <div className="mt-8">
          {loading ? (
            <Spinner />
          ) : error ? (
            <div className="rounded-3xl border border-red-200 bg-red-50 py-16 text-center text-red-700">
              {error}
            </div>
          ) : (
            <CourseGrid courses={filtered} />
          )}
        </div>

        {/* Bottom image strip */}
        <Reveal className="mt-16">
          <div className="grid grid-cols-3 gap-3 overflow-hidden rounded-3xl">
            {[images.courseBannerAI, images.courseBannerCloud, images.courseBannerDev].map((src, i) => (
              <LazyImage key={i} src={src} alt="" aspect="aspect-[2/1]" imgClassName="brightness-75" />
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
