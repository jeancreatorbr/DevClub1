"use client";

import { motion } from "framer-motion";

type Step = {
  icon: string;
  title: string;
  subtitle: string;
};

const steps: Step[] = [
  { icon: "👨‍💻", title: "Iniciando na programação", subtitle: "Primeiro contato com lógica, código e propósito." },
  { icon: "🧠", title: "Aprendendo HTML, CSS e JavaScript", subtitle: "Fundamentos sólidos para construir interfaces reais." },
  { icon: "🛠️", title: "Construindo projetos reais", subtitle: "Cada projeto transforma conhecimento em experiência." },
  { icon: "📦", title: "Criando portfólio", subtitle: "Um portfólio que comunica valor e maturidade." },
  { icon: "🎯", title: "Primeira entrevista", subtitle: "O momento de transformar preparação em oportunidade." },
  { icon: "🚀", title: "Primeira vaga como Desenvolvedor Full Stack", subtitle: "A entrada no mercado com confiança e base técnica." },
  { icon: "🤝", title: "Contratado", subtitle: "A carreira ganha escala, reconhecimento e impacto." },
];

export function CareerJourneyCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      whileHover={{ scale: 1.01, y: -3 }}
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_25px_90px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(108,99,255,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(0,229,255,0.16),_transparent_40%)]" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Transformação de carreira</p>
            <p className="mt-1 text-lg font-semibold text-white">Do primeiro passo ao primeiro contrato</p>
          </div>
          <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">
            DevClub
          </div>
        </div>

        <div className="relative mt-6 space-y-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 * index }}
              className="relative"
            >
              <div className="absolute left-3 top-6 h-full w-px bg-gradient-to-b from-cyan-400/40 to-transparent" />
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#050816]/70 p-3">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-lg"
                >
                  {step.icon}
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{step.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
