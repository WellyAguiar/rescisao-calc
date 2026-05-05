type CalculateProportionalMonthsParams = {
  startDate: string;
  endDate: string;
};

function getMonthKey(date: Date): string {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();

  return `${year}-${month}`;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

export function calculateProportionalMonths({
  startDate,
  endDate,
}: CalculateProportionalMonthsParams): number {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let currentYear = start.getUTCFullYear();
  let currentMonth = start.getUTCMonth();
  let proportionalMonths = 0;

  while (
    currentYear < end.getUTCFullYear() ||
    (currentYear === end.getUTCFullYear() &&
      currentMonth <= end.getUTCMonth())
  ) {
    const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);

    const monthStart =
      getMonthKey(new Date(Date.UTC(currentYear, currentMonth, 1))) ===
      getMonthKey(start)
        ? start.getUTCDate()
        : 1;

    const monthEnd =
      getMonthKey(new Date(Date.UTC(currentYear, currentMonth, 1))) ===
      getMonthKey(end)
        ? end.getUTCDate()
        : daysInCurrentMonth;

    const workedDaysInMonth = monthEnd - monthStart + 1;

    if (workedDaysInMonth >= 15) {
      proportionalMonths += 1;
    }

    currentMonth += 1;

    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear += 1;
    }
  }

  return proportionalMonths;
}