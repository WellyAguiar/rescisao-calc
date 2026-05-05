import type {
    RescissionFormData,
    RescissionCalculationResult,
} from "../types/rescission";

import { calculateNoticePay } from "./calculateNoticePay";
import { calculateSalaryBalance } from "./calculateSalaryBalance";
import { calculateThirteenthSalary } from "./calculateThirteenthSalary";
import { calculateVacationBonus } from "./calculateVacationBonus";
import { calculateVacationPay } from "./calculateVacationPay";

export function calculateRescission(
    data: RescissionFormData
): RescissionCalculationResult {
    const salaryBalance = calculateSalaryBalance({
        salary: data.salary,
        terminationDate: data.terminationDate,
    });

    const thirteenthSalary = calculateThirteenthSalary({
        salary: data.salary,
        admissionDate: data.admissionDate,
        terminationDate: data.terminationDate,
    });

    const vacationPay = calculateVacationPay({
        salary: data.salary,
        currentVacationPeriodStartDate: data.currentVacationPeriodStartDate,
        terminationDate: data.terminationDate,
    });

    const vacationBonus = calculateVacationBonus({
        vacationPay,
    });

    const noticePay = calculateNoticePay({
        salary: data.salary,
        admissionDate: data.admissionDate,
        terminationDate: data.terminationDate,
        terminationReason: data.terminationReason,
        noticeType: data.noticeType,
    });

    const total = 
        salaryBalance + thirteenthSalary + vacationPay + vacationBonus + noticePay;

    return {
        salaryBalance,
        thirteenthSalary,
        vacationPay,
        vacationBonus,
        noticePay,
        total,
    };
}