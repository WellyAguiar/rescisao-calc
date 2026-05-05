import type { NoticeType, TerminationReason } from "../types/rescission";

const terminationReasonOptions: { 
    value: TerminationReason; 
    label: string }[] = [
  { value: "dismissal_without_cause", label: "Demissão sem justa causa" },
  { value: "resignation", label: "Pedido de demissão" },
  { value: "dismissal_with_cause", label: "Demissão com justa causa" }
];

const noticeTypeOptions: { 
    value: NoticeType; 
    label: string }[] = [
  { value: "worked", label: "Trabalhado" },
  { value: "indemnified", label: "Indenizado" },
  { value: "not_applicable", label: "Não aplicável" }
];

export function RescissionForm() {
  return (
    <form className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-100">
          Dados da rescisão
        </h2>

        <p className="text-sm text-slate-400">
          Preencha as informações básicas do contrato para iniciar a simulação.
        </p>
      </div>

      <div className="mt-6 grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="salary" className="text-sm font-medium text-slate-200">
            Salário bruto mensal
          </label>

          <input
            id="salary"
            name="salary"
            type="number"
            min="0"
            step="0.01"
            placeholder="Ex: 2500.00"
            className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="admissionDate"
            className="text-sm font-medium text-slate-200"
          >
            Data de admissão
          </label>

          <input
            id="admissionDate"
            name="admissionDate"
            type="date"
            className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="terminationDate"
            className="text-sm font-medium text-slate-200"
          >
            Data de desligamento
          </label>

          <input
            id="terminationDate"
            name="terminationDate"
            type="date"
            className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="terminationReason"
            className="text-sm font-medium text-slate-200"
          >
            Motivo da rescisão
          </label>

          <select
            id="terminationReason"
            name="terminationReason"
            className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione uma opção
            </option>

            {terminationReasonOptions.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="noticeType"
            className="text-sm font-medium text-slate-200"
          >
            Tipo de aviso prévio
          </label>

          <select
            id="noticeType"
            name="noticeType"
            className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            {noticeTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="mt-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Calcular rescisão
        </button>
      </div>
    </form>
  );
}