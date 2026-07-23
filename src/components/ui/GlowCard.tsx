"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function GlowCard({ children, className = '', style }: GlowCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 140, damping: 16 });
  const springY = useSpring(y, { stiffness: 140, damping: 16 });
  const rotateX = useTransform(springY, [-16, 16], [5, -5]);
  const rotateY = useTransform(springX, [-16, 16], [-5, 5]);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    x.set((offsetX / rect.width - 0.5) * 12);
    y.set((offsetY / rect.height - 0.5) * 12);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onMouseEnter={reset}
      style={{ rotateX, rotateY, x: springX, y: springY, ...style }}
      whileHover={{ scale: 1.015, y: -5, boxShadow: '0 25px 100px rgba(0, 0, 0, 0.28)' }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80 [background:linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_45%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-[1px] rounded-[calc(1.75rem-1px)] border border-cyan-400/10" />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(108,99,255,0.22),transparent_38%,rgba(0,229,255,0.18))] opacity-70" />
      {children}
    </motion.div>
  );
}
