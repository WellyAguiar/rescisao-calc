export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <section className="mx-auto flex max-w-4xl flex-col gap-8">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Projeto de portfólio
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Calculadora de Rescisão Trabalhista
          </h1>

          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Simule valores básicos de uma rescisão CLT com base em salário,
            datas do contrato, motivo do desligamento e tipo de aviso prévio.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Status do projeto</h2>

          <p className="mt-3 text-slate-300">
            A aplicação está em fase inicial. A próxima etapa será criar o
            formulário de entrada de dados.
          </p>
        </div>

        <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6">
          <h2 className="text-xl font-semibold text-yellow-200">
            Aviso importante
          </h2>

          <p className="mt-3 text-yellow-100/90">
            Esta aplicação fornece apenas uma simulação. Os cálculos
            podem variar conforme descontos legais, acordos coletivos,
            convenções e dados específicos do contrato.
          </p>
        </div>
      </section>
    </main>
  );
}