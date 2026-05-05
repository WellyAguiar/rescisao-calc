import type {
  NoticeType,
  RescissionFormData,
  RescissionFormErrors,
  TerminationReason,
} from "@/features/rescission/types/rescission";

type RawRescissionFormData = {
  salary: number;
  admissionDate: string;
  terminationDate: string;
  terminationReason: string;
  noticeType: string;
};

type ValidationResult =
  | {
      isValid: true;
      data: RescissionFormData;
      errors: RescissionFormErrors;
    }
  | {
      isValid: false;
      data: null;
      errors: RescissionFormErrors;
    };

const validTerminationReasons: TerminationReason[] = [
  "dismissal_without_cause",
  "resignation",
  "dismissal_with_cause",
];

const validNoticeTypes: NoticeType[] = ["worked", "indemnified", "not_applicable"];

export function validateRescissionForm(
  rawData: RawRescissionFormData,
): ValidationResult {
  const errors: RescissionFormErrors = {};

  if (!rawData.salary || rawData.salary <= 0) {
    errors.salary = "Informe um salário maior que zero.";
  }

  if (!rawData.admissionDate) {
    errors.admissionDate = "Informe a data de admissão.";
  }

  if (!rawData.terminationDate) {
    errors.terminationDate = "Informe a data de desligamento.";
  }

  if (
    rawData.admissionDate &&
    rawData.terminationDate &&
    rawData.admissionDate > rawData.terminationDate
  ) {
    errors.terminationDate =
      "A data de desligamento deve ser posterior à admissão.";
  }

  if (!validTerminationReasons.includes(rawData.terminationReason as TerminationReason)) {
    errors.terminationReason = "Selecione o motivo da rescisão.";
  }

  if (!validNoticeTypes.includes(rawData.noticeType as NoticeType)) {
    errors.noticeType = "Selecione o tipo de aviso prévio.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      isValid: false,
      data: null,
      errors,
    };
  }

  return {
    isValid: true,
    data: {
      salary: rawData.salary,
      admissionDate: rawData.admissionDate,
      terminationDate: rawData.terminationDate,
      terminationReason: rawData.terminationReason as TerminationReason,
      noticeType: rawData.noticeType as NoticeType,
    },
    errors,
  };
}