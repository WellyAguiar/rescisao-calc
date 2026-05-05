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

    const shouldPayProportionalRights = 
        data.terminationReason !== "dismissal_with_cause"

    const thirteenthSalary = shouldPayProportionalRights 
    ? calculateThirteenthSalary({
        salary: data.salary,
        admissionDate: data.admissionDate,
        terminationDate: data.terminationDate,
    }) : 0;

    const vacationPay =  shouldPayProportionalRights 
    ? calculateVacationPay({
        salary: data.salary,
        currentVacationPeriodStartDate: data.currentVacationPeriodStartDate,
        terminationDate: data.terminationDate,
    }) : 0;

    const vacationBonus = shouldPayProportionalRights 
    ?calculateVacationBonus({
        vacationPay,
    }) : 0;

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