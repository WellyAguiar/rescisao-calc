type CalculateVacationBonusParams = {
  vacationPay: number;
};

export function calculateVacationBonus({
  vacationPay,
}: CalculateVacationBonusParams): number {
  return vacationPay / 3;
}