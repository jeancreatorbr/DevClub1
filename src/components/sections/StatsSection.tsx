'use client';

import { motion } from 'framer-motion';
import { GlowCard } from '@/components/ui/GlowCard';

const stats = [
  { value: '92%', label: 'dos alunos entregam projetos completos' },
  { value: '4x', label: 'mais velocidade na transição para o mercado' },
  { value: '12+', label: 'módulos de formação full stack' },
  { value: '1:1', label: 'acompanhamento estratégico com mentoria' },
];

export function StatsSection() {
  return (
    <section id="benefits" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col gap-3 text-center sm:text-left"
        >
          <span className="inline-flex w-fit self-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-200 sm:self-start">
            Indicadores DevClub
          </span>
          <p className="text-sm leading-7 text-slate-400 sm:max-w-2xl">
            Dados que traduzem a força do método, a clareza da formação e o impacto da jornada construída em cada etapa.
          </p>
        </motion.div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <GlowCard className="h-full">
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{stat.label}</p>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
