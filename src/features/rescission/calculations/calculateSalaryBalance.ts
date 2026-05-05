type CalculateSalaryBalanceParams = {
  salary: number;
  terminationDate: string;
};

export function calculateSalaryBalance({
  salary,
  terminationDate,
}: CalculateSalaryBalanceParams): number {
  const dayOfTermination = new Date(terminationDate).getUTCDate();

  return (salary / 30) * dayOfTermination;
}