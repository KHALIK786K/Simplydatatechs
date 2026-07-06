import type { SVGProps } from "react";

export type IconName =
  | "ai"
  | "cloud"
  | "code"
  | "shield"
  | "chart"
  | "rocket"
  | "bulb"
  | "users"
  | "check"
  | "arrow"
  | "star"
  | "quote"
  | "sparkle"
  | "layers"
  | "mail"
  | "phone"
  | "pin"
  | "play";

const paths: Record<IconName, React.ReactNode> = {
  ai: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M9 9h6v6H9z" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
    </>
  ),
  cloud: <path d="M6 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A4 4 0 0 1 18 18H6z" />,
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />,
  shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  rocket: (
    <>
      <path d="M12 3c3 0 6 3 6 8l-3 3H9L6 11c0-5 3-8 6-8z" />
      <path d="M9 17l-2 4M15 17l2 4M12 8v.01" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 3z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M21 20a5 5 0 0 0-4-5" />
    </>
  ),
  check: <path d="M4 12l5 5L20 6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: <path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 17l-5.4 2.7 1.2-6.1L3.3 9.4l6.1-.8L12 3z" />,
  quote: <path d="M7 7h4v6H8l-1 4H5v-6a4 4 0 0 1 2-4zm8 0h4v6h-3l-1 4h-2v-6a4 4 0 0 1 2-4z" />,
  sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />,
  layers: <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  phone: <path d="M4 4h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 0-2z" />,
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  play: <path d="M8 5v14l11-7z" />,
};

export function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
