import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/config/site";
import { LogoMark } from "@/components/layout/Logo";

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
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: [0, 10, 0] }}
              transition={{ duration: 0.6 }}
            >
              <LogoMark size={56} />
            </motion.div>
            <div className="h-1 w-44 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-400 via-brand-400 to-violet-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
              />
            </div>
            <p className="text-sm font-semibold tracking-wide text-brand-200">
              {site.name}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
