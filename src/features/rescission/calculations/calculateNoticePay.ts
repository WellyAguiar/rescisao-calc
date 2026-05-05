import type {
    NoticeType,
    TerminationReason,
} from "@/features/rescission/types/rescission";

import { calculateNoticeDays } from "./calculateNoticeDays";

type CalculateNoticePayParams = {
    salary: number;
    admissionDate: string;
    terminationDate: string;
    terminationReason: TerminationReason;
    noticeType: NoticeType;
};

export function calculateNoticePay({
    salary,
    admissionDate,
    terminationDate,
    terminationReason,
    noticeType
}: CalculateNoticePayParams): number {
    const shouldPayNotice = 
        noticeType === "indemnified" &&
        terminationReason === "dismissal_without_cause";

    if (!shouldPayNotice) {
        return 0;
    }

    const noticeDays = calculateNoticeDays({
        admissionDate,
        terminationDate
    });

    return (salary / 30) * noticeDays;
}