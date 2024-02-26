import {
  format,
  parseISO,
  differenceInMinutes,
  differenceInHours,
} from "date-fns";

export const dateToString = (dateStr: string): string => {
  const now = new Date();
  const inputDate = parseISO(dateStr);

  const diffMinutes = differenceInMinutes(now, inputDate);
  if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  }

  const diffHours = differenceInHours(now, inputDate);
  if (diffHours < 24) {
    return `${diffHours}시간 전`;
  }

  return format(inputDate, "yyyy년 MM월 dd일");
};
