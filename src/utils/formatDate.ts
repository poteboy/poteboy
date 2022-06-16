import { format } from 'date-fns';

export const formatDateJa = (date: Date) => {
  return format(date, 'yyyy年MM月dd日');
};
