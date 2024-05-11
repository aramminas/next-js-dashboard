import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

import Checkbox from '@/app/ui/basic/checkbox';
import { SetDate, DateType } from '@/app/lib/types';
import { datepickerSeparator } from '@/app/constants';

export default function DateTimePicker({
  isMultiple,
  date,
  setDate,
}: {
  isMultiple: boolean;
  date: DateType;
  setDate: SetDate;
}) {
  const [isRange, setRange] = useState(false);

  const handleValueChange = (newValue) => {
    setDate(newValue);
  };

  return (
    <div className="flex-1">
      <label className="mb-2 flex text-xl font-medium text-gray-900 dark:text-white">
        <span className="capitalize">date</span>
        {isMultiple && (
          <Checkbox
            name={'date-time'}
            label="range"
            callback={() => setRange((prevState) => !prevState)}
          />
        )}
      </label>
      <Datepicker
        value={date}
        useRange={isRange}
        asSingle={!isRange}
        maxDate={new Date()}
        inputName="published"
        onChange={handleValueChange}
        separator={datepickerSeparator}
        inputClassName="rounded-md w-full focus:ring-0 focus:border-gray-400 focus:ring-transparent font-normal bg-gray-50 border border-gray-300 dark:bg-green-900 dark:placeholder:text-green-100"
      />
    </div>
  );
}
