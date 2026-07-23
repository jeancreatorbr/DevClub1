import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-[#050816]";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#6C63FF] via-[#A855F7] to-[#00E5FF] text-white shadow-[0_0_40px_rgba(108,99,255,0.25)] hover:translate-y-[-2px] hover:shadow-[0_0_50px_rgba(0,229,255,0.2)]",
    secondary:
      "border border-white/15 bg-white/5 text-slate-100 backdrop-blur-xl hover:border-cyan-400/40 hover:bg-white/10",
  };

  return (
    <a className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
