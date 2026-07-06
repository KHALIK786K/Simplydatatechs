import { cn } from "@/utils/cn";

/** Decorative animated gradient blobs + grid — pure CSS, no images. */
export function GlowBackground({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {variant === "light" && (
        <div className="absolute inset-0 bg-grid-slate [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      )}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl animate-float-slow" />
      <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-violet-400/25 blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyber-400/20 blur-3xl animate-pulse-glow" />
    </div>
  );
}
