"use client";

import { useState } from "react";
import { 
  Calculator, 
  Calendar, 
  DollarSign, 
  Briefcase, 
  AlertCircle,
  Clock
} from "lucide-react";
import type { 
    NoticeType, 
    TerminationReason,
    RescissionFormErrors,
    RescissionCalculationResult
} from "../types/rescission";

import { RescissionResult } from "./RescissionResult";
import { validateRescissionForm } from "../validations/validateRescissionForm";
import { calculateRescission } from "../calculations/calculateRescission";

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
    const [errors, setErrors] = useState<RescissionFormErrors>({});
    const [result, setResult] = useState<RescissionCalculationResult | null>(null);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const validation = validateRescissionForm({
            salary: Number(formData.get("salary")),
            admissionDate: String(formData.get("admissionDate") ?? ""),
            terminationDate: String(formData.get("terminationDate") ?? ""),
            terminationReason: String(formData.get("terminationReason") ?? ""),
            noticeType: String(formData.get("noticeType") ?? ""),
            currentVacationPeriodStartDate: String(formData.get("currentVacationPeriodStartDate") ?? ""),
        });

        setErrors(validation.errors);
        
        if (!validation.isValid) {
            setResult(null);
            return;
        }

        const calculationResult = calculateRescission(validation.data);
        setResult(calculationResult);
    }

  return (
    <div className="space-y-8">
        <form 
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-8 shadow-2xl transition-all"
        >
            <div className="mb-8 border-b border-slate-800/50 pb-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Briefcase size={22} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-100">
                            Dados do Contrato
                        </h2>
                        <p className="text-sm text-slate-400">
                            Preencha as informações básicas para iniciar a simulação.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="salary" className="text-sm font-semibold text-slate-300">
                        Salário bruto mensal
                    </label>
                    <div className="group relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-cyan-400">
                            <DollarSign size={18} />
                        </div>
                        <input
                            id="salary"
                            name="salary"
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="0,00"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950/50 pl-11 pr-4 py-3 text-slate-100 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:ring-4"
                        />
                    </div>
                    {errors.salary && (
                        <div className="flex items-center gap-1.5 text-xs text-red-400">
                            <AlertCircle size={14} />
                            <span>{errors.salary}</span>
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="admissionDate" className="text-sm font-semibold text-slate-300">
                        Data de admissão
                    </label>
                    <div className="group relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-cyan-400">
                            <Calendar size={18} />
                        </div>
                        <input
                            id="admissionDate"
                            name="admissionDate"
                            type="date"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950/50 pl-11 pr-4 py-3 text-slate-100 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:ring-4"
                        />
                    </div>
                    {errors.admissionDate && (
                        <div className="flex items-center gap-1.5 text-xs text-red-400">
                            <AlertCircle size={14} />
                            <span>{errors.admissionDate}</span>
                        </div>
                    )}
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="currentVacationPeriodStartDate" className="text-sm font-semibold text-slate-300">
                        Início do período aquisitivo atual
                    </label>
                    <div className="group relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-cyan-400">
                            <Clock size={18} />
                        </div>
                        <input
                            id="currentVacationPeriodStartDate"
                            name="currentVacationPeriodStartDate"
                            type="date"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950/50 pl-11 pr-4 py-3 text-slate-100 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:ring-4"
                        />
                    </div>
                    {errors.currentVacationPeriodStartDate && (
                        <div className="flex items-center gap-1.5 text-xs text-red-400">
                            <AlertCircle size={14} />
                            <span>{errors.currentVacationPeriodStartDate}</span>
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="terminationDate" className="text-sm font-semibold text-slate-300">
                        Data de desligamento
                    </label>
                    <div className="group relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-cyan-400">
                            <Calendar size={18} />
                        </div>
                        <input
                            id="terminationDate"
                            name="terminationDate"
                            type="date"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950/50 pl-11 pr-4 py-3 text-slate-100 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:ring-4"
                        />
                    </div>
                    {errors.terminationDate && (
                        <div className="flex items-center gap-1.5 text-xs text-red-400">
                            <AlertCircle size={14} />
                            <span>{errors.terminationDate}</span>
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="terminationReason" className="text-sm font-semibold text-slate-300">
                        Motivo da rescisão
                    </label>
                    <div className="group relative">
                        <select
                            id="terminationReason"
                            name="terminationReason"
                            className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-slate-100 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:ring-4"
                            defaultValue=""
                        >
                            <option value="" disabled>Selecione uma opção</option>
                            {terminationReasonOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400">
                            <Briefcase size={18} />
                        </div>
                    </div>
                    {errors.noticeType && (
                        <div className="flex items-center gap-1.5 text-xs text-red-400">
                            <AlertCircle size={14} />
                            <span>{errors.noticeType}</span>
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="noticeType" className="text-sm font-semibold text-slate-300">
                        Tipo de aviso prévio
                    </label>
                    <div className="group relative">
                        <select
                            id="noticeType"
                            name="noticeType"
                            className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-slate-100 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:ring-4"
                            defaultValue=""
                        >
                            <option value="" disabled>Selecione uma opção</option>
                            {noticeTypeOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400">
                            <Calculator size={18} />
                        </div>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] hover:shadow-cyan-500/30 active:scale-[0.98]"
            >
                <Calculator size={20} />
                Calcular Rescisão
            </button>
        </form>

        {result && <RescissionResult result={result} />}
    </div>
  );
}