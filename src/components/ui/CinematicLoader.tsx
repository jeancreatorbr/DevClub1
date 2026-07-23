'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CinematicLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#03060f]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(108,99,255,0.22),_transparent_40%),radial-gradient(circle_at_80%_80%,_rgba(0,229,255,0.16),_transparent_35%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:34px_34px]" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-sm font-semibold tracking-[0.28em] text-cyan-200">
              DC
            </div>
            <p className="text-[11px] uppercase tracking-[0.5em] text-slate-400">DevClub</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Construindo experiências de alto nível
            </p>
            <div className="mt-8 h-[1px] w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-[#6C63FF] via-[#A855F7] to-[#00E5FF]"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
