export type TerminationReason =
  | "dismissal_without_cause"
  | "resignation"
  | "dismissal_with_cause";

export type NoticeType = "worked" | "indemnified" | "not_applicable";

export type RescissionFormData = {
  salary: number;
  admissionDate: string;
  terminationDate: string;
  currentVacationPeriodStartDate: string;
  terminationReason: TerminationReason;
  noticeType: NoticeType;
};

export type RescissionCalculationResult = {
  salaryBalance: number;
  thirteenthSalary: number;
  vacationPay: number;
  vacationBonus: number;
  noticePay: number;
  total: number;
};

export type RescissionFormErrors = {
  salary?: string;
  admissionDate?: string;
  terminationDate?: string;
  currentVacationPeriodStartDate?: string;
  terminationReason?: string;
  noticeType?: string;
};