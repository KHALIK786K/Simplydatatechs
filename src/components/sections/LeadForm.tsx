import { useState } from "react";
import { useForm } from "react-hook-form";
import type { Course, LeadFormValues } from "@/types";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/api/courses";
import { cn } from "@/utils/cn";

interface Props {
  courses: Course[];
  defaultCourseSlug?: string;
  compact?: boolean;
}

/** Enquiry form with client-side validation and loading/success/error states. */
export function LeadForm({ courses, defaultCourseSlug, compact }: Props) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      courseSlug: defaultCourseSlug ?? courses[0]?.slug ?? "",
      consent: false,
    },
  });

  const onSubmit = async (values: LeadFormValues) => {
    try {
      const res = await submitLead(values);
      setStatus(res.ok ? "success" : "error");
      setMessage(res.message);
      if (res.ok) reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  const fieldClass = (hasError: boolean) =>
    cn(
      "w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition-colors focus:ring-2",
      hasError
        ? "border-red-400 focus:ring-red-200"
        : "border-slate-300 focus:border-brand-400 focus:ring-brand-100"
    );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6",
        !compact && "sm:p-8"
      )}
      noValidate
    >
      <h3 className="text-lg font-bold text-slate-900">Request a callback</h3>
      <p className="mt-1 text-sm text-slate-500">
        Fill in your details and our team will reach out.
      </p>

      <div className="mt-5 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Full name
          </label>
          <input
            type="text"
            className={fieldClass(!!errors.fullName)}
            placeholder="Your name"
            {...register("fullName", {
              required: "Name is required",
              minLength: { value: 2, message: "Enter at least 2 characters" },
            })}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            className={fieldClass(!!errors.email)}
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            type="tel"
            className={fieldClass(!!errors.phone)}
            placeholder="10-digit mobile number"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit number",
              },
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Program of interest
          </label>
          <select
            className={fieldClass(!!errors.courseSlug)}
            {...register("courseSlug", { required: "Select a program" })}
          >
            {courses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        <label className="flex items-start gap-2 text-xs text-slate-600">
          <input
            type="checkbox"
            className="mt-0.5"
            {...register("consent", { required: "Please provide consent" })}
          />
          <span>
            I agree to be contacted about this program and related updates.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-600">{errors.consent.message}</p>
        )}

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting…" : "Submit enquiry"}
        </Button>

        {status !== "idle" && (
          <p
            className={cn(
              "rounded-lg px-3 py-2 text-sm",
              status === "success"
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            )}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
