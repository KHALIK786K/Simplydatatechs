import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Spinner } from "@/components/ui/Spinner";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CourseGrid } from "./CourseGrid";
import { useAsync } from "@/hooks/useAsync";
import { fetchFeaturedCourses } from "@/api/courses";

export function FeaturedCourses() {
  const { data, loading } = useAsync(fetchFeaturedCourses, []);

  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <span className="eyebrow">Popular programs</span>
          <h2 className="section-title mt-4">Featured courses</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ButtonLink to="/courses" variant="outline">
            View all courses <Icon name="arrow" className="h-4 w-4" />
          </ButtonLink>
        </Reveal>
      </div>
      <div className="mt-12">
        {loading ? <Spinner /> : <CourseGrid courses={data ?? []} />}
      </div>
    </Section>
  );
}
