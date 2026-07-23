'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { CareerJourneyCard } from '@/components/ui/CareerJourneyCard';
import { GlowCard } from '@/components/ui/GlowCard';
import { MagneticButton } from '@/components/ui/MagneticButton';

const navItems = [
  { label: 'Benefícios', href: '#benefits' },
  { label: 'Cases', href: '#cases' },
  { label: 'Contato', href: '#contato' },
];

const highlights = [
  'Arquitetura escalável',
  'Experiência premium',
  'Performance 60fps',
];

const chartHeights = [38, 64, 54, 86, 74, 100];
const particles = [
  { left: '10%', top: '18%' },
  { left: '78%', top: '24%' },
  { left: '20%', top: '72%' },
  { left: '86%', top: '78%' },
];

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 16 });
  const springY = useSpring(y, { stiffness: 120, damping: 16 });
  const rotateX = useTransform(springY, [-16, 16], [6, -6]);
  const rotateY = useTransform(springX, [-16, 16], [-6, 6]);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const relativeX = (event.clientX / innerWidth - 0.5) * 22;
      const relativeY = (event.clientY / innerHeight - 0.5) * 18;
      setMousePosition({ x: relativeX, y: relativeY });
      x.set(relativeX);
      y.set(relativeY);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [x, y]);

  const glowStyle = useMemo(
    () => ({
      background: `radial-gradient(circle at ${50 + mousePosition.x * 1.4}% ${50 + mousePosition.y * 1.3}%, rgba(108,99,255,0.32), transparent 31%), radial-gradient(circle at ${20 + mousePosition.x * 0.6}% ${20 + mousePosition.y * 0.7}%, rgba(0,229,255,0.24), transparent 28%), rgba(5,8,22,0.92)`,
    }),
    [mousePosition.x, mousePosition.y],
  );

  const titleLines = [
    'O futuro da',
    'programação começa',
    'aqui.',
  ];

  return (
    <section className="relative overflow-hidden px-6 py-6 sm:px-8 lg:px-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(108,99,255,0.28),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(0,229,255,0.18),_transparent_35%),radial-gradient(circle_at_50%_80%,_rgba(168,85,247,0.2),_transparent_30%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:44px_44px]" />
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundImage: 'radial-gradient(circle at center, rgba(108,99,255,0.14), transparent 38%)' }}
        />
        <motion.div
          className="absolute left-[10%] top-[8%] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{ x: [0, 16, 0], y: [0, -12, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[12%] right-[8%] h-64 w-64 rounded-full bg-[#6C63FF]/12 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 14, 0], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {particles.map((particle, index) => (
          <motion.span
            key={`${particle.left}-${particle.top}`}
            className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-white/40"
            style={{ left: particle.left, top: particle.top }}
            animate={{ opacity: [0.2, 0.7, 0.2], y: [0, -8, 0] }}
            transition={{ duration: 3.2 + index * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="mx-auto flex max-w-7xl flex-col rounded-[32px] border border-white/10 bg-[#060b1c]/80 px-6 py-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-8 lg:px-12 lg:py-8">
        <motion.header
          className={`sticky top-4 z-20 flex items-center justify-between rounded-full border border-white/10 px-4 py-3 backdrop-blur-2xl transition-all duration-300 sm:px-6 ${isScrolled ? 'bg-white/8 shadow-[0_20px_70px_rgba(0,0,0,0.24)]' : 'bg-transparent'}`}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
              DC
            </div>
            <div>
              <p className="text-sm font-semibold text-white">DevClub</p>
              <p className="text-xs text-slate-400">Laboratório digital</p>
            </div>
          </div>
          <nav className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </motion.header>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span className="inline-flex rounded-full border border-[#6C63FF]/40 bg-[#6C63FF]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#9aa3ff]">
              Concurso Programador Full Stack
            </span>

            <div className="mt-6 space-y-2">
              {titleLines.map((line, index) => (
                <motion.h1
                  key={line}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.16 }}
                  className="text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl"
                >
                  {line}
                </motion.h1>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl"
            >
              Mais do que ensinar código. Criamos uma trajetória de alto rendimento para quem quer entrar no mercado com clareza, maturidade e presença real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <MagneticButton href="#formacoes">Começar minha jornada</MagneticButton>
              <MagneticButton href="#sobre" variant="secondary">Conhecer o DevClub</MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {highlights.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.8 + index * 0.06 }}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <motion.div
              style={{ rotateX, rotateY, x: springX, y: springY, transformStyle: 'preserve-3d' }}
              className="relative"
              whileHover={{ scale: 1.01, y: -4, rotateX: 0, rotateY: 0 }}
            >
              <GlowCard className="relative overflow-hidden p-6 sm:p-8" style={glowStyle}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(108,99,255,0.25),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(0,229,255,0.2),_transparent_35%)]" />
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[inherit]"
                  animate={{ x: ['-120%', '120%'] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    background: 'linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.12) 42%, transparent 70%)',
                  }}
                />
                <div className="relative">
                  <CareerJourneyCard />
                </div>
              </GlowCard>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <span className="text-[11px] uppercase tracking-[0.35em]">Scroll</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="h-8 w-[1px] bg-gradient-to-b from-white to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
