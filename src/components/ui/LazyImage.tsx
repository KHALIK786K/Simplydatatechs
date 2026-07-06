import { useState } from "react";
import { cn } from "@/utils/cn";

/**
 * Image with native lazy loading, async decoding, and a shimmer skeleton
 * that fades out on load. Keeps layout stable via an aspect-ratio wrapper.
 */
export function LazyImage({
  src,
  alt,
  className,
  imgClassName,
  aspect = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspect?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", aspect, className)}>
      {!loaded && <div className="skeleton absolute inset-0" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-all duration-700",
          loaded ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-sm",
          imgClassName
        )}
      />
    </div>
  );
}
