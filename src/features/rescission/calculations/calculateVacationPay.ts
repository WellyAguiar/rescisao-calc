import { calculateProportionalMonths } from "./calculateProportionalMonths";

type CalculateVacationPayParams = {
  salary: number;
  currentVacationPeriodStartDate: string;
  terminationDate: string;
};

export function calculateVacationPay({
  salary,
  currentVacationPeriodStartDate,
  terminationDate,
}: CalculateVacationPayParams): number {
  const proportionalMonths = calculateProportionalMonths({
    startDate: currentVacationPeriodStartDate,
    endDate: terminationDate,
  });

  const cappedMonths = Math.min(proportionalMonths, 12);

  return (salary / 12) * cappedMonths;
}