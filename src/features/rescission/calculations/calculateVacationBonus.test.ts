import { describe, expect, it } from "vitest";

import { calculateVacationBonus } from "./calculateVacationBonus";

describe("calculateVacationBonus", () => {
  it("should calculate one third of vacation pay", () => {
    const result = calculateVacationBonus({
      vacationPay: 750,
    });

    expect(result).toBe(250);
  });

  it("should return zero when vacation pay is zero", () => {
    const result = calculateVacationBonus({
      vacationPay: 0,
    });

    expect(result).toBe(0);
  });
});