import clsx from 'clsx';
import Dropdown from '@/app/ui/basic/dropdown';
import { SetDate, DateType } from '@/app/lib/types';
import DateTimePicker from '@/app/ui/basic/date-time-picker';
import { categoriesArray, languages } from '@/app/constants';

export default function AllNewsFilters({
  show,
  date,
  setDate,
}: {
  show: boolean;
  date: DateType;
  setDate: SetDate;
}) {
  return (
    <div
      className={clsx(
        'min-w-sm relative mx-auto mt-3 flex max-w-4xl flex-col gap-2 rounded-xl bg-white px-6 shadow-2xl  transition-all  duration-1000 ease-in focus-within:border-gray-300 md:flex-row',
        {
          'h-[240px] border py-6 opacity-100': show,
          'h-[0px] overflow-hidden border-0 p-0 opacity-0': !show,
        },
      )}
    >
      <Dropdown title="categories" data={categoriesArray} isMultiple={true} />
      <Dropdown title="languages" data={languages} isMultiple={true} />
      <DateTimePicker date={date} setDate={setDate} isMultiple={true} />
    </div>
  );
}
