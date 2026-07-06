import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/config/site";

/** Large, animated hero with mouse-driven parallax on floating glass cards. */
export function Hero() {
  const wrap = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });

  const layer1x = useTransform(sx, (v) => v * 22);
  const layer1y = useTransform(sy, (v) => v * 22);
  const layer2x = useTransform(sx, (v) => v * -30);
  const layer2y = useTransform(sy, (v) => v * -30);
  const layer3x = useTransform(sx, (v) => v * 14);
  const layer3y = useTransform(sy, (v) => v * 14);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <section
      ref={wrap}
      onMouseMove={onMove}
      className="relative overflow-hidden bg-brand-950 text-white"
    >
      {/* Animated gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-violet-600/40 bg-animated" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-hero-radial" />
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-slate opacity-[0.08] [background-size:44px_44px]" />
      {/* Floating orbs */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyber-500/30 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl animate-float" />

      <Container>
        <div className="relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
              <Icon name="sparkle" className="h-4 w-4 text-accent-400" />
              {site.name} · Learn. Build. Advance.
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Master in-demand skills with{" "}
              <span className="text-gradient">world-class online programs</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-brand-100">
              Industry-aligned courses in data, AI, cloud, and software —
              delivered by expert mentors with live sessions, real projects, and
              dedicated career support that gets you hired.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/courses" variant="accent">
                Explore Courses
                <Icon name="arrow" className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline" className="btn-ghost-light">
                <Icon name="play" className="h-4 w-4" />
                Talk to an Advisor
              </ButtonLink>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { k: "50k+", v: "Learners" },
                { k: "40+", v: "Programs" },
                { k: "4.6★", v: "Avg. rating" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-2xl font-bold">{s.k}</dt>
                  <dd className="text-sm text-brand-200">{s.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Floating 3D card stack */}
          <div className="perspective relative mx-auto hidden h-[420px] w-full max-w-md lg:block">
            <motion.div
              style={{ x: layer1x, y: layer1y }}
              className="glass absolute left-0 top-4 w-72 rounded-3xl p-5 shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-violet-500 text-white">
                  <Icon name="ai" className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold">AI & Data Science</p>
                  <p className="text-xs text-brand-200">24-month M.Sc.</p>
                </div>
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-white/15">
                <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-cyber-400 to-brand-400" />
              </div>
              <p className="mt-2 text-xs text-brand-200">Cohort 82% complete</p>
            </motion.div>

            <motion.div
              style={{ x: layer2x, y: layer2y }}
              className="glass absolute right-0 top-32 w-64 rounded-3xl p-5 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Placements</span>
                <Icon name="rocket" className="h-5 w-5 text-accent-400" />
              </div>
              <p className="mt-3 text-3xl font-extrabold">200+</p>
              <p className="text-xs text-brand-200">hiring partners</p>
            </motion.div>

            <motion.div
              style={{ x: layer3x, y: layer3y }}
              className="glass absolute bottom-0 left-10 w-60 rounded-3xl p-5 shadow-card"
            >
              <div className="flex items-center gap-2">
                <Icon name="star" className="h-5 w-5 text-accent-400" />
                <span className="text-sm font-semibold">Live mentorship</span>
              </div>
              <div className="mt-3 flex -space-x-2">
                {["#2f52f5", "#8b5cf6", "#06b6d4", "#ff9a1f"].map((c) => (
                  <span
                    key={c}
                    className="h-8 w-8 rounded-full border-2 border-brand-900"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Bottom fade into page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
