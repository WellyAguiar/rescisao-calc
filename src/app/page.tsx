import { RescissionForm } from "@/features/rescission/components/RescissionForm";
import { AlertTriangle, Info } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-12 text-slate-100 sm:py-20">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <section className="relative mx-auto flex max-w-4xl flex-col gap-12">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            Simulador Trabalhista
          </div>

          <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
            Calculadora de <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Rescisão CLT
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 md:mx-0">
            Simule de forma rápida e precisa os valores estimados da sua rescisão. 
            Baseado nas regras vigentes de saldo salarial, 13º e férias.
          </p>
        </div>

        <RescissionForm />

        <div className="group rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8 transition-colors hover:border-yellow-500/30">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-yellow-200">
                Aviso Importante
              </h2>
              <p className="mt-2 leading-relaxed text-yellow-100/70">
                Esta aplicação tem caráter exclusivamente <strong>educacional e demonstrativo</strong>. 
                Os cálculos são estimativas brutas e não substituem a análise de um profissional 
                jurídico ou contábil. Divergências podem ocorrer devido a convenções coletivas e 
                particularidades contratuais.
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Calculadora de Rescisão. Uso demonstrativo.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-cyan-400">Termos</a>
            <a href="#" className="transition-colors hover:text-cyan-400">Privacidade</a>
            <a href="#" className="flex items-center gap-1 transition-colors hover:text-cyan-400">
              <Info size={14} /> Ajuda
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}