import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { LogoMark } from "@/components/layout/Logo";
import { site } from "@/config/site";

export function NotFoundPage() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-violet-600/40 bg-animated" />
      <div className="absolute inset-0 bg-grid-slate opacity-[0.05] [background-size:44px_44px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
      <Section>
        <div className="relative mx-auto max-w-lg py-20 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-fit"
          >
            <LogoMark size={64} />
          </motion.div>
          <motion.p
            className="mt-8 text-8xl font-extrabold text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            404
          </motion.p>
          <motion.h1
            className="mt-4 text-2xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Page not found
          </motion.h1>
          <motion.p
            className="mt-3 text-brand-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            The page you're looking for doesn't exist or has moved.
            Let's get you back to {site.name}.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/" className="btn btn-accent">
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              Back to home
            </Link>
            <Link to="/courses" className="btn btn-ghost-light">
              Browse courses
            </Link>
          </motion.div>
        </div>
      </Section>
    </section>
  );
}
