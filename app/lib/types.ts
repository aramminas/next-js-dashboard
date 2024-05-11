export type MonthType = 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';

export type PageProps = {
  searchParams: {
    query?: string;
    page?: string;
  };
};

export type DateType = {
  startDate: null | string;
  endDate: null | string;
};

export const initDate: DateType = {
  startDate: null,
  endDate: null,
};

export type SetDate = (
  value: ((prevState: DateType) => DateType) | DateType,
) => void;
