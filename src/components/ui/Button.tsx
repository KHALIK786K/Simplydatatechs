import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

type Variant = "primary" | "accent" | "outline";

const variants: Record<Variant, string> = {
  primary: "btn btn-primary",
  accent: "btn btn-accent",
  outline: "btn btn-outline",
};

interface BaseProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  to,
  variant = "primary",
  className,
  children,
}: BaseProps & { to: string }) {
  return (
    <Link to={to} className={cn(variants[variant], className)}>
      {children}
    </Link>
  );
}
