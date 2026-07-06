import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/config/site";

/** Brief branded loading overlay shown on first paint. */
export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.svg
              viewBox="0 0 32 32"
              className="h-14 w-14"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <rect width="32" height="32" rx="8" fill="#1a37db" />
              <path d="M8 20l8-10 8 10z" fill="#ffb454" />
              <circle cx="16" cy="22" r="2.4" fill="#fff" />
            </motion.svg>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-400 to-brand-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
              />
            </div>
            <p className="text-sm font-medium text-brand-200">{site.name}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
