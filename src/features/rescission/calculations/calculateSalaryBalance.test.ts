import { describe, expect, it } from "vitest";

import { calculateSalaryBalance } from "./calculateSalaryBalance";

describe("calculateSalaryBalance", () => {
  it("should calculate salary balance based on termination day", () => {
    const result = calculateSalaryBalance({
      salary: 3000,
      terminationDate: "2025-03-10",
    });

    expect(result).toBe(1000);
  });

  it("should calculate full salary when termination happens on day 30", () => {
    const result = calculateSalaryBalance({
      salary: 3000,
      terminationDate: "2025-03-30",
    });

    expect(result).toBe(3000);
  });
});