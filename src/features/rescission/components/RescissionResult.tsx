import { 
  TrendingUp, 
  ArrowRight, 
  Info, 
  Wallet,
  CalendarCheck,
  Percent,
  MessageSquare
} from "lucide-react";
import type { RescissionCalculationResult } from "@/features/rescission/types/rescission";
import { formatCurrency } from "@/lib/formatCurrency";

type RescissionResultProps = {
  result: RescissionCalculationResult;
};

export function RescissionResult({ result }: RescissionResultProps) {
  const items = [
    {
      label: "Saldo de salário",
      value: result.salaryBalance,
      icon: <Wallet size={16} />,
    },
    {
      label: "13º proporcional",
      value: result.thirteenthSalary,
      icon: <CalendarCheck size={16} />,
    },
    {
      label: "Férias proporcionais",
      value: result.vacationPay,
      icon: <TrendingUp size={16} />,
    },
    {
      label: "1/3 de férias",
      value: result.vacationBonus,
      icon: <Percent size={16} />,
    },
    {
      label: "Aviso prévio indenizado",
      value: result.noticePay,
      icon: <MessageSquare size={16} />,
    },
  ];

  return (
    <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Total Card */}
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] shadow-2xl shadow-cyan-500/10">
        <div className="rounded-[23px] bg-slate-950/90 backdrop-blur-xl p-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="space-y-1 text-center md:text-left">
                    <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                        Total Bruto Estimado
                    </p>
                    <h3 className="text-4xl font-black text-white sm:text-5xl">
                        {formatCurrency(result.total)}
                    </h3>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md">
                    <TrendingUp size={32} />
                </div>
            </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-100">
                Detalhamento das Verbas
            </h2>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-400">
                <Info size={16} />
            </div>
        </div>

        <div className="space-y-3">
            {items.map((item) => (
                <div 
                    key={item.label}
                    className="group flex items-center justify-between rounded-2xl border border-slate-800/50 bg-slate-950/30 p-4 transition-colors hover:border-slate-700 hover:bg-slate-950/50"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition-colors group-hover:bg-cyan-500/10 group-hover:text-cyan-400">
                            {item.icon}
                        </div>
                        <span className="text-sm font-medium text-slate-300">
                            {item.label}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ArrowRight size={14} className="text-slate-600 transition-transform group-hover:translate-x-1" />
                        <span className="font-mono font-bold text-slate-100">
                            {formatCurrency(item.value)}
                        </span>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-8 rounded-2xl bg-slate-950/50 p-4">
            <p className="flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                <Info size={14} className="mt-0.5 shrink-0" />
                Este resultado é uma simulação bruta. Não inclui descontos de INSS, IRRF, FGTS (incluindo multa), férias vencidas ou adicionais específicos da categoria.
            </p>
        </div>
      </div>
    </section>
  );
}