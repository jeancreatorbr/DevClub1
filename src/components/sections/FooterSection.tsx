'use client';

import { motion } from 'framer-motion';

export function FooterSection() {
  return (
    <footer className="px-6 pb-10 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[30px] border border-white/10 bg-[#060b1c]/75 px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">DevClub</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Construindo os desenvolvedores do futuro.</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Uma experiência institucional premium para transformar talentos em profissionais preparados para o mercado.
            </p>
          </div>

          <div className="text-sm leading-8 text-slate-400">
            <p className="font-medium text-slate-300">Desenvolvido por</p>
            <motion.a
              href="https://www.linkedin.com/in/jean-marlon-goncalves/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, color: '#ffffff' }}
              className="inline-block font-semibold text-white"
            >
              Jean Marlon Gonçalves
            </motion.a>
            <p className="mt-2">© 2026 Jean Marlon Gonçalves</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
