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
    },
    {
      label: "13º proporcional",
      value: result.thirteenthSalary,
    },
    {
      label: "Férias proporcionais",
      value: result.vacationPay,
    },
    {
      label: "1/3 de férias",
      value: result.vacationBonus,
    },
    {
      label: "Aviso prévio indenizado",
      value: result.noticePay,
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-100">
          Resultado da simulação
        </h2>

        <p className="text-sm text-slate-400">
          Valores brutos estimados com base nas informações preenchidas.
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-slate-800">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-950 text-slate-300">
            <tr>
              <th className="px-4 py-3 font-medium">Verba</th>
              <th className="px-4 py-3 text-right font-medium">Valor</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800">
            {items.map((item) => (
              <tr key={item.label}>
                <td className="px-4 py-3 text-slate-300">{item.label}</td>
                <td className="px-4 py-3 text-right font-medium text-slate-100">
                  {formatCurrency(item.value)}
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot className="bg-slate-950">
            <tr>
              <td className="px-4 py-4 text-base font-semibold text-slate-100">
                Total bruto estimado
              </td>
              <td className="px-4 py-4 text-right text-base font-bold text-cyan-300">
                {formatCurrency(result.total)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        Este resultado não considera descontos de INSS, IRRF, FGTS, multa do
        FGTS, férias vencidas, médias variáveis, adicionais ou regras de
        convenção coletiva.
      </p>
    </section>
  );
}