'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { JourneyStep } from '@/components/ui/JourneyStep';

const stages = [
  {
    icon: '💡',
    title: 'Descobrir a programação',
    description: 'A descoberta começa com curiosidade, clareza de propósito e uma primeira visão do impacto real da tecnologia.',
  },
  {
    icon: '🛠️',
    title: 'Aprender com projetos reais',
    description: 'A prática transforma conhecimento em capacidade. Cada projeto cria confiança, raciocínio e profundidade.',
  },
  {
    icon: '📦',
    title: 'Construir um portfólio',
    description: 'Um portfólio bem pensado comunica valor, visão e maturidade para o mercado.',
  },
  {
    icon: '🎯',
    title: 'Conquistar a primeira vaga',
    description: 'A primeira oportunidade chega quando a estratégia, a comunicação e a execução se unem com consistência.',
  },
  {
    icon: '🚀',
    title: 'Trabalhar em grandes empresas',
    description: 'A partir daí, o crescimento ganha escala, relevância e espaço para liderar soluções de alto impacto.',
  },
];

export function JourneySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="formacoes" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-[#060b1c]/75 px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-200">
            A Jornada do Desenvolvedor
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            Uma evolução pensada para quem quer crescer com excelência.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            Não é só aprender a programar. É construir uma trajetória forte, estratégica e preparada para o futuro.
          </p>
        </div>

        <div ref={containerRef} className="relative mt-14 lg:mt-16">
          <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-white/10 lg:block" />
          <motion.div
            className="absolute left-5 top-0 hidden w-px origin-top bg-gradient-to-b from-[#6C63FF] via-[#00E5FF] to-transparent lg:block"
            style={{ scaleY: timelineProgress, height: '100%' }}
          />

          <div className="space-y-6">
            {stages.map((stage, index) => (
              <div key={stage.title} className="relative lg:pl-14">
                <div className="absolute left-2.5 top-6 hidden h-4 w-4 rounded-full border border-cyan-400/40 bg-[#050816] lg:block" />
                <JourneyStep
                  icon={stage.icon}
                  title={stage.title}
                  description={stage.description}
                  index={index}
                  isActive={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
