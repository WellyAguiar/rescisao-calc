import { describe, expect, it } from "vitest";

import { calculateThirteenthSalary } from "./calculateThirteenthSalary";

describe("calculateThirteenthSalary", () => {
  it("should calculate thirteenth salary from the beginning of termination year", () => {
    const result = calculateThirteenthSalary({
      salary: 3000,
      admissionDate: "2024-01-01",
      terminationDate: "2025-03-20",
    });

    expect(result).toBe(750);
  });

  it("should calculate thirteenth salary from admission date when admitted in termination year", () => {
    const result = calculateThirteenthSalary({
      salary: 3000,
      admissionDate: "2025-02-10",
      terminationDate: "2025-03-20",
    });

    expect(result).toBe(500);
  });

  it("should not count a termination month with less than 15 worked days", () => {
    const result = calculateThirteenthSalary({
      salary: 3000,
      admissionDate: "2025-01-01",
      terminationDate: "2025-03-10",
    });

    expect(result).toBe(500);
  });
});