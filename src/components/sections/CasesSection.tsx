export function CasesSection() {
  return (
    <section id="cases" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Cases de sucesso
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Histórias de transformação
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            O aprendizado ganha sentido quando se transforma em oportunidades
            reais e crescimento profissional.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Primeiro emprego
            </h3>

            <p className="text-gray-400">
              Formação prática para conquistar a primeira oportunidade como
              desenvolvedor.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Mudança de carreira
            </h3>

            <p className="text-gray-400">
              Pessoas de diferentes áreas iniciando uma nova trajetória na
              tecnologia.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Projetos reais
            </h3>

            <p className="text-gray-400">
              Desenvolvimento de aplicações modernas utilizando as principais
              tecnologias do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
