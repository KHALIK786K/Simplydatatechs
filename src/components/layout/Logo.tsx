import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { cn } from "@/utils/cn";

/**
 * Neural-node logo mark — represents AI, data connectivity, and cloud.
 * Three interconnected nodes with a central hub, symbolizing distributed
 * intelligence, analytics pipelines, and cloud architecture.
 */
function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2f52f5" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#logo-grad)" />
      {/* Connection lines */}
      <line x1="32" y1="23" x2="18" y2="37" stroke="#fff" strokeWidth="2" opacity=".45" />
      <line x1="32" y1="23" x2="46" y2="37" stroke="#fff" strokeWidth="2" opacity=".45" />
      <line x1="23" y1="42" x2="41" y2="42" stroke="#fff" strokeWidth="2" opacity=".45" />
      {/* Inner connections to center */}
      <line x1="32" y1="23" x2="32" y2="31" stroke="#fff" strokeWidth="1.5" opacity=".35" />
      <line x1="21" y1="40" x2="29" y2="35" stroke="#fff" strokeWidth="1.5" opacity=".35" />
      <line x1="43" y1="40" x2="35" y2="35" stroke="#fff" strokeWidth="1.5" opacity=".35" />
      {/* Three outer nodes */}
      <circle cx="32" cy="18" r="5.5" fill="#fff" opacity=".95" />
      <circle cx="18" cy="42" r="5.5" fill="#22d3ee" opacity=".9" />
      <circle cx="46" cy="42" r="5.5" fill="#ffb454" opacity=".9" />
      {/* Center hub */}
      <circle cx="32" cy="34" r="3.5" fill="#fff" opacity=".8" />
    </svg>
  );
}

/** Full horizontal logo with animated hover. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-2.5", className)}>
      <motion.div
        whileHover={{ rotate: 8, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <LogoMark />
      </motion.div>
      <span className="text-lg font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-brand-700">
        {site.name}
      </span>
    </Link>
  );
}

/** Square icon-only version (for mobile/compact). */
export function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <Link to="/" aria-label={site.name}>
      <motion.div
        whileHover={{ rotate: 8, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <LogoMark size={size} />
      </motion.div>
    </Link>
  );
}

export { LogoMark };
