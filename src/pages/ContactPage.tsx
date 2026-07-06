import { Section } from "@/components/ui/Section";
import { Spinner } from "@/components/ui/Spinner";
import { LeadForm } from "@/components/sections/LeadForm";
import { useCourses } from "@/hooks/useCourses";
import { site } from "@/config/site";

export function ContactPage() {
  const { data, loading } = useCourses();

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 className="section-title mt-2">Talk to an advisor</h1>
          <p className="mt-3 text-slate-600">
            Have questions about programs, fees, or eligibility? Reach out and
            our team at {site.name} will help you find the right fit.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-slate-900">Email</dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="text-brand-700 hover:underline"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Phone</dt>
              <dd className="text-slate-600">{site.phone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Address</dt>
              <dd className="text-slate-600">{site.address}</dd>
            </div>
          </dl>
        </div>

        <div>
          {loading ? <Spinner /> : <LeadForm courses={data} />}
        </div>
      </div>
    </Section>
  );
}
