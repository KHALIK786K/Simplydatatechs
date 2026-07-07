import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { LazyImage } from "@/components/ui/LazyImage";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { site } from "@/config/site";
import { images } from "@/config/images";

export function Hero() {
  const wrap = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });

  const l1x = useTransform(sx, (v) => v * 22);
  const l1y = useTransform(sy, (v) => v * 22);
  const l2x = useTransform(sx, (v) => v * -30);
  const l2y = useTransform(sy, (v) => v * -30);
  const l3x = useTransform(sx, (v) => v * 14);
  const l3y = useTransform(sy, (v) => v * 14);

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
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-violet-600/40 bg-animated" />
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 bg-grid-slate opacity-[0.07] [background-size:44px_44px]" />

      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <img src={images.heroCoding} alt="" className="h-full w-full object-cover" aria-hidden="true" />
      </div>

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-cyber-500/25 blur-[80px] animate-float-slow" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-500/20 blur-[100px] animate-float" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-accent-500/15 blur-[60px] animate-pulse-glow" />

      <Container>
        <div className="relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
              <Icon name="sparkle" className="h-4 w-4 text-accent-400" />
              {site.name} · Learn. Build. Advance.
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Master in-demand skills with{" "}
              <span className="text-gradient">world-class online programs</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-100/90">
              Industry-aligned courses in Data Science, AI, Cloud Computing, and
              Full-Stack Development — delivered by expert mentors with live
              sessions, real-world projects, and dedicated career support.
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

            {/* Inline stats */}
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { val: 50000, suf: "+", label: "Learners" },
                { val: 40, suf: "+", label: "Programs" },
                { val: 200, suf: "+", label: "Hiring Partners" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-extrabold lg:text-3xl">
                    <AnimatedCounter value={s.val} suffix={s.suf} duration={1400} />
                  </dt>
                  <dd className="text-sm text-brand-200">{s.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Right: 3D floating cards with images */}
          <div className="perspective relative mx-auto hidden h-[480px] w-full max-w-lg lg:block">
            {/* Main image card */}
            <motion.div
              style={{ x: l1x, y: l1y }}
              className="absolute left-0 top-0 w-80 overflow-hidden rounded-3xl shadow-card"
            >
              <LazyImage
                src={images.aiVisualization}
                alt="AI visualization"
                aspect="aspect-[16/10]"
                imgClassName="brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-violet-500 text-white">
                    <Icon name="ai" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">AI & Data Science</p>
                    <p className="text-xs text-brand-200">Live cohort program</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats glass card */}
            <motion.div
              style={{ x: l2x, y: l2y }}
              className="glass absolute right-0 top-36 w-56 rounded-3xl p-5 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Placements</span>
                <Icon name="rocket" className="h-5 w-5 text-accent-400" />
              </div>
              <p className="mt-2 text-3xl font-extrabold">
                <AnimatedCounter value={200} suffix="+" duration={1200} />
              </p>
              <p className="text-xs text-brand-200">hiring partners</p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white/15">
                <motion.div
                  className="h-1.5 rounded-full bg-gradient-to-r from-accent-400 to-cyber-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Mentorship card */}
            <motion.div
              style={{ x: l3x, y: l3y }}
              className="glass absolute bottom-4 left-6 w-64 rounded-3xl p-5 shadow-card"
            >
              <div className="flex items-center gap-2">
                <Icon name="star" className="h-5 w-5 text-accent-400" />
                <span className="text-sm font-semibold">Live mentors</span>
              </div>
              <div className="mt-3 flex -space-x-2.5">
                {[images.avatar1, images.avatar2, images.avatar3].map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-brand-900 object-cover"
                    loading="lazy"
                  />
                ))}
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-900 bg-brand-600 text-xs font-bold text-white">
                  40+
                </span>
              </div>
              <p className="mt-2 text-xs text-brand-200">
                Industry practitioners from top companies
              </p>
            </motion.div>

            {/* Completion rate card */}
            <motion.div
              style={{ x: useTransform(sx, (v) => v * -16), y: useTransform(sy, (v) => v * 18) }}
              className="glass absolute right-4 bottom-16 rounded-2xl px-4 py-3 shadow-card"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                  <Icon name="check" className="h-4 w-4 text-green-400" />
                </span>
                <div>
                  <p className="text-lg font-extrabold">92%</p>
                  <p className="text-[10px] text-brand-200">Completion rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
