import { describe, expect, it } from "vitest";

import { calculateNoticeDays } from "./calculateNoticeDays";

describe("calculateNoticeDays", () => {
    it("should return 30 days when employee has been admitted for less than 1 year", () => {
        const result = calculateNoticeDays({
            admissionDate: "2025-01-01",
            terminationDate: "2025-10-01",
        });

        expect(result).toBe(30);
    });

    it("should add 3 days for each year of service after the first year, up to a maximum of 90 days", () => {
        const result = calculateNoticeDays({
            admissionDate: "2022-01-01",
            terminationDate: "2025-01-01",
        });

        expect(result).toBe(39);    
    });

    it("should not count an incomplete year of service as a full year for notice day calculation", () => {
        const result = calculateNoticeDays({
            admissionDate: "2022-06-12",
            terminationDate: "2025-06-09",
        });

        expect(result).toBe(36);

    });

    it ("should cap notice days at 90 for employees with 21 or more years of service", () => {
        const result = calculateNoticeDays({
            admissionDate: "1990-01-01",
            terminationDate: "2025-01-01",
        });

        expect(result).toBe(90);

    });
});