'use client';

import { motion } from 'framer-motion';
import { GlowCard } from '@/components/ui/GlowCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

const values = [
  {
    title: 'Mentoria de alto nível',
    description: 'Orientação estratégica para transformar potencial em execução, confiança e presença profissional.',
  },
  {
    title: 'Método intensivo',
    description: 'Aprendizado guiado, projetos reais e evolução contínua em cada etapa da formação.',
  },
  {
    title: 'Resultados claros',
    description: 'Cada etapa é pensada para gerar maturidade, posicionamento e oportunidades concretas de carreira.',
  },
];

export function ValueSection() {
  return (
    <section id="sobre" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Por que o DevClub"
          title="Uma presença premium que combina estética, estratégia e velocidade."
          description="Cada detalhe foi pensado para entregar uma marca sofisticada, moderna e memorável."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard className="h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-5 h-10 w-10 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#00E5FF]" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
