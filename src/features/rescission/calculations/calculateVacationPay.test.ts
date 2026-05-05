import { describe, expect, it } from "vitest";

import { calculateVacationPay } from "./calculateVacationPay";

describe("calculateVacationPay", () => {
  it("should calculate vacation pay based on proportional months", () => {
    const result = calculateVacationPay({
      salary: 3000,
      currentVacationPeriodStartDate: "2025-01-01",
      terminationDate: "2025-03-20",
    });

    expect(result).toBe(750);
  });

  it("should ignore months with less than 15 worked days", () => {
    const result = calculateVacationPay({
      salary: 3000,
      currentVacationPeriodStartDate: "2025-01-20",
      terminationDate: "2025-03-10",
    });

    expect(result).toBe(250);
  });

  it("should cap vacation pay at 12 proportional months", () => {
    const result = calculateVacationPay({
      salary: 3000,
      currentVacationPeriodStartDate: "2023-01-01",
      terminationDate: "2025-03-20",
    });

    expect(result).toBe(3000);
  });
});

it("should calculate vacation pay from current vacation period start date", () => {
  const result = calculateVacationPay({
    salary: 3000,
    currentVacationPeriodStartDate: "2025-03-03",
    terminationDate: "2025-04-02",
  });

  expect(result).toBe(250);
});