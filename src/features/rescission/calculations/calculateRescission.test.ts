import { describe, expect, it } from "vitest";

import { calculateRescission } from "./calculateRescission";

describe("calculateRescission", () => {
  it("should calculate full rescission result for dismissal without cause and indemnified notice", () => {
    const result = calculateRescission({
      salary: 3000,
      admissionDate: "2022-01-01",
      terminationDate: "2025-03-20",
      currentVacationPeriodStartDate: "2025-01-01",
      terminationReason: "dismissal_without_cause",
      noticeType: "indemnified",
    });

    expect(result).toEqual({
      salaryBalance: 2000,
      thirteenthSalary: 750,
      vacationPay: 750,
      vacationBonus: 250,
      noticePay: 3900,
      total: 7650,
    });
  });

  it("should return zero notice pay when notice is not indemnified", () => {
    const result = calculateRescission({
      salary: 3000,
      admissionDate: "2022-01-01",
      terminationDate: "2025-03-20",
      currentVacationPeriodStartDate: "2025-01-01",
      terminationReason: "dismissal_without_cause",
      noticeType: "worked",
    });

    expect(result.noticePay).toBe(0);
    expect(result.total).toBe(3750);
  });
});