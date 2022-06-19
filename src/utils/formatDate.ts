import { format } from 'date-fns';

export const formatDateJa = (date: Date) => {
  return format(date, 'yyyy年MM月dd日');
};

export const formatDateEN = (date: Date) => {
  return format(date, 'MMM d, yyyy');
};
