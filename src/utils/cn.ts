// Tiny className combiner — avoids pulling extra deps for a template.
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
