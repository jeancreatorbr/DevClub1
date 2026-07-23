"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type JourneyStepProps = {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
  isActive?: boolean;
};

export function JourneyStep({ icon, title, description, index, isActive = false }: JourneyStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ scale: 1.01, y: -3 }}
      className="relative"
    >
      <div className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6">
        <motion.div
          animate={{ scale: isActive ? 1.08 : 1 }}
          transition={{ duration: 0.3 }}
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-lg ${
            isActive
              ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-200"
              : "border-white/10 bg-white/10 text-slate-300"
          }`}
        >
          {icon}
        </motion.div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
