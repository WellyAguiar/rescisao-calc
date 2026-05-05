import { calculateProportionalMonths } from "./calculateProportionalMonths";

type CalculateThirteenthSalaryParams = {
  salary: number;
  admissionDate: string;
  terminationDate: string;
};

export function calculateThirteenthSalary({
  salary,
  admissionDate,
  terminationDate,
}: CalculateThirteenthSalaryParams): number {
  const terminationYear = new Date(terminationDate).getUTCFullYear();

  const startOfYear = `${terminationYear}-01-01`;

  const calculationStartDate =
    admissionDate > startOfYear ? admissionDate : startOfYear;

  const proportionalMonths = calculateProportionalMonths({
    startDate: calculationStartDate,
    endDate: terminationDate,
  });

  return (salary / 12) * proportionalMonths;
}