'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { GlowCard } from '@/components/ui/GlowCard';

export function ContactSection() {
  return (
    <section id="contato" className="px-6 pb-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <GlowCard className="overflow-hidden border-cyan-400/20">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="mb-6 h-[1px] rounded-full bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-transparent"
            />
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">Pronto para destacar</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Seu projeto merece uma presença que convence na primeira impressão.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
                  A DevClub constrói experiências digitais premium para quem quer inovação, clareza e excelência.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#050816]/70 p-6">
                <p className="text-sm text-slate-400">Vamos conversar</p>
                <p className="mt-2 text-2xl font-semibold text-white">contato@devclub.com</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="mailto:contato@devclub.com">Começar agora</Button>
                  <Button href="#top" variant="secondary">Voltar ao topo</Button>
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
