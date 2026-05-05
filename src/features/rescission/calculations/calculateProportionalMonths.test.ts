import  { describe, expect, it } from "vitest";

import { calculateProportionalMonths } from "./calculateProportionalMonths";

describe("calculateProportionalMonths", () => {
    it("should count full months between two dates", () => {
        const result = calculateProportionalMonths({
            startDate: "2026-01-10",
            endDate: "2026-03-20",
     });

    expect(result).toBe(3);
    });


    it("should count partial months as full if 15 or more days are worked", () => {
        const result = calculateProportionalMonths({
            startDate: "2026-01-20",
            endDate: "2026-03-10",
        });

        expect(result).toBe(1);
    });

    it("should count a single month when worked days are exactly 15", () => {
        const result = calculateProportionalMonths({
            startDate: "2025-03-01",
            endDate: "2025-03-15",
        });

    expect(result).toBe(1);
  });

    it("should not count partial months if less than 15 days are worked", () => {
        const result = calculateProportionalMonths({
            startDate: "2026-01-01",
            endDate: "2026-01-14",
        });

        expect(result).toBe(0);

    });
});
