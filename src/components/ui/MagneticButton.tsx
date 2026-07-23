"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  onClick?: () => void;
};

export function MagneticButton({ children, variant = "primary", className = "", href, target, rel, download, onClick, ...props }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });
  const rotateX = useTransform(springY, [-20, 20], [4, -4]);
  const rotateY = useTransform(springX, [-20, 20], [-4, 4]);

  const handleMove = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const relX = (offsetX / rect.width - 0.5) * 18;
    const relY = (offsetY / rect.height - 0.5) * 18;
    x.set(relX);
    y.set(relY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses =
    "relative inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-[#050816]";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#6C63FF] via-[#A855F7] to-[#00E5FF] text-white shadow-[0_0_40px_rgba(108,99,255,0.25)]",
    secondary:
      "border border-white/15 bg-white/5 text-slate-100 backdrop-blur-xl",
  };

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      download={download}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onMouseEnter={reset}
      style={{ rotateX, rotateY, x: springX, y: springY }}
      whileHover={{ scale: 1.04, y: -3, boxShadow: "0 0 40px rgba(0, 229, 255, 0.25)" }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
