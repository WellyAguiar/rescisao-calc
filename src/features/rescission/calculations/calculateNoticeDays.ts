type CalculateNoticeDaysParams = {
  admissionDate: string;
  terminationDate: string;
};

export function calculateNoticeDays({
  admissionDate,
  terminationDate,
}: CalculateNoticeDaysParams): number {
  const admission = new Date(admissionDate);
  const termination = new Date(terminationDate);

  let completedYears = 
    termination.getUTCFullYear() - admission.getUTCFullYear();

  const hasNotCompletedAnniversaryThisYear =
    termination.getUTCMonth() < admission.getUTCMonth() ||
    (termination.getUTCMonth() === admission.getUTCMonth() &&
      termination.getUTCDate() < admission.getUTCDate());

    if (hasNotCompletedAnniversaryThisYear) {
        completedYears -= 1;
    }

    const addionalDays = Math.min(completedYears* 3, 60);

    return 30 + addionalDays;

}