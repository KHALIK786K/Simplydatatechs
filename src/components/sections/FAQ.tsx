import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Spinner } from "@/components/ui/Spinner";
import { useAsync } from "@/hooks/useAsync";
import { fetchFaqs } from "@/api/courses";
import { cn } from "@/utils/cn";

export function FAQ() {
  const { data, loading } = useAsync(fetchFaqs, []);
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section>
      <SectionHeading
        eyebrow="Questions"
        title="Frequently asked questions"
        description="Everything you need to know before you enrol. Still curious? Reach out any time."
      />

      {loading ? (
        <Spinner label="Loading FAQs…" />
      ) : (
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
            {data?.map((f) => {
              const isOpen = openId === f.id;
              return (
                <div key={f.id}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50"
                    onClick={() => setOpenId(isOpen ? null : f.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-slate-900">
                      {f.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                          {f.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      )}
    </Section>
  );
}
