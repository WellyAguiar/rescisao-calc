import { describe, expect, it } from "vitest";

import { calculateNoticePay } from "./calculateNoticePay";

describe("calculateNoticePay", () => {
  it("should calculate indemnified notice pay for dismissal without cause", () => {
    const result = calculateNoticePay({
      salary: 3000,
      admissionDate: "2022-01-01",
      terminationDate: "2025-01-01",
      terminationReason: "dismissal_without_cause",
      noticeType: "indemnified",
    });

    expect(result).toBe(3900);
  });

  it("should return zero when notice is worked", () => {
    const result = calculateNoticePay({
      salary: 3000,
      admissionDate: "2022-01-01",
      terminationDate: "2025-01-01",
      terminationReason: "dismissal_without_cause",
      noticeType: "worked",
    });

    expect(result).toBe(0);
  });

  it("should return zero for resignation", () => {
    const result = calculateNoticePay({
      salary: 3000,
      admissionDate: "2022-01-01",
      terminationDate: "2025-01-01",
      terminationReason: "resignation",
      noticeType: "indemnified",
    });

    expect(result).toBe(0);
  });

  it("should return zero for dismissal with cause", () => {
    const result = calculateNoticePay({
      salary: 3000,
      admissionDate: "2022-01-01",
      terminationDate: "2025-01-01",
      terminationReason: "dismissal_with_cause",
      noticeType: "indemnified",
    });

    expect(result).toBe(0);
  });
});