import { Link } from "react-router-dom";
import { site } from "@/config/site";
import { cn } from "@/utils/cn";

/** Text + mark logo. Single source of brand name via site config. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#1a37db" />
        <path d="M8 20l8-10 8 10z" fill="#ffb454" />
        <circle cx="16" cy="22" r="2.4" fill="#fff" />
      </svg>
      <span className="text-lg font-extrabold tracking-tight text-slate-900">
        {site.name}
      </span>
    </Link>
  );
}
