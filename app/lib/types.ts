import { DateValueType } from 'react-tailwindcss-datepicker';

export type MonthType = 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';

export type PageProps = {
  searchParams: {
    query?: string;
    page?: string;
  };
};

export type DateType = DateValueType;

export const initDate: DateValueType = {
  startDate: null,
  endDate: null,
};

export type SetDate = (
  value: ((prevState: DateValueType) => DateValueType) | DateValueType,
) => void;
